(ns blogproject.clj.core
  (:gen-class)
  (:require [blogproject.clj.routes.core :as r]
            [blogproject.clj.utils.core :as u]
            [blogproject.clj.models.sql :as sql]
            [environ.core :as environ]
            [immutant.web :as server]))

(def host (environ/env :host))
(def port 5000)
; (def port (environ/env :port))

(defn -main [& args]
  (sql/init!)
  (if (= "development" (environ/env :environment))
    (server/run-dmc r/app :host host :port port)
    (do
      (println "------- PORT: " port)
      (server/run r/app :host host :port port))))
