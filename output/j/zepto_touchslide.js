var Zepto=function(){function t(t){return null==t?String(t):V[X.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(e){return"object"==t(e)}function o(t){return i(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){return"number"==typeof t.length}function s(t){return L.call(t,function(t){return null!=t})}function u(t){return t.length>0?A.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in _?_[t]:_[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||k[c(t)]?e:e+"px"}function h(t){var e,n;return P[t]||(e=O.createElement(t),O.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),P[t]=n),P[t]}function p(t){return"children"in t?j.call(t.children):A.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e,n){for(E in e)n&&(o(e[E])||Q(e[E]))?(o(e[E])&&!o(t[E])&&(t[E]={}),Q(e[E])&&!Q(t[E])&&(t[E]=[]),d(t[E],e[E],n)):e[E]!==w&&(t[E]=e[E])}function m(t,e){return null==e?A(t):A(t).filter(e)}function v(t,n,r,i){return e(n)?n.call(t,r,i):n}function g(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className,r=n&&n.baseVal!==w;return e===w?r?n.baseVal:n:void(r?n.baseVal=e:t.className=e)}function x(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?A.parseJSON(t):t:e):t}catch(n){return t}}function b(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)b(t.childNodes[n],e)}var w,E,A,T,C,N,S=[],j=S.slice,L=S.filter,O=window.document,P={},_={},k={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},D=/^\s*<(\w+|!)[^>]*>/,$=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,B=/^(?:body|html)$/i,F=/([A-Z])/g,M=["val","css","html","text","data","width","height","offset"],Z=["after","prepend","before","append"],I=O.createElement("table"),z=O.createElement("tr"),H={tr:O.createElement("tbody"),tbody:I,thead:I,tfoot:I,td:z,th:z,"*":O.createElement("div")},q=/complete|loaded|interactive/,U=/^[\w-]*$/,V={},X=V.toString,J={},W=O.createElement("div"),Y={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Q=Array.isArray||function(t){return t instanceof Array};return J.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=W).appendChild(t),r=~J.qsa(i,e).indexOf(t),o&&W.removeChild(t),r},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return L.call(t,function(e,n){return t.indexOf(e)==n})},J.fragment=function(t,e,n){var r,i,a;return $.test(t)&&(r=A(O.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(R,"<$1></$2>")),e===w&&(e=D.test(t)&&RegExp.$1),e in H||(e="*"),a=H[e],a.innerHTML=""+t,r=A.each(j.call(a.childNodes),function(){a.removeChild(this)})),o(n)&&(i=A(r),A.each(n,function(t,e){M.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},J.Z=function(t,e){return t=t||[],t.__proto__=A.fn,t.selector=e||"",t},J.isZ=function(t){return t instanceof J.Z},J.init=function(t,n){var r;if(!t)return J.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&D.test(t))r=J.fragment(t,RegExp.$1,n),t=null;else{if(n!==w)return A(n).find(t);r=J.qsa(O,t)}else{if(e(t))return A(O).ready(t);if(J.isZ(t))return t;if(Q(t))r=s(t);else if(i(t))r=[t],t=null;else if(D.test(t))r=J.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==w)return A(n).find(t);r=J.qsa(O,t)}}return J.Z(r,t)},A=function(t,e){return J.init(t,e)},A.extend=function(t){var e,n=j.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){d(t,n,e)}),t},J.qsa=function(t,e){var n,i="#"==e[0],o=!i&&"."==e[0],a=i||o?e.slice(1):e,s=U.test(a);return r(t)&&s&&i?(n=t.getElementById(a))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:j.call(s&&!i?o?t.getElementsByClassName(a):t.getElementsByTagName(e):t.querySelectorAll(e))},A.contains=O.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},A.type=t,A.isFunction=e,A.isWindow=n,A.isArray=Q,A.isPlainObject=o,A.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},A.inArray=function(t,e,n){return S.indexOf.call(e,t,n)},A.camelCase=C,A.trim=function(t){return null==t?"":String.prototype.trim.call(t)},A.uuid=0,A.support={},A.expr={},A.map=function(t,e){var n,r,i,o=[];if(a(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&o.push(n);else for(i in t)n=e(t[i],i),null!=n&&o.push(n);return u(o)},A.each=function(t,e){var n,r;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},A.grep=function(t,e){return L.call(t,e)},window.JSON&&(A.parseJSON=JSON.parse),A.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){V["[object "+e+"]"]=e.toLowerCase()}),A.fn={forEach:S.forEach,reduce:S.reduce,push:S.push,sort:S.sort,indexOf:S.indexOf,concat:S.concat,map:function(t){return A(A.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return A(j.apply(this,arguments))},ready:function(t){return q.test(O.readyState)&&O.body?t(A):O.addEventListener("DOMContentLoaded",function(){t(A)},!1),this},get:function(t){return t===w?j.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return S.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):A(L.call(this,function(e){return J.matches(e,t)}))},add:function(t,e){return A(N(this.concat(A(t,e))))},is:function(t){return this.length>0&&J.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==w)this.each(function(e){t.call(this,e)||n.push(this)});else{var r="string"==typeof t?this.filter(t):a(t)&&e(t.item)?j.call(t):A(t);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return A(n)},has:function(t){return this.filter(function(){return i(t)?A.contains(this,t):A(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:A(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:A(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?A(t).filter(function(){var t=this;return S.some.call(n,function(e){return A.contains(e,t)})}):1==this.length?A(J.qsa(this[0],t)):this.map(function(){return J.qsa(this,t)}):[]},closest:function(t,e){var n=this[0],i=!1;for("object"==typeof t&&(i=A(t));n&&!(i?i.indexOf(n)>=0:J.matches(n,t));)n=n!==e&&!r(n)&&n.parentNode;return A(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=A.map(n,function(t){return(t=t.parentNode)&&!r(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m(N(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return j.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return L.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return A.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var r=A(t).get(0),i=r.parentNode||this.length>1;return this.each(function(e){A(this).wrapAll(n?t.call(this,e):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){A(this[0]).before(t=A(t));for(var e;(e=t.children()).length;)t=e.first();A(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var r=A(this),i=r.contents(),o=n?t.call(this,e):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){A(this).replaceWith(A(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=A(this);(t===w?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return A(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return A(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;A(this).empty().append(v(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=v(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(i(t))for(E in t)g(this,E,t[E]);else g(this,t,v(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:w},removeAttr:function(t){return this.each(function(){1===this.nodeType&&g(this,t)})},prop:function(t,e){return t=Y[t]||t,1 in arguments?this.each(function(n){this[t]=v(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(F,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?x(r):w},val:function(t){return 0 in arguments?this.each(function(e){this.value=v(this,t,e,this.value)}):this[0]&&(this[0].multiple?A(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=A(this),r=v(this,t,e,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var r=this[0],i=getComputedStyle(r,"");if(!r)return;if("string"==typeof e)return r.style[C(e)]||i.getPropertyValue(e);if(Q(e)){var o={};return A.each(Q(e)?e:[e],function(t,e){o[e]=r.style[C(e)]||i.getPropertyValue(e)}),o}}var a="";if("string"==t(e))n||0===n?a=c(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(c(e))});else for(E in e)e[E]||0===e[E]?a+=c(E)+":"+f(E,e[E])+";":this.each(function(){this.style.removeProperty(c(E))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(A(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?S.some.call(this,function(t){return this.test(y(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){T=[];var n=y(this),r=v(this,t,e,n);r.split(/\s+/g).forEach(function(t){A(this).hasClass(t)||T.push(t)},this),T.length&&y(this,n+(n?" ":"")+T.join(" "))}):this},removeClass:function(t){return this.each(function(e){return t===w?y(this,""):(T=y(this),v(this,t,e,T).split(/\s+/g).forEach(function(t){T=T.replace(l(t)," ")}),void y(this,T.trim()))})},toggleClass:function(t,e){return t?this.each(function(n){var r=A(this),i=v(this,t,n,y(this));i.split(/\s+/g).forEach(function(t){(e===w?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===w?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===w?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=B.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(A(t).css("margin-top"))||0,n.left-=parseFloat(A(t).css("margin-left"))||0,r.top+=parseFloat(A(e[0]).css("border-top-width"))||0,r.left+=parseFloat(A(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||O.body;t&&!B.test(t.nodeName)&&"static"==A(t).css("position");)t=t.offsetParent;return t})}},A.fn.detach=A.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});A.fn[t]=function(i){var o,a=this[0];return i===w?n(a)?a["inner"+e]:r(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=A(this),a.css(t,v(this,i,e,a[t]()))})}}),Z.forEach(function(e,n){var r=n%2;A.fn[e]=function(){var e,i,o=A.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:J.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){i=r?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var s=A.contains(O.documentElement,i);o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!i)return A(t).remove();i.insertBefore(t,e),s&&b(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},A.fn[r?e+"To":"insert"+(n?"Before":"After")]=function(t){return A(t)[e](this),this}}),J.Z.prototype=A.fn,J.uniq=N,J.deserializeValue=x,A.zepto=J,A}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,a){if(n=r(n),n.ns)var s=i(n.ns);return(v[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!s.test(t.ns)||o&&e(t.fn)!==e(o)||a&&t.sel!=a)})}function r(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in x||!!e}function a(t){return b[t]||y&&x[t]||t}function s(n,i,s,u,l,h,p){var d=e(n),m=v[d]||(v[d]=[]);i.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var i=r(e);i.fn=s,i.sel=l,i.e in b&&(s=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?i.fn.apply(this,arguments):void 0}),i.del=h;var d=h||s;i.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=u;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},i.i=m.length,m.push(i),"addEventListener"in n&&n.addEventListener(a(i.e),i.proxy,o(i,p))})}function u(t,r,i,s,u){var c=e(t);(r||"").split(/\s/).forEach(function(e){n(t,e,i,s).forEach(function(e){delete v[c][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,u))})})}function c(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(T,function(t,r){var i=n[t];e[t]=function(){return this[r]=w,i&&i.apply(n,arguments)},e[r]=E}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=w)),e}function l(t){var e,n={originalEvent:t};for(e in t)A.test(e)||t[e]===f||(n[e]=t[e]);return c(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},v={},g={},y="onfocusin"in window,x={focus:"focusin",blur:"focusout"},b={mouseenter:"mouseover",mouseleave:"mouseout"};g.click=g.mousedown=g.mouseup=g.mousemove="MouseEvents",t.event={add:s,remove:u},t.proxy=function(n,r){var i=2 in arguments&&p.call(arguments,2);if(d(n)){var o=function(){return n.apply(r,i?i.concat(p.call(arguments)):arguments)};return o._zid=e(n),o}if(m(r))return i?(i.unshift(n[r],n),t.proxy.apply(null,i)):t.proxy(n[r],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var w=function(){return!0},E=function(){return!1},A=/^([A-Z]|returnValue$|layer[XY]$)/,T={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,r,i,o){var a,c,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,r,e,o)}),h):(m(n)||d(i)||i===!1||(i=r,r=n,n=f),(d(r)||r===!1)&&(i=r,r=f),i===!1&&(i=E),h.each(function(f,h){o&&(a=function(t){return u(h,t.type,i),i.apply(this,arguments)}),n&&(c=function(e){var r,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(r=t.extend(l(e),{currentTarget:o,liveFired:h}),(a||i).apply(o,[r].concat(p.call(arguments,1)))):void 0}),s(h,e,i,r,n,c||a)}))},t.fn.off=function(e,n,r){var i=this;return e&&!m(e)?(t.each(e,function(t,e){i.off(t,n,e)}),i):(m(n)||d(r)||r===!1||(r=n,n=f),r===!1&&(r=E),i.each(function(){u(this,e,r,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):c(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,r){var i,o;return this.each(function(a,s){i=l(m(e)?t.Event(e):e),i._args=r,i.target=s,t.each(n(s,e.type||e),function(t,e){return o=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(g[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),c(n)}}(Zepto),function(t){function e(e,n,r){var i=t.Event(n);return t(e).trigger(i,r),!i.isDefaultPrevented()}function n(t,n,r,i){return t.global?e(n||y,r,i):void 0}function r(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function i(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var r=e.context;return e.beforeSend.call(r,t,e)===!1||n(e,r,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,r,"ajaxSend",[t,e])}function a(t,e,r,i){var o=r.context,a="success";r.success.call(o,t,a,e),i&&i.resolveWith(o,[t,a,e]),n(r,o,"ajaxSuccess",[e,r,t]),u(a,e,r)}function s(t,e,r,i,o){var a=i.context;i.error.call(a,r,e,t),o&&o.rejectWith(a,[r,e,t]),n(i,a,"ajaxError",[r,i,t||e]),u(e,r,i)}function u(t,e,r){var o=r.context;r.complete.call(o,e,t),n(r,o,"ajaxComplete",[e,r]),i(r)}function c(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==A?"html":t==E?"json":b.test(t)?"script":w.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function p(e,n,r,i){return t.isFunction(n)&&(i=r,r=n,n=void 0),t.isFunction(r)||(i=r,r=void 0),{url:e,data:n,success:r,dataType:i}}function d(e,n,r,i){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),i&&(n=r?i:i+"["+(s||"object"==o||"array"==o?n:"")+"]"),!i&&a?e.add(u.name,u.value):"array"==o||!r&&"object"==o?d(e,u,r,n):e.add(n,u)})}var m,v,g=0,y=window.document,x=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,b=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,E="application/json",A="text/html",T=/^\s*$/;t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var r,i,u=e.jsonpCallback,c=(t.isFunction(u)?u():u)||"jsonp"+ ++g,l=y.createElement("script"),f=window[c],h=function(e){t(l).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(l).on("load error",function(o,u){clearTimeout(i),t(l).off().remove(),"error"!=o.type&&r?a(r[0],p,e,n):s(null,u||"error",p,e,n),window[c]=f,r&&t.isFunction(f)&&f(r[0]),f=r=void 0}),o(p,e)===!1?(h("abort"),p):(window[c]=function(){r=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),y.head.appendChild(l),e.timeout>0&&(i=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:E,xml:"application/xml, text/xml",html:A,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),i=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===n[m]&&(n[m]=t.ajaxSettings[m]);r(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),h(n);var u=n.dataType,p=/\?.+=\?/.test(n.url);if(p&&(u="jsonp"),n.cache!==!1&&(e&&e.cache===!0||"script"!=u&&"jsonp"!=u)||(n.url=f(n.url,"_="+Date.now())),"jsonp"==u)return p||(n.url=f(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,i);var d,g=n.accepts[u],y={},x=function(t,e){y[t.toLowerCase()]=[t,e]},b=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,w=n.xhr(),E=w.setRequestHeader;if(i&&i.promise(w),n.crossDomain||x("X-Requested-With","XMLHttpRequest"),x("Accept",g||"*/*"),(g=n.mimeType||g)&&(g.indexOf(",")>-1&&(g=g.split(",",2)[0]),w.overrideMimeType&&w.overrideMimeType(g)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&x("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(v in n.headers)x(v,n.headers[v]);if(w.setRequestHeader=x,w.onreadystatechange=function(){if(4==w.readyState){w.onreadystatechange=c,clearTimeout(d);var e,r=!1;if(w.status>=200&&w.status<300||304==w.status||0==w.status&&"file:"==b){u=u||l(n.mimeType||w.getResponseHeader("content-type")),e=w.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=w.responseXML:"json"==u&&(e=T.test(e)?null:t.parseJSON(e))}catch(o){r=o}r?s(r,"parsererror",w,n,i):a(e,w,n,i)}else s(w.statusText||null,w.status?"error":"abort",w,n,i)}},o(w,n)===!1)return w.abort(),s(null,"abort",w,n,i),w;if(n.xhrFields)for(v in n.xhrFields)w[v]=n.xhrFields[v];var A="async"in n?n.async:!0;w.open(n.type,n.url,A,n.username,n.password);for(v in y)E.apply(w,y[v]);return n.timeout>0&&(d=setTimeout(function(){w.onreadystatechange=c,w.abort(),s(null,"timeout",w,n,i)},n.timeout)),w.send(n.data?n.data:null),w},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,r){if(!this.length)return this;var i,o=this,a=e.split(/\s/),s=p(e,n,r),u=s.success;return a.length>1&&(s.url=a[0],i=a[1]),s.success=function(e){o.html(i?t("<div>").html(e.replace(x,"")).find(i):e),u&&u.apply(o,arguments)},t.ajax(s),this};var C=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(C(t)+"="+C(e))},d(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n=[];return t([].slice.call(this.get(0).elements)).each(function(){e=t(this);var r=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=r&&"reset"!=r&&"button"!=r&&("radio"!=r&&"checkbox"!=r||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);var TouchSlide=function(t){t=t||{};var e={slideCell:t.slideCell||"#touchSlide",titCell:t.titCell||".hd li",mainCell:t.mainCell||".bd",effect:t.effect||"left",autoPlay:t.autoPlay||!1,delayTime:t.delayTime||200,interTime:t.interTime||2500,defaultIndex:t.defaultIndex||0,titOnClassName:t.titOnClassName||"on",autoPage:t.autoPage||!1,prevCell:t.prevCell||".prev",nextCell:t.nextCell||".next",pageStateCell:t.pageStateCell||".pageState",pnLoop:"undefined "==t.pnLoop?!0:t.pnLoop,startFun:t.startFun||null,endFun:t.endFun||null,switchLoad:t.switchLoad||null},n=document.getElementById(e.slideCell.replace("#",""));if(!n)return!1;var r=function(t,e){t=t.split(" ");var n=[];e=e||document;var r=[e];for(var i in t)0!=t[i].length&&n.push(t[i]);for(var i in n){if(0==r.length)return!1;var o=[];for(var a in r)if("#"==n[i][0])o.push(document.getElementById(n[i].replace("#","")));else if("."==n[i][0])for(var s=r[a].getElementsByTagName("*"),u=0;u<s.length;u++){var c=s[u].className;c&&-1!=c.search(new RegExp("\\b"+n[i].replace(".","")+"\\b"))&&o.push(s[u])}else for(var s=r[a].getElementsByTagName(n[i]),u=0;u<s.length;u++)o.push(s[u]);r=o}return 0==r.length||r[0]==e?!1:r},i=function(t,e){var n=document.createElement("div");n.innerHTML=e,n=n.children[0];var r=t.cloneNode(!0);return n.appendChild(r),t.parentNode.replaceChild(n,t),f=r,n},o=function(t,e){!t||!e||t.className&&-1!=t.className.search(new RegExp("\\b"+e+"\\b"))||(t.className+=(t.className?" ":"")+e)},a=function(t,e){!t||!e||t.className&&-1==t.className.search(new RegExp("\\b"+e+"\\b"))||(t.className=t.className.replace(new RegExp("\\s*\\b"+e+"\\b","g"),""))},s=e.effect,u=r(e.prevCell,n)[0],c=r(e.nextCell,n)[0],l=r(e.pageStateCell)[0],f=r(e.mainCell,n)[0];if(!f)return!1;var h,p,d=f.children.length,m=r(e.titCell,n),v=m?m.length:d,g=e.switchLoad,y=parseInt(e.defaultIndex),x=parseInt(e.delayTime),b=parseInt(e.interTime),w="false"==e.autoPlay||0==e.autoPlay?!1:!0,E="false"==e.autoPage||0==e.autoPage?!1:!0,A="false"==e.pnLoop||0==e.pnLoop?!1:!0,T=y,C=null,N=null,S=null,j=0,L=0,O=0,P=0,_=/hp-tablet/gi.test(navigator.appVersion),k="ontouchstart"in window&&!_,D=k?"touchstart":"mousedown",$=k?"touchmove":"",R=k?"touchend":"mouseup",B=f.parentNode.clientWidth,F=d;if(0==v&&(v=d),E){v=d,m=m[0],m.innerHTML="";var M="";if(1==e.autoPage||"true"==e.autoPage)for(var Z=0;v>Z;Z++)M+="<li>"+(Z+1)+"</li>";else for(var Z=0;v>Z;Z++)M+=e.autoPage.replace("$",Z+1);m.innerHTML=M,m=m.children}"leftLoop"==s&&(F+=2,f.appendChild(f.children[0].cloneNode(!0)),f.insertBefore(f.children[d-1].cloneNode(!0),f.children[0])),h=i(f,'<div class="tempWrap" style="overflow:hidden; position:relative;"></div>'),f.style.cssText="width:"+F*B+"px;position:relative;overflow:hidden;padding:0;margin:0;";for(var Z=0;F>Z;Z++)f.children[Z].style.cssText="display:table-cell;vertical-align:top;width:"+B+"px";var I=function(){"function"==typeof e.startFun&&e.startFun(y,v)},z=function(){"function"==typeof e.endFun&&e.endFun(y,v)},H=function(t){var e=("leftLoop"==s?y+1:y)+t,n=function(t){for(var e=f.children[t].getElementsByTagName("img"),n=0;n<e.length;n++)e[n].getAttribute(g)&&(e[n].setAttribute("src",e[n].getAttribute(g)),e[n].removeAttribute(g))};if(n(e),"leftLoop"==s)switch(e){case 0:n(d);break;case 1:n(d+1);break;case d:n(0);break;case d+1:n(1)}},q=function(){B=h.clientWidth,f.style.width=F*B+"px";for(var t=0;F>t;t++)f.children[t].style.width=B+"px";var e="leftLoop"==s?y+1:y;U(-e*B,0)};window.addEventListener("resize",q,!1);var U=function(t,e,n){n=n?n.style:f.style,n.webkitTransitionDuration=n.MozTransitionDuration=n.msTransitionDuration=n.OTransitionDuration=n.transitionDuration=e+"ms",n.webkitTransform="translate("+t+"px,0)translateZ(0)",n.msTransform=n.MozTransform=n.OTransform="translateX("+t+"px)"},V=function(t){switch(s){case"left":y>=v?y=t?y-1:0:0>y&&(y=t?0:v-1),null!=g&&H(0),U(-y*B,x),T=y;break;case"leftLoop":null!=g&&H(0),U(-(y+1)*B,x),-1==y?(N=setTimeout(function(){U(-v*B,0)},x),y=v-1):y==v&&(N=setTimeout(function(){U(-B,0)},x),y=0),T=y}I(),S=setTimeout(function(){z()},x);for(var n=0;v>n;n++)a(m[n],e.titOnClassName),n==y&&o(m[n],e.titOnClassName);0==A&&(a(c,"nextStop"),a(u,"prevStop"),0==y?o(u,"prevStop"):y==v-1&&o(c,"nextStop")),l&&(l.innerHTML="<span>"+(y+1)+"</span>/"+v)};if(V(),w&&(C=setInterval(function(){y++,V()},b)),m)for(var Z=0;v>Z;Z++)!function(){var t=Z;m[t].addEventListener("click",function(){clearTimeout(N),clearTimeout(S),y=t,V()})}();c&&c.addEventListener("click",function(){(1==A||y!=v-1)&&(clearTimeout(N),clearTimeout(S),y++,V())}),u&&u.addEventListener("click",function(){(1==A||0!=y)&&(clearTimeout(N),clearTimeout(S),y--,V())});var X=function(t){clearTimeout(N),clearTimeout(S),p=void 0,O=0;var e=k?t.touches[0]:t;j=e.pageX,L=e.pageY,f.addEventListener($,J,!1),f.addEventListener(R,W,!1)},J=function(t){if(!k||!(t.touches.length>1||t.scale&&1!==t.scale)){var e=k?t.touches[0]:t;if(O=e.pageX-j,P=e.pageY-L,"undefined"==typeof p&&(p=!!(p||Math.abs(O)<Math.abs(P))),!p){switch(t.preventDefault(),w&&clearInterval(C),s){case"left":(0==y&&O>0||y>=v-1&&0>O)&&(O=.4*O),U(-y*B+O,0);break;case"leftLoop":U(-(y+1)*B+O,0)}null!=g&&Math.abs(O)>B/3&&H(O>-0?-1:1)}}},W=function(t){0!=O&&(t.preventDefault(),p||(Math.abs(O)>B/10&&(O>0?y--:y++),V(!0),w&&(C=setInterval(function(){y++,V()},b))),f.removeEventListener($,J,!1),f.removeEventListener(R,W,!1))};f.addEventListener(D,X,!1)};$.extend(Function.prototype,{makeArray:function(t){var e=this,n=[];if(null!=t){var r=t.length;if(null==r||"string"==typeof t||e.isFunction(t)||t.setInterval)n[0]=t;else for(;r;)n[--r]=t[r]}return n}}),$.extend(String.prototype,{trim:function(){return this.replace(/(^\s*)|(\s*$)/g,"")},trimAll:function(t){return t.replace(/\s/g,"")},format:function(){var t=this;if(arguments.length>0){var e=1==arguments.length&&$.isArray(arguments[0])?arguments[0]:$.makeArray(arguments);$.each(e,function(e,n){t=t.replace(new RegExp("\\{"+e+"\\}","g"),n)})}return t},substitute:function(t){return t&&"object"==typeof t?this.replace(/\{([^{}]+)\}/g,function(e,n){var r=t[n];return void 0!==r?""+r:""}):this.toString()},parseJSON:function(){return new Function("return "+this.toString())()},parseDate:function(){return(new Date).parse(this.toString())},replaceAll:function(t,e){return this.replace(new RegExp(t,"gm"),e)},parseAttrJSON:function(){for(var t={},e=this.toString().split(";"),n=0;n<e.length;n++)if(!(""===e[n].trim()||e[n].indexOf(":")<1)){var r=e[n].sliceBefore(":").trim(),i=e[n].sliceAfter(":").trim();""!==r&&""!==i&&(t[r.toCamelCase()]=i._toRealValue())}return t},sliceAfter:function(t){return this.indexOf(t)>=0?this.substring(this.indexOf(t)+t.length,this.length):""},sliceBefore:function(t){return this.indexOf(t)>=0?this.substring(0,this.indexOf(t)):""},padLeft:function(t,e){return this.length>=t?this.toString():this._pad(t,e,0)}});var _tip,tID;$('<div class="wrapper"></div>').appendTo("body");var tipBox=function(t){t&&(_tip&&_tip.remove()&&clearTimeout(tID),_tip=$('<div class="tips_overlay"><div class="tipBox"><div class="msg"><h2><i></i>'+t+"</h2></div></div></div>").appendTo(".wrapper"),setTimeout(function(){_tip.addClass("overlay-in"),_tip.children(".tipBox").addClass("mask-in")
},10),tID=setTimeout(function(){_tip&&(_tip.addClass("overlay-out"),_tip.children(".tipBox").addClass("mask-out"),_tip.remove(),_tip=null)},2e3))};window.tipBox=tipBox,function(t){t.fn.picLazyLoad=function(e){function n(){r.each(function(){var n=t(this);if(n.is("img")){if(n.attr("data-original")){var r=n.offset().top;r-e.threshold<=o+i&&(n.attr("src",n.attr("data-original")),n.removeAttr("data-original"))}}else if(n.attr("data-original")){"none"==n.css("background-image")&&n.css("background-image","url("+e.placeholder+")");var r=n.offset().top;r-e.threshold<=o+i&&(n.css("background-image","url("+n.attr("data-original")+")"),n.removeAttr("data-original"))}})}var r=t(this),i=0,o=t(window).height();e=t.extend({threshold:0,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"},e||{}),n(),t(window).on("scroll",function(){i=t(window).scrollTop(),n()})}}(Zepto);