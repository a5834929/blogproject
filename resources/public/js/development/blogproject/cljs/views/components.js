// Compiled by ClojureScript 1.10.439 {}
goog.provide('blogproject.cljs.views.components');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('blogproject.cljc.routes');
goog.require('blogproject.cljs.controllers.session');
goog.require('blogproject.cljs.models.session');
goog.require('blogproject.cljs.xhr');
blogproject.cljs.views.components.header_link = (function blogproject$cljs$views$components$header_link(var_args){
var args__4647__auto__ = [];
var len__4641__auto___10179 = arguments.length;
var i__4642__auto___10180 = (0);
while(true){
if((i__4642__auto___10180 < len__4641__auto___10179)){
args__4647__auto__.push((arguments[i__4642__auto___10180]));

var G__10181 = (i__4642__auto___10180 + (1));
i__4642__auto___10180 = G__10181;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return blogproject.cljs.views.components.header_link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

blogproject.cljs.views.components.header_link.cljs$core$IFn$_invoke$arity$variadic = (function (href,text,class$,attrs){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["fl bg-dark-gray pa3 dim pointer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.no-underline.white","a.no-underline.white",-2067945114),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),text], null)], null);
});

blogproject.cljs.views.components.header_link.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
blogproject.cljs.views.components.header_link.cljs$lang$applyTo = (function (seq10175){
var G__10176 = cljs.core.first.call(null,seq10175);
var seq10175__$1 = cljs.core.next.call(null,seq10175);
var G__10177 = cljs.core.first.call(null,seq10175__$1);
var seq10175__$2 = cljs.core.next.call(null,seq10175__$1);
var G__10178 = cljs.core.first.call(null,seq10175__$2);
var seq10175__$3 = cljs.core.next.call(null,seq10175__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10176,G__10177,G__10178,seq10175__$3);
});

blogproject.cljs.views.components.welcome_title = (function blogproject$cljs$views$components$welcome_title(){
var temp__5718__auto__ = cljs.core.deref.call(null,blogproject.cljs.models.session.session);
if(cljs.core.truth_(temp__5718__auto__)){
var map__10182 = temp__5718__auto__;
var map__10182__$1 = (((((!((map__10182 == null))))?(((((map__10182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10182):map__10182);
var full_name = cljs.core.get.call(null,map__10182__$1,new cljs.core.Keyword(null,"full-name","full-name",408178550));
return ["Welcome back, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_name),"!"].join('');
} else {
return "Welcome!";
}
});
blogproject.cljs.views.components.welcome_message = (function blogproject$cljs$views$components$welcome_message(p__10184){
var map__10185 = p__10184;
var map__10185__$1 = (((((!((map__10185 == null))))?(((((map__10185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10185):map__10185);
var session = map__10185__$1;
var full_name = cljs.core.get.call(null,map__10185__$1,new cljs.core.Keyword(null,"full-name","full-name",408178550));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fr.relative.hide-child","div.fr.relative.hide-child",146382351),(cljs.core.truth_(session)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pa3","div.pa3",-292640361),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-chevron-down.mr2","i.fas.fa-chevron-down.mr2",-1987604966)], null),full_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-gray.pa3.dim.pointer.child.absolute.w-100.dim.tc","div.bg-gray.pa3.dim.pointer.child.absolute.w-100.dim.tc",14455381),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__10185,map__10185__$1,session,full_name){
return (function (e){
e.preventDefault();

return blogproject.cljs.controllers.session.logout.call(null);
});})(map__10185,map__10185__$1,session,full_name))
], null),"Logout"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.components.header_link,blogproject.cljc.routes.page.call(null,new cljs.core.Keyword(null,"login","login",55217519)),"Login","fr"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.components.header_link,blogproject.cljc.routes.page.call(null,new cljs.core.Keyword(null,"signup","signup",1961016747)),"Sign Up","fr"], null)], null))], null);
});
blogproject.cljs.views.components.header = (function blogproject$cljs$views$components$header(){
blogproject.cljs.xhr.send_get.call(null,blogproject.cljc.routes.api.call(null,new cljs.core.Keyword(null,"get-account-info","get-account-info",-1490393605)),new cljs.core.Keyword(null,"success-atom","success-atom",-738572742),blogproject.cljs.models.session.session);

return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.white.cf.bg-dark-gray.tracked-mega.small-caps","header.white.cf.bg-dark-gray.tracked-mega.small-caps",373794931),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.components.header_link,blogproject.cljc.routes.page.call(null,new cljs.core.Keyword(null,"index","index",-1531685915)),"Home","fl"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.components.header_link,blogproject.cljc.routes.page.call(null,new cljs.core.Keyword(null,"blog","blog",-302707364)),"Blog","fl"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.components.header_link,blogproject.cljc.routes.page.call(null,new cljs.core.Keyword(null,"counter","counter",804008177)),"Counter","fl"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.components.welcome_message,cljs.core.deref.call(null,blogproject.cljs.models.session.session)], null)], null);
});
});
blogproject.cljs.views.components.loading_spinner = (function blogproject$cljs$views$components$loading_spinner(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tc.mv3.gray","div.tc.mv3.gray",-333798968),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-spinner.fa-pulse","i.fas.fa-spinner.fa-pulse",1605646997)], null)], null);
});
blogproject.cljs.views.components.footer = (function blogproject$cljs$views$components$footer(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tc.mv2","div.tc.mv2",2142376891),"External link to ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/pkcsecurity/brevity"], null),"brevity"], null)], null);
});
blogproject.cljs.views.components.button = (function blogproject$cljs$views$components$button(text,on_click){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pointer.grow.w-100.bg-light-gray.b--dark-gray.ba.bw2.tc.tracked.pv1","button.pointer.grow.w-100.bg-light-gray.b--dark-gray.ba.bw2.tc.tracked.pv1",-2136905500),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),text], null);
});
blogproject.cljs.views.components.input_default_style = cljs.core.PersistentArrayMap.EMPTY;
blogproject.cljs.views.components.input_default_classes = "b--light-gray";
blogproject.cljs.views.components.input_invalid_classes = "b--red";
blogproject.cljs.views.components.input_focus_classes = "b--gray";
blogproject.cljs.views.components.input_invalid_focus_classes = "light-red";
blogproject.cljs.views.components.nop = (function blogproject$cljs$views$components$nop(var_args){
var args__4647__auto__ = [];
var len__4641__auto___10188 = arguments.length;
var i__4642__auto___10189 = (0);
while(true){
if((i__4642__auto___10189 < len__4641__auto___10188)){
args__4647__auto__.push((arguments[i__4642__auto___10189]));

var G__10190 = (i__4642__auto___10189 + (1));
i__4642__auto___10189 = G__10190;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return blogproject.cljs.views.components.nop.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

blogproject.cljs.views.components.nop.cljs$core$IFn$_invoke$arity$variadic = (function (_){
return null;
});

blogproject.cljs.views.components.nop.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
blogproject.cljs.views.components.nop.cljs$lang$applyTo = (function (seq10187){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10187));
});

blogproject.cljs.views.components.wrap_label = (function blogproject$cljs$views$components$wrap_label(label_text,id,component){
if(cljs.core.truth_(label_text)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mv3.cf","div.mv3.cf",-1400065698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.fl.db.f6","label.fl.db.f6",-585539610),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),id], null),label_text], null),component], null);
} else {
return component;
}
});
blogproject.cljs.views.components.input = (function blogproject$cljs$views$components$input(var_args){
var args__4647__auto__ = [];
var len__4641__auto___10198 = arguments.length;
var i__4642__auto___10199 = (0);
while(true){
if((i__4642__auto___10199 < len__4641__auto___10198)){
args__4647__auto__.push((arguments[i__4642__auto___10199]));

var G__10200 = (i__4642__auto___10199 + (1));
i__4642__auto___10199 = G__10200;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return blogproject.cljs.views.components.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

blogproject.cljs.views.components.input.cljs$core$IFn$_invoke$arity$variadic = (function (p__10192){
var map__10193 = p__10192;
var map__10193__$1 = (((((!((map__10193 == null))))?(((((map__10193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10193):map__10193);
var on_change = cljs.core.get.call(null,map__10193__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),blogproject.cljs.views.components.nop);
var label_text = cljs.core.get.call(null,map__10193__$1,new cljs.core.Keyword(null,"label-text","label-text",-1566972381));
var on_key_press = cljs.core.get.call(null,map__10193__$1,new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),blogproject.cljs.views.components.nop);
var placeholder = cljs.core.get.call(null,map__10193__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"");
var valid_QMARK_ = cljs.core.get.call(null,map__10193__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379),true);
var on_focus = cljs.core.get.call(null,map__10193__$1,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),blogproject.cljs.views.components.nop);
var value = cljs.core.get.call(null,map__10193__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_blur = cljs.core.get.call(null,map__10193__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),blogproject.cljs.views.components.nop);
var type = cljs.core.get.call(null,map__10193__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697));
var autofocus_QMARK_ = cljs.core.get.call(null,map__10193__$1,new cljs.core.Keyword(null,"autofocus?","autofocus?",1363866447));
var style = cljs.core.get.call(null,map__10193__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var id = cljs.core.get.call(null,map__10193__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__10193__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var focus_QMARK_ = reagent.core.atom.call(null,false);
var value__$1 = (function (){var or__4047__auto__ = value;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reagent.core.atom.call(null,"");
}
})();
return ((function (focus_QMARK_,value__$1,map__10193,map__10193__$1,on_change,label_text,on_key_press,placeholder,valid_QMARK_,on_focus,value,on_blur,type,autofocus_QMARK_,style,id,class$){
return (function() { 
var G__10201__delegate = function (p__10195){
var map__10196 = p__10195;
var map__10196__$1 = (((((!((map__10196 == null))))?(((((map__10196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10196):map__10196);
var on_change__$1 = cljs.core.get.call(null,map__10196__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),blogproject.cljs.views.components.nop);
var on_key_press__$1 = cljs.core.get.call(null,map__10196__$1,new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),blogproject.cljs.views.components.nop);
var placeholder__$1 = cljs.core.get.call(null,map__10196__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"");
var valid_QMARK___$1 = cljs.core.get.call(null,map__10196__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379),true);
var on_focus__$1 = cljs.core.get.call(null,map__10196__$1,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),blogproject.cljs.views.components.nop);
var on_blur__$1 = cljs.core.get.call(null,map__10196__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),blogproject.cljs.views.components.nop);
var type__$1 = cljs.core.get.call(null,map__10196__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697));
var tag_type = cljs.core.get.call(null,map__10196__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.Keyword(null,"input","input",556931961));
var autofocus_QMARK___$1 = cljs.core.get.call(null,map__10196__$1,new cljs.core.Keyword(null,"autofocus?","autofocus?",1363866447));
var id__$1 = cljs.core.get.call(null,map__10196__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.components.wrap_label,label_text,id__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_type,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149)],[((function (map__10196,map__10196__$1,on_change__$1,on_key_press__$1,placeholder__$1,valid_QMARK___$1,on_focus__$1,on_blur__$1,type__$1,tag_type,autofocus_QMARK___$1,id__$1,focus_QMARK_,value__$1,map__10193,map__10193__$1,on_change,label_text,on_key_press,placeholder,valid_QMARK_,on_focus,value,on_blur,type,autofocus_QMARK_,style,id,class$){
return (function (e){
if(cljs.core._EQ_.call(null,e.key,"Enter")){
return on_key_press__$1.call(null,e);
} else {
return null;
}
});})(map__10196,map__10196__$1,on_change__$1,on_key_press__$1,placeholder__$1,valid_QMARK___$1,on_focus__$1,on_blur__$1,type__$1,tag_type,autofocus_QMARK___$1,id__$1,focus_QMARK_,value__$1,map__10193,map__10193__$1,on_change,label_text,on_key_press,placeholder,valid_QMARK_,on_focus,value,on_blur,type,autofocus_QMARK_,style,id,class$))
,placeholder__$1,autofocus_QMARK___$1,((function (map__10196,map__10196__$1,on_change__$1,on_key_press__$1,placeholder__$1,valid_QMARK___$1,on_focus__$1,on_blur__$1,type__$1,tag_type,autofocus_QMARK___$1,id__$1,focus_QMARK_,value__$1,map__10193,map__10193__$1,on_change,label_text,on_key_press,placeholder,valid_QMARK_,on_focus,value,on_blur,type,autofocus_QMARK_,style,id,class$){
return (function (){
cljs.core.reset_BANG_.call(null,focus_QMARK_,true);

return on_focus__$1.call(null);
});})(map__10196,map__10196__$1,on_change__$1,on_key_press__$1,placeholder__$1,valid_QMARK___$1,on_focus__$1,on_blur__$1,type__$1,tag_type,autofocus_QMARK___$1,id__$1,focus_QMARK_,value__$1,map__10193,map__10193__$1,on_change,label_text,on_key_press,placeholder,valid_QMARK_,on_focus,value,on_blur,type,autofocus_QMARK_,style,id,class$))
,cljs.core.deref.call(null,value__$1),((function (map__10196,map__10196__$1,on_change__$1,on_key_press__$1,placeholder__$1,valid_QMARK___$1,on_focus__$1,on_blur__$1,type__$1,tag_type,autofocus_QMARK___$1,id__$1,focus_QMARK_,value__$1,map__10193,map__10193__$1,on_change,label_text,on_key_press,placeholder,valid_QMARK_,on_focus,value,on_blur,type,autofocus_QMARK_,style,id,class$){
return (function (){
cljs.core.reset_BANG_.call(null,focus_QMARK_,false);

return on_blur__$1.call(null);
});})(map__10196,map__10196__$1,on_change__$1,on_key_press__$1,placeholder__$1,valid_QMARK___$1,on_focus__$1,on_blur__$1,type__$1,tag_type,autofocus_QMARK___$1,id__$1,focus_QMARK_,value__$1,map__10193,map__10193__$1,on_change,label_text,on_key_press,placeholder,valid_QMARK_,on_focus,value,on_blur,type,autofocus_QMARK_,style,id,class$))
,type__$1,cljs.core.merge.call(null,blogproject.cljs.views.components.input_default_style,style),(cljs.core.truth_(id__$1)?id__$1:null),["input pa2 border p shadow-none outline-none ba bt bl bw1 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.not.call(null,valid_QMARK___$1);
if(and__4036__auto__){
return cljs.core.deref.call(null,focus_QMARK_);
} else {
return and__4036__auto__;
}
})())?blogproject.cljs.views.components.input_invalid_focus_classes:((cljs.core.not.call(null,valid_QMARK___$1))?blogproject.cljs.views.components.input_invalid_classes:(cljs.core.truth_(cljs.core.deref.call(null,focus_QMARK_))?blogproject.cljs.views.components.input_focus_classes:blogproject.cljs.views.components.input_default_classes
)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,type__$1,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655)))?" dib wa fr ":" w-100 ")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),((function (map__10196,map__10196__$1,on_change__$1,on_key_press__$1,placeholder__$1,valid_QMARK___$1,on_focus__$1,on_blur__$1,type__$1,tag_type,autofocus_QMARK___$1,id__$1,focus_QMARK_,value__$1,map__10193,map__10193__$1,on_change,label_text,on_key_press,placeholder,valid_QMARK_,on_focus,value,on_blur,type,autofocus_QMARK_,style,id,class$){
return (function (e){
cljs.core.reset_BANG_.call(null,value__$1,((cljs.core._EQ_.call(null,type__$1,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655)))?e.target.checked:e.target.value));

return on_change__$1.call(null,value__$1,e);
});})(map__10196,map__10196__$1,on_change__$1,on_key_press__$1,placeholder__$1,valid_QMARK___$1,on_focus__$1,on_blur__$1,type__$1,tag_type,autofocus_QMARK___$1,id__$1,focus_QMARK_,value__$1,map__10193,map__10193__$1,on_change,label_text,on_key_press,placeholder,valid_QMARK_,on_focus,value,on_blur,type,autofocus_QMARK_,style,id,class$))
])], null)], null);
};
var G__10201 = function (var_args){
var p__10195 = null;
if (arguments.length > 0) {
var G__10202__i = 0, G__10202__a = new Array(arguments.length -  0);
while (G__10202__i < G__10202__a.length) {G__10202__a[G__10202__i] = arguments[G__10202__i + 0]; ++G__10202__i;}
  p__10195 = new cljs.core.IndexedSeq(G__10202__a,0,null);
} 
return G__10201__delegate.call(this,p__10195);};
G__10201.cljs$lang$maxFixedArity = 0;
G__10201.cljs$lang$applyTo = (function (arglist__10203){
var p__10195 = cljs.core.seq(arglist__10203);
return G__10201__delegate(p__10195);
});
G__10201.cljs$core$IFn$_invoke$arity$variadic = G__10201__delegate;
return G__10201;
})()
;
;})(focus_QMARK_,value__$1,map__10193,map__10193__$1,on_change,label_text,on_key_press,placeholder,valid_QMARK_,on_focus,value,on_blur,type,autofocus_QMARK_,style,id,class$))
});

blogproject.cljs.views.components.input.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
blogproject.cljs.views.components.input.cljs$lang$applyTo = (function (seq10191){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10191));
});


//# sourceMappingURL=components.js.map
