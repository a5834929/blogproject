(ns blogproject.clj.routes.core
  (:require [ring.middleware.json :as json]
            [ring.middleware.file :as file]
            [ring.middleware.content-type :as ct]
            [ring.middleware.resource :as resource]
            [ring.middleware.params :as params]
            [blogproject.clj.roles.core :as roles]
            [blogproject.clj.utils.core :as u]
            [blogproject.clj.routes.middleware :as middleware]
            [blogproject.clj.routes.blog :as blog]
            [blogproject.clj.routes.account :as account]
            [blogproject.clj.routes.counter :as counter]
            [blogproject.clj.views.core :as views]
            [blogproject.cljc.routes :as routing]
            [blogproject.cljc.validators :as v]
            [compojure.core :as r]
            [compojure.route :as route]
            [clojure.string :as s]
            [environ.core :as environ]))

(def api-views
  {:login account/login
   :signup account/signup
   :logout account/logout
   :get-account-info account/get-account-info
   :blog blog/blog-entries
   :blog-entry blog/blog-entry
   :new-blog blog/new-blog
   :delete-blog-entry blog/delete-blog-entry
   :get-counter counter/get-counter
   :get-share-counter counter/get-share-counter
   :update-counter counter/update-counter})

(defn page-handler [request handler-name]
      {:status  200
       :headers {"Content-Type" "text/html"}
       :body    views/index})

(defn validation-errors [body route]
      (when-let [validator (v/validators route)]
                (->> validator
                     (map
                       (fn [[field field-validator]]
                           [field (field-validator (body field))]))
                     (remove (fn [[field result]] (nil? result)))
                     (into {}))))

(defn api-view [{:keys [body] :as request} handler-name]
      (when-let [view-fn (api-views handler-name)]
                (let [errors (validation-errors body handler-name)]
                     (if (empty? errors)
                       (view-fn request)
                       {:status 400
                        :body {:errors errors}}))))

(r/defroutes routes
             (route/not-found {:status  404
                               :headers {"Content-Type" "text/html"}
                               :body    views/index}))

(def app
  (-> routes
      (middleware/wrap-bidi routing/page-routes page-handler)
      (middleware/wrap-bidi routing/api-routes api-view)
      (resource/wrap-resource "public")
      (params/wrap-params)
      (json/wrap-json-response)
      (json/wrap-json-body {:keywords? true})
      (roles/wrap-security)
      (ct/wrap-content-type)))
