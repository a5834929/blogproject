// Compiled by ClojureScript 1.10.439 {}
goog.provide('blogproject.cljs.views.core');
goog.require('cljs.core');
goog.require('blogproject.cljc.routes');
goog.require('blogproject.cljs.views.blog');
goog.require('blogproject.cljs.views.account');
goog.require('blogproject.cljs.views.counter');
goog.require('blogproject.cljs.views.components');
goog.require('blogproject.cljs.models.session');
goog.require('reagent.session');
blogproject.cljs.views.core.index = (function blogproject$cljs$views$core$index(params){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mw7.pv3.ph5.center","div.mw7.pv3.ph5.center",-896506022),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),blogproject.cljs.views.components.welcome_title.call(null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Brevity's default styles are pretty basic.  To tailor them to your project, see ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://tachyons.io/docs/"], null),"the tachyons documentation"], null),"."], null)], null);
});
blogproject.cljs.views.core.four_o_four = (function blogproject$cljs$views$core$four_o_four(params){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mw7.pv3.ph5.center","div.mw7.pv3.ph5.center",-896506022),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"404: Page not found"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),":("], null)], null);
});
blogproject.cljs.views.core.views = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"index","index",-1531685915),blogproject.cljs.views.core.index,new cljs.core.Keyword(null,"login","login",55217519),blogproject.cljs.views.account.login,new cljs.core.Keyword(null,"signup","signup",1961016747),blogproject.cljs.views.account.signup,new cljs.core.Keyword(null,"four-o-four","four-o-four",641683456),blogproject.cljs.views.core.four_o_four,new cljs.core.Keyword(null,"blog","blog",-302707364),blogproject.cljs.views.blog.blog,new cljs.core.Keyword(null,"new-blog","new-blog",-48295651),blogproject.cljs.views.blog.new_blog,new cljs.core.Keyword(null,"blog-entry","blog-entry",1886624995),blogproject.cljs.views.blog.blog_entry,new cljs.core.Keyword(null,"counter","counter",804008177),blogproject.cljs.views.counter.counter], null);
blogproject.cljs.views.core.page_contents = (function blogproject$cljs$views$core$page_contents(route){
var page = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(route);
var route_params = new cljs.core.Keyword(null,"route-params","route-params",2111411055).cljs$core$IFn$_invoke$arity$1(route);
var query_params = new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(route);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mw8.pv3.ph5.center","div.mw8.pv3.ph5.center",283249610),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.core.views.call(null,page),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params,new cljs.core.Keyword(null,"query-params","query-params",900640534),query_params], null)], null)], null);
});
blogproject.cljs.views.core.layout = (function blogproject$cljs$views$core$layout(){
return (function (){
var route = reagent.session.get.call(null,new cljs.core.Keyword(null,"route","route",329891309));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.components.header], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.core.page_contents,route], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),route], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.components.footer], null)], null);
});
});

//# sourceMappingURL=core.js.map
