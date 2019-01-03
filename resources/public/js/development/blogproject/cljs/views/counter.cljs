(ns blogproject.cljs.views.counter
  (:require [blogproject.cljc.routes :as routes]
            [blogproject.cljs.views.components :as c]
            [blogproject.cljs.models.counter :as m]
            [blogproject.cljs.models.session :as s]
            [blogproject.cljs.controllers.counter :as cntr]
            [reagent.core :as r]))

(defn counter-component [counter-key]
      (r/create-class
        {:component-will-mount 
          (if counter-key
              #(cntr/get-share-counter counter-key)
              #(cntr/get-counter))
         
         :reagent-render 
          (fn []
           (let [{:keys [id value share-key]} @m/counter-value]
             [:div
               [:form.mw5.center
                [c/button "Increment"
                 (fn [e]
                     (.preventDefault e)
                     (cntr/increment id))]
                [:span "The current value is " value "."]
                [c/button "Decrement"
                 (fn [e]
                     (.preventDefault e)
                     (cntr/decrement id))]]
               (if (= id (:counter-id @s/session))
                [:div
                 [:p.pv2.tc "Share this link so your friends can update your counter!"]
                 [:h5.shadow-1.ph3.pv3.gray.tc "http://127.0.0.1:8080/counter?share-key="share-key]])]))}))

(defn counter [{:keys [route-params query-params]}]
      [:div.mw7.pv3.ph5.center.flex.flex-column
       [:h1 "Counter"]
       (cond (contains? query-params :share-key) [counter-component (:share-key query-params)]
             @s/session [counter-component]
             :else "Sign up and get your own counter!")])
