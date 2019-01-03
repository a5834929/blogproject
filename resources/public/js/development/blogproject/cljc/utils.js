// Compiled by ClojureScript 1.10.439 {}
goog.provide('blogproject.cljc.utils');
goog.require('cljs.core');
goog.require('bidi.bidi');
blogproject.cljc.utils.router = (function blogproject$cljc$utils$router(var_args){
var args__4647__auto__ = [];
var len__4641__auto___9913 = arguments.length;
var i__4642__auto___9914 = (0);
while(true){
if((i__4642__auto___9914 < len__4641__auto___9913)){
args__4647__auto__.push((arguments[i__4642__auto___9914]));

var G__9915 = (i__4642__auto___9914 + (1));
i__4642__auto___9914 = G__9915;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return blogproject.cljc.utils.router.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

blogproject.cljc.utils.router.cljs$core$IFn$_invoke$arity$variadic = (function (root_path,route_defs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentArrayMap.createAsIfByAssoc([root_path,cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,route_defs),true,new cljs.core.Keyword(null,"four-o-four","four-o-four",641683456)])], null);
});

blogproject.cljc.utils.router.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
blogproject.cljc.utils.router.cljs$lang$applyTo = (function (seq9911){
var G__9912 = cljs.core.first.call(null,seq9911);
var seq9911__$1 = cljs.core.next.call(null,seq9911);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9912,seq9911__$1);
});

blogproject.cljc.utils.with_request_method = (function blogproject$cljc$utils$with_request_method(method){
return (function() {
var G__9916 = null;
var G__9916__1 = (function (name){
return new cljs.core.PersistentArrayMap(null, 1, ["",cljs.core.PersistentArrayMap.createAsIfByAssoc([method,new cljs.core.PersistentArrayMap(null, 1, ["",name], null)])], null);
});
var G__9916__2 = (function (pattern,name){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([pattern,cljs.core.PersistentArrayMap.createAsIfByAssoc([method,new cljs.core.PersistentArrayMap(null, 1, ["",name], null)])]);
});
G__9916 = function(pattern,name){
switch(arguments.length){
case 1:
return G__9916__1.call(this,pattern);
case 2:
return G__9916__2.call(this,pattern,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__9916.cljs$core$IFn$_invoke$arity$1 = G__9916__1;
G__9916.cljs$core$IFn$_invoke$arity$2 = G__9916__2;
return G__9916;
})()
});
blogproject.cljc.utils.GET = blogproject.cljc.utils.with_request_method.call(null,new cljs.core.Keyword(null,"get","get",1683182755));
blogproject.cljc.utils.POST = blogproject.cljc.utils.with_request_method.call(null,new cljs.core.Keyword(null,"post","post",269697687));
blogproject.cljc.utils.PUT = blogproject.cljc.utils.with_request_method.call(null,new cljs.core.Keyword(null,"put","put",1299772570));
blogproject.cljc.utils.PATCH = blogproject.cljc.utils.with_request_method.call(null,new cljs.core.Keyword(null,"patch","patch",380775109));
blogproject.cljc.utils.DELETE = blogproject.cljc.utils.with_request_method.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620));
blogproject.cljc.utils.context = (function blogproject$cljc$utils$context(var_args){
var args__4647__auto__ = [];
var len__4641__auto___9919 = arguments.length;
var i__4642__auto___9920 = (0);
while(true){
if((i__4642__auto___9920 < len__4641__auto___9919)){
args__4647__auto__.push((arguments[i__4642__auto___9920]));

var G__9921 = (i__4642__auto___9920 + (1));
i__4642__auto___9920 = G__9921;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return blogproject.cljc.utils.context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

blogproject.cljc.utils.context.cljs$core$IFn$_invoke$arity$variadic = (function (root_path,route_defs){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([root_path,cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,route_defs)]);
});

blogproject.cljc.utils.context.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
blogproject.cljc.utils.context.cljs$lang$applyTo = (function (seq9917){
var G__9918 = cljs.core.first.call(null,seq9917);
var seq9917__$1 = cljs.core.next.call(null,seq9917);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9918,seq9917__$1);
});

blogproject.cljc.utils.page = (function blogproject$cljc$utils$page(pattern,name){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([pattern,name]);
});

//# sourceMappingURL=utils.js.map
