/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t={365:(t,e,n)=>{n.d(e,{A:()=>u});var r=n(601),o=n.n(r),i=n(314),a=n.n(i)()(o());a.push([t.id,".converter-widget {\n  font-family: 'Open Sans', sans-serif;\n  width: 100%;\n  max-width: 350px;\n  padding: 0.5rem;\n  box-sizing: border-box;\n  background-color: #ffffff;\n}\n\n.converter-result {\n  margin-bottom: 15px;\n}\n\n.converter-result h1, .converter-result h2 {\n  margin: 0;\n  line-height: 1.2;\n}\n\n.converter-result h1 {\n  font-size: 1.8rem;\n  color: #202124;\n  font-weight: 600;\n}\n\n.converter-result h2 {\n  font-size: 1rem;\n  color: #5f6368;\n  font-weight: 400;\n}\n\n.exchange-time {\n  font-size: 0.8rem;\n  color: #5f6368;\n  margin: 5px 0;\n}\n\n.converter-inputs .input-group {\n  display: flex;\n  margin-bottom: 10px;\n}\n\n.converter-inputs input {\n  flex-grow: 2;\n  padding: 8px;\n  font-size: 1rem;\n  border: 1px solid #dadce0;\n  border-radius: 4px 0 0 4px;\n}\n\n.converter-inputs select {\n  flex-grow: 1;\n  padding: 8px;\n  font-size: 1rem;\n  border: 1px solid #dadce0;\n  border-left: none;\n  border-radius: 0 4px 4px 0;\n  background-color: #f8f9fa;\n}\n\n.exchange-rate {\n  font-size: 0.9rem;\n  color: #5f6368;\n  margin-top: 10px;\n}\n\n.error {\n  color: #d32f2f;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\n\n@media (max-width: 300px) {\n  .converter-widget {\n    padding: 10px;\n  }\n\n  .converter-result h1 {\n    font-size: 1.5rem;\n  }\n\n  .converter-result h2 {\n    font-size: 0.9em;\n  }\n}",""]);const u=a},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var u=0;u<this.length;u++){var c=this[u][0];null!=c&&(a[c]=!0)}for(var _=0;_<t.length;_++){var l=[].concat(t[_]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],u=0;u<t.length;u++){var c=t[u],_=r.base?c[0]+r.base:c[0],l=i[_]||0,s="".concat(_," ").concat(l);i[_]=l+1;var f=n(s),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var h=o(p,r);r.byIndex=u,e.splice(u,0,{identifier:s,updater:h,references:1})}a.push(s)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var u=n(i[a]);e[u].references--}for(var c=r(t,o),_=0;_<i.length;_++){var l=n(i[_]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;var r,o,i,a,u,c,_,l,s,f,p={},h=[],d=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,v=Array.isArray;function y(t,e){for(var n in e)t[n]=e[n];return t}function m(t){var e=t.parentNode;e&&e.removeChild(t)}function g(t,e,n){var o,i,a,u={};for(a in e)"key"==a?o=e[a]:"ref"==a?i=e[a]:u[a]=e[a];if(arguments.length>2&&(u.children=arguments.length>3?r.call(arguments,2):n),"function"==typeof t&&null!=t.defaultProps)for(a in t.defaultProps)void 0===u[a]&&(u[a]=t.defaultProps[a]);return b(t,u,o,i,null)}function b(t,e,n,r,a){var u={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==a?++i:a,__i:-1,__u:0};return null==a&&null!=o.vnode&&o.vnode(u),u}function x(t){return t.children}function w(t,e){this.props=t,this.context=e}function k(t,e){if(null==e)return t.__?k(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?k(t):null}function E(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return E(t)}}function S(t){(!t.__d&&(t.__d=!0)&&a.push(t)&&!L.__r++||u!==o.debounceRendering)&&((u=o.debounceRendering)||c)(L)}function L(){var t,e,n,r,i,u,c,l;for(a.sort(_);t=a.shift();)t.__d&&(e=a.length,r=void 0,u=(i=(n=t).__v).__e,c=[],l=[],n.__P&&((r=y({},i)).__v=i.__v+1,o.vnode&&o.vnode(r),H(n.__P,r,i,n.__n,n.__P.namespaceURI,32&i.__u?[u]:null,c,null==u?k(i):u,!!(32&i.__u),l),r.__v=i.__v,r.__.__k[r.__i]=r,j(c,r,l),r.__e!=u&&E(r)),a.length>e&&a.sort(_));L.__r=0}function N(t,e,n,r,o,i,a,u,c,_,l){var s,f,d,v,y,m=r&&r.__k||h,g=e.length;for(n.__d=c,T(n,e,m),c=n.__d,s=0;s<g;s++)null!=(d=n.__k[s])&&"boolean"!=typeof d&&"function"!=typeof d&&(f=-1===d.__i?p:m[d.__i]||p,d.__i=s,H(t,d,f,o,i,a,u,c,_,l),v=d.__e,d.ref&&f.ref!=d.ref&&(f.ref&&U(f.ref,null,d),l.push(d.ref,d.__c||v,d)),null==y&&null!=v&&(y=v),65536&d.__u||f.__k===d.__k?(c&&"string"==typeof d.type&&!t.contains(c)&&(c=k(f)),c=P(d,c,t)):"function"==typeof d.type&&void 0!==d.__d?c=d.__d:v&&(c=v.nextSibling),d.__d=void 0,d.__u&=-196609);n.__d=c,n.__e=y}function T(t,e,n){var r,o,i,a,u,c=e.length,_=n.length,l=_,s=0;for(t.__k=[],r=0;r<c;r++)a=r+s,null!=(o=t.__k[r]=null==(o=e[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?b(null,o,null,null,null):v(o)?b(x,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?b(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=t,o.__b=t.__b+1,u=C(o,n,a,l),o.__i=u,i=null,-1!==u&&(l--,(i=n[u])&&(i.__u|=131072)),null==i||null===i.__v?(-1==u&&s--,"function"!=typeof o.type&&(o.__u|=65536)):u!==a&&(u==a-1?s=u-a:u==a+1?s++:u>a?l>c-a?s+=u-a:s--:u<a&&s++,u!==r+s&&(o.__u|=65536))):(i=n[a])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=k(i)),M(i,i,!1),n[a]=null,l--);if(l)for(r=0;r<_;r++)null!=(i=n[r])&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=k(i)),M(i,i))}function P(t,e,n){var r,o;if("function"==typeof t.type){for(r=t.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=t,e=P(r[o],e,n));return e}t.__e!=e&&(n.insertBefore(t.__e,e||null),e=t.__e);do{e=e&&e.nextSibling}while(null!=e&&8===e.nodeType);return e}function C(t,e,n,r){var o=t.key,i=t.type,a=n-1,u=n+1,c=e[n];if(null===c||c&&o==c.key&&i===c.type&&!(131072&c.__u))return n;if(r>(null==c||131072&c.__u?0:1))for(;a>=0||u<e.length;){if(a>=0){if((c=e[a])&&!(131072&c.__u)&&o==c.key&&i===c.type)return a;a--}if(u<e.length){if((c=e[u])&&!(131072&c.__u)&&o==c.key&&i===c.type)return u;u++}}return-1}function F(t,e,n){"-"===e[0]?t.setProperty(e,null==n?"":n):t[e]=null==n?"":"number"!=typeof n||d.test(e)?n:n+"px"}function O(t,e,n,r,o){var i;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||F(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||F(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])i=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||"onFocusOut"===e||"onFocusIn"===e?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r?n.u=r.u:(n.u=l,t.addEventListener(e,i?f:s,i)):t.removeEventListener(e,i?f:s,i);else{if("http://www.w3.org/2000/svg"==o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=e&&"height"!=e&&"href"!=e&&"list"!=e&&"form"!=e&&"tabIndex"!=e&&"download"!=e&&"rowSpan"!=e&&"colSpan"!=e&&"role"!=e&&"popover"!=e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null==n||!1===n&&"-"!==e[4]?t.removeAttribute(e):t.setAttribute(e,"popover"==e&&1==n?"":n))}}function A(t){return function(e){if(this.l){var n=this.l[e.type+t];if(null==e.t)e.t=l++;else if(e.t<n.u)return;return n(o.event?o.event(e):e)}}}function H(t,e,n,r,i,a,u,c,_,l){var s,f,p,h,d,m,g,b,k,E,S,L,T,P,C,F,O=e.type;if(void 0!==e.constructor)return null;128&n.__u&&(_=!!(32&n.__u),a=[c=e.__e=n.__e]),(s=o.__b)&&s(e);t:if("function"==typeof O)try{if(b=e.props,k="prototype"in O&&O.prototype.render,E=(s=O.contextType)&&r[s.__c],S=s?E?E.props.value:s.__:r,n.__c?g=(f=e.__c=n.__c).__=f.__E:(k?e.__c=f=new O(b,S):(e.__c=f=new w(b,S),f.constructor=O,f.render=D),E&&E.sub(f),f.props=b,f.state||(f.state={}),f.context=S,f.__n=r,p=f.__d=!0,f.__h=[],f._sb=[]),k&&null==f.__s&&(f.__s=f.state),k&&null!=O.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=y({},f.__s)),y(f.__s,O.getDerivedStateFromProps(b,f.__s))),h=f.props,d=f.state,f.__v=e,p)k&&null==O.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),k&&null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(k&&null==O.getDerivedStateFromProps&&b!==h&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(b,S),!f.__e&&(null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(b,f.__s,S)||e.__v===n.__v)){for(e.__v!==n.__v&&(f.props=b,f.state=f.__s,f.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(t){t&&(t.__=e)})),L=0;L<f._sb.length;L++)f.__h.push(f._sb[L]);f._sb=[],f.__h.length&&u.push(f);break t}null!=f.componentWillUpdate&&f.componentWillUpdate(b,f.__s,S),k&&null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(h,d,m)}))}if(f.context=S,f.props=b,f.__P=t,f.__e=!1,T=o.__r,P=0,k){for(f.state=f.__s,f.__d=!1,T&&T(e),s=f.render(f.props,f.state,f.context),C=0;C<f._sb.length;C++)f.__h.push(f._sb[C]);f._sb=[]}else do{f.__d=!1,T&&T(e),s=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++P<25);f.state=f.__s,null!=f.getChildContext&&(r=y(y({},r),f.getChildContext())),k&&!p&&null!=f.getSnapshotBeforeUpdate&&(m=f.getSnapshotBeforeUpdate(h,d)),N(t,v(F=null!=s&&s.type===x&&null==s.key?s.props.children:s)?F:[F],e,n,r,i,a,u,c,_,l),f.base=e.__e,e.__u&=-161,f.__h.length&&u.push(f),g&&(f.__E=f.__=null)}catch(t){e.__v=null,_||null!=a?(e.__e=c,e.__u|=_?160:32,a[a.indexOf(c)]=null):(e.__e=n.__e,e.__k=n.__k),o.__e(t,e,n)}else null==a&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=I(n.__e,e,n,r,i,a,u,_,l);(s=o.diffed)&&s(e)}function j(t,e,n){e.__d=void 0;for(var r=0;r<n.length;r++)U(n[r],n[++r],n[++r]);o.__c&&o.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){o.__e(t,e.__v)}}))}function I(t,e,n,o,i,a,u,c,_){var l,s,f,h,d,y,g,b=n.props,x=e.props,w=e.type;if("svg"===w?i="http://www.w3.org/2000/svg":"math"===w?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=a)for(l=0;l<a.length;l++)if((d=a[l])&&"setAttribute"in d==!!w&&(w?d.localName===w:3===d.nodeType)){t=d,a[l]=null;break}if(null==t){if(null===w)return document.createTextNode(x);t=document.createElementNS(i,w,x.is&&x),a=null,c=!1}if(null===w)b===x||c&&t.data===x||(t.data=x);else{if(a=a&&r.call(t.childNodes),b=n.props||p,!c&&null!=a)for(b={},l=0;l<t.attributes.length;l++)b[(d=t.attributes[l]).name]=d.value;for(l in b)if(d=b[l],"children"==l);else if("dangerouslySetInnerHTML"==l)f=d;else if("key"!==l&&!(l in x)){if("value"==l&&"defaultValue"in x||"checked"==l&&"defaultChecked"in x)continue;O(t,l,null,d,i)}for(l in x)d=x[l],"children"==l?h=d:"dangerouslySetInnerHTML"==l?s=d:"value"==l?y=d:"checked"==l?g=d:"key"===l||c&&"function"!=typeof d||b[l]===d||O(t,l,d,b[l],i);if(s)c||f&&(s.__html===f.__html||s.__html===t.innerHTML)||(t.innerHTML=s.__html),e.__k=[];else if(f&&(t.innerHTML=""),N(t,v(h)?h:[h],e,n,o,"foreignObject"===w?"http://www.w3.org/1999/xhtml":i,a,u,a?a[0]:n.__k&&k(n,0),c,_),null!=a)for(l=a.length;l--;)null!=a[l]&&m(a[l]);c||(l="value",void 0!==y&&(y!==t[l]||"progress"===w&&!y||"option"===w&&y!==b[l])&&O(t,l,y,b[l],i),l="checked",void 0!==g&&g!==t[l]&&O(t,l,g,b[l],i))}return t}function U(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){o.__e(t,n)}}function M(t,e,n){var r,i;if(o.unmount&&o.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||U(r,null,e)),null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){o.__e(t,e)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&M(r[i],e,n||"function"!=typeof t.type);n||null==t.__e||m(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function D(t,e,n){return this.constructor(t,n)}r=h.slice,o={__e:function(t,e,n,r){for(var o,i,a;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(t)),a=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(t,r||{}),a=o.__d),a)return o.__E=o}catch(e){t=e}throw t}},i=0,w.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=y({},this.state),"function"==typeof t&&(t=t(y({},n),this.props)),t&&y(n,t),null!=t&&this.__v&&(e&&this._sb.push(e),S(this))},w.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),S(this))},w.prototype.render=x,a=[],c="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_=function(t,e){return t.__v.__b-e.__v.__b},L.__r=0,l=0,s=A(!1),f=A(!0);var R,z,W,G,q=0,$=[],B=o,J=B.__b,Y=B.__r,V=B.diffed,K=B.__c,Q=B.unmount,X=B.__;function Z(t,e){B.__h&&B.__h(z,t,q||e),q=0;var n=z.__H||(z.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function tt(t){return q=1,function(t,e){var n=Z(R++,2);if(n.t=t,!n.__c&&(n.__=[ut(void 0,e),function(t){var e=n.__N?n.__N[0]:n.__[0],r=n.t(e,t);e!==r&&(n.__N=[r,n.__[1]],n.__c.setState({}))}],n.__c=z,!z.u)){var r=function(t,e,r){if(!n.__c.__H)return!0;var i=n.__c.__H.__.filter((function(t){return!!t.__c}));if(i.every((function(t){return!t.__N})))return!o||o.call(this,t,e,r);var a=!1;return i.forEach((function(t){if(t.__N){var e=t.__[0];t.__=t.__N,t.__N=void 0,e!==t.__[0]&&(a=!0)}})),!(!a&&n.__c.props===t)&&(!o||o.call(this,t,e,r))};z.u=!0;var o=z.shouldComponentUpdate,i=z.componentWillUpdate;z.componentWillUpdate=function(t,e,n){if(this.__e){var a=o;o=void 0,r(t,e,n),o=a}i&&i.call(this,t,e,n)},z.shouldComponentUpdate=r}return n.__N||n.__}(ut,t)}function et(t,e){var n=Z(R++,3);!B.__s&&function(t,e){return!t||t.length!==e.length||e.some((function(e,n){return e!==t[n]}))}(n.__H,e)&&(n.__=t,n.i=e,z.__H.__h.push(n))}function nt(){for(var t;t=$.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(it),t.__H.__h.forEach(at),t.__H.__h=[]}catch(e){t.__H.__h=[],B.__e(e,t.__v)}}B.__b=function(t){z=null,J&&J(t)},B.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),X&&X(t,e)},B.__r=function(t){Y&&Y(t),R=0;var e=(z=t.__c).__H;e&&(W===z?(e.__h=[],z.__h=[],e.__.forEach((function(t){t.__N&&(t.__=t.__N),t.i=t.__N=void 0}))):(e.__h.forEach(it),e.__h.forEach(at),e.__h=[],R=0)),W=z},B.diffed=function(t){V&&V(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(1!==$.push(e)&&G===B.requestAnimationFrame||((G=B.requestAnimationFrame)||ot)(nt)),e.__H.__.forEach((function(t){t.i&&(t.__H=t.i),t.i=void 0}))),W=z=null},B.__c=function(t,e){e.some((function(t){try{t.__h.forEach(it),t.__h=t.__h.filter((function(t){return!t.__||at(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],B.__e(n,t.__v)}})),K&&K(t,e)},B.unmount=function(t){Q&&Q(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach((function(t){try{it(t)}catch(t){e=t}})),n.__H=void 0,e&&B.__e(e,n.__v))};var rt="function"==typeof requestAnimationFrame;function ot(t){var e,n=function(){clearTimeout(r),rt&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);rt&&(e=requestAnimationFrame(n))}function it(t){var e=z,n=t.__c;"function"==typeof n&&(t.__c=void 0,n()),z=e}function at(t){var e=z;t.__c=t.__(),z=e}function ut(t,e){return"function"==typeof e?e(t):e}var ct=n(72),_t=n.n(ct),lt=n(825),st=n.n(lt),ft=n(659),pt=n.n(ft),ht=n(56),dt=n.n(ht),vt=n(540),yt=n.n(vt),mt=n(113),gt=n.n(mt),bt=n(365),xt={};function wt(t){return wt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wt(t)}function kt(){kt=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function _(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{_({},"")}catch(t){_=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),u=new C(r||[]);return o(a,"_invoke",{value:L(t,n,u)}),a}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function y(){}function m(){}function g(){}var b={};_(b,a,(function(){return this}));var x=Object.getPrototypeOf,w=x&&x(x(F([])));w&&w!==n&&r.call(w,a)&&(b=w);var k=g.prototype=y.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){_(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,i,a,u){var c=s(t[o],t,i);if("throw"!==c.type){var _=c.arg,l=_.value;return l&&"object"==wt(l)&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(l).then((function(t){_.value=t,a(_)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function L(e,n,r){var o=f;return function(i,a){if(o===h)throw Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var u=r.delegate;if(u){var c=N(u,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===f)throw o=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var _=s(e,n,r);if("normal"===_.type){if(o=r.done?d:p,_.arg===v)continue;return{value:_.arg,done:r.done}}"throw"===_.type&&(o=d,r.method="throw",r.arg=_.arg)}}}function N(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,N(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var i=s(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function F(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(wt(e)+" is not iterable")}return m.prototype=g,o(k,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:m,configurable:!0}),m.displayName=_(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,_(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},E(S.prototype),_(S.prototype,u,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new S(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(k),_(k,c,"Generator"),_(k,a,(function(){return this})),_(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=F,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return u.type="throw",u.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),_=r.call(a,"finallyLoc");if(c&&_){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!_)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:F(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}function Et(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function St(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,_=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);c=!0);}catch(t){_=!0,o=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(_)throw o}}return u}}(t,e)||function(t,e){if(t){if("string"==typeof t)return Lt(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Lt(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Lt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}xt.styleTagTransform=gt(),xt.setAttributes=dt(),xt.insert=pt().bind(null,"head"),xt.domAPI=st(),xt.insertStyleElement=yt(),_t()(bt.A,xt),bt.A&&bt.A.locals&&bt.A.locals,function(t,e,n){var i,a,u,c;o.__&&o.__(t,e),a=(i="function"==typeof n)?null:n&&n.__k||e.__k,u=[],c=[],H(e,t=(!i&&n||e).__k=g(x,null,[t]),a||p,p,e.namespaceURI,!i&&n?[n]:a?null:e.firstChild?r.call(e.childNodes):null,u,!i&&n?n:a?a.__e:e.firstChild,i,c),j(u,t,c)}(g((function(){var t=St(tt("0,00"),2),e=t[0],n=t[1],r=St(tt("0,00"),2),o=r[0],i=r[1],a=St(tt("EUR"),2),u=a[0],c=a[1],_=St(tt("USD"),2),l=_[0],s=_[1],f=St(tt(""),2),p=f[0],h=f[1],d=St(tt({}),2),v=d[0],y=d[1],m=St(tt(""),2),b=m[0],x=m[1],w=St(tt(null),2),k=w[0],E=w[1],S=function(t){return t.toFixed(2).replace(".",",")},L=function(t){return parseFloat(t.replace(",","."))},N=function(){var t=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){Et(i,r,o,a,u,"next",t)}function u(t){Et(i,r,o,a,u,"throw",t)}a(void 0)}))}}(kt().mark((function t(){var e,n,r,o,i,a,u,c;return kt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=localStorage.getItem("exchangeRates"),n=localStorage.getItem("exchangeRatesTimestamp"),!e||!n){t.next=9;break}if(r=(new Date).getTime(),o=parseInt(n),!(r-o<432e5)){t.next=9;break}return y(JSON.parse(e)),h("Exchange Time: ".concat(new Date(o).toLocaleString())),t.abrupt("return");case 9:return t.prev=9,t.next=12,fetch("".concat("https://api.currencyfreaks.com/latest?apikey=").concat("cd4b0dcb2ae44818adee9d2420c46c84"));case 12:return i=t.sent,t.next=15,i.json();case 15:if(!(a=t.sent).rates){t.next=26;break}y(a.rates),u=new Date(a.date),c="Exchange Time: ".concat(u.toLocaleString()),h(c),localStorage.setItem("exchangeRates",JSON.stringify(a.rates)),localStorage.setItem("exchangeRatesTimestamp",u.getTime().toString()),E(null),t.next=27;break;case 26:throw new Error("Failed to fetch rates");case 27:t.next=33;break;case 29:t.prev=29,t.t0=t.catch(9),console.error("Error fetching exchange rates:",t.t0),E("Failed to fetch latest rates: ".concat(t.t0.message,". Using stored rates."));case 33:case"end":return t.stop()}}),t,null,[[9,29]])})));return function(){return t.apply(this,arguments)}}();et((function(){N()}),[]),et((function(){Object.keys(v).length>0&&(P(e,u,l),T(u,l))}),[v,u,l,e]);var T=function(t,e){if(t===e)x("1 ".concat(t," = 1,000000 ").concat(e));else{var n=parseFloat(v[e])/parseFloat(v[t]);x("1 ".concat(t," = ").concat((r=n,r.toFixed(6).replace(".",","))," ").concat(e))}var r},P=function(t,e,n){if("0,00"!==t)if(e!==n){var r=L(t)/parseFloat(v[e])*parseFloat(v[n]);i(S(r))}else i(t);else i("0,00")},C=function(){return Object.keys(v).sort((function(t,e){return t.localeCompare(e)}))};return g("div",{className:"converter-widget"},g("div",{className:"converter-result"},g("h2",null,e," ",u," equals"),g("h1",null,o," ",l),g("p",{className:"exchange-time"},p),k&&g("p",{className:"error"},k)),g("div",{className:"converter-inputs"},g("div",{className:"input-group"},g("input",{type:"text",value:e,onChange:function(t){var e=t.target.value.replace(/[^0-9,]/g,"");n(e),P(e,u,l)}}),g("select",{value:u,onChange:function(t){c(t.target.value),P(e,t.target.value,l)}},C().map((function(t){return g("option",{key:t,value:t},t)})))),g("div",{className:"input-group"},g("input",{type:"text",value:o,onChange:function(t){var e=t.target.value.replace(/[^0-9,]/g,"");if(i(e),u===l)n(e);else{var r=L(e)/parseFloat(v[l])*parseFloat(v[u]);n(S(r))}}}),g("select",{value:l,onChange:function(t){s(t.target.value),P(e,u,t.target.value)}},C().map((function(t){return g("option",{key:t,value:t},t)}))))),g("p",{className:"exchange-rate"},b))}),null),document.getElementById("app"))})();