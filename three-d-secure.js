!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;((t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).braintree||(t.braintree={})).threeDSecure=e()}}(function(){return function i(s,a,c){function u(t,e){if(!a[t]){if(!s[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(l)return l(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var o=a[t]={exports:{}};s[t][0].call(o.exports,function(e){return u(s[t][1][e]||e)},o,o.exports,i,s,a,c)}return a[t].exports}for(var l="function"==typeof require&&require,e=0;e<c.length;e++)u(c[e]);return u}({1:[function(e,t,r){"use strict";var n=e("./lib/set-attributes"),o=e("./lib/default-attributes"),i=e("./lib/assign");t.exports=function(e){var t=document.createElement("iframe"),r=i({},o,e);return r.style&&"string"!=typeof r.style&&(i(t.style,r.style),delete r.style),n(t,r),t.getAttribute("id")||(t.id=t.name),t}},{"./lib/assign":2,"./lib/default-attributes":3,"./lib/set-attributes":4}],2:[function(e,t,r){"use strict";t.exports=function(r){return Array.prototype.slice.call(arguments,1).forEach(function(t){"object"==typeof t&&Object.keys(t).forEach(function(e){r[e]=t[e]})}),r}},{}],3:[function(e,t,r){"use strict";t.exports={src:"about:blank",frameBorder:0,allowtransparency:!0,scrolling:"no"}},{}],4:[function(e,t,r){"use strict";t.exports=function(e,t){var r;for(var n in t)t.hasOwnProperty(n)&&(null==(r=t[n])?e.removeAttribute(n):e.setAttribute(n,r))}},{}],5:[function(e,t,r){"use strict";t.exports=function(t){return function(){var e=arguments;setTimeout(function(){t.apply(null,e)},1)}}},{}],6:[function(e,t,r){"use strict";t.exports=function(e){var t=!1;return function(){t||(t=!0,e.apply(null,arguments))}}},{}],7:[function(e,t,r){"use strict";t.exports=function(e,t){if(!t)return e;e.then(function(e){t(null,e)}).catch(function(e){t(e)})}},{}],8:[function(e,t,r){"use strict";var n=e("./lib/deferred"),o=e("./lib/once"),i=e("./lib/promise-or-callback");function a(r){return function(){var e,t=Array.prototype.slice.call(arguments);return"function"==typeof t[t.length-1]&&(e=t.pop(),e=o(n(e))),i(r.apply(this,t),e)}}a.wrapPrototype=function(o,e){var i,s;return i=(e=e||{}).ignoreMethods||[],s=!0===e.transformPrivateMethods,Object.getOwnPropertyNames(o.prototype).filter(function(e){var t,r="constructor"!==e&&"function"==typeof o.prototype[e],n=-1===i.indexOf(e);return t=!!s||"_"!==e.charAt(0),r&&t&&n}).forEach(function(e){var t=o.prototype[e];o.prototype[e]=a(t)}),o},t.exports=a},{"./lib/deferred":5,"./lib/once":6,"./lib/promise-or-callback":7}],9:[function(e,g,t){(function(t){"use strict";var n,s,i=[],a={},c="/*framebus*/";function e(e){var t,r=u(this);return!l(e)&&(!l(r)&&(!1!==(t=f(e,Array.prototype.slice.call(arguments,1),r))&&(m(n.top||n.self,t,r),!0)))}function r(e,t){var r=u(this);return!b(e,t,r)&&(a[r]=a[r]||{},a[r][e]=a[r][e]||[],a[r][e].push(t),!0)}function o(e,t){var r,n,o=u(this);if(b(e,t,o))return!1;if(!(n=a[o]&&a[o][e]))return!1;for(r=0;r<n.length;r++)if(n[r]===t)return n.splice(r,1),!0;return!1}function u(e){return e&&e._origin||"*"}function l(e){return"string"!=typeof e}function f(e,t,r){var n=!1,o={event:e,origin:r},i=t[t.length-1];"function"==typeof i&&(o.reply=E(i,r),t=t.slice(0,-1)),o.args=t;try{n=c+JSON.stringify(o)}catch(e){throw new Error("Could not stringify event: "+e.message)}return n}function p(e){var t,r,n,o;if(e.data.slice(0,c.length)!==c)return!1;try{t=JSON.parse(e.data.slice(c.length))}catch(e){return!1}return null!=t.reply&&(r=e.origin,n=e.source,o=t.reply,t.reply=function(e){var t=f(o,[e],r);if(!1===t)return!1;n.postMessage(t,r)},t.args.push(t.reply)),t}function d(e){n||((n=e||t).addEventListener?n.addEventListener("message",_,!1):n.attachEvent?n.attachEvent("onmessage",_):null===n.onmessage?n.onmessage=_:n=null)}function h(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}function _(e){var t;l(e.data)||(t=p(e))&&(y("*",t.event,t.args,e),y(e.origin,t.event,t.args,e),function(e,t,r){var n,o;for(n=i.length-1;0<=n;n--)!0===(o=i[n]).closed?i=i.slice(n,1):r!==o&&m(o.top,e,t)}(e.data,t.origin,e.source))}function y(e,t,r,n){var o;if(a[e]&&a[e][t])for(o=0;o<a[e][t].length;o++)a[e][t][o].apply(n,r)}function m(e,t,r){var n,o,i=0;try{for(e.postMessage(t,r),(o=e).top===o&&null!=o.opener&&o.opener!==o&&!0!==o.opener.closed&&m(e.opener.top,t,r);n=e.frames[i];)m(n,t,r),i++}catch(e){}}function E(n,o){var i=h();return s.target(o).subscribe(i,function e(t,r){n(t,r),s.target(o).unsubscribe(i,e)}),i}function b(e,t,r){return!!l(e)||("function"!=typeof t||!!l(r))}d(),s={target:function(e){var t,r={};for(t in s)s.hasOwnProperty(t)&&(r[t]=s[t]);return r._origin=e||"*",r},_packagePayload:f,_unpackPayload:p,_attach:d,_detach:function(){null!=n&&(n.removeEventListener?n.removeEventListener("message",_,!1):n.detachEvent?n.detachEvent("onmessage",_):n.onmessage===_&&(n.onmessage=null),n=null,i=[],a={})},_dispatch:y,_broadcast:m,_subscribeReplier:E,_subscriptionArgsInvalid:b,_onmessage:_,_uuid:h,_getSubscribers:function(){return a},_win:function(){return n},include:function(e){return null!=e&&null!=e.Window&&e.constructor===e.Window&&(i.push(e),!0)},publish:e,pub:e,trigger:e,emit:e,subscribe:r,sub:r,on:r,unsubscribe:o,unsub:o,off:o},g.exports=s}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],10:[function(e,t,r){"use strict";var n=setTimeout;function o(){}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(e,this)}function s(r,n){for(;3===r._state;)r=r._value;0!==r._state?(r._handled=!0,i._immediateFn(function(){var e=1===r._state?n.onFulfilled:n.onRejected;if(null!==e){var t;try{t=e(r._value)}catch(e){return void c(n.promise,e)}a(n.promise,t)}else(1===r._state?a:c)(n.promise,r._value)})):r._deferreds.push(n)}function a(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var r=e.then;if(e instanceof i)return t._state=3,t._value=e,void u(t);if("function"==typeof r)return void f((n=r,o=e,function(){n.apply(o,arguments)}),t)}t._state=1,t._value=e,u(t)}catch(e){c(t,e)}var n,o}function c(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,r=e._deferreds.length;t<r;t++)s(e,e._deferreds[t]);e._deferreds=null}function l(e,t,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=r}function f(e,t){var r=!1;try{e(function(e){r||(r=!0,a(t,e))},function(e){r||(r=!0,c(t,e))})}catch(e){if(r)return;r=!0,c(t,e)}}i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var r=new this.constructor(o);return s(this,new l(e,t,r)),r},i.prototype.finally=function(t){var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){return r.reject(e)})})},i.all=function(t){return new i(function(n,o){if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var i=Array.prototype.slice.call(t);if(0===i.length)return n([]);var s=i.length;function a(t,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var r=e.then;if("function"==typeof r)return void r.call(e,function(e){a(t,e)},o)}i[t]=e,0==--s&&n(i)}catch(e){o(e)}}for(var e=0;e<i.length;e++)a(e,i[e])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(r){return new i(function(e,t){t(r)})},i.race=function(o){return new i(function(e,t){for(var r=0,n=o.length;r<n;r++)o[r].then(e,t)})},i._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){n(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.exports=i},{}],11:[function(e,t,r){"use strict";var s=e("./create-authorization-data"),a=e("./json-clone"),c=e("./constants");t.exports=function(e,t){var r,n=t?a(t):{},o=s(e.authorization).attrs,i=a(e.analyticsMetadata);for(r in n.braintreeLibraryVersion=c.BRAINTREE_LIBRARY_VERSION,n._meta)n._meta.hasOwnProperty(r)&&(i[r]=n._meta[r]);return n._meta=i,o.tokenizationKey?n.tokenizationKey=o.tokenizationKey:n.authorizationFingerprint=o.authorizationFingerprint,n}},{"./constants":19,"./create-authorization-data":21,"./json-clone":27}],12:[function(e,t,r){"use strict";var u=e("./constants"),l=e("./add-metadata");t.exports={sendEvent:function(e,t,r){var n,o=e.getConfiguration(),i=e._request,s=(n=Date.now(),Math.floor(n/1e3)),a=o.gatewayConfiguration.analytics.url,c={analytics:[{kind:u.ANALYTICS_PREFIX+t,timestamp:s}]};i({url:a,method:"post",data:l(o,c),timeout:u.ANALYTICS_REQUEST_TIMEOUT_MS},r)}}},{"./add-metadata":11,"./constants":19}],13:[function(e,t,r){"use strict";var n="function"==typeof Object.assign?Object.assign:o;function o(e){var t,r,n;for(t=1;t<arguments.length;t++)for(n in r=arguments[t])r.hasOwnProperty(n)&&(e[n]=r[n]);return e}t.exports={assign:n,_assign:o}},{}],14:[function(e,t,r){"use strict";var o=e("./braintree-error"),i=e("./promise"),s=e("./errors");t.exports={verify:function(e){var t,r,n;return e?(n=e.name,null==(t=e.client)?i.reject(new o({type:s.INSTANTIATION_OPTION_REQUIRED.type,code:s.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating "+n+"."})):"3.37.0"!==(r=t.getVersion())?i.reject(new o({type:s.INCOMPATIBLE_VERSIONS.type,code:s.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+r+") and "+n+" (version 3.37.0) components must be from the same SDK version."})):i.resolve()):i.reject(new o({type:s.INVALID_USE_OF_INTERNAL_FUNCTION.type,code:s.INVALID_USE_OF_INTERNAL_FUNCTION.code,message:"Options must be passed to basicComponentVerification function."}))}}},{"./braintree-error":15,"./errors":24,"./promise":29}],15:[function(e,t,r){"use strict";var n=e("./enumerate");function o(e){if(!o.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}((o.prototype=Object.create(Error.prototype)).constructor=o).types=n(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),o.findRootError=function(e){return e instanceof o&&e.details&&e.details.originalError?o.findRootError(e.details.originalError):e},t.exports=o},{"./enumerate":23}],16:[function(e,t,r){"use strict";var o=e("../is-verified-domain");t.exports={checkOrigin:function(e,t){var r,n=document.createElement("a");return n.href=t,r="https:"===n.protocol?n.host.replace(/:443$/,""):"http:"===n.protocol?n.host.replace(/:80$/,""):n.host,n.protocol+"//"+r===e||(n.href=e,o(e))}}},{"../is-verified-domain":26}],17:[function(e,t,r){"use strict";var n=e("../enumerate");t.exports=n(["CONFIGURATION_REQUEST"],"bus:")},{"../enumerate":23}],18:[function(e,t,r){"use strict";var s=e("framebus"),n=e("./events"),a=e("./check-origin").checkOrigin,o=e("../braintree-error");function i(e){if(e=e||{},this.channel=e.channel,!this.channel)throw new o({type:o.types.INTERNAL,code:"MISSING_CHANNEL_ID",message:"Channel ID must be specified."});this.merchantUrl=e.merchantUrl,this._isDestroyed=!1,this._isVerbose=!1,this._listeners=[],this._log("new bus on channel "+this.channel,[location.href])}i.prototype.on=function(e,t){var r,n,o=t,i=this;this._isDestroyed||(this.merchantUrl&&(o=function(){a(this.origin,i.merchantUrl)&&t.apply(this,arguments)}),r=this._namespaceEvent(e),(n=Array.prototype.slice.call(arguments))[0]=r,n[1]=o,this._log("on",n),s.on.apply(s,n),this._listeners.push({eventName:e,handler:o,originalHandler:t}))},i.prototype.emit=function(e){var t;this._isDestroyed||((t=Array.prototype.slice.call(arguments))[0]=this._namespaceEvent(e),this._log("emit",t),s.emit.apply(s,t))},i.prototype._offDirect=function(e){var t=Array.prototype.slice.call(arguments);this._isDestroyed||(t[0]=this._namespaceEvent(e),this._log("off",t),s.off.apply(s,t))},i.prototype.off=function(e,t){var r,n,o=t;if(!this._isDestroyed){if(this.merchantUrl)for(r=0;r<this._listeners.length;r++)(n=this._listeners[r]).originalHandler===t&&(o=n.handler);this._offDirect(e,o)}},i.prototype._namespaceEvent=function(e){return["braintree",this.channel,e].join(":")},i.prototype.teardown=function(){var e,t;for(t=0;t<this._listeners.length;t++)e=this._listeners[t],this._offDirect(e.eventName,e.handler);this._listeners.length=0,this._isDestroyed=!0},i.prototype._log=function(e,t){this._isVerbose&&console.log(e,t)},i.events=n,t.exports=i},{"../braintree-error":15,"./check-origin":16,"./events":17,framebus:9}],19:[function(e,t,r){"use strict";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,CLIENT_API_URLS:{production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"},GRAPHQL_URLS:{production:"https://payments.braintree-api.com/graphql",sandbox:"https://payments.sandbox.braintree-api.com/graphql"},INTEGRATION_TIMEOUT_MS:6e4,VERSION:"3.37.0",INTEGRATION:"custom",SOURCE:"client",PLATFORM:"web",BRAINTREE_LIBRARY_VERSION:"braintree/web/3.37.0"}},{}],20:[function(e,t,r){"use strict";var n=e("./braintree-error"),o=e("./errors");t.exports=function(t,e){e.forEach(function(e){t[e]=function(){throw new n({type:o.METHOD_CALLED_AFTER_TEARDOWN.type,code:o.METHOD_CALLED_AFTER_TEARDOWN.code,message:e+" cannot be called after teardown."})}})}},{"./braintree-error":15,"./errors":24}],21:[function(e,t,r){"use strict";var s=e("../lib/vendor/polyfill").atob,a=e("../lib/constants").CLIENT_API_URLS;t.exports=function(e){var t,r,n,o,i={attrs:{},configUrl:""};return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)?(n=e.split("_"),o=n[0],r={merchantId:n.slice(2).join("_"),environment:o},i.attrs.tokenizationKey=e,i.configUrl=a[r.environment]+"/merchants/"+r.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(s(e)),i.attrs.authorizationFingerprint=t.authorizationFingerprint,i.configUrl=t.configUrl,i.graphQL=t.graphQL),i}},{"../lib/constants":19,"../lib/vendor/polyfill":31}],22:[function(e,t,r){"use strict";t.exports=function(t){return function(){var e=arguments;setTimeout(function(){t.apply(null,e)},1)}}},{}],23:[function(e,t,r){"use strict";t.exports=function(e,r){return r=null==r?"":r,e.reduce(function(e,t){return e[t]=r+t,e},{})}},{}],24:[function(e,t,r){"use strict";var n=e("./braintree-error");t.exports={INVALID_USE_OF_INTERNAL_FUNCTION:{type:n.types.INTERNAL,code:"INVALID_USE_OF_INTERNAL_FUNCTION"},INSTANTIATION_OPTION_REQUIRED:{type:n.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INCOMPATIBLE_VERSIONS:{type:n.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:n.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:n.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":15}],25:[function(e,r,t){(function(t){"use strict";r.exports={isHTTPS:function(e){return"https:"===(e=e||t.location.protocol)}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],26:[function(e,t,r){"use strict";var n,o={"paypal.com":1,"braintreepayments.com":1,"braintreegateway.com":1,"braintree-api.com":1};t.exports=function(e){var t;return e=e.toLowerCase(),!!/^https:/.test(e)&&((n=n||document.createElement("a")).href=e,t=n.hostname.split(".").slice(-2).join("."),o.hasOwnProperty(t))}},{}],27:[function(e,t,r){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],28:[function(e,t,r){"use strict";t.exports=function(t){return Object.keys(t).filter(function(e){return"function"==typeof t[e]})}},{}],29:[function(r,n,e){(function(e){"use strict";var t=e.Promise||r("promise-polyfill");n.exports=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"promise-polyfill":10}],30:[function(e,t,r){"use strict";t.exports=function(e){return e?"":".min"}},{}],31:[function(e,n,t){(function(t){"use strict";var r="function"==typeof t.atob?t.atob:e;function e(e){var t,r,n,o,i,s,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c="";if(!new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$").test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");for(s=0;t=(63&a.indexOf(e.charAt(s++)))<<2|(o=a.indexOf(e.charAt(s++)))>>4&3,r=(15&o)<<4|(i=a.indexOf(e.charAt(s++)))>>2&15,n=(3&i)<<6|63&a.indexOf(e.charAt(s++)),c+=String.fromCharCode(t)+(r?String.fromCharCode(r):"")+(n?String.fromCharCode(n):""),s<e.length;);return c}n.exports={atob:function(e){return r.call(t,e)},_atob:e}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],32:[function(e,t,r){"use strict";t.exports=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}},{}],33:[function(e,t,r){"use strict";var c=e("../../lib/braintree-error"),n=e("../../lib/analytics"),u=e("../../lib/assign").assign,o=e("../../lib/methods"),i=e("../../lib/convert-methods-to-error"),s=e("../shared/constants"),a=e("../../lib/use-min"),l=e("../../lib/bus"),f=e("../../lib/vendor/uuid"),p=e("../../lib/deferred"),d=e("../shared/errors"),h=e("../shared/events"),_="3.37.0",y=e("@braintree/iframer"),m=e("../../lib/promise"),E=e("@braintree/wrap-promise");function b(e){this._options=e,this._assetsUrl=e.client.getConfiguration().gatewayConfiguration.assetsUrl,this._isDebug=e.client.getConfiguration().isDebug,this._client=e.client}b.prototype.verifyCard=function(e){var t,o,i,s,r,n,a=this;return(e=u({},e)).customer&&e.customer.billingAddress&&(e.customer.billingAddress.line1=e.customer.billingAddress.streetAddress,e.customer.billingAddress.line2=e.customer.billingAddress.extendedAddress,e.customer.billingAddress.city=e.customer.billingAddress.locality,e.customer.billingAddress.state=e.customer.billingAddress.region,e.customer.billingAddress.countryCode=e.customer.billingAddress.countryCodeAlpha2,delete e.customer.billingAddress.streetAddress,delete e.customer.billingAddress.extendedAddress,delete e.customer.billingAddress.locality,delete e.customer.billingAddress.region,delete e.customer.billingAddress.countryCodeAlpha2),!0===this._verifyCardInProgress?r=d.THREEDS_AUTHENTICATION_IN_PROGRESS:e.nonce?e.amount?"function"!=typeof e.addFrame?n="an addFrame function":"function"!=typeof e.removeFrame&&(n="a removeFrame function"):n="an amount":n="a nonce",n&&(r={type:d.THREEDS_MISSING_VERIFY_CARD_OPTION.type,code:d.THREEDS_MISSING_VERIFY_CARD_OPTION.code,message:"verifyCard options must include "+n+"."}),r?m.reject(new c(r)):(o=!1!==e.showLoader,this._verifyCardInProgress=!0,i=p(e.addFrame),s=p(e.removeFrame),t="payment_methods/"+e.nonce+"/three_d_secure/lookup",this._client.request({endpoint:t,method:"post",data:{amount:e.amount,customer:e.customer}}).then(function(e){return a._lookupPaymentMethod=e.paymentMethod,new m(function(r,n){a._verifyCardCallback=function(e,t){a._verifyCardInProgress=!1,e?n(e):r(t)},a._handleLookupResponse({showLoader:o,lookupResponse:e,addFrame:i,removeFrame:s})})}).catch(function(e){return a._verifyCardInProgress=!1,m.reject(e)}))},b.prototype.cancelVerifyCard=function(){var e;return this._verifyCardInProgress=!1,this._lookupPaymentMethod?(e=u({},this._lookupPaymentMethod,{liabilityShiftPossible:this._lookupPaymentMethod.threeDSecureInfo.liabilityShiftPossible,liabilityShifted:this._lookupPaymentMethod.threeDSecureInfo.liabilityShifted,verificationDetails:this._lookupPaymentMethod.threeDSecureInfo.verificationDetails}),m.resolve(e)):m.reject(new c(d.THREEDS_NO_VERIFICATION_PAYLOAD))},b.prototype._handleLookupResponse=function(e){var t,r=e.lookupResponse;r.lookup&&r.lookup.acsUrl&&0<r.lookup.acsUrl.length?e.addFrame(null,this._createIframe({showLoader:e.showLoader,response:r.lookup,removeFrame:e.removeFrame})):((t=this._formatAuthResponse(r.paymentMethod,r.threeDSecureInfo)).verificationDetails=r.threeDSecureInfo,this._verifyCardCallback(null,t))},b.prototype._createIframe=function(t){var e,r,n=window.location.href,o=t.response;return this._bus=new l({channel:f(),merchantUrl:location.href}),r=this._assetsUrl+"/web/"+_+"/html/three-d-secure-authentication-complete-frame.html?channel="+encodeURIComponent(this._bus.channel)+"&",-1<n.indexOf("#")&&(n=n.split("#")[0]),this._bus.on(l.events.CONFIGURATION_REQUEST,function(e){e({acsUrl:o.acsUrl,pareq:o.pareq,termUrl:o.termUrl+"&three_d_secure_version="+_+"&authentication_complete_base_url="+encodeURIComponent(r),md:o.md,parentUrl:n})}),this._bus.on(h.AUTHENTICATION_COMPLETE,function(e){this._handleAuthResponse(e,t)}.bind(this)),e=this._assetsUrl+"/web/"+_+"/html/three-d-secure-bank-frame"+a(this._isDebug)+".html?showLoader="+t.showLoader,this._bankIframe=y({src:e,height:400,width:400,name:s.LANDING_FRAME_NAME+"_"+this._bus.channel,title:"3D Secure Authorization Frame"}),this._bankIframe},b.prototype._handleAuthResponse=function(e,t){var r=JSON.parse(e.auth_response);this._bus.teardown(),t.removeFrame(),p(function(){r.success?this._verifyCardCallback(null,this._formatAuthResponse(r.paymentMethod,r.threeDSecureInfo)):r.threeDSecureInfo&&r.threeDSecureInfo.liabilityShiftPossible?this._verifyCardCallback(null,this._formatAuthResponse(this._lookupPaymentMethod,r.threeDSecureInfo)):this._verifyCardCallback(new c({type:c.types.UNKNOWN,code:"UNKNOWN_AUTH_RESPONSE",message:r.error.message}))}.bind(this))()},b.prototype._formatAuthResponse=function(e,t){return{nonce:e.nonce,binData:e.binData,details:e.details,description:e.description&&e.description.replace(/\+/g," "),liabilityShifted:t.liabilityShifted,liabilityShiftPossible:t.liabilityShiftPossible}},b.prototype.teardown=function(){var e;return i(this,o(b.prototype)),n.sendEvent(this._options.client,"threedsecure.teardown-completed"),this._bus&&this._bus.teardown(),this._bankIframe&&(e=this._bankIframe.parentNode)&&e.removeChild(this._bankIframe),m.resolve()},t.exports=E.wrapPrototype(b)},{"../../lib/analytics":12,"../../lib/assign":13,"../../lib/braintree-error":15,"../../lib/bus":18,"../../lib/convert-methods-to-error":20,"../../lib/deferred":22,"../../lib/methods":28,"../../lib/promise":29,"../../lib/use-min":30,"../../lib/vendor/uuid":32,"../shared/constants":35,"../shared/errors":36,"../shared/events":37,"@braintree/iframer":1,"@braintree/wrap-promise":8}],34:[function(e,t,r){"use strict";var n=e("./external/three-d-secure"),o=e("../lib/is-https").isHTTPS,i=e("../lib/basic-component-verification"),s=e("../lib/braintree-error"),a=e("../lib/analytics"),c=e("./shared/errors"),u=e("../lib/promise"),l=e("@braintree/wrap-promise");t.exports={create:l(function(r){return i.verify({name:"3D Secure",client:r.client}).then(function(){var e,t=r.client.getConfiguration();return t.gatewayConfiguration.threeDSecureEnabled||(e=c.THREEDS_NOT_ENABLED),"TOKENIZATION_KEY"===t.authorizationType&&(e=c.THREEDS_CAN_NOT_USE_TOKENIZATION_KEY),"production"===t.gatewayConfiguration.environment&&!o()&&(e=c.THREEDS_HTTPS_REQUIRED),e?u.reject(new s(e)):(a.sendEvent(r.client,"threedsecure.initialized"),new n(r))})}),VERSION:"3.37.0"}},{"../lib/analytics":12,"../lib/basic-component-verification":14,"../lib/braintree-error":15,"../lib/is-https":25,"../lib/promise":29,"./external/three-d-secure":33,"./shared/errors":36,"@braintree/wrap-promise":8}],35:[function(e,t,r){"use strict";t.exports={LANDING_FRAME_NAME:"braintreethreedsecurelanding"}},{}],36:[function(e,t,r){"use strict";var n=e("../../lib/braintree-error");t.exports={THREEDS_NOT_ENABLED:{type:n.types.MERCHANT,code:"THREEDS_NOT_ENABLED",message:"3D Secure is not enabled for this merchant."},THREEDS_CAN_NOT_USE_TOKENIZATION_KEY:{type:n.types.MERCHANT,code:"THREEDS_CAN_NOT_USE_TOKENIZATION_KEY",message:"3D Secure can not use a tokenization key for authorization."},THREEDS_HTTPS_REQUIRED:{type:n.types.MERCHANT,code:"THREEDS_HTTPS_REQUIRED",message:"3D Secure requires HTTPS."},THREEDS_AUTHENTICATION_IN_PROGRESS:{type:n.types.MERCHANT,code:"THREEDS_AUTHENTICATION_IN_PROGRESS",message:"Cannot call verifyCard while existing authentication is in progress."},THREEDS_MISSING_VERIFY_CARD_OPTION:{type:n.types.MERCHANT,code:"THREEDS_MISSING_VERIFY_CARD_OPTION"},THREEDS_NO_VERIFICATION_PAYLOAD:{type:n.types.MERCHANT,code:"THREEDS_NO_VERIFICATION_PAYLOAD",message:"No verification payload available."},THREEDS_TERM_URL_REQUIRES_BRAINTREE_DOMAIN:{type:n.types.INTERNAL,code:"THREEDS_TERM_URL_REQUIRES_BRAINTREE_DOMAIN",message:"Term Url must be on a Braintree domain."}}},{"../../lib/braintree-error":15}],37:[function(e,t,r){"use strict";var n=e("../../lib/enumerate");t.exports=n(["AUTHENTICATION_COMPLETE"],"threedsecure:")},{"../../lib/enumerate":23}]},{},[34])(34)});