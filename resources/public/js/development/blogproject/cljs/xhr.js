// Compiled by ClojureScript 1.10.439 {}
goog.provide('blogproject.cljs.xhr');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('reagent.core');
goog.require('reagent.cookies');
goog.require('cljs.core.async');
goog.require('blogproject.cljc.routes');
blogproject.cljs.xhr.auth_header = (function blogproject$cljs$xhr$auth_header(){
var temp__5718__auto__ = reagent.cookies.get.call(null,new cljs.core.Keyword(null,"brevity-token","brevity-token",264100573));
if(cljs.core.truth_(temp__5718__auto__)){
var token = temp__5718__auto__;
return new cljs.core.PersistentArrayMap(null, 1, ["Authorization",["Token ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
blogproject.cljs.xhr.simple_xhr = (function blogproject$cljs$xhr$simple_xhr(var_args){
var args__4647__auto__ = [];
var len__4641__auto___10103 = arguments.length;
var i__4642__auto___10104 = (0);
while(true){
if((i__4642__auto___10104 < len__4641__auto___10103)){
args__4647__auto__.push((arguments[i__4642__auto___10104]));

var G__10105 = (i__4642__auto___10104 + (1));
i__4642__auto___10104 = G__10105;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return blogproject.cljs.xhr.simple_xhr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

blogproject.cljs.xhr.simple_xhr.cljs$core$IFn$_invoke$arity$variadic = (function (method,url,p__9999){
var map__10000 = p__9999;
var map__10000__$1 = (((((!((map__10000 == null))))?(((((map__10000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10000):map__10000);
var data = cljs.core.get.call(null,map__10000__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var on_success = cljs.core.get.call(null,map__10000__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__10000__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var success_atom = cljs.core.get.call(null,map__10000__$1,new cljs.core.Keyword(null,"success-atom","success-atom",-738572742));
var error_atom = cljs.core.get.call(null,map__10000__$1,new cljs.core.Keyword(null,"error-atom","error-atom",1742220985));
var query_params = cljs.core.get.call(null,map__10000__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var c__5300__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5300__auto__,map__10000,map__10000__$1,data,on_success,on_error,success_atom,error_atom,query_params){
return (function (){
var f__5301__auto__ = (function (){var switch__5133__auto__ = ((function (c__5300__auto__,map__10000,map__10000__$1,data,on_success,on_error,success_atom,error_atom,query_params){
return (function (state_10061){
var state_val_10062 = (state_10061[(1)]);
if((state_val_10062 === (7))){
var state_10061__$1 = state_10061;
var statearr_10063_10106 = state_10061__$1;
(statearr_10063_10106[(2)] = false);

(statearr_10063_10106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10062 === (20))){
var inst_10046 = (state_10061[(2)]);
var state_10061__$1 = state_10061;
var statearr_10064_10107 = state_10061__$1;
(statearr_10064_10107[(2)] = inst_10046);

(statearr_10064_10107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10062 === (1))){
var inst_10003 = [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_10004 = blogproject.cljs.xhr.auth_header.call(null);
var inst_10005 = [method,url,data,query_params,inst_10004];
var inst_10006 = cljs.core.PersistentHashMap.fromArrays(inst_10003,inst_10005);
var inst_10007 = cljs_http.client.request.call(null,inst_10006);
var state_10061__$1 = state_10061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10061__$1,(2),inst_10007);
} else {
if((state_val_10062 === (24))){
var inst_10032 = (state_10061[(7)]);
var inst_10054 = cljs.core.reset_BANG_.call(null,error_atom,inst_10032);
var state_10061__$1 = state_10061;
var statearr_10065_10108 = state_10061__$1;
(statearr_10065_10108[(2)] = inst_10054);

(statearr_10065_10108[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10062 === (4))){
var state_10061__$1 = state_10061;
var statearr_10066_10109 = state_10061__$1;
(statearr_10066_10109[(2)] = false);

(statearr_10066_10109[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10062 === (15))){
var inst_10009 = (state_10061[(8)]);
var inst_10038 = on_success.call(null,inst_10009);
var state_10061__$1 = state_10061;
var statearr_10067_10110 = state_10061__$1;
(statearr_10067_10110[(2)] = inst_10038);

(statearr_10067_10110[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10062 === (21))){
var inst_10009 = (state_10061[(8)]);
var inst_10049 = on_error.call(null,inst_10009);
var state_10061__$1 = state_10061;
var statearr_10068_10111 = state_10061__$1;
(statearr_10068_10111[(2)] = inst_10049);

(statearr_10068_10111[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10062 === (13))){
var state_10061__$1 = state_10061;
if(cljs.core.truth_(on_error)){
var statearr_10069_10112 = state_10061__$1;
(statearr_10069_10112[(1)] = (21));

} else {
var statearr_10070_10113 = state_10061__$1;
(statearr_10070_10113[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10062 === (22))){
var state_10061__$1 = state_10061;
var statearr_10071_10114 = state_10061__$1;
(statearr_10071_10114[(2)] = null);

(statearr_10071_10114[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10062 === (6))){
var state_10061__$1 = state_10061;
var statearr_10072_10115 = state_10061__$1;
(statearr_10072_10115[(2)] = true);

(statearr_10072_10115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10062 === (25))){
var state_10061__$1 = state_10061;
var statearr_10073_10116 = state_10061__$1;
(statearr_10073_10116[(2)] = null);

(statearr_10073_10116[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10062 === (17))){
var inst_10041 = (state_10061[(2)]);
var state_10061__$1 = (function (){var statearr_10074 = state_10061;
(statearr_10074[(9)] = inst_10041);

return statearr_10074;
})();
if(cljs.core.truth_(success_atom)){
var statearr_10075_10117 = state_10061__$1;
(statearr_10075_10117[(1)] = (18));

} else {
var statearr_10076_10118 = state_10061__$1;
(statearr_10076_10118[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10062 === (3))){
var inst_10009 = (state_10061[(8)]);
var inst_10014 = inst_10009.cljs$lang$protocol_mask$partition0$;
var inst_10015 = (inst_10014 & (64));
var inst_10016 = inst_10009.cljs$core$ISeq$;
var inst_10017 = (cljs.core.PROTOCOL_SENTINEL === inst_10016);
var inst_10018 = ((inst_10015) || (inst_10017));
var state_10061__$1 = state_10061;
if(cljs.core.truth_(inst_10018)){
var statearr_10077_10119 = state_10061__$1;
(statearr_10077_10119[(1)] = (6));

} else {
var statearr_10078_10120 = state_10061__$1;
(statearr_10078_10120[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10062 === (12))){
var state_10061__$1 = state_10061;
if(cljs.core.truth_(on_success)){
var statearr_10079_10121 = state_10061__$1;
(statearr_10079_10121[(1)] = (15));

} else {
var statearr_10080_10122 = state_10061__$1;
(statearr_10080_10122[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10062 === (2))){
var inst_10009 = (state_10061[(8)]);
var inst_10009__$1 = (state_10061[(2)]);
var inst_10011 = (inst_10009__$1 == null);
var inst_10012 = cljs.core.not.call(null,inst_10011);
var state_10061__$1 = (function (){var statearr_10081 = state_10061;
(statearr_10081[(8)] = inst_10009__$1);

return statearr_10081;
})();
if(inst_10012){
var statearr_10082_10123 = state_10061__$1;
(statearr_10082_10123[(1)] = (3));

} else {
var statearr_10083_10124 = state_10061__$1;
(statearr_10083_10124[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10062 === (23))){
var inst_10052 = (state_10061[(2)]);
var state_10061__$1 = (function (){var statearr_10084 = state_10061;
(statearr_10084[(10)] = inst_10052);

return statearr_10084;
})();
if(cljs.core.truth_(error_atom)){
var statearr_10085_10125 = state_10061__$1;
(statearr_10085_10125[(1)] = (24));

} else {
var statearr_10086_10126 = state_10061__$1;
(statearr_10086_10126[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10062 === (19))){
var state_10061__$1 = state_10061;
var statearr_10087_10127 = state_10061__$1;
(statearr_10087_10127[(2)] = null);

(statearr_10087_10127[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10062 === (11))){
var inst_10030 = (state_10061[(2)]);
var inst_10031 = cljs.core.get.call(null,inst_10030,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_10032 = cljs.core.get.call(null,inst_10030,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_10033 = ((200) <= inst_10031);
var inst_10034 = (inst_10031 <= (299));
var inst_10035 = ((inst_10033) && (inst_10034));
var state_10061__$1 = (function (){var statearr_10088 = state_10061;
(statearr_10088[(7)] = inst_10032);

return statearr_10088;
})();
if(cljs.core.truth_(inst_10035)){
var statearr_10089_10128 = state_10061__$1;
(statearr_10089_10128[(1)] = (12));

} else {
var statearr_10090_10129 = state_10061__$1;
(statearr_10090_10129[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10062 === (9))){
var inst_10009 = (state_10061[(8)]);
var inst_10027 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10009);
var state_10061__$1 = state_10061;
var statearr_10091_10130 = state_10061__$1;
(statearr_10091_10130[(2)] = inst_10027);

(statearr_10091_10130[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10062 === (5))){
var inst_10025 = (state_10061[(2)]);
var state_10061__$1 = state_10061;
if(cljs.core.truth_(inst_10025)){
var statearr_10092_10131 = state_10061__$1;
(statearr_10092_10131[(1)] = (9));

} else {
var statearr_10093_10132 = state_10061__$1;
(statearr_10093_10132[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10062 === (14))){
var inst_10059 = (state_10061[(2)]);
var state_10061__$1 = state_10061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10061__$1,inst_10059);
} else {
if((state_val_10062 === (26))){
var inst_10057 = (state_10061[(2)]);
var state_10061__$1 = state_10061;
var statearr_10094_10133 = state_10061__$1;
(statearr_10094_10133[(2)] = inst_10057);

(statearr_10094_10133[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10062 === (16))){
var state_10061__$1 = state_10061;
var statearr_10095_10134 = state_10061__$1;
(statearr_10095_10134[(2)] = null);

(statearr_10095_10134[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10062 === (10))){
var inst_10009 = (state_10061[(8)]);
var state_10061__$1 = state_10061;
var statearr_10096_10135 = state_10061__$1;
(statearr_10096_10135[(2)] = inst_10009);

(statearr_10096_10135[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10062 === (18))){
var inst_10032 = (state_10061[(7)]);
var inst_10043 = cljs.core.reset_BANG_.call(null,success_atom,inst_10032);
var state_10061__$1 = state_10061;
var statearr_10097_10136 = state_10061__$1;
(statearr_10097_10136[(2)] = inst_10043);

(statearr_10097_10136[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10062 === (8))){
var inst_10022 = (state_10061[(2)]);
var state_10061__$1 = state_10061;
var statearr_10098_10137 = state_10061__$1;
(statearr_10098_10137[(2)] = inst_10022);

(statearr_10098_10137[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5300__auto__,map__10000,map__10000__$1,data,on_success,on_error,success_atom,error_atom,query_params))
;
return ((function (switch__5133__auto__,c__5300__auto__,map__10000,map__10000__$1,data,on_success,on_error,success_atom,error_atom,query_params){
return (function() {
var blogproject$cljs$xhr$state_machine__5134__auto__ = null;
var blogproject$cljs$xhr$state_machine__5134__auto____0 = (function (){
var statearr_10099 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10099[(0)] = blogproject$cljs$xhr$state_machine__5134__auto__);

(statearr_10099[(1)] = (1));

return statearr_10099;
});
var blogproject$cljs$xhr$state_machine__5134__auto____1 = (function (state_10061){
while(true){
var ret_value__5135__auto__ = (function (){try{while(true){
var result__5136__auto__ = switch__5133__auto__.call(null,state_10061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5136__auto__;
}
break;
}
}catch (e10100){if((e10100 instanceof Object)){
var ex__5137__auto__ = e10100;
var statearr_10101_10138 = state_10061;
(statearr_10101_10138[(5)] = ex__5137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10139 = state_10061;
state_10061 = G__10139;
continue;
} else {
return ret_value__5135__auto__;
}
break;
}
});
blogproject$cljs$xhr$state_machine__5134__auto__ = function(state_10061){
switch(arguments.length){
case 0:
return blogproject$cljs$xhr$state_machine__5134__auto____0.call(this);
case 1:
return blogproject$cljs$xhr$state_machine__5134__auto____1.call(this,state_10061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
blogproject$cljs$xhr$state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$0 = blogproject$cljs$xhr$state_machine__5134__auto____0;
blogproject$cljs$xhr$state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$1 = blogproject$cljs$xhr$state_machine__5134__auto____1;
return blogproject$cljs$xhr$state_machine__5134__auto__;
})()
;})(switch__5133__auto__,c__5300__auto__,map__10000,map__10000__$1,data,on_success,on_error,success_atom,error_atom,query_params))
})();
var state__5302__auto__ = (function (){var statearr_10102 = f__5301__auto__.call(null);
(statearr_10102[(6)] = c__5300__auto__);

return statearr_10102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5302__auto__);
});})(c__5300__auto__,map__10000,map__10000__$1,data,on_success,on_error,success_atom,error_atom,query_params))
);

return c__5300__auto__;
});

blogproject.cljs.xhr.simple_xhr.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
blogproject.cljs.xhr.simple_xhr.cljs$lang$applyTo = (function (seq9996){
var G__9997 = cljs.core.first.call(null,seq9996);
var seq9996__$1 = cljs.core.next.call(null,seq9996);
var G__9998 = cljs.core.first.call(null,seq9996__$1);
var seq9996__$2 = cljs.core.next.call(null,seq9996__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9997,G__9998,seq9996__$2);
});

blogproject.cljs.xhr.send_get = cljs.core.partial.call(null,blogproject.cljs.xhr.simple_xhr,new cljs.core.Keyword(null,"get","get",1683182755));
blogproject.cljs.xhr.send_post = cljs.core.partial.call(null,blogproject.cljs.xhr.simple_xhr,new cljs.core.Keyword(null,"post","post",269697687));
blogproject.cljs.xhr.send_put = cljs.core.partial.call(null,blogproject.cljs.xhr.simple_xhr,new cljs.core.Keyword(null,"put","put",1299772570));
blogproject.cljs.xhr.send_delete = cljs.core.partial.call(null,blogproject.cljs.xhr.simple_xhr,new cljs.core.Keyword(null,"delete","delete",-1768633620));

//# sourceMappingURL=xhr.js.map
