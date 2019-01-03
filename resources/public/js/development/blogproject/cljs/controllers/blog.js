// Compiled by ClojureScript 1.10.439 {}
goog.provide('blogproject.cljs.controllers.blog');
goog.require('cljs.core');
goog.require('blogproject.cljc.routes');
goog.require('blogproject.cljs.xhr');
goog.require('blogproject.cljs.models.blog');
goog.require('accountant.core');
blogproject.cljs.controllers.blog.delete_blog_entry = (function blogproject$cljs$controllers$blog$delete_blog_entry(article_id){
cljs.core.reset_BANG_.call(null,blogproject.cljs.models.blog.blog_entry,null);

return blogproject.cljs.xhr.send_delete.call(null,blogproject.cljc.routes.api.call(null,new cljs.core.Keyword(null,"delete-blog-entry","delete-blog-entry",-1642424753),new cljs.core.Keyword(null,"id","id",-1388402092),article_id),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){
return accountant.core.navigate_BANG_.call(null,blogproject.cljc.routes.page.call(null,new cljs.core.Keyword(null,"blog","blog",-302707364)));
}));
});
blogproject.cljs.controllers.blog.new_blog = (function blogproject$cljs$controllers$blog$new_blog(user_id,title,content,message){
cljs.core.reset_BANG_.call(null,message,"");

return blogproject.cljs.xhr.send_post.call(null,blogproject.cljc.routes.api.call(null,new cljs.core.Keyword(null,"new-blog","new-blog",-48295651)),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"content","content",15833224),content], null),new cljs.core.Keyword(null,"success-atom","success-atom",-738572742),blogproject.cljs.models.blog.blog_entry,new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (p__10208){
var map__10209 = p__10208;
var map__10209__$1 = (((((!((map__10209 == null))))?(((((map__10209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10209):map__10209);
var body = cljs.core.get.call(null,map__10209__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return accountant.core.navigate_BANG_.call(null,blogproject.cljc.routes.page.call(null,new cljs.core.Keyword(null,"blog-entry","blog-entry",1886624995),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(body)));
}));
});
blogproject.cljs.controllers.blog.blog_entries = (function blogproject$cljs$controllers$blog$blog_entries(){
return blogproject.cljs.xhr.send_get.call(null,blogproject.cljc.routes.api.call(null,new cljs.core.Keyword(null,"blog","blog",-302707364)),new cljs.core.Keyword(null,"success-atom","success-atom",-738572742),blogproject.cljs.models.blog.all_entries);
});
blogproject.cljs.controllers.blog.blog_entry = (function blogproject$cljs$controllers$blog$blog_entry(p__10211){
var map__10212 = p__10211;
var map__10212__$1 = (((((!((map__10212 == null))))?(((((map__10212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10212):map__10212);
var id = cljs.core.get.call(null,map__10212__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.reset_BANG_.call(null,blogproject.cljs.models.blog.blog_entry,null);

return blogproject.cljs.xhr.send_get.call(null,blogproject.cljc.routes.api.call(null,new cljs.core.Keyword(null,"blog-entry","blog-entry",1886624995),new cljs.core.Keyword(null,"id","id",-1388402092),id),new cljs.core.Keyword(null,"success-atom","success-atom",-738572742),blogproject.cljs.models.blog.blog_entry,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (map__10212,map__10212__$1,id){
return (function (){
return accountant.core.navigate_BANG_.call(null,blogproject.cljc.routes.page.call(null,new cljs.core.Keyword(null,"four-o-four","four-o-four",641683456)));
});})(map__10212,map__10212__$1,id))
);
});

//# sourceMappingURL=blog.js.map
