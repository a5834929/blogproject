(ns blogproject.cljs.controllers.blog
  (:require [blogproject.cljc.routes :as routes]
            [blogproject.cljs.xhr :as xhr]
            [blogproject.cljs.models.blog :as b]
            [accountant.core :as accountant]))

(defn delete-blog-entry [article-id]
      (reset! b/blog-entry nil)
      (xhr/send-delete
        (routes/api :delete-blog-entry :id article-id)
        :on-success #(accountant/navigate! (routes/page :blog))))

(defn new-blog [user-id title content message]
      (reset! message "")
      (xhr/send-post
        (routes/api :new-blog)
        :data {:user-id user-id :title title :content content}
        :success-atom b/blog-entry
        :on-success
          (fn [{:keys [body]}] 
            (accountant/navigate! (routes/page :blog-entry :id (:id body))))))

(defn blog-entries []
      (xhr/send-get
        (routes/api :blog)
        :success-atom b/all-entries))

(defn blog-entry [{:keys [id]}]
      (reset! b/blog-entry nil)
      (xhr/send-get
        (routes/api :blog-entry :id id)
        :success-atom b/blog-entry
        :on-error #(accountant/navigate! (routes/page :four-o-four))))
