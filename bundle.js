/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t={365:(t,n,e)=>{e.d(n,{A:()=>a});var r=e(601),o=e.n(r),i=e(314),u=e.n(i)()(o());u.push([t.id,"body {\n  font-family: 'Open Sans', sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  margin: 0;\n  background-color: #f8f9fa;\n}\n\n.converter {\n  background-color: white;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 400px;\n}\n\n.result {\n  margin-bottom: 20px;\n}\n\nh1, h2 {\n  margin: 0;\n  line-height: 1.5;\n}\n\nh1 {\n  font-size: 2.5em;\n  color: #202124;\n  font-weight: 600; /* Semibold */\n}\n\nh2 {\n  font-size: 1.2em;\n  color: #5f6368;\n  font-weight: 400; /* Regular */\n}\n\np {\n  color: #5f6368;\n  font-size: 0.9em;\n  margin-top: 5px;\n  font-weight: 400; /* Regular */\n}\n\n.input-group {\n  display: flex;\n  margin-top: 15px;\n}\n\ninput, select {\n  padding: 10px;\n  font-size: 1em;\n  border: 1px solid #dadce0;\n  border-radius: 4px;\n  font-family: 'Open Sans', sans-serif;\n}\n\ninput {\n  flex-grow: 1;\n  margin-right: 10px;\n}\n\nselect {\n  width: 50%;\n}\n\n@media (max-width: 480px) {\n  .converter {\n    padding: 15px;\n  }\n\n  h1 {\n    font-size: 2em;\n  }\n\n  h2 {\n    font-size: 1em;\n  }\n\n  input, select {\n    font-size: 0.9em;\n  }\n}",""]);const a=u},314:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var u={};if(r)for(var a=0;a<this.length;a++){var _=this[a][0];null!=_&&(u[_]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);r&&u[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),n.push(c))}},n}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var i={},u=[],a=0;a<t.length;a++){var _=t[a],l=r.base?_[0]+r.base:_[0],c=i[l]||0,s="".concat(l," ").concat(c);i[l]=c+1;var f=e(s),p={css:_[1],media:_[2],sourceMap:_[3],supports:_[4],layer:_[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var h=o(p,r);r.byIndex=a,n.splice(a,0,{identifier:s,updater:h,references:1})}u.push(s)}return u}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var u=0;u<i.length;u++){var a=e(i[u]);n[a].references--}for(var _=r(t,o),l=0;l<i.length;l++){var c=e(i[l]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}i=_}}},659:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},56:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},113:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return t[r](i,i.exports,e),i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0;var r,o,i,u,a,_,l,c,s,f,p={},h=[],d=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,v=Array.isArray;function y(t,n){for(var e in n)t[e]=n[e];return t}function m(t){var n=t.parentNode;n&&n.removeChild(t)}function g(t,n,e){var o,i,u,a={};for(u in n)"key"==u?o=n[u]:"ref"==u?i=n[u]:a[u]=n[u];if(arguments.length>2&&(a.children=arguments.length>3?r.call(arguments,2):e),"function"==typeof t&&null!=t.defaultProps)for(u in t.defaultProps)void 0===a[u]&&(a[u]=t.defaultProps[u]);return b(t,a,o,i,null)}function b(t,n,e,r,u){var a={type:t,props:n,key:e,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==u?++i:u,__i:-1,__u:0};return null==u&&null!=o.vnode&&o.vnode(a),a}function w(t){return t.children}function x(t,n){this.props=t,this.context=n}function k(t,n){if(null==n)return t.__?k(t.__,t.__i+1):null;for(var e;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e)return e.__e;return"function"==typeof t.type?k(t):null}function S(t){var n,e;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e){t.__e=t.__c.base=e.__e;break}return S(t)}}function E(t){(!t.__d&&(t.__d=!0)&&u.push(t)&&!C.__r++||a!==o.debounceRendering)&&((a=o.debounceRendering)||_)(C)}function C(){var t,n,e,r,i,a,_,c;for(u.sort(l);t=u.shift();)t.__d&&(n=u.length,r=void 0,a=(i=(e=t).__v).__e,_=[],c=[],e.__P&&((r=y({},i)).__v=i.__v+1,o.vnode&&o.vnode(r),H(e.__P,r,i,e.__n,e.__P.namespaceURI,32&i.__u?[a]:null,_,null==a?k(i):a,!!(32&i.__u),c),r.__v=i.__v,r.__.__k[r.__i]=r,O(_,r,c),r.__e!=a&&S(r)),u.length>n&&u.sort(l));C.__r=0}function L(t,n,e,r,o,i,u,a,_,l,c){var s,f,d,v,y,m=r&&r.__k||h,g=n.length;for(e.__d=_,N(e,n,m),_=e.__d,s=0;s<g;s++)null!=(d=e.__k[s])&&"boolean"!=typeof d&&"function"!=typeof d&&(f=-1===d.__i?p:m[d.__i]||p,d.__i=s,H(t,d,f,o,i,u,a,_,l,c),v=d.__e,d.ref&&f.ref!=d.ref&&(f.ref&&j(f.ref,null,d),c.push(d.ref,d.__c||v,d)),null==y&&null!=v&&(y=v),65536&d.__u||f.__k===d.__k?(_&&"string"==typeof d.type&&!t.contains(_)&&(_=k(f)),_=P(d,_,t)):"function"==typeof d.type&&void 0!==d.__d?_=d.__d:v&&(_=v.nextSibling),d.__d=void 0,d.__u&=-196609);e.__d=_,e.__e=y}function N(t,n,e){var r,o,i,u,a,_=n.length,l=e.length,c=l,s=0;for(t.__k=[],r=0;r<_;r++)u=r+s,null!=(o=t.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?b(null,o,null,null,null):v(o)?b(w,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?b(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=t,o.__b=t.__b+1,a=A(o,e,u,c),o.__i=a,i=null,-1!==a&&(c--,(i=e[a])&&(i.__u|=131072)),null==i||null===i.__v?(-1==a&&s--,"function"!=typeof o.type&&(o.__u|=65536)):a!==u&&(a==u-1?s=a-u:a==u+1?s++:a>u?c>_-u?s+=a-u:s--:a<u&&s++,a!==r+s&&(o.__u|=65536))):(i=e[u])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=k(i)),M(i,i,!1),e[u]=null,c--);if(c)for(r=0;r<l;r++)null!=(i=e[r])&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=k(i)),M(i,i))}function P(t,n,e){var r,o;if("function"==typeof t.type){for(r=t.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=t,n=P(r[o],n,e));return n}t.__e!=n&&(e.insertBefore(t.__e,n||null),n=t.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function A(t,n,e,r){var o=t.key,i=t.type,u=e-1,a=e+1,_=n[e];if(null===_||_&&o==_.key&&i===_.type&&!(131072&_.__u))return e;if(r>(null==_||131072&_.__u?0:1))for(;u>=0||a<n.length;){if(u>=0){if((_=n[u])&&!(131072&_.__u)&&o==_.key&&i===_.type)return u;u--}if(a<n.length){if((_=n[a])&&!(131072&_.__u)&&o==_.key&&i===_.type)return a;a++}}return-1}function D(t,n,e){"-"===n[0]?t.setProperty(n,null==e?"":e):t[n]=null==e?"":"number"!=typeof e||d.test(n)?e:e+"px"}function T(t,n,e,r,o){var i;t:if("style"===n)if("string"==typeof e)t.style.cssText=e;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(n in r)e&&n in e||D(t.style,n,"");if(e)for(n in e)r&&e[n]===r[n]||D(t.style,n,e[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in t||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),t.l||(t.l={}),t.l[n+i]=e,e?r?e.u=r.u:(e.u=c,t.addEventListener(n,i?f:s,i)):t.removeEventListener(n,i?f:s,i);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&"popover"!=n&&n in t)try{t[n]=null==e?"":e;break t}catch(t){}"function"==typeof e||(null==e||!1===e&&"-"!==n[4]?t.removeAttribute(n):t.setAttribute(n,"popover"==n&&1==e?"":e))}}function U(t){return function(n){if(this.l){var e=this.l[n.type+t];if(null==n.t)n.t=c++;else if(n.t<e.u)return;return e(o.event?o.event(n):n)}}}function H(t,n,e,r,i,u,a,_,l,c){var s,f,p,h,d,m,g,b,k,S,E,C,N,P,A,D,T=n.type;if(void 0!==n.constructor)return null;128&e.__u&&(l=!!(32&e.__u),u=[_=n.__e=e.__e]),(s=o.__b)&&s(n);t:if("function"==typeof T)try{if(b=n.props,k="prototype"in T&&T.prototype.render,S=(s=T.contextType)&&r[s.__c],E=s?S?S.props.value:s.__:r,e.__c?g=(f=n.__c=e.__c).__=f.__E:(k?n.__c=f=new T(b,E):(n.__c=f=new x(b,E),f.constructor=T,f.render=I),S&&S.sub(f),f.props=b,f.state||(f.state={}),f.context=E,f.__n=r,p=f.__d=!0,f.__h=[],f._sb=[]),k&&null==f.__s&&(f.__s=f.state),k&&null!=T.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=y({},f.__s)),y(f.__s,T.getDerivedStateFromProps(b,f.__s))),h=f.props,d=f.state,f.__v=n,p)k&&null==T.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),k&&null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(k&&null==T.getDerivedStateFromProps&&b!==h&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(b,E),!f.__e&&(null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(b,f.__s,E)||n.__v===e.__v)){for(n.__v!==e.__v&&(f.props=b,f.state=f.__s,f.__d=!1),n.__e=e.__e,n.__k=e.__k,n.__k.forEach((function(t){t&&(t.__=n)})),C=0;C<f._sb.length;C++)f.__h.push(f._sb[C]);f._sb=[],f.__h.length&&a.push(f);break t}null!=f.componentWillUpdate&&f.componentWillUpdate(b,f.__s,E),k&&null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(h,d,m)}))}if(f.context=E,f.props=b,f.__P=t,f.__e=!1,N=o.__r,P=0,k){for(f.state=f.__s,f.__d=!1,N&&N(n),s=f.render(f.props,f.state,f.context),A=0;A<f._sb.length;A++)f.__h.push(f._sb[A]);f._sb=[]}else do{f.__d=!1,N&&N(n),s=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++P<25);f.state=f.__s,null!=f.getChildContext&&(r=y(y({},r),f.getChildContext())),k&&!p&&null!=f.getSnapshotBeforeUpdate&&(m=f.getSnapshotBeforeUpdate(h,d)),L(t,v(D=null!=s&&s.type===w&&null==s.key?s.props.children:s)?D:[D],n,e,r,i,u,a,_,l,c),f.base=n.__e,n.__u&=-161,f.__h.length&&a.push(f),g&&(f.__E=f.__=null)}catch(t){n.__v=null,l||null!=u?(n.__e=_,n.__u|=l?160:32,u[u.indexOf(_)]=null):(n.__e=e.__e,n.__k=e.__k),o.__e(t,n,e)}else null==u&&n.__v===e.__v?(n.__k=e.__k,n.__e=e.__e):n.__e=F(e.__e,n,e,r,i,u,a,l,c);(s=o.diffed)&&s(n)}function O(t,n,e){n.__d=void 0;for(var r=0;r<e.length;r++)j(e[r],e[++r],e[++r]);o.__c&&o.__c(n,t),t.some((function(n){try{t=n.__h,n.__h=[],t.some((function(t){t.call(n)}))}catch(t){o.__e(t,n.__v)}}))}function F(t,n,e,o,i,u,a,_,l){var c,s,f,h,d,y,g,b=e.props,w=n.props,x=n.type;if("svg"===x?i="http://www.w3.org/2000/svg":"math"===x?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=u)for(c=0;c<u.length;c++)if((d=u[c])&&"setAttribute"in d==!!x&&(x?d.localName===x:3===d.nodeType)){t=d,u[c]=null;break}if(null==t){if(null===x)return document.createTextNode(w);t=document.createElementNS(i,x,w.is&&w),u=null,_=!1}if(null===x)b===w||_&&t.data===w||(t.data=w);else{if(u=u&&r.call(t.childNodes),b=e.props||p,!_&&null!=u)for(b={},c=0;c<t.attributes.length;c++)b[(d=t.attributes[c]).name]=d.value;for(c in b)if(d=b[c],"children"==c);else if("dangerouslySetInnerHTML"==c)f=d;else if("key"!==c&&!(c in w)){if("value"==c&&"defaultValue"in w||"checked"==c&&"defaultChecked"in w)continue;T(t,c,null,d,i)}for(c in w)d=w[c],"children"==c?h=d:"dangerouslySetInnerHTML"==c?s=d:"value"==c?y=d:"checked"==c?g=d:"key"===c||_&&"function"!=typeof d||b[c]===d||T(t,c,d,b[c],i);if(s)_||f&&(s.__html===f.__html||s.__html===t.innerHTML)||(t.innerHTML=s.__html),n.__k=[];else if(f&&(t.innerHTML=""),L(t,v(h)?h:[h],n,e,o,"foreignObject"===x?"http://www.w3.org/1999/xhtml":i,u,a,u?u[0]:e.__k&&k(e,0),_,l),null!=u)for(c=u.length;c--;)null!=u[c]&&m(u[c]);_||(c="value",void 0!==y&&(y!==t[c]||"progress"===x&&!y||"option"===x&&y!==b[c])&&T(t,c,y,b[c],i),c="checked",void 0!==g&&g!==t[c]&&T(t,c,g,b[c],i))}return t}function j(t,n,e){try{"function"==typeof t?t(n):t.current=n}catch(t){o.__e(t,e)}}function M(t,n,e){var r,i;if(o.unmount&&o.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||j(r,null,n)),null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){o.__e(t,n)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&M(r[i],n,e||"function"!=typeof t.type);e||null==t.__e||m(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function I(t,n,e){return this.constructor(t,e)}r=h.slice,o={__e:function(t,n,e,r){for(var o,i,u;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(t)),u=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(t,r||{}),u=o.__d),u)return o.__E=o}catch(n){t=n}throw t}},i=0,x.prototype.setState=function(t,n){var e;e=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=y({},this.state),"function"==typeof t&&(t=t(y({},e),this.props)),t&&y(e,t),null!=t&&this.__v&&(n&&this._sb.push(n),E(this))},x.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),E(this))},x.prototype.render=w,u=[],_="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,l=function(t,n){return t.__v.__b-n.__v.__b},C.__r=0,c=0,s=U(!1),f=U(!0);var R,G,W,Y,z=0,B=[],q=o,$=q.__b,J=q.__r,K=q.diffed,Z=q.__c,V=q.unmount,Q=q.__;function X(t,n){q.__h&&q.__h(G,t,z||n),z=0;var e=G.__H||(G.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({}),e.__[t]}function tt(t){return z=1,function(t,n){var e=X(R++,2);if(e.t=t,!e.__c&&(e.__=[ut(void 0,n),function(t){var n=e.__N?e.__N[0]:e.__[0],r=e.t(n,t);n!==r&&(e.__N=[r,e.__[1]],e.__c.setState({}))}],e.__c=G,!G.u)){var r=function(t,n,r){if(!e.__c.__H)return!0;var i=e.__c.__H.__.filter((function(t){return!!t.__c}));if(i.every((function(t){return!t.__N})))return!o||o.call(this,t,n,r);var u=!1;return i.forEach((function(t){if(t.__N){var n=t.__[0];t.__=t.__N,t.__N=void 0,n!==t.__[0]&&(u=!0)}})),!(!u&&e.__c.props===t)&&(!o||o.call(this,t,n,r))};G.u=!0;var o=G.shouldComponentUpdate,i=G.componentWillUpdate;G.componentWillUpdate=function(t,n,e){if(this.__e){var u=o;o=void 0,r(t,n,e),o=u}i&&i.call(this,t,n,e)},G.shouldComponentUpdate=r}return e.__N||e.__}(ut,t)}function nt(){for(var t;t=B.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(ot),t.__H.__h.forEach(it),t.__H.__h=[]}catch(n){t.__H.__h=[],q.__e(n,t.__v)}}q.__b=function(t){G=null,$&&$(t)},q.__=function(t,n){t&&n.__k&&n.__k.__m&&(t.__m=n.__k.__m),Q&&Q(t,n)},q.__r=function(t){J&&J(t),R=0;var n=(G=t.__c).__H;n&&(W===G?(n.__h=[],G.__h=[],n.__.forEach((function(t){t.__N&&(t.__=t.__N),t.i=t.__N=void 0}))):(n.__h.forEach(ot),n.__h.forEach(it),n.__h=[],R=0)),W=G},q.diffed=function(t){K&&K(t);var n=t.__c;n&&n.__H&&(n.__H.__h.length&&(1!==B.push(n)&&Y===q.requestAnimationFrame||((Y=q.requestAnimationFrame)||rt)(nt)),n.__H.__.forEach((function(t){t.i&&(t.__H=t.i),t.i=void 0}))),W=G=null},q.__c=function(t,n){n.some((function(t){try{t.__h.forEach(ot),t.__h=t.__h.filter((function(t){return!t.__||it(t)}))}catch(e){n.some((function(t){t.__h&&(t.__h=[])})),n=[],q.__e(e,t.__v)}})),Z&&Z(t,n)},q.unmount=function(t){V&&V(t);var n,e=t.__c;e&&e.__H&&(e.__H.__.forEach((function(t){try{ot(t)}catch(t){n=t}})),e.__H=void 0,n&&q.__e(n,e.__v))};var et="function"==typeof requestAnimationFrame;function rt(t){var n,e=function(){clearTimeout(r),et&&cancelAnimationFrame(n),setTimeout(t)},r=setTimeout(e,100);et&&(n=requestAnimationFrame(e))}function ot(t){var n=G,e=t.__c;"function"==typeof e&&(t.__c=void 0,e()),G=n}function it(t){var n=G;t.__c=t.__(),G=n}function ut(t,n){return"function"==typeof n?n(t):n}var at=e(72),_t=e.n(at),lt=e(825),ct=e.n(lt),st=e(659),ft=e.n(st),pt=e(56),ht=e.n(pt),dt=e(540),vt=e.n(dt),yt=e(113),mt=e.n(yt),gt=e(365),bt={};function wt(t){return wt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wt(t)}function xt(){xt=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,n,e){t[n]=e.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",_=i.toStringTag||"@@toStringTag";function l(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,e){return t[n]=e}}function c(t,n,e,r){var i=n&&n.prototype instanceof y?n:y,u=Object.create(i.prototype),a=new A(r||[]);return o(u,"_invoke",{value:C(t,e,a)}),u}function s(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=c;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function y(){}function m(){}function g(){}var b={};l(b,u,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(D([])));x&&x!==e&&r.call(x,u)&&(b=x);var k=g.prototype=y.prototype=Object.create(b);function S(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function E(t,n){function e(o,i,u,a){var _=s(t[o],t,i);if("throw"!==_.type){var l=_.arg,c=l.value;return c&&"object"==wt(c)&&r.call(c,"__await")?n.resolve(c.__await).then((function(t){e("next",t,u,a)}),(function(t){e("throw",t,u,a)})):n.resolve(c).then((function(t){l.value=t,u(l)}),(function(t){return e("throw",t,u,a)}))}a(_.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new n((function(n,o){e(t,r,n,o)}))}return i=i?i.then(o,o):o()}})}function C(n,e,r){var o=f;return function(i,u){if(o===h)throw Error("Generator is already running");if(o===d){if("throw"===i)throw u;return{value:t,done:!0}}for(r.method=i,r.arg=u;;){var a=r.delegate;if(a){var _=L(a,r);if(_){if(_===v)continue;return _}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===f)throw o=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var l=s(n,e,r);if("normal"===l.type){if(o=r.done?d:p,l.arg===v)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=d,r.method="throw",r.arg=l.arg)}}}function L(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,L(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var i=s(o,n.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var u=i.arg;return u?u.done?(e[n.resultName]=u.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,v):u:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function N(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function P(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function D(n){if(n||""===n){var e=n[u];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function e(){for(;++o<n.length;)if(r.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(wt(n)+" is not iterable")}return m.prototype=g,o(k,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:m,configurable:!0}),m.displayName=l(g,_,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,_,"GeneratorFunction")),t.prototype=Object.create(k),t},n.awrap=function(t){return{__await:t}},S(E.prototype),l(E.prototype,a,(function(){return this})),n.AsyncIterator=E,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var u=new E(c(t,e,r,o),i);return n.isGeneratorFunction(e)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},S(k),l(k,_,"Generator"),l(k,u,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=D,A.prototype={constructor:A,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function o(r,o){return a.type="throw",a.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var u=this.tryEntries[i],a=u.completion;if("root"===u.tryLoc)return o("end");if(u.tryLoc<=this.prev){var _=r.call(u,"catchLoc"),l=r.call(u,"finallyLoc");if(_&&l){if(this.prev<u.catchLoc)return o(u.catchLoc,!0);if(this.prev<u.finallyLoc)return o(u.finallyLoc)}else if(_){if(this.prev<u.catchLoc)return o(u.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return o(u.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=n,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(u)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),v},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),v}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;P(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:D(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),v}},n}function kt(t,n,e,r,o,i,u){try{var a=t[i](u),_=a.value}catch(t){return void e(t)}a.done?n(_):Promise.resolve(_).then(r,o)}function St(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,i,u,a=[],_=!0,l=!1;try{if(i=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;_=!1}else for(;!(_=(r=i.call(e)).done)&&(a.push(r.value),a.length!==n);_=!0);}catch(t){l=!0,o=t}finally{try{if(!_&&null!=e.return&&(u=e.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(t,n){if(t){if("string"==typeof t)return Et(t,n);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Et(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Et(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=Array(n);e<n;e++)r[e]=t[e];return r}bt.styleTagTransform=mt(),bt.setAttributes=ht(),bt.insert=ft().bind(null,"head"),bt.domAPI=ct(),bt.insertStyleElement=vt(),_t()(gt.A,bt),gt.A&&gt.A.locals&&gt.A.locals,function(t,n,e){var i,u,a,_;o.__&&o.__(t,n),u=(i="function"==typeof e)?null:e&&e.__k||n.__k,a=[],_=[],H(n,t=(!i&&e||n).__k=g(w,null,[t]),u||p,p,n.namespaceURI,!i&&e?[e]:u?null:n.firstChild?r.call(n.childNodes):null,a,!i&&e?e:u?u.__e:n.firstChild,i,_),O(a,t,_)}(g((function(){var t=St(tt(500),2),n=t[0],e=t[1],r=St(tt(0),2),o=r[0],i=r[1],u=St(tt("USD"),2),a=u[0],_=u[1],l=St(tt("EUR"),2),c=l[0],s=l[1],f=St(tt(null),2),p=f[0],h=f[1],d=function(){var t=function(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function u(t){kt(i,r,o,u,a,"next",t)}function a(t){kt(i,r,o,u,a,"throw",t)}u(void 0)}))}}(xt().mark((function t(){var e,r;return xt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.frankfurter.app/latest?amount=".concat(n,"&from=").concat(a,"&to=").concat(c));case 3:return e=t.sent,t.next=6,e.json();case 6:r=t.sent,i(Number(r.rates[c]).toFixed(2)),h(r.date),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error("Error fetching exchange rate:",t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();return function(t,e){var r=X(R++,3);!q.__s&&function(t,n){return!t||t.length!==n.length||n.some((function(n,e){return n!==t[e]}))}(r.__H,e)&&(r.__=function(){a!==c?d():(i(n),h((new Date).toISOString().split("T")[0]))},r.i=e,G.__H.__h.push(r))}(0,[a,c,n]),g("div",{className:"converter"},g("div",{className:"result"},g("h2",null,n," ",a," equals"),g("h1",null,o," ",c),g("p",null,p," · Disclaimer")),g("div",{className:"input-group"},g("input",{type:"number",value:n,onChange:function(t){e(t.target.value)}}),g("select",{value:a,onChange:function(t){_(t.target.value)}},g("option",{value:"USD"},"United States Dollar"),g("option",{value:"EUR"},"Euro"),g("option",{value:"GBP"},"British Pound"),g("option",{value:"JPY"},"Japanese Yen"),g("option",{value:"AUD"},"Australian Dollar"),g("option",{value:"CAD"},"Canadian Dollar"),g("option",{value:"CHF"},"Swiss Franc"),g("option",{value:"CNY"},"Chinese Yuan"),g("option",{value:"SEK"},"Swedish Krona"),g("option",{value:"NZD"},"New Zealand Dollar"))),g("div",{className:"input-group"},g("input",{type:"number",value:o,onChange:function(t){i(t.target.value),e((t.target.value/(o/n)).toFixed(2))}}),g("select",{value:c,onChange:function(t){s(t.target.value)}},g("option",{value:"EUR"},"Euro"),g("option",{value:"USD"},"United States Dollar"),g("option",{value:"GBP"},"British Pound"),g("option",{value:"JPY"},"Japanese Yen"),g("option",{value:"AUD"},"Australian Dollar"),g("option",{value:"CAD"},"Canadian Dollar"),g("option",{value:"CHF"},"Swiss Franc"),g("option",{value:"CNY"},"Chinese Yuan"),g("option",{value:"SEK"},"Swedish Krona"),g("option",{value:"NZD"},"New Zealand Dollar"))))}),null),document.getElementById("app"))})();