// Compiled by ClojureScript 1.10.439 {}
goog.provide('blogproject.cljs.views.account');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('blogproject.cljs.controllers.session');
goog.require('blogproject.cljc.routes');
goog.require('blogproject.cljs.xhr');
goog.require('blogproject.cljs.views.components');
blogproject.cljs.views.account.login = (function blogproject$cljs$views$account$login(){
var email = reagent.core.atom.call(null,"");
var password = reagent.core.atom.call(null,"");
var show_kiwi_bird = reagent.core.atom.call(null,false);
var message = reagent.core.atom.call(null,"");
return ((function (email,password,show_kiwi_bird,message){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.mw5.center","form.mw5.center",-1033253394),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref.call(null,message)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.components.input,new cljs.core.Keyword(null,"label-text","label-text",-1566972381),"Email Address",new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"value","value",305978217),email], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.components.input,new cljs.core.Keyword(null,"label-text","label-text",-1566972381),"Password",new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"value","value",305978217),password], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.components.input,new cljs.core.Keyword(null,"label-text","label-text",-1566972381),"Show a kiwi bird?",new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"show-kiwi-bird","show-kiwi-bird",-1857237039),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"value","value",305978217),show_kiwi_bird], null),(cljs.core.truth_(cljs.core.deref.call(null,show_kiwi_bird))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tr.h1","div.tr.h1",2126974511),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-kiwi-bird.fr.mv2.green","i.fas.fa-kiwi-bird.fr.mv2.green",-1442131772)], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.components.button,"Login",((function (email,password,show_kiwi_bird,message){
return (function (e){
e.preventDefault();

return blogproject.cljs.controllers.session.login.call(null,cljs.core.deref.call(null,email),cljs.core.deref.call(null,password),message);
});})(email,password,show_kiwi_bird,message))
], null)], null);
});
;})(email,password,show_kiwi_bird,message))
});
blogproject.cljs.views.account.signup = (function blogproject$cljs$views$account$signup(){
var full_name = reagent.core.atom.call(null,"");
var email = reagent.core.atom.call(null,"");
var password = reagent.core.atom.call(null,"");
var message = reagent.core.atom.call(null,"");
return ((function (full_name,email,password,message){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.mw5.center","form.mw5.center",-1033253394),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref.call(null,message)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.components.input,new cljs.core.Keyword(null,"label-text","label-text",-1566972381),"Name",new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"full-name","full-name",408178550),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"full-name","full-name",408178550),new cljs.core.Keyword(null,"value","value",305978217),full_name], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.components.input,new cljs.core.Keyword(null,"label-text","label-text",-1566972381),"Email Address",new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"value","value",305978217),email], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.components.input,new cljs.core.Keyword(null,"label-text","label-text",-1566972381),"Password",new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"value","value",305978217),password], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blogproject.cljs.views.components.button,"Sign Up",((function (full_name,email,password,message){
return (function (e){
e.preventDefault();

return blogproject.cljs.controllers.session.signup.call(null,cljs.core.deref.call(null,full_name),cljs.core.deref.call(null,email),cljs.core.deref.call(null,password),message);
});})(full_name,email,password,message))
], null)], null);
});
;})(full_name,email,password,message))
});

//# sourceMappingURL=account.js.map
