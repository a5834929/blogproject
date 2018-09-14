(ns blogproject.clj.routes.counter
    (:require [blogproject.clj.models.sql :as sql]
              [clojure.set :as s]))

(defn public-view [counter]
      (-> counter
          (select-keys [:counter-id :counter-value :share-key])
          (s/rename-keys {:counter-id :id :counter-value :value})))

(defn get-counter [{:keys [route-params]}]
      (let [{:keys [id]} route-params
            parsed-id (try (Integer/parseInt id)
                      (catch NumberFormatException e -1))]
           (if-let [counter (sql/counter-by-id sql/dbspec {:id parsed-id})]
                   {:status 200
                    :body (public-view counter)}
                   {:status 404})))

(defn update-counter [{:keys [route-params]}]
      (let [{:keys [id new-val]} route-params
            parsed-id (try (Integer/parseInt id)
                           (catch NumberFormatException e -1))
            parsed-new-val (try (Integer/parseInt new-val)
                           (catch NumberFormatException e -1))]
           (let [counter (sql/update-counter-by-id sql/dbspec {:id parsed-id 
                                                               :new-val parsed-new-val})]
                   {:status 200
                    :body (public-view counter)})))

(defn get-share-counter [{:keys [route-params]}]
      (let [{:keys [share-key]} route-params
            parsed-share-key (java.util.UUID/fromString share-key)]
            (if-let [counter (sql/counter-by-share-key sql/dbspec {:share-key parsed-share-key})]
                    {:status 200
                     :body (public-view counter)}
                    {:status 404})))
