// Compiled by ClojureScript 1.10.439 {}
goog.provide('blogproject.cljs.controllers.counter');
goog.require('cljs.core');
goog.require('blogproject.cljc.routes');
goog.require('blogproject.cljs.xhr');
goog.require('blogproject.cljs.models.counter');
goog.require('blogproject.cljs.models.session');
blogproject.cljs.controllers.counter.get_share_counter = (function blogproject$cljs$controllers$counter$get_share_counter(share_key){
cljs.core.reset_BANG_.call(null,blogproject.cljs.models.counter.counter_value,null);

return blogproject.cljs.xhr.send_get.call(null,blogproject.cljc.routes.api.call(null,new cljs.core.Keyword(null,"get-share-counter","get-share-counter",-367501839),new cljs.core.Keyword(null,"share-key","share-key",-1248438663),share_key),new cljs.core.Keyword(null,"success-atom","success-atom",-738572742),blogproject.cljs.models.counter.counter_value);
});
blogproject.cljs.controllers.counter.get_counter = (function blogproject$cljs$controllers$counter$get_counter(){
cljs.core.reset_BANG_.call(null,blogproject.cljs.models.counter.counter_value,null);

if(cljs.core.truth_(cljs.core.deref.call(null,blogproject.cljs.models.session.session))){
return blogproject.cljs.xhr.send_get.call(null,blogproject.cljc.routes.api.call(null,new cljs.core.Keyword(null,"get-counter","get-counter",-947296024),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"counter-id","counter-id",-818947584).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,blogproject.cljs.models.session.session))),new cljs.core.Keyword(null,"success-atom","success-atom",-738572742),blogproject.cljs.models.counter.counter_value);
} else {
return null;
}
});
blogproject.cljs.controllers.counter.increment = (function blogproject$cljs$controllers$counter$increment(id){
return blogproject.cljs.xhr.send_put.call(null,blogproject.cljc.routes.api.call(null,new cljs.core.Keyword(null,"update-counter","update-counter",-70438766)),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"change","change",-1163046502),(1)], null),new cljs.core.Keyword(null,"success-atom","success-atom",-738572742),blogproject.cljs.models.counter.counter_value);
});
blogproject.cljs.controllers.counter.decrement = (function blogproject$cljs$controllers$counter$decrement(id){
return blogproject.cljs.xhr.send_put.call(null,blogproject.cljc.routes.api.call(null,new cljs.core.Keyword(null,"update-counter","update-counter",-70438766)),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"change","change",-1163046502),(-1)], null),new cljs.core.Keyword(null,"success-atom","success-atom",-738572742),blogproject.cljs.models.counter.counter_value);
});

//# sourceMappingURL=counter.js.map
