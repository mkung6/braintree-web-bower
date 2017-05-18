!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(t.braintree||(t.braintree={})).applePay=e()}}(function(){return function e(t,n,r){function o(a,s){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var p=n[a]={exports:{}};t[a][0].call(p.exports,function(e){var n=t[a][1][e];return o(n?n:e)},p,p.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){!function(e){function n(){}function r(e,t){return function(){e.apply(t,arguments)}}function o(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],p(e,this)}function i(e,t){for(;3===e._state;)e=e._value;return 0===e._state?void e._deferreds.push(t):(e._handled=!0,void o._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?a:s)(t.promise,e._value);var r;try{r=n(e._value)}catch(o){return void s(t.promise,o)}a(t.promise,r)}))}function a(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof o)return e._state=3,e._value=t,void c(e);if("function"==typeof n)return void p(r(n,t),e)}e._state=1,e._value=t,c(e)}catch(i){s(e,i)}}function s(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;n>t;t++)i(e,e._deferreds[t]);e._deferreds=null}function u(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function p(e,t){var n=!1;try{e(function(e){n||(n=!0,a(t,e))},function(e){n||(n=!0,s(t,e))})}catch(r){if(n)return;n=!0,s(t,r)}}var l=setTimeout;o.prototype["catch"]=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var r=new this.constructor(n);return i(this,new u(e,t,r)),r},o.all=function(e){var t=Array.prototype.slice.call(e);return new o(function(e,n){function r(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(e){r(i,e)},n)}t[i]=a,0===--o&&e(t)}catch(c){n(c)}}if(0===t.length)return e([]);for(var o=t.length,i=0;i<t.length;i++)r(i,t[i])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(t){t(e)})},o.reject=function(e){return new o(function(t,n){n(e)})},o.race=function(e){return new o(function(t,n){for(var r=0,o=e.length;o>r;r++)e[r].then(t,n)})},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){l(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},o._setImmediateFn=function(e){o._immediateFn=e},o._setUnhandledRejectionFn=function(e){o._unhandledRejectionFn=e},"undefined"!=typeof t&&t.exports?t.exports=o:e.Promise||(e.Promise=o)}(this)},{}],2:[function(e,t,n){"use strict";function r(e){return function(){var t=arguments;setTimeout(function(){e.apply(null,t)},1)}}t.exports=r},{}],3:[function(e,t,n){"use strict";function r(e){var t=!1;return function(){t||(t=!0,e.apply(null,arguments))}}t.exports=r},{}],4:[function(e,t,n){"use strict";function r(e,t){return t?void e.then(function(e){t(null,e)})["catch"](function(e){t(e)}):e}t.exports=r},{}],5:[function(e,t,n){"use strict";function r(e){return function(){var t,n=Array.prototype.slice.call(arguments),r=n[n.length-1];return"function"==typeof r&&(t=n.pop(),t=i(o(t))),a(e.apply(this,n),t)}}var o=e("./lib/deferred"),i=e("./lib/once"),a=e("./lib/promise-or-callback");r.wrapPrototype=function(e,t){var n,o,i;return t=t||{},o=t.ignoreMethods||[],i=t.transformPrivateMethods===!0,n=Object.getOwnPropertyNames(e.prototype).filter(function(t){var n,r="constructor"!==t&&"function"==typeof e.prototype[t],a=-1===o.indexOf(t);return n=i?!0:"_"!==t.charAt(0),r&&n&&a}),n.forEach(function(t){var n=e.prototype[t];e.prototype[t]=r(n)}),e},t.exports=r},{"./lib/deferred":2,"./lib/once":3,"./lib/promise-or-callback":4}],6:[function(e,t,n){(function(n){"use strict";function r(e){this._client=e.client,Object.defineProperty(this,"merchantIdentifier",{value:this._client.getConfiguration().gatewayConfiguration.applePayWeb.merchantIdentifier,configurable:!1,writable:!1})}var o=e("../lib/braintree-error"),i=e("../lib/analytics"),a=e("./errors"),s=e("../lib/promise"),c=e("wrap-promise");r.prototype.createPaymentRequest=function(e){var t=this._client.getConfiguration().gatewayConfiguration.applePayWeb,n={countryCode:t.countryCode,currencyCode:t.currencyCode,merchantCapabilities:t.merchantCapabilities||["supports3DS"],supportedNetworks:t.supportedNetworks.map(function(e){return"mastercard"===e?"masterCard":e})};return Object.assign({},n,e)},r.prototype.performValidation=function(e){var t,r=this;return e&&e.validationURL?(t={validationUrl:e.validationURL,domainName:e.domainName||n.location.hostname,merchantIdentifier:e.merchantIdentifier||this.merchantIdentifier},null!=e.displayName&&(t.displayName=e.displayName),this._client.request({method:"post",endpoint:"apple_pay_web/sessions",data:{_meta:{source:"apple-pay"},applePayWebSession:t}}).then(function(e){return i.sendEvent(r._client,"applepay.performValidation.succeeded"),s.resolve(e)})["catch"](function(e){return i.sendEvent(r._client,"applepay.performValidation.failed"),"CLIENT_REQUEST_ERROR"===e.code?s.reject(new o({type:a.APPLE_PAY_MERCHANT_VALIDATION_FAILED.type,code:a.APPLE_PAY_MERCHANT_VALIDATION_FAILED.code,message:a.APPLE_PAY_MERCHANT_VALIDATION_FAILED.message,details:{originalError:e.details.originalError}})):s.reject(new o({type:a.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.type,code:a.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.code,message:a.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.message,details:{originalError:e}}))})):s.reject(new o(a.APPLE_PAY_VALIDATION_URL_REQUIRED))},r.prototype.tokenize=function(e){var t=this;return e.token?this._client.request({method:"post",endpoint:"payment_methods/apple_payment_tokens",data:{_meta:{source:"apple-pay"},applePaymentToken:Object.assign({},e.token,{paymentData:btoa(JSON.stringify(e.token.paymentData))})}}).then(function(e){return i.sendEvent(t._client,"applepay.tokenize.succeeded"),s.resolve(e.applePayCards[0])})["catch"](function(e){return i.sendEvent(t._client,"applepay.tokenize.failed"),s.reject(new o({type:a.APPLE_PAY_TOKENIZATION.type,code:a.APPLE_PAY_TOKENIZATION.code,message:a.APPLE_PAY_TOKENIZATION.message,details:{originalError:e}}))}):s.reject(new o(a.APPLE_PAY_PAYMENT_TOKEN_REQUIRED))},t.exports=c.wrapPrototype(r)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../lib/analytics":10,"../lib/braintree-error":11,"../lib/promise":18,"./errors":7,"wrap-promise":5}],7:[function(e,t,n){"use strict";var r=e("../lib/braintree-error");t.exports={APPLE_PAY_NOT_ENABLED:{type:r.types.MERCHANT,code:"APPLE_PAY_NOT_ENABLED",message:"Apple Pay is not enabled for this merchant."},APPLE_PAY_VALIDATION_URL_REQUIRED:{type:r.types.MERCHANT,code:"APPLE_PAY_VALIDATION_URL_REQUIRED",message:"performValidation must be called with a validationURL."},APPLE_PAY_MERCHANT_VALIDATION_NETWORK:{type:r.types.NETWORK,code:"APPLE_PAY_MERCHANT_VALIDATION_NETWORK",message:"A network error occurred when validating the Apple Pay merchant."},APPLE_PAY_MERCHANT_VALIDATION_FAILED:{type:r.types.MERCHANT,code:"APPLE_PAY_MERCHANT_VALIDATION_FAILED",message:"Make sure you have registered your domain name in the Braintree Control Panel."},APPLE_PAY_PAYMENT_TOKEN_REQUIRED:{type:r.types.MERCHANT,code:"APPLE_PAY_PAYMENT_TOKEN_REQUIRED",message:"tokenize must be called with a payment token."},APPLE_PAY_TOKENIZATION:{type:r.types.NETWORK,code:"APPLE_PAY_TOKENIZATION",message:"A network error occurred when processing the Apple Pay payment."}}},{"../lib/braintree-error":11}],8:[function(e,t,n){"use strict";function r(e){var t;return null==e.client?p.reject(new o({type:s.INSTANTIATION_OPTION_REQUIRED.type,code:s.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating Apple Pay."})):(t=e.client.getVersion(),t!==u?p.reject(new o({type:s.INCOMPATIBLE_VERSIONS.type,code:s.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+t+") and Apple Pay (version "+u+") components must be from the same SDK version."})):e.client.getConfiguration().gatewayConfiguration.applePayWeb?(a.sendEvent(e.client,"applepay.initialized"),p.resolve(new i(e))):p.reject(new o(c.APPLE_PAY_NOT_ENABLED)))}var o=e("../lib/braintree-error"),i=e("./apple-pay"),a=e("../lib/analytics"),s=e("../lib/errors"),c=e("./errors"),u="3.16.0",p=e("../lib/promise"),l=e("wrap-promise");t.exports={create:l(r),VERSION:u}},{"../lib/analytics":10,"../lib/braintree-error":11,"../lib/errors":15,"../lib/promise":18,"./apple-pay":6,"./errors":7,"wrap-promise":5}],9:[function(e,t,n){"use strict";function r(e,t){var n,r=t?i(t):{},s=o(e.authorization).attrs,c=i(e.analyticsMetadata);r.braintreeLibraryVersion=a.BRAINTREE_LIBRARY_VERSION;for(n in r._meta)r._meta.hasOwnProperty(n)&&(c[n]=r._meta[n]);return r._meta=c,s.tokenizationKey?r.tokenizationKey=s.tokenizationKey:r.authorizationFingerprint=s.authorizationFingerprint,r}var o=e("./create-authorization-data"),i=e("./json-clone"),a=e("./constants");t.exports=r},{"./constants":12,"./create-authorization-data":13,"./json-clone":16}],10:[function(e,t,n){"use strict";function r(e){return Math.floor(e/1e3)}function o(e,t,n){var o=e.getConfiguration(),s=e._request,c=r(Date.now()),u=o.gatewayConfiguration.analytics.url,p={analytics:[{kind:i.ANALYTICS_PREFIX+t,timestamp:c}]};s({url:u,method:"post",data:a(o,p),timeout:i.ANALYTICS_REQUEST_TIMEOUT_MS},n)}var i=e("./constants"),a=e("./add-metadata");t.exports={sendEvent:o}},{"./add-metadata":9,"./constants":12}],11:[function(e,t,n){"use strict";function r(e){if(!r.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}var o=e("./enumerate");r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.types=o(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),r.findRootError=function(e){return e instanceof r&&e.details&&e.details.originalError?r.findRootError(e.details.originalError):e},t.exports=r},{"./enumerate":14}],12:[function(e,t,n){"use strict";var r="3.16.0",o="web";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,INTEGRATION_TIMEOUT_MS:6e4,VERSION:r,INTEGRATION:"custom",SOURCE:"client",PLATFORM:o,BRAINTREE_LIBRARY_VERSION:"braintree/"+o+"/"+r}},{}],13:[function(e,t,n){"use strict";function r(e){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)}function o(e){var t=e.split("_"),n=t[0],r=t.slice(2).join("_");return{merchantId:r,environment:n}}function i(e){var t,n,i={attrs:{},configUrl:""};return r(e)?(n=o(e),i.attrs.tokenizationKey=e,i.configUrl=s[n.environment]+"/merchants/"+n.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(a(e)),i.attrs.authorizationFingerprint=t.authorizationFingerprint,i.configUrl=t.configUrl),i}var a=e("../lib/polyfill").atob,s={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"};t.exports=i},{"../lib/polyfill":17}],14:[function(e,t,n){"use strict";function r(e,t){return t=null==t?"":t,e.reduce(function(e,n){return e[n]=t+n,e},{})}t.exports=r},{}],15:[function(e,t,n){"use strict";var r=e("./braintree-error");t.exports={CALLBACK_REQUIRED:{type:r.types.MERCHANT,code:"CALLBACK_REQUIRED"},INSTANTIATION_OPTION_REQUIRED:{type:r.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INVALID_OPTION:{type:r.types.MERCHANT,code:"INVALID_OPTION"},INCOMPATIBLE_VERSIONS:{type:r.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:r.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:r.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":11}],16:[function(e,t,n){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],17:[function(e,t,n){(function(e){"use strict";function n(e){var t,n,r,o,i,a,s,c,u=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",l="";if(!u.test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");c=0;do o=p.indexOf(e.charAt(c++)),i=p.indexOf(e.charAt(c++)),a=p.indexOf(e.charAt(c++)),s=p.indexOf(e.charAt(c++)),t=(63&o)<<2|i>>4&3,n=(15&i)<<4|a>>2&15,r=(3&a)<<6|63&s,l+=String.fromCharCode(t)+(n?String.fromCharCode(n):"")+(r?String.fromCharCode(r):"");while(c<e.length);return l}var r="function"==typeof e.atob?e.atob:n;t.exports={atob:function(t){return r.call(e,t)},_atob:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],18:[function(e,t,n){(function(n){"use strict";var r=n.Promise||e("promise-polyfill");t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"promise-polyfill":1}]},{},[8])(8)});