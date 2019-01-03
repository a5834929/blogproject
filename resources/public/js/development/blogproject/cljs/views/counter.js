// Compiled by ClojureScript 1.10.439 {}
goog.provide('blogproject.cljs.views.counter');
goog.require('cljs.core');
goog.require('blogproject.cljc.routes');
goog.require('blogproject.cljs.views.components');
goog.require('blogproject.cljs.models.counter');
goog.require('blogproject.cljs.models.session');
goog.require('blogproject.cljs.controllers.counter');
goog.require('reagent.core');
blogproject.cljs.views.counter.counter_component = (function blogproject$cljs$views$counter$counter_component(counter_key){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-will-mount","component-will-mount",209708855),(cljs.core.truth_(counter_key)?(function (){
return blogproject.cljs.controllers.counter.get_share_counter.call(null,counter_key);
}):(function (){
return blogproject.cljs.controllers.counter.get_counter.call(null);
})),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
var map__10234 = cljs.core.deref.call(null,blogproject.cljs.models.counter.counter_value);
var map__10234__$1 = (((((!((map__10234 == null))))?(((((map__10234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10234):map__10234);
var id = cljs.core.get.call(null,map__10234__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.call(null,map__10234__$1,new cljs.core.Keyword(null,"value","value",305978217));
var share_key = cljs.core.get.call(null,map__10234__$1,new cljs.core.Keyword(null,"share-key","share-key",-1248438663));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.mw5.center","form.mw5.center",-1033253394),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.components.button,"Increment",((function (map__10234,map__10234__$1,id,value,share_key){
return (function (e){
e.preventDefault();

return blogproject.cljs.controllers.counter.increment.call(null,id);
});})(map__10234,map__10234__$1,id,value,share_key))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"The current value is ",value,"."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.components.button,"Decrement",((function (map__10234,map__10234__$1,id,value,share_key){
return (function (e){
e.preventDefault();

return blogproject.cljs.controllers.counter.decrement.call(null,id);
});})(map__10234,map__10234__$1,id,value,share_key))
], null)], null),((cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"counter-id","counter-id",-818947584).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,blogproject.cljs.models.session.session))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.pv2.tc","p.pv2.tc",-912033479),"Share this link so your friends can update your counter!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.shadow-1.ph3.pv3.gray.tc","h5.shadow-1.ph3.pv3.gray.tc",-1903490353),"http://127.0.0.1:8080/counter?share-key=",share_key], null)], null):null)], null);
})], null));
});
blogproject.cljs.views.counter.counter = (function blogproject$cljs$views$counter$counter(p__10236){
var map__10237 = p__10236;
var map__10237__$1 = (((((!((map__10237 == null))))?(((((map__10237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10237):map__10237);
var route_params = cljs.core.get.call(null,map__10237__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
var query_params = cljs.core.get.call(null,map__10237__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mw7.pv3.ph5.center.flex.flex-column","div.mw7.pv3.ph5.center.flex.flex-column",-1401158459),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Counter"], null),((cljs.core.contains_QMARK_.call(null,query_params,new cljs.core.Keyword(null,"share-key","share-key",-1248438663)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.counter.counter_component,new cljs.core.Keyword(null,"share-key","share-key",-1248438663).cljs$core$IFn$_invoke$arity$1(query_params)], null):(cljs.core.truth_(cljs.core.deref.call(null,blogproject.cljs.models.session.session))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.counter.counter_component], null):"Sign up and get your own counter!"
))], null);
});

//# sourceMappingURL=counter.js.map
