// Compiled by ClojureScript 1.10.439 {}
goog.provide('blogproject.cljs.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('accountant.core');
goog.require('bidi.bidi');
goog.require('blogproject.cljc.routes');
goog.require('blogproject.cljs.controllers.core');
goog.require('blogproject.cljs.views.core');
goog.require('goog.Uri');
cljs.core.enable_console_print_BANG_.call(null);
blogproject.cljs.core.queryData__GT_map = (function blogproject$cljs$core$queryData__GT_map(q){
var queryKeys = cljs.core.map.call(null,cljs.core.keyword,cljs.core.array_seq.call(null,q.getKeys()));
var queryVals = cljs.core.array_seq.call(null,q.getValues());
return cljs.core.zipmap.call(null,queryKeys,queryVals);
});
blogproject.cljs.core.on_js_reload = (function blogproject$cljs$core$on_js_reload(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.core.layout], null),document.getElementById("app"));
});
blogproject.cljs.core._main = (function blogproject$cljs$core$_main(){
accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
var match = bidi.bidi.match_route.call(null,blogproject.cljc.routes.page_routes,path);
var current_page = new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(match);
var route_params = new cljs.core.Keyword(null,"route-params","route-params",2111411055).cljs$core$IFn$_invoke$arity$1(match);
var query_params = blogproject.cljs.core.queryData__GT_map.call(null,goog.Uri.parse.call(null,path).getQueryData());
var initializer = blogproject.cljs.controllers.core.page_initializers.call(null,current_page);
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),current_page,new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params,new cljs.core.Keyword(null,"query-params","query-params",900640534),query_params], null));

if(cljs.core.truth_(initializer)){
return initializer.call(null,route_params);
} else {
return null;
}
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return cljs.core.boolean$.call(null,bidi.bidi.match_route.call(null,blogproject.cljc.routes.page_routes,path));
})], null));

accountant.core.dispatch_current_BANG_.call(null);

return blogproject.cljs.core.on_js_reload.call(null);
});
blogproject.cljs.core._main.call(null);

//# sourceMappingURL=core.js.map
