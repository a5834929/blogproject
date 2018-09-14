(ns blogproject.clj.routes.blog
    (:require [blogproject.clj.models.sql :as sql]
              [blogproject.clj.utils.core :as u]
              [blogproject.clj.routes.account :as a]
              [clojure.set :as s]))

(defn public-view [article]
      (-> article
          (select-keys [:article-id  :user-id :title :content :date-added])
          (s/rename-keys {:article-id :id :date-added :date})))

(defn blog-entries [req]
      (let [articles (sql/all-articles)]
           {:status 200
            :body   (map public-view articles)}))

(defn blog-entry [{:keys [route-params]}]
      (let [{:keys [id]} route-params
            parsed-id (try (Long/parseLong id)
                           (catch NumberFormatException e -1))]
           (if-let [article (sql/article-by-id {:id parsed-id})]
                   {:status 200
                    :body (merge (public-view article) (a/get-full-name (:user-id article)))}
                   {:status 404})))

(defn new-blog [{:keys [body]}]
      (let [{:keys [user-id title content]} body
            parsed-user-id (java.util.UUID/fromString user-id)]
            (if (and (u/not-blank? title) (u/not-blank? content))
              (let [article (sql/insert-article {:user-id parsed-user-id
                                                            :title title
                                                            :content content})]
                    {:status 200
                     :body (public-view article)})
              {:status 404})))

(defn delete-blog-entry [{:keys [route-params]}]
      (let [{:keys [id]} route-params
            parsed-id (try (Long/parseLong id)
                           (catch NumberFormatException e -1))]
           (sql/delete-article {:id parsed-id})
           {:status 200}))

