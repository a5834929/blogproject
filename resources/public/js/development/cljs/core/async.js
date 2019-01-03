// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__7224 = arguments.length;
switch (G__7224) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7225 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7225 = (function (f,blockable,meta7226){
this.f = f;
this.blockable = blockable;
this.meta7226 = meta7226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7227,meta7226__$1){
var self__ = this;
var _7227__$1 = this;
return (new cljs.core.async.t_cljs$core$async7225(self__.f,self__.blockable,meta7226__$1));
});

cljs.core.async.t_cljs$core$async7225.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7227){
var self__ = this;
var _7227__$1 = this;
return self__.meta7226;
});

cljs.core.async.t_cljs$core$async7225.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7225.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7225.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async7225.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async7225.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta7226","meta7226",652661067,null)], null);
});

cljs.core.async.t_cljs$core$async7225.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7225.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7225";

cljs.core.async.t_cljs$core$async7225.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async7225");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7225.
 */
cljs.core.async.__GT_t_cljs$core$async7225 = (function cljs$core$async$__GT_t_cljs$core$async7225(f__$1,blockable__$1,meta7226){
return (new cljs.core.async.t_cljs$core$async7225(f__$1,blockable__$1,meta7226));
});

}

return (new cljs.core.async.t_cljs$core$async7225(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__7231 = arguments.length;
switch (G__7231) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__7234 = arguments.length;
switch (G__7234) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__7237 = arguments.length;
switch (G__7237) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_7239 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_7239);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_7239,ret){
return (function (){
return fn1.call(null,val_7239);
});})(val_7239,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__7241 = arguments.length;
switch (G__7241) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___7243 = n;
var x_7244 = (0);
while(true){
if((x_7244 < n__4518__auto___7243)){
(a[x_7244] = (0));

var G__7245 = (x_7244 + (1));
x_7244 = G__7245;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__7246 = (i + (1));
i = G__7246;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7247 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7247 = (function (flag,meta7248){
this.flag = flag;
this.meta7248 = meta7248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_7249,meta7248__$1){
var self__ = this;
var _7249__$1 = this;
return (new cljs.core.async.t_cljs$core$async7247(self__.flag,meta7248__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async7247.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_7249){
var self__ = this;
var _7249__$1 = this;
return self__.meta7248;
});})(flag))
;

cljs.core.async.t_cljs$core$async7247.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7247.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async7247.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7247.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7247.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta7248","meta7248",-840979605,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async7247.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7247";

cljs.core.async.t_cljs$core$async7247.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async7247");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7247.
 */
cljs.core.async.__GT_t_cljs$core$async7247 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async7247(flag__$1,meta7248){
return (new cljs.core.async.t_cljs$core$async7247(flag__$1,meta7248));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async7247(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7250 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7250 = (function (flag,cb,meta7251){
this.flag = flag;
this.cb = cb;
this.meta7251 = meta7251;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7252,meta7251__$1){
var self__ = this;
var _7252__$1 = this;
return (new cljs.core.async.t_cljs$core$async7250(self__.flag,self__.cb,meta7251__$1));
});

cljs.core.async.t_cljs$core$async7250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7252){
var self__ = this;
var _7252__$1 = this;
return self__.meta7251;
});

cljs.core.async.t_cljs$core$async7250.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7250.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async7250.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7250.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async7250.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta7251","meta7251",367368376,null)], null);
});

cljs.core.async.t_cljs$core$async7250.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7250.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7250";

cljs.core.async.t_cljs$core$async7250.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async7250");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7250.
 */
cljs.core.async.__GT_t_cljs$core$async7250 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async7250(flag__$1,cb__$1,meta7251){
return (new cljs.core.async.t_cljs$core$async7250(flag__$1,cb__$1,meta7251));
});

}

return (new cljs.core.async.t_cljs$core$async7250(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7253_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7253_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7254_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7254_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__7255 = (i + (1));
i = G__7255;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___7261 = arguments.length;
var i__4642__auto___7262 = (0);
while(true){
if((i__4642__auto___7262 < len__4641__auto___7261)){
args__4647__auto__.push((arguments[i__4642__auto___7262]));

var G__7263 = (i__4642__auto___7262 + (1));
i__4642__auto___7262 = G__7263;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__7258){
var map__7259 = p__7258;
var map__7259__$1 = (((((!((map__7259 == null))))?(((((map__7259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7259):map__7259);
var opts = map__7259__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq7256){
var G__7257 = cljs.core.first.call(null,seq7256);
var seq7256__$1 = cljs.core.next.call(null,seq7256);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7257,seq7256__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__7265 = arguments.length;
switch (G__7265) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__5300__auto___7311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5300__auto___7311){
return (function (){
var f__5301__auto__ = (function (){var switch__5133__auto__ = ((function (c__5300__auto___7311){
return (function (state_7289){
var state_val_7290 = (state_7289[(1)]);
if((state_val_7290 === (7))){
var inst_7285 = (state_7289[(2)]);
var state_7289__$1 = state_7289;
var statearr_7291_7312 = state_7289__$1;
(statearr_7291_7312[(2)] = inst_7285);

(statearr_7291_7312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7290 === (1))){
var state_7289__$1 = state_7289;
var statearr_7292_7313 = state_7289__$1;
(statearr_7292_7313[(2)] = null);

(statearr_7292_7313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7290 === (4))){
var inst_7268 = (state_7289[(7)]);
var inst_7268__$1 = (state_7289[(2)]);
var inst_7269 = (inst_7268__$1 == null);
var state_7289__$1 = (function (){var statearr_7293 = state_7289;
(statearr_7293[(7)] = inst_7268__$1);

return statearr_7293;
})();
if(cljs.core.truth_(inst_7269)){
var statearr_7294_7314 = state_7289__$1;
(statearr_7294_7314[(1)] = (5));

} else {
var statearr_7295_7315 = state_7289__$1;
(statearr_7295_7315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7290 === (13))){
var state_7289__$1 = state_7289;
var statearr_7296_7316 = state_7289__$1;
(statearr_7296_7316[(2)] = null);

(statearr_7296_7316[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7290 === (6))){
var inst_7268 = (state_7289[(7)]);
var state_7289__$1 = state_7289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7289__$1,(11),to,inst_7268);
} else {
if((state_val_7290 === (3))){
var inst_7287 = (state_7289[(2)]);
var state_7289__$1 = state_7289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7289__$1,inst_7287);
} else {
if((state_val_7290 === (12))){
var state_7289__$1 = state_7289;
var statearr_7297_7317 = state_7289__$1;
(statearr_7297_7317[(2)] = null);

(statearr_7297_7317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7290 === (2))){
var state_7289__$1 = state_7289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7289__$1,(4),from);
} else {
if((state_val_7290 === (11))){
var inst_7278 = (state_7289[(2)]);
var state_7289__$1 = state_7289;
if(cljs.core.truth_(inst_7278)){
var statearr_7298_7318 = state_7289__$1;
(statearr_7298_7318[(1)] = (12));

} else {
var statearr_7299_7319 = state_7289__$1;
(statearr_7299_7319[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7290 === (9))){
var state_7289__$1 = state_7289;
var statearr_7300_7320 = state_7289__$1;
(statearr_7300_7320[(2)] = null);

(statearr_7300_7320[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7290 === (5))){
var state_7289__$1 = state_7289;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7301_7321 = state_7289__$1;
(statearr_7301_7321[(1)] = (8));

} else {
var statearr_7302_7322 = state_7289__$1;
(statearr_7302_7322[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7290 === (14))){
var inst_7283 = (state_7289[(2)]);
var state_7289__$1 = state_7289;
var statearr_7303_7323 = state_7289__$1;
(statearr_7303_7323[(2)] = inst_7283);

(statearr_7303_7323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7290 === (10))){
var inst_7275 = (state_7289[(2)]);
var state_7289__$1 = state_7289;
var statearr_7304_7324 = state_7289__$1;
(statearr_7304_7324[(2)] = inst_7275);

(statearr_7304_7324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7290 === (8))){
var inst_7272 = cljs.core.async.close_BANG_.call(null,to);
var state_7289__$1 = state_7289;
var statearr_7305_7325 = state_7289__$1;
(statearr_7305_7325[(2)] = inst_7272);

(statearr_7305_7325[(1)] = (10));


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
});})(c__5300__auto___7311))
;
return ((function (switch__5133__auto__,c__5300__auto___7311){
return (function() {
var cljs$core$async$state_machine__5134__auto__ = null;
var cljs$core$async$state_machine__5134__auto____0 = (function (){
var statearr_7306 = [null,null,null,null,null,null,null,null];
(statearr_7306[(0)] = cljs$core$async$state_machine__5134__auto__);

(statearr_7306[(1)] = (1));

return statearr_7306;
});
var cljs$core$async$state_machine__5134__auto____1 = (function (state_7289){
while(true){
var ret_value__5135__auto__ = (function (){try{while(true){
var result__5136__auto__ = switch__5133__auto__.call(null,state_7289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5136__auto__;
}
break;
}
}catch (e7307){if((e7307 instanceof Object)){
var ex__5137__auto__ = e7307;
var statearr_7308_7326 = state_7289;
(statearr_7308_7326[(5)] = ex__5137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7327 = state_7289;
state_7289 = G__7327;
continue;
} else {
return ret_value__5135__auto__;
}
break;
}
});
cljs$core$async$state_machine__5134__auto__ = function(state_7289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5134__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5134__auto____1.call(this,state_7289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5134__auto____0;
cljs$core$async$state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5134__auto____1;
return cljs$core$async$state_machine__5134__auto__;
})()
;})(switch__5133__auto__,c__5300__auto___7311))
})();
var state__5302__auto__ = (function (){var statearr_7309 = f__5301__auto__.call(null);
(statearr_7309[(6)] = c__5300__auto___7311);

return statearr_7309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5302__auto__);
});})(c__5300__auto___7311))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__7328){
var vec__7329 = p__7328;
var v = cljs.core.nth.call(null,vec__7329,(0),null);
var p = cljs.core.nth.call(null,vec__7329,(1),null);
var job = vec__7329;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__5300__auto___7500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5300__auto___7500,res,vec__7329,v,p,job,jobs,results){
return (function (){
var f__5301__auto__ = (function (){var switch__5133__auto__ = ((function (c__5300__auto___7500,res,vec__7329,v,p,job,jobs,results){
return (function (state_7336){
var state_val_7337 = (state_7336[(1)]);
if((state_val_7337 === (1))){
var state_7336__$1 = state_7336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7336__$1,(2),res,v);
} else {
if((state_val_7337 === (2))){
var inst_7333 = (state_7336[(2)]);
var inst_7334 = cljs.core.async.close_BANG_.call(null,res);
var state_7336__$1 = (function (){var statearr_7338 = state_7336;
(statearr_7338[(7)] = inst_7333);

return statearr_7338;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7336__$1,inst_7334);
} else {
return null;
}
}
});})(c__5300__auto___7500,res,vec__7329,v,p,job,jobs,results))
;
return ((function (switch__5133__auto__,c__5300__auto___7500,res,vec__7329,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____0 = (function (){
var statearr_7339 = [null,null,null,null,null,null,null,null];
(statearr_7339[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__);

(statearr_7339[(1)] = (1));

return statearr_7339;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____1 = (function (state_7336){
while(true){
var ret_value__5135__auto__ = (function (){try{while(true){
var result__5136__auto__ = switch__5133__auto__.call(null,state_7336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5136__auto__;
}
break;
}
}catch (e7340){if((e7340 instanceof Object)){
var ex__5137__auto__ = e7340;
var statearr_7341_7501 = state_7336;
(statearr_7341_7501[(5)] = ex__5137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7502 = state_7336;
state_7336 = G__7502;
continue;
} else {
return ret_value__5135__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__ = function(state_7336){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____1.call(this,state_7336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__;
})()
;})(switch__5133__auto__,c__5300__auto___7500,res,vec__7329,v,p,job,jobs,results))
})();
var state__5302__auto__ = (function (){var statearr_7342 = f__5301__auto__.call(null);
(statearr_7342[(6)] = c__5300__auto___7500);

return statearr_7342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5302__auto__);
});})(c__5300__auto___7500,res,vec__7329,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__7343){
var vec__7344 = p__7343;
var v = cljs.core.nth.call(null,vec__7344,(0),null);
var p = cljs.core.nth.call(null,vec__7344,(1),null);
var job = vec__7344;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___7503 = n;
var __7504 = (0);
while(true){
if((__7504 < n__4518__auto___7503)){
var G__7347_7505 = type;
var G__7347_7506__$1 = (((G__7347_7505 instanceof cljs.core.Keyword))?G__7347_7505.fqn:null);
switch (G__7347_7506__$1) {
case "compute":
var c__5300__auto___7508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7504,c__5300__auto___7508,G__7347_7505,G__7347_7506__$1,n__4518__auto___7503,jobs,results,process,async){
return (function (){
var f__5301__auto__ = (function (){var switch__5133__auto__ = ((function (__7504,c__5300__auto___7508,G__7347_7505,G__7347_7506__$1,n__4518__auto___7503,jobs,results,process,async){
return (function (state_7360){
var state_val_7361 = (state_7360[(1)]);
if((state_val_7361 === (1))){
var state_7360__$1 = state_7360;
var statearr_7362_7509 = state_7360__$1;
(statearr_7362_7509[(2)] = null);

(statearr_7362_7509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7361 === (2))){
var state_7360__$1 = state_7360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7360__$1,(4),jobs);
} else {
if((state_val_7361 === (3))){
var inst_7358 = (state_7360[(2)]);
var state_7360__$1 = state_7360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7360__$1,inst_7358);
} else {
if((state_val_7361 === (4))){
var inst_7350 = (state_7360[(2)]);
var inst_7351 = process.call(null,inst_7350);
var state_7360__$1 = state_7360;
if(cljs.core.truth_(inst_7351)){
var statearr_7363_7510 = state_7360__$1;
(statearr_7363_7510[(1)] = (5));

} else {
var statearr_7364_7511 = state_7360__$1;
(statearr_7364_7511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7361 === (5))){
var state_7360__$1 = state_7360;
var statearr_7365_7512 = state_7360__$1;
(statearr_7365_7512[(2)] = null);

(statearr_7365_7512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7361 === (6))){
var state_7360__$1 = state_7360;
var statearr_7366_7513 = state_7360__$1;
(statearr_7366_7513[(2)] = null);

(statearr_7366_7513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7361 === (7))){
var inst_7356 = (state_7360[(2)]);
var state_7360__$1 = state_7360;
var statearr_7367_7514 = state_7360__$1;
(statearr_7367_7514[(2)] = inst_7356);

(statearr_7367_7514[(1)] = (3));


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
});})(__7504,c__5300__auto___7508,G__7347_7505,G__7347_7506__$1,n__4518__auto___7503,jobs,results,process,async))
;
return ((function (__7504,switch__5133__auto__,c__5300__auto___7508,G__7347_7505,G__7347_7506__$1,n__4518__auto___7503,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____0 = (function (){
var statearr_7368 = [null,null,null,null,null,null,null];
(statearr_7368[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__);

(statearr_7368[(1)] = (1));

return statearr_7368;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____1 = (function (state_7360){
while(true){
var ret_value__5135__auto__ = (function (){try{while(true){
var result__5136__auto__ = switch__5133__auto__.call(null,state_7360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5136__auto__;
}
break;
}
}catch (e7369){if((e7369 instanceof Object)){
var ex__5137__auto__ = e7369;
var statearr_7370_7515 = state_7360;
(statearr_7370_7515[(5)] = ex__5137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7516 = state_7360;
state_7360 = G__7516;
continue;
} else {
return ret_value__5135__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__ = function(state_7360){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____1.call(this,state_7360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__;
})()
;})(__7504,switch__5133__auto__,c__5300__auto___7508,G__7347_7505,G__7347_7506__$1,n__4518__auto___7503,jobs,results,process,async))
})();
var state__5302__auto__ = (function (){var statearr_7371 = f__5301__auto__.call(null);
(statearr_7371[(6)] = c__5300__auto___7508);

return statearr_7371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5302__auto__);
});})(__7504,c__5300__auto___7508,G__7347_7505,G__7347_7506__$1,n__4518__auto___7503,jobs,results,process,async))
);


break;
case "async":
var c__5300__auto___7517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7504,c__5300__auto___7517,G__7347_7505,G__7347_7506__$1,n__4518__auto___7503,jobs,results,process,async){
return (function (){
var f__5301__auto__ = (function (){var switch__5133__auto__ = ((function (__7504,c__5300__auto___7517,G__7347_7505,G__7347_7506__$1,n__4518__auto___7503,jobs,results,process,async){
return (function (state_7384){
var state_val_7385 = (state_7384[(1)]);
if((state_val_7385 === (1))){
var state_7384__$1 = state_7384;
var statearr_7386_7518 = state_7384__$1;
(statearr_7386_7518[(2)] = null);

(statearr_7386_7518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7385 === (2))){
var state_7384__$1 = state_7384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7384__$1,(4),jobs);
} else {
if((state_val_7385 === (3))){
var inst_7382 = (state_7384[(2)]);
var state_7384__$1 = state_7384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7384__$1,inst_7382);
} else {
if((state_val_7385 === (4))){
var inst_7374 = (state_7384[(2)]);
var inst_7375 = async.call(null,inst_7374);
var state_7384__$1 = state_7384;
if(cljs.core.truth_(inst_7375)){
var statearr_7387_7519 = state_7384__$1;
(statearr_7387_7519[(1)] = (5));

} else {
var statearr_7388_7520 = state_7384__$1;
(statearr_7388_7520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7385 === (5))){
var state_7384__$1 = state_7384;
var statearr_7389_7521 = state_7384__$1;
(statearr_7389_7521[(2)] = null);

(statearr_7389_7521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7385 === (6))){
var state_7384__$1 = state_7384;
var statearr_7390_7522 = state_7384__$1;
(statearr_7390_7522[(2)] = null);

(statearr_7390_7522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7385 === (7))){
var inst_7380 = (state_7384[(2)]);
var state_7384__$1 = state_7384;
var statearr_7391_7523 = state_7384__$1;
(statearr_7391_7523[(2)] = inst_7380);

(statearr_7391_7523[(1)] = (3));


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
});})(__7504,c__5300__auto___7517,G__7347_7505,G__7347_7506__$1,n__4518__auto___7503,jobs,results,process,async))
;
return ((function (__7504,switch__5133__auto__,c__5300__auto___7517,G__7347_7505,G__7347_7506__$1,n__4518__auto___7503,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____0 = (function (){
var statearr_7392 = [null,null,null,null,null,null,null];
(statearr_7392[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__);

(statearr_7392[(1)] = (1));

return statearr_7392;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____1 = (function (state_7384){
while(true){
var ret_value__5135__auto__ = (function (){try{while(true){
var result__5136__auto__ = switch__5133__auto__.call(null,state_7384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5136__auto__;
}
break;
}
}catch (e7393){if((e7393 instanceof Object)){
var ex__5137__auto__ = e7393;
var statearr_7394_7524 = state_7384;
(statearr_7394_7524[(5)] = ex__5137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7525 = state_7384;
state_7384 = G__7525;
continue;
} else {
return ret_value__5135__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__ = function(state_7384){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____1.call(this,state_7384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__;
})()
;})(__7504,switch__5133__auto__,c__5300__auto___7517,G__7347_7505,G__7347_7506__$1,n__4518__auto___7503,jobs,results,process,async))
})();
var state__5302__auto__ = (function (){var statearr_7395 = f__5301__auto__.call(null);
(statearr_7395[(6)] = c__5300__auto___7517);

return statearr_7395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5302__auto__);
});})(__7504,c__5300__auto___7517,G__7347_7505,G__7347_7506__$1,n__4518__auto___7503,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7347_7506__$1)].join('')));

}

var G__7526 = (__7504 + (1));
__7504 = G__7526;
continue;
} else {
}
break;
}

var c__5300__auto___7527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5300__auto___7527,jobs,results,process,async){
return (function (){
var f__5301__auto__ = (function (){var switch__5133__auto__ = ((function (c__5300__auto___7527,jobs,results,process,async){
return (function (state_7417){
var state_val_7418 = (state_7417[(1)]);
if((state_val_7418 === (7))){
var inst_7413 = (state_7417[(2)]);
var state_7417__$1 = state_7417;
var statearr_7419_7528 = state_7417__$1;
(statearr_7419_7528[(2)] = inst_7413);

(statearr_7419_7528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7418 === (1))){
var state_7417__$1 = state_7417;
var statearr_7420_7529 = state_7417__$1;
(statearr_7420_7529[(2)] = null);

(statearr_7420_7529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7418 === (4))){
var inst_7398 = (state_7417[(7)]);
var inst_7398__$1 = (state_7417[(2)]);
var inst_7399 = (inst_7398__$1 == null);
var state_7417__$1 = (function (){var statearr_7421 = state_7417;
(statearr_7421[(7)] = inst_7398__$1);

return statearr_7421;
})();
if(cljs.core.truth_(inst_7399)){
var statearr_7422_7530 = state_7417__$1;
(statearr_7422_7530[(1)] = (5));

} else {
var statearr_7423_7531 = state_7417__$1;
(statearr_7423_7531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7418 === (6))){
var inst_7398 = (state_7417[(7)]);
var inst_7403 = (state_7417[(8)]);
var inst_7403__$1 = cljs.core.async.chan.call(null,(1));
var inst_7404 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7405 = [inst_7398,inst_7403__$1];
var inst_7406 = (new cljs.core.PersistentVector(null,2,(5),inst_7404,inst_7405,null));
var state_7417__$1 = (function (){var statearr_7424 = state_7417;
(statearr_7424[(8)] = inst_7403__$1);

return statearr_7424;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7417__$1,(8),jobs,inst_7406);
} else {
if((state_val_7418 === (3))){
var inst_7415 = (state_7417[(2)]);
var state_7417__$1 = state_7417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7417__$1,inst_7415);
} else {
if((state_val_7418 === (2))){
var state_7417__$1 = state_7417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7417__$1,(4),from);
} else {
if((state_val_7418 === (9))){
var inst_7410 = (state_7417[(2)]);
var state_7417__$1 = (function (){var statearr_7425 = state_7417;
(statearr_7425[(9)] = inst_7410);

return statearr_7425;
})();
var statearr_7426_7532 = state_7417__$1;
(statearr_7426_7532[(2)] = null);

(statearr_7426_7532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7418 === (5))){
var inst_7401 = cljs.core.async.close_BANG_.call(null,jobs);
var state_7417__$1 = state_7417;
var statearr_7427_7533 = state_7417__$1;
(statearr_7427_7533[(2)] = inst_7401);

(statearr_7427_7533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7418 === (8))){
var inst_7403 = (state_7417[(8)]);
var inst_7408 = (state_7417[(2)]);
var state_7417__$1 = (function (){var statearr_7428 = state_7417;
(statearr_7428[(10)] = inst_7408);

return statearr_7428;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7417__$1,(9),results,inst_7403);
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
});})(c__5300__auto___7527,jobs,results,process,async))
;
return ((function (switch__5133__auto__,c__5300__auto___7527,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____0 = (function (){
var statearr_7429 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7429[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__);

(statearr_7429[(1)] = (1));

return statearr_7429;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____1 = (function (state_7417){
while(true){
var ret_value__5135__auto__ = (function (){try{while(true){
var result__5136__auto__ = switch__5133__auto__.call(null,state_7417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5136__auto__;
}
break;
}
}catch (e7430){if((e7430 instanceof Object)){
var ex__5137__auto__ = e7430;
var statearr_7431_7534 = state_7417;
(statearr_7431_7534[(5)] = ex__5137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7535 = state_7417;
state_7417 = G__7535;
continue;
} else {
return ret_value__5135__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__ = function(state_7417){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____1.call(this,state_7417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__;
})()
;})(switch__5133__auto__,c__5300__auto___7527,jobs,results,process,async))
})();
var state__5302__auto__ = (function (){var statearr_7432 = f__5301__auto__.call(null);
(statearr_7432[(6)] = c__5300__auto___7527);

return statearr_7432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5302__auto__);
});})(c__5300__auto___7527,jobs,results,process,async))
);


var c__5300__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5300__auto__,jobs,results,process,async){
return (function (){
var f__5301__auto__ = (function (){var switch__5133__auto__ = ((function (c__5300__auto__,jobs,results,process,async){
return (function (state_7470){
var state_val_7471 = (state_7470[(1)]);
if((state_val_7471 === (7))){
var inst_7466 = (state_7470[(2)]);
var state_7470__$1 = state_7470;
var statearr_7472_7536 = state_7470__$1;
(statearr_7472_7536[(2)] = inst_7466);

(statearr_7472_7536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7471 === (20))){
var state_7470__$1 = state_7470;
var statearr_7473_7537 = state_7470__$1;
(statearr_7473_7537[(2)] = null);

(statearr_7473_7537[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7471 === (1))){
var state_7470__$1 = state_7470;
var statearr_7474_7538 = state_7470__$1;
(statearr_7474_7538[(2)] = null);

(statearr_7474_7538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7471 === (4))){
var inst_7435 = (state_7470[(7)]);
var inst_7435__$1 = (state_7470[(2)]);
var inst_7436 = (inst_7435__$1 == null);
var state_7470__$1 = (function (){var statearr_7475 = state_7470;
(statearr_7475[(7)] = inst_7435__$1);

return statearr_7475;
})();
if(cljs.core.truth_(inst_7436)){
var statearr_7476_7539 = state_7470__$1;
(statearr_7476_7539[(1)] = (5));

} else {
var statearr_7477_7540 = state_7470__$1;
(statearr_7477_7540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7471 === (15))){
var inst_7448 = (state_7470[(8)]);
var state_7470__$1 = state_7470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7470__$1,(18),to,inst_7448);
} else {
if((state_val_7471 === (21))){
var inst_7461 = (state_7470[(2)]);
var state_7470__$1 = state_7470;
var statearr_7478_7541 = state_7470__$1;
(statearr_7478_7541[(2)] = inst_7461);

(statearr_7478_7541[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7471 === (13))){
var inst_7463 = (state_7470[(2)]);
var state_7470__$1 = (function (){var statearr_7479 = state_7470;
(statearr_7479[(9)] = inst_7463);

return statearr_7479;
})();
var statearr_7480_7542 = state_7470__$1;
(statearr_7480_7542[(2)] = null);

(statearr_7480_7542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7471 === (6))){
var inst_7435 = (state_7470[(7)]);
var state_7470__$1 = state_7470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7470__$1,(11),inst_7435);
} else {
if((state_val_7471 === (17))){
var inst_7456 = (state_7470[(2)]);
var state_7470__$1 = state_7470;
if(cljs.core.truth_(inst_7456)){
var statearr_7481_7543 = state_7470__$1;
(statearr_7481_7543[(1)] = (19));

} else {
var statearr_7482_7544 = state_7470__$1;
(statearr_7482_7544[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7471 === (3))){
var inst_7468 = (state_7470[(2)]);
var state_7470__$1 = state_7470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7470__$1,inst_7468);
} else {
if((state_val_7471 === (12))){
var inst_7445 = (state_7470[(10)]);
var state_7470__$1 = state_7470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7470__$1,(14),inst_7445);
} else {
if((state_val_7471 === (2))){
var state_7470__$1 = state_7470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7470__$1,(4),results);
} else {
if((state_val_7471 === (19))){
var state_7470__$1 = state_7470;
var statearr_7483_7545 = state_7470__$1;
(statearr_7483_7545[(2)] = null);

(statearr_7483_7545[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7471 === (11))){
var inst_7445 = (state_7470[(2)]);
var state_7470__$1 = (function (){var statearr_7484 = state_7470;
(statearr_7484[(10)] = inst_7445);

return statearr_7484;
})();
var statearr_7485_7546 = state_7470__$1;
(statearr_7485_7546[(2)] = null);

(statearr_7485_7546[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7471 === (9))){
var state_7470__$1 = state_7470;
var statearr_7486_7547 = state_7470__$1;
(statearr_7486_7547[(2)] = null);

(statearr_7486_7547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7471 === (5))){
var state_7470__$1 = state_7470;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7487_7548 = state_7470__$1;
(statearr_7487_7548[(1)] = (8));

} else {
var statearr_7488_7549 = state_7470__$1;
(statearr_7488_7549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7471 === (14))){
var inst_7450 = (state_7470[(11)]);
var inst_7448 = (state_7470[(8)]);
var inst_7448__$1 = (state_7470[(2)]);
var inst_7449 = (inst_7448__$1 == null);
var inst_7450__$1 = cljs.core.not.call(null,inst_7449);
var state_7470__$1 = (function (){var statearr_7489 = state_7470;
(statearr_7489[(11)] = inst_7450__$1);

(statearr_7489[(8)] = inst_7448__$1);

return statearr_7489;
})();
if(inst_7450__$1){
var statearr_7490_7550 = state_7470__$1;
(statearr_7490_7550[(1)] = (15));

} else {
var statearr_7491_7551 = state_7470__$1;
(statearr_7491_7551[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7471 === (16))){
var inst_7450 = (state_7470[(11)]);
var state_7470__$1 = state_7470;
var statearr_7492_7552 = state_7470__$1;
(statearr_7492_7552[(2)] = inst_7450);

(statearr_7492_7552[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7471 === (10))){
var inst_7442 = (state_7470[(2)]);
var state_7470__$1 = state_7470;
var statearr_7493_7553 = state_7470__$1;
(statearr_7493_7553[(2)] = inst_7442);

(statearr_7493_7553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7471 === (18))){
var inst_7453 = (state_7470[(2)]);
var state_7470__$1 = state_7470;
var statearr_7494_7554 = state_7470__$1;
(statearr_7494_7554[(2)] = inst_7453);

(statearr_7494_7554[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7471 === (8))){
var inst_7439 = cljs.core.async.close_BANG_.call(null,to);
var state_7470__$1 = state_7470;
var statearr_7495_7555 = state_7470__$1;
(statearr_7495_7555[(2)] = inst_7439);

(statearr_7495_7555[(1)] = (10));


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
});})(c__5300__auto__,jobs,results,process,async))
;
return ((function (switch__5133__auto__,c__5300__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____0 = (function (){
var statearr_7496 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7496[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__);

(statearr_7496[(1)] = (1));

return statearr_7496;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____1 = (function (state_7470){
while(true){
var ret_value__5135__auto__ = (function (){try{while(true){
var result__5136__auto__ = switch__5133__auto__.call(null,state_7470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5136__auto__;
}
break;
}
}catch (e7497){if((e7497 instanceof Object)){
var ex__5137__auto__ = e7497;
var statearr_7498_7556 = state_7470;
(statearr_7498_7556[(5)] = ex__5137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7557 = state_7470;
state_7470 = G__7557;
continue;
} else {
return ret_value__5135__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__ = function(state_7470){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____1.call(this,state_7470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5134__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5134__auto__;
})()
;})(switch__5133__auto__,c__5300__auto__,jobs,results,process,async))
})();
var state__5302__auto__ = (function (){var statearr_7499 = f__5301__auto__.call(null);
(statearr_7499[(6)] = c__5300__auto__);

return statearr_7499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5302__auto__);
});})(c__5300__auto__,jobs,results,process,async))
);

return c__5300__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__7559 = arguments.length;
switch (G__7559) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__7562 = arguments.length;
switch (G__7562) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__7565 = arguments.length;
switch (G__7565) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__5300__auto___7614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5300__auto___7614,tc,fc){
return (function (){
var f__5301__auto__ = (function (){var switch__5133__auto__ = ((function (c__5300__auto___7614,tc,fc){
return (function (state_7591){
var state_val_7592 = (state_7591[(1)]);
if((state_val_7592 === (7))){
var inst_7587 = (state_7591[(2)]);
var state_7591__$1 = state_7591;
var statearr_7593_7615 = state_7591__$1;
(statearr_7593_7615[(2)] = inst_7587);

(statearr_7593_7615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7592 === (1))){
var state_7591__$1 = state_7591;
var statearr_7594_7616 = state_7591__$1;
(statearr_7594_7616[(2)] = null);

(statearr_7594_7616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7592 === (4))){
var inst_7568 = (state_7591[(7)]);
var inst_7568__$1 = (state_7591[(2)]);
var inst_7569 = (inst_7568__$1 == null);
var state_7591__$1 = (function (){var statearr_7595 = state_7591;
(statearr_7595[(7)] = inst_7568__$1);

return statearr_7595;
})();
if(cljs.core.truth_(inst_7569)){
var statearr_7596_7617 = state_7591__$1;
(statearr_7596_7617[(1)] = (5));

} else {
var statearr_7597_7618 = state_7591__$1;
(statearr_7597_7618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7592 === (13))){
var state_7591__$1 = state_7591;
var statearr_7598_7619 = state_7591__$1;
(statearr_7598_7619[(2)] = null);

(statearr_7598_7619[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7592 === (6))){
var inst_7568 = (state_7591[(7)]);
var inst_7574 = p.call(null,inst_7568);
var state_7591__$1 = state_7591;
if(cljs.core.truth_(inst_7574)){
var statearr_7599_7620 = state_7591__$1;
(statearr_7599_7620[(1)] = (9));

} else {
var statearr_7600_7621 = state_7591__$1;
(statearr_7600_7621[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7592 === (3))){
var inst_7589 = (state_7591[(2)]);
var state_7591__$1 = state_7591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7591__$1,inst_7589);
} else {
if((state_val_7592 === (12))){
var state_7591__$1 = state_7591;
var statearr_7601_7622 = state_7591__$1;
(statearr_7601_7622[(2)] = null);

(statearr_7601_7622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7592 === (2))){
var state_7591__$1 = state_7591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7591__$1,(4),ch);
} else {
if((state_val_7592 === (11))){
var inst_7568 = (state_7591[(7)]);
var inst_7578 = (state_7591[(2)]);
var state_7591__$1 = state_7591;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7591__$1,(8),inst_7578,inst_7568);
} else {
if((state_val_7592 === (9))){
var state_7591__$1 = state_7591;
var statearr_7602_7623 = state_7591__$1;
(statearr_7602_7623[(2)] = tc);

(statearr_7602_7623[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7592 === (5))){
var inst_7571 = cljs.core.async.close_BANG_.call(null,tc);
var inst_7572 = cljs.core.async.close_BANG_.call(null,fc);
var state_7591__$1 = (function (){var statearr_7603 = state_7591;
(statearr_7603[(8)] = inst_7571);

return statearr_7603;
})();
var statearr_7604_7624 = state_7591__$1;
(statearr_7604_7624[(2)] = inst_7572);

(statearr_7604_7624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7592 === (14))){
var inst_7585 = (state_7591[(2)]);
var state_7591__$1 = state_7591;
var statearr_7605_7625 = state_7591__$1;
(statearr_7605_7625[(2)] = inst_7585);

(statearr_7605_7625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7592 === (10))){
var state_7591__$1 = state_7591;
var statearr_7606_7626 = state_7591__$1;
(statearr_7606_7626[(2)] = fc);

(statearr_7606_7626[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7592 === (8))){
var inst_7580 = (state_7591[(2)]);
var state_7591__$1 = state_7591;
if(cljs.core.truth_(inst_7580)){
var statearr_7607_7627 = state_7591__$1;
(statearr_7607_7627[(1)] = (12));

} else {
var statearr_7608_7628 = state_7591__$1;
(statearr_7608_7628[(1)] = (13));

}

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
});})(c__5300__auto___7614,tc,fc))
;
return ((function (switch__5133__auto__,c__5300__auto___7614,tc,fc){
return (function() {
var cljs$core$async$state_machine__5134__auto__ = null;
var cljs$core$async$state_machine__5134__auto____0 = (function (){
var statearr_7609 = [null,null,null,null,null,null,null,null,null];
(statearr_7609[(0)] = cljs$core$async$state_machine__5134__auto__);

(statearr_7609[(1)] = (1));

return statearr_7609;
});
var cljs$core$async$state_machine__5134__auto____1 = (function (state_7591){
while(true){
var ret_value__5135__auto__ = (function (){try{while(true){
var result__5136__auto__ = switch__5133__auto__.call(null,state_7591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5136__auto__;
}
break;
}
}catch (e7610){if((e7610 instanceof Object)){
var ex__5137__auto__ = e7610;
var statearr_7611_7629 = state_7591;
(statearr_7611_7629[(5)] = ex__5137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7630 = state_7591;
state_7591 = G__7630;
continue;
} else {
return ret_value__5135__auto__;
}
break;
}
});
cljs$core$async$state_machine__5134__auto__ = function(state_7591){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5134__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5134__auto____1.call(this,state_7591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5134__auto____0;
cljs$core$async$state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5134__auto____1;
return cljs$core$async$state_machine__5134__auto__;
})()
;})(switch__5133__auto__,c__5300__auto___7614,tc,fc))
})();
var state__5302__auto__ = (function (){var statearr_7612 = f__5301__auto__.call(null);
(statearr_7612[(6)] = c__5300__auto___7614);

return statearr_7612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5302__auto__);
});})(c__5300__auto___7614,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__5300__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5300__auto__){
return (function (){
var f__5301__auto__ = (function (){var switch__5133__auto__ = ((function (c__5300__auto__){
return (function (state_7651){
var state_val_7652 = (state_7651[(1)]);
if((state_val_7652 === (7))){
var inst_7647 = (state_7651[(2)]);
var state_7651__$1 = state_7651;
var statearr_7653_7671 = state_7651__$1;
(statearr_7653_7671[(2)] = inst_7647);

(statearr_7653_7671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7652 === (1))){
var inst_7631 = init;
var state_7651__$1 = (function (){var statearr_7654 = state_7651;
(statearr_7654[(7)] = inst_7631);

return statearr_7654;
})();
var statearr_7655_7672 = state_7651__$1;
(statearr_7655_7672[(2)] = null);

(statearr_7655_7672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7652 === (4))){
var inst_7634 = (state_7651[(8)]);
var inst_7634__$1 = (state_7651[(2)]);
var inst_7635 = (inst_7634__$1 == null);
var state_7651__$1 = (function (){var statearr_7656 = state_7651;
(statearr_7656[(8)] = inst_7634__$1);

return statearr_7656;
})();
if(cljs.core.truth_(inst_7635)){
var statearr_7657_7673 = state_7651__$1;
(statearr_7657_7673[(1)] = (5));

} else {
var statearr_7658_7674 = state_7651__$1;
(statearr_7658_7674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7652 === (6))){
var inst_7634 = (state_7651[(8)]);
var inst_7638 = (state_7651[(9)]);
var inst_7631 = (state_7651[(7)]);
var inst_7638__$1 = f.call(null,inst_7631,inst_7634);
var inst_7639 = cljs.core.reduced_QMARK_.call(null,inst_7638__$1);
var state_7651__$1 = (function (){var statearr_7659 = state_7651;
(statearr_7659[(9)] = inst_7638__$1);

return statearr_7659;
})();
if(inst_7639){
var statearr_7660_7675 = state_7651__$1;
(statearr_7660_7675[(1)] = (8));

} else {
var statearr_7661_7676 = state_7651__$1;
(statearr_7661_7676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7652 === (3))){
var inst_7649 = (state_7651[(2)]);
var state_7651__$1 = state_7651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7651__$1,inst_7649);
} else {
if((state_val_7652 === (2))){
var state_7651__$1 = state_7651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7651__$1,(4),ch);
} else {
if((state_val_7652 === (9))){
var inst_7638 = (state_7651[(9)]);
var inst_7631 = inst_7638;
var state_7651__$1 = (function (){var statearr_7662 = state_7651;
(statearr_7662[(7)] = inst_7631);

return statearr_7662;
})();
var statearr_7663_7677 = state_7651__$1;
(statearr_7663_7677[(2)] = null);

(statearr_7663_7677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7652 === (5))){
var inst_7631 = (state_7651[(7)]);
var state_7651__$1 = state_7651;
var statearr_7664_7678 = state_7651__$1;
(statearr_7664_7678[(2)] = inst_7631);

(statearr_7664_7678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7652 === (10))){
var inst_7645 = (state_7651[(2)]);
var state_7651__$1 = state_7651;
var statearr_7665_7679 = state_7651__$1;
(statearr_7665_7679[(2)] = inst_7645);

(statearr_7665_7679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7652 === (8))){
var inst_7638 = (state_7651[(9)]);
var inst_7641 = cljs.core.deref.call(null,inst_7638);
var state_7651__$1 = state_7651;
var statearr_7666_7680 = state_7651__$1;
(statearr_7666_7680[(2)] = inst_7641);

(statearr_7666_7680[(1)] = (10));


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
});})(c__5300__auto__))
;
return ((function (switch__5133__auto__,c__5300__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__5134__auto__ = null;
var cljs$core$async$reduce_$_state_machine__5134__auto____0 = (function (){
var statearr_7667 = [null,null,null,null,null,null,null,null,null,null];
(statearr_7667[(0)] = cljs$core$async$reduce_$_state_machine__5134__auto__);

(statearr_7667[(1)] = (1));

return statearr_7667;
});
var cljs$core$async$reduce_$_state_machine__5134__auto____1 = (function (state_7651){
while(true){
var ret_value__5135__auto__ = (function (){try{while(true){
var result__5136__auto__ = switch__5133__auto__.call(null,state_7651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5136__auto__;
}
break;
}
}catch (e7668){if((e7668 instanceof Object)){
var ex__5137__auto__ = e7668;
var statearr_7669_7681 = state_7651;
(statearr_7669_7681[(5)] = ex__5137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7682 = state_7651;
state_7651 = G__7682;
continue;
} else {
return ret_value__5135__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__5134__auto__ = function(state_7651){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__5134__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__5134__auto____1.call(this,state_7651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__5134__auto____0;
cljs$core$async$reduce_$_state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__5134__auto____1;
return cljs$core$async$reduce_$_state_machine__5134__auto__;
})()
;})(switch__5133__auto__,c__5300__auto__))
})();
var state__5302__auto__ = (function (){var statearr_7670 = f__5301__auto__.call(null);
(statearr_7670[(6)] = c__5300__auto__);

return statearr_7670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5302__auto__);
});})(c__5300__auto__))
);

return c__5300__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__5300__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5300__auto__,f__$1){
return (function (){
var f__5301__auto__ = (function (){var switch__5133__auto__ = ((function (c__5300__auto__,f__$1){
return (function (state_7688){
var state_val_7689 = (state_7688[(1)]);
if((state_val_7689 === (1))){
var inst_7683 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_7688__$1 = state_7688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7688__$1,(2),inst_7683);
} else {
if((state_val_7689 === (2))){
var inst_7685 = (state_7688[(2)]);
var inst_7686 = f__$1.call(null,inst_7685);
var state_7688__$1 = state_7688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7688__$1,inst_7686);
} else {
return null;
}
}
});})(c__5300__auto__,f__$1))
;
return ((function (switch__5133__auto__,c__5300__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__5134__auto__ = null;
var cljs$core$async$transduce_$_state_machine__5134__auto____0 = (function (){
var statearr_7690 = [null,null,null,null,null,null,null];
(statearr_7690[(0)] = cljs$core$async$transduce_$_state_machine__5134__auto__);

(statearr_7690[(1)] = (1));

return statearr_7690;
});
var cljs$core$async$transduce_$_state_machine__5134__auto____1 = (function (state_7688){
while(true){
var ret_value__5135__auto__ = (function (){try{while(true){
var result__5136__auto__ = switch__5133__auto__.call(null,state_7688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5136__auto__;
}
break;
}
}catch (e7691){if((e7691 instanceof Object)){
var ex__5137__auto__ = e7691;
var statearr_7692_7694 = state_7688;
(statearr_7692_7694[(5)] = ex__5137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7695 = state_7688;
state_7688 = G__7695;
continue;
} else {
return ret_value__5135__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__5134__auto__ = function(state_7688){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__5134__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__5134__auto____1.call(this,state_7688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__5134__auto____0;
cljs$core$async$transduce_$_state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__5134__auto____1;
return cljs$core$async$transduce_$_state_machine__5134__auto__;
})()
;})(switch__5133__auto__,c__5300__auto__,f__$1))
})();
var state__5302__auto__ = (function (){var statearr_7693 = f__5301__auto__.call(null);
(statearr_7693[(6)] = c__5300__auto__);

return statearr_7693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5302__auto__);
});})(c__5300__auto__,f__$1))
);

return c__5300__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__7697 = arguments.length;
switch (G__7697) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__5300__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5300__auto__){
return (function (){
var f__5301__auto__ = (function (){var switch__5133__auto__ = ((function (c__5300__auto__){
return (function (state_7722){
var state_val_7723 = (state_7722[(1)]);
if((state_val_7723 === (7))){
var inst_7704 = (state_7722[(2)]);
var state_7722__$1 = state_7722;
var statearr_7724_7745 = state_7722__$1;
(statearr_7724_7745[(2)] = inst_7704);

(statearr_7724_7745[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7723 === (1))){
var inst_7698 = cljs.core.seq.call(null,coll);
var inst_7699 = inst_7698;
var state_7722__$1 = (function (){var statearr_7725 = state_7722;
(statearr_7725[(7)] = inst_7699);

return statearr_7725;
})();
var statearr_7726_7746 = state_7722__$1;
(statearr_7726_7746[(2)] = null);

(statearr_7726_7746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7723 === (4))){
var inst_7699 = (state_7722[(7)]);
var inst_7702 = cljs.core.first.call(null,inst_7699);
var state_7722__$1 = state_7722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7722__$1,(7),ch,inst_7702);
} else {
if((state_val_7723 === (13))){
var inst_7716 = (state_7722[(2)]);
var state_7722__$1 = state_7722;
var statearr_7727_7747 = state_7722__$1;
(statearr_7727_7747[(2)] = inst_7716);

(statearr_7727_7747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7723 === (6))){
var inst_7707 = (state_7722[(2)]);
var state_7722__$1 = state_7722;
if(cljs.core.truth_(inst_7707)){
var statearr_7728_7748 = state_7722__$1;
(statearr_7728_7748[(1)] = (8));

} else {
var statearr_7729_7749 = state_7722__$1;
(statearr_7729_7749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7723 === (3))){
var inst_7720 = (state_7722[(2)]);
var state_7722__$1 = state_7722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7722__$1,inst_7720);
} else {
if((state_val_7723 === (12))){
var state_7722__$1 = state_7722;
var statearr_7730_7750 = state_7722__$1;
(statearr_7730_7750[(2)] = null);

(statearr_7730_7750[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7723 === (2))){
var inst_7699 = (state_7722[(7)]);
var state_7722__$1 = state_7722;
if(cljs.core.truth_(inst_7699)){
var statearr_7731_7751 = state_7722__$1;
(statearr_7731_7751[(1)] = (4));

} else {
var statearr_7732_7752 = state_7722__$1;
(statearr_7732_7752[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7723 === (11))){
var inst_7713 = cljs.core.async.close_BANG_.call(null,ch);
var state_7722__$1 = state_7722;
var statearr_7733_7753 = state_7722__$1;
(statearr_7733_7753[(2)] = inst_7713);

(statearr_7733_7753[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7723 === (9))){
var state_7722__$1 = state_7722;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7734_7754 = state_7722__$1;
(statearr_7734_7754[(1)] = (11));

} else {
var statearr_7735_7755 = state_7722__$1;
(statearr_7735_7755[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7723 === (5))){
var inst_7699 = (state_7722[(7)]);
var state_7722__$1 = state_7722;
var statearr_7736_7756 = state_7722__$1;
(statearr_7736_7756[(2)] = inst_7699);

(statearr_7736_7756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7723 === (10))){
var inst_7718 = (state_7722[(2)]);
var state_7722__$1 = state_7722;
var statearr_7737_7757 = state_7722__$1;
(statearr_7737_7757[(2)] = inst_7718);

(statearr_7737_7757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7723 === (8))){
var inst_7699 = (state_7722[(7)]);
var inst_7709 = cljs.core.next.call(null,inst_7699);
var inst_7699__$1 = inst_7709;
var state_7722__$1 = (function (){var statearr_7738 = state_7722;
(statearr_7738[(7)] = inst_7699__$1);

return statearr_7738;
})();
var statearr_7739_7758 = state_7722__$1;
(statearr_7739_7758[(2)] = null);

(statearr_7739_7758[(1)] = (2));


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
});})(c__5300__auto__))
;
return ((function (switch__5133__auto__,c__5300__auto__){
return (function() {
var cljs$core$async$state_machine__5134__auto__ = null;
var cljs$core$async$state_machine__5134__auto____0 = (function (){
var statearr_7740 = [null,null,null,null,null,null,null,null];
(statearr_7740[(0)] = cljs$core$async$state_machine__5134__auto__);

(statearr_7740[(1)] = (1));

return statearr_7740;
});
var cljs$core$async$state_machine__5134__auto____1 = (function (state_7722){
while(true){
var ret_value__5135__auto__ = (function (){try{while(true){
var result__5136__auto__ = switch__5133__auto__.call(null,state_7722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5136__auto__;
}
break;
}
}catch (e7741){if((e7741 instanceof Object)){
var ex__5137__auto__ = e7741;
var statearr_7742_7759 = state_7722;
(statearr_7742_7759[(5)] = ex__5137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7760 = state_7722;
state_7722 = G__7760;
continue;
} else {
return ret_value__5135__auto__;
}
break;
}
});
cljs$core$async$state_machine__5134__auto__ = function(state_7722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5134__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5134__auto____1.call(this,state_7722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5134__auto____0;
cljs$core$async$state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5134__auto____1;
return cljs$core$async$state_machine__5134__auto__;
})()
;})(switch__5133__auto__,c__5300__auto__))
})();
var state__5302__auto__ = (function (){var statearr_7743 = f__5301__auto__.call(null);
(statearr_7743[(6)] = c__5300__auto__);

return statearr_7743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5302__auto__);
});})(c__5300__auto__))
);

return c__5300__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7761 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7761 = (function (ch,cs,meta7762){
this.ch = ch;
this.cs = cs;
this.meta7762 = meta7762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_7763,meta7762__$1){
var self__ = this;
var _7763__$1 = this;
return (new cljs.core.async.t_cljs$core$async7761(self__.ch,self__.cs,meta7762__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async7761.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_7763){
var self__ = this;
var _7763__$1 = this;
return self__.meta7762;
});})(cs))
;

cljs.core.async.t_cljs$core$async7761.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7761.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async7761.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7761.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7761.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7761.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7761.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta7762","meta7762",-973952826,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async7761.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7761.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7761";

cljs.core.async.t_cljs$core$async7761.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async7761");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7761.
 */
cljs.core.async.__GT_t_cljs$core$async7761 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async7761(ch__$1,cs__$1,meta7762){
return (new cljs.core.async.t_cljs$core$async7761(ch__$1,cs__$1,meta7762));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async7761(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__5300__auto___7983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5300__auto___7983,cs,m,dchan,dctr,done){
return (function (){
var f__5301__auto__ = (function (){var switch__5133__auto__ = ((function (c__5300__auto___7983,cs,m,dchan,dctr,done){
return (function (state_7898){
var state_val_7899 = (state_7898[(1)]);
if((state_val_7899 === (7))){
var inst_7894 = (state_7898[(2)]);
var state_7898__$1 = state_7898;
var statearr_7900_7984 = state_7898__$1;
(statearr_7900_7984[(2)] = inst_7894);

(statearr_7900_7984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (20))){
var inst_7797 = (state_7898[(7)]);
var inst_7809 = cljs.core.first.call(null,inst_7797);
var inst_7810 = cljs.core.nth.call(null,inst_7809,(0),null);
var inst_7811 = cljs.core.nth.call(null,inst_7809,(1),null);
var state_7898__$1 = (function (){var statearr_7901 = state_7898;
(statearr_7901[(8)] = inst_7810);

return statearr_7901;
})();
if(cljs.core.truth_(inst_7811)){
var statearr_7902_7985 = state_7898__$1;
(statearr_7902_7985[(1)] = (22));

} else {
var statearr_7903_7986 = state_7898__$1;
(statearr_7903_7986[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (27))){
var inst_7839 = (state_7898[(9)]);
var inst_7841 = (state_7898[(10)]);
var inst_7846 = (state_7898[(11)]);
var inst_7766 = (state_7898[(12)]);
var inst_7846__$1 = cljs.core._nth.call(null,inst_7839,inst_7841);
var inst_7847 = cljs.core.async.put_BANG_.call(null,inst_7846__$1,inst_7766,done);
var state_7898__$1 = (function (){var statearr_7904 = state_7898;
(statearr_7904[(11)] = inst_7846__$1);

return statearr_7904;
})();
if(cljs.core.truth_(inst_7847)){
var statearr_7905_7987 = state_7898__$1;
(statearr_7905_7987[(1)] = (30));

} else {
var statearr_7906_7988 = state_7898__$1;
(statearr_7906_7988[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (1))){
var state_7898__$1 = state_7898;
var statearr_7907_7989 = state_7898__$1;
(statearr_7907_7989[(2)] = null);

(statearr_7907_7989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (24))){
var inst_7797 = (state_7898[(7)]);
var inst_7816 = (state_7898[(2)]);
var inst_7817 = cljs.core.next.call(null,inst_7797);
var inst_7775 = inst_7817;
var inst_7776 = null;
var inst_7777 = (0);
var inst_7778 = (0);
var state_7898__$1 = (function (){var statearr_7908 = state_7898;
(statearr_7908[(13)] = inst_7776);

(statearr_7908[(14)] = inst_7816);

(statearr_7908[(15)] = inst_7778);

(statearr_7908[(16)] = inst_7777);

(statearr_7908[(17)] = inst_7775);

return statearr_7908;
})();
var statearr_7909_7990 = state_7898__$1;
(statearr_7909_7990[(2)] = null);

(statearr_7909_7990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (39))){
var state_7898__$1 = state_7898;
var statearr_7913_7991 = state_7898__$1;
(statearr_7913_7991[(2)] = null);

(statearr_7913_7991[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (4))){
var inst_7766 = (state_7898[(12)]);
var inst_7766__$1 = (state_7898[(2)]);
var inst_7767 = (inst_7766__$1 == null);
var state_7898__$1 = (function (){var statearr_7914 = state_7898;
(statearr_7914[(12)] = inst_7766__$1);

return statearr_7914;
})();
if(cljs.core.truth_(inst_7767)){
var statearr_7915_7992 = state_7898__$1;
(statearr_7915_7992[(1)] = (5));

} else {
var statearr_7916_7993 = state_7898__$1;
(statearr_7916_7993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (15))){
var inst_7776 = (state_7898[(13)]);
var inst_7778 = (state_7898[(15)]);
var inst_7777 = (state_7898[(16)]);
var inst_7775 = (state_7898[(17)]);
var inst_7793 = (state_7898[(2)]);
var inst_7794 = (inst_7778 + (1));
var tmp7910 = inst_7776;
var tmp7911 = inst_7777;
var tmp7912 = inst_7775;
var inst_7775__$1 = tmp7912;
var inst_7776__$1 = tmp7910;
var inst_7777__$1 = tmp7911;
var inst_7778__$1 = inst_7794;
var state_7898__$1 = (function (){var statearr_7917 = state_7898;
(statearr_7917[(13)] = inst_7776__$1);

(statearr_7917[(18)] = inst_7793);

(statearr_7917[(15)] = inst_7778__$1);

(statearr_7917[(16)] = inst_7777__$1);

(statearr_7917[(17)] = inst_7775__$1);

return statearr_7917;
})();
var statearr_7918_7994 = state_7898__$1;
(statearr_7918_7994[(2)] = null);

(statearr_7918_7994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (21))){
var inst_7820 = (state_7898[(2)]);
var state_7898__$1 = state_7898;
var statearr_7922_7995 = state_7898__$1;
(statearr_7922_7995[(2)] = inst_7820);

(statearr_7922_7995[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (31))){
var inst_7846 = (state_7898[(11)]);
var inst_7850 = done.call(null,null);
var inst_7851 = cljs.core.async.untap_STAR_.call(null,m,inst_7846);
var state_7898__$1 = (function (){var statearr_7923 = state_7898;
(statearr_7923[(19)] = inst_7850);

return statearr_7923;
})();
var statearr_7924_7996 = state_7898__$1;
(statearr_7924_7996[(2)] = inst_7851);

(statearr_7924_7996[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (32))){
var inst_7839 = (state_7898[(9)]);
var inst_7841 = (state_7898[(10)]);
var inst_7840 = (state_7898[(20)]);
var inst_7838 = (state_7898[(21)]);
var inst_7853 = (state_7898[(2)]);
var inst_7854 = (inst_7841 + (1));
var tmp7919 = inst_7839;
var tmp7920 = inst_7840;
var tmp7921 = inst_7838;
var inst_7838__$1 = tmp7921;
var inst_7839__$1 = tmp7919;
var inst_7840__$1 = tmp7920;
var inst_7841__$1 = inst_7854;
var state_7898__$1 = (function (){var statearr_7925 = state_7898;
(statearr_7925[(9)] = inst_7839__$1);

(statearr_7925[(10)] = inst_7841__$1);

(statearr_7925[(22)] = inst_7853);

(statearr_7925[(20)] = inst_7840__$1);

(statearr_7925[(21)] = inst_7838__$1);

return statearr_7925;
})();
var statearr_7926_7997 = state_7898__$1;
(statearr_7926_7997[(2)] = null);

(statearr_7926_7997[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (40))){
var inst_7866 = (state_7898[(23)]);
var inst_7870 = done.call(null,null);
var inst_7871 = cljs.core.async.untap_STAR_.call(null,m,inst_7866);
var state_7898__$1 = (function (){var statearr_7927 = state_7898;
(statearr_7927[(24)] = inst_7870);

return statearr_7927;
})();
var statearr_7928_7998 = state_7898__$1;
(statearr_7928_7998[(2)] = inst_7871);

(statearr_7928_7998[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (33))){
var inst_7857 = (state_7898[(25)]);
var inst_7859 = cljs.core.chunked_seq_QMARK_.call(null,inst_7857);
var state_7898__$1 = state_7898;
if(inst_7859){
var statearr_7929_7999 = state_7898__$1;
(statearr_7929_7999[(1)] = (36));

} else {
var statearr_7930_8000 = state_7898__$1;
(statearr_7930_8000[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (13))){
var inst_7787 = (state_7898[(26)]);
var inst_7790 = cljs.core.async.close_BANG_.call(null,inst_7787);
var state_7898__$1 = state_7898;
var statearr_7931_8001 = state_7898__$1;
(statearr_7931_8001[(2)] = inst_7790);

(statearr_7931_8001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (22))){
var inst_7810 = (state_7898[(8)]);
var inst_7813 = cljs.core.async.close_BANG_.call(null,inst_7810);
var state_7898__$1 = state_7898;
var statearr_7932_8002 = state_7898__$1;
(statearr_7932_8002[(2)] = inst_7813);

(statearr_7932_8002[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (36))){
var inst_7857 = (state_7898[(25)]);
var inst_7861 = cljs.core.chunk_first.call(null,inst_7857);
var inst_7862 = cljs.core.chunk_rest.call(null,inst_7857);
var inst_7863 = cljs.core.count.call(null,inst_7861);
var inst_7838 = inst_7862;
var inst_7839 = inst_7861;
var inst_7840 = inst_7863;
var inst_7841 = (0);
var state_7898__$1 = (function (){var statearr_7933 = state_7898;
(statearr_7933[(9)] = inst_7839);

(statearr_7933[(10)] = inst_7841);

(statearr_7933[(20)] = inst_7840);

(statearr_7933[(21)] = inst_7838);

return statearr_7933;
})();
var statearr_7934_8003 = state_7898__$1;
(statearr_7934_8003[(2)] = null);

(statearr_7934_8003[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (41))){
var inst_7857 = (state_7898[(25)]);
var inst_7873 = (state_7898[(2)]);
var inst_7874 = cljs.core.next.call(null,inst_7857);
var inst_7838 = inst_7874;
var inst_7839 = null;
var inst_7840 = (0);
var inst_7841 = (0);
var state_7898__$1 = (function (){var statearr_7935 = state_7898;
(statearr_7935[(9)] = inst_7839);

(statearr_7935[(10)] = inst_7841);

(statearr_7935[(20)] = inst_7840);

(statearr_7935[(21)] = inst_7838);

(statearr_7935[(27)] = inst_7873);

return statearr_7935;
})();
var statearr_7936_8004 = state_7898__$1;
(statearr_7936_8004[(2)] = null);

(statearr_7936_8004[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (43))){
var state_7898__$1 = state_7898;
var statearr_7937_8005 = state_7898__$1;
(statearr_7937_8005[(2)] = null);

(statearr_7937_8005[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (29))){
var inst_7882 = (state_7898[(2)]);
var state_7898__$1 = state_7898;
var statearr_7938_8006 = state_7898__$1;
(statearr_7938_8006[(2)] = inst_7882);

(statearr_7938_8006[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (44))){
var inst_7891 = (state_7898[(2)]);
var state_7898__$1 = (function (){var statearr_7939 = state_7898;
(statearr_7939[(28)] = inst_7891);

return statearr_7939;
})();
var statearr_7940_8007 = state_7898__$1;
(statearr_7940_8007[(2)] = null);

(statearr_7940_8007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (6))){
var inst_7830 = (state_7898[(29)]);
var inst_7829 = cljs.core.deref.call(null,cs);
var inst_7830__$1 = cljs.core.keys.call(null,inst_7829);
var inst_7831 = cljs.core.count.call(null,inst_7830__$1);
var inst_7832 = cljs.core.reset_BANG_.call(null,dctr,inst_7831);
var inst_7837 = cljs.core.seq.call(null,inst_7830__$1);
var inst_7838 = inst_7837;
var inst_7839 = null;
var inst_7840 = (0);
var inst_7841 = (0);
var state_7898__$1 = (function (){var statearr_7941 = state_7898;
(statearr_7941[(29)] = inst_7830__$1);

(statearr_7941[(9)] = inst_7839);

(statearr_7941[(10)] = inst_7841);

(statearr_7941[(30)] = inst_7832);

(statearr_7941[(20)] = inst_7840);

(statearr_7941[(21)] = inst_7838);

return statearr_7941;
})();
var statearr_7942_8008 = state_7898__$1;
(statearr_7942_8008[(2)] = null);

(statearr_7942_8008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (28))){
var inst_7857 = (state_7898[(25)]);
var inst_7838 = (state_7898[(21)]);
var inst_7857__$1 = cljs.core.seq.call(null,inst_7838);
var state_7898__$1 = (function (){var statearr_7943 = state_7898;
(statearr_7943[(25)] = inst_7857__$1);

return statearr_7943;
})();
if(inst_7857__$1){
var statearr_7944_8009 = state_7898__$1;
(statearr_7944_8009[(1)] = (33));

} else {
var statearr_7945_8010 = state_7898__$1;
(statearr_7945_8010[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (25))){
var inst_7841 = (state_7898[(10)]);
var inst_7840 = (state_7898[(20)]);
var inst_7843 = (inst_7841 < inst_7840);
var inst_7844 = inst_7843;
var state_7898__$1 = state_7898;
if(cljs.core.truth_(inst_7844)){
var statearr_7946_8011 = state_7898__$1;
(statearr_7946_8011[(1)] = (27));

} else {
var statearr_7947_8012 = state_7898__$1;
(statearr_7947_8012[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (34))){
var state_7898__$1 = state_7898;
var statearr_7948_8013 = state_7898__$1;
(statearr_7948_8013[(2)] = null);

(statearr_7948_8013[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (17))){
var state_7898__$1 = state_7898;
var statearr_7949_8014 = state_7898__$1;
(statearr_7949_8014[(2)] = null);

(statearr_7949_8014[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (3))){
var inst_7896 = (state_7898[(2)]);
var state_7898__$1 = state_7898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7898__$1,inst_7896);
} else {
if((state_val_7899 === (12))){
var inst_7825 = (state_7898[(2)]);
var state_7898__$1 = state_7898;
var statearr_7950_8015 = state_7898__$1;
(statearr_7950_8015[(2)] = inst_7825);

(statearr_7950_8015[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (2))){
var state_7898__$1 = state_7898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7898__$1,(4),ch);
} else {
if((state_val_7899 === (23))){
var state_7898__$1 = state_7898;
var statearr_7951_8016 = state_7898__$1;
(statearr_7951_8016[(2)] = null);

(statearr_7951_8016[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (35))){
var inst_7880 = (state_7898[(2)]);
var state_7898__$1 = state_7898;
var statearr_7952_8017 = state_7898__$1;
(statearr_7952_8017[(2)] = inst_7880);

(statearr_7952_8017[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (19))){
var inst_7797 = (state_7898[(7)]);
var inst_7801 = cljs.core.chunk_first.call(null,inst_7797);
var inst_7802 = cljs.core.chunk_rest.call(null,inst_7797);
var inst_7803 = cljs.core.count.call(null,inst_7801);
var inst_7775 = inst_7802;
var inst_7776 = inst_7801;
var inst_7777 = inst_7803;
var inst_7778 = (0);
var state_7898__$1 = (function (){var statearr_7953 = state_7898;
(statearr_7953[(13)] = inst_7776);

(statearr_7953[(15)] = inst_7778);

(statearr_7953[(16)] = inst_7777);

(statearr_7953[(17)] = inst_7775);

return statearr_7953;
})();
var statearr_7954_8018 = state_7898__$1;
(statearr_7954_8018[(2)] = null);

(statearr_7954_8018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (11))){
var inst_7797 = (state_7898[(7)]);
var inst_7775 = (state_7898[(17)]);
var inst_7797__$1 = cljs.core.seq.call(null,inst_7775);
var state_7898__$1 = (function (){var statearr_7955 = state_7898;
(statearr_7955[(7)] = inst_7797__$1);

return statearr_7955;
})();
if(inst_7797__$1){
var statearr_7956_8019 = state_7898__$1;
(statearr_7956_8019[(1)] = (16));

} else {
var statearr_7957_8020 = state_7898__$1;
(statearr_7957_8020[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (9))){
var inst_7827 = (state_7898[(2)]);
var state_7898__$1 = state_7898;
var statearr_7958_8021 = state_7898__$1;
(statearr_7958_8021[(2)] = inst_7827);

(statearr_7958_8021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (5))){
var inst_7773 = cljs.core.deref.call(null,cs);
var inst_7774 = cljs.core.seq.call(null,inst_7773);
var inst_7775 = inst_7774;
var inst_7776 = null;
var inst_7777 = (0);
var inst_7778 = (0);
var state_7898__$1 = (function (){var statearr_7959 = state_7898;
(statearr_7959[(13)] = inst_7776);

(statearr_7959[(15)] = inst_7778);

(statearr_7959[(16)] = inst_7777);

(statearr_7959[(17)] = inst_7775);

return statearr_7959;
})();
var statearr_7960_8022 = state_7898__$1;
(statearr_7960_8022[(2)] = null);

(statearr_7960_8022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (14))){
var state_7898__$1 = state_7898;
var statearr_7961_8023 = state_7898__$1;
(statearr_7961_8023[(2)] = null);

(statearr_7961_8023[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (45))){
var inst_7888 = (state_7898[(2)]);
var state_7898__$1 = state_7898;
var statearr_7962_8024 = state_7898__$1;
(statearr_7962_8024[(2)] = inst_7888);

(statearr_7962_8024[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (26))){
var inst_7830 = (state_7898[(29)]);
var inst_7884 = (state_7898[(2)]);
var inst_7885 = cljs.core.seq.call(null,inst_7830);
var state_7898__$1 = (function (){var statearr_7963 = state_7898;
(statearr_7963[(31)] = inst_7884);

return statearr_7963;
})();
if(inst_7885){
var statearr_7964_8025 = state_7898__$1;
(statearr_7964_8025[(1)] = (42));

} else {
var statearr_7965_8026 = state_7898__$1;
(statearr_7965_8026[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (16))){
var inst_7797 = (state_7898[(7)]);
var inst_7799 = cljs.core.chunked_seq_QMARK_.call(null,inst_7797);
var state_7898__$1 = state_7898;
if(inst_7799){
var statearr_7966_8027 = state_7898__$1;
(statearr_7966_8027[(1)] = (19));

} else {
var statearr_7967_8028 = state_7898__$1;
(statearr_7967_8028[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (38))){
var inst_7877 = (state_7898[(2)]);
var state_7898__$1 = state_7898;
var statearr_7968_8029 = state_7898__$1;
(statearr_7968_8029[(2)] = inst_7877);

(statearr_7968_8029[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (30))){
var state_7898__$1 = state_7898;
var statearr_7969_8030 = state_7898__$1;
(statearr_7969_8030[(2)] = null);

(statearr_7969_8030[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (10))){
var inst_7776 = (state_7898[(13)]);
var inst_7778 = (state_7898[(15)]);
var inst_7786 = cljs.core._nth.call(null,inst_7776,inst_7778);
var inst_7787 = cljs.core.nth.call(null,inst_7786,(0),null);
var inst_7788 = cljs.core.nth.call(null,inst_7786,(1),null);
var state_7898__$1 = (function (){var statearr_7970 = state_7898;
(statearr_7970[(26)] = inst_7787);

return statearr_7970;
})();
if(cljs.core.truth_(inst_7788)){
var statearr_7971_8031 = state_7898__$1;
(statearr_7971_8031[(1)] = (13));

} else {
var statearr_7972_8032 = state_7898__$1;
(statearr_7972_8032[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (18))){
var inst_7823 = (state_7898[(2)]);
var state_7898__$1 = state_7898;
var statearr_7973_8033 = state_7898__$1;
(statearr_7973_8033[(2)] = inst_7823);

(statearr_7973_8033[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (42))){
var state_7898__$1 = state_7898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7898__$1,(45),dchan);
} else {
if((state_val_7899 === (37))){
var inst_7866 = (state_7898[(23)]);
var inst_7857 = (state_7898[(25)]);
var inst_7766 = (state_7898[(12)]);
var inst_7866__$1 = cljs.core.first.call(null,inst_7857);
var inst_7867 = cljs.core.async.put_BANG_.call(null,inst_7866__$1,inst_7766,done);
var state_7898__$1 = (function (){var statearr_7974 = state_7898;
(statearr_7974[(23)] = inst_7866__$1);

return statearr_7974;
})();
if(cljs.core.truth_(inst_7867)){
var statearr_7975_8034 = state_7898__$1;
(statearr_7975_8034[(1)] = (39));

} else {
var statearr_7976_8035 = state_7898__$1;
(statearr_7976_8035[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7899 === (8))){
var inst_7778 = (state_7898[(15)]);
var inst_7777 = (state_7898[(16)]);
var inst_7780 = (inst_7778 < inst_7777);
var inst_7781 = inst_7780;
var state_7898__$1 = state_7898;
if(cljs.core.truth_(inst_7781)){
var statearr_7977_8036 = state_7898__$1;
(statearr_7977_8036[(1)] = (10));

} else {
var statearr_7978_8037 = state_7898__$1;
(statearr_7978_8037[(1)] = (11));

}

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
});})(c__5300__auto___7983,cs,m,dchan,dctr,done))
;
return ((function (switch__5133__auto__,c__5300__auto___7983,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__5134__auto__ = null;
var cljs$core$async$mult_$_state_machine__5134__auto____0 = (function (){
var statearr_7979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7979[(0)] = cljs$core$async$mult_$_state_machine__5134__auto__);

(statearr_7979[(1)] = (1));

return statearr_7979;
});
var cljs$core$async$mult_$_state_machine__5134__auto____1 = (function (state_7898){
while(true){
var ret_value__5135__auto__ = (function (){try{while(true){
var result__5136__auto__ = switch__5133__auto__.call(null,state_7898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5136__auto__;
}
break;
}
}catch (e7980){if((e7980 instanceof Object)){
var ex__5137__auto__ = e7980;
var statearr_7981_8038 = state_7898;
(statearr_7981_8038[(5)] = ex__5137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8039 = state_7898;
state_7898 = G__8039;
continue;
} else {
return ret_value__5135__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__5134__auto__ = function(state_7898){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__5134__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__5134__auto____1.call(this,state_7898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__5134__auto____0;
cljs$core$async$mult_$_state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__5134__auto____1;
return cljs$core$async$mult_$_state_machine__5134__auto__;
})()
;})(switch__5133__auto__,c__5300__auto___7983,cs,m,dchan,dctr,done))
})();
var state__5302__auto__ = (function (){var statearr_7982 = f__5301__auto__.call(null);
(statearr_7982[(6)] = c__5300__auto___7983);

return statearr_7982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5302__auto__);
});})(c__5300__auto___7983,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__8041 = arguments.length;
switch (G__8041) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___8053 = arguments.length;
var i__4642__auto___8054 = (0);
while(true){
if((i__4642__auto___8054 < len__4641__auto___8053)){
args__4647__auto__.push((arguments[i__4642__auto___8054]));

var G__8055 = (i__4642__auto___8054 + (1));
i__4642__auto___8054 = G__8055;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__8047){
var map__8048 = p__8047;
var map__8048__$1 = (((((!((map__8048 == null))))?(((((map__8048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8048):map__8048);
var opts = map__8048__$1;
var statearr_8050_8056 = state;
(statearr_8050_8056[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__8048,map__8048__$1,opts){
return (function (val){
var statearr_8051_8057 = state;
(statearr_8051_8057[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__8048,map__8048__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_8052_8058 = state;
(statearr_8052_8058[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq8043){
var G__8044 = cljs.core.first.call(null,seq8043);
var seq8043__$1 = cljs.core.next.call(null,seq8043);
var G__8045 = cljs.core.first.call(null,seq8043__$1);
var seq8043__$2 = cljs.core.next.call(null,seq8043__$1);
var G__8046 = cljs.core.first.call(null,seq8043__$2);
var seq8043__$3 = cljs.core.next.call(null,seq8043__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8044,G__8045,G__8046,seq8043__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8059 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8059 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta8060){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta8060 = meta8060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8061,meta8060__$1){
var self__ = this;
var _8061__$1 = this;
return (new cljs.core.async.t_cljs$core$async8059(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta8060__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8059.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8061){
var self__ = this;
var _8061__$1 = this;
return self__.meta8060;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8059.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8059.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8059.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8059.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8059.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8059.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8059.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8059.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8059.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta8060","meta8060",-1521239995,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8059.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8059.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8059";

cljs.core.async.t_cljs$core$async8059.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async8059");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8059.
 */
cljs.core.async.__GT_t_cljs$core$async8059 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async8059(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta8060){
return (new cljs.core.async.t_cljs$core$async8059(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta8060));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async8059(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__5300__auto___8223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5300__auto___8223,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__5301__auto__ = (function (){var switch__5133__auto__ = ((function (c__5300__auto___8223,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_8163){
var state_val_8164 = (state_8163[(1)]);
if((state_val_8164 === (7))){
var inst_8078 = (state_8163[(2)]);
var state_8163__$1 = state_8163;
var statearr_8165_8224 = state_8163__$1;
(statearr_8165_8224[(2)] = inst_8078);

(statearr_8165_8224[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (20))){
var inst_8090 = (state_8163[(7)]);
var state_8163__$1 = state_8163;
var statearr_8166_8225 = state_8163__$1;
(statearr_8166_8225[(2)] = inst_8090);

(statearr_8166_8225[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (27))){
var state_8163__$1 = state_8163;
var statearr_8167_8226 = state_8163__$1;
(statearr_8167_8226[(2)] = null);

(statearr_8167_8226[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (1))){
var inst_8065 = (state_8163[(8)]);
var inst_8065__$1 = calc_state.call(null);
var inst_8067 = (inst_8065__$1 == null);
var inst_8068 = cljs.core.not.call(null,inst_8067);
var state_8163__$1 = (function (){var statearr_8168 = state_8163;
(statearr_8168[(8)] = inst_8065__$1);

return statearr_8168;
})();
if(inst_8068){
var statearr_8169_8227 = state_8163__$1;
(statearr_8169_8227[(1)] = (2));

} else {
var statearr_8170_8228 = state_8163__$1;
(statearr_8170_8228[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (24))){
var inst_8137 = (state_8163[(9)]);
var inst_8123 = (state_8163[(10)]);
var inst_8114 = (state_8163[(11)]);
var inst_8137__$1 = inst_8114.call(null,inst_8123);
var state_8163__$1 = (function (){var statearr_8171 = state_8163;
(statearr_8171[(9)] = inst_8137__$1);

return statearr_8171;
})();
if(cljs.core.truth_(inst_8137__$1)){
var statearr_8172_8229 = state_8163__$1;
(statearr_8172_8229[(1)] = (29));

} else {
var statearr_8173_8230 = state_8163__$1;
(statearr_8173_8230[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (4))){
var inst_8081 = (state_8163[(2)]);
var state_8163__$1 = state_8163;
if(cljs.core.truth_(inst_8081)){
var statearr_8174_8231 = state_8163__$1;
(statearr_8174_8231[(1)] = (8));

} else {
var statearr_8175_8232 = state_8163__$1;
(statearr_8175_8232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (15))){
var inst_8108 = (state_8163[(2)]);
var state_8163__$1 = state_8163;
if(cljs.core.truth_(inst_8108)){
var statearr_8176_8233 = state_8163__$1;
(statearr_8176_8233[(1)] = (19));

} else {
var statearr_8177_8234 = state_8163__$1;
(statearr_8177_8234[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (21))){
var inst_8113 = (state_8163[(12)]);
var inst_8113__$1 = (state_8163[(2)]);
var inst_8114 = cljs.core.get.call(null,inst_8113__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_8115 = cljs.core.get.call(null,inst_8113__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_8116 = cljs.core.get.call(null,inst_8113__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_8163__$1 = (function (){var statearr_8178 = state_8163;
(statearr_8178[(13)] = inst_8115);

(statearr_8178[(12)] = inst_8113__$1);

(statearr_8178[(11)] = inst_8114);

return statearr_8178;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_8163__$1,(22),inst_8116);
} else {
if((state_val_8164 === (31))){
var inst_8145 = (state_8163[(2)]);
var state_8163__$1 = state_8163;
if(cljs.core.truth_(inst_8145)){
var statearr_8179_8235 = state_8163__$1;
(statearr_8179_8235[(1)] = (32));

} else {
var statearr_8180_8236 = state_8163__$1;
(statearr_8180_8236[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (32))){
var inst_8122 = (state_8163[(14)]);
var state_8163__$1 = state_8163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8163__$1,(35),out,inst_8122);
} else {
if((state_val_8164 === (33))){
var inst_8113 = (state_8163[(12)]);
var inst_8090 = inst_8113;
var state_8163__$1 = (function (){var statearr_8181 = state_8163;
(statearr_8181[(7)] = inst_8090);

return statearr_8181;
})();
var statearr_8182_8237 = state_8163__$1;
(statearr_8182_8237[(2)] = null);

(statearr_8182_8237[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (13))){
var inst_8090 = (state_8163[(7)]);
var inst_8097 = inst_8090.cljs$lang$protocol_mask$partition0$;
var inst_8098 = (inst_8097 & (64));
var inst_8099 = inst_8090.cljs$core$ISeq$;
var inst_8100 = (cljs.core.PROTOCOL_SENTINEL === inst_8099);
var inst_8101 = ((inst_8098) || (inst_8100));
var state_8163__$1 = state_8163;
if(cljs.core.truth_(inst_8101)){
var statearr_8183_8238 = state_8163__$1;
(statearr_8183_8238[(1)] = (16));

} else {
var statearr_8184_8239 = state_8163__$1;
(statearr_8184_8239[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (22))){
var inst_8122 = (state_8163[(14)]);
var inst_8123 = (state_8163[(10)]);
var inst_8121 = (state_8163[(2)]);
var inst_8122__$1 = cljs.core.nth.call(null,inst_8121,(0),null);
var inst_8123__$1 = cljs.core.nth.call(null,inst_8121,(1),null);
var inst_8124 = (inst_8122__$1 == null);
var inst_8125 = cljs.core._EQ_.call(null,inst_8123__$1,change);
var inst_8126 = ((inst_8124) || (inst_8125));
var state_8163__$1 = (function (){var statearr_8185 = state_8163;
(statearr_8185[(14)] = inst_8122__$1);

(statearr_8185[(10)] = inst_8123__$1);

return statearr_8185;
})();
if(cljs.core.truth_(inst_8126)){
var statearr_8186_8240 = state_8163__$1;
(statearr_8186_8240[(1)] = (23));

} else {
var statearr_8187_8241 = state_8163__$1;
(statearr_8187_8241[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (36))){
var inst_8113 = (state_8163[(12)]);
var inst_8090 = inst_8113;
var state_8163__$1 = (function (){var statearr_8188 = state_8163;
(statearr_8188[(7)] = inst_8090);

return statearr_8188;
})();
var statearr_8189_8242 = state_8163__$1;
(statearr_8189_8242[(2)] = null);

(statearr_8189_8242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (29))){
var inst_8137 = (state_8163[(9)]);
var state_8163__$1 = state_8163;
var statearr_8190_8243 = state_8163__$1;
(statearr_8190_8243[(2)] = inst_8137);

(statearr_8190_8243[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (6))){
var state_8163__$1 = state_8163;
var statearr_8191_8244 = state_8163__$1;
(statearr_8191_8244[(2)] = false);

(statearr_8191_8244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (28))){
var inst_8133 = (state_8163[(2)]);
var inst_8134 = calc_state.call(null);
var inst_8090 = inst_8134;
var state_8163__$1 = (function (){var statearr_8192 = state_8163;
(statearr_8192[(7)] = inst_8090);

(statearr_8192[(15)] = inst_8133);

return statearr_8192;
})();
var statearr_8193_8245 = state_8163__$1;
(statearr_8193_8245[(2)] = null);

(statearr_8193_8245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (25))){
var inst_8159 = (state_8163[(2)]);
var state_8163__$1 = state_8163;
var statearr_8194_8246 = state_8163__$1;
(statearr_8194_8246[(2)] = inst_8159);

(statearr_8194_8246[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (34))){
var inst_8157 = (state_8163[(2)]);
var state_8163__$1 = state_8163;
var statearr_8195_8247 = state_8163__$1;
(statearr_8195_8247[(2)] = inst_8157);

(statearr_8195_8247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (17))){
var state_8163__$1 = state_8163;
var statearr_8196_8248 = state_8163__$1;
(statearr_8196_8248[(2)] = false);

(statearr_8196_8248[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (3))){
var state_8163__$1 = state_8163;
var statearr_8197_8249 = state_8163__$1;
(statearr_8197_8249[(2)] = false);

(statearr_8197_8249[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (12))){
var inst_8161 = (state_8163[(2)]);
var state_8163__$1 = state_8163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8163__$1,inst_8161);
} else {
if((state_val_8164 === (2))){
var inst_8065 = (state_8163[(8)]);
var inst_8070 = inst_8065.cljs$lang$protocol_mask$partition0$;
var inst_8071 = (inst_8070 & (64));
var inst_8072 = inst_8065.cljs$core$ISeq$;
var inst_8073 = (cljs.core.PROTOCOL_SENTINEL === inst_8072);
var inst_8074 = ((inst_8071) || (inst_8073));
var state_8163__$1 = state_8163;
if(cljs.core.truth_(inst_8074)){
var statearr_8198_8250 = state_8163__$1;
(statearr_8198_8250[(1)] = (5));

} else {
var statearr_8199_8251 = state_8163__$1;
(statearr_8199_8251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (23))){
var inst_8122 = (state_8163[(14)]);
var inst_8128 = (inst_8122 == null);
var state_8163__$1 = state_8163;
if(cljs.core.truth_(inst_8128)){
var statearr_8200_8252 = state_8163__$1;
(statearr_8200_8252[(1)] = (26));

} else {
var statearr_8201_8253 = state_8163__$1;
(statearr_8201_8253[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (35))){
var inst_8148 = (state_8163[(2)]);
var state_8163__$1 = state_8163;
if(cljs.core.truth_(inst_8148)){
var statearr_8202_8254 = state_8163__$1;
(statearr_8202_8254[(1)] = (36));

} else {
var statearr_8203_8255 = state_8163__$1;
(statearr_8203_8255[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (19))){
var inst_8090 = (state_8163[(7)]);
var inst_8110 = cljs.core.apply.call(null,cljs.core.hash_map,inst_8090);
var state_8163__$1 = state_8163;
var statearr_8204_8256 = state_8163__$1;
(statearr_8204_8256[(2)] = inst_8110);

(statearr_8204_8256[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (11))){
var inst_8090 = (state_8163[(7)]);
var inst_8094 = (inst_8090 == null);
var inst_8095 = cljs.core.not.call(null,inst_8094);
var state_8163__$1 = state_8163;
if(inst_8095){
var statearr_8205_8257 = state_8163__$1;
(statearr_8205_8257[(1)] = (13));

} else {
var statearr_8206_8258 = state_8163__$1;
(statearr_8206_8258[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (9))){
var inst_8065 = (state_8163[(8)]);
var state_8163__$1 = state_8163;
var statearr_8207_8259 = state_8163__$1;
(statearr_8207_8259[(2)] = inst_8065);

(statearr_8207_8259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (5))){
var state_8163__$1 = state_8163;
var statearr_8208_8260 = state_8163__$1;
(statearr_8208_8260[(2)] = true);

(statearr_8208_8260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (14))){
var state_8163__$1 = state_8163;
var statearr_8209_8261 = state_8163__$1;
(statearr_8209_8261[(2)] = false);

(statearr_8209_8261[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (26))){
var inst_8123 = (state_8163[(10)]);
var inst_8130 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_8123);
var state_8163__$1 = state_8163;
var statearr_8210_8262 = state_8163__$1;
(statearr_8210_8262[(2)] = inst_8130);

(statearr_8210_8262[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (16))){
var state_8163__$1 = state_8163;
var statearr_8211_8263 = state_8163__$1;
(statearr_8211_8263[(2)] = true);

(statearr_8211_8263[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (38))){
var inst_8153 = (state_8163[(2)]);
var state_8163__$1 = state_8163;
var statearr_8212_8264 = state_8163__$1;
(statearr_8212_8264[(2)] = inst_8153);

(statearr_8212_8264[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (30))){
var inst_8115 = (state_8163[(13)]);
var inst_8123 = (state_8163[(10)]);
var inst_8114 = (state_8163[(11)]);
var inst_8140 = cljs.core.empty_QMARK_.call(null,inst_8114);
var inst_8141 = inst_8115.call(null,inst_8123);
var inst_8142 = cljs.core.not.call(null,inst_8141);
var inst_8143 = ((inst_8140) && (inst_8142));
var state_8163__$1 = state_8163;
var statearr_8213_8265 = state_8163__$1;
(statearr_8213_8265[(2)] = inst_8143);

(statearr_8213_8265[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (10))){
var inst_8065 = (state_8163[(8)]);
var inst_8086 = (state_8163[(2)]);
var inst_8087 = cljs.core.get.call(null,inst_8086,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_8088 = cljs.core.get.call(null,inst_8086,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_8089 = cljs.core.get.call(null,inst_8086,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_8090 = inst_8065;
var state_8163__$1 = (function (){var statearr_8214 = state_8163;
(statearr_8214[(16)] = inst_8088);

(statearr_8214[(17)] = inst_8089);

(statearr_8214[(7)] = inst_8090);

(statearr_8214[(18)] = inst_8087);

return statearr_8214;
})();
var statearr_8215_8266 = state_8163__$1;
(statearr_8215_8266[(2)] = null);

(statearr_8215_8266[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (18))){
var inst_8105 = (state_8163[(2)]);
var state_8163__$1 = state_8163;
var statearr_8216_8267 = state_8163__$1;
(statearr_8216_8267[(2)] = inst_8105);

(statearr_8216_8267[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (37))){
var state_8163__$1 = state_8163;
var statearr_8217_8268 = state_8163__$1;
(statearr_8217_8268[(2)] = null);

(statearr_8217_8268[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8164 === (8))){
var inst_8065 = (state_8163[(8)]);
var inst_8083 = cljs.core.apply.call(null,cljs.core.hash_map,inst_8065);
var state_8163__$1 = state_8163;
var statearr_8218_8269 = state_8163__$1;
(statearr_8218_8269[(2)] = inst_8083);

(statearr_8218_8269[(1)] = (10));


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
});})(c__5300__auto___8223,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__5133__auto__,c__5300__auto___8223,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__5134__auto__ = null;
var cljs$core$async$mix_$_state_machine__5134__auto____0 = (function (){
var statearr_8219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8219[(0)] = cljs$core$async$mix_$_state_machine__5134__auto__);

(statearr_8219[(1)] = (1));

return statearr_8219;
});
var cljs$core$async$mix_$_state_machine__5134__auto____1 = (function (state_8163){
while(true){
var ret_value__5135__auto__ = (function (){try{while(true){
var result__5136__auto__ = switch__5133__auto__.call(null,state_8163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5136__auto__;
}
break;
}
}catch (e8220){if((e8220 instanceof Object)){
var ex__5137__auto__ = e8220;
var statearr_8221_8270 = state_8163;
(statearr_8221_8270[(5)] = ex__5137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8271 = state_8163;
state_8163 = G__8271;
continue;
} else {
return ret_value__5135__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__5134__auto__ = function(state_8163){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__5134__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__5134__auto____1.call(this,state_8163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__5134__auto____0;
cljs$core$async$mix_$_state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__5134__auto____1;
return cljs$core$async$mix_$_state_machine__5134__auto__;
})()
;})(switch__5133__auto__,c__5300__auto___8223,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__5302__auto__ = (function (){var statearr_8222 = f__5301__auto__.call(null);
(statearr_8222[(6)] = c__5300__auto___8223);

return statearr_8222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5302__auto__);
});})(c__5300__auto___8223,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__8273 = arguments.length;
switch (G__8273) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__8277 = arguments.length;
switch (G__8277) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__8275_SHARP_){
if(cljs.core.truth_(p1__8275_SHARP_.call(null,topic))){
return p1__8275_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__8275_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8278 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8278 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta8279){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta8279 = meta8279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_8280,meta8279__$1){
var self__ = this;
var _8280__$1 = this;
return (new cljs.core.async.t_cljs$core$async8278(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta8279__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8278.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_8280){
var self__ = this;
var _8280__$1 = this;
return self__.meta8279;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8278.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8278.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8278.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8278.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8278.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8278.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8278.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8278.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta8279","meta8279",-1796938396,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8278.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8278";

cljs.core.async.t_cljs$core$async8278.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async8278");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8278.
 */
cljs.core.async.__GT_t_cljs$core$async8278 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async8278(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8279){
return (new cljs.core.async.t_cljs$core$async8278(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8279));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async8278(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__5300__auto___8398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5300__auto___8398,mults,ensure_mult,p){
return (function (){
var f__5301__auto__ = (function (){var switch__5133__auto__ = ((function (c__5300__auto___8398,mults,ensure_mult,p){
return (function (state_8352){
var state_val_8353 = (state_8352[(1)]);
if((state_val_8353 === (7))){
var inst_8348 = (state_8352[(2)]);
var state_8352__$1 = state_8352;
var statearr_8354_8399 = state_8352__$1;
(statearr_8354_8399[(2)] = inst_8348);

(statearr_8354_8399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8353 === (20))){
var state_8352__$1 = state_8352;
var statearr_8355_8400 = state_8352__$1;
(statearr_8355_8400[(2)] = null);

(statearr_8355_8400[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8353 === (1))){
var state_8352__$1 = state_8352;
var statearr_8356_8401 = state_8352__$1;
(statearr_8356_8401[(2)] = null);

(statearr_8356_8401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8353 === (24))){
var inst_8331 = (state_8352[(7)]);
var inst_8340 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_8331);
var state_8352__$1 = state_8352;
var statearr_8357_8402 = state_8352__$1;
(statearr_8357_8402[(2)] = inst_8340);

(statearr_8357_8402[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8353 === (4))){
var inst_8283 = (state_8352[(8)]);
var inst_8283__$1 = (state_8352[(2)]);
var inst_8284 = (inst_8283__$1 == null);
var state_8352__$1 = (function (){var statearr_8358 = state_8352;
(statearr_8358[(8)] = inst_8283__$1);

return statearr_8358;
})();
if(cljs.core.truth_(inst_8284)){
var statearr_8359_8403 = state_8352__$1;
(statearr_8359_8403[(1)] = (5));

} else {
var statearr_8360_8404 = state_8352__$1;
(statearr_8360_8404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8353 === (15))){
var inst_8325 = (state_8352[(2)]);
var state_8352__$1 = state_8352;
var statearr_8361_8405 = state_8352__$1;
(statearr_8361_8405[(2)] = inst_8325);

(statearr_8361_8405[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8353 === (21))){
var inst_8345 = (state_8352[(2)]);
var state_8352__$1 = (function (){var statearr_8362 = state_8352;
(statearr_8362[(9)] = inst_8345);

return statearr_8362;
})();
var statearr_8363_8406 = state_8352__$1;
(statearr_8363_8406[(2)] = null);

(statearr_8363_8406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8353 === (13))){
var inst_8307 = (state_8352[(10)]);
var inst_8309 = cljs.core.chunked_seq_QMARK_.call(null,inst_8307);
var state_8352__$1 = state_8352;
if(inst_8309){
var statearr_8364_8407 = state_8352__$1;
(statearr_8364_8407[(1)] = (16));

} else {
var statearr_8365_8408 = state_8352__$1;
(statearr_8365_8408[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8353 === (22))){
var inst_8337 = (state_8352[(2)]);
var state_8352__$1 = state_8352;
if(cljs.core.truth_(inst_8337)){
var statearr_8366_8409 = state_8352__$1;
(statearr_8366_8409[(1)] = (23));

} else {
var statearr_8367_8410 = state_8352__$1;
(statearr_8367_8410[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8353 === (6))){
var inst_8331 = (state_8352[(7)]);
var inst_8283 = (state_8352[(8)]);
var inst_8333 = (state_8352[(11)]);
var inst_8331__$1 = topic_fn.call(null,inst_8283);
var inst_8332 = cljs.core.deref.call(null,mults);
var inst_8333__$1 = cljs.core.get.call(null,inst_8332,inst_8331__$1);
var state_8352__$1 = (function (){var statearr_8368 = state_8352;
(statearr_8368[(7)] = inst_8331__$1);

(statearr_8368[(11)] = inst_8333__$1);

return statearr_8368;
})();
if(cljs.core.truth_(inst_8333__$1)){
var statearr_8369_8411 = state_8352__$1;
(statearr_8369_8411[(1)] = (19));

} else {
var statearr_8370_8412 = state_8352__$1;
(statearr_8370_8412[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8353 === (25))){
var inst_8342 = (state_8352[(2)]);
var state_8352__$1 = state_8352;
var statearr_8371_8413 = state_8352__$1;
(statearr_8371_8413[(2)] = inst_8342);

(statearr_8371_8413[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8353 === (17))){
var inst_8307 = (state_8352[(10)]);
var inst_8316 = cljs.core.first.call(null,inst_8307);
var inst_8317 = cljs.core.async.muxch_STAR_.call(null,inst_8316);
var inst_8318 = cljs.core.async.close_BANG_.call(null,inst_8317);
var inst_8319 = cljs.core.next.call(null,inst_8307);
var inst_8293 = inst_8319;
var inst_8294 = null;
var inst_8295 = (0);
var inst_8296 = (0);
var state_8352__$1 = (function (){var statearr_8372 = state_8352;
(statearr_8372[(12)] = inst_8296);

(statearr_8372[(13)] = inst_8295);

(statearr_8372[(14)] = inst_8294);

(statearr_8372[(15)] = inst_8318);

(statearr_8372[(16)] = inst_8293);

return statearr_8372;
})();
var statearr_8373_8414 = state_8352__$1;
(statearr_8373_8414[(2)] = null);

(statearr_8373_8414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8353 === (3))){
var inst_8350 = (state_8352[(2)]);
var state_8352__$1 = state_8352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8352__$1,inst_8350);
} else {
if((state_val_8353 === (12))){
var inst_8327 = (state_8352[(2)]);
var state_8352__$1 = state_8352;
var statearr_8374_8415 = state_8352__$1;
(statearr_8374_8415[(2)] = inst_8327);

(statearr_8374_8415[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8353 === (2))){
var state_8352__$1 = state_8352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8352__$1,(4),ch);
} else {
if((state_val_8353 === (23))){
var state_8352__$1 = state_8352;
var statearr_8375_8416 = state_8352__$1;
(statearr_8375_8416[(2)] = null);

(statearr_8375_8416[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8353 === (19))){
var inst_8283 = (state_8352[(8)]);
var inst_8333 = (state_8352[(11)]);
var inst_8335 = cljs.core.async.muxch_STAR_.call(null,inst_8333);
var state_8352__$1 = state_8352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8352__$1,(22),inst_8335,inst_8283);
} else {
if((state_val_8353 === (11))){
var inst_8307 = (state_8352[(10)]);
var inst_8293 = (state_8352[(16)]);
var inst_8307__$1 = cljs.core.seq.call(null,inst_8293);
var state_8352__$1 = (function (){var statearr_8376 = state_8352;
(statearr_8376[(10)] = inst_8307__$1);

return statearr_8376;
})();
if(inst_8307__$1){
var statearr_8377_8417 = state_8352__$1;
(statearr_8377_8417[(1)] = (13));

} else {
var statearr_8378_8418 = state_8352__$1;
(statearr_8378_8418[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8353 === (9))){
var inst_8329 = (state_8352[(2)]);
var state_8352__$1 = state_8352;
var statearr_8379_8419 = state_8352__$1;
(statearr_8379_8419[(2)] = inst_8329);

(statearr_8379_8419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8353 === (5))){
var inst_8290 = cljs.core.deref.call(null,mults);
var inst_8291 = cljs.core.vals.call(null,inst_8290);
var inst_8292 = cljs.core.seq.call(null,inst_8291);
var inst_8293 = inst_8292;
var inst_8294 = null;
var inst_8295 = (0);
var inst_8296 = (0);
var state_8352__$1 = (function (){var statearr_8380 = state_8352;
(statearr_8380[(12)] = inst_8296);

(statearr_8380[(13)] = inst_8295);

(statearr_8380[(14)] = inst_8294);

(statearr_8380[(16)] = inst_8293);

return statearr_8380;
})();
var statearr_8381_8420 = state_8352__$1;
(statearr_8381_8420[(2)] = null);

(statearr_8381_8420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8353 === (14))){
var state_8352__$1 = state_8352;
var statearr_8385_8421 = state_8352__$1;
(statearr_8385_8421[(2)] = null);

(statearr_8385_8421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8353 === (16))){
var inst_8307 = (state_8352[(10)]);
var inst_8311 = cljs.core.chunk_first.call(null,inst_8307);
var inst_8312 = cljs.core.chunk_rest.call(null,inst_8307);
var inst_8313 = cljs.core.count.call(null,inst_8311);
var inst_8293 = inst_8312;
var inst_8294 = inst_8311;
var inst_8295 = inst_8313;
var inst_8296 = (0);
var state_8352__$1 = (function (){var statearr_8386 = state_8352;
(statearr_8386[(12)] = inst_8296);

(statearr_8386[(13)] = inst_8295);

(statearr_8386[(14)] = inst_8294);

(statearr_8386[(16)] = inst_8293);

return statearr_8386;
})();
var statearr_8387_8422 = state_8352__$1;
(statearr_8387_8422[(2)] = null);

(statearr_8387_8422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8353 === (10))){
var inst_8296 = (state_8352[(12)]);
var inst_8295 = (state_8352[(13)]);
var inst_8294 = (state_8352[(14)]);
var inst_8293 = (state_8352[(16)]);
var inst_8301 = cljs.core._nth.call(null,inst_8294,inst_8296);
var inst_8302 = cljs.core.async.muxch_STAR_.call(null,inst_8301);
var inst_8303 = cljs.core.async.close_BANG_.call(null,inst_8302);
var inst_8304 = (inst_8296 + (1));
var tmp8382 = inst_8295;
var tmp8383 = inst_8294;
var tmp8384 = inst_8293;
var inst_8293__$1 = tmp8384;
var inst_8294__$1 = tmp8383;
var inst_8295__$1 = tmp8382;
var inst_8296__$1 = inst_8304;
var state_8352__$1 = (function (){var statearr_8388 = state_8352;
(statearr_8388[(12)] = inst_8296__$1);

(statearr_8388[(13)] = inst_8295__$1);

(statearr_8388[(17)] = inst_8303);

(statearr_8388[(14)] = inst_8294__$1);

(statearr_8388[(16)] = inst_8293__$1);

return statearr_8388;
})();
var statearr_8389_8423 = state_8352__$1;
(statearr_8389_8423[(2)] = null);

(statearr_8389_8423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8353 === (18))){
var inst_8322 = (state_8352[(2)]);
var state_8352__$1 = state_8352;
var statearr_8390_8424 = state_8352__$1;
(statearr_8390_8424[(2)] = inst_8322);

(statearr_8390_8424[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8353 === (8))){
var inst_8296 = (state_8352[(12)]);
var inst_8295 = (state_8352[(13)]);
var inst_8298 = (inst_8296 < inst_8295);
var inst_8299 = inst_8298;
var state_8352__$1 = state_8352;
if(cljs.core.truth_(inst_8299)){
var statearr_8391_8425 = state_8352__$1;
(statearr_8391_8425[(1)] = (10));

} else {
var statearr_8392_8426 = state_8352__$1;
(statearr_8392_8426[(1)] = (11));

}

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
});})(c__5300__auto___8398,mults,ensure_mult,p))
;
return ((function (switch__5133__auto__,c__5300__auto___8398,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__5134__auto__ = null;
var cljs$core$async$state_machine__5134__auto____0 = (function (){
var statearr_8393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8393[(0)] = cljs$core$async$state_machine__5134__auto__);

(statearr_8393[(1)] = (1));

return statearr_8393;
});
var cljs$core$async$state_machine__5134__auto____1 = (function (state_8352){
while(true){
var ret_value__5135__auto__ = (function (){try{while(true){
var result__5136__auto__ = switch__5133__auto__.call(null,state_8352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5136__auto__;
}
break;
}
}catch (e8394){if((e8394 instanceof Object)){
var ex__5137__auto__ = e8394;
var statearr_8395_8427 = state_8352;
(statearr_8395_8427[(5)] = ex__5137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8428 = state_8352;
state_8352 = G__8428;
continue;
} else {
return ret_value__5135__auto__;
}
break;
}
});
cljs$core$async$state_machine__5134__auto__ = function(state_8352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5134__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5134__auto____1.call(this,state_8352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5134__auto____0;
cljs$core$async$state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5134__auto____1;
return cljs$core$async$state_machine__5134__auto__;
})()
;})(switch__5133__auto__,c__5300__auto___8398,mults,ensure_mult,p))
})();
var state__5302__auto__ = (function (){var statearr_8396 = f__5301__auto__.call(null);
(statearr_8396[(6)] = c__5300__auto___8398);

return statearr_8396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5302__auto__);
});})(c__5300__auto___8398,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__8430 = arguments.length;
switch (G__8430) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__8433 = arguments.length;
switch (G__8433) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__8436 = arguments.length;
switch (G__8436) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__5300__auto___8503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5300__auto___8503,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__5301__auto__ = (function (){var switch__5133__auto__ = ((function (c__5300__auto___8503,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_8475){
var state_val_8476 = (state_8475[(1)]);
if((state_val_8476 === (7))){
var state_8475__$1 = state_8475;
var statearr_8477_8504 = state_8475__$1;
(statearr_8477_8504[(2)] = null);

(statearr_8477_8504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8476 === (1))){
var state_8475__$1 = state_8475;
var statearr_8478_8505 = state_8475__$1;
(statearr_8478_8505[(2)] = null);

(statearr_8478_8505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8476 === (4))){
var inst_8439 = (state_8475[(7)]);
var inst_8441 = (inst_8439 < cnt);
var state_8475__$1 = state_8475;
if(cljs.core.truth_(inst_8441)){
var statearr_8479_8506 = state_8475__$1;
(statearr_8479_8506[(1)] = (6));

} else {
var statearr_8480_8507 = state_8475__$1;
(statearr_8480_8507[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8476 === (15))){
var inst_8471 = (state_8475[(2)]);
var state_8475__$1 = state_8475;
var statearr_8481_8508 = state_8475__$1;
(statearr_8481_8508[(2)] = inst_8471);

(statearr_8481_8508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8476 === (13))){
var inst_8464 = cljs.core.async.close_BANG_.call(null,out);
var state_8475__$1 = state_8475;
var statearr_8482_8509 = state_8475__$1;
(statearr_8482_8509[(2)] = inst_8464);

(statearr_8482_8509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8476 === (6))){
var state_8475__$1 = state_8475;
var statearr_8483_8510 = state_8475__$1;
(statearr_8483_8510[(2)] = null);

(statearr_8483_8510[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8476 === (3))){
var inst_8473 = (state_8475[(2)]);
var state_8475__$1 = state_8475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8475__$1,inst_8473);
} else {
if((state_val_8476 === (12))){
var inst_8461 = (state_8475[(8)]);
var inst_8461__$1 = (state_8475[(2)]);
var inst_8462 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_8461__$1);
var state_8475__$1 = (function (){var statearr_8484 = state_8475;
(statearr_8484[(8)] = inst_8461__$1);

return statearr_8484;
})();
if(cljs.core.truth_(inst_8462)){
var statearr_8485_8511 = state_8475__$1;
(statearr_8485_8511[(1)] = (13));

} else {
var statearr_8486_8512 = state_8475__$1;
(statearr_8486_8512[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8476 === (2))){
var inst_8438 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_8439 = (0);
var state_8475__$1 = (function (){var statearr_8487 = state_8475;
(statearr_8487[(7)] = inst_8439);

(statearr_8487[(9)] = inst_8438);

return statearr_8487;
})();
var statearr_8488_8513 = state_8475__$1;
(statearr_8488_8513[(2)] = null);

(statearr_8488_8513[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8476 === (11))){
var inst_8439 = (state_8475[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_8475,(10),Object,null,(9));
var inst_8448 = chs__$1.call(null,inst_8439);
var inst_8449 = done.call(null,inst_8439);
var inst_8450 = cljs.core.async.take_BANG_.call(null,inst_8448,inst_8449);
var state_8475__$1 = state_8475;
var statearr_8489_8514 = state_8475__$1;
(statearr_8489_8514[(2)] = inst_8450);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8475__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8476 === (9))){
var inst_8439 = (state_8475[(7)]);
var inst_8452 = (state_8475[(2)]);
var inst_8453 = (inst_8439 + (1));
var inst_8439__$1 = inst_8453;
var state_8475__$1 = (function (){var statearr_8490 = state_8475;
(statearr_8490[(10)] = inst_8452);

(statearr_8490[(7)] = inst_8439__$1);

return statearr_8490;
})();
var statearr_8491_8515 = state_8475__$1;
(statearr_8491_8515[(2)] = null);

(statearr_8491_8515[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8476 === (5))){
var inst_8459 = (state_8475[(2)]);
var state_8475__$1 = (function (){var statearr_8492 = state_8475;
(statearr_8492[(11)] = inst_8459);

return statearr_8492;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8475__$1,(12),dchan);
} else {
if((state_val_8476 === (14))){
var inst_8461 = (state_8475[(8)]);
var inst_8466 = cljs.core.apply.call(null,f,inst_8461);
var state_8475__$1 = state_8475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8475__$1,(16),out,inst_8466);
} else {
if((state_val_8476 === (16))){
var inst_8468 = (state_8475[(2)]);
var state_8475__$1 = (function (){var statearr_8493 = state_8475;
(statearr_8493[(12)] = inst_8468);

return statearr_8493;
})();
var statearr_8494_8516 = state_8475__$1;
(statearr_8494_8516[(2)] = null);

(statearr_8494_8516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8476 === (10))){
var inst_8443 = (state_8475[(2)]);
var inst_8444 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_8475__$1 = (function (){var statearr_8495 = state_8475;
(statearr_8495[(13)] = inst_8443);

return statearr_8495;
})();
var statearr_8496_8517 = state_8475__$1;
(statearr_8496_8517[(2)] = inst_8444);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8475__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8476 === (8))){
var inst_8457 = (state_8475[(2)]);
var state_8475__$1 = state_8475;
var statearr_8497_8518 = state_8475__$1;
(statearr_8497_8518[(2)] = inst_8457);

(statearr_8497_8518[(1)] = (5));


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
});})(c__5300__auto___8503,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__5133__auto__,c__5300__auto___8503,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__5134__auto__ = null;
var cljs$core$async$state_machine__5134__auto____0 = (function (){
var statearr_8498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8498[(0)] = cljs$core$async$state_machine__5134__auto__);

(statearr_8498[(1)] = (1));

return statearr_8498;
});
var cljs$core$async$state_machine__5134__auto____1 = (function (state_8475){
while(true){
var ret_value__5135__auto__ = (function (){try{while(true){
var result__5136__auto__ = switch__5133__auto__.call(null,state_8475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5136__auto__;
}
break;
}
}catch (e8499){if((e8499 instanceof Object)){
var ex__5137__auto__ = e8499;
var statearr_8500_8519 = state_8475;
(statearr_8500_8519[(5)] = ex__5137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8520 = state_8475;
state_8475 = G__8520;
continue;
} else {
return ret_value__5135__auto__;
}
break;
}
});
cljs$core$async$state_machine__5134__auto__ = function(state_8475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5134__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5134__auto____1.call(this,state_8475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5134__auto____0;
cljs$core$async$state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5134__auto____1;
return cljs$core$async$state_machine__5134__auto__;
})()
;})(switch__5133__auto__,c__5300__auto___8503,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__5302__auto__ = (function (){var statearr_8501 = f__5301__auto__.call(null);
(statearr_8501[(6)] = c__5300__auto___8503);

return statearr_8501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5302__auto__);
});})(c__5300__auto___8503,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__8523 = arguments.length;
switch (G__8523) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__5300__auto___8577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5300__auto___8577,out){
return (function (){
var f__5301__auto__ = (function (){var switch__5133__auto__ = ((function (c__5300__auto___8577,out){
return (function (state_8555){
var state_val_8556 = (state_8555[(1)]);
if((state_val_8556 === (7))){
var inst_8535 = (state_8555[(7)]);
var inst_8534 = (state_8555[(8)]);
var inst_8534__$1 = (state_8555[(2)]);
var inst_8535__$1 = cljs.core.nth.call(null,inst_8534__$1,(0),null);
var inst_8536 = cljs.core.nth.call(null,inst_8534__$1,(1),null);
var inst_8537 = (inst_8535__$1 == null);
var state_8555__$1 = (function (){var statearr_8557 = state_8555;
(statearr_8557[(7)] = inst_8535__$1);

(statearr_8557[(8)] = inst_8534__$1);

(statearr_8557[(9)] = inst_8536);

return statearr_8557;
})();
if(cljs.core.truth_(inst_8537)){
var statearr_8558_8578 = state_8555__$1;
(statearr_8558_8578[(1)] = (8));

} else {
var statearr_8559_8579 = state_8555__$1;
(statearr_8559_8579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8556 === (1))){
var inst_8524 = cljs.core.vec.call(null,chs);
var inst_8525 = inst_8524;
var state_8555__$1 = (function (){var statearr_8560 = state_8555;
(statearr_8560[(10)] = inst_8525);

return statearr_8560;
})();
var statearr_8561_8580 = state_8555__$1;
(statearr_8561_8580[(2)] = null);

(statearr_8561_8580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8556 === (4))){
var inst_8525 = (state_8555[(10)]);
var state_8555__$1 = state_8555;
return cljs.core.async.ioc_alts_BANG_.call(null,state_8555__$1,(7),inst_8525);
} else {
if((state_val_8556 === (6))){
var inst_8551 = (state_8555[(2)]);
var state_8555__$1 = state_8555;
var statearr_8562_8581 = state_8555__$1;
(statearr_8562_8581[(2)] = inst_8551);

(statearr_8562_8581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8556 === (3))){
var inst_8553 = (state_8555[(2)]);
var state_8555__$1 = state_8555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8555__$1,inst_8553);
} else {
if((state_val_8556 === (2))){
var inst_8525 = (state_8555[(10)]);
var inst_8527 = cljs.core.count.call(null,inst_8525);
var inst_8528 = (inst_8527 > (0));
var state_8555__$1 = state_8555;
if(cljs.core.truth_(inst_8528)){
var statearr_8564_8582 = state_8555__$1;
(statearr_8564_8582[(1)] = (4));

} else {
var statearr_8565_8583 = state_8555__$1;
(statearr_8565_8583[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8556 === (11))){
var inst_8525 = (state_8555[(10)]);
var inst_8544 = (state_8555[(2)]);
var tmp8563 = inst_8525;
var inst_8525__$1 = tmp8563;
var state_8555__$1 = (function (){var statearr_8566 = state_8555;
(statearr_8566[(11)] = inst_8544);

(statearr_8566[(10)] = inst_8525__$1);

return statearr_8566;
})();
var statearr_8567_8584 = state_8555__$1;
(statearr_8567_8584[(2)] = null);

(statearr_8567_8584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8556 === (9))){
var inst_8535 = (state_8555[(7)]);
var state_8555__$1 = state_8555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8555__$1,(11),out,inst_8535);
} else {
if((state_val_8556 === (5))){
var inst_8549 = cljs.core.async.close_BANG_.call(null,out);
var state_8555__$1 = state_8555;
var statearr_8568_8585 = state_8555__$1;
(statearr_8568_8585[(2)] = inst_8549);

(statearr_8568_8585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8556 === (10))){
var inst_8547 = (state_8555[(2)]);
var state_8555__$1 = state_8555;
var statearr_8569_8586 = state_8555__$1;
(statearr_8569_8586[(2)] = inst_8547);

(statearr_8569_8586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8556 === (8))){
var inst_8535 = (state_8555[(7)]);
var inst_8534 = (state_8555[(8)]);
var inst_8525 = (state_8555[(10)]);
var inst_8536 = (state_8555[(9)]);
var inst_8539 = (function (){var cs = inst_8525;
var vec__8530 = inst_8534;
var v = inst_8535;
var c = inst_8536;
return ((function (cs,vec__8530,v,c,inst_8535,inst_8534,inst_8525,inst_8536,state_val_8556,c__5300__auto___8577,out){
return (function (p1__8521_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__8521_SHARP_);
});
;})(cs,vec__8530,v,c,inst_8535,inst_8534,inst_8525,inst_8536,state_val_8556,c__5300__auto___8577,out))
})();
var inst_8540 = cljs.core.filterv.call(null,inst_8539,inst_8525);
var inst_8525__$1 = inst_8540;
var state_8555__$1 = (function (){var statearr_8570 = state_8555;
(statearr_8570[(10)] = inst_8525__$1);

return statearr_8570;
})();
var statearr_8571_8587 = state_8555__$1;
(statearr_8571_8587[(2)] = null);

(statearr_8571_8587[(1)] = (2));


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
});})(c__5300__auto___8577,out))
;
return ((function (switch__5133__auto__,c__5300__auto___8577,out){
return (function() {
var cljs$core$async$state_machine__5134__auto__ = null;
var cljs$core$async$state_machine__5134__auto____0 = (function (){
var statearr_8572 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8572[(0)] = cljs$core$async$state_machine__5134__auto__);

(statearr_8572[(1)] = (1));

return statearr_8572;
});
var cljs$core$async$state_machine__5134__auto____1 = (function (state_8555){
while(true){
var ret_value__5135__auto__ = (function (){try{while(true){
var result__5136__auto__ = switch__5133__auto__.call(null,state_8555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5136__auto__;
}
break;
}
}catch (e8573){if((e8573 instanceof Object)){
var ex__5137__auto__ = e8573;
var statearr_8574_8588 = state_8555;
(statearr_8574_8588[(5)] = ex__5137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8589 = state_8555;
state_8555 = G__8589;
continue;
} else {
return ret_value__5135__auto__;
}
break;
}
});
cljs$core$async$state_machine__5134__auto__ = function(state_8555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5134__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5134__auto____1.call(this,state_8555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5134__auto____0;
cljs$core$async$state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5134__auto____1;
return cljs$core$async$state_machine__5134__auto__;
})()
;})(switch__5133__auto__,c__5300__auto___8577,out))
})();
var state__5302__auto__ = (function (){var statearr_8575 = f__5301__auto__.call(null);
(statearr_8575[(6)] = c__5300__auto___8577);

return statearr_8575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5302__auto__);
});})(c__5300__auto___8577,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__8591 = arguments.length;
switch (G__8591) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__5300__auto___8636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5300__auto___8636,out){
return (function (){
var f__5301__auto__ = (function (){var switch__5133__auto__ = ((function (c__5300__auto___8636,out){
return (function (state_8615){
var state_val_8616 = (state_8615[(1)]);
if((state_val_8616 === (7))){
var inst_8597 = (state_8615[(7)]);
var inst_8597__$1 = (state_8615[(2)]);
var inst_8598 = (inst_8597__$1 == null);
var inst_8599 = cljs.core.not.call(null,inst_8598);
var state_8615__$1 = (function (){var statearr_8617 = state_8615;
(statearr_8617[(7)] = inst_8597__$1);

return statearr_8617;
})();
if(inst_8599){
var statearr_8618_8637 = state_8615__$1;
(statearr_8618_8637[(1)] = (8));

} else {
var statearr_8619_8638 = state_8615__$1;
(statearr_8619_8638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8616 === (1))){
var inst_8592 = (0);
var state_8615__$1 = (function (){var statearr_8620 = state_8615;
(statearr_8620[(8)] = inst_8592);

return statearr_8620;
})();
var statearr_8621_8639 = state_8615__$1;
(statearr_8621_8639[(2)] = null);

(statearr_8621_8639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8616 === (4))){
var state_8615__$1 = state_8615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8615__$1,(7),ch);
} else {
if((state_val_8616 === (6))){
var inst_8610 = (state_8615[(2)]);
var state_8615__$1 = state_8615;
var statearr_8622_8640 = state_8615__$1;
(statearr_8622_8640[(2)] = inst_8610);

(statearr_8622_8640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8616 === (3))){
var inst_8612 = (state_8615[(2)]);
var inst_8613 = cljs.core.async.close_BANG_.call(null,out);
var state_8615__$1 = (function (){var statearr_8623 = state_8615;
(statearr_8623[(9)] = inst_8612);

return statearr_8623;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8615__$1,inst_8613);
} else {
if((state_val_8616 === (2))){
var inst_8592 = (state_8615[(8)]);
var inst_8594 = (inst_8592 < n);
var state_8615__$1 = state_8615;
if(cljs.core.truth_(inst_8594)){
var statearr_8624_8641 = state_8615__$1;
(statearr_8624_8641[(1)] = (4));

} else {
var statearr_8625_8642 = state_8615__$1;
(statearr_8625_8642[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8616 === (11))){
var inst_8592 = (state_8615[(8)]);
var inst_8602 = (state_8615[(2)]);
var inst_8603 = (inst_8592 + (1));
var inst_8592__$1 = inst_8603;
var state_8615__$1 = (function (){var statearr_8626 = state_8615;
(statearr_8626[(10)] = inst_8602);

(statearr_8626[(8)] = inst_8592__$1);

return statearr_8626;
})();
var statearr_8627_8643 = state_8615__$1;
(statearr_8627_8643[(2)] = null);

(statearr_8627_8643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8616 === (9))){
var state_8615__$1 = state_8615;
var statearr_8628_8644 = state_8615__$1;
(statearr_8628_8644[(2)] = null);

(statearr_8628_8644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8616 === (5))){
var state_8615__$1 = state_8615;
var statearr_8629_8645 = state_8615__$1;
(statearr_8629_8645[(2)] = null);

(statearr_8629_8645[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8616 === (10))){
var inst_8607 = (state_8615[(2)]);
var state_8615__$1 = state_8615;
var statearr_8630_8646 = state_8615__$1;
(statearr_8630_8646[(2)] = inst_8607);

(statearr_8630_8646[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8616 === (8))){
var inst_8597 = (state_8615[(7)]);
var state_8615__$1 = state_8615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8615__$1,(11),out,inst_8597);
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
});})(c__5300__auto___8636,out))
;
return ((function (switch__5133__auto__,c__5300__auto___8636,out){
return (function() {
var cljs$core$async$state_machine__5134__auto__ = null;
var cljs$core$async$state_machine__5134__auto____0 = (function (){
var statearr_8631 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8631[(0)] = cljs$core$async$state_machine__5134__auto__);

(statearr_8631[(1)] = (1));

return statearr_8631;
});
var cljs$core$async$state_machine__5134__auto____1 = (function (state_8615){
while(true){
var ret_value__5135__auto__ = (function (){try{while(true){
var result__5136__auto__ = switch__5133__auto__.call(null,state_8615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5136__auto__;
}
break;
}
}catch (e8632){if((e8632 instanceof Object)){
var ex__5137__auto__ = e8632;
var statearr_8633_8647 = state_8615;
(statearr_8633_8647[(5)] = ex__5137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8648 = state_8615;
state_8615 = G__8648;
continue;
} else {
return ret_value__5135__auto__;
}
break;
}
});
cljs$core$async$state_machine__5134__auto__ = function(state_8615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5134__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5134__auto____1.call(this,state_8615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5134__auto____0;
cljs$core$async$state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5134__auto____1;
return cljs$core$async$state_machine__5134__auto__;
})()
;})(switch__5133__auto__,c__5300__auto___8636,out))
})();
var state__5302__auto__ = (function (){var statearr_8634 = f__5301__auto__.call(null);
(statearr_8634[(6)] = c__5300__auto___8636);

return statearr_8634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5302__auto__);
});})(c__5300__auto___8636,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8650 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8650 = (function (f,ch,meta8651){
this.f = f;
this.ch = ch;
this.meta8651 = meta8651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8652,meta8651__$1){
var self__ = this;
var _8652__$1 = this;
return (new cljs.core.async.t_cljs$core$async8650(self__.f,self__.ch,meta8651__$1));
});

cljs.core.async.t_cljs$core$async8650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8652){
var self__ = this;
var _8652__$1 = this;
return self__.meta8651;
});

cljs.core.async.t_cljs$core$async8650.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8650.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8650.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8650.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8650.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8653 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8653 = (function (f,ch,meta8651,_,fn1,meta8654){
this.f = f;
this.ch = ch;
this.meta8651 = meta8651;
this._ = _;
this.fn1 = fn1;
this.meta8654 = meta8654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_8655,meta8654__$1){
var self__ = this;
var _8655__$1 = this;
return (new cljs.core.async.t_cljs$core$async8653(self__.f,self__.ch,self__.meta8651,self__._,self__.fn1,meta8654__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async8653.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_8655){
var self__ = this;
var _8655__$1 = this;
return self__.meta8654;
});})(___$1))
;

cljs.core.async.t_cljs$core$async8653.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8653.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async8653.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async8653.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__8649_SHARP_){
return f1.call(null,(((p1__8649_SHARP_ == null))?null:self__.f.call(null,p1__8649_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async8653.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8651","meta8651",-1553627596,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async8650","cljs.core.async/t_cljs$core$async8650",-185550853,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta8654","meta8654",-95031072,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async8653.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8653";

cljs.core.async.t_cljs$core$async8653.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async8653");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8653.
 */
cljs.core.async.__GT_t_cljs$core$async8653 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async8653(f__$1,ch__$1,meta8651__$1,___$2,fn1__$1,meta8654){
return (new cljs.core.async.t_cljs$core$async8653(f__$1,ch__$1,meta8651__$1,___$2,fn1__$1,meta8654));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async8653(self__.f,self__.ch,self__.meta8651,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async8650.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8650.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async8650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8651","meta8651",-1553627596,null)], null);
});

cljs.core.async.t_cljs$core$async8650.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8650";

cljs.core.async.t_cljs$core$async8650.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async8650");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8650.
 */
cljs.core.async.__GT_t_cljs$core$async8650 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async8650(f__$1,ch__$1,meta8651){
return (new cljs.core.async.t_cljs$core$async8650(f__$1,ch__$1,meta8651));
});

}

return (new cljs.core.async.t_cljs$core$async8650(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8656 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8656 = (function (f,ch,meta8657){
this.f = f;
this.ch = ch;
this.meta8657 = meta8657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8658,meta8657__$1){
var self__ = this;
var _8658__$1 = this;
return (new cljs.core.async.t_cljs$core$async8656(self__.f,self__.ch,meta8657__$1));
});

cljs.core.async.t_cljs$core$async8656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8658){
var self__ = this;
var _8658__$1 = this;
return self__.meta8657;
});

cljs.core.async.t_cljs$core$async8656.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8656.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8656.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8656.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async8656.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8656.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async8656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8657","meta8657",-1814460431,null)], null);
});

cljs.core.async.t_cljs$core$async8656.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8656";

cljs.core.async.t_cljs$core$async8656.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async8656");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8656.
 */
cljs.core.async.__GT_t_cljs$core$async8656 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async8656(f__$1,ch__$1,meta8657){
return (new cljs.core.async.t_cljs$core$async8656(f__$1,ch__$1,meta8657));
});

}

return (new cljs.core.async.t_cljs$core$async8656(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8659 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8659 = (function (p,ch,meta8660){
this.p = p;
this.ch = ch;
this.meta8660 = meta8660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8661,meta8660__$1){
var self__ = this;
var _8661__$1 = this;
return (new cljs.core.async.t_cljs$core$async8659(self__.p,self__.ch,meta8660__$1));
});

cljs.core.async.t_cljs$core$async8659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8661){
var self__ = this;
var _8661__$1 = this;
return self__.meta8660;
});

cljs.core.async.t_cljs$core$async8659.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8659.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8659.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8659.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8659.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async8659.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8659.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async8659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8660","meta8660",-946710475,null)], null);
});

cljs.core.async.t_cljs$core$async8659.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8659";

cljs.core.async.t_cljs$core$async8659.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async8659");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8659.
 */
cljs.core.async.__GT_t_cljs$core$async8659 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async8659(p__$1,ch__$1,meta8660){
return (new cljs.core.async.t_cljs$core$async8659(p__$1,ch__$1,meta8660));
});

}

return (new cljs.core.async.t_cljs$core$async8659(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__8663 = arguments.length;
switch (G__8663) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__5300__auto___8703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5300__auto___8703,out){
return (function (){
var f__5301__auto__ = (function (){var switch__5133__auto__ = ((function (c__5300__auto___8703,out){
return (function (state_8684){
var state_val_8685 = (state_8684[(1)]);
if((state_val_8685 === (7))){
var inst_8680 = (state_8684[(2)]);
var state_8684__$1 = state_8684;
var statearr_8686_8704 = state_8684__$1;
(statearr_8686_8704[(2)] = inst_8680);

(statearr_8686_8704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8685 === (1))){
var state_8684__$1 = state_8684;
var statearr_8687_8705 = state_8684__$1;
(statearr_8687_8705[(2)] = null);

(statearr_8687_8705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8685 === (4))){
var inst_8666 = (state_8684[(7)]);
var inst_8666__$1 = (state_8684[(2)]);
var inst_8667 = (inst_8666__$1 == null);
var state_8684__$1 = (function (){var statearr_8688 = state_8684;
(statearr_8688[(7)] = inst_8666__$1);

return statearr_8688;
})();
if(cljs.core.truth_(inst_8667)){
var statearr_8689_8706 = state_8684__$1;
(statearr_8689_8706[(1)] = (5));

} else {
var statearr_8690_8707 = state_8684__$1;
(statearr_8690_8707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8685 === (6))){
var inst_8666 = (state_8684[(7)]);
var inst_8671 = p.call(null,inst_8666);
var state_8684__$1 = state_8684;
if(cljs.core.truth_(inst_8671)){
var statearr_8691_8708 = state_8684__$1;
(statearr_8691_8708[(1)] = (8));

} else {
var statearr_8692_8709 = state_8684__$1;
(statearr_8692_8709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8685 === (3))){
var inst_8682 = (state_8684[(2)]);
var state_8684__$1 = state_8684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8684__$1,inst_8682);
} else {
if((state_val_8685 === (2))){
var state_8684__$1 = state_8684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8684__$1,(4),ch);
} else {
if((state_val_8685 === (11))){
var inst_8674 = (state_8684[(2)]);
var state_8684__$1 = state_8684;
var statearr_8693_8710 = state_8684__$1;
(statearr_8693_8710[(2)] = inst_8674);

(statearr_8693_8710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8685 === (9))){
var state_8684__$1 = state_8684;
var statearr_8694_8711 = state_8684__$1;
(statearr_8694_8711[(2)] = null);

(statearr_8694_8711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8685 === (5))){
var inst_8669 = cljs.core.async.close_BANG_.call(null,out);
var state_8684__$1 = state_8684;
var statearr_8695_8712 = state_8684__$1;
(statearr_8695_8712[(2)] = inst_8669);

(statearr_8695_8712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8685 === (10))){
var inst_8677 = (state_8684[(2)]);
var state_8684__$1 = (function (){var statearr_8696 = state_8684;
(statearr_8696[(8)] = inst_8677);

return statearr_8696;
})();
var statearr_8697_8713 = state_8684__$1;
(statearr_8697_8713[(2)] = null);

(statearr_8697_8713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8685 === (8))){
var inst_8666 = (state_8684[(7)]);
var state_8684__$1 = state_8684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8684__$1,(11),out,inst_8666);
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
});})(c__5300__auto___8703,out))
;
return ((function (switch__5133__auto__,c__5300__auto___8703,out){
return (function() {
var cljs$core$async$state_machine__5134__auto__ = null;
var cljs$core$async$state_machine__5134__auto____0 = (function (){
var statearr_8698 = [null,null,null,null,null,null,null,null,null];
(statearr_8698[(0)] = cljs$core$async$state_machine__5134__auto__);

(statearr_8698[(1)] = (1));

return statearr_8698;
});
var cljs$core$async$state_machine__5134__auto____1 = (function (state_8684){
while(true){
var ret_value__5135__auto__ = (function (){try{while(true){
var result__5136__auto__ = switch__5133__auto__.call(null,state_8684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5136__auto__;
}
break;
}
}catch (e8699){if((e8699 instanceof Object)){
var ex__5137__auto__ = e8699;
var statearr_8700_8714 = state_8684;
(statearr_8700_8714[(5)] = ex__5137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8715 = state_8684;
state_8684 = G__8715;
continue;
} else {
return ret_value__5135__auto__;
}
break;
}
});
cljs$core$async$state_machine__5134__auto__ = function(state_8684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5134__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5134__auto____1.call(this,state_8684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5134__auto____0;
cljs$core$async$state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5134__auto____1;
return cljs$core$async$state_machine__5134__auto__;
})()
;})(switch__5133__auto__,c__5300__auto___8703,out))
})();
var state__5302__auto__ = (function (){var statearr_8701 = f__5301__auto__.call(null);
(statearr_8701[(6)] = c__5300__auto___8703);

return statearr_8701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5302__auto__);
});})(c__5300__auto___8703,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__8717 = arguments.length;
switch (G__8717) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__5300__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5300__auto__){
return (function (){
var f__5301__auto__ = (function (){var switch__5133__auto__ = ((function (c__5300__auto__){
return (function (state_8780){
var state_val_8781 = (state_8780[(1)]);
if((state_val_8781 === (7))){
var inst_8776 = (state_8780[(2)]);
var state_8780__$1 = state_8780;
var statearr_8782_8820 = state_8780__$1;
(statearr_8782_8820[(2)] = inst_8776);

(statearr_8782_8820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8781 === (20))){
var inst_8746 = (state_8780[(7)]);
var inst_8757 = (state_8780[(2)]);
var inst_8758 = cljs.core.next.call(null,inst_8746);
var inst_8732 = inst_8758;
var inst_8733 = null;
var inst_8734 = (0);
var inst_8735 = (0);
var state_8780__$1 = (function (){var statearr_8783 = state_8780;
(statearr_8783[(8)] = inst_8757);

(statearr_8783[(9)] = inst_8735);

(statearr_8783[(10)] = inst_8734);

(statearr_8783[(11)] = inst_8732);

(statearr_8783[(12)] = inst_8733);

return statearr_8783;
})();
var statearr_8784_8821 = state_8780__$1;
(statearr_8784_8821[(2)] = null);

(statearr_8784_8821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8781 === (1))){
var state_8780__$1 = state_8780;
var statearr_8785_8822 = state_8780__$1;
(statearr_8785_8822[(2)] = null);

(statearr_8785_8822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8781 === (4))){
var inst_8721 = (state_8780[(13)]);
var inst_8721__$1 = (state_8780[(2)]);
var inst_8722 = (inst_8721__$1 == null);
var state_8780__$1 = (function (){var statearr_8786 = state_8780;
(statearr_8786[(13)] = inst_8721__$1);

return statearr_8786;
})();
if(cljs.core.truth_(inst_8722)){
var statearr_8787_8823 = state_8780__$1;
(statearr_8787_8823[(1)] = (5));

} else {
var statearr_8788_8824 = state_8780__$1;
(statearr_8788_8824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8781 === (15))){
var state_8780__$1 = state_8780;
var statearr_8792_8825 = state_8780__$1;
(statearr_8792_8825[(2)] = null);

(statearr_8792_8825[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8781 === (21))){
var state_8780__$1 = state_8780;
var statearr_8793_8826 = state_8780__$1;
(statearr_8793_8826[(2)] = null);

(statearr_8793_8826[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8781 === (13))){
var inst_8735 = (state_8780[(9)]);
var inst_8734 = (state_8780[(10)]);
var inst_8732 = (state_8780[(11)]);
var inst_8733 = (state_8780[(12)]);
var inst_8742 = (state_8780[(2)]);
var inst_8743 = (inst_8735 + (1));
var tmp8789 = inst_8734;
var tmp8790 = inst_8732;
var tmp8791 = inst_8733;
var inst_8732__$1 = tmp8790;
var inst_8733__$1 = tmp8791;
var inst_8734__$1 = tmp8789;
var inst_8735__$1 = inst_8743;
var state_8780__$1 = (function (){var statearr_8794 = state_8780;
(statearr_8794[(9)] = inst_8735__$1);

(statearr_8794[(10)] = inst_8734__$1);

(statearr_8794[(11)] = inst_8732__$1);

(statearr_8794[(14)] = inst_8742);

(statearr_8794[(12)] = inst_8733__$1);

return statearr_8794;
})();
var statearr_8795_8827 = state_8780__$1;
(statearr_8795_8827[(2)] = null);

(statearr_8795_8827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8781 === (22))){
var state_8780__$1 = state_8780;
var statearr_8796_8828 = state_8780__$1;
(statearr_8796_8828[(2)] = null);

(statearr_8796_8828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8781 === (6))){
var inst_8721 = (state_8780[(13)]);
var inst_8730 = f.call(null,inst_8721);
var inst_8731 = cljs.core.seq.call(null,inst_8730);
var inst_8732 = inst_8731;
var inst_8733 = null;
var inst_8734 = (0);
var inst_8735 = (0);
var state_8780__$1 = (function (){var statearr_8797 = state_8780;
(statearr_8797[(9)] = inst_8735);

(statearr_8797[(10)] = inst_8734);

(statearr_8797[(11)] = inst_8732);

(statearr_8797[(12)] = inst_8733);

return statearr_8797;
})();
var statearr_8798_8829 = state_8780__$1;
(statearr_8798_8829[(2)] = null);

(statearr_8798_8829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8781 === (17))){
var inst_8746 = (state_8780[(7)]);
var inst_8750 = cljs.core.chunk_first.call(null,inst_8746);
var inst_8751 = cljs.core.chunk_rest.call(null,inst_8746);
var inst_8752 = cljs.core.count.call(null,inst_8750);
var inst_8732 = inst_8751;
var inst_8733 = inst_8750;
var inst_8734 = inst_8752;
var inst_8735 = (0);
var state_8780__$1 = (function (){var statearr_8799 = state_8780;
(statearr_8799[(9)] = inst_8735);

(statearr_8799[(10)] = inst_8734);

(statearr_8799[(11)] = inst_8732);

(statearr_8799[(12)] = inst_8733);

return statearr_8799;
})();
var statearr_8800_8830 = state_8780__$1;
(statearr_8800_8830[(2)] = null);

(statearr_8800_8830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8781 === (3))){
var inst_8778 = (state_8780[(2)]);
var state_8780__$1 = state_8780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8780__$1,inst_8778);
} else {
if((state_val_8781 === (12))){
var inst_8766 = (state_8780[(2)]);
var state_8780__$1 = state_8780;
var statearr_8801_8831 = state_8780__$1;
(statearr_8801_8831[(2)] = inst_8766);

(statearr_8801_8831[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8781 === (2))){
var state_8780__$1 = state_8780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8780__$1,(4),in$);
} else {
if((state_val_8781 === (23))){
var inst_8774 = (state_8780[(2)]);
var state_8780__$1 = state_8780;
var statearr_8802_8832 = state_8780__$1;
(statearr_8802_8832[(2)] = inst_8774);

(statearr_8802_8832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8781 === (19))){
var inst_8761 = (state_8780[(2)]);
var state_8780__$1 = state_8780;
var statearr_8803_8833 = state_8780__$1;
(statearr_8803_8833[(2)] = inst_8761);

(statearr_8803_8833[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8781 === (11))){
var inst_8732 = (state_8780[(11)]);
var inst_8746 = (state_8780[(7)]);
var inst_8746__$1 = cljs.core.seq.call(null,inst_8732);
var state_8780__$1 = (function (){var statearr_8804 = state_8780;
(statearr_8804[(7)] = inst_8746__$1);

return statearr_8804;
})();
if(inst_8746__$1){
var statearr_8805_8834 = state_8780__$1;
(statearr_8805_8834[(1)] = (14));

} else {
var statearr_8806_8835 = state_8780__$1;
(statearr_8806_8835[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8781 === (9))){
var inst_8768 = (state_8780[(2)]);
var inst_8769 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_8780__$1 = (function (){var statearr_8807 = state_8780;
(statearr_8807[(15)] = inst_8768);

return statearr_8807;
})();
if(cljs.core.truth_(inst_8769)){
var statearr_8808_8836 = state_8780__$1;
(statearr_8808_8836[(1)] = (21));

} else {
var statearr_8809_8837 = state_8780__$1;
(statearr_8809_8837[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8781 === (5))){
var inst_8724 = cljs.core.async.close_BANG_.call(null,out);
var state_8780__$1 = state_8780;
var statearr_8810_8838 = state_8780__$1;
(statearr_8810_8838[(2)] = inst_8724);

(statearr_8810_8838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8781 === (14))){
var inst_8746 = (state_8780[(7)]);
var inst_8748 = cljs.core.chunked_seq_QMARK_.call(null,inst_8746);
var state_8780__$1 = state_8780;
if(inst_8748){
var statearr_8811_8839 = state_8780__$1;
(statearr_8811_8839[(1)] = (17));

} else {
var statearr_8812_8840 = state_8780__$1;
(statearr_8812_8840[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8781 === (16))){
var inst_8764 = (state_8780[(2)]);
var state_8780__$1 = state_8780;
var statearr_8813_8841 = state_8780__$1;
(statearr_8813_8841[(2)] = inst_8764);

(statearr_8813_8841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8781 === (10))){
var inst_8735 = (state_8780[(9)]);
var inst_8733 = (state_8780[(12)]);
var inst_8740 = cljs.core._nth.call(null,inst_8733,inst_8735);
var state_8780__$1 = state_8780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8780__$1,(13),out,inst_8740);
} else {
if((state_val_8781 === (18))){
var inst_8746 = (state_8780[(7)]);
var inst_8755 = cljs.core.first.call(null,inst_8746);
var state_8780__$1 = state_8780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8780__$1,(20),out,inst_8755);
} else {
if((state_val_8781 === (8))){
var inst_8735 = (state_8780[(9)]);
var inst_8734 = (state_8780[(10)]);
var inst_8737 = (inst_8735 < inst_8734);
var inst_8738 = inst_8737;
var state_8780__$1 = state_8780;
if(cljs.core.truth_(inst_8738)){
var statearr_8814_8842 = state_8780__$1;
(statearr_8814_8842[(1)] = (10));

} else {
var statearr_8815_8843 = state_8780__$1;
(statearr_8815_8843[(1)] = (11));

}

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
});})(c__5300__auto__))
;
return ((function (switch__5133__auto__,c__5300__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__5134__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__5134__auto____0 = (function (){
var statearr_8816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8816[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__5134__auto__);

(statearr_8816[(1)] = (1));

return statearr_8816;
});
var cljs$core$async$mapcat_STAR__$_state_machine__5134__auto____1 = (function (state_8780){
while(true){
var ret_value__5135__auto__ = (function (){try{while(true){
var result__5136__auto__ = switch__5133__auto__.call(null,state_8780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5136__auto__;
}
break;
}
}catch (e8817){if((e8817 instanceof Object)){
var ex__5137__auto__ = e8817;
var statearr_8818_8844 = state_8780;
(statearr_8818_8844[(5)] = ex__5137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8845 = state_8780;
state_8780 = G__8845;
continue;
} else {
return ret_value__5135__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__5134__auto__ = function(state_8780){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__5134__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__5134__auto____1.call(this,state_8780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__5134__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__5134__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__5134__auto__;
})()
;})(switch__5133__auto__,c__5300__auto__))
})();
var state__5302__auto__ = (function (){var statearr_8819 = f__5301__auto__.call(null);
(statearr_8819[(6)] = c__5300__auto__);

return statearr_8819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5302__auto__);
});})(c__5300__auto__))
);

return c__5300__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__8847 = arguments.length;
switch (G__8847) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__8850 = arguments.length;
switch (G__8850) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__8853 = arguments.length;
switch (G__8853) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__5300__auto___8900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5300__auto___8900,out){
return (function (){
var f__5301__auto__ = (function (){var switch__5133__auto__ = ((function (c__5300__auto___8900,out){
return (function (state_8877){
var state_val_8878 = (state_8877[(1)]);
if((state_val_8878 === (7))){
var inst_8872 = (state_8877[(2)]);
var state_8877__$1 = state_8877;
var statearr_8879_8901 = state_8877__$1;
(statearr_8879_8901[(2)] = inst_8872);

(statearr_8879_8901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8878 === (1))){
var inst_8854 = null;
var state_8877__$1 = (function (){var statearr_8880 = state_8877;
(statearr_8880[(7)] = inst_8854);

return statearr_8880;
})();
var statearr_8881_8902 = state_8877__$1;
(statearr_8881_8902[(2)] = null);

(statearr_8881_8902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8878 === (4))){
var inst_8857 = (state_8877[(8)]);
var inst_8857__$1 = (state_8877[(2)]);
var inst_8858 = (inst_8857__$1 == null);
var inst_8859 = cljs.core.not.call(null,inst_8858);
var state_8877__$1 = (function (){var statearr_8882 = state_8877;
(statearr_8882[(8)] = inst_8857__$1);

return statearr_8882;
})();
if(inst_8859){
var statearr_8883_8903 = state_8877__$1;
(statearr_8883_8903[(1)] = (5));

} else {
var statearr_8884_8904 = state_8877__$1;
(statearr_8884_8904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8878 === (6))){
var state_8877__$1 = state_8877;
var statearr_8885_8905 = state_8877__$1;
(statearr_8885_8905[(2)] = null);

(statearr_8885_8905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8878 === (3))){
var inst_8874 = (state_8877[(2)]);
var inst_8875 = cljs.core.async.close_BANG_.call(null,out);
var state_8877__$1 = (function (){var statearr_8886 = state_8877;
(statearr_8886[(9)] = inst_8874);

return statearr_8886;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8877__$1,inst_8875);
} else {
if((state_val_8878 === (2))){
var state_8877__$1 = state_8877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8877__$1,(4),ch);
} else {
if((state_val_8878 === (11))){
var inst_8857 = (state_8877[(8)]);
var inst_8866 = (state_8877[(2)]);
var inst_8854 = inst_8857;
var state_8877__$1 = (function (){var statearr_8887 = state_8877;
(statearr_8887[(7)] = inst_8854);

(statearr_8887[(10)] = inst_8866);

return statearr_8887;
})();
var statearr_8888_8906 = state_8877__$1;
(statearr_8888_8906[(2)] = null);

(statearr_8888_8906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8878 === (9))){
var inst_8857 = (state_8877[(8)]);
var state_8877__$1 = state_8877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8877__$1,(11),out,inst_8857);
} else {
if((state_val_8878 === (5))){
var inst_8854 = (state_8877[(7)]);
var inst_8857 = (state_8877[(8)]);
var inst_8861 = cljs.core._EQ_.call(null,inst_8857,inst_8854);
var state_8877__$1 = state_8877;
if(inst_8861){
var statearr_8890_8907 = state_8877__$1;
(statearr_8890_8907[(1)] = (8));

} else {
var statearr_8891_8908 = state_8877__$1;
(statearr_8891_8908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8878 === (10))){
var inst_8869 = (state_8877[(2)]);
var state_8877__$1 = state_8877;
var statearr_8892_8909 = state_8877__$1;
(statearr_8892_8909[(2)] = inst_8869);

(statearr_8892_8909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8878 === (8))){
var inst_8854 = (state_8877[(7)]);
var tmp8889 = inst_8854;
var inst_8854__$1 = tmp8889;
var state_8877__$1 = (function (){var statearr_8893 = state_8877;
(statearr_8893[(7)] = inst_8854__$1);

return statearr_8893;
})();
var statearr_8894_8910 = state_8877__$1;
(statearr_8894_8910[(2)] = null);

(statearr_8894_8910[(1)] = (2));


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
});})(c__5300__auto___8900,out))
;
return ((function (switch__5133__auto__,c__5300__auto___8900,out){
return (function() {
var cljs$core$async$state_machine__5134__auto__ = null;
var cljs$core$async$state_machine__5134__auto____0 = (function (){
var statearr_8895 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8895[(0)] = cljs$core$async$state_machine__5134__auto__);

(statearr_8895[(1)] = (1));

return statearr_8895;
});
var cljs$core$async$state_machine__5134__auto____1 = (function (state_8877){
while(true){
var ret_value__5135__auto__ = (function (){try{while(true){
var result__5136__auto__ = switch__5133__auto__.call(null,state_8877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5136__auto__;
}
break;
}
}catch (e8896){if((e8896 instanceof Object)){
var ex__5137__auto__ = e8896;
var statearr_8897_8911 = state_8877;
(statearr_8897_8911[(5)] = ex__5137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8912 = state_8877;
state_8877 = G__8912;
continue;
} else {
return ret_value__5135__auto__;
}
break;
}
});
cljs$core$async$state_machine__5134__auto__ = function(state_8877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5134__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5134__auto____1.call(this,state_8877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5134__auto____0;
cljs$core$async$state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5134__auto____1;
return cljs$core$async$state_machine__5134__auto__;
})()
;})(switch__5133__auto__,c__5300__auto___8900,out))
})();
var state__5302__auto__ = (function (){var statearr_8898 = f__5301__auto__.call(null);
(statearr_8898[(6)] = c__5300__auto___8900);

return statearr_8898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5302__auto__);
});})(c__5300__auto___8900,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__8914 = arguments.length;
switch (G__8914) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__5300__auto___8980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5300__auto___8980,out){
return (function (){
var f__5301__auto__ = (function (){var switch__5133__auto__ = ((function (c__5300__auto___8980,out){
return (function (state_8952){
var state_val_8953 = (state_8952[(1)]);
if((state_val_8953 === (7))){
var inst_8948 = (state_8952[(2)]);
var state_8952__$1 = state_8952;
var statearr_8954_8981 = state_8952__$1;
(statearr_8954_8981[(2)] = inst_8948);

(statearr_8954_8981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8953 === (1))){
var inst_8915 = (new Array(n));
var inst_8916 = inst_8915;
var inst_8917 = (0);
var state_8952__$1 = (function (){var statearr_8955 = state_8952;
(statearr_8955[(7)] = inst_8916);

(statearr_8955[(8)] = inst_8917);

return statearr_8955;
})();
var statearr_8956_8982 = state_8952__$1;
(statearr_8956_8982[(2)] = null);

(statearr_8956_8982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8953 === (4))){
var inst_8920 = (state_8952[(9)]);
var inst_8920__$1 = (state_8952[(2)]);
var inst_8921 = (inst_8920__$1 == null);
var inst_8922 = cljs.core.not.call(null,inst_8921);
var state_8952__$1 = (function (){var statearr_8957 = state_8952;
(statearr_8957[(9)] = inst_8920__$1);

return statearr_8957;
})();
if(inst_8922){
var statearr_8958_8983 = state_8952__$1;
(statearr_8958_8983[(1)] = (5));

} else {
var statearr_8959_8984 = state_8952__$1;
(statearr_8959_8984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8953 === (15))){
var inst_8942 = (state_8952[(2)]);
var state_8952__$1 = state_8952;
var statearr_8960_8985 = state_8952__$1;
(statearr_8960_8985[(2)] = inst_8942);

(statearr_8960_8985[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8953 === (13))){
var state_8952__$1 = state_8952;
var statearr_8961_8986 = state_8952__$1;
(statearr_8961_8986[(2)] = null);

(statearr_8961_8986[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8953 === (6))){
var inst_8917 = (state_8952[(8)]);
var inst_8938 = (inst_8917 > (0));
var state_8952__$1 = state_8952;
if(cljs.core.truth_(inst_8938)){
var statearr_8962_8987 = state_8952__$1;
(statearr_8962_8987[(1)] = (12));

} else {
var statearr_8963_8988 = state_8952__$1;
(statearr_8963_8988[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8953 === (3))){
var inst_8950 = (state_8952[(2)]);
var state_8952__$1 = state_8952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8952__$1,inst_8950);
} else {
if((state_val_8953 === (12))){
var inst_8916 = (state_8952[(7)]);
var inst_8940 = cljs.core.vec.call(null,inst_8916);
var state_8952__$1 = state_8952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8952__$1,(15),out,inst_8940);
} else {
if((state_val_8953 === (2))){
var state_8952__$1 = state_8952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8952__$1,(4),ch);
} else {
if((state_val_8953 === (11))){
var inst_8932 = (state_8952[(2)]);
var inst_8933 = (new Array(n));
var inst_8916 = inst_8933;
var inst_8917 = (0);
var state_8952__$1 = (function (){var statearr_8964 = state_8952;
(statearr_8964[(7)] = inst_8916);

(statearr_8964[(8)] = inst_8917);

(statearr_8964[(10)] = inst_8932);

return statearr_8964;
})();
var statearr_8965_8989 = state_8952__$1;
(statearr_8965_8989[(2)] = null);

(statearr_8965_8989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8953 === (9))){
var inst_8916 = (state_8952[(7)]);
var inst_8930 = cljs.core.vec.call(null,inst_8916);
var state_8952__$1 = state_8952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8952__$1,(11),out,inst_8930);
} else {
if((state_val_8953 === (5))){
var inst_8916 = (state_8952[(7)]);
var inst_8917 = (state_8952[(8)]);
var inst_8925 = (state_8952[(11)]);
var inst_8920 = (state_8952[(9)]);
var inst_8924 = (inst_8916[inst_8917] = inst_8920);
var inst_8925__$1 = (inst_8917 + (1));
var inst_8926 = (inst_8925__$1 < n);
var state_8952__$1 = (function (){var statearr_8966 = state_8952;
(statearr_8966[(12)] = inst_8924);

(statearr_8966[(11)] = inst_8925__$1);

return statearr_8966;
})();
if(cljs.core.truth_(inst_8926)){
var statearr_8967_8990 = state_8952__$1;
(statearr_8967_8990[(1)] = (8));

} else {
var statearr_8968_8991 = state_8952__$1;
(statearr_8968_8991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8953 === (14))){
var inst_8945 = (state_8952[(2)]);
var inst_8946 = cljs.core.async.close_BANG_.call(null,out);
var state_8952__$1 = (function (){var statearr_8970 = state_8952;
(statearr_8970[(13)] = inst_8945);

return statearr_8970;
})();
var statearr_8971_8992 = state_8952__$1;
(statearr_8971_8992[(2)] = inst_8946);

(statearr_8971_8992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8953 === (10))){
var inst_8936 = (state_8952[(2)]);
var state_8952__$1 = state_8952;
var statearr_8972_8993 = state_8952__$1;
(statearr_8972_8993[(2)] = inst_8936);

(statearr_8972_8993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8953 === (8))){
var inst_8916 = (state_8952[(7)]);
var inst_8925 = (state_8952[(11)]);
var tmp8969 = inst_8916;
var inst_8916__$1 = tmp8969;
var inst_8917 = inst_8925;
var state_8952__$1 = (function (){var statearr_8973 = state_8952;
(statearr_8973[(7)] = inst_8916__$1);

(statearr_8973[(8)] = inst_8917);

return statearr_8973;
})();
var statearr_8974_8994 = state_8952__$1;
(statearr_8974_8994[(2)] = null);

(statearr_8974_8994[(1)] = (2));


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
});})(c__5300__auto___8980,out))
;
return ((function (switch__5133__auto__,c__5300__auto___8980,out){
return (function() {
var cljs$core$async$state_machine__5134__auto__ = null;
var cljs$core$async$state_machine__5134__auto____0 = (function (){
var statearr_8975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8975[(0)] = cljs$core$async$state_machine__5134__auto__);

(statearr_8975[(1)] = (1));

return statearr_8975;
});
var cljs$core$async$state_machine__5134__auto____1 = (function (state_8952){
while(true){
var ret_value__5135__auto__ = (function (){try{while(true){
var result__5136__auto__ = switch__5133__auto__.call(null,state_8952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5136__auto__;
}
break;
}
}catch (e8976){if((e8976 instanceof Object)){
var ex__5137__auto__ = e8976;
var statearr_8977_8995 = state_8952;
(statearr_8977_8995[(5)] = ex__5137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8996 = state_8952;
state_8952 = G__8996;
continue;
} else {
return ret_value__5135__auto__;
}
break;
}
});
cljs$core$async$state_machine__5134__auto__ = function(state_8952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5134__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5134__auto____1.call(this,state_8952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5134__auto____0;
cljs$core$async$state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5134__auto____1;
return cljs$core$async$state_machine__5134__auto__;
})()
;})(switch__5133__auto__,c__5300__auto___8980,out))
})();
var state__5302__auto__ = (function (){var statearr_8978 = f__5301__auto__.call(null);
(statearr_8978[(6)] = c__5300__auto___8980);

return statearr_8978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5302__auto__);
});})(c__5300__auto___8980,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__8998 = arguments.length;
switch (G__8998) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__5300__auto___9068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5300__auto___9068,out){
return (function (){
var f__5301__auto__ = (function (){var switch__5133__auto__ = ((function (c__5300__auto___9068,out){
return (function (state_9040){
var state_val_9041 = (state_9040[(1)]);
if((state_val_9041 === (7))){
var inst_9036 = (state_9040[(2)]);
var state_9040__$1 = state_9040;
var statearr_9042_9069 = state_9040__$1;
(statearr_9042_9069[(2)] = inst_9036);

(statearr_9042_9069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9041 === (1))){
var inst_8999 = [];
var inst_9000 = inst_8999;
var inst_9001 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_9040__$1 = (function (){var statearr_9043 = state_9040;
(statearr_9043[(7)] = inst_9000);

(statearr_9043[(8)] = inst_9001);

return statearr_9043;
})();
var statearr_9044_9070 = state_9040__$1;
(statearr_9044_9070[(2)] = null);

(statearr_9044_9070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9041 === (4))){
var inst_9004 = (state_9040[(9)]);
var inst_9004__$1 = (state_9040[(2)]);
var inst_9005 = (inst_9004__$1 == null);
var inst_9006 = cljs.core.not.call(null,inst_9005);
var state_9040__$1 = (function (){var statearr_9045 = state_9040;
(statearr_9045[(9)] = inst_9004__$1);

return statearr_9045;
})();
if(inst_9006){
var statearr_9046_9071 = state_9040__$1;
(statearr_9046_9071[(1)] = (5));

} else {
var statearr_9047_9072 = state_9040__$1;
(statearr_9047_9072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9041 === (15))){
var inst_9030 = (state_9040[(2)]);
var state_9040__$1 = state_9040;
var statearr_9048_9073 = state_9040__$1;
(statearr_9048_9073[(2)] = inst_9030);

(statearr_9048_9073[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9041 === (13))){
var state_9040__$1 = state_9040;
var statearr_9049_9074 = state_9040__$1;
(statearr_9049_9074[(2)] = null);

(statearr_9049_9074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9041 === (6))){
var inst_9000 = (state_9040[(7)]);
var inst_9025 = inst_9000.length;
var inst_9026 = (inst_9025 > (0));
var state_9040__$1 = state_9040;
if(cljs.core.truth_(inst_9026)){
var statearr_9050_9075 = state_9040__$1;
(statearr_9050_9075[(1)] = (12));

} else {
var statearr_9051_9076 = state_9040__$1;
(statearr_9051_9076[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9041 === (3))){
var inst_9038 = (state_9040[(2)]);
var state_9040__$1 = state_9040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9040__$1,inst_9038);
} else {
if((state_val_9041 === (12))){
var inst_9000 = (state_9040[(7)]);
var inst_9028 = cljs.core.vec.call(null,inst_9000);
var state_9040__$1 = state_9040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9040__$1,(15),out,inst_9028);
} else {
if((state_val_9041 === (2))){
var state_9040__$1 = state_9040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9040__$1,(4),ch);
} else {
if((state_val_9041 === (11))){
var inst_9008 = (state_9040[(10)]);
var inst_9004 = (state_9040[(9)]);
var inst_9018 = (state_9040[(2)]);
var inst_9019 = [];
var inst_9020 = inst_9019.push(inst_9004);
var inst_9000 = inst_9019;
var inst_9001 = inst_9008;
var state_9040__$1 = (function (){var statearr_9052 = state_9040;
(statearr_9052[(7)] = inst_9000);

(statearr_9052[(8)] = inst_9001);

(statearr_9052[(11)] = inst_9018);

(statearr_9052[(12)] = inst_9020);

return statearr_9052;
})();
var statearr_9053_9077 = state_9040__$1;
(statearr_9053_9077[(2)] = null);

(statearr_9053_9077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9041 === (9))){
var inst_9000 = (state_9040[(7)]);
var inst_9016 = cljs.core.vec.call(null,inst_9000);
var state_9040__$1 = state_9040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9040__$1,(11),out,inst_9016);
} else {
if((state_val_9041 === (5))){
var inst_9008 = (state_9040[(10)]);
var inst_9001 = (state_9040[(8)]);
var inst_9004 = (state_9040[(9)]);
var inst_9008__$1 = f.call(null,inst_9004);
var inst_9009 = cljs.core._EQ_.call(null,inst_9008__$1,inst_9001);
var inst_9010 = cljs.core.keyword_identical_QMARK_.call(null,inst_9001,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_9011 = ((inst_9009) || (inst_9010));
var state_9040__$1 = (function (){var statearr_9054 = state_9040;
(statearr_9054[(10)] = inst_9008__$1);

return statearr_9054;
})();
if(cljs.core.truth_(inst_9011)){
var statearr_9055_9078 = state_9040__$1;
(statearr_9055_9078[(1)] = (8));

} else {
var statearr_9056_9079 = state_9040__$1;
(statearr_9056_9079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9041 === (14))){
var inst_9033 = (state_9040[(2)]);
var inst_9034 = cljs.core.async.close_BANG_.call(null,out);
var state_9040__$1 = (function (){var statearr_9058 = state_9040;
(statearr_9058[(13)] = inst_9033);

return statearr_9058;
})();
var statearr_9059_9080 = state_9040__$1;
(statearr_9059_9080[(2)] = inst_9034);

(statearr_9059_9080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9041 === (10))){
var inst_9023 = (state_9040[(2)]);
var state_9040__$1 = state_9040;
var statearr_9060_9081 = state_9040__$1;
(statearr_9060_9081[(2)] = inst_9023);

(statearr_9060_9081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9041 === (8))){
var inst_9000 = (state_9040[(7)]);
var inst_9008 = (state_9040[(10)]);
var inst_9004 = (state_9040[(9)]);
var inst_9013 = inst_9000.push(inst_9004);
var tmp9057 = inst_9000;
var inst_9000__$1 = tmp9057;
var inst_9001 = inst_9008;
var state_9040__$1 = (function (){var statearr_9061 = state_9040;
(statearr_9061[(7)] = inst_9000__$1);

(statearr_9061[(8)] = inst_9001);

(statearr_9061[(14)] = inst_9013);

return statearr_9061;
})();
var statearr_9062_9082 = state_9040__$1;
(statearr_9062_9082[(2)] = null);

(statearr_9062_9082[(1)] = (2));


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
});})(c__5300__auto___9068,out))
;
return ((function (switch__5133__auto__,c__5300__auto___9068,out){
return (function() {
var cljs$core$async$state_machine__5134__auto__ = null;
var cljs$core$async$state_machine__5134__auto____0 = (function (){
var statearr_9063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9063[(0)] = cljs$core$async$state_machine__5134__auto__);

(statearr_9063[(1)] = (1));

return statearr_9063;
});
var cljs$core$async$state_machine__5134__auto____1 = (function (state_9040){
while(true){
var ret_value__5135__auto__ = (function (){try{while(true){
var result__5136__auto__ = switch__5133__auto__.call(null,state_9040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5136__auto__;
}
break;
}
}catch (e9064){if((e9064 instanceof Object)){
var ex__5137__auto__ = e9064;
var statearr_9065_9083 = state_9040;
(statearr_9065_9083[(5)] = ex__5137__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9084 = state_9040;
state_9040 = G__9084;
continue;
} else {
return ret_value__5135__auto__;
}
break;
}
});
cljs$core$async$state_machine__5134__auto__ = function(state_9040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5134__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5134__auto____1.call(this,state_9040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5134__auto____0;
cljs$core$async$state_machine__5134__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5134__auto____1;
return cljs$core$async$state_machine__5134__auto__;
})()
;})(switch__5133__auto__,c__5300__auto___9068,out))
})();
var state__5302__auto__ = (function (){var statearr_9066 = f__5301__auto__.call(null);
(statearr_9066[(6)] = c__5300__auto___9068);

return statearr_9066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5302__auto__);
});})(c__5300__auto___9068,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
