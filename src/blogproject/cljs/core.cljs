(ns blogproject.cljs.core
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [accountant.core :as accountant]
            [bidi.bidi :as bidi]
            [blogproject.cljc.routes :as routes]
            [blogproject.cljs.controllers.core :as controllers]
            [blogproject.cljs.views.core :as views]
            [goog.Uri])
  )

(enable-console-print!)

(defn queryData->map [q]
  (let [queryKeys (map keyword (array-seq (.getKeys q)))
        queryVals (array-seq (.getValues q))]
    (zipmap queryKeys queryVals)))

(defn on-js-reload []
      (reagent/render-component [views/layout]
                                (. js/document (getElementById "app"))))
(defn -main []
      (accountant/configure-navigation!
        {:nav-handler (fn [path]
                        (let [match (bidi/match-route routes/page-routes path)
                              current-page (:handler match)
                              route-params (:route-params match)
                              query-params (queryData->map (.getQueryData (goog.Uri.parse path)))
                              initializer (controllers/page-initializers current-page)]
                             (session/put! :route {:current-page current-page
                                                   :route-params route-params
                                                   :query-params query-params})
                             (when initializer (initializer route-params))))
         :path-exists? (fn [path]
                           (boolean (bidi/match-route routes/page-routes path)))})
      (accountant/dispatch-current!)
      (on-js-reload))

(-main)
