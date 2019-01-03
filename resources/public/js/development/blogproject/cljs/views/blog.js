// Compiled by ClojureScript 1.10.439 {}
goog.provide('blogproject.cljs.views.blog');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('blogproject.cljc.routes');
goog.require('blogproject.cljs.views.components');
goog.require('blogproject.cljs.models.blog');
goog.require('blogproject.cljs.models.session');
goog.require('blogproject.cljs.controllers.blog');
blogproject.cljs.views.blog.new_blog = (function blogproject$cljs$views$blog$new_blog(){
if(cljs.core.truth_(cljs.core.deref.call(null,blogproject.cljs.models.session.session))){
var title = reagent.core.atom.call(null,"");
var content = reagent.core.atom.call(null,"");
var message = reagent.core.atom.call(null,"");
var user_id = new cljs.core.Keyword(null,"user-id","user-id",-206822291).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,blogproject.cljs.models.session.session));
return ((function (title,content,message,user_id){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mw7.pv3.ph5.center","div.mw7.pv3.ph5.center",-896506022),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"New Blog"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.mw8.center","form.mw8.center",-1555743429),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tc.bg-washed-red.dark-red","div.tc.bg-washed-red.dark-red",798509826),cljs.core.deref.call(null,message)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.components.input,new cljs.core.Keyword(null,"label-text","label-text",-1566972381),"Title",new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"value","value",305978217),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mv1.cf.h5","div.mv1.cf.h5",2034584139),blogproject.cljs.views.components.wrap_label.call(null,"Content",new cljs.core.Keyword(null,"content","content",15833224)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.w-100.h-100","textarea.w-100.h-100",1187881069),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,content),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (title,content,message,user_id){
return (function (p1__10216_SHARP_){
return cljs.core.reset_BANG_.call(null,content,p1__10216_SHARP_.target.value);
});})(title,content,message,user_id))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mw4.mv5.cf.center","div.mw4.mv5.cf.center",432445511),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.components.button,"Submit",((function (title,content,message,user_id){
return (function (e){
e.preventDefault();

return blogproject.cljs.controllers.blog.new_blog.call(null,user_id,cljs.core.deref.call(null,title),cljs.core.deref.call(null,content),message);
});})(title,content,message,user_id))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),blogproject.cljc.routes.page.call(null,new cljs.core.Keyword(null,"blog","blog",-302707364))], null),"Back to Blog"], null)], null);
});
;})(title,content,message,user_id))
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mw7.pv3.ph5.center","div.mw7.pv3.ph5.center",-896506022),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"New Blog"], null),"Sign up or log in to start writing blogs!",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),blogproject.cljc.routes.page.call(null,new cljs.core.Keyword(null,"blog","blog",-302707364))], null),"Back to Blog"], null)], null)], null);
}
});
blogproject.cljs.views.blog.blog_title = (function blogproject$cljs$views$blog$blog_title(){
if(cljs.core.truth_(cljs.core.deref.call(null,blogproject.cljs.models.session.session))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Blog",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.f6.link.dim.ba.ph3.pv2.mb2.dib.black.fr","div.f6.link.dim.ba.ph3.pv2.mb2.dib.black.fr",1084277219),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),blogproject.cljc.routes.page.call(null,new cljs.core.Keyword(null,"new-blog","new-blog",-48295651))], null),"New Blog"], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Blog"], null);
}
});
blogproject.cljs.views.blog.blog = (function blogproject$cljs$views$blog$blog(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mw7.pv3.ph5.center","div.mw7.pv3.ph5.center",-896506022),blogproject.cljs.views.blog.blog_title.call(null),(cljs.core.truth_(cljs.core.deref.call(null,blogproject.cljs.models.blog.all_entries))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4434__auto__ = (function blogproject$cljs$views$blog$blog_$_iter__10217(s__10218){
return (new cljs.core.LazySeq(null,(function (){
var s__10218__$1 = s__10218;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__10218__$1);
if(temp__5720__auto__){
var s__10218__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10218__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__10218__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__10220 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__10219 = (0);
while(true){
if((i__10219 < size__4433__auto__)){
var map__10221 = cljs.core._nth.call(null,c__4432__auto__,i__10219);
var map__10221__$1 = (((((!((map__10221 == null))))?(((((map__10221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10221):map__10221);
var id = cljs.core.get.call(null,map__10221__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__10221__$1,new cljs.core.Keyword(null,"title","title",636505583));
var date = cljs.core.get.call(null,map__10221__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
cljs.core.chunk_append.call(null,b__10220,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article.pv3.bt.bb.b--black-10.ph3.ph0-l","article.pv3.bt.bb.b--black-10.ph3.ph0-l",563996918),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),blogproject.cljc.routes.page.call(null,new cljs.core.Keyword(null,"blog-entry","blog-entry",1886624995),new cljs.core.Keyword(null,"id","id",-1388402092),id)], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time.f6.ttu.tracked.gray.fr","time.f6.ttu.tracked.gray.fr",-1322028537),date], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__10225 = (i__10219 + (1));
i__10219 = G__10225;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10220),blogproject$cljs$views$blog$blog_$_iter__10217.call(null,cljs.core.chunk_rest.call(null,s__10218__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10220),null);
}
} else {
var map__10223 = cljs.core.first.call(null,s__10218__$2);
var map__10223__$1 = (((((!((map__10223 == null))))?(((((map__10223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10223):map__10223);
var id = cljs.core.get.call(null,map__10223__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__10223__$1,new cljs.core.Keyword(null,"title","title",636505583));
var date = cljs.core.get.call(null,map__10223__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article.pv3.bt.bb.b--black-10.ph3.ph0-l","article.pv3.bt.bb.b--black-10.ph3.ph0-l",563996918),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),blogproject.cljc.routes.page.call(null,new cljs.core.Keyword(null,"blog-entry","blog-entry",1886624995),new cljs.core.Keyword(null,"id","id",-1388402092),id)], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time.f6.ttu.tracked.gray.fr","time.f6.ttu.tracked.gray.fr",-1322028537),date], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),blogproject$cljs$views$blog$blog_$_iter__10217.call(null,cljs.core.rest.call(null,s__10218__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,cljs.core.deref.call(null,blogproject.cljs.models.blog.all_entries));
})()], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.components.loading_spinner], null))], null);
});
blogproject.cljs.views.blog.delete_blog = (function blogproject$cljs$views$blog$delete_blog(article_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mw4","div.mw4",-436479732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.components.button,"Delete",(function (e){
e.preventDefault();

return blogproject.cljs.controllers.blog.delete_blog_entry.call(null,article_id);
})], null)], null);
});
blogproject.cljs.views.blog.blog_entry = (function blogproject$cljs$views$blog$blog_entry(){
var map__10226 = cljs.core.deref.call(null,blogproject.cljs.models.blog.blog_entry);
var map__10226__$1 = (((((!((map__10226 == null))))?(((((map__10226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10226):map__10226);
var id = cljs.core.get.call(null,map__10226__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var user_id = cljs.core.get.call(null,map__10226__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var title = cljs.core.get.call(null,map__10226__$1,new cljs.core.Keyword(null,"title","title",636505583));
var content = cljs.core.get.call(null,map__10226__$1,new cljs.core.Keyword(null,"content","content",15833224));
var date = cljs.core.get.call(null,map__10226__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var full_name = cljs.core.get.call(null,map__10226__$1,new cljs.core.Keyword(null,"full-name","full-name",408178550));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article.cf.ph2.ph8-ns.pv5","article.cf.ph2.ph8-ns.pv5",236048374),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.fn.fl-ns.w-40-ns.pr4-ns","header.fn.fl-ns.w-40-ns.pr4-ns",1694925892),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.mb3.mt0.lh-title","h1.mb3.mt0.lh-title",-1445779817),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time.f6.ttu.tracked.gray","time.f6.ttu.tracked.gray",-1172257970),(function (){var or__4047__auto__ = date;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return "";
}
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time.f6.ttu.tracked.gray","time.f6.ttu.tracked.gray",-1172257970),(function (){var or__4047__auto__ = full_name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return "";
}
})()], null),(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.deref.call(null,blogproject.cljs.models.session.session);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword(null,"user-id","user-id",-206822291).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,blogproject.cljs.models.session.session)));
} else {
return and__4036__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.blog.delete_blog,id], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),blogproject.cljc.routes.page.call(null,new cljs.core.Keyword(null,"blog","blog",-302707364))], null),"Back to Blog"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fn.fl-ns.w-60-ns","div.fn.fl-ns.w-60-ns",122172091),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.lh-copy.measure.mt4.mt0-ns","p.lh-copy.measure.mt4.mt0-ns",-357909660),(function (){var or__4047__auto__ = content;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return "";
}
})()], null)], null)], null);
});

//# sourceMappingURL=blog.js.map
