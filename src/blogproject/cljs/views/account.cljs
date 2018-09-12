(ns blogproject.cljs.views.account
  (:require [reagent.core :as r]
            [blogproject.cljs.controllers.session :as s]
            [blogproject.cljc.routes :as routes]
            [blogproject.cljs.xhr :as xhr]
            [blogproject.cljs.views.components :as c]))

(defn login []
      (let [email (r/atom "")
            password (r/atom "")
            show-kiwi-bird (r/atom false)
            message (r/atom "")]
           (fn []
               [:form.mw5.center
                [:div @message]
                [c/input :label-text "Email Address" :id :email :type :email :value email]
                [c/input :label-text "Password" :id :password :type :password :value password]
                [c/input
                 ; This is just an example to show that you can easily create a labelled checkbox.
                 :label-text "Show a kiwi bird?"
                 :id :show-kiwi-bird
                 :type :checkbox
                 :value show-kiwi-bird]
                (when @show-kiwi-bird
                      [:div.tr.h1
                       [:i.fas.fa-kiwi-bird.fr.mv2.green]])
                [c/button "Login"
                 (fn [e]
                     (.preventDefault e)
                     (s/login @email @password message))]])))

(defn signup []
      (let [full-name (r/atom "")
            email (r/atom "")
            password (r/atom "")
            message (r/atom "")]
           (fn []
               [:form.mw5.center
                [:div @message]
                [c/input :label-text "Name" :id :full-name :type :full-name :value full-name]
                [c/input :label-text "Email Address" :id :email :type :email :value email]
                [c/input :label-text "Password" :id :password :type :password :value password]
                [c/button "Sign Up"
                 (fn [e]
                     (.preventDefault e)
                     (s/signup @full-name @email @password message))]])))
