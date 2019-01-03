(ns blogproject.cljs.controllers.counter
  (:require [blogproject.cljc.routes :as routes]
            [blogproject.cljs.xhr :as xhr]
            [blogproject.cljs.models.counter :as m]
            [blogproject.cljs.models.session :as s]))

(defn get-share-counter [share-key]
      (reset! m/counter-value nil)
      (xhr/send-get
        (routes/api :get-share-counter :share-key share-key)
        :success-atom m/counter-value))

(defn get-counter []
      (reset! m/counter-value nil)
      (if @s/session
          (xhr/send-get
            (routes/api :get-counter :id (:counter-id @s/session))
            :success-atom m/counter-value)))

(defn increment [id]
      (xhr/send-put
        (routes/api :update-counter)
        :data {:id id :change 1}
        :success-atom m/counter-value))

(defn decrement [id]
      (xhr/send-put
        (routes/api :update-counter)
        :data {:id id :change -1}
        :success-atom m/counter-value))
