System.register([],function(){"use strict";return{execute:function(){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,n,r,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t,n){return(l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&c(i,n.prototype),i}).apply(null,arguments)}function h(e){var t="function"==typeof Map?new Map:void 0;return(h=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return l(e,arguments,u(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,e)})(e)}function p(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e,t,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function v(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var y=new WeakMap,m=function(e){return"function"==typeof e&&y.has(e)},g=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,b=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t!==n;){var r=t.nextSibling;e.removeChild(t),t=r}},_={},w={},S="{{lit-".concat(String(Math.random()).slice(2),"}}"),k="\x3c!--".concat(S,"--\x3e"),x=new RegExp("".concat(S,"|").concat(k)),N=function e(t,r){n(this,e),this.parts=[],this.element=r;for(var i=[],o=[],a=document.createTreeWalker(r.content,133,null,!1),s=0,u=-1,c=0,l=t.strings,h=t.values.length;c<h;){var p=a.nextNode();if(null!==p){if(u++,1===p.nodeType){if(p.hasAttributes()){for(var d=p.attributes,f=d.length,v=0,y=0;y<f;y++)P(d[y].name,"$lit$")&&v++;for(;v-- >0;){var m=l[c],g=A.exec(m)[2],b=g.toLowerCase()+"$lit$",_=p.getAttribute(b);p.removeAttribute(b);var w=_.split(x);this.parts.push({type:"attribute",index:u,name:g,strings:w}),c+=w.length-1}}"TEMPLATE"===p.tagName&&(o.push(p),a.currentNode=p.content)}else if(3===p.nodeType){var k=p.data;if(k.indexOf(S)>=0){for(var N=p.parentNode,E=k.split(x),O=E.length-1,T=0;T<O;T++){var R=void 0,j=E[T];if(""===j)R=C();else{var V=A.exec(j);null!==V&&P(V[2],"$lit$")&&(j=j.slice(0,V.index)+V[1]+V[2].slice(0,-"$lit$".length)+V[3]),R=document.createTextNode(j)}N.insertBefore(R,p),this.parts.push({type:"node",index:++u})}""===E[O]?(N.insertBefore(C(),p),i.push(p)):p.data=E[O],c+=O}}else if(8===p.nodeType)if(p.data===S){var M=p.parentNode;null!==p.previousSibling&&u!==s||(u++,M.insertBefore(C(),p)),s=u,this.parts.push({type:"node",index:u}),null===p.nextSibling?p.data="":(i.push(p),u--),c++}else for(var U=-1;-1!==(U=p.data.indexOf(S,U+1));)this.parts.push({type:"node",index:-1}),c++}else a.currentNode=o.pop()}for(var I=0,z=i;I<z.length;I++){var F=z[I];F.parentNode.removeChild(F)}},P=function(e,t){var n=e.length-t.length;return n>=0&&e.slice(n)===t},E=function(e){return-1!==e.index},C=function(){return document.createComment("")},A=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,O=function(){function e(t,r,i){n(this,e),this.__parts=[],this.template=t,this.processor=r,this.options=i}return i(e,[{key:"update",value:function(e){var t=0,n=!0,r=!1,i=void 0;try{for(var o,a=this.__parts[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;void 0!==s&&s.setValue(e[t]),t++}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}var u=!0,c=!1,l=void 0;try{for(var h,p=this.__parts[Symbol.iterator]();!(u=(h=p.next()).done);u=!0){var d=h.value;void 0!==d&&d.commit()}}catch(e){c=!0,l=e}finally{try{u||null==p.return||p.return()}finally{if(c)throw l}}}},{key:"_clone",value:function(){for(var e,t=g?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],r=this.template.parts,i=document.createTreeWalker(t,133,null,!1),o=0,a=0,s=i.nextNode();o<r.length;)if(e=r[o],E(e)){for(;a<e.index;)a++,"TEMPLATE"===s.nodeName&&(n.push(s),i.currentNode=s.content),null===(s=i.nextNode())&&(i.currentNode=n.pop(),s=i.nextNode());if("node"===e.type){var u=this.processor.handleTextExpression(this.options);u.insertAfterNode(s.previousSibling),this.__parts.push(u)}else{var c;(c=this.__parts).push.apply(c,v(this.processor.handleAttributeExpressions(s,e.name,e.strings,this.options)))}o++}else this.__parts.push(void 0),o++;return g&&(document.adoptNode(t),customElements.upgrade(t)),t}}]),e}(),T=function(){function e(t,r,i,o){n(this,e),this.strings=t,this.values=r,this.type=i,this.processor=o}return i(e,[{key:"getHTML",value:function(){for(var e=this.strings.length-1,t="",n=!1,r=0;r<e;r++){var i=this.strings[r],o=i.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===i.indexOf("--\x3e",o+1);var a=A.exec(i);t+=null===a?i+(n?S:k):i.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+S}return t+=this.strings[e]}},{key:"getTemplateElement",value:function(){var e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}]),e}(),R=function(t){return null===t||!("object"===e(t)||"function"==typeof t)},j=function(e){return Array.isArray(e)||!(!e||!e[Symbol.iterator])},V=function(){function e(t,r,i){n(this,e),this.dirty=!0,this.element=t,this.name=r,this.strings=i,this.parts=[];for(var o=0;o<i.length-1;o++)this.parts[o]=this._createPart()}return i(e,[{key:"_createPart",value:function(){return new M(this)}},{key:"_getValue",value:function(){for(var e=this.strings,t=e.length-1,n="",r=0;r<t;r++){n+=e[r];var i=this.parts[r];if(void 0!==i){var o=i.value;if(R(o)||!j(o))n+="string"==typeof o?o:String(o);else{var a=!0,s=!1,u=void 0;try{for(var c,l=o[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var h=c.value;n+="string"==typeof h?h:String(h)}}catch(e){s=!0,u=e}finally{try{a||null==l.return||l.return()}finally{if(s)throw u}}}}}return n+=e[t]}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),e}(),M=function(){function e(t){n(this,e),this.value=void 0,this.committer=t}return i(e,[{key:"setValue",value:function(e){e===_||R(e)&&e===this.value||(this.value=e,m(e)||(this.committer.dirty=!0))}},{key:"commit",value:function(){for(;m(this.value);){var e=this.value;this.value=_,e(this)}this.value!==_&&this.committer.commit()}}]),e}(),U=function(){function e(t){n(this,e),this.value=void 0,this.__pendingValue=void 0,this.options=t}return i(e,[{key:"appendInto",value:function(e){this.startNode=e.appendChild(C()),this.endNode=e.appendChild(C())}},{key:"insertAfterNode",value:function(e){this.startNode=e,this.endNode=e.nextSibling}},{key:"appendIntoPart",value:function(e){e.__insert(this.startNode=C()),e.__insert(this.endNode=C())}},{key:"insertAfterPart",value:function(e){e.__insert(this.startNode=C()),this.endNode=e.endNode,e.endNode=this.startNode}},{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;m(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=_,e(this)}var t=this.__pendingValue;t!==_&&(R(t)?t!==this.value&&this.__commitText(t):t instanceof T?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):j(t)?this.__commitIterable(t):t===w?(this.value=w,this.clear()):this.__commitText(t))}},{key:"__insert",value:function(e){this.endNode.parentNode.insertBefore(e,this.endNode)}},{key:"__commitNode",value:function(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}},{key:"__commitText",value:function(e){var t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this.__commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}},{key:"__commitTemplateResult",value:function(e){var t=this.options.templateFactory(e);if(this.value instanceof O&&this.value.template===t)this.value.update(e.values);else{var n=new O(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}},{key:"__commitIterable",value:function(t){Array.isArray(this.value)||(this.value=[],this.clear());var n,r=this.value,i=0,o=!0,a=!1,s=void 0;try{for(var u,c=t[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var l=u.value;void 0===(n=r[i])&&(n=new e(this.options),r.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(r[i-1])),n.setValue(l),n.commit(),i++}}catch(e){a=!0,s=e}finally{try{o||null==c.return||c.return()}finally{if(a)throw s}}i<r.length&&(r.length=i,this.clear(n&&n.endNode))}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;b(this.startNode.parentNode,e.nextSibling,this.endNode)}}]),e}(),I=function(){function e(t,r,i){if(n(this,e),this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=r,this.strings=i}return i(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;m(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=_,e(this)}if(this.__pendingValue!==_){var t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=_}}}]),e}(),z=function(e){function t(e,r,i){var o;return n(this,t),(o=p(this,u(t).call(this,e,r,i))).single=2===i.length&&""===i[0]&&""===i[1],o}return s(t,V),i(t,[{key:"_createPart",value:function(){return new F(this)}},{key:"_getValue",value:function(){return this.single?this.parts[0].value:d(u(t.prototype),"_getValue",this).call(this)}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),t}(),F=function(e){function t(){return n(this,t),p(this,u(t).apply(this,arguments))}return s(t,M),t}(),q=!1;try{var L={get capture(){return q=!0,!1}};window.addEventListener("test",L,L),window.removeEventListener("test",L,L)}catch(e){}var H=function(){function e(t,r,i){var o=this;n(this,e),this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=r,this.eventContext=i,this.__boundHandleEvent=function(e){return o.handleEvent(e)}}return i(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;m(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=_,e(this)}if(this.__pendingValue!==_){var t=this.__pendingValue,n=this.value,r=null==t||null!=n&&(t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive),i=null!=t&&(null==n||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=B(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=_}}},{key:"handleEvent",value:function(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}]),e}(),B=function(e){return e&&(q?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},D=new(function(){function e(){n(this,e)}return i(e,[{key:"handleAttributeExpressions",value:function(e,t,n,r){var i=t[0];return"."===i?new z(e,t.slice(1),n).parts:"@"===i?[new H(e,t.slice(1),r.eventContext)]:"?"===i?[new I(e,t.slice(1),n)]:new V(e,t,n).parts}},{key:"handleTextExpression",value:function(e){return new U(e)}}]),e}());function W(e){var t=$.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},$.set(e.type,t));var n=t.stringsArray.get(e.strings);if(void 0!==n)return n;var r=e.strings.join(S);return void 0===(n=t.keyString.get(r))&&(n=new N(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}var $=new Map,J=new WeakMap;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");var Y=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new T(e,n,"html",D)},G=133;function K(e,t){for(var n=e.element.content,r=e.parts,i=document.createTreeWalker(n,G,null,!1),o=X(r),a=r[o],s=-1,u=0,c=[],l=null;i.nextNode();){s++;var h=i.currentNode;for(h.previousSibling===l&&(l=null),t.has(h)&&(c.push(h),null===l&&(l=h)),null!==l&&u++;void 0!==a&&a.index===s;)a.index=null!==l?-1:a.index-u,a=r[o=X(r,o)]}c.forEach(function(e){return e.parentNode.removeChild(e)})}var Q=function(e){for(var t=11===e.nodeType?0:1,n=document.createTreeWalker(e,G,null,!1);n.nextNode();)t++;return t},X=function(e){for(var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){var n=e[t];if(E(n))return t}return-1};var Z=function(e,t){return"".concat(e,"--").concat(t)},ee=!0;void 0===window.ShadyCSS?ee=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),ee=!1);var te=function(e){return function(t){var n=Z(t.type,e),r=$.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},$.set(n,r));var i=r.stringsArray.get(t.strings);if(void 0!==i)return i;var o=t.strings.join(S);if(void 0===(i=r.keyString.get(o))){var a=t.getTemplateElement();ee&&window.ShadyCSS.prepareTemplateDom(a,e),i=new N(t,a),r.keyString.set(o,i)}return r.stringsArray.set(t.strings,i),i}},ne=["html","svg"],re=new Set,ie=function(e,t,n){re.add(n);var r=e.querySelectorAll("style"),i=r.length;if(0!==i){for(var o=document.createElement("style"),a=0;a<i;a++){var s=r[a];s.parentNode.removeChild(s),o.textContent+=s.textContent}!function(e){ne.forEach(function(t){var n=$.get(Z(t,e));void 0!==n&&n.keyString.forEach(function(e){var t=e.element.content,n=new Set;Array.from(t.querySelectorAll("style")).forEach(function(e){n.add(e)}),K(e,n)})})}(n);var u=t.element.content;!function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=e.element.content,i=e.parts;if(null!=n)for(var o=document.createTreeWalker(r,G,null,!1),a=X(i),s=0,u=-1;o.nextNode();)for(u++,o.currentNode===n&&(s=Q(t),n.parentNode.insertBefore(t,n));-1!==a&&i[a].index===u;){if(s>0){for(;-1!==a;)i[a].index+=s,a=X(i,a);return}a=X(i,a)}else r.appendChild(t)}(t,o,u.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n);var c=u.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else{u.insertBefore(o,u.firstChild);var l=new Set;l.add(o),K(t,l)}}else window.ShadyCSS.prepareTemplateStyles(t.element,n)};window.JSCompiler_renameProperty=function(e,t){return e};var oe={toAttribute:function(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute:function(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},ae=function(e,t){return t!==e&&(t==t||e==e)},se={attribute:!0,type:String,converter:oe,reflect:!1,hasChanged:ae},ue=Promise.resolve(!0),ce=function(r){function o(){var e;return n(this,o),(e=p(this,u(o).call(this)))._updateState=0,e._instanceProperties=void 0,e._updatePromise=ue,e._hasConnectedResolver=void 0,e._changedProperties=new Map,e._reflectingProperties=void 0,e.initialize(),e}return s(o,h(HTMLElement)),i(o,[{key:"initialize",value:function(){this._saveInstanceProperties(),this._requestUpdate()}},{key:"_saveInstanceProperties",value:function(){var e=this;this.constructor._classProperties.forEach(function(t,n){if(e.hasOwnProperty(n)){var r=e[n];delete e[n],e._instanceProperties||(e._instanceProperties=new Map),e._instanceProperties.set(n,r)}})}},{key:"_applyInstanceProperties",value:function(){var e=this;this._instanceProperties.forEach(function(t,n){return e[n]=t}),this._instanceProperties=void 0}},{key:"connectedCallback",value:function(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}},{key:"disconnectedCallback",value:function(){}},{key:"attributeChangedCallback",value:function(e,t,n){t!==n&&this._attributeToProperty(e,n)}},{key:"_propertyToAttribute",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:se,r=this.constructor,i=r._attributeNameForProperty(e,n);if(void 0!==i){var o=r._propertyValueToAttribute(t,n);if(void 0===o)return;this._updateState=8|this._updateState,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._updateState=-9&this._updateState}}},{key:"_attributeToProperty",value:function(e,t){if(!(8&this._updateState)){var n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){var i=n._classProperties.get(r)||se;this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,i),this._updateState=-17&this._updateState}}}},{key:"_requestUpdate",value:function(e,t){var n=!0;if(void 0!==e){var r=this.constructor,i=r._classProperties.get(e)||se;r._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}},{key:"requestUpdate",value:function(e,t){return this._requestUpdate(e,t),this.updateComplete}},{key:"_enqueueUpdate",value:function(){var e,n=(e=regeneratorRuntime.mark(function e(){var t,n,r,i,o=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this._updateState=4|this._updateState,r=this._updatePromise,this._updatePromise=new Promise(function(e,r){t=e,n=r}),e.prev=3,e.next=6,r;case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(3);case 10:if(this._hasConnected){e.next=13;break}return e.next=13,new Promise(function(e){return o._hasConnectedResolver=e});case 13:if(e.prev=13,null==(i=this.performUpdate())){e.next=18;break}return e.next=18,i;case 18:e.next=23;break;case 20:e.prev=20,e.t1=e.catch(13),n(e.t1);case 23:t(!this._hasRequestedUpdate);case 24:case"end":return e.stop()}},e,this,[[3,8],[13,20]])}),function(){var n=this,r=arguments;return new Promise(function(i,o){var a=e.apply(n,r);function s(e){t(a,i,o,s,u,"next",e)}function u(e){t(a,i,o,s,u,"throw",e)}s(void 0)})});return function(){return n.apply(this,arguments)}}()},{key:"performUpdate",value:function(){this._instanceProperties&&this._applyInstanceProperties();var e=!1,t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}},{key:"_markUpdated",value:function(){this._changedProperties=new Map,this._updateState=-5&this._updateState}},{key:"shouldUpdate",value:function(e){return!0}},{key:"update",value:function(e){var t=this;void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(function(e,n){return t._propertyToAttribute(n,t[n],e)}),this._reflectingProperties=void 0)}},{key:"updated",value:function(e){}},{key:"firstUpdated",value:function(e){}},{key:"_hasConnected",get:function(){return 32&this._updateState}},{key:"_hasRequestedUpdate",get:function(){return 4&this._updateState}},{key:"hasUpdated",get:function(){return 1&this._updateState}},{key:"updateComplete",get:function(){return this._updatePromise}}],[{key:"_ensureClassProperties",value:function(){var e=this;if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;var t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(function(t,n){return e._classProperties.set(n,t)})}}},{key:"createProperty",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:se;if(this._ensureClassProperties(),this._classProperties.set(t,n),!n.noAccessor&&!this.prototype.hasOwnProperty(t)){var r="symbol"===e(t)?Symbol():"__".concat(t);Object.defineProperty(this.prototype,t,{get:function(){return this[r]},set:function(e){var n=this[t];this[r]=e,this._requestUpdate(t,n)},configurable:!0,enumerable:!0})}}},{key:"finalize",value:function(){if(!this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))||!this.finalized){var e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){var t=this.properties,n=[].concat(v(Object.getOwnPropertyNames(t)),v("function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[])),r=!0,i=!1,o=void 0;try{for(var a,s=n[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;this.createProperty(u,t[u])}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}}}},{key:"_attributeNameForProperty",value:function(e,t){var n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}},{key:"_valueHasChanged",value:function(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:ae)(e,t)}},{key:"_propertyValueFromAttribute",value:function(e,t){var n=t.type,r=t.converter||oe,i="function"==typeof r?r:r.fromAttribute;return i?i(e,n):e}},{key:"_propertyValueToAttribute",value:function(e,t){if(void 0!==t.reflect){var n=t.type,r=t.converter;return(r&&r.toAttribute||oe.toAttribute)(e,n)}}},{key:"observedAttributes",get:function(){var e=this;this.finalize();var t=[];return this._classProperties.forEach(function(n,r){var i=e._attributeNameForProperty(r,n);void 0!==i&&(e._attributeToPropertyMap.set(i,r),t.push(i))}),t}}]),o}();ce.finalized=!0;var le="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,he=Symbol(),pe=function(){function e(t,r){if(n(this,e),r!==he)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}return i(e,[{key:"toString",value:function(){return this.cssText}},{key:"styleSheet",get:function(){return void 0===this._styleSheet&&(le?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}}]),e}(),de=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n.reduce(function(t,n,r){return t+function(e){if(e instanceof pe)return e.cssText;throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(e,". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."))}(n)+e[r+1]},e[0]);return new pe(i,he)};(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");var fe=function(e){return e.flat?e.flat(1/0):function e(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=0,i=t.length;r<i;r++){var o=t[r];Array.isArray(o)?e(o,n):n.push(o)}return n}(e)},ve=function(e){function t(){return n(this,t),p(this,u(t).apply(this,arguments))}return s(t,ce),i(t,[{key:"initialize",value:function(){d(u(t.prototype),"initialize",this).call(this),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}},{key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open"})}},{key:"adoptStyles",value:function(){var e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?le?this.renderRoot.adoptedStyleSheets=e.map(function(e){return e.styleSheet}):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(function(e){return e.cssText}),this.localName))}},{key:"connectedCallback",value:function(){d(u(t.prototype),"connectedCallback",this).call(this),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}},{key:"update",value:function(e){var n=this;d(u(t.prototype),"update",this).call(this,e);var r=this.render();r instanceof T&&this.constructor.render(r,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(function(e){var t=document.createElement("style");t.textContent=e.cssText,n.renderRoot.appendChild(t)}))}},{key:"render",value:function(){}}],[{key:"finalize",value:function(){d(u(t),"finalize",this).call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}},{key:"_getUniqueStyles",value:function(){var e=this.styles,t=[];Array.isArray(e)?fe(e).reduceRight(function(e,t){return e.add(t),e},new Set).forEach(function(e){return t.unshift(e)}):e&&t.push(e);return t}}]),t}();ve.finalized=!0,ve.render=function(e,t,n){var r=n.scopeName,i=J.has(t),o=ee&&11===t.nodeType&&!!t.host&&e instanceof T,a=o&&!re.has(r),s=a?document.createDocumentFragment():t;if(function(e,t,n){var r=J.get(t);void 0===r&&(b(t,t.firstChild),J.set(t,r=new U(Object.assign({templateFactory:W},n))),r.appendInto(t)),r.setValue(e),r.commit()}(e,s,Object.assign({templateFactory:te(r)},n)),a){var u=J.get(s);J.delete(s),u.value instanceof O&&ie(s,u.value.template,r),b(t,t.firstChild),t.appendChild(s),J.set(t,u)}!i&&o&&window.ShadyCSS.styleElement(t.host)};var ye=function(e){return function(t){return function(r){function o(){return n(this,o),p(this,u(o).apply(this,arguments))}return s(o,t),i(o,[{key:"connectedCallback",value:function(){var t=this;d(u(o.prototype),"connectedCallback",this)&&d(u(o.prototype),"connectedCallback",this).call(this),this._storeUnsubscribe=e.subscribe(function(){return t.stateChanged(e.getState())}),this.stateChanged(e.getState())}},{key:"disconnectedCallback",value:function(){this._storeUnsubscribe(),d(u(o.prototype),"disconnectedCallback",this)&&d(u(o.prototype),"disconnectedCallback",this).call(this)}},{key:"stateChanged",value:function(e){}}]),o}()}};var me=function(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof module?module:Function("return this")()),ge=function(){return Math.random().toString(36).substring(7).split("").join(".")},be={INIT:"@@redux/INIT"+ge(),REPLACE:"@@redux/REPLACE"+ge(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ge()}};function _e(){}"production"!==process.env.NODE_ENV&&"string"==typeof _e.name&&"isCrushed"!==_e.name&&function(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(e){}}('You are currently using minified code outside of NODE_ENV === "production". This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) to ensure you have the correct code for your production build.');var we={counter:0,appName:"MyApp"},Se=function t(n,r,i){var o;if("function"==typeof r&&"function"==typeof i||"function"==typeof i&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof r&&void 0===i&&(i=r,r=void 0),void 0!==i){if("function"!=typeof i)throw new Error("Expected the enhancer to be a function.");return i(t)(n,r)}if("function"!=typeof n)throw new Error("Expected the reducer to be a function.");var a=n,s=r,u=[],c=u,l=!1;function h(){c===u&&(c=u.slice())}function p(){if(l)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function d(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(l)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return h(),c.push(e),function(){if(t){if(l)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,h();var n=c.indexOf(e);c.splice(n,1)}}}function f(t){if(!function(t){if("object"!==e(t)||null===t)return!1;for(var n=t;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(t)===n}(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw new Error("Reducers may not dispatch actions.");try{l=!0,s=a(s,t)}finally{l=!1}for(var n=u=c,r=0;r<n.length;r++)(0,n[r])();return t}return f({type:be.INIT}),(o={dispatch:f,subscribe:d,getState:p,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");a=e,f({type:be.REPLACE})}})[me]=function(){var t,n=d;return(t={subscribe:function(t){if("object"!==e(t)||null===t)throw new TypeError("Expected the observer to be an object.");function r(){t.next&&t.next(p())}return r(),{unsubscribe:n(r)}}})[me]=function(){return this},t},o}(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return a({},e,{counter:e.counter+1});case"DECREMENT":return a({},e,{counter:e.counter-1});case"CHANGE_APP_NAME":return a({},e,{appName:t.name});default:return e}});function ke(){var e=f(["<p>Counter vale: ","</p>"]);return ke=function(){return e},e}var xe=function(e){function t(){return n(this,t),p(this,u(t).apply(this,arguments))}return s(t,ve),i(t,[{key:"render",value:function(){return Y(ke(),this.counter)}}],[{key:"properties",get:function(){return{counter:{type:Number}}}}]),t}();customElements.define("show-counter",xe);function Ne(){var e=f(["<hr><button @click=",">Incrementar</button> <button @click=",">Decrementar</button>"]);return Ne=function(){return e},e}var Pe=function(e){function t(){return n(this,t),p(this,u(t).apply(this,arguments))}return s(t,ve),i(t,[{key:"render",value:function(){return Y(Ne(),this.incrementar,this.decrementar)}},{key:"incrementar",value:function(){Se.dispatch({type:"INCREMENT"})}},{key:"decrementar",value:function(){Se.dispatch({type:"DECREMENT"})}}]),t}();function Ee(){var e=f(["*{box-sizing:border-box}:host{display:block;margin-bottom:10px}label{display:block;margin-bottom:4px;font-size:var(--dile-input-label-font-size,1em);color:var(--dile-input-label-color,#59e)}input{box-sizing:border-box;border-radius:5px;border:var(--dile-input-border-size,1px) solid var(--dile-input-border-color,#888);font-size:1em;padding:5px;width:100%}input:focus{outline:0;border-color:var(--dile-input-focus-border-color,#6af)}input::placeholder{color:#ccc}input:disabled{background-color:#f5f5f5;border-color:var(--dile-input-disabled-border-color,#eee)}"]);return Ee=function(){return e},e}function Ce(){var e=f(["<label for=textField>",":</label>"]);return Ce=function(){return e},e}function Ae(){var e=f(["<div>"," <input type=text id=textField name="," placeholder="," ?disabled="," @keypress="," @input="," .value=","></div>"]);return Ae=function(){return e},e}customElements.define("counter-user-interface",Pe);var Oe=function(e){function t(){var e;return n(this,t),(e=p(this,u(t).call(this))).placeholder="",e.label="",e.value="",e.disabled=!1,e.name="",e}return s(t,ve),i(t,null,[{key:"properties",get:function(){return{label:{type:String},placeholder:{type:String},disabled:{type:Boolean},value:{type:String},name:{type:String}}}}]),i(t,[{key:"render",value:function(){return Y(Ae(),this.label?Y(Ce(),this.label):"",this.name,this.placeholder,this.disabled,this._lookForEnter,this._input,this.value)}},{key:"_lookForEnter",value:function(e){"13"==(e.keyCode?e.keyCode:e.which)&&this.dispatchEvent(new CustomEvent("enter-pressed"))}},{key:"_input",value:function(e){this.value=e.target.value}}],[{key:"styles",get:function(){return de(Ee())}}]),t}();function Te(){var e=f(["<hr><dile-input .value="," @input=","></dile-input><button @click=",">Guardar</button>"]);return Te=function(){return e},e}customElements.define("dile-input",Oe);var Re=function(e){function t(){return n(this,t),p(this,u(t).apply(this,arguments))}return s(t,ye(Se)(ve)),i(t,[{key:"render",value:function(){return Y(Te(),this.appName,this.appNameChanged,this.save)}},{key:"stateChanged",value:function(e){this.appName=e.appName}},{key:"appNameChanged",value:function(e){console.log(e.target.value),this.appName=e.target.value}},{key:"save",value:function(){Se.dispatch({type:"CHANGE_APP_NAME",name:this.appName})}}],[{key:"properties",get:function(){return{appName:{type:String}}}}]),t}();function je(){var e=f(["<h1>","</h1><show-counter counter=","></show-counter><counter-user-interface></counter-user-interface><app-admin></app-admin>"]);return je=function(){return e},e}customElements.define("app-admin",Re);var Ve=function(e){function t(){return n(this,t),p(this,u(t).apply(this,arguments))}return s(t,ye(Se)(ve)),i(t,[{key:"render",value:function(){return Y(je(),this.appName,this.counter)}},{key:"stateChanged",value:function(e){console.log("statechanged",e),this.appName=e.appName,this.counter=e.counter}}],[{key:"properties",get:function(){return{appName:{type:String},counter:{type:Number}}}}]),t}();customElements.define("redux-litelement-app",Ve)}}});
//# sourceMappingURL=redux-litelement-app.js.map