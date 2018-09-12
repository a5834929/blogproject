(ns blogproject.cljs.controllers.session
  (:require [blogproject.cljc.routes :as routes]
            [blogproject.cljs.xhr :as xhr]
            [blogproject.cljs.models.session :as s]
            [blogproject.cljs.models.counter :as c]
            [reagent.cookies :as cookies]
            [accountant.core :as accountant]))

(defn successful-login [{:keys [body]}]
      (let [{:keys [token user]} body]
           (cookies/set! :brevity-token token {:path "/"})
           (accountant/navigate! (routes/page :index))
           (xhr/send-get (routes/api :get-account-info)
                         :success-atom s/session)))

(defn login [email password message]
      (reset! message "Logging in...")
      (xhr/send-post
        (routes/api :login)
        :data {:email email :password password}
        :on-success successful-login
        :on-error #(reset! message "Invalid email or password.")))

(defn signup [full-name email password message]
      (reset! message "Creating account...")
      (xhr/send-post
        (routes/api :signup)
        :data {:full-name full-name :email email :password password}
        :on-success #(login email password message)
        :on-error #(reset! message "Invalid email or password.")))

(defn logout []
      (xhr/send-delete
        (routes/api :logout)
        :data @s/session
        :on-success
        (fn []
            (cookies/set! :brevity-token "" {:path "/"})
            (reset! s/session nil)
            (reset! c/counter-value nil)
            (accountant/navigate! (routes/page :index)))))
