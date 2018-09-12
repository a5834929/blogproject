(ns blogproject.cljs.controllers.core
  (:require [blogproject.cljs.controllers.blog :as blog]
            [blogproject.cljs.controllers.counter :as counter]))

(def page-initializers
  {:blog-entry blog/blog-entry
   :blog blog/blog-entries
   :counter counter/get-counter})
