(ns blogproject.cljs.views.counter
  (:require [blogproject.cljc.routes :as routes]
            [blogproject.cljs.views.components :as c]
            [blogproject.cljs.models.counter :as m]
            [blogproject.cljs.models.session :as s]
            [blogproject.cljs.controllers.counter :as cntr]
            [reagent.core :as r]))

(defn counter-component []
      (r/create-class
        {:component-will-mount 
          cntr/get-counter
         
         :reagent-render 
          (fn []
           (let [{:keys [id value share-key]} @m/counter-value]
             [:div
               [:form.mw5.center
                [c/button "Increment"
                 (fn [e]
                     (.preventDefault e)
                     (cntr/increment id value))]
                [:span "The current value is " value "."]
                [c/button "Decrement"
                 (fn [e]
                     (.preventDefault e)
                     (cntr/decrement id value))]]
               [:p.pv2.tc "Share this link so your friends can update your counter!"]
               [:h5.shadow-1.ph3.pv3.gray.tc "http://127.0.0.1:8080/counter?share_key="share-key]]))}))

(defn counter []
      [:div.mw7.pv3.ph5.center.flex.flex-column
       [:h1 "Counter"]
       (if @s/session
        [counter-component]
        "Sign up and get your own counter!")])
