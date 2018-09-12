(ns blogproject.cljs.controllers.counter
  (:require [blogproject.cljc.routes :as routes]
            [blogproject.cljs.xhr :as xhr]
            [blogproject.cljs.models.counter :as m]
            [blogproject.cljs.models.session :as s]))

(defn get-counter []
      (reset! m/counter-value nil)
      (if @s/session
          (xhr/send-get
            (routes/api :get-counter :id (:counter-id @s/session))
            :success-atom m/counter-value)
          (xhr/send-get
            (routes/api :get-counter :id 0)
            :success-atom m/counter-value)))

(defn increment [id value]
      (xhr/send-put
        (routes/api :update-counter :id id :new-val (inc value))
        :success-atom m/counter-value))

(defn decrement [id value]
      (xhr/send-put
        (routes/api :update-counter :id id :new-val (dec value))
        :success-atom m/counter-value))