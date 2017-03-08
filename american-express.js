!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(r.braintree||(r.braintree={})).americanExpress=e()}}(function(){return function e(r,t,n){function o(s,a){if(!t[s]){if(!r[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var E=new Error("Cannot find module '"+s+"'");throw E.code="MODULE_NOT_FOUND",E}var u=t[s]={exports:{}};r[s][0].call(u.exports,function(e){var t=r[s][1][e];return o(t?t:e)},u,u.exports,e,r,t,n)}return t[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(e,r,t){"use strict";function n(e){this._client=e.client}var o=e("../lib/braintree-error"),i=e("../lib/deferred"),s=e("./errors"),a=e("../lib/assign").assign,c=e("../lib/throw-if-no-callback");n.prototype.getRewardsBalance=function(e,r){var t,n=e.nonce;return c(r,"getRewardsBalance"),r=i(r),n?(t=a({_meta:{source:"american-express"},paymentMethodNonce:n},e),delete t.nonce,void this._client.request({method:"get",endpoint:"payment_methods/amex_rewards_balance",data:t},function(e,t){e?r(new o({type:s.AMEX_NETWORK_ERROR.type,code:s.AMEX_NETWORK_ERROR.code,message:"A network error occurred when getting the American Express rewards balance.",details:{originalError:e}})):r(null,t)})):void r(new o({type:s.AMEX_NONCE_REQUIRED.type,code:s.AMEX_NONCE_REQUIRED.code,message:"getRewardsBalance must be called with a nonce."}))},n.prototype.getExpressCheckoutProfile=function(e,r){return c(r,"getExpressCheckoutProfile"),r=i(r),e.nonce?void this._client.request({method:"get",endpoint:"payment_methods/amex_express_checkout_cards/"+e.nonce,data:{_meta:{source:"american-express"},paymentMethodNonce:e.nonce}},function(e,t){e?r(new o({type:s.AMEX_NETWORK_ERROR.type,code:s.AMEX_NETWORK_ERROR.code,message:"A network error occurred when getting the American Express Checkout nonce profile.",details:{originalError:e}})):r(null,t)}):void r(new o({type:s.AMEX_NONCE_REQUIRED.type,code:s.AMEX_NONCE_REQUIRED.code,message:"getExpressCheckoutProfile must be called with a nonce."}))},r.exports=n},{"../lib/assign":4,"../lib/braintree-error":5,"../lib/deferred":6,"../lib/throw-if-no-callback":9,"./errors":2}],2:[function(e,r,t){"use strict";var n=e("../lib/braintree-error");r.exports={AMEX_NONCE_REQUIRED:{type:n.types.MERCHANT,code:"AMEX_NONCE_REQUIRED"},AMEX_NETWORK_ERROR:{type:n.types.NETWORK,code:"AMEX_NETWORK_ERROR"}}},{"../lib/braintree-error":5}],3:[function(e,r,t){"use strict";function n(e,r){var t;return E(r,"create"),r=s(r),null==e.client?void r(new o({type:a.INSTANTIATION_OPTION_REQUIRED.type,code:a.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating American Express."})):(t=e.client.getConfiguration().analyticsMetadata.sdkVersion,t!==c?void r(new o({type:a.INCOMPATIBLE_VERSIONS.type,code:a.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+t+") and American Express (version "+c+") components must be from the same SDK version."})):void r(null,new i(e)))}var o=e("../lib/braintree-error"),i=e("./american-express"),s=e("../lib/deferred"),a=e("../lib/errors"),c="3.10.0",E=e("../lib/throw-if-no-callback");r.exports={create:n,VERSION:c}},{"../lib/braintree-error":5,"../lib/deferred":6,"../lib/errors":8,"../lib/throw-if-no-callback":9,"./american-express":1}],4:[function(e,r,t){"use strict";function n(e){var r,t,n;for(r=1;r<arguments.length;r++){t=arguments[r];for(n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}return e}var o="function"==typeof Object.assign?Object.assign:n;r.exports={assign:o,_assign:n}},{}],5:[function(e,r,t){"use strict";function n(e){if(!n.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}var o=e("./enumerate");n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n.types=o(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),r.exports=n},{"./enumerate":7}],6:[function(e,r,t){"use strict";r.exports=function(e){return function(){var r=arguments;setTimeout(function(){e.apply(null,r)},1)}}},{}],7:[function(e,r,t){"use strict";function n(e,r){return r=null==r?"":r,e.reduce(function(e,t){return e[t]=r+t,e},{})}r.exports=n},{}],8:[function(e,r,t){"use strict";var n=e("./braintree-error");r.exports={CALLBACK_REQUIRED:{type:n.types.MERCHANT,code:"CALLBACK_REQUIRED"},INSTANTIATION_OPTION_REQUIRED:{type:n.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INVALID_OPTION:{type:n.types.MERCHANT,code:"INVALID_OPTION"},INCOMPATIBLE_VERSIONS:{type:n.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:n.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:n.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":5}],9:[function(e,r,t){"use strict";var n=e("./braintree-error"),o=e("./errors");r.exports=function(e,r){if("function"!=typeof e)throw new n({type:o.CALLBACK_REQUIRED.type,code:o.CALLBACK_REQUIRED.code,message:r+" must include a callback function."})}},{"./braintree-error":5,"./errors":8}]},{},[3])(3)});