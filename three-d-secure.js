!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(t.braintree||(t.braintree={})).threeDSecure=e()}}(function(){var e;return function t(e,r,n){function o(s,a){if(!r[s]){if(!e[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=r[s]={exports:{}};e[s][0].call(l.exports,function(t){var r=e[s][1][t];return o(r?r:t)},l,l.exports,t,e,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(t,r,n){(function(t){"use strict";!function(o,i){"object"==typeof n&&"undefined"!=typeof r?r.exports=i("undefined"==typeof t?o:t):"function"==typeof e&&e.amd?e([],function(){return i(o)}):o.framebus=i(o)}(this,function(e){function t(e){return null==e?!1:null==e.Window?!1:e.constructor!==e.Window?!1:(g.push(e),!0)}function r(e){var t,r={};for(t in I)I.hasOwnProperty(t)&&(r[t]=I[t]);return r._origin=e||"*",r}function n(e){var t,r,n=s(this);return a(e)?!1:a(n)?!1:(r=Array.prototype.slice.call(arguments,1),t=c(e,r,n),t===!1?!1:(y(b.top,t,n),!0))}function o(e,t){var r=s(this);return E(e,t,r)?!1:(v[r]=v[r]||{},v[r][e]=v[r][e]||[],v[r][e].push(t),!0)}function i(e,t){var r,n,o=s(this);if(E(e,t,o))return!1;if(n=v[o]&&v[o][e],!n)return!1;for(r=0;r<n.length;r++)if(n[r]===t)return n.splice(r,1),!0;return!1}function s(e){return e&&e._origin||"*"}function a(e){return"string"!=typeof e}function c(e,t,r){var n=!1,o={event:e,origin:r},i=t[t.length-1];"function"==typeof i&&(o.reply=m(i,r),t=t.slice(0,-1)),o.args=t;try{n=N+JSON.stringify(o)}catch(s){throw new Error("Could not stringify event: "+s.message)}return n}function u(e){var t,r,n,o;if(e.data.slice(0,N.length)!==N)return!1;try{t=JSON.parse(e.data.slice(N.length))}catch(i){return!1}return null!=t.reply&&(r=e.origin,n=e.source,o=t.reply,t.reply=function(e){var t=c(o,[e],r);return t===!1?!1:void n.postMessage(t,r)},t.args.push(t.reply)),t}function l(t){b||(b=t||e,b.addEventListener?b.addEventListener("message",p,!1):b.attachEvent?b.attachEvent("onmessage",p):null===b.onmessage?b.onmessage=p:b=null)}function f(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,r="x"===e?t:3&t|8;return r.toString(16)})}function p(e){var t;a(e.data)||(t=u(e),t&&(d("*",t.event,t.args,e),d(e.origin,t.event,t.args,e),_(e.data,t.origin,e.source)))}function d(e,t,r,n){var o;if(v[e]&&v[e][t])for(o=0;o<v[e][t].length;o++)v[e][t][o].apply(n,r)}function h(e){return e.top!==e?!1:null==e.opener?!1:e.opener===e?!1:e.opener.closed===!0?!1:!0}function y(e,t,r){var n;try{for(e.postMessage(t,r),h(e)&&y(e.opener.top,t,r),n=0;n<e.frames.length;n++)y(e.frames[n],t,r)}catch(o){}}function _(e,t,r){var n,o;for(n=g.length-1;n>=0;n--)o=g[n],o.closed===!0?g=g.slice(n,1):r!==o&&y(o.top,e,t)}function m(e,t){function r(o,i){e(o,i),I.target(t).unsubscribe(n,r)}var n=f();return I.target(t).subscribe(n,r),n}function E(e,t,r){return a(e)?!0:"function"!=typeof t?!0:a(r)?!0:!1}var b,I,g=[],v={},N="/*framebus*/";return l(),I={target:r,include:t,publish:n,pub:n,trigger:n,emit:n,subscribe:o,sub:o,on:o,unsubscribe:i,unsub:i,off:i}})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,r){"use strict";var n=e("./lib/set-attributes"),o=e("./lib/default-attributes"),i=e("./lib/assign");t.exports=function(e){var t=document.createElement("iframe"),r=i({},o,e);return r.style&&"string"!=typeof r.style&&(i(t.style,r.style),delete r.style),n(t,r),t.getAttribute("id")||(t.id=t.name),t}},{"./lib/assign":3,"./lib/default-attributes":4,"./lib/set-attributes":5}],3:[function(e,t,r){"use strict";t.exports=function(e){var t=Array.prototype.slice.call(arguments,1);return t.forEach(function(t){"object"==typeof t&&Object.keys(t).forEach(function(r){e[r]=t[r]})}),e}},{}],4:[function(e,t,r){t.exports={src:"about:blank",frameBorder:0,allowtransparency:!0,scrolling:"no"}},{}],5:[function(e,t,r){"use strict";t.exports=function(e,t){var r;for(var n in t)t.hasOwnProperty(n)&&(r=t[n],null==r?e.removeAttribute(n):e.setAttribute(n,r))}},{}],6:[function(e,t,r){"use strict";var n=e("./lib/error");t.exports={CALLBACK_REQUIRED:{type:n.types.MERCHANT,code:"CALLBACK_REQUIRED"},INSTANTIATION_OPTION_REQUIRED:{type:n.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INCOMPATIBLE_VERSIONS:{type:n.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:n.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"}}},{"./lib/error":18}],7:[function(e,t,r){"use strict";function n(e,t){var r,n=t?i(t):{},a=o(e.authorization).attrs,c=i(e.analyticsMetadata);n.braintreeLibraryVersion=s.BRAINTREE_LIBRARY_VERSION;for(r in n._meta)n._meta.hasOwnProperty(r)&&(c[r]=n._meta[r]);return n._meta=c,a.tokenizationKey?n.tokenizationKey=a.tokenizationKey:n.authorizationFingerprint=a.authorizationFingerprint,n}var o=e("./create-authorization-data"),i=e("./json-clone"),s=e("./constants");t.exports=n},{"./constants":13,"./create-authorization-data":15,"./json-clone":19}],8:[function(e,t,r){"use strict";function n(e){return Math.floor(e/1e3)}function o(e,t,r){var o=e.getConfiguration(),a=e._request,c=n(Date.now()),u=o.gatewayConfiguration.analytics.url,l={analytics:[{kind:t,timestamp:c}]};a({url:u,method:"post",data:s(o,l),timeout:i.ANALYTICS_REQUEST_TIMEOUT_MS},r)}var i=e("./constants"),s=e("./add-metadata");t.exports={sendEvent:o}},{"./add-metadata":7,"./constants":13}],9:[function(e,t,r){(function(e){"use strict";function r(t){return t=t||e.navigator.userAgent,t.indexOf("Opera Mini")>-1}function n(t){return t=t||e.navigator.userAgent,t.indexOf("Android")>-1&&t.indexOf("Firefox")>-1}function o(t){return t=t||e.navigator.userAgent,-1!==t.indexOf("MSIE")?parseInt(t.replace(/.*MSIE ([0-9]+)\..*/,"$1"),10):/Trident.*rv:11/.test(t)?11:null}function i(t){return t=t||e.location.protocol,"https:"===t}t.exports={isOperaMini:r,isAndroidFirefox:n,getIEVersion:o,isHTTPS:i}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],10:[function(e,t,r){"use strict";function n(e,t){var r,n,i=document.createElement("a");return i.href=t,n="https:"===i.protocol?i.host.replace(/:443$/,""):"http:"===i.protocol?i.host.replace(/:80$/,""):i.host,r=i.protocol+"//"+n,r===e||o.test(e)}var o=/^https:\/\/([a-zA-Z0-9-]+\.)*(braintreepayments|braintreegateway|paypal)\.com(:\d{1,5})?$/;t.exports={checkOrigin:n}},{}],11:[function(e,t,r){"use strict";var n=e("../enumerate");t.exports=n(["CONFIGURATION_REQUEST"],"bus:")},{"../enumerate":17}],12:[function(e,t,r){"use strict";function n(e){if(e=e||{},this.channel=e.channel,!this.channel)throw new a({type:a.types.INTERNAL,code:"MISSING_CHANNEL_ID",message:"Channel ID must be specified."});this.merchantUrl=e.merchantUrl,this._isDestroyed=!1,this._isVerbose=!1,this._listeners=[],this._log("new bus on channel "+this.channel,[location.href])}var o=e("framebus"),i=e("./events"),s=e("./check-origin").checkOrigin,a=e("../error");n.prototype.on=function(e,t){var r,n,i=t,a=this;this._isDestroyed||(this.merchantUrl&&(i=function(){s(this.origin,a.merchantUrl)&&t.apply(this,arguments)}),r=this._namespaceEvent(e),n=Array.prototype.slice.call(arguments),n[0]=r,n[1]=i,this._log("on",n),o.on.apply(o,n),this._listeners.push({eventName:e,handler:i,originalHandler:t}))},n.prototype.emit=function(e){var t;this._isDestroyed||(t=Array.prototype.slice.call(arguments),t[0]=this._namespaceEvent(e),this._log("emit",t),o.emit.apply(o,t))},n.prototype._offDirect=function(e){var t=Array.prototype.slice.call(arguments);this._isDestroyed||(t[0]=this._namespaceEvent(e),this._log("off",t),o.off.apply(o,t))},n.prototype.off=function(e,t){var r,n,o=t;if(!this._isDestroyed){if(this.merchantUrl)for(r=0;r<this._listeners.length;r++)n=this._listeners[r],n.originalHandler===t&&(o=n.handler);this._offDirect(e,o)}},n.prototype._namespaceEvent=function(e){return["braintree",this.channel,e].join(":")},n.prototype.teardown=function(){var e,t;for(t=0;t<this._listeners.length;t++)e=this._listeners[t],this._offDirect(e.eventName,e.handler);this._listeners.length=0,this._isDestroyed=!0},n.prototype._log=function(e,t){this._isVerbose&&console.log(e,t)},n.events=i,t.exports=n},{"../error":18,"./check-origin":10,"./events":11,framebus:1}],13:[function(e,t,r){"use strict";var n="3.0.0-beta.12",o="web";t.exports={ANALYTICS_REQUEST_TIMEOUT_MS:2e3,INTEGRATION_TIMEOUT_MS:6e4,VERSION:n,INTEGRATION:"custom",SOURCE:"client",PLATFORM:o,BRAINTREE_LIBRARY_VERSION:"braintree/"+o+"/"+n}},{}],14:[function(e,t,r){"use strict";var n=e("./error"),o=e("../errors");t.exports=function(e,t){t.forEach(function(t){e[t]=function(){throw new n({type:o.METHOD_CALLED_AFTER_TEARDOWN.type,code:o.METHOD_CALLED_AFTER_TEARDOWN.code,message:t+" cannot be called after teardown."})}})}},{"../errors":6,"./error":18}],15:[function(e,t,r){"use strict";function n(e){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)}function o(e){var t=e.split("_"),r=t[0],n=t.slice(2).join("_");return{merchantId:n,environment:r}}function i(e){var t,r,i={attrs:{},configUrl:""};return n(e)?(r=o(e),i.attrs.tokenizationKey=e,i.configUrl=a[r.environment]+"/merchants/"+r.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(s(e)),i.attrs.authorizationFingerprint=t.authorizationFingerprint,i.configUrl=t.configUrl),i}var s=e("../lib/polyfill").atob,a={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"};t.exports=i},{"../lib/polyfill":21}],16:[function(e,t,r){"use strict";t.exports=function(e){return function(){var t=arguments;setTimeout(function(){e.apply(null,t)},1)}}},{}],17:[function(e,t,r){"use strict";function n(e,t){return t=null==t?"":t,e.reduce(function(e,r){return e[r]=t+r,e},{})}t.exports=n},{}],18:[function(e,t,r){"use strict";function n(e){if(!n.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}var o=e("./enumerate");n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n.types=o(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),t.exports=n},{"./enumerate":17}],19:[function(e,t,r){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],20:[function(e,t,r){"use strict";t.exports=function(e){return Object.keys(e).filter(function(t){return"function"==typeof e[t]})}},{}],21:[function(e,t,r){(function(e){"use strict";function r(e){var t,r,n,o,i,s,a,c,u=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f="";if(!u.test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");c=0;do o=l.indexOf(e.charAt(c++)),i=l.indexOf(e.charAt(c++)),s=l.indexOf(e.charAt(c++)),a=l.indexOf(e.charAt(c++)),t=(63&o)<<2|i>>4&3,r=(15&i)<<4|s>>2&15,n=(3&s)<<6|63&a,f+=String.fromCharCode(t)+(r?String.fromCharCode(r):"")+(n?String.fromCharCode(n):"");while(c<e.length);return f}var n="function"==typeof e.atob?e.atob:r;t.exports={atob:n,_atob:r}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],22:[function(e,t,r){"use strict";function n(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,r="x"===e?t:3&t|8;return r.toString(16)})}t.exports=n},{}],23:[function(e,t,r){"use strict";function n(e){this._options=e,this._assetsUrl=e.client.getConfiguration().gatewayConfiguration.assetsUrl,this._client=e.client}var o=e("../../lib/error"),i=e("../../lib/analytics"),s=e("../../lib/methods"),a=e("../../lib/convert-methods-to-error"),c=e("../shared/constants.json"),u=e("../../lib/bus"),l=e("../../lib/uuid"),f=e("../../lib/deferred"),p=e("../shared/errors"),d=e("../shared/events"),h="3.0.0-beta.12",y=e("iframer"),_=e("../../errors"),m=400,E=400;n.prototype.verifyCard=function(e,t){var r,n,i,s,a;if("function"!=typeof t)throw new o({type:_.CALLBACK_REQUIRED.type,code:_.CALLBACK_REQUIRED.code,message:"verifyCard must include a callback function."});return e=e||{},t=f(t),this._verifyCardInProgress===!0?s=p.AUTHENTICATION_IN_PROGRESS:e.nonce?e.amount?"function"!=typeof e.addFrame?a="an addFrame function":"function"!=typeof e.removeFrame&&(a="a removeFrame function"):a="an amount":a="a nonce",a&&(s={type:p.MISSING_VERIFY_CARD_OPTION.type,code:p.MISSING_VERIFY_CARD_OPTION.code,message:"verifyCard options must include "+a+"."}),s?void t(new o(s)):(this._verifyCardInProgress=!0,n=f(e.addFrame),i=f(e.removeFrame),r="payment_methods/"+e.nonce+"/three_d_secure/lookup",void this._client.request({endpoint:r,method:"post",data:{amount:e.amount}},function(e,r){return e?void t(e):(this._lookupPaymentMethod=r.paymentMethod,this._verifyCardCallback=function(){this._verifyCardInProgress=!1,t.apply(null,arguments)}.bind(this),void this._handleLookupResponse({lookupResponse:r,addFrame:n,removeFrame:i}))}.bind(this)))},n.prototype.cancelVerifyCard=function(e){var t;this._verifyCardInProgress=!1,"function"==typeof e&&(this._lookupPaymentMethod||(t=new o(p.NO_VERIFICATION_PAYLOAD)),e(t,this._lookupPaymentMethod))},n.prototype._handleLookupResponse=function(e){var t=e.lookupResponse;t.lookup&&t.lookup.acsUrl&&t.lookup.acsUrl.length>0?e.addFrame(null,this._createIframe({response:t.lookup,removeFrame:e.removeFrame})):this._verifyCardCallback(null,{nonce:t.paymentMethod.nonce,verificationDetails:t.threeDSecureInfo})},n.prototype._createIframe=function(e){var t,r,n=window.location.href,o=e.response;return this._bus=new u({channel:l(),merchantUrl:location.href}),r=this._assetsUrl+"/web/"+h+"/html/three-d-secure-authentication-complete-frame.html?channel="+encodeURIComponent(this._bus.channel)+"&",n.indexOf("#")>-1&&(n=n.split("#")[0]),this._bus.on(u.events.CONFIGURATION_REQUEST,function(e){e({acsUrl:o.acsUrl,pareq:o.pareq,termUrl:o.termUrl+"&three_d_secure_version="+h+"&authentication_complete_base_url="+encodeURIComponent(r),md:o.md,parentUrl:n})}),this._bus.on(d.AUTHENTICATION_COMPLETE,function(t){this._handleAuthResponse(t,e)}.bind(this)),t=this._assetsUrl+"/web/"+h+"/html/three-d-secure-bank-frame.min.html",this._bankIframe=y({src:t,height:m,width:E,name:c.LANDING_FRAME_NAME+"_"+this._bus.channel}),this._bankIframe},n.prototype._handleAuthResponse=function(e,t){var r=JSON.parse(e.auth_response);this._bus.teardown(),t.removeFrame(),f(function(){r.success?this._verifyCardCallback(null,this._formatAuthResponse(r.paymentMethod,r.threeDSecureInfo)):r.threeDSecureInfo&&r.threeDSecureInfo.liabilityShiftPossible?this._verifyCardCallback(null,this._formatAuthResponse(this._lookupPaymentMethod,r.threeDSecureInfo)):this._verifyCardCallback(new o({type:o.types.UNKNOWN,code:"UNKNOWN_AUTH_RESPONSE",message:r.error.message}))}.bind(this))()},n.prototype._formatAuthResponse=function(e,t){return{nonce:e.nonce,details:e.details,description:e.description,liabilityShifted:t.liabilityShifted,liabilityShiftPossible:t.liabilityShiftPossible}},n.prototype.teardown=function(e){var t;a(this,s(n.prototype)),i.sendEvent(this._options.client,"web.threedsecure.teardown-completed"),this._bus&&this._bus.teardown(),this._bankIframe&&(t=this._bankIframe.parentNode,t&&t.removeChild(this._bankIframe)),"function"==typeof e&&(e=f(e))()},t.exports=n},{"../../errors":6,"../../lib/analytics":8,"../../lib/bus":12,"../../lib/convert-methods-to-error":14,"../../lib/deferred":16,"../../lib/error":18,"../../lib/methods":20,"../../lib/uuid":22,"../shared/constants.json":25,"../shared/errors":26,"../shared/events":27,iframer:2}],24:[function(e,t,r){"use strict";function n(e,t){var r,n,p,d;if("function"!=typeof t)throw new s({type:l.CALLBACK_REQUIRED.type,code:l.CALLBACK_REQUIRED.code,message:"create must include a callback function."});if(t=c(t),null==e.client)return void t(new s({type:l.INSTANTIATION_OPTION_REQUIRED.type,code:l.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating 3D Secure."}));if(r=e.client.getConfiguration(),d=r.analyticsMetadata.sdkVersion,r.gatewayConfiguration.threeDSecureEnabled?r.analyticsMetadata.sdkVersion!==f?p={type:l.INCOMPATIBLE_VERSIONS.type,code:l.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+d+") and 3D Secure (version "+f+") components must be from the same SDK version."}:i.isHTTPS()||(p=u.THREEDS_HTTPS_REQUIRED):p=u.THREEDS_NOT_ENABLED,p)return void t(new s(p));a.sendEvent(e.client,"web.threedsecure.initialized");try{n=new o(e)}catch(h){return void t(h)}t(null,n)}var o=e("./external/three-d-secure"),i=e("../lib/browser-detection"),s=e("../lib/error"),a=e("../lib/analytics"),c=e("../lib/deferred"),u=e("./shared/errors"),l=e("../errors"),f="3.0.0-beta.12";t.exports={create:n,VERSION:f}},{"../errors":6,"../lib/analytics":8,"../lib/browser-detection":9,"../lib/deferred":16,"../lib/error":18,"./external/three-d-secure":23,"./shared/errors":26}],25:[function(e,t,r){t.exports={LANDING_FRAME_NAME:"braintreethreedsecurelanding"}},{}],26:[function(e,t,r){"use strict";var n=e("../../lib/error");t.exports={AUTHENTICATION_IN_PROGRESS:{type:n.types.MERCHANT,code:"AUTHENTICATION_IN_PROGRESS",message:"Cannot call verifyCard while existing authentication is in progress."},MISSING_VERIFY_CARD_OPTION:{type:n.types.MERCHANT,code:"MISSING_VERIFY_CARD_OPTION"},NO_VERIFICATION_PAYLOAD:{type:n.types.MERCHANT,code:"NO_VERIFICATION_PAYLOAD",message:"No verification payload available."},THREEDS_NOT_ENABLED:{type:n.types.MERCHANT,code:"THREEDS_NOT_ENABLED",message:"3D Secure is not enabled for this merchant."},THREEDS_HTTPS_REQUIRED:{type:n.types.MERCHANT,code:"THREEDS_HTTPS_REQUIRED",message:"3D Secure requires HTTPS."},TERM_URL_REQUIRES_BRAINTREE_DOMAIN:{type:n.types.INTERNAL,code:"TERM_URL_REQUIRES_BRAINTREE_DOMAIN",message:"Term Url must be on a Braintree domain."}}},{"../../lib/error":18}],27:[function(e,t,r){"use strict";var n=e("../../lib/enumerate");t.exports=n(["AUTHENTICATION_COMPLETE"],"threedsecure:")},{"../../lib/enumerate":17}]},{},[24])(24)});
