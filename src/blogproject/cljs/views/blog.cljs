(ns blogproject.cljs.views.blog
  (:require [reagent.core :as r]
            [blogproject.cljc.routes :as routes]
            [blogproject.cljs.views.components :as c]
            [blogproject.cljs.models.blog :as b]
            [blogproject.cljs.models.session :as s]
            [blogproject.cljs.controllers.blog :as cb]))

(defn new-blog []
      (if @s/session
        (let [title (r/atom "")
              content (r/atom "")
              message (r/atom "")
              user-id (:user-id @s/session)]
              (fn []
                  [:div.mw7.pv3.ph5.center
                   [:h1 "New Blog"]
                   [:form.mw8.center
                    [:div.tc.bg-washed-red.dark-red @message]
                    [c/input :label-text "Title" :id :title :type :title :value title]
                    [:div.mv1.cf.h5
                      (c/wrap-label "Content" :content)
                      [:textarea.w-100.h-100
                        {:value @content
                         :on-change #(reset! content (.. % -target -value))}]]
                    [:div.mw4.mv5.cf.center
                      [c/button "Submit"
                        (fn [e]
                            (.preventDefault e)
                            (cb/new-blog user-id @title @content message))]]]
                   [:a {:href (routes/page :blog)} "Back to Blog"]]))
        [:div.mw7.pv3.ph5.center
          [:h1 "New Blog"]
          "Sign up or log in to start writing blogs!"
          [:div
            [:a {:href (routes/page :blog)} "Back to Blog"]]]))

(defn blog-title[]
      (if @s/session
          [:h1 "Blog"
            [:div.f6.link.dim.ba.ph3.pv2.mb2.dib.black.fr
              [:a {:href (routes/page :new-blog)} "New Blog"]]]
          [:h1 "Blog"]))

(defn blog []
      [:div.mw7.pv3.ph5.center
       (blog-title)
       (if @b/all-entries
         [:div (for [{:keys [id title date]} @b/all-entries]
                    ^{:key id}
                    [:article.pv3.bt.bb.b--black-10.ph3.ph0-l
                     [:a {:href (routes/page :blog-entry :id id)} title]
                     [:time.f6.ttu.tracked.gray.fr date]])]
         [c/loading-spinner])])

(defn delete-blog [article-id]
      [:div.mw4
       [:br]
       [c/button "Delete"
        (fn [e]
            (.preventDefault e)
            (cb/delete-blog-entry article-id))]])

(defn blog-entry []
      (let [{:keys [id user-id title content date full-name]} @b/blog-entry]
           [:article.cf.ph2.ph8-ns.pv5
            [:header.fn.fl-ns.w-40-ns.pr4-ns
              [:h1.mb3.mt0.lh-title title]
              [:time.f6.ttu.tracked.gray (or date "")]
              [:br]
              [:time.f6.ttu.tracked.gray (or full-name "")]
              (if (and @s/session (= user-id (:user-id @s/session)))
                  [delete-blog id])
              [:br]
              [:br]
              [:a {:href (routes/page :blog)} "Back to Blog"]]
            [:div.fn.fl-ns.w-60-ns
              [:p.lh-copy.measure.mt4.mt0-ns (or content "")]]]))
