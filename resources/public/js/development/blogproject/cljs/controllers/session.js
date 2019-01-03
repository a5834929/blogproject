// Compiled by ClojureScript 1.10.439 {}
goog.provide('blogproject.cljs.controllers.session');
goog.require('cljs.core');
goog.require('blogproject.cljc.routes');
goog.require('blogproject.cljs.xhr');
goog.require('blogproject.cljs.models.session');
goog.require('blogproject.cljs.models.counter');
goog.require('reagent.cookies');
goog.require('accountant.core');
blogproject.cljs.controllers.session.successful_login = (function blogproject$cljs$controllers$session$successful_login(p__10168){
var map__10169 = p__10168;
var map__10169__$1 = (((((!((map__10169 == null))))?(((((map__10169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10169):map__10169);
var body = cljs.core.get.call(null,map__10169__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__10171 = body;
var map__10171__$1 = (((((!((map__10171 == null))))?(((((map__10171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10171):map__10171);
var token = cljs.core.get.call(null,map__10171__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var user = cljs.core.get.call(null,map__10171__$1,new cljs.core.Keyword(null,"user","user",1532431356));
reagent.cookies.set_BANG_.call(null,new cljs.core.Keyword(null,"brevity-token","brevity-token",264100573),token,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),"/"], null));

accountant.core.navigate_BANG_.call(null,blogproject.cljc.routes.page.call(null,new cljs.core.Keyword(null,"index","index",-1531685915)));

return blogproject.cljs.xhr.send_get.call(null,blogproject.cljc.routes.api.call(null,new cljs.core.Keyword(null,"get-account-info","get-account-info",-1490393605)),new cljs.core.Keyword(null,"success-atom","success-atom",-738572742),blogproject.cljs.models.session.session);
});
blogproject.cljs.controllers.session.login = (function blogproject$cljs$controllers$session$login(email,password,message){
cljs.core.reset_BANG_.call(null,message,"Logging in...");

return blogproject.cljs.xhr.send_post.call(null,blogproject.cljc.routes.api.call(null,new cljs.core.Keyword(null,"login","login",55217519)),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"password","password",417022471),password], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),blogproject.cljs.controllers.session.successful_login,new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){
return cljs.core.reset_BANG_.call(null,message,"Invalid email or password.");
}));
});
blogproject.cljs.controllers.session.signup = (function blogproject$cljs$controllers$session$signup(full_name,email,password,message){
cljs.core.reset_BANG_.call(null,message,"Creating account...");

return blogproject.cljs.xhr.send_post.call(null,blogproject.cljc.routes.api.call(null,new cljs.core.Keyword(null,"signup","signup",1961016747)),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"full-name","full-name",408178550),full_name,new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"password","password",417022471),password], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){
return blogproject.cljs.controllers.session.login.call(null,email,password,message);
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){
return cljs.core.reset_BANG_.call(null,message,"Invalid email or password.");
}));
});
blogproject.cljs.controllers.session.logout = (function blogproject$cljs$controllers$session$logout(){
return blogproject.cljs.xhr.send_delete.call(null,blogproject.cljc.routes.api.call(null,new cljs.core.Keyword(null,"logout","logout",1418564329)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref.call(null,blogproject.cljs.models.session.session),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){
reagent.cookies.set_BANG_.call(null,new cljs.core.Keyword(null,"brevity-token","brevity-token",264100573),"",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),"/"], null));

cljs.core.reset_BANG_.call(null,blogproject.cljs.models.session.session,null);

cljs.core.reset_BANG_.call(null,blogproject.cljs.models.counter.counter_value,null);

return accountant.core.navigate_BANG_.call(null,blogproject.cljc.routes.page.call(null,new cljs.core.Keyword(null,"index","index",-1531685915)));
}));
});

//# sourceMappingURL=session.js.map
