(ns blogproject.cljs.views.core
  (:require [blogproject.cljc.routes :as routes]
            [blogproject.cljs.views.blog :as blog]
            [blogproject.cljs.views.account :as account]
            [blogproject.cljs.views.counter :as counter]
            [blogproject.cljs.views.components :as c]
            [blogproject.cljs.models.session :as ms]
            [reagent.session :as session]))

(defn index [params]
      [:div.mw7.pv3.ph5.center
       [:h1 (c/welcome-title)]
       [:p
        "Brevity's default styles are pretty basic.  To tailor them to your project, see "
        [:a {:href "https://tachyons.io/docs/"} "the tachyons documentation"] "."]])

(defn four-o-four [params]
      [:div.mw7.pv3.ph5.center
       [:h1 "404: Page not found"]
       [:p ":("]])

(def views
  {:index index
   :login account/login
   :signup account/signup
   :four-o-four four-o-four
   :blog blog/blog
   :new-blog blog/new-blog
   :blog-entry blog/blog-entry
   :counter counter/counter})

(defn page-contents [route]
      (let [page (:current-page route)
            route-params (:route-params route)
            query-params (:query-params route)]
           [:div.mw8.pv3.ph5.center
            [(views page) {:route-params route-params
                           :query-params query-params}]]))

(defn layout []
      (fn []
          (let [route (session/get :route)]
               [:div
                [c/header]
                ^{:key route} [page-contents route]
                [c/footer]])))
