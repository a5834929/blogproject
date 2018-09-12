(ns blogproject.cljc.routes
    (:require [bidi.bidi :as bidi]
              [blogproject.cljc.utils :as u]))

(def page-routes
  (u/router "/"
            (u/page "" :index)
            (u/page "login" :login)
            (u/page "signup" :signup)
            (u/page "counter" :counter)
            (u/context "blog"
                       (u/page "/" :blog)
                       (u/page "/new" :new-blog)
                       (u/page ["/entry/" :id] :blog-entry))))

(def api-routes
  (u/router "/api/v1"
            (u/context "/session"
                       (u/POST :login)
                       (u/POST "/signup/" :signup)
                       (u/GET :get-account-info)
                       (u/DELETE :logout))
            (u/context "/blog"
                       (u/GET "/" :blog)
                       (u/GET ["/entry/" :id] :blog-entry))
                       (u/POST "/new/entry" :new-blog)
                       (u/DELETE ["/entry/" :id] :delete-blog-entry)
            (u/context "/counter"
                       (u/GET ["/" :id] :get-counter)
                       (u/PUT ["/" :id "/update/" :new-val] :update-counter))))

(def page (partial bidi/path-for page-routes))
(def api (partial bidi/path-for api-routes))
