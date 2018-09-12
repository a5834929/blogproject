(ns blogproject.cljs.models.counter
  (:require [reagent.core :as r]))

(def counter-value (r/atom nil))