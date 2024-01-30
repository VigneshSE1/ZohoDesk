/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={108:(e,t,n)=>{function r(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var a=r(n(294)),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)};t.Z=function(e){var t,n=e.bgColor,r=void 0===n?"#6a1b9a":n,i=e.height,l=void 0===i?"20px":i,s=e.width,u=void 0===s?"100%":s,c=e.borderRadius,d=void 0===c?"50px":c,f=e.labelAlignment,p=void 0===f?"right":f,m=e.baseBgColor,h=void 0===m?"#e0e0de":m,g=e.labelColor,v=void 0===g?"#fff":g,y=e.labelSize,b=void 0===y?"15px":y,x=e.isLabelVisible,w=void 0===x||x,k=e.dir,S=void 0===k?"ltr":k,j=e.ariaValuemin,E=void 0===j?0:j,N=e.ariaValuemax,C=void 0===N?100:N,_=e.ariaValuetext,I=void 0===_?null:_,P=e.maxCompleted,O=void 0===P?100:P,R=e.animateOnRender,T=void 0!==R&&R,A=e.initCompletedOnAnimation,z=void 0===A?0:A,D=e.completed,L=e.margin,F=e.padding,M=e.customLabelStyles,U=e.transitionDuration,B=e.transitionTimingFunction,$=e.className,V=e.customLabel,H=e.barContainerClassName,W=e.completedClassName,q=e.labelClassName,G="left"===(t=p)?"flex-start":"center"===t?"center":"right"===t?"flex-end":null,Q="number"==typeof z?"".concat(z,"%"):z,Y=function(e,t){if(e){var n=Number(t)/e;return n>1?"100%":"".concat(100*n,"%")}return Q}(O,D),K=a.useState(Q),Z=K[0],J=K[1],X={height:l,background:h,borderRadius:d,padding:F,width:u,margin:L,overflow:"hidden"},ee={height:l,width:T?Z:Y,background:r,transition:"width ".concat(U||"1s"," ").concat(B||"ease-in-out"),borderRadius:"inherit",display:"flex",alignItems:"center",justifyContent:"outside"!==p&&G?G:"normal"},te=o({padding:"outside"===p?"0 0 0 5px":"5px",color:v,fontWeight:"bold",fontSize:b,display:w?"initial":"none"},M),ne={display:"outside"===p?"flex":"initial",alignItems:"outside"===p?"center":"initial"},re="number"==typeof D?"".concat(D,"%"):"".concat(D),ae=V||re;return a.useEffect((function(){T&&requestAnimationFrame((function(){return J(Y)}))}),[Y,T]),a.createElement("div",{style:$?void 0:ne,className:$,dir:S,role:"progressbar","aria-valuenow":parseFloat(ae),"aria-valuemin":E,"aria-valuemax":C,"aria-valuetext":"".concat(null===I?ae:I)},a.createElement("div",{style:H?void 0:X,className:H},a.createElement("div",{style:W?void 0:ee,className:W},"outside"!==p&&a.createElement("span",{style:q?void 0:te,className:q},ae))),"outside"===p&&a.createElement("span",{style:q?void 0:te,className:q},ae))}},387:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"@tailwind base;\n",""]);const l=i},197:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"@tailwind components;\n",""]);const l=i},324:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"@tailwind utilities;\n",""]);const l=i},685:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(81),a=n.n(r),o=n(645),i=n.n(o),l=n(387),s=n(197),u=n(324),c=i()(a());c.i(l.Z),c.i(s.Z),c.i(u.Z),c.push([e.id,"",""]);const d=c},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);r&&i[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),t.push(c))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},448:(e,t,n)=>{"use strict";var r=n(294),a=n(840);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function h(e,t,n,r,a,o,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new h(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new h(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new h(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new h(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new h(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new h(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new h(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new h(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new h(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function b(e,t,n,r){var a=g.hasOwnProperty(t)?g[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!d.call(m,e)||!d.call(p,e)&&(f.test(e)?m[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new h(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new h(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,y);g[t]=new h(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new h("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!0,!0)}));var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),C=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),R=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var T=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var A=Symbol.iterator;function z(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=A&&e[A]||e["@@iterator"])?e:null}var D,L=Object.assign;function F(e){if(void 0===D)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);D=t&&t[1]||""}return"\n"+D+e}var M=!1;function U(e,t){if(!e||M)return"";M=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var a=t.stack.split("\n"),o=r.stack.split("\n"),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(1!==i||1!==l)do{if(i--,0>--l||a[i]!==o[l]){var s="\n"+a[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=i&&0<=l);break}}}finally{M=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?F(e):""}function B(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return U(e.type,!1);case 11:return U(e.type.render,!1);case 1:return U(e.type,!0);default:return""}}function $(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case E:return"Profiler";case j:return"StrictMode";case I:return"Suspense";case P:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case C:return(e.displayName||"Context")+".Consumer";case N:return(e._context.displayName||"Context")+".Provider";case _:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case O:return null!==(t=e.displayName||null)?t:$(e.type)||"Memo";case R:t=e._payload,e=e._init;try{return $(e(t))}catch(e){}}return null}function V(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function W(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function q(e){e._valueTracker||(e._valueTracker=function(e){var t=W(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function G(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=W(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Q(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Y(e,t){var n=t.checked;return L({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function K(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Z(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function J(e,t){Z(e,t);var n=H(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function X(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return L({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function oe(e,t){var n=H(t.value),r=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];function he(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=he(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(pe).forEach((function(e){me.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var ve=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(o(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,je=null;function Ee(e){if(e=ba(e)){if("function"!=typeof ke)throw Error(o(280));var t=e.stateNode;t&&(t=wa(t),ke(e.stateNode,e.type,t))}}function Ne(e){Se?je?je.push(e):je=[e]:Se=e}function Ce(){if(Se){var e=Se,t=je;if(je=Se=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function _e(e,t){return e(t)}function Ie(){}var Pe=!1;function Oe(e,t,n){if(Pe)return e(t,n);Pe=!0;try{return _e(e,t,n)}finally{Pe=!1,(null!==Se||null!==je)&&(Ie(),Ce())}}function Re(e,t){var n=e.stateNode;if(null===n)return null;var r=wa(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(o(231,t,typeof n));return n}var Te=!1;if(c)try{var Ae={};Object.defineProperty(Ae,"passive",{get:function(){Te=!0}}),window.addEventListener("test",Ae,Ae),window.removeEventListener("test",Ae,Ae)}catch(ce){Te=!1}function ze(e,t,n,r,a,o,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(e){this.onError(e)}}var De=!1,Le=null,Fe=!1,Me=null,Ue={onError:function(e){De=!0,Le=e}};function Be(e,t,n,r,a,o,i,l,s){De=!1,Le=null,ze.apply(Ue,arguments)}function $e(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Ve(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function He(e){if($e(e)!==e)throw Error(o(188))}function We(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=$e(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return He(a),e;if(i===r)return He(a),t;i=i.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?qe(e):null}function qe(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=qe(e);if(null!==t)return t;e=e.sibling}return null}var Ge=a.unstable_scheduleCallback,Qe=a.unstable_cancelCallback,Ye=a.unstable_shouldYield,Ke=a.unstable_requestPaint,Ze=a.unstable_now,Je=a.unstable_getCurrentPriorityLevel,Xe=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,nt=a.unstable_LowPriority,rt=a.unstable_IdlePriority,at=null,ot=null,it=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2,ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=268435455&n;if(0!==i){var l=i&~a;0!==l?r=dt(l):0!=(o&=i)&&(r=dt(o))}else 0!=(i=n&~a)?r=dt(i):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&a)&&((a=r&-r)>=(o=t&-t)||16===a&&0!=(4194240&o)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-it(t)),r|=e[n],t&=~a;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function mt(e){return 0!=(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ht(){var e=ut;return 0==(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-it(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var bt=0;function xt(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var wt,kt,St,jt,Et,Nt=!1,Ct=[],_t=null,It=null,Pt=null,Ot=new Map,Rt=new Map,Tt=[],At="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zt(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":Ot.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rt.delete(t.pointerId)}}function Dt(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&null!==(t=ba(t))&&kt(t),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Lt(e){var t=ya(e.target);if(null!==t){var n=$e(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Ve(n)))return e.blockedOn=t,void Et(e.priority,(function(){St(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Ft(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ba(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function Mt(e,t,n){Ft(e)&&n.delete(t)}function Ut(){Nt=!1,null!==_t&&Ft(_t)&&(_t=null),null!==It&&Ft(It)&&(It=null),null!==Pt&&Ft(Pt)&&(Pt=null),Ot.forEach(Mt),Rt.forEach(Mt)}function Bt(e,t){e.blockedOn===t&&(e.blockedOn=null,Nt||(Nt=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Ut)))}function $t(e){function t(t){return Bt(t,e)}if(0<Ct.length){Bt(Ct[0],e);for(var n=1;n<Ct.length;n++){var r=Ct[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==_t&&Bt(_t,e),null!==It&&Bt(It,e),null!==Pt&&Bt(Pt,e),Ot.forEach(t),Rt.forEach(t),n=0;n<Tt.length;n++)(r=Tt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Tt.length&&null===(n=Tt[0]).blockedOn;)Lt(n),null===n.blockedOn&&Tt.shift()}var Vt=x.ReactCurrentBatchConfig,Ht=!0;function Wt(e,t,n,r){var a=bt,o=Vt.transition;Vt.transition=null;try{bt=1,Gt(e,t,n,r)}finally{bt=a,Vt.transition=o}}function qt(e,t,n,r){var a=bt,o=Vt.transition;Vt.transition=null;try{bt=4,Gt(e,t,n,r)}finally{bt=a,Vt.transition=o}}function Gt(e,t,n,r){if(Ht){var a=Yt(e,t,n,r);if(null===a)Hr(e,t,r,Qt,n),zt(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return _t=Dt(_t,e,t,n,r,a),!0;case"dragenter":return It=Dt(It,e,t,n,r,a),!0;case"mouseover":return Pt=Dt(Pt,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return Ot.set(o,Dt(Ot.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Rt.set(o,Dt(Rt.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(zt(e,r),4&t&&-1<At.indexOf(e)){for(;null!==a;){var o=ba(a);if(null!==o&&wt(o),null===(o=Yt(e,t,n,r))&&Hr(e,t,r,Qt,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else Hr(e,t,r,null,n)}}var Qt=null;function Yt(e,t,n,r){if(Qt=null,null!==(e=ya(e=we(r))))if(null===(t=$e(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Ve(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qt=e,null}function Kt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Xe:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Zt=null,Jt=null,Xt=null;function en(){if(Xt)return Xt;var e,t,n=Jt,r=n.length,a="value"in Zt?Zt.value:Zt.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[o-t];t++);return Xt=a.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,a,o){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=an(un),dn=L({},un,{view:0,detail:0}),fn=an(dn),pn=L({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(on=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=on=0,sn=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),mn=an(pn),hn=an(L({},pn,{dataTransfer:0})),gn=an(L({},dn,{relatedTarget:0})),vn=an(L({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=L({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=an(yn),xn=an(L({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function En(){return jn}var Nn=L({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Cn=an(Nn),_n=an(L({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),In=an(L({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),Pn=an(L({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),On=L({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rn=an(On),Tn=[9,13,27,32],An=c&&"CompositionEvent"in window,zn=null;c&&"documentMode"in document&&(zn=document.documentMode);var Dn=c&&"TextEvent"in window&&!zn,Ln=c&&(!An||zn&&8<zn&&11>=zn),Fn=String.fromCharCode(32),Mn=!1;function Un(e,t){switch(e){case"keyup":return-1!==Tn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bn(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var $n=!1,Vn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Vn[e.type]:"textarea"===t}function Wn(e,t,n,r){Ne(r),0<(t=qr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,Gn=null;function Qn(e){Fr(e,0)}function Yn(e){if(G(xa(e)))return e}function Kn(e,t){if("change"===e)return t}var Zn=!1;if(c){var Jn;if(c){var Xn="oninput"in document;if(!Xn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Xn="function"==typeof er.oninput}Jn=Xn}else Jn=!1;Zn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){qn&&(qn.detachEvent("onpropertychange",nr),Gn=qn=null)}function nr(e){if("value"===e.propertyName&&Yn(Gn)){var t=[];Wn(t,Gn,e,we(e)),Oe(Qn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Gn=n,(qn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Yn(Gn)}function or(e,t){if("click"===e)return Yn(t)}function ir(e,t){if("input"===e||"change"===e)return Yn(t)}var lr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function sr(e,t){if(lr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!d.call(t,a)||!lr(e[a],t[a]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=Q();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=Q((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function mr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=void 0===r.end?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=cr(n,o);var i=cr(n,r);a&&i&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,yr=null,br=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;br||null==gr||gr!==Q(r)||(r="selectionStart"in(r=gr)&&pr(r)?{start:r.selectionStart,end:r.selectionEnd}:{anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&sr(yr,r)||(yr=r,0<(r=qr(vr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},jr={};function Er(e){if(Sr[e])return Sr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in jr)return Sr[e]=n[t];return e}c&&(jr=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Nr=Er("animationend"),Cr=Er("animationiteration"),_r=Er("animationstart"),Ir=Er("transitionend"),Pr=new Map,Or="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(e,t){Pr.set(e,t),s(t,[e])}for(var Tr=0;Tr<Or.length;Tr++){var Ar=Or[Tr];Rr(Ar.toLowerCase(),"on"+(Ar[0].toUpperCase()+Ar.slice(1)))}Rr(Nr,"onAnimationEnd"),Rr(Cr,"onAnimationIteration"),Rr(_r,"onAnimationStart"),Rr("dblclick","onDoubleClick"),Rr("focusin","onFocus"),Rr("focusout","onBlur"),Rr(Ir,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dr=new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));function Lr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,i,l,s,u){if(Be.apply(this,arguments),De){if(!De)throw Error(o(198));var c=Le;De=!1,Le=null,Fe||(Fe=!0,Me=c)}}(r,t,void 0,e),e.currentTarget=null}function Fr(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;Lr(a,l,u),o=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,u=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;Lr(a,l,u),o=s}}}if(Fe)throw e=Me,Fe=!1,Me=null,e}function Mr(e,t){var n=t[ha];void 0===n&&(n=t[ha]=new Set);var r=e+"__bubble";n.has(r)||(Vr(t,e,2,!1),n.add(r))}function Ur(e,t,n){var r=0;t&&(r|=4),Vr(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function $r(e){if(!e[Br]){e[Br]=!0,i.forEach((function(t){"selectionchange"!==t&&(Dr.has(t)||Ur(t,!1,e),Ur(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Br]||(t[Br]=!0,Ur("selectionchange",!1,t))}}function Vr(e,t,n,r){switch(Kt(t)){case 1:var a=Wt;break;case 4:a=qt;break;default:a=Gt}n=a.bind(null,t,n,e),a=void 0,!Te||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Hr(e,t,n,r,a){var o=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===i)for(i=r.return;null!==i;){var s=i.tag;if((3===s||4===s)&&((s=i.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;i=i.return}for(;null!==l;){if(null===(i=ya(l)))return;if(5===(s=i.tag)||6===s){r=o=i;continue e}l=l.parentNode}}r=r.return}Oe((function(){var r=o,a=we(n),i=[];e:{var l=Pr.get(e);if(void 0!==l){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=Cn;break;case"focusin":u="focus",s=gn;break;case"focusout":u="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=mn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=hn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=In;break;case Nr:case Cr:case _r:s=vn;break;case Ir:s=Pn;break;case"scroll":s=fn;break;case"wheel":s=Rn;break;case"copy":case"cut":case"paste":s=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=_n}var c=0!=(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,m=r;null!==m;){var h=(p=m).stateNode;if(5===p.tag&&null!==h&&(p=h,null!==f&&null!=(h=Re(m,f))&&c.push(Wr(m,h,p))),d)break;m=m.return}0<c.length&&(l=new s(l,u,null,n,a),i.push({event:l,listeners:c}))}}if(0==(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===xe||!(u=n.relatedTarget||n.fromElement)||!ya(u)&&!u[ma])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?ya(u):null)&&(u!==(d=$e(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=mn,h="onMouseLeave",f="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(c=_n,h="onPointerLeave",f="onPointerEnter",m="pointer"),d=null==s?l:xa(s),p=null==u?l:xa(u),(l=new c(h,m+"leave",s,n,a)).target=d,l.relatedTarget=p,h=null,ya(a)===r&&((c=new c(f,m+"enter",u,n,a)).target=p,c.relatedTarget=d,h=c),d=h,s&&u)e:{for(f=u,m=0,p=c=s;p;p=Gr(p))m++;for(p=0,h=f;h;h=Gr(h))p++;for(;0<m-p;)c=Gr(c),m--;for(;0<p-m;)f=Gr(f),p--;for(;m--;){if(c===f||null!==f&&c===f.alternate)break e;c=Gr(c),f=Gr(f)}c=null}else c=null;null!==s&&Qr(i,l,s,c,!1),null!==u&&null!==d&&Qr(i,d,u,c,!0)}if("select"===(s=(l=r?xa(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Kn;else if(Hn(l))if(Zn)g=ir;else{g=ar;var v=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=or);switch(g&&(g=g(e,r))?Wn(i,g,n,a):(v&&v(e,l,r),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&ee(l,"number",l.value)),v=r?xa(r):window,e){case"focusin":(Hn(v)||"true"===v.contentEditable)&&(gr=v,vr=r,yr=null);break;case"focusout":yr=vr=gr=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,xr(i,n,a);break;case"selectionchange":if(hr)break;case"keydown":case"keyup":xr(i,n,a)}var y;if(An)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else $n?Un(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Ln&&"ko"!==n.locale&&($n||"onCompositionStart"!==b?"onCompositionEnd"===b&&$n&&(y=en()):(Jt="value"in(Zt=a)?Zt.value:Zt.textContent,$n=!0)),0<(v=qr(r,b)).length&&(b=new xn(b,e,null,n,a),i.push({event:b,listeners:v}),(y||null!==(y=Bn(n)))&&(b.data=y))),(y=Dn?function(e,t){switch(e){case"compositionend":return Bn(t);case"keypress":return 32!==t.which?null:(Mn=!0,Fn);case"textInput":return(e=t.data)===Fn&&Mn?null:e;default:return null}}(e,n):function(e,t){if($n)return"compositionend"===e||!An&&Un(e,t)?(e=en(),Xt=Jt=Zt=null,$n=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ln&&"ko"!==t.locale?null:t.data}}(e,n))&&0<(r=qr(r,"onBeforeInput")).length&&(a=new xn("onBeforeInput","beforeinput",null,n,a),i.push({event:a,listeners:r}),a.data=y)}Fr(i,t)}))}function Wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;5===a.tag&&null!==o&&(a=o,null!=(o=Re(e,n))&&r.unshift(Wr(e,o,a)),null!=(o=Re(e,t))&&r.push(Wr(e,o,a))),e=e.return}return r}function Gr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Qr(e,t,n,r,a){for(var o=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,a?null!=(s=Re(n,o))&&i.unshift(Wr(n,s,l)):a||null!=(s=Re(n,o))&&i.push(Wr(n,s,l))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var Yr=/\r\n?/g,Kr=/\u0000|\uFFFD/g;function Zr(e){return("string"==typeof e?e:""+e).replace(Yr,"\n").replace(Kr,"")}function Jr(e,t,n){if(t=Zr(t),Zr(e)!==t&&n)throw Error(o(425))}function Xr(){}var ea=null,ta=null;function na(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ra="function"==typeof setTimeout?setTimeout:void 0,aa="function"==typeof clearTimeout?clearTimeout:void 0,oa="function"==typeof Promise?Promise:void 0,ia="function"==typeof queueMicrotask?queueMicrotask:void 0!==oa?function(e){return oa.resolve(null).then(e).catch(la)}:ra;function la(e){setTimeout((function(){throw e}))}function sa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void $t(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);$t(t)}function ua(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ca(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var da=Math.random().toString(36).slice(2),fa="__reactFiber$"+da,pa="__reactProps$"+da,ma="__reactContainer$"+da,ha="__reactEvents$"+da,ga="__reactListeners$"+da,va="__reactHandles$"+da;function ya(e){var t=e[fa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ma]||n[fa]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ca(e);null!==e;){if(n=e[fa])return n;e=ca(e)}return t}n=(e=n).parentNode}return null}function ba(e){return!(e=e[fa]||e[ma])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function xa(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function wa(e){return e[pa]||null}var ka=[],Sa=-1;function ja(e){return{current:e}}function Ea(e){0>Sa||(e.current=ka[Sa],ka[Sa]=null,Sa--)}function Na(e,t){Sa++,ka[Sa]=e.current,e.current=t}var Ca={},_a=ja(Ca),Ia=ja(!1),Pa=Ca;function Oa(e,t){var n=e.type.contextTypes;if(!n)return Ca;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,o={};for(a in n)o[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ra(e){return null!=e.childContextTypes}function Ta(){Ea(Ia),Ea(_a)}function Aa(e,t,n){if(_a.current!==Ca)throw Error(o(168));Na(_a,t),Na(Ia,n)}function za(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(o(108,V(e)||"Unknown",a));return L({},n,r)}function Da(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ca,Pa=_a.current,Na(_a,e),Na(Ia,Ia.current),!0}function La(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=za(e,t,Pa),r.__reactInternalMemoizedMergedChildContext=e,Ea(Ia),Ea(_a),Na(_a,e)):Ea(Ia),Na(Ia,n)}var Fa=null,Ma=!1,Ua=!1;function Ba(e){null===Fa?Fa=[e]:Fa.push(e)}function $a(){if(!Ua&&null!==Fa){Ua=!0;var e=0,t=bt;try{var n=Fa;for(bt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Fa=null,Ma=!1}catch(t){throw null!==Fa&&(Fa=Fa.slice(e+1)),Ge(Xe,$a),t}finally{bt=t,Ua=!1}}return null}var Va=[],Ha=0,Wa=null,qa=0,Ga=[],Qa=0,Ya=null,Ka=1,Za="";function Ja(e,t){Va[Ha++]=qa,Va[Ha++]=Wa,Wa=e,qa=t}function Xa(e,t,n){Ga[Qa++]=Ka,Ga[Qa++]=Za,Ga[Qa++]=Ya,Ya=e;var r=Ka;e=Za;var a=32-it(r)-1;r&=~(1<<a),n+=1;var o=32-it(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,Ka=1<<32-it(t)+a|n<<a|r,Za=o+e}else Ka=1<<o|n<<a|r,Za=e}function eo(e){null!==e.return&&(Ja(e,1),Xa(e,1,0))}function to(e){for(;e===Wa;)Wa=Va[--Ha],Va[Ha]=null,qa=Va[--Ha],Va[Ha]=null;for(;e===Ya;)Ya=Ga[--Qa],Ga[Qa]=null,Za=Ga[--Qa],Ga[Qa]=null,Ka=Ga[--Qa],Ga[Qa]=null}var no=null,ro=null,ao=!1,oo=null;function io(e,t){var n=Ru(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function lo(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ua(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ya?{id:Ka,overflow:Za}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Ru(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function so(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function uo(e){if(ao){var t=ro;if(t){var n=t;if(!lo(e,t)){if(so(e))throw Error(o(418));t=ua(n.nextSibling);var r=no;t&&lo(e,t)?io(r,n):(e.flags=-4097&e.flags|2,ao=!1,no=e)}}else{if(so(e))throw Error(o(418));e.flags=-4097&e.flags|2,ao=!1,no=e}}}function co(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function fo(e){if(e!==no)return!1;if(!ao)return co(e),ao=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!na(e.type,e.memoizedProps)),t&&(t=ro)){if(so(e))throw po(),Error(o(418));for(;t;)io(e,t),t=ua(t.nextSibling)}if(co(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ua(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ua(e.stateNode.nextSibling):null;return!0}function po(){for(var e=ro;e;)e=ua(e.nextSibling)}function mo(){ro=no=null,ao=!1}function ho(e){null===oo?oo=[e]:oo.push(e)}var go=x.ReactCurrentBatchConfig;function vo(e,t){if(e&&e.defaultProps){for(var n in t=L({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var yo=ja(null),bo=null,xo=null,wo=null;function ko(){wo=xo=bo=null}function So(e){var t=yo.current;Ea(yo),e._currentValue=t}function jo(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Eo(e,t){bo=e,wo=xo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(xl=!0),e.firstContext=null)}function No(e){var t=e._currentValue;if(wo!==e)if(e={context:e,memoizedValue:t,next:null},null===xo){if(null===bo)throw Error(o(308));xo=e,bo.dependencies={lanes:0,firstContext:e}}else xo=xo.next=e;return t}var Co=null;function _o(e){null===Co?Co=[e]:Co.push(e)}function Io(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,_o(t)):(n.next=a.next,a.next=n),t.interleaved=n,Po(e,r)}function Po(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Oo=!1;function Ro(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function To(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ao(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&Is)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Po(e,n)}return null===(a=r.interleaved)?(t.next=t,_o(r)):(t.next=a.next,a.next=t),r.interleaved=t,Po(e,n)}function Do(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Lo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?a=o=i:o=o.next=i,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Fo(e,t,n,r){var a=e.updateQueue;Oo=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,u=s.next;s.next=null,null===i?o=u:i.next=u,i=s;var c=e.alternate;null!==c&&(l=(c=c.updateQueue).lastBaseUpdate)!==i&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s)}if(null!==o){var d=a.baseState;for(i=0,c=u=s=null,l=o;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,h=l;switch(f=t,p=n,h.tag){case 1:if("function"==typeof(m=h.payload)){d=m.call(p,d,f);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null==(f="function"==typeof(m=h.payload)?m.call(p,d,f):m))break e;d=L({},d,f);break e;case 2:Oo=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=a.effects)?a.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,i|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(f=l).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}if(null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{i|=a.lane,a=a.next}while(a!==t)}else null===o&&(a.shared.lanes=0);Ls|=i,e.lanes=i,e.memoizedState=d}}function Mo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!=typeof a)throw Error(o(191,a));a.call(r)}}}var Uo=(new r.Component).refs;function Bo(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:L({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var $o={isMounted:function(e){return!!(e=e._reactInternals)&&$e(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tu(),a=nu(e),o=Ao(r,a);o.payload=t,null!=n&&(o.callback=n),null!==(t=zo(e,o,a))&&(ru(t,e,a,r),Do(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tu(),a=nu(e),o=Ao(r,a);o.tag=1,o.payload=t,null!=n&&(o.callback=n),null!==(t=zo(e,o,a))&&(ru(t,e,a,r),Do(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tu(),r=nu(e),a=Ao(n,r);a.tag=2,null!=t&&(a.callback=t),null!==(t=zo(e,a,r))&&(ru(t,e,r,n),Do(t,e,r))}};function Vo(e,t,n,r,a,o,i){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,i):!(t.prototype&&t.prototype.isPureReactComponent&&sr(n,r)&&sr(a,o))}function Ho(e,t,n){var r=!1,a=Ca,o=t.contextType;return"object"==typeof o&&null!==o?o=No(o):(a=Ra(t)?Pa:_a.current,o=(r=null!=(r=t.contextTypes))?Oa(e,a):Ca),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=$o,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function Wo(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&$o.enqueueReplaceState(t,t.state,null)}function qo(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=Uo,Ro(e);var o=t.contextType;"object"==typeof o&&null!==o?a.context=No(o):(o=Ra(t)?Pa:_a.current,a.context=Oa(e,o)),a.state=e.memoizedState,"function"==typeof(o=t.getDerivedStateFromProps)&&(Bo(e,t,o,n),a.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof a.getSnapshotBeforeUpdate||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||(t=a.state,"function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&$o.enqueueReplaceState(a,a.state,null),Fo(e,n,a,r),a.state=e.memoizedState),"function"==typeof a.componentDidMount&&(e.flags|=4194308)}function Go(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var a=r,i=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=a.refs;t===Uo&&(t=a.refs={}),null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!=typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function Qo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yo(e){return(0,e._init)(e._payload)}function Ko(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Au(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Fu(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var o=n.type;return o===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"==typeof o&&null!==o&&o.$$typeof===R&&Yo(o)===t.type)?((r=a(t,n.props)).ref=Go(e,t,n),r.return=e,r):((r=zu(n.type,n.key,n.props,null,e.mode,r)).ref=Go(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Mu(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Du(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Fu(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case w:return(n=zu(t.type,t.key,t.props,null,e.mode,n)).ref=Go(e,null,t),n.return=e,n;case k:return(t=Mu(t,e.mode,n)).return=e,t;case R:return f(e,(0,t._init)(t._payload),n)}if(te(t)||z(t))return(t=Du(t,e.mode,n,null)).return=e,t;Qo(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==a?null:s(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===a?u(e,t,n,r):null;case k:return n.key===a?c(e,t,n,r):null;case R:return p(e,t,(a=n._init)(n._payload),r)}if(te(n)||z(n))return null!==a?null:d(e,t,n,r,null);Qo(e,n)}return null}function m(e,t,n,r,a){if("string"==typeof r&&""!==r||"number"==typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"==typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case k:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case R:return m(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||z(r))return d(t,e=e.get(n)||null,r,a,null);Qo(t,r)}return null}function h(a,o,l,s){for(var u=null,c=null,d=o,h=o=0,g=null;null!==d&&h<l.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var v=p(a,d,l[h],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(a,d),o=i(v,o,h),null===c?u=v:c.sibling=v,c=v,d=g}if(h===l.length)return n(a,d),ao&&Ja(a,h),u;if(null===d){for(;h<l.length;h++)null!==(d=f(a,l[h],s))&&(o=i(d,o,h),null===c?u=d:c.sibling=d,c=d);return ao&&Ja(a,h),u}for(d=r(a,d);h<l.length;h++)null!==(g=m(d,a,h,l[h],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?h:g.key),o=i(g,o,h),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach((function(e){return t(a,e)})),ao&&Ja(a,h),u}function g(a,l,s,u){var c=z(s);if("function"!=typeof c)throw Error(o(150));if(null==(s=c.call(s)))throw Error(o(151));for(var d=c=null,h=l,g=l=0,v=null,y=s.next();null!==h&&!y.done;g++,y=s.next()){h.index>g?(v=h,h=null):v=h.sibling;var b=p(a,h,y.value,u);if(null===b){null===h&&(h=v);break}e&&h&&null===b.alternate&&t(a,h),l=i(b,l,g),null===d?c=b:d.sibling=b,d=b,h=v}if(y.done)return n(a,h),ao&&Ja(a,g),c;if(null===h){for(;!y.done;g++,y=s.next())null!==(y=f(a,y.value,u))&&(l=i(y,l,g),null===d?c=y:d.sibling=y,d=y);return ao&&Ja(a,g),c}for(h=r(a,h);!y.done;g++,y=s.next())null!==(y=m(h,a,g,y.value,u))&&(e&&null!==y.alternate&&h.delete(null===y.key?g:y.key),l=i(y,l,g),null===d?c=y:d.sibling=y,d=y);return e&&h.forEach((function(e){return t(a,e)})),ao&&Ja(a,g),c}return function e(r,o,i,s){if("object"==typeof i&&null!==i&&i.type===S&&null===i.key&&(i=i.props.children),"object"==typeof i&&null!==i){switch(i.$$typeof){case w:e:{for(var u=i.key,c=o;null!==c;){if(c.key===u){if((u=i.type)===S){if(7===c.tag){n(r,c.sibling),(o=a(c,i.props.children)).return=r,r=o;break e}}else if(c.elementType===u||"object"==typeof u&&null!==u&&u.$$typeof===R&&Yo(u)===c.type){n(r,c.sibling),(o=a(c,i.props)).ref=Go(r,c,i),o.return=r,r=o;break e}n(r,c);break}t(r,c),c=c.sibling}i.type===S?((o=Du(i.props.children,r.mode,s,i.key)).return=r,r=o):((s=zu(i.type,i.key,i.props,null,r.mode,s)).ref=Go(r,o,i),s.return=r,r=s)}return l(r);case k:e:{for(c=i.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===i.containerInfo&&o.stateNode.implementation===i.implementation){n(r,o.sibling),(o=a(o,i.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Mu(i,r.mode,s)).return=r,r=o}return l(r);case R:return e(r,o,(c=i._init)(i._payload),s)}if(te(i))return h(r,o,i,s);if(z(i))return g(r,o,i,s);Qo(r,i)}return"string"==typeof i&&""!==i||"number"==typeof i?(i=""+i,null!==o&&6===o.tag?(n(r,o.sibling),(o=a(o,i)).return=r,r=o):(n(r,o),(o=Fu(i,r.mode,s)).return=r,r=o),l(r)):n(r,o)}}var Zo=Ko(!0),Jo=Ko(!1),Xo={},ei=ja(Xo),ti=ja(Xo),ni=ja(Xo);function ri(e){if(e===Xo)throw Error(o(174));return e}function ai(e,t){switch(Na(ni,t),Na(ti,e),Na(ei,Xo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ea(ei),Na(ei,t)}function oi(){Ea(ei),Ea(ti),Ea(ni)}function ii(e){ri(ni.current);var t=ri(ei.current),n=se(t,e.type);t!==n&&(Na(ti,e),Na(ei,n))}function li(e){ti.current===e&&(Ea(ei),Ea(ti))}var si=ja(0);function ui(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ci=[];function di(){for(var e=0;e<ci.length;e++)ci[e]._workInProgressVersionPrimary=null;ci.length=0}var fi=x.ReactCurrentDispatcher,pi=x.ReactCurrentBatchConfig,mi=0,hi=null,gi=null,vi=null,yi=!1,bi=!1,xi=0,wi=0;function ki(){throw Error(o(321))}function Si(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function ji(e,t,n,r,a,i){if(mi=i,hi=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fi.current=null===e||null===e.memoizedState?ll:sl,e=n(r,a),bi){i=0;do{if(bi=!1,xi=0,25<=i)throw Error(o(301));i+=1,vi=gi=null,t.updateQueue=null,fi.current=ul,e=n(r,a)}while(bi)}if(fi.current=il,t=null!==gi&&null!==gi.next,mi=0,vi=gi=hi=null,yi=!1,t)throw Error(o(300));return e}function Ei(){var e=0!==xi;return xi=0,e}function Ni(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===vi?hi.memoizedState=vi=e:vi=vi.next=e,vi}function Ci(){if(null===gi){var e=hi.alternate;e=null!==e?e.memoizedState:null}else e=gi.next;var t=null===vi?hi.memoizedState:vi.next;if(null!==t)vi=t,gi=e;else{if(null===e)throw Error(o(310));e={memoizedState:(gi=e).memoizedState,baseState:gi.baseState,baseQueue:gi.baseQueue,queue:gi.queue,next:null},null===vi?hi.memoizedState=vi=e:vi=vi.next=e}return vi}function _i(e,t){return"function"==typeof t?t(e):t}function Ii(e){var t=Ci(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=gi,a=r.baseQueue,i=n.pending;if(null!==i){if(null!==a){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(null!==a){i=a.next,r=r.baseState;var s=l=null,u=null,c=i;do{var d=c.lane;if((mi&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=f,l=r):u=u.next=f,hi.lanes|=d,Ls|=d}c=c.next}while(null!==c&&c!==i);null===u?l=r:u.next=s,lr(r,t.memoizedState)||(xl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{i=a.lane,hi.lanes|=i,Ls|=i,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Pi(e){var t=Ci(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{i=e(i,l.action),l=l.next}while(l!==a);lr(i,t.memoizedState)||(xl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Oi(){}function Ri(e,t){var n=hi,r=Ci(),a=t(),i=!lr(r.memoizedState,a);if(i&&(r.memoizedState=a,xl=!0),r=r.queue,Hi(zi.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==vi&&1&vi.memoizedState.tag){if(n.flags|=2048,Mi(9,Ai.bind(null,n,r,a,t),void 0,null),null===Ps)throw Error(o(349));0!=(30&mi)||Ti(n,t,a)}return a}function Ti(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=hi.updateQueue)?(t={lastEffect:null,stores:null},hi.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ai(e,t,n,r){t.value=n,t.getSnapshot=r,Di(t)&&Li(e)}function zi(e,t,n){return n((function(){Di(t)&&Li(e)}))}function Di(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(e){return!0}}function Li(e){var t=Po(e,1);null!==t&&ru(t,e,1,-1)}function Fi(e){var t=Ni();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_i,lastRenderedState:e},t.queue=e,e=e.dispatch=nl.bind(null,hi,e),[t.memoizedState,e]}function Mi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=hi.updateQueue)?(t={lastEffect:null,stores:null},hi.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ui(){return Ci().memoizedState}function Bi(e,t,n,r){var a=Ni();hi.flags|=e,a.memoizedState=Mi(1|t,n,void 0,void 0===r?null:r)}function $i(e,t,n,r){var a=Ci();r=void 0===r?null:r;var o=void 0;if(null!==gi){var i=gi.memoizedState;if(o=i.destroy,null!==r&&Si(r,i.deps))return void(a.memoizedState=Mi(t,n,o,r))}hi.flags|=e,a.memoizedState=Mi(1|t,n,o,r)}function Vi(e,t){return Bi(8390656,8,e,t)}function Hi(e,t){return $i(2048,8,e,t)}function Wi(e,t){return $i(4,2,e,t)}function qi(e,t){return $i(4,4,e,t)}function Gi(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Qi(e,t,n){return n=null!=n?n.concat([e]):null,$i(4,4,Gi.bind(null,t,e),n)}function Yi(){}function Ki(e,t){var n=Ci();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Si(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zi(e,t){var n=Ci();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Si(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ji(e,t,n){return 0==(21&mi)?(e.baseState&&(e.baseState=!1,xl=!0),e.memoizedState=n):(lr(n,t)||(n=ht(),hi.lanes|=n,Ls|=n,e.baseState=!0),t)}function Xi(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var r=pi.transition;pi.transition={};try{e(!1),t()}finally{bt=n,pi.transition=r}}function el(){return Ci().memoizedState}function tl(e,t,n){var r=nu(e);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rl(e)?al(t,n):null!==(n=Io(e,t,n,r))&&(ru(n,e,r,tu()),ol(n,t,r))}function nl(e,t,n){var r=nu(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rl(e))al(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,n);if(a.hasEagerState=!0,a.eagerState=l,lr(l,i)){var s=t.interleaved;return null===s?(a.next=a,_o(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(e){}null!==(n=Io(e,t,a,r))&&(ru(n,e,r,a=tu()),ol(n,t,r))}}function rl(e){var t=e.alternate;return e===hi||null!==t&&t===hi}function al(e,t){bi=yi=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ol(e,t,n){if(0!=(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var il={readContext:No,useCallback:ki,useContext:ki,useEffect:ki,useImperativeHandle:ki,useInsertionEffect:ki,useLayoutEffect:ki,useMemo:ki,useReducer:ki,useRef:ki,useState:ki,useDebugValue:ki,useDeferredValue:ki,useTransition:ki,useMutableSource:ki,useSyncExternalStore:ki,useId:ki,unstable_isNewReconciler:!1},ll={readContext:No,useCallback:function(e,t){return Ni().memoizedState=[e,void 0===t?null:t],e},useContext:No,useEffect:Vi,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,Bi(4194308,4,Gi.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Bi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Bi(4,2,e,t)},useMemo:function(e,t){var n=Ni();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ni();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=tl.bind(null,hi,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Ni().memoizedState=e},useState:Fi,useDebugValue:Yi,useDeferredValue:function(e){return Ni().memoizedState=e},useTransition:function(){var e=Fi(!1),t=e[0];return e=Xi.bind(null,e[1]),Ni().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=hi,a=Ni();if(ao){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Ps)throw Error(o(349));0!=(30&mi)||Ti(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Vi(zi.bind(null,r,i,e),[e]),r.flags|=2048,Mi(9,Ai.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ni(),t=Ps.identifierPrefix;if(ao){var n=Za;t=":"+t+"R"+(n=(Ka&~(1<<32-it(Ka)-1)).toString(32)+n),0<(n=xi++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=wi++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sl={readContext:No,useCallback:Ki,useContext:No,useEffect:Hi,useImperativeHandle:Qi,useInsertionEffect:Wi,useLayoutEffect:qi,useMemo:Zi,useReducer:Ii,useRef:Ui,useState:function(){return Ii(_i)},useDebugValue:Yi,useDeferredValue:function(e){return Ji(Ci(),gi.memoizedState,e)},useTransition:function(){return[Ii(_i)[0],Ci().memoizedState]},useMutableSource:Oi,useSyncExternalStore:Ri,useId:el,unstable_isNewReconciler:!1},ul={readContext:No,useCallback:Ki,useContext:No,useEffect:Hi,useImperativeHandle:Qi,useInsertionEffect:Wi,useLayoutEffect:qi,useMemo:Zi,useReducer:Pi,useRef:Ui,useState:function(){return Pi(_i)},useDebugValue:Yi,useDeferredValue:function(e){var t=Ci();return null===gi?t.memoizedState=e:Ji(t,gi.memoizedState,e)},useTransition:function(){return[Pi(_i)[0],Ci().memoizedState]},useMutableSource:Oi,useSyncExternalStore:Ri,useId:el,unstable_isNewReconciler:!1};function cl(e,t){try{var n="",r=t;do{n+=B(r),r=r.return}while(r);var a=n}catch(e){a="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:a,digest:null}}function dl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function fl(e,t){try{console.error(t.value)}catch(e){setTimeout((function(){throw e}))}}var pl="function"==typeof WeakMap?WeakMap:Map;function ml(e,t,n){(n=Ao(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ws||(Ws=!0,qs=r),fl(0,t)},n}function hl(e,t,n){(n=Ao(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){fl(0,t)}}var o=e.stateNode;return null!==o&&"function"==typeof o.componentDidCatch&&(n.callback=function(){fl(0,t),"function"!=typeof r&&(null===Gs?Gs=new Set([this]):Gs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function gl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new pl;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Nu.bind(null,e,t,n),t.then(e,e))}function vl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function yl(e,t,n,r,a){return 0==(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ao(-1,1)).tag=2,zo(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var bl=x.ReactCurrentOwner,xl=!1;function wl(e,t,n,r){t.child=null===e?Jo(t,null,n,r):Zo(t,e.child,n,r)}function kl(e,t,n,r,a){n=n.render;var o=t.ref;return Eo(t,a),r=ji(e,t,n,r,o,a),n=Ei(),null===e||xl?(ao&&n&&eo(t),t.flags|=1,wl(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Wl(e,t,a))}function Sl(e,t,n,r,a){if(null===e){var o=n.type;return"function"!=typeof o||Tu(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=zu(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,jl(e,t,o,r,a))}if(o=e.child,0==(e.lanes&a)){var i=o.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(i,r)&&e.ref===t.ref)return Wl(e,t,a)}return t.flags|=1,(e=Au(o,r)).ref=t.ref,e.return=t,t.child=e}function jl(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(sr(o,r)&&e.ref===t.ref){if(xl=!1,t.pendingProps=r=o,0==(e.lanes&a))return t.lanes=e.lanes,Wl(e,t,a);0!=(131072&e.flags)&&(xl=!0)}}return Cl(e,t,n,r,a)}function El(e,t,n){var r=t.pendingProps,a=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Na(As,Ts),Ts|=n;else{if(0==(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Na(As,Ts),Ts|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Na(As,Ts),Ts|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Na(As,Ts),Ts|=r;return wl(e,t,a,n),t.child}function Nl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cl(e,t,n,r,a){var o=Ra(n)?Pa:_a.current;return o=Oa(t,o),Eo(t,a),n=ji(e,t,n,r,o,a),r=Ei(),null===e||xl?(ao&&r&&eo(t),t.flags|=1,wl(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Wl(e,t,a))}function _l(e,t,n,r,a){if(Ra(n)){var o=!0;Da(t)}else o=!1;if(Eo(t,a),null===t.stateNode)Hl(e,t),Ho(t,n,r),qo(t,n,r,a),r=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,u=n.contextType;u="object"==typeof u&&null!==u?No(u):Oa(t,u=Ra(n)?Pa:_a.current);var c=n.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof i.getSnapshotBeforeUpdate;d||"function"!=typeof i.UNSAFE_componentWillReceiveProps&&"function"!=typeof i.componentWillReceiveProps||(l!==r||s!==u)&&Wo(t,i,r,u),Oo=!1;var f=t.memoizedState;i.state=f,Fo(t,r,i,a),s=t.memoizedState,l!==r||f!==s||Ia.current||Oo?("function"==typeof c&&(Bo(t,n,c,r),s=t.memoizedState),(l=Oo||Vo(t,n,l,r,f,s,u))?(d||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||("function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"==typeof i.componentDidMount&&(t.flags|=4194308)):("function"==typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):("function"==typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,To(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:vo(t.type,l),i.props=u,d=t.pendingProps,f=i.context,s="object"==typeof(s=n.contextType)&&null!==s?No(s):Oa(t,s=Ra(n)?Pa:_a.current);var p=n.getDerivedStateFromProps;(c="function"==typeof p||"function"==typeof i.getSnapshotBeforeUpdate)||"function"!=typeof i.UNSAFE_componentWillReceiveProps&&"function"!=typeof i.componentWillReceiveProps||(l!==d||f!==s)&&Wo(t,i,r,s),Oo=!1,f=t.memoizedState,i.state=f,Fo(t,r,i,a);var m=t.memoizedState;l!==d||f!==m||Ia.current||Oo?("function"==typeof p&&(Bo(t,n,p,r),m=t.memoizedState),(u=Oo||Vo(t,n,u,r,f,m,s)||!1)?(c||"function"!=typeof i.UNSAFE_componentWillUpdate&&"function"!=typeof i.componentWillUpdate||("function"==typeof i.componentWillUpdate&&i.componentWillUpdate(r,m,s),"function"==typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,m,s)),"function"==typeof i.componentDidUpdate&&(t.flags|=4),"function"==typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),i.props=r,i.state=m,i.context=s,r=u):("function"!=typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Il(e,t,n,r,o,a)}function Il(e,t,n,r,a,o){Nl(e,t);var i=0!=(128&t.flags);if(!r&&!i)return a&&La(t,n,!1),Wl(e,t,o);r=t.stateNode,bl.current=t;var l=i&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&i?(t.child=Zo(t,e.child,null,o),t.child=Zo(t,null,l,o)):wl(e,t,l,o),t.memoizedState=r.state,a&&La(t,n,!0),t.child}function Pl(e){var t=e.stateNode;t.pendingContext?Aa(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Aa(0,t.context,!1),ai(e,t.containerInfo)}function Ol(e,t,n,r,a){return mo(),ho(a),t.flags|=256,wl(e,t,n,r),t.child}var Rl,Tl,Al,zl,Dl={dehydrated:null,treeContext:null,retryLane:0};function Ll(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fl(e,t,n){var r,a=t.pendingProps,i=si.current,l=!1,s=0!=(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!=(2&i)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),Na(si,1&i),null===e)return uo(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,l?(a=t.mode,l=t.child,s={mode:"hidden",children:s},0==(1&a)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Lu(s,a,0,null),e=Du(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ll(n),t.memoizedState=Dl,e):Ml(t,s));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,a,i,l){if(n)return 256&t.flags?(t.flags&=-257,Ul(e,t,l,r=dl(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Lu({mode:"visible",children:r.children},a,0,null),(i=Du(i,a,l,null)).flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,0!=(1&t.mode)&&Zo(t,e.child,null,l),t.child.memoizedState=Ll(l),t.memoizedState=Dl,i);if(0==(1&t.mode))return Ul(e,t,l,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Ul(e,t,l,r=dl(i=Error(o(419)),r,void 0))}if(s=0!=(l&e.childLanes),xl||s){if(null!==(r=Ps)){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!=(a&(r.suspendedLanes|l))?0:a)&&a!==i.retryLane&&(i.retryLane=a,Po(e,a),ru(r,e,a,-1))}return gu(),Ul(e,t,l,r=dl(Error(o(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=_u.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,ro=ua(a.nextSibling),no=t,ao=!0,oo=null,null!==e&&(Ga[Qa++]=Ka,Ga[Qa++]=Za,Ga[Qa++]=Ya,Ka=e.id,Za=e.overflow,Ya=t),(t=Ml(t,r.children)).flags|=4096,t)}(e,t,s,a,r,i,n);if(l){l=a.fallback,s=t.mode,r=(i=e.child).sibling;var u={mode:"hidden",children:a.children};return 0==(1&s)&&t.child!==i?((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null):(a=Au(i,u)).subtreeFlags=14680064&i.subtreeFlags,null!==r?l=Au(r,l):(l=Du(l,s,n,null)).flags|=2,l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,s=null===(s=e.child.memoizedState)?Ll(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Dl,a}return e=(l=e.child).sibling,a=Au(l,{mode:"visible",children:a.children}),0==(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Ml(e,t){return(t=Lu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Ul(e,t,n,r){return null!==r&&ho(r),Zo(t,e.child,null,n),(e=Ml(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Bl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),jo(e.return,t,n)}function $l(e,t,n,r,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function Vl(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(wl(e,t,r.children,n),0!=(2&(r=si.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Bl(e,n,t);else if(19===e.tag)Bl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Na(si,r),0==(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===ui(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),$l(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===ui(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}$l(t,!0,n,null,o);break;case"together":$l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hl(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ls|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Au(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Au(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function ql(e,t){if(!ao)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Gl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ql(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gl(t),null;case 1:case 17:return Ra(t.type)&&Ta(),Gl(t),null;case 3:return r=t.stateNode,oi(),Ea(Ia),Ea(_a),di(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fo(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==oo&&(lu(oo),oo=null))),Tl(e,t),Gl(t),null;case 5:li(t);var a=ri(ni.current);if(n=t.type,null!==e&&null!=t.stateNode)Al(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Gl(t),null}if(e=ri(ei.current),fo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[fa]=t,r[pa]=i,e=0!=(1&t.mode),n){case"dialog":Mr("cancel",r),Mr("close",r);break;case"iframe":case"object":case"embed":Mr("load",r);break;case"video":case"audio":for(a=0;a<zr.length;a++)Mr(zr[a],r);break;case"source":Mr("error",r);break;case"img":case"image":case"link":Mr("error",r),Mr("load",r);break;case"details":Mr("toggle",r);break;case"input":K(r,i),Mr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Mr("invalid",r);break;case"textarea":ae(r,i),Mr("invalid",r)}for(var s in ye(n,i),a=null,i)if(i.hasOwnProperty(s)){var u=i[s];"children"===s?"string"==typeof u?r.textContent!==u&&(!0!==i.suppressHydrationWarning&&Jr(r.textContent,u,e),a=["children",u]):"number"==typeof u&&r.textContent!==""+u&&(!0!==i.suppressHydrationWarning&&Jr(r.textContent,u,e),a=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Mr("scroll",r)}switch(n){case"input":q(r),X(r,i,!0);break;case"textarea":q(r),ie(r);break;case"select":case"option":break;default:"function"==typeof i.onClick&&(r.onclick=Xr)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[fa]=t,e[pa]=r,Rl(e,t,!1,!1),t.stateNode=e;e:{switch(s=be(n,r),n){case"dialog":Mr("cancel",e),Mr("close",e),a=r;break;case"iframe":case"object":case"embed":Mr("load",e),a=r;break;case"video":case"audio":for(a=0;a<zr.length;a++)Mr(zr[a],e);a=r;break;case"source":Mr("error",e),a=r;break;case"img":case"image":case"link":Mr("error",e),Mr("load",e),a=r;break;case"details":Mr("toggle",e),a=r;break;case"input":K(e,r),a=Y(e,r),Mr("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=L({},r,{value:void 0}),Mr("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Mr("invalid",e)}for(i in ye(n,a),u=a)if(u.hasOwnProperty(i)){var c=u[i];"style"===i?ge(e,c):"dangerouslySetInnerHTML"===i?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===i?"string"==typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"==typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(l.hasOwnProperty(i)?null!=c&&"onScroll"===i&&Mr("scroll",e):null!=c&&b(e,i,c,s))}switch(n){case"input":q(e),X(e,r,!1);break;case"textarea":q(e),ie(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?ne(e,!!r.multiple,i,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof a.onClick&&(e.onclick=Xr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Gl(t),null;case 6:if(e&&null!=t.stateNode)zl(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(o(166));if(n=ri(ni.current),ri(ei.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[fa]=t,(i=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Jr(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!=(1&e.mode))}i&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fa]=t,t.stateNode=r}return Gl(t),null;case 13:if(Ea(si),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ao&&null!==ro&&0!=(1&t.mode)&&0==(128&t.flags))po(),mo(),t.flags|=98560,i=!1;else if(i=fo(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(o(317));i[fa]=t}else mo(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Gl(t),i=!1}else null!==oo&&(lu(oo),oo=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!=(128&t.flags)?(t.lanes=n,t):((r=null!==r)!=(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&si.current)?0===zs&&(zs=3):gu())),null!==t.updateQueue&&(t.flags|=4),Gl(t),null);case 4:return oi(),Tl(e,t),null===e&&$r(t.stateNode.containerInfo),Gl(t),null;case 10:return So(t.type._context),Gl(t),null;case 19:if(Ea(si),null===(i=t.memoizedState))return Gl(t),null;if(r=0!=(128&t.flags),null===(s=i.rendering))if(r)ql(i,!1);else{if(0!==zs||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ui(e))){for(t.flags|=128,ql(i,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(i=n).flags&=14680066,null===(s=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Na(si,1&si.current|2),t.child}e=e.sibling}null!==i.tail&&Ze()>Vs&&(t.flags|=128,r=!0,ql(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ui(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),ql(i,!0),null===i.tail&&"hidden"===i.tailMode&&!s.alternate&&!ao)return Gl(t),null}else 2*Ze()-i.renderingStartTime>Vs&&1073741824!==n&&(t.flags|=128,r=!0,ql(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=i.last)?n.sibling=s:t.child=s,i.last=s)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ze(),t.sibling=null,n=si.current,Na(si,r?1&n|2:1&n),t):(Gl(t),null);case 22:case 23:return fu(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&Ts)&&(Gl(t),6&t.subtreeFlags&&(t.flags|=8192)):Gl(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Yl(e,t){switch(to(t),t.tag){case 1:return Ra(t.type)&&Ta(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return oi(),Ea(Ia),Ea(_a),di(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return li(t),null;case 13:if(Ea(si),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));mo()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ea(si),null;case 4:return oi(),null;case 10:return So(t.type._context),null;case 22:case 23:return fu(),null;default:return null}}Rl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Tl=function(){},Al=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,ri(ei.current);var o,i=null;switch(n){case"input":a=Y(e,a),r=Y(e,r),i=[];break;case"select":a=L({},a,{value:void 0}),r=L({},r,{value:void 0}),i=[];break;case"textarea":a=re(e,a),r=re(e,r),i=[];break;default:"function"!=typeof a.onClick&&"function"==typeof r.onClick&&(e.onclick=Xr)}for(c in ye(n,r),n=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var s=a[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(i=i||[]).push(c,u)):"children"===c?"string"!=typeof u&&"number"!=typeof u||(i=i||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Mr("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}},zl=function(e,t,n,r){n!==r&&(t.flags|=4)};var Kl=!1,Zl=!1,Jl="function"==typeof WeakSet?WeakSet:Set,Xl=null;function es(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(n){Eu(e,t,n)}else n.current=null}function ts(e,t,n){try{n()}catch(n){Eu(e,t,n)}}var ns=!1;function rs(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,void 0!==o&&ts(t,n,o)}a=a.next}while(a!==r)}}function as(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function os(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function is(e){var t=e.alternate;null!==t&&(e.alternate=null,is(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&null!==(t=e.stateNode)&&(delete t[fa],delete t[pa],delete t[ha],delete t[ga],delete t[va]),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ls(e){return 5===e.tag||3===e.tag||4===e.tag}function ss(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ls(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Xr));else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}function cs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cs(e,t,n),e=e.sibling;null!==e;)cs(e,t,n),e=e.sibling}var ds=null,fs=!1;function ps(e,t,n){for(n=n.child;null!==n;)ms(e,t,n),n=n.sibling}function ms(e,t,n){if(ot&&"function"==typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(at,n)}catch(e){}switch(n.tag){case 5:Zl||es(n,t);case 6:var r=ds,a=fs;ds=null,ps(e,t,n),fs=a,null!==(ds=r)&&(fs?(e=ds,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):ds.removeChild(n.stateNode));break;case 18:null!==ds&&(fs?(e=ds,n=n.stateNode,8===e.nodeType?sa(e.parentNode,n):1===e.nodeType&&sa(e,n),$t(e)):sa(ds,n.stateNode));break;case 4:r=ds,a=fs,ds=n.stateNode.containerInfo,fs=!0,ps(e,t,n),ds=r,fs=a;break;case 0:case 11:case 14:case 15:if(!Zl&&null!==(r=n.updateQueue)&&null!==(r=r.lastEffect)){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,void 0!==i&&(0!=(2&o)||0!=(4&o))&&ts(n,t,i),a=a.next}while(a!==r)}ps(e,t,n);break;case 1:if(!Zl&&(es(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Eu(n,t,e)}ps(e,t,n);break;case 21:ps(e,t,n);break;case 22:1&n.mode?(Zl=(r=Zl)||null!==n.memoizedState,ps(e,t,n),Zl=r):ps(e,t,n);break;default:ps(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Jl),t.forEach((function(t){var r=Iu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function gs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:ds=s.stateNode,fs=!1;break e;case 3:case 4:ds=s.stateNode.containerInfo,fs=!0;break e}s=s.return}if(null===ds)throw Error(o(160));ms(i,l,a),ds=null,fs=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(e){Eu(a,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)vs(t,e),t=t.sibling}function vs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gs(t,e),ys(e),4&r){try{rs(3,e,e.return),as(3,e)}catch(t){Eu(e,e.return,t)}try{rs(5,e,e.return)}catch(t){Eu(e,e.return,t)}}break;case 1:gs(t,e),ys(e),512&r&&null!==n&&es(n,n.return);break;case 5:if(gs(t,e),ys(e),512&r&&null!==n&&es(n,n.return),32&e.flags){var a=e.stateNode;try{fe(a,"")}catch(t){Eu(e,e.return,t)}}if(4&r&&null!=(a=e.stateNode)){var i=e.memoizedProps,l=null!==n?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===i.type&&null!=i.name&&Z(a,i),be(s,l);var c=be(s,i);for(l=0;l<u.length;l+=2){var d=u[l],f=u[l+1];"style"===d?ge(a,f):"dangerouslySetInnerHTML"===d?de(a,f):"children"===d?fe(a,f):b(a,d,f,c)}switch(s){case"input":J(a,i);break;case"textarea":oe(a,i);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var m=i.value;null!=m?ne(a,!!i.multiple,m,!1):p!==!!i.multiple&&(null!=i.defaultValue?ne(a,!!i.multiple,i.defaultValue,!0):ne(a,!!i.multiple,i.multiple?[]:"",!1))}a[pa]=i}catch(t){Eu(e,e.return,t)}}break;case 6:if(gs(t,e),ys(e),4&r){if(null===e.stateNode)throw Error(o(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(t){Eu(e,e.return,t)}}break;case 3:if(gs(t,e),ys(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{$t(t.containerInfo)}catch(t){Eu(e,e.return,t)}break;case 4:default:gs(t,e),ys(e);break;case 13:gs(t,e),ys(e),8192&(a=e.child).flags&&(i=null!==a.memoizedState,a.stateNode.isHidden=i,!i||null!==a.alternate&&null!==a.alternate.memoizedState||($s=Ze())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Zl=(c=Zl)||d,gs(t,e),Zl=c):gs(t,e),ys(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!=(1&e.mode))for(Xl=e,d=e.child;null!==d;){for(f=Xl=d;null!==Xl;){switch(m=(p=Xl).child,p.tag){case 0:case 11:case 14:case 15:rs(4,p,p.return);break;case 1:es(p,p.return);var h=p.stateNode;if("function"==typeof h.componentWillUnmount){r=p,n=p.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){Eu(r,n,e)}}break;case 5:es(p,p.return);break;case 22:if(null!==p.memoizedState){ks(f);continue}}null!==m?(m.return=p,Xl=m):ks(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{a=f.stateNode,c?"function"==typeof(i=a.style).setProperty?i.setProperty("display","none","important"):i.display="none":(s=f.stateNode,l=null!=(u=f.memoizedProps.style)&&u.hasOwnProperty("display")?u.display:null,s.style.display=he("display",l))}catch(t){Eu(e,e.return,t)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(t){Eu(e,e.return,t)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:gs(t,e),ys(e),4&r&&hs(e);case 21:}}function ys(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(ls(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(fe(a,""),r.flags&=-33),cs(e,ss(e),a);break;case 3:case 4:var i=r.stateNode.containerInfo;us(e,ss(e),i);break;default:throw Error(o(161))}}catch(t){Eu(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function bs(e,t,n){Xl=e,xs(e,t,n)}function xs(e,t,n){for(var r=0!=(1&e.mode);null!==Xl;){var a=Xl,o=a.child;if(22===a.tag&&r){var i=null!==a.memoizedState||Kl;if(!i){var l=a.alternate,s=null!==l&&null!==l.memoizedState||Zl;l=Kl;var u=Zl;if(Kl=i,(Zl=s)&&!u)for(Xl=a;null!==Xl;)s=(i=Xl).child,22===i.tag&&null!==i.memoizedState?Ss(a):null!==s?(s.return=i,Xl=s):Ss(a);for(;null!==o;)Xl=o,xs(o,t,n),o=o.sibling;Xl=a,Kl=l,Zl=u}ws(e)}else 0!=(8772&a.subtreeFlags)&&null!==o?(o.return=a,Xl=o):ws(e)}}function ws(e){for(;null!==Xl;){var t=Xl;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Zl||as(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Zl)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:vo(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&Mo(t,i,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Mo(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&$t(f)}}}break;default:throw Error(o(163))}Zl||512&t.flags&&os(t)}catch(e){Eu(t,t.return,e)}}if(t===e){Xl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Xl=n;break}Xl=t.return}}function ks(e){for(;null!==Xl;){var t=Xl;if(t===e){Xl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Xl=n;break}Xl=t.return}}function Ss(e){for(;null!==Xl;){var t=Xl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{as(4,t)}catch(e){Eu(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(e){Eu(t,a,e)}}var o=t.return;try{os(t)}catch(e){Eu(t,o,e)}break;case 5:var i=t.return;try{os(t)}catch(e){Eu(t,i,e)}}}catch(e){Eu(t,t.return,e)}if(t===e){Xl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Xl=l;break}Xl=t.return}}var js,Es=Math.ceil,Ns=x.ReactCurrentDispatcher,Cs=x.ReactCurrentOwner,_s=x.ReactCurrentBatchConfig,Is=0,Ps=null,Os=null,Rs=0,Ts=0,As=ja(0),zs=0,Ds=null,Ls=0,Fs=0,Ms=0,Us=null,Bs=null,$s=0,Vs=1/0,Hs=null,Ws=!1,qs=null,Gs=null,Qs=!1,Ys=null,Ks=0,Zs=0,Js=null,Xs=-1,eu=0;function tu(){return 0!=(6&Is)?Ze():-1!==Xs?Xs:Xs=Ze()}function nu(e){return 0==(1&e.mode)?1:0!=(2&Is)&&0!==Rs?Rs&-Rs:null!==go.transition?(0===eu&&(eu=ht()),eu):0!==(e=bt)?e:e=void 0===(e=window.event)?16:Kt(e.type)}function ru(e,t,n,r){if(50<Zs)throw Zs=0,Js=null,Error(o(185));vt(e,n,r),0!=(2&Is)&&e===Ps||(e===Ps&&(0==(2&Is)&&(Fs|=n),4===zs&&su(e,Rs)),au(e,r),1===n&&0===Is&&0==(1&t.mode)&&(Vs=Ze()+500,Ma&&$a()))}function au(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-it(o),l=1<<i,s=a[i];-1===s?0!=(l&n)&&0==(l&r)||(a[i]=pt(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}(e,t);var r=ft(e,e===Ps?Rs:0);if(0===r)null!==n&&Qe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Qe(n),1===t)0===e.tag?function(e){Ma=!0,Ba(e)}(uu.bind(null,e)):Ba(uu.bind(null,e)),ia((function(){0==(6&Is)&&$a()})),n=null;else{switch(xt(r)){case 1:n=Xe;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Pu(n,ou.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ou(e,t){if(Xs=-1,eu=0,0!=(6&Is))throw Error(o(327));var n=e.callbackNode;if(Su()&&e.callbackNode!==n)return null;var r=ft(e,e===Ps?Rs:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=vu(e,r);else{t=r;var a=Is;Is|=2;var i=hu();for(Ps===e&&Rs===t||(Hs=null,Vs=Ze()+500,pu(e,t));;)try{bu();break}catch(t){mu(e,t)}ko(),Ns.current=i,Is=a,null!==Os?t=0:(Ps=null,Rs=0,t=zs)}if(0!==t){if(2===t&&0!==(a=mt(e))&&(r=a,t=iu(e,a)),1===t)throw n=Ds,pu(e,0),su(e,r),au(e,Ze()),n;if(6===t)su(e,r);else{if(a=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!lr(o(),a))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=vu(e,r))&&0!==(i=mt(e))&&(r=i,t=iu(e,i)),1===t))throw n=Ds,pu(e,0),su(e,r),au(e,Ze()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:ku(e,Bs,Hs);break;case 3:if(su(e,r),(130023424&r)===r&&10<(t=$s+500-Ze())){if(0!==ft(e,0))break;if(((a=e.suspendedLanes)&r)!==r){tu(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ra(ku.bind(null,e,Bs,Hs),t);break}ku(e,Bs,Hs);break;case 4:if(su(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-it(r);i=1<<l,(l=t[l])>a&&(a=l),r&=~i}if(r=a,10<(r=(120>(r=Ze()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Es(r/1960))-r)){e.timeoutHandle=ra(ku.bind(null,e,Bs,Hs),r);break}ku(e,Bs,Hs);break;default:throw Error(o(329))}}}return au(e,Ze()),e.callbackNode===n?ou.bind(null,e):null}function iu(e,t){var n=Us;return e.current.memoizedState.isDehydrated&&(pu(e,t).flags|=256),2!==(e=vu(e,t))&&(t=Bs,Bs=n,null!==t&&lu(t)),e}function lu(e){null===Bs?Bs=e:Bs.push.apply(Bs,e)}function su(e,t){for(t&=~Ms,t&=~Fs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function uu(e){if(0!=(6&Is))throw Error(o(327));Su();var t=ft(e,0);if(0==(1&t))return au(e,Ze()),null;var n=vu(e,t);if(0!==e.tag&&2===n){var r=mt(e);0!==r&&(t=r,n=iu(e,r))}if(1===n)throw n=Ds,pu(e,0),su(e,t),au(e,Ze()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ku(e,Bs,Hs),au(e,Ze()),null}function cu(e,t){var n=Is;Is|=1;try{return e(t)}finally{0===(Is=n)&&(Vs=Ze()+500,Ma&&$a())}}function du(e){null!==Ys&&0===Ys.tag&&0==(6&Is)&&Su();var t=Is;Is|=1;var n=_s.transition,r=bt;try{if(_s.transition=null,bt=1,e)return e()}finally{bt=r,_s.transition=n,0==(6&(Is=t))&&$a()}}function fu(){Ts=As.current,Ea(As)}function pu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,aa(n)),null!==Os)for(n=Os.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Ta();break;case 3:oi(),Ea(Ia),Ea(_a),di();break;case 5:li(r);break;case 4:oi();break;case 13:case 19:Ea(si);break;case 10:So(r.type._context);break;case 22:case 23:fu()}n=n.return}if(Ps=e,Os=e=Au(e.current,null),Rs=Ts=t,zs=0,Ds=null,Ms=Fs=Ls=0,Bs=Us=null,null!==Co){for(t=0;t<Co.length;t++)if(null!==(r=(n=Co[t]).interleaved)){n.interleaved=null;var a=r.next,o=n.pending;if(null!==o){var i=o.next;o.next=a,r.next=i}n.pending=r}Co=null}return e}function mu(e,t){for(;;){var n=Os;try{if(ko(),fi.current=il,yi){for(var r=hi.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}yi=!1}if(mi=0,vi=gi=hi=null,bi=!1,xi=0,Cs.current=null,null===n||null===n.return){zs=1,Ds=t,Os=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=Rs,s.flags|=32768,null!==u&&"object"==typeof u&&"function"==typeof u.then){var c=u,d=s,f=d.tag;if(0==(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=vl(l);if(null!==m){m.flags&=-257,yl(m,l,s,0,t),1&m.mode&&gl(i,c,t),u=c;var h=(t=m).updateQueue;if(null===h){var g=new Set;g.add(u),t.updateQueue=g}else h.add(u);break e}if(0==(1&t)){gl(i,c,t),gu();break e}u=Error(o(426))}else if(ao&&1&s.mode){var v=vl(l);if(null!==v){0==(65536&v.flags)&&(v.flags|=256),yl(v,l,s,0,t),ho(cl(u,s));break e}}i=u=cl(u,s),4!==zs&&(zs=2),null===Us?Us=[i]:Us.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,Lo(i,ml(0,u,t));break e;case 1:s=u;var y=i.type,b=i.stateNode;if(0==(128&i.flags)&&("function"==typeof y.getDerivedStateFromError||null!==b&&"function"==typeof b.componentDidCatch&&(null===Gs||!Gs.has(b)))){i.flags|=65536,t&=-t,i.lanes|=t,Lo(i,hl(i,s,t));break e}}i=i.return}while(null!==i)}wu(n)}catch(e){t=e,Os===n&&null!==n&&(Os=n=n.return);continue}break}}function hu(){var e=Ns.current;return Ns.current=il,null===e?il:e}function gu(){0!==zs&&3!==zs&&2!==zs||(zs=4),null===Ps||0==(268435455&Ls)&&0==(268435455&Fs)||su(Ps,Rs)}function vu(e,t){var n=Is;Is|=2;var r=hu();for(Ps===e&&Rs===t||(Hs=null,pu(e,t));;)try{yu();break}catch(t){mu(e,t)}if(ko(),Is=n,Ns.current=r,null!==Os)throw Error(o(261));return Ps=null,Rs=0,zs}function yu(){for(;null!==Os;)xu(Os)}function bu(){for(;null!==Os&&!Ye();)xu(Os)}function xu(e){var t=js(e.alternate,e,Ts);e.memoizedProps=e.pendingProps,null===t?wu(e):Os=t,Cs.current=null}function wu(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=Ql(n,t,Ts)))return void(Os=n)}else{if(null!==(n=Yl(n,t)))return n.flags&=32767,void(Os=n);if(null===e)return zs=6,void(Os=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Os=t);Os=t=e}while(null!==t);0===zs&&(zs=5)}function ku(e,t,n){var r=bt,a=_s.transition;try{_s.transition=null,bt=1,function(e,t,n,r){do{Su()}while(null!==Ys);if(0!=(6&Is))throw Error(o(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-it(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}(e,i),e===Ps&&(Os=Ps=null,Rs=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||Qs||(Qs=!0,Pu(tt,(function(){return Su(),null}))),i=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||i){i=_s.transition,_s.transition=null;var l=bt;bt=1;var s=Is;Is|=4,Cs.current=null,function(e,t){if(ea=Ht,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(e){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var m;f!==n||0!==a&&3!==f.nodeType||(s=l+a),f!==i||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(m=f.firstChild);)p=f,f=m;for(;;){if(f===e)break t;if(p===n&&++c===a&&(s=l),p===i&&++d===r&&(u=l),null!==(m=f.nextSibling))break;p=(f=p).parentNode}f=m}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},Ht=!1,Xl=t;null!==Xl;)if(e=(t=Xl).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,Xl=e;else for(;null!==Xl;){t=Xl;try{var h=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==h){var g=h.memoizedProps,v=h.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:vo(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(o(163))}}catch(e){Eu(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,Xl=e;break}Xl=t.return}h=ns,ns=!1}(e,n),vs(n,e),mr(ta),Ht=!!ea,ta=ea=null,e.current=n,bs(n,e,a),Ke(),Is=s,bt=l,_s.transition=i}else e.current=n;if(Qs&&(Qs=!1,Ys=e,Ks=a),0===(i=e.pendingLanes)&&(Gs=null),function(e){if(ot&&"function"==typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(at,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode),au(e,Ze()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)r((a=t[n]).value,{componentStack:a.stack,digest:a.digest});if(Ws)throw Ws=!1,e=qs,qs=null,e;0!=(1&Ks)&&0!==e.tag&&Su(),0!=(1&(i=e.pendingLanes))?e===Js?Zs++:(Zs=0,Js=e):Zs=0,$a()}(e,t,n,r)}finally{_s.transition=a,bt=r}return null}function Su(){if(null!==Ys){var e=xt(Ks),t=_s.transition,n=bt;try{if(_s.transition=null,bt=16>e?16:e,null===Ys)var r=!1;else{if(e=Ys,Ys=null,Ks=0,0!=(6&Is))throw Error(o(331));var a=Is;for(Is|=4,Xl=e.current;null!==Xl;){var i=Xl,l=i.child;if(0!=(16&Xl.flags)){var s=i.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Xl=c;null!==Xl;){var d=Xl;switch(d.tag){case 0:case 11:case 15:rs(8,d,i)}var f=d.child;if(null!==f)f.return=d,Xl=f;else for(;null!==Xl;){var p=(d=Xl).sibling,m=d.return;if(is(d),d===c){Xl=null;break}if(null!==p){p.return=m,Xl=p;break}Xl=m}}}var h=i.alternate;if(null!==h){var g=h.child;if(null!==g){h.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Xl=i}}if(0!=(2064&i.subtreeFlags)&&null!==l)l.return=i,Xl=l;else e:for(;null!==Xl;){if(0!=(2048&(i=Xl).flags))switch(i.tag){case 0:case 11:case 15:rs(9,i,i.return)}var y=i.sibling;if(null!==y){y.return=i.return,Xl=y;break e}Xl=i.return}}var b=e.current;for(Xl=b;null!==Xl;){var x=(l=Xl).child;if(0!=(2064&l.subtreeFlags)&&null!==x)x.return=l,Xl=x;else e:for(l=b;null!==Xl;){if(0!=(2048&(s=Xl).flags))try{switch(s.tag){case 0:case 11:case 15:as(9,s)}}catch(e){Eu(s,s.return,e)}if(s===l){Xl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Xl=w;break e}Xl=s.return}}if(Is=a,$a(),ot&&"function"==typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(at,e)}catch(e){}r=!0}return r}finally{bt=n,_s.transition=t}}return!1}function ju(e,t,n){e=zo(e,t=ml(0,t=cl(n,t),1),1),t=tu(),null!==e&&(vt(e,1,t),au(e,t))}function Eu(e,t,n){if(3===e.tag)ju(e,e,n);else for(;null!==t;){if(3===t.tag){ju(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Gs||!Gs.has(r))){t=zo(t,e=hl(t,e=cl(n,e),1),1),e=tu(),null!==t&&(vt(t,1,e),au(t,e));break}}t=t.return}}function Nu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=tu(),e.pingedLanes|=e.suspendedLanes&n,Ps===e&&(Rs&n)===n&&(4===zs||3===zs&&(130023424&Rs)===Rs&&500>Ze()-$s?pu(e,0):Ms|=n),au(e,t)}function Cu(e,t){0===t&&(0==(1&e.mode)?t=1:(t=ct,0==(130023424&(ct<<=1))&&(ct=4194304)));var n=tu();null!==(e=Po(e,t))&&(vt(e,t,n),au(e,n))}function _u(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Cu(e,n)}function Iu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),Cu(e,n)}function Pu(e,t){return Ge(e,t)}function Ou(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ru(e,t,n,r){return new Ou(e,t,n,r)}function Tu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Au(e,t){var n=e.alternate;return null===n?((n=Ru(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zu(e,t,n,r,a,i){var l=2;if(r=e,"function"==typeof e)Tu(e)&&(l=1);else if("string"==typeof e)l=5;else e:switch(e){case S:return Du(n.children,a,i,t);case j:l=8,a|=8;break;case E:return(e=Ru(12,n,t,2|a)).elementType=E,e.lanes=i,e;case I:return(e=Ru(13,n,t,a)).elementType=I,e.lanes=i,e;case P:return(e=Ru(19,n,t,a)).elementType=P,e.lanes=i,e;case T:return Lu(n,a,i,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case N:l=10;break e;case C:l=9;break e;case _:l=11;break e;case O:l=14;break e;case R:l=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Ru(l,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function Du(e,t,n,r){return(e=Ru(7,e,r,t)).lanes=n,e}function Lu(e,t,n,r){return(e=Ru(22,e,r,t)).elementType=T,e.lanes=n,e.stateNode={isHidden:!1},e}function Fu(e,t,n){return(e=Ru(6,e,null,t)).lanes=n,e}function Mu(e,t,n){return(t=Ru(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Uu(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Bu(e,t,n,r,a,o,i,l,s){return e=new Uu(e,t,n,l,s),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Ru(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ro(o),e}function $u(e){if(!e)return Ca;e:{if($e(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ra(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(Ra(n))return za(e,n,t)}return t}function Vu(e,t,n,r,a,o,i,l,s){return(e=Bu(n,r,!0,e,0,o,0,l,s)).context=$u(null),n=e.current,(o=Ao(r=tu(),a=nu(n))).callback=null!=t?t:null,zo(n,o,a),e.current.lanes=a,vt(e,a,r),au(e,r),e}function Hu(e,t,n,r){var a=t.current,o=tu(),i=nu(a);return n=$u(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ao(o,i)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=zo(a,t,i))&&(ru(e,a,i,o),Do(e,a,i)),i}function Wu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function qu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Gu(e,t){qu(e,t),(e=e.alternate)&&qu(e,t)}js=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ia.current)xl=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return xl=!1,function(e,t,n){switch(t.tag){case 3:Pl(t),mo();break;case 5:ii(t);break;case 1:Ra(t.type)&&Da(t);break;case 4:ai(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Na(yo,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Na(si,1&si.current),t.flags|=128,null):0!=(n&t.child.childLanes)?Fl(e,t,n):(Na(si,1&si.current),null!==(e=Wl(e,t,n))?e.sibling:null);Na(si,1&si.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return Vl(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Na(si,si.current),r)break;return null;case 22:case 23:return t.lanes=0,El(e,t,n)}return Wl(e,t,n)}(e,t,n);xl=0!=(131072&e.flags)}else xl=!1,ao&&0!=(1048576&t.flags)&&Xa(t,qa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hl(e,t),e=t.pendingProps;var a=Oa(t,_a.current);Eo(t,n),a=ji(null,t,r,e,a,n);var i=Ei();return t.flags|=1,"object"==typeof a&&null!==a&&"function"==typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ra(r)?(i=!0,Da(t)):i=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Ro(t),a.updater=$o,t.stateNode=a,a._reactInternals=t,qo(t,r,e,n),t=Il(null,t,r,!0,i,n)):(t.tag=0,ao&&i&&eo(t),wl(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hl(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"==typeof e)return Tu(e)?1:0;if(null!=e){if((e=e.$$typeof)===_)return 11;if(e===O)return 14}return 2}(r),e=vo(r,e),a){case 0:t=Cl(null,t,r,e,n);break e;case 1:t=_l(null,t,r,e,n);break e;case 11:t=kl(null,t,r,e,n);break e;case 14:t=Sl(null,t,r,vo(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,Cl(e,t,r,a=t.elementType===r?a:vo(r,a),n);case 1:return r=t.type,a=t.pendingProps,_l(e,t,r,a=t.elementType===r?a:vo(r,a),n);case 3:e:{if(Pl(t),null===e)throw Error(o(387));r=t.pendingProps,a=(i=t.memoizedState).element,To(e,t),Fo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Ol(e,t,r,n,a=cl(Error(o(423)),t));break e}if(r!==a){t=Ol(e,t,r,n,a=cl(Error(o(424)),t));break e}for(ro=ua(t.stateNode.containerInfo.firstChild),no=t,ao=!0,oo=null,n=Jo(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(mo(),r===a){t=Wl(e,t,n);break e}wl(e,t,r,n)}t=t.child}return t;case 5:return ii(t),null===e&&uo(t),r=t.type,a=t.pendingProps,i=null!==e?e.memoizedProps:null,l=a.children,na(r,a)?l=null:null!==i&&na(r,i)&&(t.flags|=32),Nl(e,t),wl(e,t,l,n),t.child;case 6:return null===e&&uo(t),null;case 13:return Fl(e,t,n);case 4:return ai(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=Zo(t,null,r,n):wl(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,kl(e,t,r,a=t.elementType===r?a:vo(r,a),n);case 7:return wl(e,t,t.pendingProps,n),t.child;case 8:case 12:return wl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,Na(yo,r._currentValue),r._currentValue=l,null!==i)if(lr(i.value,l)){if(i.children===a.children&&!Ia.current){t=Wl(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var s=i.dependencies;if(null!==s){l=i.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===i.tag){(u=Ao(-1,n&-n)).tag=2;var c=i.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,null!==(u=i.alternate)&&(u.lanes|=n),jo(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===i.tag)l=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(l=i.return))throw Error(o(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),jo(l,n,t),l=i.sibling}else l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===t){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}wl(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Eo(t,n),r=r(a=No(a)),t.flags|=1,wl(e,t,r,n),t.child;case 14:return a=vo(r=t.type,t.pendingProps),Sl(e,t,r,a=vo(r.type,a),n);case 15:return jl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:vo(r,a),Hl(e,t),t.tag=1,Ra(r)?(e=!0,Da(t)):e=!1,Eo(t,n),Ho(t,r,a),qo(t,r,a,n),Il(null,t,r,!0,e,n);case 19:return Vl(e,t,n);case 22:return El(e,t,n)}throw Error(o(156,t.tag))};var Qu="function"==typeof reportError?reportError:function(e){console.error(e)};function Yu(e){this._internalRoot=e}function Ku(e){this._internalRoot=e}function Zu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Ju(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Xu(){}function ec(e,t,n,r,a){var o=n._reactRootContainer;if(o){var i=o;if("function"==typeof a){var l=a;a=function(){var e=Wu(i);l.call(e)}}Hu(t,i,e,a)}else i=function(e,t,n,r,a){if(a){if("function"==typeof r){var o=r;r=function(){var e=Wu(i);o.call(e)}}var i=Vu(t,r,e,0,null,!1,0,"",Xu);return e._reactRootContainer=i,e[ma]=i.current,$r(8===e.nodeType?e.parentNode:e),du(),i}for(;a=e.lastChild;)e.removeChild(a);if("function"==typeof r){var l=r;r=function(){var e=Wu(s);l.call(e)}}var s=Bu(e,0,!1,null,0,!1,0,"",Xu);return e._reactRootContainer=s,e[ma]=s.current,$r(8===e.nodeType?e.parentNode:e),du((function(){Hu(t,s,n,r)})),s}(n,t,e,a,r);return Wu(i)}Ku.prototype.render=Yu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Hu(e,t,null,null)},Ku.prototype.unmount=Yu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;du((function(){Hu(null,e,null,null)})),t[ma]=null}},Ku.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tt.length&&0!==t&&t<Tt[n].priority;n++);Tt.splice(n,0,e),0===n&&Lt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),au(t,Ze()),0==(6&Is)&&(Vs=Ze()+500,$a()))}break;case 13:du((function(){var t=Po(e,1);if(null!==t){var n=tu();ru(t,e,1,n)}})),Gu(e,1)}},kt=function(e){if(13===e.tag){var t=Po(e,134217728);null!==t&&ru(t,e,134217728,tu()),Gu(e,134217728)}},St=function(e){if(13===e.tag){var t=nu(e),n=Po(e,t);null!==n&&ru(n,e,t,tu()),Gu(e,t)}},jt=function(){return bt},Et=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},ke=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=wa(r);if(!a)throw Error(o(90));G(r),J(r,a)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},_e=cu,Ie=du;var tc={usingClientEntryPoint:!1,Events:[ba,xa,wa,Ne,Ce,cu]},nc={findFiberByHostInstance:ya,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},rc={bundleType:nc.bundleType,version:nc.version,rendererPackageName:nc.rendererPackageName,rendererConfig:nc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=We(e))?null:e.stateNode},findFiberByHostInstance:nc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{at=ac.inject(rc),ot=ac}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tc,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Zu(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Zu(e))throw Error(o(299));var n=!1,r="",a=Qu;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Bu(e,1,!1,null,0,n,0,r,a),e[ma]=t.current,$r(8===e.nodeType?e.parentNode:e),new Yu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return null===(e=We(t))?null:e.stateNode},t.flushSync=function(e){return du(e)},t.hydrate=function(e,t,n){if(!Ju(t))throw Error(o(200));return ec(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Zu(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,a=!1,i="",l=Qu;if(null!=n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Vu(t,null,e,1,null!=n?n:null,a,0,i,l),e[ma]=t.current,$r(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Ku(t)},t.render=function(e,t,n){if(!Ju(t))throw Error(o(200));return ec(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Ju(e))throw Error(o(40));return!!e._reactRootContainer&&(du((function(){ec(null,null,e,!1,(function(){e._reactRootContainer=null,e[ma]=null}))})),!0)},t.unstable_batchedUpdates=cu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ju(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return ec(e,t,n,!1,r)},t.version="18.2.0-next-9e3b772b8-20220608"},745:(e,t,n)=>{"use strict";var r=n(935);t.s=r.createRoot,r.hydrateRoot},935:(e,t,n)=>{"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=n(448)},251:(e,t,n)=>{"use strict";var r=n(294),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:l.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},408:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator,m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var x=b.prototype=new y;x.constructor=b,h(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var a,o={},i=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,a)&&!j.hasOwnProperty(a)&&(o[a]=t[a]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:n,type:e,key:i,ref:l,props:o,_owner:S.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function I(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===o?"."+_(s,0):o,w(i)?(a="",null!=e&&(a=e.replace(C,"$&/")+"/"),I(i,t,a,"",(function(e){return e}))):null!=i&&(N(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(s=0,o=""===o?".":o+":",w(e))for(var u=0;u<e.length;u++){var c=o+_(l=e[u],u);s+=I(l,t,a,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=I(l=l.value,t,a,c=o+_(l,u++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function P(e,t,n){if(null==e)return e;var r=[],a=0;return I(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},T={transition:null},A={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:T,ReactCurrentOwner:S};t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!N(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=a,t.Profiler=i,t.PureComponent=b,t.StrictMode=o,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=h({},e.props),o=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=S.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)k.call(t,u)&&!j.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}return{$$typeof:n,type:e.type,key:o,ref:i,props:a,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=N,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return R.current.useCallback(e,t)},t.useContext=function(e){return R.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return R.current.useDeferredValue(e)},t.useEffect=function(e,t){return R.current.useEffect(e,t)},t.useId=function(){return R.current.useId()},t.useImperativeHandle=function(e,t,n){return R.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return R.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return R.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return R.current.useMemo(e,t)},t.useReducer=function(e,t,n){return R.current.useReducer(e,t,n)},t.useRef=function(e){return R.current.useRef(e)},t.useState=function(e){return R.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return R.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return R.current.useTransition()},t.version="18.2.0"},294:(e,t,n)=>{"use strict";e.exports=n(408)},893:(e,t,n)=>{"use strict";e.exports=n(251)},53:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>o(s,n))u<a&&0>o(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<a&&0>o(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,m=!1,h=!1,g=!1,v="function"==typeof setTimeout?setTimeout:null,y="function"==typeof clearTimeout?clearTimeout:null,b="undefined"!=typeof setImmediate?setImmediate:null;function x(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(g=!1,x(e),!h)if(null!==r(u))h=!0,T(k);else{var t=r(c);null!==t&&A(w,t.startTime-e)}}function k(e,n){h=!1,g&&(g=!1,y(N),N=-1),m=!0;var o=p;try{for(x(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!I());){var i=f.callback;if("function"==typeof i){f.callback=null,p=f.priorityLevel;var l=i(f.expirationTime<=n);n=t.unstable_now(),"function"==typeof l?f.callback=l:f===r(u)&&a(u),x(n)}else a(u);f=r(u)}if(null!==f)var s=!0;else{var d=r(c);null!==d&&A(w,d.startTime-n),s=!1}return s}finally{f=null,p=o,m=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,j=!1,E=null,N=-1,C=5,_=-1;function I(){return!(t.unstable_now()-_<C)}function P(){if(null!==E){var e=t.unstable_now();_=e;var n=!0;try{n=E(!0,e)}finally{n?S():(j=!1,E=null)}}else j=!1}if("function"==typeof b)S=function(){b(P)};else if("undefined"!=typeof MessageChannel){var O=new MessageChannel,R=O.port2;O.port1.onmessage=P,S=function(){R.postMessage(null)}}else S=function(){v(P,0)};function T(e){E=e,j||(j=!0,S())}function A(e,n){N=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){h||m||(h=!0,T(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,o){var i=t.unstable_now();switch(o="object"==typeof o&&null!==o&&"number"==typeof(o=o.delay)&&0<o?i+o:i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,n(c,e),null===r(u)&&e===r(c)&&(g?(y(N),N=-1):g=!0,A(w,o-i))):(e.sortIndex=l,n(u,e),h||m||(h=!0,T(k))),e},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},840:(e,t,n)=>{"use strict";e.exports=n(53)},774:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var u=o[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(a=n?n.call(r,c,d,u):void 0)||void 0===a&&c!==d)return!1}return!0}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],l=0;l<e.length;l++){var s=e[l],u=r.base?s[0]+r.base:s[0],c=o[u]||0,d="".concat(u," ").concat(c);o[u]=c+1;var f=n(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var m=a(p,r);r.byIndex=l,t.splice(l,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var l=n(o[i]);t[l].references--}for(var s=r(e,a),u=0;u<o.length;u++){var c=n(o[u]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}o=s}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var e={};n.r(e),n.d(e,{hasBrowserEnv:()=>xe,hasStandardBrowserEnv:()=>we,hasStandardBrowserWebWorkerEnv:()=>Se});var t=n(893),r=n(379),a=n.n(r),o=n(795),i=n.n(o),l=n(569),s=n.n(l),u=n(565),c=n.n(u),d=n(216),f=n.n(d),p=n(589),m=n.n(p),h=n(685),g={};g.styleTagTransform=m(),g.setAttributes=c(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=f(),a()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var v=n(294),y=n(745);const b=(0,v.createContext)({loading:!0,app:null}),x=({children:e})=>{const[n,r]=(0,v.useState)(!0),[a,o]=(0,v.useState)(null);return(0,v.useEffect)((()=>{ZOHODESK.extension.onload().then((e=>{console.log("Desk extension loaded"),r(!1),o(e)}))}),[]),(0,t.jsx)(b.Provider,{value:{loading:n,app:a},children:n?(0,t.jsx)("div",{children:"Initialising..."}):e})};function w(e,t){return function(){return e.apply(t,arguments)}}const{toString:k}=Object.prototype,{getPrototypeOf:S}=Object,j=(E=Object.create(null),e=>{const t=k.call(e);return E[t]||(E[t]=t.slice(8,-1).toLowerCase())});var E;const N=e=>(e=e.toLowerCase(),t=>j(t)===e),C=e=>t=>typeof t===e,{isArray:_}=Array,I=C("undefined"),P=N("ArrayBuffer"),O=C("string"),R=C("function"),T=C("number"),A=e=>null!==e&&"object"==typeof e,z=e=>{if("object"!==j(e))return!1;const t=S(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},D=N("Date"),L=N("File"),F=N("Blob"),M=N("FileList"),U=N("URLSearchParams");function B(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,a;if("object"!=typeof e&&(e=[e]),_(e))for(r=0,a=e.length;r<a;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),o=a.length;let i;for(r=0;r<o;r++)i=a[r],t.call(null,e[i],i,e)}}function $(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,a=n.length;for(;a-- >0;)if(r=n[a],t===r.toLowerCase())return r;return null}const V="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,H=e=>!I(e)&&e!==V,W=(q="undefined"!=typeof Uint8Array&&S(Uint8Array),e=>q&&e instanceof q);var q;const G=N("HTMLFormElement"),Q=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Y=N("RegExp"),K=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};B(n,((n,a)=>{let o;!1!==(o=t(n,a,e))&&(r[a]=o||n)})),Object.defineProperties(e,r)},Z="abcdefghijklmnopqrstuvwxyz",J="0123456789",X={DIGIT:J,ALPHA:Z,ALPHA_DIGIT:Z+Z.toUpperCase()+J},ee=N("AsyncFunction"),te={isArray:_,isArrayBuffer:P,isBuffer:function(e){return null!==e&&!I(e)&&null!==e.constructor&&!I(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||R(e.append)&&("formdata"===(t=j(e))||"object"===t&&R(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&P(e.buffer),t},isString:O,isNumber:T,isBoolean:e=>!0===e||!1===e,isObject:A,isPlainObject:z,isUndefined:I,isDate:D,isFile:L,isBlob:F,isRegExp:Y,isFunction:R,isStream:e=>A(e)&&R(e.pipe),isURLSearchParams:U,isTypedArray:W,isFileList:M,forEach:B,merge:function e(){const{caseless:t}=H(this)&&this||{},n={},r=(r,a)=>{const o=t&&$(n,a)||a;z(n[o])&&z(r)?n[o]=e(n[o],r):z(r)?n[o]=e({},r):_(r)?n[o]=r.slice():n[o]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&B(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(B(t,((t,r)=>{n&&R(t)?e[r]=w(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let a,o,i;const l={};if(t=t||{},null==e)return t;do{for(a=Object.getOwnPropertyNames(e),o=a.length;o-- >0;)i=a[o],r&&!r(i,e,t)||l[i]||(t[i]=e[i],l[i]=!0);e=!1!==n&&S(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:j,kindOfTest:N,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(_(e))return e;let t=e.length;if(!T(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:G,hasOwnProperty:Q,hasOwnProp:Q,reduceDescriptors:K,freezeMethods:e=>{K(e,((t,n)=>{if(R(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];R(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return _(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:$,global:V,isContextDefined:H,ALPHABET:X,generateString:(e=16,t=X.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&R(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(A(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const a=_(e)?[]:{};return B(e,((e,t)=>{const o=n(e,r+1);!I(o)&&(a[t]=o)})),t[r]=void 0,a}}return e};return n(e,0)},isAsyncFn:ee,isThenable:e=>e&&(A(e)||R(e))&&R(e.then)&&R(e.catch)};function ne(e,t,n,r,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),a&&(this.response=a)}te.inherits(ne,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:te.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const re=ne.prototype,ae={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{ae[e]={value:e}})),Object.defineProperties(ne,ae),Object.defineProperty(re,"isAxiosError",{value:!0}),ne.from=(e,t,n,r,a,o)=>{const i=Object.create(re);return te.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),ne.call(i,e.message,t,n,r,a),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const oe=ne;function ie(e){return te.isPlainObject(e)||te.isArray(e)}function le(e){return te.endsWith(e,"[]")?e.slice(0,-2):e}function se(e,t,n){return e?e.concat(t).map((function(e,t){return e=le(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const ue=te.toFlatObject(te,{},null,(function(e){return/^is[A-Z]/.test(e)})),ce=function(e,t,n){if(!te.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=te.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!te.isUndefined(t[e])}))).metaTokens,a=n.visitor||u,o=n.dots,i=n.indexes,l=(n.Blob||"undefined"!=typeof Blob&&Blob)&&te.isSpecCompliantForm(t);if(!te.isFunction(a))throw new TypeError("visitor must be a function");function s(e){if(null===e)return"";if(te.isDate(e))return e.toISOString();if(!l&&te.isBlob(e))throw new oe("Blob is not supported. Use a Buffer instead.");return te.isArrayBuffer(e)||te.isTypedArray(e)?l&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,a){let l=e;if(e&&!a&&"object"==typeof e)if(te.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(te.isArray(e)&&function(e){return te.isArray(e)&&!e.some(ie)}(e)||(te.isFileList(e)||te.endsWith(n,"[]"))&&(l=te.toArray(e)))return n=le(n),l.forEach((function(e,r){!te.isUndefined(e)&&null!==e&&t.append(!0===i?se([n],r,o):null===i?n:n+"[]",s(e))})),!1;return!!ie(e)||(t.append(se(a,n,o),s(e)),!1)}const c=[],d=Object.assign(ue,{defaultVisitor:u,convertValue:s,isVisitable:ie});if(!te.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!te.isUndefined(n)){if(-1!==c.indexOf(n))throw Error("Circular reference detected in "+r.join("."));c.push(n),te.forEach(n,(function(n,o){!0===(!(te.isUndefined(n)||null===n)&&a.call(t,n,te.isString(o)?o.trim():o,r,d))&&e(n,r?r.concat(o):[o])})),c.pop()}}(e),t};function de(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function fe(e,t){this._pairs=[],e&&ce(e,this,t)}const pe=fe.prototype;pe.append=function(e,t){this._pairs.push([e,t])},pe.toString=function(e){const t=e?function(t){return e.call(this,t,de)}:de;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const me=fe;function he(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ge(e,t,n){if(!t)return e;const r=n&&n.encode||he,a=n&&n.serialize;let o;if(o=a?a(t,n):te.isURLSearchParams(t)?t.toString():new me(t,n).toString(r),o){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}const ve=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){te.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},ye={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},be={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:me,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},xe="undefined"!=typeof window&&"undefined"!=typeof document,we=(ke="undefined"!=typeof navigator&&navigator.product,xe&&["ReactNative","NativeScript","NS"].indexOf(ke)<0);var ke;const Se="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,je={...e,...be},Ee=function(e){function t(e,n,r,a){let o=e[a++];if("__proto__"===o)return!0;const i=Number.isFinite(+o),l=a>=e.length;return o=!o&&te.isArray(r)?r.length:o,l?(te.hasOwnProp(r,o)?r[o]=[r[o],n]:r[o]=n,!i):(r[o]&&te.isObject(r[o])||(r[o]=[]),t(e,n,r[o],a)&&te.isArray(r[o])&&(r[o]=function(e){const t={},n=Object.keys(e);let r;const a=n.length;let o;for(r=0;r<a;r++)o=n[r],t[o]=e[o];return t}(r[o])),!i)}if(te.isFormData(e)&&te.isFunction(e.entries)){const n={};return te.forEachEntry(e,((e,r)=>{t(function(e){return te.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null},Ne={transitional:ye,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,a=te.isObject(e);if(a&&te.isHTMLForm(e)&&(e=new FormData(e)),te.isFormData(e))return r&&r?JSON.stringify(Ee(e)):e;if(te.isArrayBuffer(e)||te.isBuffer(e)||te.isStream(e)||te.isFile(e)||te.isBlob(e))return e;if(te.isArrayBufferView(e))return e.buffer;if(te.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(a){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return ce(e,new je.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return je.isNode&&te.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((o=te.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return ce(o?{"files[]":e}:e,t&&new t,this.formSerializer)}}return a||r?(t.setContentType("application/json",!1),function(e,t,n){if(te.isString(e))try{return(0,JSON.parse)(e),te.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Ne.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&te.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw oe.from(e,oe.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:je.classes.FormData,Blob:je.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};te.forEach(["delete","get","head","post","put","patch"],(e=>{Ne.headers[e]={}}));const Ce=Ne,_e=te.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ie=Symbol("internals");function Pe(e){return e&&String(e).trim().toLowerCase()}function Oe(e){return!1===e||null==e?e:te.isArray(e)?e.map(Oe):String(e)}function Re(e,t,n,r,a){return te.isFunction(r)?r.call(this,t,n):(a&&(t=n),te.isString(t)?te.isString(r)?-1!==t.indexOf(r):te.isRegExp(r)?r.test(t):void 0:void 0)}class Te{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function a(e,t,n){const a=Pe(t);if(!a)throw new Error("header name must be a non-empty string");const o=te.findKey(r,a);(!o||void 0===r[o]||!0===n||void 0===n&&!1!==r[o])&&(r[o||t]=Oe(e))}const o=(e,t)=>te.forEach(e,((e,n)=>a(e,n,t)));return te.isPlainObject(e)||e instanceof this.constructor?o(e,t):te.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?o((e=>{const t={};let n,r,a;return e&&e.split("\n").forEach((function(e){a=e.indexOf(":"),n=e.substring(0,a).trim().toLowerCase(),r=e.substring(a+1).trim(),!n||t[n]&&_e[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&a(t,e,n),this}get(e,t){if(e=Pe(e)){const n=te.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(te.isFunction(t))return t.call(this,e,n);if(te.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Pe(e)){const n=te.findKey(this,e);return!(!n||void 0===this[n]||t&&!Re(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function a(e){if(e=Pe(e)){const a=te.findKey(n,e);!a||t&&!Re(0,n[a],a,t)||(delete n[a],r=!0)}}return te.isArray(e)?e.forEach(a):a(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const a=t[n];e&&!Re(0,this[a],a,e,!0)||(delete this[a],r=!0)}return r}normalize(e){const t=this,n={};return te.forEach(this,((r,a)=>{const o=te.findKey(n,a);if(o)return t[o]=Oe(r),void delete t[a];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(a):String(a).trim();i!==a&&delete t[a],t[i]=Oe(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return te.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&te.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[Ie]=this[Ie]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=Pe(e);t[r]||(function(e,t){const n=te.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,a){return this[r].call(this,t,e,n,a)},configurable:!0})}))}(n,e),t[r]=!0)}return te.isArray(e)?e.forEach(r):r(e),this}}Te.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),te.reduceDescriptors(Te.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),te.freezeMethods(Te);const Ae=Te;function ze(e,t){const n=this||Ce,r=t||n,a=Ae.from(r.headers);let o=r.data;return te.forEach(e,(function(e){o=e.call(n,o,a.normalize(),t?t.status:void 0)})),a.normalize(),o}function De(e){return!(!e||!e.__CANCEL__)}function Le(e,t,n){oe.call(this,null==e?"canceled":e,oe.ERR_CANCELED,t,n),this.name="CanceledError"}te.inherits(Le,oe,{__CANCEL__:!0});const Fe=Le,Me=je.hasStandardBrowserEnv?{write(e,t,n,r,a,o){const i=[e+"="+encodeURIComponent(t)];te.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),te.isString(r)&&i.push("path="+r),te.isString(a)&&i.push("domain="+a),!0===o&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Ue(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Be=je.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=te.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function $e(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let a,o=0,i=0;return t=void 0!==t?t:1e3,function(l){const s=Date.now(),u=r[i];a||(a=s),n[o]=l,r[o]=s;let c=i,d=0;for(;c!==o;)d+=n[c++],c%=e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),s-a<t)return;const f=u&&s-u;return f?Math.round(1e3*d/f):void 0}}(50,250);return a=>{const o=a.loaded,i=a.lengthComputable?a.total:void 0,l=o-n,s=r(l);n=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:s||void 0,estimated:s&&i&&o<=i?(i-o)/s:void 0,event:a};u[t?"download":"upload"]=!0,e(u)}}const Ve="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const a=Ae.from(e.headers).normalize();let o,i,{responseType:l,withXSRFToken:s}=e;function u(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}if(te.isFormData(r))if(je.hasStandardBrowserEnv||je.hasStandardBrowserWebWorkerEnv)a.setContentType(!1);else if(!1!==(i=a.getContentType())){const[e,...t]=i?i.split(";").map((e=>e.trim())).filter(Boolean):[];a.setContentType([e||"multipart/form-data",...t].join("; "))}let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(t+":"+n))}const d=Ue(e.baseURL,e.url);function f(){if(!c)return;const r=Ae.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new oe("Request failed with status code "+n.status,[oe.ERR_BAD_REQUEST,oe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),u()}),(function(e){n(e),u()}),{data:l&&"text"!==l&&"json"!==l?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),ge(d,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=f:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(f)},c.onabort=function(){c&&(n(new oe("Request aborted",oe.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new oe("Network Error",oe.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||ye;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new oe(t,r.clarifyTimeoutError?oe.ETIMEDOUT:oe.ECONNABORTED,e,c)),c=null},je.hasStandardBrowserEnv&&(s&&te.isFunction(s)&&(s=s(e)),s||!1!==s&&Be(d))){const t=e.xsrfHeaderName&&e.xsrfCookieName&&Me.read(e.xsrfCookieName);t&&a.set(e.xsrfHeaderName,t)}void 0===r&&a.setContentType(null),"setRequestHeader"in c&&te.forEach(a.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),te.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),l&&"json"!==l&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",$e(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",$e(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=t=>{c&&(n(!t||t.type?new Fe(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const p=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(d);p&&-1===je.protocols.indexOf(p)?n(new oe("Unsupported protocol "+p+":",oe.ERR_BAD_REQUEST,e)):c.send(r||null)}))},He={http:null,xhr:Ve};te.forEach(He,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));const We=e=>`- ${e}`,qe=e=>te.isFunction(e)||null===e||!1===e,Ge=e=>{e=te.isArray(e)?e:[e];const{length:t}=e;let n,r;const a={};for(let o=0;o<t;o++){let t;if(n=e[o],r=n,!qe(n)&&(r=He[(t=String(n)).toLowerCase()],void 0===r))throw new oe(`Unknown adapter '${t}'`);if(r)break;a[t||"#"+o]=r}if(!r){const e=Object.entries(a).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(We).join("\n"):" "+We(e[0]):"as no adapter specified";throw new oe("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function Qe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Fe(null,e)}function Ye(e){return Qe(e),e.headers=Ae.from(e.headers),e.data=ze.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ge(e.adapter||Ce.adapter)(e).then((function(t){return Qe(e),t.data=ze.call(e,e.transformResponse,t),t.headers=Ae.from(t.headers),t}),(function(t){return De(t)||(Qe(e),t&&t.response&&(t.response.data=ze.call(e,e.transformResponse,t.response),t.response.headers=Ae.from(t.response.headers))),Promise.reject(t)}))}const Ke=e=>e instanceof Ae?e.toJSON():e;function Ze(e,t){t=t||{};const n={};function r(e,t,n){return te.isPlainObject(e)&&te.isPlainObject(t)?te.merge.call({caseless:n},e,t):te.isPlainObject(t)?te.merge({},t):te.isArray(t)?t.slice():t}function a(e,t,n){return te.isUndefined(t)?te.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function o(e,t){if(!te.isUndefined(t))return r(void 0,t)}function i(e,t){return te.isUndefined(t)?te.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function l(n,a,o){return o in t?r(n,a):o in e?r(void 0,n):void 0}const s={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(e,t)=>a(Ke(e),Ke(t),!0)};return te.forEach(Object.keys(Object.assign({},e,t)),(function(r){const o=s[r]||a,i=o(e[r],t[r],r);te.isUndefined(i)&&o!==l||(n[r]=i)})),n}const Je={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Je[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Xe={};Je.transitional=function(e,t,n){function r(e,t){return"[Axios v1.6.5] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,a,o)=>{if(!1===e)throw new oe(r(a," has been removed"+(t?" in "+t:"")),oe.ERR_DEPRECATED);return t&&!Xe[a]&&(Xe[a]=!0,console.warn(r(a," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,a,o)}};const et={assertOptions:function(e,t,n){if("object"!=typeof e)throw new oe("options must be an object",oe.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let a=r.length;for(;a-- >0;){const o=r[a],i=t[o];if(i){const t=e[o],n=void 0===t||i(t,o,e);if(!0!==n)throw new oe("option "+o+" must be "+n,oe.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new oe("Unknown option "+o,oe.ERR_BAD_OPTION)}},validators:Je},tt=et.validators;class nt{constructor(e){this.defaults=e,this.interceptors={request:new ve,response:new ve}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Ze(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:a}=t;void 0!==n&&et.assertOptions(n,{silentJSONParsing:tt.transitional(tt.boolean),forcedJSONParsing:tt.transitional(tt.boolean),clarifyTimeoutError:tt.transitional(tt.boolean)},!1),null!=r&&(te.isFunction(r)?t.paramsSerializer={serialize:r}:et.assertOptions(r,{encode:tt.function,serialize:tt.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=a&&te.merge(a.common,a[t.method]);a&&te.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete a[e]})),t.headers=Ae.concat(o,a);const i=[];let l=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(l=l&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const s=[];let u;this.interceptors.response.forEach((function(e){s.push(e.fulfilled,e.rejected)}));let c,d=0;if(!l){const e=[Ye.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,s),c=e.length,u=Promise.resolve(t);d<c;)u=u.then(e[d++],e[d++]);return u}c=i.length;let f=t;for(d=0;d<c;){const e=i[d++],t=i[d++];try{f=e(f)}catch(e){t.call(this,e);break}}try{u=Ye.call(this,f)}catch(e){return Promise.reject(e)}for(d=0,c=s.length;d<c;)u=u.then(s[d++],s[d++]);return u}getUri(e){return ge(Ue((e=Ze(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}te.forEach(["delete","get","head","options"],(function(e){nt.prototype[e]=function(t,n){return this.request(Ze(n||{},{method:e,url:t,data:(n||{}).data}))}})),te.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,a){return this.request(Ze(a||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}nt.prototype[e]=t(),nt.prototype[e+"Form"]=t(!0)}));const rt=nt;class at{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,a){n.reason||(n.reason=new Fe(e,r,a),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new at((function(t){e=t})),cancel:e}}}const ot=at,it={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(it).forEach((([e,t])=>{it[t]=e}));const lt=it,st=function e(t){const n=new rt(t),r=w(rt.prototype.request,n);return te.extend(r,rt.prototype,n,{allOwnKeys:!0}),te.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Ze(t,n))},r}(Ce);st.Axios=rt,st.CanceledError=Fe,st.CancelToken=ot,st.isCancel=De,st.VERSION="1.6.5",st.toFormData=ce,st.AxiosError=oe,st.Cancel=st.CanceledError,st.all=function(e){return Promise.all(e)},st.spread=function(e){return function(t){return e.apply(null,t)}},st.isAxiosError=function(e){return te.isObject(e)&&!0===e.isAxiosError},st.mergeConfig=Ze,st.AxiosHeaders=Ae,st.formToJSON=e=>Ee(te.isHTMLForm(e)?new FormData(e):e),st.getAdapter=Ge,st.HttpStatusCode=lt,st.default=st;const ut=st,ct="https://localhost:44329",dt="http://localhost:3000",ft="https://stagegamificationui.blob.core.windows.net",pt="sandbox-assets",mt={redeem:{getRedeemByApplication:ct+"/api/RedemptionRule/getbyGamificationApplicationId/",getWalletBalance:ct+"/api/VirtualMoneyBalance/userbalance",getUserRewards:dt+"/leaderBoard/userRewards",getMyOrders:ct+"/api/Order/GetByUser",redeemProduct:ct+"/api/RedemptionRule/redeemProduct"},leaderBoard:{getUserLeaderBoard:`${dt}/leaderBoard/userLeaderBoard`,getUserRewards:`${dt}/leaderBoard/userRewards`},userGroup:{getUserGroupByAppId:()=>`${dt}/v1/leaderBoard/UserRankinGroup`,getRankByUserGroupId:(e,t)=>`${dt}/v1/leaderBoard/byuserGroupId/${e}/${t}`},blobStorage:{getSasToken:`${dt}/sasToken`},order:{getMyOrders:`${ct}/api/Order/GetByUser`},token:{getAuthToken:`${dt}/v1/tokens/accessToken`},userCompletedGame:{addPoints:`${dt}/userCompletedGame/triggerGameAction`},privilegeStage:{getAll:e=>`${dt}/privilegeStage/user/application/lookup/${e}`},users:{get:(e,t)=>`${dt}/users/${e}/${t}`,update:(e,t)=>`${dt}/v1/users/update/${e}/application/${t}`},application:{get:e=>`${dt}/v1/applications/application/${e}`},avatar:{getavatar:()=>`${dt}/blobImages`,getUserExistence:(e,t)=>`${dt}/v1/users/${t}/checkUserName/${e}`}};let ht;const gt=()=>{return e=void 0,t=void 0,r=function*(){const e=yield ut.post(`${mt.token.getAuthToken}`,{clientId:ht.clientId,clientSecret:ht.clientSecret});return console.log(e.data.data.access_token),e.data.data.access_token},new((n=void 0)||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function l(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((r=r.apply(e,t||[])).next())}));var e,t,n,r};var vt=n(108),yt=function(){return yt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},yt.apply(this,arguments)};function bt(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create,Object.create;var xt=n(774),wt=n.n(xt),kt="-ms-",St="-moz-",jt="-webkit-",Et="comm",Nt="rule",Ct="decl",_t="@import",It="@keyframes",Pt="@layer",Ot=Math.abs,Rt=String.fromCharCode,Tt=Object.assign;function At(e){return e.trim()}function zt(e,t){return(e=t.exec(e))?e[0]:e}function Dt(e,t,n){return e.replace(t,n)}function Lt(e,t,n){return e.indexOf(t,n)}function Ft(e,t){return 0|e.charCodeAt(t)}function Mt(e,t,n){return e.slice(t,n)}function Ut(e){return e.length}function Bt(e){return e.length}function $t(e,t){return t.push(e),e}function Vt(e,t){return e.filter((function(e){return!zt(e,t)}))}var Ht=1,Wt=1,qt=0,Gt=0,Qt=0,Yt="";function Kt(e,t,n,r,a,o,i,l){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:Ht,column:Wt,length:i,return:"",siblings:l}}function Zt(e,t){return Tt(Kt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Jt(e){for(;e.root;)e=Zt(e.root,{children:[e]});$t(e,e.siblings)}function Xt(){return Qt=Gt>0?Ft(Yt,--Gt):0,Wt--,10===Qt&&(Wt=1,Ht--),Qt}function en(){return Qt=Gt<qt?Ft(Yt,Gt++):0,Wt++,10===Qt&&(Wt=1,Ht++),Qt}function tn(){return Ft(Yt,Gt)}function nn(){return Gt}function rn(e,t){return Mt(Yt,e,t)}function an(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function on(e){return At(rn(Gt-1,un(91===e?e+2:40===e?e+1:e)))}function ln(e){for(;(Qt=tn())&&Qt<33;)en();return an(e)>2||an(Qt)>3?"":" "}function sn(e,t){for(;--t&&en()&&!(Qt<48||Qt>102||Qt>57&&Qt<65||Qt>70&&Qt<97););return rn(e,nn()+(t<6&&32==tn()&&32==en()))}function un(e){for(;en();)switch(Qt){case e:return Gt;case 34:case 39:34!==e&&39!==e&&un(Qt);break;case 40:41===e&&un(e);break;case 92:en()}return Gt}function cn(e,t){for(;en()&&e+Qt!==57&&(e+Qt!==84||47!==tn()););return"/*"+rn(t,Gt-1)+"*"+Rt(47===e?e:en())}function dn(e){for(;!an(tn());)en();return rn(e,Gt)}function fn(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function pn(e,t,n,r){switch(e.type){case Pt:if(e.children.length)break;case _t:case Ct:return e.return=e.return||e.value;case Et:return"";case It:return e.return=e.value+"{"+fn(e.children,r)+"}";case Nt:if(!Ut(e.value=e.props.join(",")))return""}return Ut(n=fn(e.children,r))?e.return=e.value+"{"+n+"}":""}function mn(e,t,n){switch(function(e,t){return 45^Ft(e,0)?(((t<<2^Ft(e,0))<<2^Ft(e,1))<<2^Ft(e,2))<<2^Ft(e,3):0}(e,t)){case 5103:return jt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return jt+e+e;case 4789:return St+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return jt+e+St+e+kt+e+e;case 5936:switch(Ft(e,t+11)){case 114:return jt+e+kt+Dt(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return jt+e+kt+Dt(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return jt+e+kt+Dt(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return jt+e+kt+e+e;case 6165:return jt+e+kt+"flex-"+e+e;case 5187:return jt+e+Dt(e,/(\w+).+(:[^]+)/,jt+"box-$1$2"+kt+"flex-$1$2")+e;case 5443:return jt+e+kt+"flex-item-"+Dt(e,/flex-|-self/g,"")+(zt(e,/flex-|baseline/)?"":kt+"grid-row-"+Dt(e,/flex-|-self/g,""))+e;case 4675:return jt+e+kt+"flex-line-pack"+Dt(e,/align-content|flex-|-self/g,"")+e;case 5548:return jt+e+kt+Dt(e,"shrink","negative")+e;case 5292:return jt+e+kt+Dt(e,"basis","preferred-size")+e;case 6060:return jt+"box-"+Dt(e,"-grow","")+jt+e+kt+Dt(e,"grow","positive")+e;case 4554:return jt+Dt(e,/([^-])(transform)/g,"$1"+jt+"$2")+e;case 6187:return Dt(Dt(Dt(e,/(zoom-|grab)/,jt+"$1"),/(image-set)/,jt+"$1"),e,"")+e;case 5495:case 3959:return Dt(e,/(image-set\([^]*)/,jt+"$1$`$1");case 4968:return Dt(Dt(e,/(.+:)(flex-)?(.*)/,jt+"box-pack:$3"+kt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+jt+e+e;case 4200:if(!zt(e,/flex-|baseline/))return kt+"grid-column-align"+Mt(e,t)+e;break;case 2592:case 3360:return kt+Dt(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,zt(e.props,/grid-\w+-end/)}))?~Lt(e+(n=n[t].value),"span",0)?e:kt+Dt(e,"-start","")+e+kt+"grid-row-span:"+(~Lt(n,"span",0)?zt(n,/\d+/):+zt(n,/\d+/)-+zt(e,/\d+/))+";":kt+Dt(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return zt(e.props,/grid-\w+-start/)}))?e:kt+Dt(Dt(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Dt(e,/(.+)-inline(.+)/,jt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ut(e)-1-t>6)switch(Ft(e,t+1)){case 109:if(45!==Ft(e,t+4))break;case 102:return Dt(e,/(.+:)(.+)-([^]+)/,"$1"+jt+"$2-$3$1"+St+(108==Ft(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Lt(e,"stretch",0)?mn(Dt(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Dt(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,a,o,i,l){return kt+n+":"+r+l+(a?kt+n+"-span:"+(o?i:+i-+r)+l:"")+e}));case 4949:if(121===Ft(e,t+6))return Dt(e,":",":"+jt)+e;break;case 6444:switch(Ft(e,45===Ft(e,14)?18:11)){case 120:return Dt(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+jt+(45===Ft(e,14)?"inline-":"")+"box$3$1"+jt+"$2$3$1"+kt+"$2box$3")+e;case 100:return Dt(e,":",":"+kt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Dt(e,"scroll-","scroll-snap-")+e}return e}function hn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ct:return void(e.return=mn(e.value,e.length,n));case It:return fn([Zt(e,{value:Dt(e.value,"@","@"+jt)})],r);case Nt:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(zt(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Jt(Zt(e,{props:[Dt(t,/:(read-\w+)/,":"+St+"$1")]})),Jt(Zt(e,{props:[t]})),Tt(e,{props:Vt(n,r)});break;case"::placeholder":Jt(Zt(e,{props:[Dt(t,/:(plac\w+)/,":"+jt+"input-$1")]})),Jt(Zt(e,{props:[Dt(t,/:(plac\w+)/,":"+St+"$1")]})),Jt(Zt(e,{props:[Dt(t,/:(plac\w+)/,kt+"input-$1")]})),Jt(Zt(e,{props:[t]})),Tt(e,{props:Vt(n,r)})}return""}))}}function gn(e){return function(e){return Yt="",e}(vn("",null,null,null,[""],e=function(e){return Ht=Wt=1,qt=Ut(Yt=e),Gt=0,[]}(e),0,[0],e))}function vn(e,t,n,r,a,o,i,l,s){for(var u=0,c=0,d=i,f=0,p=0,m=0,h=1,g=1,v=1,y=0,b="",x=a,w=o,k=r,S=b;g;)switch(m=y,y=en()){case 40:if(108!=m&&58==Ft(S,d-1)){-1!=Lt(S+=Dt(on(y),"&","&\f"),"&\f",Ot(u?l[u-1]:0))&&(v=-1);break}case 34:case 39:case 91:S+=on(y);break;case 9:case 10:case 13:case 32:S+=ln(m);break;case 92:S+=sn(nn()-1,7);continue;case 47:switch(tn()){case 42:case 47:$t(bn(cn(en(),nn()),t,n,s),s);break;default:S+="/"}break;case 123*h:l[u++]=Ut(S)*v;case 125*h:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+c:-1==v&&(S=Dt(S,/\f/g,"")),p>0&&Ut(S)-d&&$t(p>32?xn(S+";",r,n,d-1,s):xn(Dt(S," ","")+";",r,n,d-2,s),s);break;case 59:S+=";";default:if($t(k=yn(S,t,n,u,c,a,l,b,x=[],w=[],d,o),o),123===y)if(0===c)vn(S,t,k,k,x,o,d,l,w);else switch(99===f&&110===Ft(S,3)?100:f){case 100:case 108:case 109:case 115:vn(e,k,k,r&&$t(yn(e,k,k,0,0,a,l,b,a,x=[],d,w),w),a,w,d,l,r?x:w);break;default:vn(S,k,k,k,[""],w,0,l,w)}}u=c=p=0,h=v=1,b=S="",d=i;break;case 58:d=1+Ut(S),p=m;default:if(h<1)if(123==y)--h;else if(125==y&&0==h++&&125==Xt())continue;switch(S+=Rt(y),y*h){case 38:v=c>0?1:(S+="\f",-1);break;case 44:l[u++]=(Ut(S)-1)*v,v=1;break;case 64:45===tn()&&(S+=on(en())),f=tn(),c=d=Ut(b=S+=dn(nn())),y++;break;case 45:45===m&&2==Ut(S)&&(h=0)}}return o}function yn(e,t,n,r,a,o,i,l,s,u,c,d){for(var f=a-1,p=0===a?o:[""],m=Bt(p),h=0,g=0,v=0;h<r;++h)for(var y=0,b=Mt(e,f+1,f=Ot(g=i[h])),x=e;y<m;++y)(x=At(g>0?p[y]+" "+b:Dt(b,/&\f/g,p[y])))&&(s[v++]=x);return Kt(e,t,n,0===a?Nt:l,s,u,c,d)}function bn(e,t,n,r){return Kt(e,t,n,Et,Rt(Qt),Mt(e,2,-2),0,r)}function xn(e,t,n,r,a){return Kt(e,t,n,Ct,Mt(e,0,r),Mt(e,r+1,-1),r,a)}const wn={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var kn="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Sn="active",jn="data-styled-version",En="6.1.8",Nn="/*!sc*/\n",Cn="undefined"!=typeof window&&"HTMLElement"in window,_n=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY&&"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY),In=(new Set,Object.freeze([])),Pn=Object.freeze({});var On=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Rn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Tn=/(^-|-$)/g;function An(e){return e.replace(Rn,"-").replace(Tn,"")}var zn=/(a)(d)/gi,Dn=52,Ln=function(e){return String.fromCharCode(e+(e>25?39:97))};function Fn(e){var t,n="";for(t=Math.abs(e);t>Dn;t=t/Dn|0)n=Ln(t%Dn)+n;return(Ln(t%Dn)+n).replace(zn,"$1-$2")}var Mn,Un=5381,Bn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},$n=function(e){return Bn(Un,e)};function Vn(e){return"string"==typeof e&&!0}var Hn="function"==typeof Symbol&&Symbol.for,Wn=Hn?Symbol.for("react.memo"):60115,qn=Hn?Symbol.for("react.forward_ref"):60112,Gn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Qn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Yn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Kn=((Mn={})[qn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Mn[Wn]=Yn,Mn);function Zn(e){return("type"in(t=e)&&t.type.$$typeof)===Wn?Yn:"$$typeof"in e?Kn[e.$$typeof]:Gn;var t}var Jn=Object.defineProperty,Xn=Object.getOwnPropertyNames,er=Object.getOwnPropertySymbols,tr=Object.getOwnPropertyDescriptor,nr=Object.getPrototypeOf,rr=Object.prototype;function ar(e,t,n){if("string"!=typeof t){if(rr){var r=nr(t);r&&r!==rr&&ar(e,r,n)}var a=Xn(t);er&&(a=a.concat(er(t)));for(var o=Zn(e),i=Zn(t),l=0;l<a.length;++l){var s=a[l];if(!(s in Qn||n&&n[s]||i&&s in i||o&&s in o)){var u=tr(t,s);try{Jn(e,s,u)}catch(e){}}}}return e}function or(e){return"function"==typeof e}function ir(e){return"object"==typeof e&&"styledComponentId"in e}function lr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function sr(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function ur(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function cr(e,t,n){if(void 0===n&&(n=!1),!n&&!ur(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=cr(e[r],t[r]);else if(ur(t))for(var r in t)e[r]=cr(e[r],t[r]);return e}function dr(e,t){Object.defineProperty(e,"toString",{value:t})}function fr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var pr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw fr(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=(o=0,t.length);o<l;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,o=r;o<a;o++)t+="".concat(this.tag.getRule(o)).concat(Nn);return t},e}(),mr=new Map,hr=new Map,gr=1,vr=function(e){if(mr.has(e))return mr.get(e);for(;hr.has(gr);)gr++;var t=gr++;return mr.set(e,t),hr.set(t,e),t},yr=function(e,t){gr=t+1,mr.set(e,t),hr.set(t,e)},br="style[".concat(kn,"][").concat(jn,'="').concat(En,'"]'),xr=new RegExp("^".concat(kn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),wr=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},kr=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Nn),a=[],o=0,i=r.length;o<i;o++){var l=r[o].trim();if(l){var s=l.match(xr);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(yr(c,u),wr(e,c,s[3]),e.getTag().insertRules(u,a)),a.length=0}else a.push(l)}}};function Sr(){return n.nc}var jr=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(kn,"]")));return t[t.length-1]}(n),o=void 0!==a?a.nextSibling:null;r.setAttribute(kn,Sn),r.setAttribute(jn,En);var i=Sr();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},Er=function(){function e(e){this.element=jr(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw fr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Nr=function(){function e(e){this.element=jr(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Cr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),_r=Cn,Ir={isServer:!Cn,useCSSOMInjection:!_n},Pr=function(){function e(e,t,n){void 0===e&&(e=Pn),void 0===t&&(t={});var r=this;this.options=yt(yt({},Ir),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Cn&&_r&&(_r=!1,function(e){for(var t=document.querySelectorAll(br),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(kn)!==Sn&&(kr(e,a),a.parentNode&&a.parentNode.removeChild(a))}}(this)),dr(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return hr.get(e)}(n);if(void 0===a)return"continue";var o=e.names.get(a),i=t.getGroup(n);if(void 0===o||0===i.length)return"continue";var l="".concat(kn,".g").concat(n,'[id="').concat(a,'"]'),s="";void 0!==o&&o.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(Nn)},o=0;o<n;o++)a(o);return r}(r)}))}return e.registerId=function(e){return vr(e)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(yt(yt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Cr(n):t?new Er(n):new Nr(n)}(this.options),new pr(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(vr(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(vr(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(vr(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Or=/&/g,Rr=/^\s*\/\/.*$/gm;function Tr(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Tr(e.children,t)),e}))}function Ar(e){var t,n,r,a=void 0===e?Pn:e,o=a.options,i=void 0===o?Pn:o,l=a.plugins,s=void 0===l?In:l,u=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push((function(e){e.type===Nt&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Or,n).replace(r,u))})),i.prefix&&c.push(hn),c.push(pn);var d=function(e,a,o,l){void 0===a&&(a=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(Rr,""),u=gn(o||a?"".concat(o," ").concat(a," { ").concat(s," }"):s);i.namespace&&(u=Tr(u,i.namespace));var d,f,p,m=[];return fn(u,(d=c.concat((p=function(e){return m.push(e)},function(e){e.root||(e=e.return)&&p(e)})),f=Bt(d),function(e,t,n,r){for(var a="",o=0;o<f;o++)a+=d[o](e,t,n,r)||"";return a})),m};return d.hash=s.length?s.reduce((function(e,t){return t.name||fr(15),Bn(e,t.name)}),Un).toString():"",d}var zr=new Pr,Dr=Ar(),Lr=v.createContext({shouldForwardProp:void 0,styleSheet:zr,stylis:Dr}),Fr=(Lr.Consumer,v.createContext(void 0));function Mr(){return(0,v.useContext)(Lr)}function Ur(e){var t=(0,v.useState)(e.stylisPlugins),n=t[0],r=t[1],a=Mr().styleSheet,o=(0,v.useMemo)((function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,a]),i=(0,v.useMemo)((function(){return Ar({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})}),[e.enableVendorPrefixes,e.namespace,n]);(0,v.useEffect)((function(){wt()(n,e.stylisPlugins)||r(e.stylisPlugins)}),[e.stylisPlugins]);var l=(0,v.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:o,stylis:i}}),[e.shouldForwardProp,o,i]);return v.createElement(Lr.Provider,{value:l},v.createElement(Fr.Provider,{value:i},e.children))}var Br=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Dr);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,dr(this,(function(){throw fr(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Dr),this.name+e.hash},e}(),$r=function(e){return e>="A"&&e<="Z"};function Vr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;$r(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Hr=function(e){return null==e||!1===e||""===e},Wr=function(e){var t,n,r=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!Hr(o)&&(Array.isArray(o)&&o.isCss||or(o)?r.push("".concat(Vr(a),":"),o,";"):ur(o)?r.push.apply(r,bt(bt(["".concat(a," {")],Wr(o),!1),["}"],!1)):r.push("".concat(Vr(a),": ").concat((t=a,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in wn||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function qr(e,t,n,r){return Hr(e)?[]:ir(e)?[".".concat(e.styledComponentId)]:or(e)?!or(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:qr(e(t),t,n,r):e instanceof Br?n?(e.inject(n,r),[e.getName(r)]):[e]:ur(e)?Wr(e):Array.isArray(e)?Array.prototype.concat.apply(In,e.map((function(e){return qr(e,t,n,r)}))):[e.toString()];var a}function Gr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(or(n)&&!ir(n))return!1}return!0}var Qr=$n(En),Yr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Gr(e),this.componentId=t,this.baseHash=Bn(Qr,t),this.baseStyle=n,Pr.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=lr(r,this.staticRulesId);else{var a=sr(qr(this.rules,e,t,n)),o=Fn(Bn(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=n(a,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}r=lr(r,o),this.staticRulesId=o}else{for(var l=Bn(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=sr(qr(c,e,t,n));l=Bn(l,d+u),s+=d}}if(s){var f=Fn(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=lr(r,f)}}return r},e}(),Kr=v.createContext(void 0);Kr.Consumer;var Zr={};function Jr(e,t,n){var r=ir(e),a=e,o=!Vn(e),i=t.attrs,l=void 0===i?In:i,s=t.componentId,u=void 0===s?function(e,t){var n="string"!=typeof e?"sc":An(e);Zr[n]=(Zr[n]||0)+1;var r="".concat(n,"-").concat(function(e){return Fn($n(e)>>>0)}(En+n+Zr[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):s,c=t.displayName,d=void 0===c?function(e){return Vn(e)?"styled.".concat(e):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(e),")")}(e):c,f=t.displayName&&t.componentId?"".concat(An(t.displayName),"-").concat(t.componentId):t.componentId||u,p=r&&a.attrs?a.attrs.concat(l).filter(Boolean):l,m=t.shouldForwardProp;if(r&&a.shouldForwardProp){var h=a.shouldForwardProp;if(t.shouldForwardProp){var g=t.shouldForwardProp;m=function(e,t){return h(e,t)&&g(e,t)}}else m=h}var y=new Yr(n,f,r?a.componentStyle:void 0);function b(e,t){return function(e,t,n){var r=e.attrs,a=e.componentStyle,o=e.defaultProps,i=e.foldedComponentIds,l=e.styledComponentId,s=e.target,u=v.useContext(Kr),c=Mr(),d=e.shouldForwardProp||c.shouldForwardProp,f=function(e,t,n){return void 0===n&&(n=Pn),e.theme!==n.theme&&e.theme||t||n.theme}(t,u,o)||Pn,p=function(e,t,n){for(var r,a=yt(yt({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var i=or(r=e[o])?r(a):r;for(var l in i)a[l]="className"===l?lr(a[l],i[l]):"style"===l?yt(yt({},a[l]),i[l]):i[l]}return t.className&&(a.className=lr(a.className,t.className)),a}(r,t,f),m=p.as||s,h={};for(var g in p)void 0===p[g]||"$"===g[0]||"as"===g||"theme"===g&&p.theme===f||("forwardedAs"===g?h.as=p.forwardedAs:d&&!d(g,m)||(h[g]=p[g]));var y=function(e,t){var n=Mr();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,p),b=lr(i,l);return y&&(b+=" "+y),p.className&&(b+=" "+p.className),h[Vn(m)&&!On.has(m)?"class":"className"]=b,h.ref=n,(0,v.createElement)(m,h)}(x,e,t)}b.displayName=d;var x=v.forwardRef(b);return x.attrs=p,x.componentStyle=y,x.displayName=d,x.shouldForwardProp=m,x.foldedComponentIds=r?lr(a.foldedComponentIds,a.styledComponentId):"",x.styledComponentId=f,x.target=r?a.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)cr(e,a[r],!0);return e}({},a.defaultProps,e):e}}),dr(x,(function(){return".".concat(x.styledComponentId)})),o&&ar(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Xr(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}new Set;var ea=function(e){return Object.assign(e,{isCss:!0})};function ta(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(or(e)||ur(e))return ea(qr(Xr(In,bt([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?qr(r):ea(qr(Xr(r,t)))}function na(e,t,n){if(void 0===n&&(n=Pn),!t)throw fr(1,t);var r=function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,ta.apply(void 0,bt([r],a,!1)))};return r.attrs=function(r){return na(e,t,yt(yt({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return na(e,t,yt(yt({},n),r))},r}var ra=function(e){return na(Jr,e)},aa=ra;On.forEach((function(e){aa[e]=ra(e)})),function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Gr(e),Pr.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var a=r(sr(qr(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Pr.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}(),function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=Sr(),r=sr([n&&'nonce="'.concat(n,'"'),"".concat(kn,'="true"'),"".concat(jn,'="').concat(En,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw fr(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw fr(2);var n=((t={})[kn]="",t[jn]=En,t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),r=Sr();return r&&(n.nonce=r),[v.createElement("style",yt({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Pr({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw fr(2);return v.createElement(Ur,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw fr(3)}}(),"__sc-".concat(kn,"__");const oa={ProProgressBar:aa.div`
    padding: 1em 0.7em;
    border-radius: 15px;
    margin-top: 1em;
    margin: 1.2em 0.4em 0;
    background-color: #fff6e6;
    border-radius: 1.25em;
    box-shadow: #0000003d 0 3px 8px;
    .wrapper {
      border: 1px solid #fc9300;
      border-radius: 50px;
    }
  `,ProgresBarHeader:aa.div`
    display: flex;
    justify-content: space-between;
    margin: 1em 0px;
  `,ProgressHeading:aa.div`
    font-size: 1.3em;
    font-size: 1.2em;
  `,ProgressBarFooter:aa.div`
    display: flex;
    align-items: center;
    justify-content: end;
    font-size: 0.9em;
    color: #807f7f;
    margin-top: 0.75em;

    .leaderBoard {
      display: flex;
      align-items: center;
      gap: 0.2em;
      cursor: pointer;
      color: #00774b;
      font-size: 1em;
      font-weight: 600;
    }
  `},ia=e=>{var n,r;const[a,o]=(0,v.useState)(1),[i,l]=(0,v.useState)("0");return(0,v.useEffect)((()=>{var t,n;!(null===(t=null==e?void 0:e.nextReward)||void 0===t?void 0:t._id)&&(null===(n=null==e?void 0:e.previousReward)||void 0===n?void 0:n._id)?(o(e.level),l("100")):(o((e.level||0)+1),l(e.progress))}),[e.progress]),(0,t.jsxs)(oa.ProProgressBar,{children:[(0,t.jsxs)(oa.ProgresBarHeader,{children:[(0,t.jsx)(oa.ProgressHeading,{children:"Level "+a}),(0,t.jsxs)("div",{children:[`${e.userScore||0} points `,(null===(n=null==e?void 0:e.nextReward)||void 0===n?void 0:n.points)?`/ ${null===(r=null==e?void 0:e.nextReward)||void 0===r?void 0:r.points} points`:""]})]}),(0,t.jsx)(vt.Z,{className:"wrapper",completed:+i,animateOnRender:!0,maxCompleted:100,bgColor:"#fc9300",isLabelVisible:!1,height:"15px",borderRadius:"50px",baseBgColor:"#fff6e6"}),(0,t.jsx)(oa.ProgressBarFooter,{children:(0,t.jsxs)("div",{children:[+i||0,"% completed"]})})]})},la=e=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"6.914",height:e.height,viewBox:"0 0 6.914 12.458",fill:" #898989",children:(0,t.jsx)("path",{id:"Path_6237","data-name":"Path 6237",d:"M0,4.5,4.7,0,9.632,4.5",transform:"translate(5.914 1.414) rotate(90)",fill:"none",stroke:e.color||"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1"})}),sa=()=>(0,t.jsxs)("svg",{id:"Group_18872","data-name":"Group 18872",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40",children:[(0,t.jsxs)("g",{id:"Ellipse_3","data-name":"Ellipse 3",fill:"none",stroke:"#ddd",strokeWidth:"1",children:[(0,t.jsx)("circle",{cx:"20",cy:"20",r:"20",stroke:"none"}),(0,t.jsx)("circle",{cx:"20",cy:"20",r:"19.5",fill:"none"})]}),(0,t.jsxs)("g",{id:"Group_3","data-name":"Group 3",transform:"translate(20 15)",children:[(0,t.jsx)("path",{id:"Path_1","data-name":"Path 1",d:"M5.8,0,0,5.481l5.8,5.481",transform:"translate(0)",fill:"none",stroke:"#333",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}),(0,t.jsx)("path",{id:"Path_22589","data-name":"Path 22589",d:"M0,0,5.8,5.481,0,10.962",transform:"translate(-6)",fill:"none",stroke:"#333",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})]})]}),ua=()=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19.5",height:"19.5",viewBox:"0 0 19.5 19.5",children:(0,t.jsx)("path",{id:"Path_22581","data-name":"Path 22581",d:"M12,8V21M12,8V6a2,2,0,1,1,2,2Zm0,0V5.5A2.5,2.5,0,1,0,9.5,8ZM5,12H19M5,12A2,2,0,0,1,5,8H19a2,2,0,0,1,0,4M5,12v7a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V12",transform:"translate(-2.25 -2.25)",fill:"none",stroke:"#333",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"})}),ca=()=>(0,t.jsxs)("svg",{id:"Group_18888","data-name":"Group 18888",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"18",viewBox:"0 0 16 18",children:[(0,t.jsxs)("g",{id:"Rectangle_7995","data-name":"Rectangle 7995",transform:"translate(0 4)",fill:"none",stroke:"#333",strokeWidth:"1.5",children:[(0,t.jsx)("path",{d:"M0,0H16a0,0,0,0,1,0,0V11a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z",stroke:"none"}),(0,t.jsx)("path",{d:"M1.5.75h13a.75.75,0,0,1,.75.75V11A2.25,2.25,0,0,1,13,13.25H3A2.25,2.25,0,0,1,.75,11V1.5A.75.75,0,0,1,1.5.75Z",fill:"none"})]}),(0,t.jsxs)("g",{id:"Rectangle_7996","data-name":"Rectangle 7996",transform:"translate(4)",fill:"none",stroke:"#333",strokeWidth:"1.5",children:[(0,t.jsx)("path",{d:"M3,0H5A3,3,0,0,1,8,3V6A0,0,0,0,1,8,6H0A0,0,0,0,1,0,6V3A3,3,0,0,1,3,0Z",stroke:"none"}),(0,t.jsx)("path",{d:"M3,.75H5A2.25,2.25,0,0,1,7.25,3V4.5a.75.75,0,0,1-.75.75h-5A.75.75,0,0,1,.75,4.5V3A2.25,2.25,0,0,1,3,.75Z",fill:"none"})]})]});function da(e){this.message=e}da.prototype=new Error,da.prototype.name="InvalidCharacterError";var fa="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new da("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,r,a=0,o=0,i="";r=t.charAt(o++);~r&&(n=a%4?64*n+r:r,a++%4)?i+=String.fromCharCode(255&n>>(-2*a&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return i};function pa(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(fa(e).replace(/(.)/g,(function(e,t){var n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n})))}(t)}catch(e){return fa(t)}}function ma(e){this.message=e}ma.prototype=new Error,ma.prototype.name="InvalidTokenError";var ha=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function l(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((r=r.apply(e,t||[])).next())}))};class ga{constructor(){this.axiosInstance=ut.create(),this.registerRequestInterceptor()}registerRequestInterceptor(){this.axiosInstance.interceptors.request.use((e=>ha(this,void 0,void 0,(function*(){let t,n=window.localStorage.getItem("access_token");if(n||(n=yield this.createAuthToken()),!n)return!1;{t=function(e,t){if("string"!=typeof e)throw new ma("Invalid token specified");var n=!0===(t=t||{}).header?0:1;try{return JSON.parse(pa(e.split(".")[n]))}catch(e){throw new ma("Invalid token specified: "+e.message)}}(n);const e=1e3*t.exp;(new Date).getTime()>=e&&(n=yield this.createAuthToken())}return e.headers.Authorization=`Bearer ${n}`,e}))),(e=>Promise.reject(e)))}createAuthToken(){return ha(this,void 0,void 0,(function*(){const e=yield gt();return function(e){window.localStorage.setItem("access_token",e)}(e),e}))}getServiceInstance(){return this.axiosInstance}}var va=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function l(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((r=r.apply(e,t||[])).next())}))};const ya=(new ga).getServiceInstance(),ba=(e,t)=>va(void 0,void 0,void 0,(function*(){let n;return n=(yield ya.post(mt.redeem.getWalletBalance,{gamificationUserId:t,gamificationApplicationId:e})).data,n})),xa=(e,t)=>va(void 0,void 0,void 0,(function*(){let n;return n=(yield ya.post(mt.leaderBoard.getUserRewards,{userId:e,appId:t})).data,n}));var wa=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function l(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((r=r.apply(e,t||[])).next())}))};const ka=(new ga).getServiceInstance(),Sa=(e,t)=>wa(void 0,void 0,void 0,(function*(){let n;return n=(yield ka.post(mt.leaderBoard.getUserLeaderBoard,{userId:e,appId:t})).data.data,n})),ja=()=>wa(void 0,void 0,void 0,(function*(){let e=yield ka.get(mt.blobStorage.getSasToken,{});return null!=e?e.data.data:""})),Ea=(0,v.createContext)({});function Na(){return(0,v.useContext)(Ea)}function Ca({children:e}){const[n,r]=(0,v.useState)(null),a=(0,v.useMemo)((()=>({openPopup:e=>{r(e)},closePopup:()=>{r(null)}})),[]);return(0,t.jsxs)(Ea.Provider,{value:a,children:[e,n&&(0,t.jsx)("div",{className:"popup-overlay",children:n})]})}const _a={OrderHistoryModal:aa.div`
		font-family: "DM Sans", sans-serif;

		${"position: fixed !important;\nwidth: 100% !important;\nheight: 100% !important;\noverflow-y: auto !important;\ntop: 0 !important;\nleft: 0 !important;\nz-index: 99999 !important;\npadding: 2em 0 !important;\nbox-sizing: border-box !important;\ndisplay: flex !important;\nalign-items: center !important;\nbackground-color: rgba(0, 0, 0, 0.2);"}
		border: #dedede;
		.modal-order-content {
			box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,
				rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px,
				rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px,
				rgba(0, 0, 0, 0.07) 0px 32px 64px;
			padding: 1em 0 0 !important;
			width: 480px !important;
			margin: auto !important;
			background: white !important;
			border-radius: 0.7rem !important;
			color: black !important;
			min-width: 400px !important;
		}
		.header {
			margin-left: 1.5em;
		}
		.font-size {
			font-size: 1.875rem;
			color: #141414;
			margin: 1em 0;
			font-weight: bold;
		}

		.scrollable-order-container {
			background-color: #f4f4f4;
			display: flex;
			flex-direction: column;
			border-radius: 1em;
			padding: 2em 2em 2em 2em;
		}

		::-webkit-scrollbar {
			width: 0;
			background: transparent;
		}

		.img-order {
			width: 60%;
			padding: 2em 0em 0em 0em;
		}

		.ordered-product-name {
			font-weight: bold;
			color: #333333;
			font-size: 1.4375em;
			opacity: 1;
		}
		.cancel {
			cursor: pointer;
		}

		.font-color {
			color: #848484;
			opacity: 1;
		}

		.order-details {
			display: flex;
			flex-direction: row;
			padding-top: 2em;
			padding-bottom: 2em;
			border-bottom: 2px solid #f4f4f4;
		}

		.margin-x-order {
			margin: 0em 1em 0em 3em;
		}

		.margin-x-transaction {
			margin: 0em 1em 0em 1em;
		}
	`},Ia=e=>{const{closePopup:n}=Na();return(0,t.jsx)(_a.OrderHistoryModal,{className:"modal-wrap",children:(0,t.jsxs)("div",{className:"modal-order-content",children:[(0,t.jsxs)("div",{className:"header",children:[(0,t.jsx)("div",{className:"cancel",onClick:()=>{n()},children:(0,t.jsx)(sa,{})}),(0,t.jsx)("div",{className:"font-size",children:"Order History"})]}),(0,t.jsxs)("div",{className:"scrollable-order-container",children:[(0,t.jsx)("div",{className:"ordered-product-name",children:e.data.productName}),(0,t.jsx)("img",{src:e.data.productImageUrl,className:"img-order"}),(0,t.jsxs)("div",{className:"order-details font-color",children:[(0,t.jsx)("div",{children:"Order Placed on"}),(0,t.jsx)("div",{className:"margin-x-order",children:":"}),(0,t.jsx)("div",{children:e.data.createdOn})]}),(0,t.jsxs)("div",{className:"order-details font-color",children:[(0,t.jsx)("div",{children:"Transaction Amount"}),(0,t.jsx)("div",{className:"margin-x-transaction",children:":"}),(0,t.jsx)("div",{children:e.data.transactionAmount})]})]})]})})},Pa={OrderModal:aa.div`
		${"position: fixed !important;\nwidth: 100% !important;\nheight: 100% !important;\noverflow-y: auto !important;\ntop: 0 !important;\nleft: 0 !important;\nz-index: 99999 !important;\npadding: 2em 0 !important;\nbox-sizing: border-box !important;\ndisplay: flex !important;\nalign-items: center !important;\nbackground-color: rgba(0, 0, 0, 0.2);"}
		border: #dedede;
		.list-order.modal-content {
			box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,
				rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px,
				rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px,
				rgba(0, 0, 0, 0.07) 0px 32px 64px;
			width: 470px !important;
			height: 690px !important;
			overflow: hidden;
			margin: auto !important;
			background: white !important;
			border-radius: 0.7rem !important;
			color: black !important;
			min-width: 400px !important;
		}
		.header {
			gap: 1em;
			font-size: 1.875em;
			padding: 1em;
			.cancel {
				cursor: pointer;
			}
		}
		.font-size {
			font-size: 1.875rem;
			color: #141414;
			font-weight: bold;
			margin: 0.8em 0;
		}

		img {
			border-radius: 1em;
			width: 4.5em;
			height: 4.5em;
			height: auto;
		}

		.scrollable-container {
			width: 100%;
			background-color: #f4f4f4;
			overflow-y: scroll;
			height: inherit;
			border-top-left-radius: 2em;
			border-top-right-radius: 2em;
		}

		::-webkit-scrollbar {
			width: 0;
			background: transparent;
		}

		.flex-items {
			justify-content: space-between;
		}

		.view-order-button {
			background-color: #e8e8e8;
			border-radius: 2rem;
			display: flex;
			align-items: center;
			font-size: 0.875em;
			padding-right: 2em;
			padding-left: 2em;
			padding-top: 0.5em;
			padding-bottom: 0.5em;
			border: none;
			cursor: pointer;
		}

		.product-name {
			font-family: "Poppins", sans-serif;
			display: flex;
			flex-direction: column;
			gap: 1em;
			font-size: 1em;
		}

		.page-content {
			display: flex;
			flex-direction: row;
			gap: 3em;
			border-bottom: 1px solid #e8e8e8;
			padding: 2em;
		}

		.image-name {
			display: flex;
			gap: 1em;
		}

		.margin-right {
			margin-right: 1em;
		}
	`},Oa=e=>{const[n,r]=(0,v.useState)([]),{openPopup:a,closePopup:o}=Na();return(0,v.useEffect)((()=>{var t,n;(t=e.userId,n=e.applicationId,va(void 0,void 0,void 0,(function*(){let e;return e=(yield ya.post(mt.order.getMyOrders,{gamificationUserId:t,gamificationApplicationId:n})).data,e}))).then((e=>{r(e)})).catch((e=>{console.error("Error fetching data:",e)}))}),[]),(0,t.jsx)(Pa.OrderModal,{className:"modal-wrap",children:(0,t.jsxs)("div",{className:"list-order modal-content",children:[(0,t.jsxs)("div",{className:"header",children:[(0,t.jsx)("div",{className:"cancel",onClick:()=>{o()},children:(0,t.jsx)(sa,{})}),(0,t.jsx)("div",{className:"font-size",children:"My Orders"})]}),(0,t.jsx)("div",{className:"scrollable-container",children:n.map((e=>(0,t.jsxs)("div",{className:"page-content",children:[(0,t.jsxs)("div",{className:"image-name",children:[(0,t.jsx)("img",{src:e.productImageUrl,className:""}),(0,t.jsxs)("div",{className:"product-name",children:[e.productName,(0,t.jsx)("div",{children:(0,t.jsxs)("button",{className:" view-order-button",onClick:()=>{return n=e,void a((0,t.jsx)(Ia,{data:n}));var n},children:[(0,t.jsx)("span",{className:"margin-right",children:"View Order History"}),(0,t.jsx)(la,{height:"30",color:""})]})})]})]}),(0,t.jsx)("div",{children:(e.orderStatus,(0,t.jsx)("span",{className:"text-green-500",children:e.orderStatus}))})]},e._id)))})]})})},Ra=()=>(0,t.jsxs)("svg",{id:"Group_18872","data-name":"Group 18872",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40",children:[(0,t.jsxs)("g",{id:"Ellipse_3","data-name":"Ellipse 3",fill:"none",stroke:"#ddd",strokeWidth:"1",children:[(0,t.jsx)("circle",{cx:"20",cy:"20",r:"20",stroke:"none"}),(0,t.jsx)("circle",{cx:"20",cy:"20",r:"19.5",fill:"none"})]}),(0,t.jsxs)("g",{id:"Group_3","data-name":"Group 3",transform:"translate(14.21 15)",children:[(0,t.jsx)("path",{id:"Path_1","data-name":"Path 1",d:"M5.8,0,0,5.481l5.8,5.481",transform:"translate(0)",fill:"none",stroke:"#333",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}),(0,t.jsx)("path",{id:"Path_22589","data-name":"Path 22589",d:"M17.58,5.481H6.9",transform:"translate(-6)",fill:"none",stroke:"#333",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})]})]});var Ta=e=>"checkbox"===e.type,Aa=e=>e instanceof Date,za=e=>null==e;const Da=e=>"object"==typeof e;var La=e=>!za(e)&&!Array.isArray(e)&&Da(e)&&!Aa(e),Fa=e=>La(e)&&e.target?Ta(e.target)?e.target.checked:e.target.value:e,Ma=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),Ua=e=>{const t=e.constructor&&e.constructor.prototype;return La(t)&&t.hasOwnProperty("isPrototypeOf")},Ba="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function $a(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(Ba&&(e instanceof Blob||e instanceof FileList)||!n&&!La(e))return e;if(t=n?[]:{},n||Ua(e))for(const n in e)e.hasOwnProperty(n)&&(t[n]=$a(e[n]));else t=e}return t}var Va=e=>Array.isArray(e)?e.filter(Boolean):[],Ha=e=>void 0===e,Wa=(e,t,n)=>{if(!t||!La(e))return n;const r=Va(t.split(/[,[\].]+?/)).reduce(((e,t)=>za(e)?e:e[t]),e);return Ha(r)||r===e?Ha(e[t])?n:e[t]:r},qa=e=>"boolean"==typeof e;const Ga={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Qa={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Ya="pattern",Ka="required";v.createContext(null);var Za=e=>La(e)&&!Object.keys(e).length,Ja=e=>Array.isArray(e)?e:[e];var Xa=e=>"string"==typeof e,eo=(e,t,n,r,a)=>Xa(e)?(r&&t.watch.add(e),Wa(n,e,a)):Array.isArray(e)?e.map((e=>(r&&t.watch.add(e),Wa(n,e)))):(r&&(t.watchAll=!0),n),to=e=>/^\w*$/.test(e),no=e=>Va(e.replace(/["|']|\]/g,"").split(/\.|\[/)),ro=(e,t,n)=>{let r=-1;const a=to(t)?[t]:no(t),o=a.length,i=o-1;for(;++r<o;){const t=a[r];let o=n;if(r!==i){const n=e[t];o=La(n)||Array.isArray(n)?n:isNaN(+a[r+1])?{}:[]}e[t]=o,e=e[t]}return e},ao=(e,t,n,r,a)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:a||!0}}:{},oo=e=>({isOnSubmit:!e||e===Qa.onSubmit,isOnBlur:e===Qa.onBlur,isOnChange:e===Qa.onChange,isOnAll:e===Qa.all,isOnTouch:e===Qa.onTouched}),io=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))));const lo=(e,t,n,r)=>{for(const a of n||Object.keys(e)){const n=Wa(e,a);if(n){const{_f:e,...o}=n;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],a)&&!r)break;if(e.ref&&t(e.ref,e.name)&&!r)break;lo(o,t)}else La(o)&&lo(o,t)}}};var so=(e,t,n)=>{const r=Va(Wa(e,n));return ro(r,"root",t[n]),ro(e,n,r),e},uo=e=>"file"===e.type,co=e=>"function"==typeof e,fo=e=>{if(!Ba)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},po=e=>Xa(e),mo=e=>"radio"===e.type,ho=e=>e instanceof RegExp;const go={value:!1,isValid:!1},vo={value:!0,isValid:!0};var yo=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Ha(e[0].attributes.value)?Ha(e[0].value)||""===e[0].value?vo:{value:e[0].value,isValid:!0}:vo:go}return go};const bo={isValid:!1,value:null};var xo=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),bo):bo;function wo(e,t,n="validate"){if(po(e)||Array.isArray(e)&&e.every(po)||qa(e)&&!e)return{type:n,message:po(e)?e:"",ref:t}}var ko=e=>La(e)&&!ho(e)?e:{value:e,message:""},So=async(e,t,n,r,a)=>{const{ref:o,refs:i,required:l,maxLength:s,minLength:u,min:c,max:d,pattern:f,validate:p,name:m,valueAsNumber:h,mount:g,disabled:v}=e._f,y=Wa(t,m);if(!g||v)return{};const b=i?i[0]:o,x=e=>{r&&b.reportValidity&&(b.setCustomValidity(qa(e)?"":e||""),b.reportValidity())},w={},k=mo(o),S=Ta(o),j=k||S,E=(h||uo(o))&&Ha(o.value)&&Ha(y)||fo(o)&&""===o.value||""===y||Array.isArray(y)&&!y.length,N=ao.bind(null,m,n,w),C=(e,t,n,r="maxLength",a="minLength")=>{const i=e?t:n;w[m]={type:e?r:a,message:i,ref:o,...N(e?r:a,i)}};if(a?!Array.isArray(y)||!y.length:l&&(!j&&(E||za(y))||qa(y)&&!y||S&&!yo(i).isValid||k&&!xo(i).isValid)){const{value:e,message:t}=po(l)?{value:!!l,message:l}:ko(l);if(e&&(w[m]={type:Ka,message:t,ref:b,...N(Ka,t)},!n))return x(t),w}if(!(E||za(c)&&za(d))){let e,t;const r=ko(d),a=ko(c);if(za(y)||isNaN(y)){const n=o.valueAsDate||new Date(y),i=e=>new Date((new Date).toDateString()+" "+e),l="time"==o.type,s="week"==o.type;Xa(r.value)&&y&&(e=l?i(y)>i(r.value):s?y>r.value:n>new Date(r.value)),Xa(a.value)&&y&&(t=l?i(y)<i(a.value):s?y<a.value:n<new Date(a.value))}else{const n=o.valueAsNumber||(y?+y:y);za(r.value)||(e=n>r.value),za(a.value)||(t=n<a.value)}if((e||t)&&(C(!!e,r.message,a.message,"max","min"),!n))return x(w[m].message),w}if((s||u)&&!E&&(Xa(y)||a&&Array.isArray(y))){const e=ko(s),t=ko(u),r=!za(e.value)&&y.length>+e.value,a=!za(t.value)&&y.length<+t.value;if((r||a)&&(C(r,e.message,t.message),!n))return x(w[m].message),w}if(f&&!E&&Xa(y)){const{value:e,message:t}=ko(f);if(ho(e)&&!y.match(e)&&(w[m]={type:Ya,message:t,ref:o,...N(Ya,t)},!n))return x(t),w}if(p)if(co(p)){const e=wo(await p(y,t),b);if(e&&(w[m]={...e,...N("validate",e.message)},!n))return x(e.message),w}else if(La(p)){let e={};for(const r in p){if(!Za(e)&&!n)break;const a=wo(await p[r](y,t),b,r);a&&(e={...a,...N(r,a.message)},x(a.message),n&&(w[m]=e))}if(!Za(e)&&(w[m]={ref:b,...e},!n))return w}return x(!0),w};function jo(e,t){const n=Array.isArray(t)?t:to(t)?[t]:no(t),r=1===n.length?e:function(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=Ha(e)?r++:e[t[r++]];return e}(e,n),a=n.length-1,o=n[a];return r&&delete r[o],0!==a&&(La(r)&&Za(r)||Array.isArray(r)&&function(e){for(const t in e)if(e.hasOwnProperty(t)&&!Ha(e[t]))return!1;return!0}(r))&&jo(e,n.slice(0,-1)),e}var Eo=()=>{let e=[];return{get observers(){return e},next:t=>{for(const n of e)n.next&&n.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}},No=e=>za(e)||!Da(e);function Co(e,t){if(No(e)||No(t))return e===t;if(Aa(e)&&Aa(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const a of n){const n=e[a];if(!r.includes(a))return!1;if("ref"!==a){const e=t[a];if(Aa(n)&&Aa(e)||La(n)&&La(e)||Array.isArray(n)&&Array.isArray(e)?!Co(n,e):n!==e)return!1}}return!0}var _o=e=>"select-multiple"===e.type,Io=e=>mo(e)||Ta(e),Po=e=>fo(e)&&e.isConnected,Oo=e=>{for(const t in e)if(co(e[t]))return!0;return!1};function Ro(e,t={}){const n=Array.isArray(e);if(La(e)||n)for(const n in e)Array.isArray(e[n])||La(e[n])&&!Oo(e[n])?(t[n]=Array.isArray(e[n])?[]:{},Ro(e[n],t[n])):za(e[n])||(t[n]=!0);return t}function To(e,t,n){const r=Array.isArray(e);if(La(e)||r)for(const r in e)Array.isArray(e[r])||La(e[r])&&!Oo(e[r])?Ha(t)||No(n[r])?n[r]=Array.isArray(e[r])?Ro(e[r],[]):{...Ro(e[r])}:To(e[r],za(t)?{}:t[r],n[r]):n[r]=!Co(e[r],t[r]);return n}var Ao=(e,t)=>To(e,t,Ro(t)),zo=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>Ha(e)?e:t?""===e?NaN:e?+e:e:n&&Xa(e)?new Date(e):r?r(e):e;function Do(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return uo(t)?t.files:mo(t)?xo(e.refs).value:_o(t)?[...t.selectedOptions].map((({value:e})=>e)):Ta(t)?yo(e.refs).value:zo(Ha(t.value)?e.ref.value:t.value,e)}var Lo=(e,t,n,r)=>{const a={};for(const n of e){const e=Wa(t,n);e&&ro(a,n,e._f)}return{criteriaMode:n,names:[...e],fields:a,shouldUseNativeValidation:r}},Fo=e=>Ha(e)?e:ho(e)?e.source:La(e)?ho(e.value)?e.value.source:e.value:e,Mo=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Uo(e,t,n){const r=Wa(e,n);if(r||to(n))return{error:r,name:n};const a=n.split(".");for(;a.length;){const r=a.join("."),o=Wa(t,r),i=Wa(e,r);if(o&&!Array.isArray(o)&&n!==r)return{name:n};if(i&&i.type)return{name:r,error:i};a.pop()}return{name:n}}var Bo=(e,t,n,r,a)=>!a.isOnAll&&(!n&&a.isOnTouch?!(t||e):(n?r.isOnBlur:a.isOnBlur)?!e:!(n?r.isOnChange:a.isOnChange)||e),$o=(e,t)=>!Va(Wa(e,t)).length&&jo(e,t);const Vo={mode:Qa.onSubmit,reValidateMode:Qa.onChange,shouldFocusError:!0};function Ho(e={},t){let n,r={...Vo,...e},a={submitCount:0,isDirty:!1,isLoading:co(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:r.errors||{},disabled:r.disabled||!1},o={},i=(La(r.defaultValues)||La(r.values))&&$a(r.defaultValues||r.values)||{},l=r.shouldUnregister?{}:$a(i),s={action:!1,mount:!1,watch:!1},u={mount:new Set,unMount:new Set,array:new Set,watch:new Set},c=0;const d={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={values:Eo(),array:Eo(),state:Eo()},p=oo(r.mode),m=oo(r.reValidateMode),h=r.criteriaMode===Qa.all,g=async e=>{if(d.isValid||e){const e=r.resolver?Za((await x()).errors):await w(o,!0);e!==a.isValid&&f.state.next({isValid:e})}},v=e=>d.isValidating&&f.state.next({isValidating:e}),y=(e,t,n,r)=>{const a=Wa(o,e);if(a){const o=Wa(l,e,Ha(n)?Wa(i,e):n);Ha(o)||r&&r.defaultChecked||t?ro(l,e,t?o:Do(a._f)):j(e,o),s.mount&&g()}},b=(e,t,n,r,l)=>{let s=!1,u=!1;const c={name:e},p=!(!Wa(o,e)||!Wa(o,e)._f.disabled);if(!n||r){d.isDirty&&(u=a.isDirty,a.isDirty=c.isDirty=k(),s=u!==c.isDirty);const n=p||Co(Wa(i,e),t);u=!(p||!Wa(a.dirtyFields,e)),n||p?jo(a.dirtyFields,e):ro(a.dirtyFields,e,!0),c.dirtyFields=a.dirtyFields,s=s||d.dirtyFields&&u!==!n}if(n){const t=Wa(a.touchedFields,e);t||(ro(a.touchedFields,e,n),c.touchedFields=a.touchedFields,s=s||d.touchedFields&&t!==n)}return s&&l&&f.state.next(c),s?c:{}},x=async e=>r.resolver(l,r.context,Lo(e||u.mount,o,r.criteriaMode,r.shouldUseNativeValidation)),w=async(e,t,n={valid:!0})=>{for(const o in e){const i=e[o];if(i){const{_f:e,...o}=i;if(e){const o=u.array.has(e.name),s=await So(i,l,h,r.shouldUseNativeValidation&&!t,o);if(s[e.name]&&(n.valid=!1,t))break;!t&&(Wa(s,e.name)?o?so(a.errors,s,e.name):ro(a.errors,e.name,s[e.name]):jo(a.errors,e.name))}o&&await w(o,t,n)}}return n.valid},k=(e,t)=>(e&&t&&ro(l,e,t),!Co(P(),i)),S=(e,t,n)=>eo(e,u,{...s.mount?l:Ha(t)?i:Xa(e)?{[e]:t}:t},n,t),j=(e,t,n={})=>{const r=Wa(o,e);let a=t;if(r){const n=r._f;n&&(!n.disabled&&ro(l,e,zo(t,n)),a=fo(n.ref)&&za(t)?"":t,_o(n.ref)?[...n.ref.options].forEach((e=>e.selected=a.includes(e.value))):n.refs?Ta(n.ref)?n.refs.length>1?n.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(a)?!!a.find((t=>t===e.value)):a===e.value))):n.refs[0]&&(n.refs[0].checked=!!a):n.refs.forEach((e=>e.checked=e.value===a)):uo(n.ref)?n.ref.value="":(n.ref.value=a,n.ref.type||f.values.next({name:e,values:{...l}})))}(n.shouldDirty||n.shouldTouch)&&b(e,a,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&I(e)},E=(e,t,n)=>{for(const r in t){const a=t[r],i=`${e}.${r}`,l=Wa(o,i);!u.array.has(e)&&No(a)&&(!l||l._f)||Aa(a)?j(i,a,n):E(i,a,n)}},N=(e,n,r={})=>{const c=Wa(o,e),p=u.array.has(e),m=$a(n);ro(l,e,m),p?(f.array.next({name:e,values:{...l}}),(d.isDirty||d.dirtyFields)&&r.shouldDirty&&f.state.next({name:e,dirtyFields:Ao(i,l),isDirty:k(e,m)})):!c||c._f||za(m)?j(e,m,r):E(e,m,r),io(e,u)&&f.state.next({...a}),f.values.next({name:e,values:{...l}}),!s.mount&&t()},C=async t=>{const i=t.target;let s=i.name,y=!0;const k=Wa(o,s),S=e=>{y=Number.isNaN(e)||e===Wa(l,s,e)};if(k){let j,E;const N=i.type?Do(k._f):Fa(t),C=t.type===Ga.BLUR||t.type===Ga.FOCUS_OUT,_=!Mo(k._f)&&!r.resolver&&!Wa(a.errors,s)&&!k._f.deps||Bo(C,Wa(a.touchedFields,s),a.isSubmitted,m,p),P=io(s,u,C);ro(l,s,N),C?(k._f.onBlur&&k._f.onBlur(t),n&&n(0)):k._f.onChange&&k._f.onChange(t);const O=b(s,N,C,!1),R=!Za(O)||P;if(!C&&f.values.next({name:s,type:t.type,values:{...l}}),_)return d.isValid&&g(),R&&f.state.next({name:s,...P?{}:O});if(!C&&P&&f.state.next({...a}),v(!0),r.resolver){const{errors:e}=await x([s]);if(S(N),y){const t=Uo(a.errors,o,s),n=Uo(e,o,t.name||s);j=n.error,s=n.name,E=Za(e)}}else j=(await So(k,l,h,r.shouldUseNativeValidation))[s],S(N),y&&(j?E=!1:d.isValid&&(E=await w(o,!0)));y&&(k._f.deps&&I(k._f.deps),((t,r,o,i)=>{const l=Wa(a.errors,t),s=d.isValid&&qa(r)&&a.isValid!==r;var u;if(e.delayError&&o?(u=()=>((e,t)=>{ro(a.errors,e,t),f.state.next({errors:a.errors})})(t,o),n=e=>{clearTimeout(c),c=setTimeout(u,e)},n(e.delayError)):(clearTimeout(c),n=null,o?ro(a.errors,t,o):jo(a.errors,t)),(o?!Co(l,o):l)||!Za(i)||s){const e={...i,...s&&qa(r)?{isValid:r}:{},errors:a.errors,name:t};a={...a,...e},f.state.next(e)}v(!1)})(s,E,j,O))}},_=(e,t)=>{if(Wa(a.errors,t)&&e.focus)return e.focus(),1},I=async(e,t={})=>{let n,i;const l=Ja(e);if(v(!0),r.resolver){const t=await(async e=>{const{errors:t}=await x(e);if(e)for(const n of e){const e=Wa(t,n);e?ro(a.errors,n,e):jo(a.errors,n)}else a.errors=t;return t})(Ha(e)?e:l);n=Za(t),i=e?!l.some((e=>Wa(t,e))):n}else e?(i=(await Promise.all(l.map((async e=>{const t=Wa(o,e);return await w(t&&t._f?{[e]:t}:t)})))).every(Boolean),(i||a.isValid)&&g()):i=n=await w(o);return f.state.next({...!Xa(e)||d.isValid&&n!==a.isValid?{}:{name:e},...r.resolver||!e?{isValid:n}:{},errors:a.errors,isValidating:!1}),t.shouldFocus&&!i&&lo(o,_,e?l:u.mount),i},P=e=>{const t={...i,...s.mount?l:{}};return Ha(e)?t:Xa(e)?Wa(t,e):e.map((e=>Wa(t,e)))},O=(e,t)=>({invalid:!!Wa((t||a).errors,e),isDirty:!!Wa((t||a).dirtyFields,e),isTouched:!!Wa((t||a).touchedFields,e),error:Wa((t||a).errors,e)}),R=(e,t,n)=>{const r=(Wa(o,e,{_f:{}})._f||{}).ref;ro(a.errors,e,{...t,ref:r}),f.state.next({name:e,errors:a.errors,isValid:!1}),n&&n.shouldFocus&&r&&r.focus&&r.focus()},T=(e,t={})=>{for(const n of e?Ja(e):u.mount)u.mount.delete(n),u.array.delete(n),t.keepValue||(jo(o,n),jo(l,n)),!t.keepError&&jo(a.errors,n),!t.keepDirty&&jo(a.dirtyFields,n),!t.keepTouched&&jo(a.touchedFields,n),!r.shouldUnregister&&!t.keepDefaultValue&&jo(i,n);f.values.next({values:{...l}}),f.state.next({...a,...t.keepDirty?{isDirty:k()}:{}}),!t.keepIsValid&&g()},A=({disabled:e,name:t,field:n,fields:r,value:a})=>{if(qa(e)){const o=e?void 0:Ha(a)?Do(n?n._f:Wa(r,t)._f):a;ro(l,t,o),b(t,o,!1,!1,!0)}},z=(e,t={})=>{let n=Wa(o,e);const a=qa(t.disabled);return ro(o,e,{...n||{},_f:{...n&&n._f?n._f:{ref:{name:e}},name:e,mount:!0,...t}}),u.mount.add(e),n?A({field:n,disabled:t.disabled,name:e,value:t.value}):y(e,!0,t.value),{...a?{disabled:t.disabled}:{},...r.progressive?{required:!!t.required,min:Fo(t.min),max:Fo(t.max),minLength:Fo(t.minLength),maxLength:Fo(t.maxLength),pattern:Fo(t.pattern)}:{},name:e,onChange:C,onBlur:C,ref:a=>{if(a){z(e,t),n=Wa(o,e);const r=Ha(a.value)&&a.querySelectorAll&&a.querySelectorAll("input,select,textarea")[0]||a,l=Io(r),s=n._f.refs||[];if(l?s.find((e=>e===r)):r===n._f.ref)return;ro(o,e,{_f:{...n._f,...l?{refs:[...s.filter(Po),r,...Array.isArray(Wa(i,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),y(e,!1,void 0,r)}else n=Wa(o,e,{}),n._f&&(n._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&(!Ma(u.array,e)||!s.action)&&u.unMount.add(e)}}},D=()=>r.shouldFocusError&&lo(o,_,u.mount),L=(e,t)=>async n=>{n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let i=$a(l);if(f.state.next({isSubmitting:!0}),r.resolver){const{errors:e,values:t}=await x();a.errors=e,i=t}else await w(o);jo(a.errors,"root"),Za(a.errors)?(f.state.next({errors:{}}),await e(i,n)):(t&&await t({...a.errors},n),D(),setTimeout(D)),f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Za(a.errors),submitCount:a.submitCount+1,errors:a.errors})},F=(n,r={})=>{const c=n?$a(n):i,p=$a(c),m=n&&!Za(n)?p:i;if(r.keepDefaultValues||(i=c),!r.keepValues){if(r.keepDirtyValues)for(const e of u.mount)Wa(a.dirtyFields,e)?ro(m,e,Wa(l,e)):N(e,Wa(m,e));else{if(Ba&&Ha(n))for(const e of u.mount){const t=Wa(o,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(fo(e)){const t=e.closest("form");if(t){t.reset();break}}}}o={}}l=e.shouldUnregister?r.keepDefaultValues?$a(i):{}:$a(m),f.array.next({values:{...m}}),f.values.next({values:{...m}})}u={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!s.mount&&t(),s.mount=!d.isValid||!!r.keepIsValid,s.watch=!!e.shouldUnregister,f.state.next({submitCount:r.keepSubmitCount?a.submitCount:0,isDirty:r.keepDirty?a.isDirty:!(!r.keepDefaultValues||Co(n,i)),isSubmitted:!!r.keepIsSubmitted&&a.isSubmitted,dirtyFields:r.keepDirtyValues?a.dirtyFields:r.keepDefaultValues&&n?Ao(i,n):{},touchedFields:r.keepTouched?a.touchedFields:{},errors:r.keepErrors?a.errors:{},isSubmitSuccessful:!!r.keepIsSubmitSuccessful&&a.isSubmitSuccessful,isSubmitting:!1})},M=(e,t)=>F(co(e)?e(l):e,t);return{control:{register:z,unregister:T,getFieldState:O,handleSubmit:L,setError:R,_executeSchema:x,_getWatch:S,_getDirty:k,_updateValid:g,_removeUnmounted:()=>{for(const e of u.unMount){const t=Wa(o,e);t&&(t._f.refs?t._f.refs.every((e=>!Po(e))):!Po(t._f.ref))&&T(e)}u.unMount=new Set},_updateFieldArray:(e,t=[],n,r,u=!0,c=!0)=>{if(r&&n){if(s.action=!0,c&&Array.isArray(Wa(o,e))){const t=n(Wa(o,e),r.argA,r.argB);u&&ro(o,e,t)}if(c&&Array.isArray(Wa(a.errors,e))){const t=n(Wa(a.errors,e),r.argA,r.argB);u&&ro(a.errors,e,t),$o(a.errors,e)}if(d.touchedFields&&c&&Array.isArray(Wa(a.touchedFields,e))){const t=n(Wa(a.touchedFields,e),r.argA,r.argB);u&&ro(a.touchedFields,e,t)}d.dirtyFields&&(a.dirtyFields=Ao(i,l)),f.state.next({name:e,isDirty:k(e,t),dirtyFields:a.dirtyFields,errors:a.errors,isValid:a.isValid})}else ro(l,e,t)},_updateDisabledField:A,_getFieldArray:t=>Va(Wa(s.mount?l:i,t,e.shouldUnregister?Wa(i,t,[]):[])),_reset:F,_resetDefaultValues:()=>co(r.defaultValues)&&r.defaultValues().then((e=>{M(e,r.resetOptions),f.state.next({isLoading:!1})})),_updateFormState:e=>{a={...a,...e}},_disableForm:e=>{qa(e)&&(f.state.next({disabled:e}),lo(o,((t,n)=>{let r=e;const a=Wa(o,n);a&&qa(a._f.disabled)&&(r||(r=a._f.disabled)),t.disabled=r}),0,!1))},_subjects:f,_proxyFormState:d,_setErrors:e=>{a.errors=e,f.state.next({errors:a.errors,isValid:!1})},get _fields(){return o},get _formValues(){return l},get _state(){return s},set _state(e){s=e},get _defaultValues(){return i},get _names(){return u},set _names(e){u=e},get _formState(){return a},set _formState(e){a=e},get _options(){return r},set _options(e){r={...r,...e}}},trigger:I,register:z,handleSubmit:L,watch:(e,t)=>co(e)?f.values.subscribe({next:n=>e(S(void 0,t),n)}):S(e,t,!0),setValue:N,getValues:P,reset:M,resetField:(e,t={})=>{Wa(o,e)&&(Ha(t.defaultValue)?N(e,$a(Wa(i,e))):(N(e,t.defaultValue),ro(i,e,$a(t.defaultValue))),t.keepTouched||jo(a.touchedFields,e),t.keepDirty||(jo(a.dirtyFields,e),a.isDirty=t.defaultValue?k(e,$a(Wa(i,e))):k()),t.keepError||(jo(a.errors,e),d.isValid&&g()),f.state.next({...a}))},clearErrors:e=>{e&&Ja(e).forEach((e=>jo(a.errors,e))),f.state.next({errors:e?a.errors:{}})},unregister:T,setError:R,setFocus:(e,t={})=>{const n=Wa(o,e),r=n&&n._f;if(r){const e=r.refs?r.refs[0]:r.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:O}}function Wo(e={}){const t=v.useRef(),n=v.useRef(),[r,a]=v.useState({isDirty:!1,isValidating:!1,isLoading:co(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:co(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...Ho(e,(()=>a((e=>({...e}))))),formState:r});const o=t.current.control;return o._options=e,function(e){const t=v.useRef(e);t.current=e,v.useEffect((()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}}),[e.disabled])}({subject:o._subjects.state,next:e=>{((e,t,n,r)=>{n(e);const{name:a,...o}=e;return Za(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find((e=>t[e]===(!r||Qa.all)))})(e,o._proxyFormState,o._updateFormState,!0)&&a({...o._formState})}}),v.useEffect((()=>o._disableForm(e.disabled)),[o,e.disabled]),v.useEffect((()=>{if(o._proxyFormState.isDirty){const e=o._getDirty();e!==r.isDirty&&o._subjects.state.next({isDirty:e})}}),[o,r.isDirty]),v.useEffect((()=>{e.values&&!Co(e.values,n.current)?(o._reset(e.values,o._options.resetOptions),n.current=e.values,a((e=>({...e})))):o._resetDefaultValues()}),[e.values,o]),v.useEffect((()=>{e.errors&&o._setErrors(e.errors)}),[e.errors,o]),v.useEffect((()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()})),t.current.formState=((e,t,n,r=!0)=>{const a={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(a,o,{get:()=>{const a=o;return t._proxyFormState[a]!==Qa.all&&(t._proxyFormState[a]=!r||Qa.all),n&&(n[a]=!0),e[a]}});return a})(r,o),t.current}const qo=()=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"25",viewBox:"0 0 24 25",children:(0,t.jsxs)("g",{id:"Group_18856","data-name":"Group 18856",transform:"translate(5073.851 -3143.083)",children:[(0,t.jsxs)("g",{id:"Group_18438","data-name":"Group 18438",transform:"translate(-5074 3143)",children:[(0,t.jsx)("path",{id:"Path_22584","data-name":"Path 22584",d:"M12,0A12,12,0,1,1,0,12,12,12,0,0,1,12,0Z",transform:"translate(0.149 1.083)",fill:"#94531a"}),(0,t.jsx)("circle",{id:"Ellipse_406","data-name":"Ellipse 406",cx:"12",cy:"12",r:"12",transform:"translate(0.149 0.083)",fill:"#f5da48"}),(0,t.jsx)("circle",{id:"Ellipse_405","data-name":"Ellipse 405",cx:"9",cy:"9",r:"9",transform:"translate(3.149 3.083)",fill:"#b58f39"}),(0,t.jsx)("path",{id:"Polygon_5","data-name":"Polygon 5",d:"M6.086,2.065a1,1,0,0,1,1.829,0l.843,1.9a1,1,0,0,0,.823.591l2.072.191A1,1,0,0,1,12.212,6.5L10.685,7.817a1,1,0,0,0-.323.982l.45,1.963a1,1,0,0,1-1.475,1.089L7.5,10.789a1,1,0,0,0-1,0L4.662,11.851a1,1,0,0,1-1.475-1.089L3.637,8.8a1,1,0,0,0-.323-.982L1.788,6.5A1,1,0,0,1,2.348,4.75L4.42,4.559a1,1,0,0,0,.823-.591Z",transform:"translate(5.149 5.083)",fill:"#94531a"}),(0,t.jsx)("path",{id:"Polygon_6","data-name":"Polygon 6",d:"M6.086,2.065a1,1,0,0,1,1.829,0l.843,1.9a1,1,0,0,0,.823.591l2.072.191A1,1,0,0,1,12.212,6.5L10.685,7.817a1,1,0,0,0-.323.982l.45,1.963a1,1,0,0,1-1.475,1.089L7.5,10.789a1,1,0,0,0-1,0L4.662,11.851a1,1,0,0,1-1.475-1.089L3.637,8.8a1,1,0,0,0-.323-.982L1.788,6.5A1,1,0,0,1,2.348,4.75L4.42,4.559a1,1,0,0,0,.823-.591Z",transform:"translate(5.149 4.083)",fill:"#f5da48"})]}),(0,t.jsx)("path",{id:"Path_22198","data-name":"Path 22198",d:"M-5072.623,3155.679c-.613-3.612,3.343-11.728,11.973-11.432",transform:"translate(-0.174 -0.164)",fill:"none",stroke:"#fff6d3",strokeLinecap:"round",strokeWidth:"1"}),(0,t.jsx)("path",{id:"Path_22200","data-name":"Path 22200",d:"M-5060.711,3144.24c.613,3.612-3.343,11.728-11.973,11.432",transform:"translate(9.966 10.752)",fill:"none",stroke:"#d1b23a",strokeLinecap:"round",strokeWidth:"1"}),(0,t.jsx)("path",{id:"Path_22199","data-name":"Path 22199",d:"M-5065.75,3153.6s2.614.047,3.161-.411a10.308,10.308,0,0,0,1.442-2.706",transform:"translate(-0.704 -0.685)",fill:"none",stroke:"#f8e59c",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1"})]})}),Go={ConfirmModal:aa.div`
    ${"position: fixed !important;\nwidth: 100% !important;\nheight: 100% !important;\noverflow-y: auto !important;\ntop: 0 !important;\nleft: 0 !important;\nz-index: 99999 !important;\npadding: 2em 0 !important;\nbox-sizing: border-box !important;\ndisplay: flex !important;\nalign-items: center !important;\nbackground-color: rgba(0, 0, 0, 0.2);"}
    font-family: "DM Sans", sans-serif;

    .redeem-confirm.modal-content {
      padding: 2em !important;
      width: 28% !important;
      height: 550px;
      margin: auto !important;
      background: white !important;
      border-radius: 1.5rem !important;
      color: black !important;
      min-width: 400px !important;
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .close {
          display: flex;
          gap: 1em;
        }
        h2 {
          font-weight: 700;
          font-size: 2em;
          letter-spacing: 0.75px;
          margin: 0;
        }
        .wallet {
          display: flex;
          align-items: center;
          gap: 0.5em;
          button {
            border: none;
            background: none;
            color: #a2a2a2;
            letter-spacing: 0.5px;
            font-size: 0.9em;
            cursor: pointer;
          }
          .coin {
            display: flex;
            gap: 5px;
            align-items: center;
            border: 1px solid #dddddd;
            background: #efefef;
            border-radius: 1.4em;
            padding: 0.4em 0.5em;
            .img-width {
              width: 1.75em;
            }
          }
        }
      }
      .success-details {
        margin: 20px;
        text-align: center;
        .success-img {
          display: flex;
          justify-content: center;
          img.success {
            content: url("${ft}/${pt}/success.jpg");
            margin-bottom: 10px;
          }
        }
        .success-heading {
          font-weight: 500;
          font-size: medium;
          margin-bottom: 10px;
        }
        .order-description {
          font-size: small;
          text-align: center;
          margin-top: 20px;
          margin-bottom: 10px;
          .balance-debited {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 10px;
            img.wallet-coin {
              width: 2em;
              height: 2em;
            }
          }
        }
      }
      .border {
        border-top: 2px solid #e8e8e8;
      }
      .success-footer {
        text-align: center;
        margin: 30px;
        .delivery {
          display: flex;
          flex-direction: column;
          gap: 1em;
        }
        .delivered {
          color: #898989;
          font-size: small;
        }
        .navigation-buttons {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          button {
            margin-top: 10px;
            border: none;

            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #e8e8e8;
            border-radius: 15px;
            padding: 0.5em 1em;
            cursor: pointer;
          }
        }
      }
    }
    .cancel {
      cursor: pointer;
    }
  `},Qo=e=>{var n,r,a,o;const{openPopup:i,closePopup:l}=Na(),[s,u]=(0,v.useState)(""),c=()=>{i((0,t.jsx)(oi,{userId:e.userId,applicationId:e.applicationId}))};return(0,v.useEffect)((()=>{ja().then((e=>{u(e)})).catch((e=>{console.error("Error fetching data:",e)}))}),[e.walletData]),(0,t.jsx)(Go.ConfirmModal,{children:(0,t.jsxs)("div",{className:"redeem-confirm modal-content",children:[(0,t.jsx)("header",{children:(0,t.jsxs)("div",{className:"close",children:[(0,t.jsx)("div",{className:"cancel",onClick:()=>{l()},children:(0,t.jsx)(sa,{})}),(0,t.jsxs)("div",{className:"wallet",children:[(0,t.jsx)("button",{onClick:c,children:"Go to Wallet"}),(0,t.jsxs)("div",{className:"coin",children:[(0,t.jsx)("img",{className:"img-width",src:(null===(n=e.walletData)||void 0===n?void 0:n.imageUrl)+s,alt:""}),(0,t.jsx)("div",{children:(null===(r=e.walletData)||void 0===r?void 0:r.balance)||0})]})]})]})}),(0,t.jsx)("h2",{children:"Redeem"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"success-details",children:(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"success-img",children:(0,t.jsx)("img",{alt:"success",className:"success"})}),(0,t.jsx)("div",{className:"success-heading",children:"Order placed Successfully"}),(0,t.jsxs)("div",{children:[(null===(a=e.product)||void 0===a?void 0:a.eligibleMoney)||0," coins"]})]}),(0,t.jsxs)("div",{className:"order-description",children:[(0,t.jsx)("div",{children:"Debited from your wallet and Your current coin balance is"}),(0,t.jsxs)("div",{className:"balance-debited",children:[(0,t.jsx)(qo,{}),"  ",(0,t.jsx)("div",{children:null===(o=e.walletData)||void 0===o?void 0:o.balance})]})]})]})}),(0,t.jsx)("div",{className:"border"}),(0,t.jsxs)("div",{className:"success-footer",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"delivered",children:"Your order will be delivered at"}),(0,t.jsx)("div",{className:"delivered-date",children:"Sun, 3rd Jul 2022 - 9AM to 7PM"})]}),(0,t.jsxs)("div",{className:"navigation-buttons",children:[(0,t.jsxs)("button",{onClick:()=>{i((0,t.jsx)(Oa,{userId:e.userId,applicationId:e.applicationId}))},children:[(0,t.jsx)("span",{children:"Go to my orders"}),(0,t.jsx)(la,{height:""})]}),(0,t.jsxs)("button",{onClick:c,children:[(0,t.jsx)("span",{children:"Go to wallet"}),(0,t.jsx)(la,{height:""})]})]})]})]})]})})},Yo={BillingModal:aa.div`
    font-family: "DM Sans", sans-serif;

    ${"position: fixed !important;\nwidth: 100% !important;\nheight: 100% !important;\noverflow-y: auto !important;\ntop: 0 !important;\nleft: 0 !important;\nz-index: 99999 !important;\npadding: 2em 0 !important;\nbox-sizing: border-box !important;\ndisplay: flex !important;\nalign-items: center !important;\nbackground-color: rgba(0, 0, 0, 0.2);"}
    border: #dedede;
    border: #dedede;
    .billing-form.modal-content {
      box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,
        rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px,
        rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px,
        rgba(0, 0, 0, 0.07) 0px 32px 64px;
      padding: 2em !important;
      width: 25% !important;
      height: auto !important;
      margin: auto !important;
      background: white !important;
      border-radius: 0.7rem !important;
      color: black !important;
      overflow-y: scroll;
      min-width: 400px !important;
      scrollbar-width: none !important;
      &::-webkit-scrollbar {
        display: none !important;
      }
    }
    @mixin coin {
      display: flex;
      gap: 0.3em;
      font-size: 1em;
      font-weight: 500;
    }
    @mixin coin-img {
      width: 1.3em;
      height: 1.3em;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .error {
        color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
        padding: 1em;
      }

      h2 {
        font-size: 1.7em;
        font-weight: 700;
        margin: 0;
      }
      .wallet {
        display: flex;
        align-items: center;
        gap: 0.5em;
      }
    }
    .back {
      display: flex;
      gap: 1em;
      align-items: center;
    }
    form {
      text-align: left;
      margin-top: 1em;

      .required {
        color: red;
      }

      .fname-lname {
        display: flex;
        gap: 2em;
      }

      .name {
        width: 100%;
        input {
          width: 100%;
          float: left;
          font-size: 1em;
        }
      }

      .error_message {
        color: #ff0000;
      }

      .input {
        margin-bottom: 1.2em;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 0.5em;
        label {
          span {
            margin-left: 0.2em;
          }
        }
        input {
          padding: 0.9em 0.7em;
          font-size: 0.8em;
        }
        textarea {
          height: 2.5em;
          padding: 0.9em 0.7em;
        }
        input,
        textarea {
          border: 1px solid #dedede;
          background-color: #fafafa;
          &.telephone {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-top-right-radius: 0.5em;
            border-bottom-right-radius: 0.5em;
            width: 100%;
          }
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: #a2a2a2;
            opacity: 1;
          }
        }
        select {
          &.country-code {
            border-top-left-radius: 0.5em;
            border-bottom-left-radius: 0.5em;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            border: 1px solid #dedede;
            background-color: #fafafa;
            width: 5em;
            font-weight: 400;
            line-height: 1;
          }
          &:focus {
            outline: none;
          }
        }
      }
      input:not(.telephone) {
        border-radius: 0.5em;
      }

      button {
        display: flex;
        gap: 0.7em;
        align-items: center;
        background: #f5da48;
        border-radius: 1.5em;
        padding: 0.9em;
        outline: none;
        border: none;
        color: #333333;
        font-weight: 700;
        font-size: 0.875em;
        margin-top: 1.5em;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        &.loader {
          opacity: 0.5;
        }
        span {
          margin-left: 1em;
          &.arrow {
            content: url("${ft}/${pt}/forward.png}");
          }
          &.loader {
            border: 0.2em solid black !important;
            border-radius: 50% !important;
            width: 1em !important;
            height: 1em !important;
            animation: spin 2s linear infinite;
          }
        }
      }
    }

    @media (max-width: 700px) {
      .name {
        grid-template-columns: auto;
      }
    }

    .input-group {
      display: flex;
      height: 45px;
    }
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .cancel {
      cursor: pointer;
    }
  `},Ko={FailureModal:aa.div`
    font-family: "DM Sans", sans-serif;

    ${"position: fixed !important;\nwidth: 100% !important;\nheight: 100% !important;\noverflow-y: auto !important;\ntop: 0 !important;\nleft: 0 !important;\nz-index: 99999 !important;\npadding: 2em 0 !important;\nbox-sizing: border-box !important;\ndisplay: flex !important;\nalign-items: center !important;\nbackground-color: rgba(0, 0, 0, 0.2);"}
    .modal-content {
      padding: 2em !important;
      width: 21% !important;
      height: 500px !important;
      margin: auto !important;
      background: white !important;
      border-radius: 1.5rem !important;
      color: black !important;
      min-width: 400px !important;
      .order-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .close {
          display: flex;
          gap: 0.5em;
          align-items: center;
        }
        button {
          cursor: pointer;
          border: none;
          background: none;
        }
      }

      .header-wallet {
        display: flex;
        gap: 15px;
        .wallet-btn {
          color: #898989;
          background: none;
          border: none;
          padding: 0;
          margin: 0;
          font-size: 1em;
          cursor: pointer;
        }
      }

      .header-failure {
        font-size: x-large;
        font-weight: bold;
        margin: 0;
        display: flex;
      }

      .failure-details {
        display: flex;
        margin: 20px;
        text-align: center;
        justify-content: center;
        img.failure {
          width: 4em;
          margin-bottom: 10px;
        }
        .failure-heading {
          font-weight: 500;
          font-size: medium;
          margin-bottom: 10px;
        }
        .order-description {
          font-size: small;
          text-align: center;
          margin-top: 20px;
          margin-bottom: 10px;
          .description {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 10px;
          }
        }
      }
      .navigation-buttons {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        button {
          margin-top: 10px;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #e8e8e8;
          border-radius: 15px;
          padding: 7px 20px;
          width: 70%;
          cursor: pointer;
          img {
            width: 20px;
          }
        }
      }
    }
  `},Zo={Container:aa.div`
    display: flex;
    align-items: center;
    gap: 0.5em;
    button {
      border: none;
      background: none;
      color: #a2a2a2;
      letter-spacing: 0.5px;
      font-size: 1.1em;
      cursor: pointer;
    }
    .coin {
      border: 1px solid #dddddd;
      background: #efefef;
      border-radius: 1.4em;
      padding: 0.4em 0.5em;
      display: flex;
      align-items: center;
      ${" display: flex;\n  gap: 0.3em;\n  font-size: 1em;\n  font-weight: 500;\n"}
      img {
        ${" width: 1.3em;\nheight: 1.3em;"}
      }
    }
  `},Jo=e=>{var n,r;const{openPopup:a,closePopup:o}=Na(),[i,l]=(0,v.useState)("");return(0,v.useEffect)((()=>{ja().then((e=>{l(e)})).catch((e=>{console.error("Error fetching data:",e)}))}),[e.walletData]),(0,t.jsx)(Ko.FailureModal,{children:(0,t.jsx)("div",{className:"modal-content",children:(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"order-header",children:[(0,t.jsx)("img",{className:"cancel",alt:"cancel",onClick:()=>{o()}}),(0,t.jsxs)(Zo.Container,{className:"wallet",children:[(0,t.jsx)("button",{className:"wallet-btn",onClick:()=>{a((0,t.jsx)(oi,{userId:e.userId,applicationId:e.applicationId}))},children:"Go to Wallet"}),(0,t.jsxs)("div",{className:"coin",children:[(0,t.jsx)("img",{className:"default-coin",src:(null===(n=e.walletData)||void 0===n?void 0:n.imageUrl)+i,alt:""}),(0,t.jsx)("span",{children:null===(r=e.walletData)||void 0===r?void 0:r.balance})]})]})]}),(0,t.jsx)("div",{className:"header-failure",children:"Redeem"}),(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:"failure-details",children:(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("img",{alt:"failure",className:"failure"}),(0,t.jsx)("div",{className:"failure-heading",children:"Oops !"})]}),(0,t.jsxs)("div",{className:"order-description",children:[(0,t.jsxs)("div",{children:["Your Order has been failed. ",e.failureMsg]}),(0,t.jsx)("div",{className:"description",children:"Please try again"})]})]})})}),(0,t.jsx)("div",{className:"border"}),(0,t.jsxs)("div",{className:"navigation-buttons",children:[(0,t.jsxs)("button",{onClick:()=>{a((0,t.jsx)(ti,{product:e.product,userId:e.userId,applicationId:e.applicationId,walletData:e.walletData}))},children:[(0,t.jsx)("span",{children:"Retry"}),(0,t.jsx)("img",{alt:"arrow"})]}),(0,t.jsxs)("button",{onClick:()=>{a((0,t.jsx)(ri,{userId:e.userId,applicationId:e.applicationId}))},children:[(0,t.jsx)("span",{children:"Cancel"}),(0,t.jsx)("img",{alt:"arrow"})]})]})]})})})};const Xo=e=>{var n,r,a,o,i,l;const{openPopup:s}=Na(),[u,c]=(0,v.useState)("");(0,v.useEffect)((()=>{ja().then((e=>{c(e)})).catch((e=>{console.error("Error fetching data:",e)}))}),[e.walletData]);const{register:d,handleSubmit:f,formState:{errors:p}}=Wo();return(0,t.jsx)(Yo.BillingModal,{className:"modal-wrap",children:(0,t.jsxs)("div",{className:"billing-form modal-content",children:[(0,t.jsx)("header",{children:(0,t.jsxs)("div",{className:"back",children:[(0,t.jsx)("div",{className:"cancel",onClick:()=>{s((0,t.jsx)(ti,{product:e.product,userId:e.userId,applicationId:e.applicationId,walletData:e.walletData}))},children:(0,t.jsx)(Ra,{})}),(0,t.jsxs)("div",{className:"wallet",children:[(0,t.jsx)("button",{onClick:()=>{s((0,t.jsx)(oi,{userId:e.userId,applicationId:e.applicationId}))},children:"Go to Wallet"}),(0,t.jsxs)("div",{className:"coin",children:[(0,t.jsx)("img",{className:"img-width",src:(null===(n=e.walletData)||void 0===n?void 0:n.imageUrl)+u,alt:""}),(0,t.jsx)("div",{children:null===(r=e.walletData)||void 0===r?void 0:r.balance})]})]})]})}),(0,t.jsx)("h2",{className:"margin-y",children:"Billing Address"}),(0,t.jsxs)("form",{onSubmit:f((n=>{return r=void 0,a=void 0,i=function*(){let r={email:n.email,firstName:n.Name,telephone:n.countryCode+n.telephone,redeemRuleId:null==e?void 0:e.product.id,gamificationUserId:e.userId,gamificationApplicationId:e.applicationId};try{const n=yield(a=r,va(void 0,void 0,void 0,(function*(){return yield ya.post(mt.redeem.redeemProduct,a)})));n.data.message?s((0,t.jsx)(Jo,{product:e.product,userId:e.userId,applicationId:e.applicationId,walletData:e.walletData,failureMsg:n.data.message})):s((0,t.jsx)(Qo,{product:e.product,userId:e.userId,applicationId:e.applicationId,walletData:e.walletData}))}catch(n){s((0,t.jsx)(Jo,{product:e.product,userId:e.userId,applicationId:e.applicationId,walletData:e.walletData,failureMsg:n.message}))}var a},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{s(i.next(e))}catch(e){t(e)}}function l(e){try{s(i.throw(e))}catch(e){t(e)}}function s(t){var r;t.done?e(t.value):(r=t.value,r instanceof o?r:new o((function(e){e(r)}))).then(n,l)}s((i=i.apply(r,a||[])).next())}));var r,a,o,i})),children:[(0,t.jsx)("div",{className:"fname-lname",children:(0,t.jsx)("div",{className:"name",children:(0,t.jsxs)("div",{className:"input",children:[(0,t.jsxs)("label",{htmlFor:"Name",children:["Name",(0,t.jsx)("span",{className:"required",children:"*"})]}),(0,t.jsx)("input",Object.assign({type:"text",className:"",placeholder:"Enter Your  Name"},d("Name",{required:!0}))),"required"===(null===(a=p.Name)||void 0===a?void 0:a.type)&&(0,t.jsx)("span",{className:"error_message",children:" Name is required"})]})})}),(0,t.jsxs)("div",{className:"input",children:[(0,t.jsxs)("label",{htmlFor:"firstName",children:["Contact Number",(0,t.jsx)("span",{className:"required",children:"*"})]}),(0,t.jsxs)("div",{className:"input-group",children:[(0,t.jsxs)("select",Object.assign({className:"country-code"},d("countryCode"),{children:[(0,t.jsx)("option",{value:"+91",children:"+91"}),(0,t.jsx)("option",{value:"+1",children:"+1"})]})),(0,t.jsx)("input",Object.assign({className:"telephone",placeholder:"Enter Your Contact Number"},d("telephone",{required:!0,pattern:{value:/^\d{10}$/,message:"Please enter a valid 10-digit phone number"}})))]}),"required"==(null===(o=p.telephone)||void 0===o?void 0:o.type)&&(0,t.jsx)("span",{className:"error_message",children:"Contact Number is required"}),"pattern"==(null===(i=p.telephone)||void 0===i?void 0:i.type)&&(0,t.jsx)("span",{className:"error_message",children:p.telephone.message})]}),(0,t.jsxs)("div",{className:"input",children:[(0,t.jsxs)("label",{htmlFor:"name",children:["Email",(0,t.jsx)("span",{className:"required",children:"*"})]}),(0,t.jsx)("input",Object.assign({type:"text",placeholder:"Enter Your Email"},d("email",{required:!0,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}}))),p.email&&(0,t.jsx)("span",{className:"error_message",children:p.email.message}),"required"==(null===(l=p.email)||void 0===l?void 0:l.type)&&(0,t.jsx)("span",{className:"error_message",children:"Email is required"})]}),(0,t.jsxs)("button",{children:[(0,t.jsx)("span",{children:"Redeem Now"}),(0,t.jsx)("span",{children:(0,t.jsx)(la,{height:"",color:""})})]})]})]})})},ei={ProductModal:aa.div`
    font-family: "DM Sans", sans-serif;

    ${"position: fixed !important;\nwidth: 100% !important;\nheight: 100% !important;\noverflow-y: auto !important;\ntop: 0 !important;\nleft: 0 !important;\nz-index: 99999 !important;\npadding: 2em 0 !important;\nbox-sizing: border-box !important;\ndisplay: flex !important;\nalign-items: center !important;\nbackground-color: rgba(0, 0, 0, 0.2);"}
    border: #dedede;
    .detail-product.modal-content {
      box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,
        rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px,
        rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px,
        rgba(0, 0, 0, 0.07) 0px 32px 64px;
      padding: 2em !important;
      width: 21% !important;
      height: 590px !important;
      margin: auto !important;
      background: white !important;
      border-radius: 0.7rem !important;
      color: black !important;
      overflow-y: scroll !important;
      text-align: left;
      min-width: 400px !important;
      scrollbar-width: none !important;
      &::-webkit-scrollbar {
        display: none !important;
      }
      .img-width {
        width: 1.75rem;
        height: 1.75rem;
      }
      .back {
        cursor: pointer;
      }
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .close {
          display: flex;
          gap: 1em;
          align-items: center;
          h2 {
            font-weight: 700;
            font-size: 2em;
            letter-spacing: 0.75px;
            margin: 0em;
          }
        }
        /* .wallet {
					display: flex;
					align-items: center;
					gap: 0.5em;

					.coin {
						display: flex;

						gap: 5px;
						align-items: center;
						border: 1px solid #dddddd;
						background: #efefef;
						border-radius: 1.4em;
						padding: 0.4em 0.5em;
					}
				} */
      }
      section {
        text-align: left;
        margin: 1.5em auto;
        h2 {
          font-size: 1.3em;
          font-weight: 700;
          margin-top: 2em;
        }
        .img-product {
          width: 100%;
          height: 15em;
          border-radius: 0.75em;
          border: 1px solid #edebeb;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
            rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        }

        .coin {
          display: flex;
          align-items: center;
          gap: 0.5em;

          @include coin;
          img {
            @include coin-img;
          }
        }

        .validity {
          margin-top: 0.8em;
          display: flex;
          flex-direction: column;
          gap: 0.5em;
          label {
            color: #a2a2a2;
          }
        }
        button {
          background: #f5da48;
          border-radius: 1.5em;
          padding: 0.9em 1.2em;
          outline: none;
          border: none;
          color: #333333;
          margin-top: 1.5em;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.7em;
          font-weight: 700;
          font-size: 0.875em;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
      }
    }
  `},ti=e=>{var n,r,a,o,i,l;const[s,u]=(0,v.useState)(""),{openPopup:c}=Na();return(0,v.useEffect)((()=>{ja().then((e=>{u(e)})).catch((e=>{console.error("Error fetching data:",e)}))}),[e.walletData]),(0,t.jsx)(ei.ProductModal,{className:"modal-wrap",children:(0,t.jsxs)("div",{className:"detail-product modal-content",children:[(0,t.jsx)("header",{children:(0,t.jsxs)("div",{className:"close",children:[(0,t.jsx)("div",{className:"back",onClick:()=>{c((0,t.jsx)(ri,{userId:e.userId,applicationId:e.applicationId}))},children:(0,t.jsx)(Ra,{})}),(0,t.jsxs)("div",{className:"wallet",children:[(0,t.jsx)("button",{onClick:()=>{c((0,t.jsx)(oi,{userId:e.userId,applicationId:e.applicationId}))},children:"Go to Wallet"}),(0,t.jsxs)("div",{className:"coin",children:[(0,t.jsx)("img",{className:"img-width",src:(null===(n=e.walletData)||void 0===n?void 0:n.imageUrl)+s,alt:""}),(0,t.jsx)("div",{children:null===(r=e.walletData)||void 0===r?void 0:r.balance})]})]})]})}),(0,t.jsx)("h2",{children:"Redeem"}),(0,t.jsxs)("section",{children:[(0,t.jsx)("img",{className:"img-product",src:(null===(a=e.product)||void 0===a?void 0:a.productImageUrl)+s,alt:""}),(0,t.jsx)("h2",{children:null===(o=e.product)||void 0===o?void 0:o.productName}),(0,t.jsxs)("div",{className:"coin",children:[(0,t.jsx)("img",{className:"img-width",src:(null===(i=e.product)||void 0===i?void 0:i.virtualMoneyImageUrl)+s}),(0,t.jsx)("div",{children:(null===(l=e.product)||void 0===l?void 0:l.eligibleMoney)+" coins"})]}),(0,t.jsxs)("div",{className:"validity",children:[(0,t.jsx)("label",{children:"Validity"}),(0,t.jsx)("span",{children:"30 days from redeemed"})]}),(0,t.jsxs)("div",{className:"validity",children:[(0,t.jsx)("label",{children:"Description"}),(0,t.jsx)("span",{children:"Use your Amazon.in Gift Card to shop from a huge selection of Books, Electronics, Music, Movies, Software, Apparel, Toys, and more."})]}),(0,t.jsxs)("button",{className:"redeem-btn",onClick:()=>{c((0,t.jsx)(Xo,{product:e.product,userId:e.userId,applicationId:e.applicationId,walletData:e.walletData}))},children:["Redeem Now",(0,t.jsx)("span",{children:(0,t.jsx)(la,{height:""})})]})]})]})})},ni={RedeemModal:aa.div`
    ${"position: fixed !important;\nwidth: 100% !important;\nheight: 100% !important;\noverflow-y: auto !important;\ntop: 0 !important;\nleft: 0 !important;\nz-index: 99999 !important;\npadding: 2em 0 !important;\nbox-sizing: border-box !important;\ndisplay: flex !important;\nalign-items: center !important;\nbackground-color: rgba(0, 0, 0, 0.2);"}
    font-family: "DM Sans", sans-serif;

    border: #dedede;
    .list-product.modal-content {
      box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,
        rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px,
        rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px,
        rgba(0, 0, 0, 0.07) 0px 32px 64px;
      padding: 1em 0 0 !important;
      width: 50% !important;
      height: 78% !important;
      overflow-y: scroll !important;
      margin: auto !important;
      background: white !important;
      border-radius: 0.7rem !important;
      color: black !important;
      min-width: 400px !important;
      header {
        margin: 1em 1.7em;
        text-align: left;
        .close {
          display: flex;
          width: 100%;
          justify-content: space-between;
          .close-btn {
            cursor: pointer;
          }

          .wallet {
            display: flex;
            align-items: center;
            gap: 0.5em;
            button {
              border: none;
              background: none;
              color: #a2a2a2;
              letter-spacing: 0.5px;
              font-size: 0.9em;
              cursor: pointer;
            }
            .coin {
              display: flex;
              gap: 5px;
              align-items: center;
              gap: 0.4em;
              border: 1px solid #dddddd;
              background: #efefef;
              border-radius: 1.4em;
              padding: 0.4em 0.5em;
              .img-width {
                width: 1.75rem;
              }
            }
          }
        }
      }
      .heading {
        font-weight: 700;
        margin-left: 1em;
        text-align: left;
        font-size: 1.5em;
        letter-spacing: 0.75px;
        margin-top: 0.5em;
      }
      .products {
        height: 100%;
        .list-products {
          display: flex;
          gap: 1.5em;
          flex-wrap: wrap;
          overflow-y: scroll;
          justify-content: center;
          .product {
            background-color: #f5f5f5;
            border: 1px solid #f5f5f5;
            border-radius: 0.75em;
            cursor: pointer;
            width: 10em;
            &:hover {
              box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px,
                rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
                rgba(0, 0, 0, 0.09) 0px 16px 8px,
                rgba(0, 0, 0, 0.09) 0px 32px 16px;
            }
            .img {
              height: 7em;
              border-top-left-radius: 1em;
              border-top-right-radius: 1em;
              width: 100%;
            }
            .product-detail {
              color: #333333;
              padding: 0.5em;
              font-size: 0.85em;
              margin: 0.2em;
              .coin {
                margin-top: 0.8em;
                display: flex;
                gap: 0.3em;
                font-size: 0.9em;
                img {
                  width: 1.3em;
                  height: 1.3em;
                }
              }
            }
          }
        }
      }
    }

    ::-webkit-scrollbar {
      display: none;
    }
    .ellipsis {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      height: 2.75em;
    }
  `},ri=e=>{const[n,r]=(0,v.useState)([]),[a,o]=(0,v.useState)(""),[i,l]=(0,v.useState)({}),{openPopup:s,closePopup:u}=Na();return(0,v.useEffect)((()=>{var t;(t=e.applicationId,va(void 0,void 0,void 0,(function*(){let e;return e=(yield ya.get(`${mt.redeem.getRedeemByApplication}${t}`,{})).data,e}))).then((e=>{r(e)})).catch((e=>{console.error("Error fetching data:",e)})),ba(e.applicationId,e.userId).then((e=>{var t;l((null===(t=null==e?void 0:e.balance)||void 0===t?void 0:t.length)?e.balance[0]:{})})).catch((e=>{console.error("Error fetching data:",e)})),ja().then((e=>{o(e)})).catch((e=>{console.error("Error fetching data:",e)}))}),[]),(0,t.jsx)(ni.RedeemModal,{className:"modal-wrap",children:(0,t.jsxs)("div",{className:"list-product modal-content",children:[(0,t.jsx)("header",{children:(0,t.jsxs)("div",{className:"close",children:[(0,t.jsx)("div",{className:"close-btn",onClick:()=>{u()},children:(0,t.jsx)(sa,{})}),(0,t.jsxs)("div",{className:"wallet",children:[(0,t.jsx)("button",{onClick:()=>{s((0,t.jsx)(oi,{userId:e.userId,applicationId:e.applicationId}))},children:"Go to Wallet"}),(0,t.jsxs)("div",{className:"coin",children:[(0,t.jsx)("img",{className:"img-width coins "+(i.imageUrl?"":"default-coin"),src:i.imageUrl+a,alt:""}),(0,t.jsx)("div",{children:(null==i?void 0:i.balance)||0})]})]})]})}),(0,t.jsx)("h2",{className:"heading",children:"Redeem"}),(0,t.jsx)("div",{className:"products",children:(null==n?void 0:n.length)>=0?(0,t.jsx)("div",{className:"list-products",children:n.map((n=>(0,t.jsxs)("div",{className:"product",onClick:()=>(n=>{s((0,t.jsx)(ti,{product:n,userId:e.userId,applicationId:e.applicationId,walletData:i}))})(n),children:[(0,t.jsx)("img",{className:"img",src:null==n?void 0:n.productImageUrl,alt:""}),(0,t.jsxs)("div",{className:"product-detail",children:[(0,t.jsx)("div",{className:"ellipsis",children:null==n?void 0:n.productName}),(0,t.jsxs)("div",{className:"coin",children:[(0,t.jsx)("img",{alt:"",src:(null==n?void 0:n.virtualMoneyImageUrl)+a}),(0,t.jsx)("span",{children:(null==n?void 0:n.eligibleMoney)+" coins"})]})]})]},n._id)))}):(0,t.jsx)("div",{})})]})})},ai={WalletModal:aa.div`
		${"position: fixed !important;\nwidth: 100% !important;\nheight: 100% !important;\noverflow-y: auto !important;\ntop: 0 !important;\nleft: 0 !important;\nz-index: 99999 !important;\npadding: 2em 0 !important;\nbox-sizing: border-box !important;\ndisplay: flex !important;\nalign-items: center !important;\nbackground-color: rgba(0, 0, 0, 0.2);"}
		font-family: "DM Sans", sans-serif;
		border: #dedede;
		.wallet.modal-content {
			box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,
				rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px,
				rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px,
				rgba(0, 0, 0, 0.07) 0px 32px 64px;
			padding: 1em 0 0 !important;
			width: 480px !important;
			height: 650px !important;
			margin: auto !important;
			background: white !important;
			border-radius: 0.7rem !important;
			color: black !important;
			min-width: 400px !important;
			header {
				margin: 1em 1.7em;
				text-align: left;
				.close {
					display: flex;
					justify-content: space-between;
					width: 100%;
					.wallet {
						display: flex;
						align-items: center;
						gap: 0.9em;
						button {
							border: none;
							background: none;
							color: #a2a2a2;
							letter-spacing: 0.5px;
							font-size: 0.9em;
							cursor: pointer;
						}
						.order {
							display: flex;
							gap: 7px;
							border: 1px solid #dddddd;
							background: #efefef;
							border-radius: 1.4em;
							padding: 0.4em 0.5em;
							color: black;
						}
						.redeem {
							display: flex;
							gap: 7px;
							border: 1px solid #dddddd;
							background: #efefef;
							border-radius: 1.4em;
							padding: 0.4em 0.5em;
							color: black;
						}
					}
				}
			}
			.back {
				cursor: pointer;
			}
			h2 {
				font-weight: 700;
				font-size: 2em;
				letter-spacing: 0.75px;
				margin-top: 0.5em;
				margin-left: 0.8em;
			}

			.wallet-coins {
				font-size: 40px;
				display: flex;
				align-items: center;
				justify-content: center;
				padding-bottom: 0.7em;
				padding-top: 0.3em;
				.coin {
					align-items: center;
					display: flex;
					justify-content: center;
					gap: 9px;
					border: 1px solid #dddddd;
					background: #efefef;
					border-radius: 2em;
					padding: 1em 1em;
					color: black;
					.img {
						width: 3em;
					}
					.coins {
						font-weight: 700;
						font-size: 1.5em;
					}
				}
			}
			.transaction-history {
				background-color: #f4f4f4;
				width: 100%;
				border-radius: 1.5rem !important;
				text-align: left;
				overflow-y: scroll;
				height: 430px;
				h2 {
					padding: 0.5em 1em;
					font-weight: 700;
					font-size: 1.5em;
				}
			}
			.list-product {
				display: flex;
				align-items: center;
				padding: 1em 0.9em 1em 0.5em;
				justify-content: space-between;
				flex-direction: column;

				.products {
					display: flex;
					width: 100%;
					border-bottom: 1px solid #e8e8e8;
					.product-details {
						display: flex;
						gap: 1em;
						width: 100%;
						padding: 1em 1em;
						.image {
							width: 6em;
							height: 6em;
							border-radius: 8px;
						}
						.product-name {
							font-size: 1.2em;
							font-weight: 500;
						}
					}
					.coin-count {
						color: green;
						font-size: 1.2em;
						font-weight: 500;
						padding: 1em 1em;
					}
				}
			}
		}
		::-webkit-scrollbar {
			width: 3px;
		}

		::-webkit-scrollbar-track {
			background: #f1f1f1;
		}

		::-webkit-scrollbar-thumb {
			background: #888;
			border-radius: 6px;
		}
		::-webkit-scrollbar-thumb:hover {
			background: #555;
		}
	`},oi=e=>{const[n,r]=(0,v.useState)([]),{openPopup:a,closePopup:o}=Na(),[i,l]=(0,v.useState)([]),[s,u]=(0,v.useState)(""),[c,d]=(0,v.useState)("");return(0,v.useEffect)((()=>{var t,n;(t=e.userId,n=e.applicationId,va(void 0,void 0,void 0,(function*(){let e;return e=(yield ya.post(mt.redeem.getMyOrders,{gamificationUserId:t,gamificationApplicationId:n})).data,e}))).then((e=>{r(e)})).catch((e=>{console.error("Error fetching data:",e)})),ba(e.applicationId,e.userId).then((e=>{l(null==e?void 0:e.balance[0].balance),d(null==e?void 0:e.balance[0].imageUrl)})).catch((e=>{console.error("Error fetching data:",e)})),ja().then((e=>{u(e)})).catch((e=>{console.error("Error fetching data:",e)}))}),[]),(0,t.jsx)(ai.WalletModal,{children:(0,t.jsxs)("div",{className:"wallet modal-content",children:[(0,t.jsx)("header",{children:(0,t.jsxs)("div",{className:"close",children:[(0,t.jsx)("div",{className:"back",onClick:()=>{o()},children:(0,t.jsx)(sa,{})}),(0,t.jsxs)("div",{className:"wallet",children:[(0,t.jsx)("button",{onClick:()=>{a((0,t.jsx)(ri,{userId:e.userId,applicationId:e.applicationId}))},children:(0,t.jsxs)("div",{className:"redeem",children:[(0,t.jsx)(ua,{}),(0,t.jsx)("span",{children:"Redeem"})]})}),(0,t.jsx)("button",{onClick:()=>{a((0,t.jsx)(Oa,{userId:e.userId,applicationId:e.applicationId}))},children:(0,t.jsxs)("div",{className:"order",children:[(0,t.jsx)(ca,{}),(0,t.jsx)("span",{children:"My orders"})]})})]})]})}),(0,t.jsx)("h2",{children:"Wallet"}),(0,t.jsx)("div",{className:"wallet-coins",children:(0,t.jsxs)("button",{className:"coin",children:[(0,t.jsx)("img",{className:"img",src:c+s,alt:""}),(0,t.jsx)("span",{className:"coins",children:i})]})}),(0,t.jsxs)("div",{className:"transaction-history",children:[(0,t.jsx)("h2",{children:"Transaction History"}),(0,t.jsx)("div",{className:"list-product",children:n.map((e=>(0,t.jsxs)("div",{className:"products",children:[(0,t.jsxs)("div",{className:"product-details",children:[(0,t.jsx)("img",{className:"image",src:null==e?void 0:e.productImageUrl,alt:""}),(0,t.jsx)("div",{className:"product-name",children:null==e?void 0:e.productName})]}),(0,t.jsx)("div",{className:"coin-count",children:"+"+(null==e?void 0:e.virtualMoneyCount)})]},null==e?void 0:e._id)))})]})]})})},ii={Container:aa.div`
		@keyframes fadeIn {
			from {
				opacity: 0;
				transform: translateY(-20px);
			}
			to {
				opacity: 1;
				transform: translateY(0);
			}
		}
		.popup-overlay {
			/* Your existing styles here */
			animation: fadeIn 0.2s ease-in-out; /* Adjust the duration and timing function as needed */
		}
	`},li={CoinHeader:aa.div`
    display: flex;
    flex-direction: column;
    background-color: #fff6e6;
    border-radius: 1.25em;
    padding: 1em;
    gap: 1.3em;
    align-items: flex-start;
    border-radius: 1.25em;
    box-shadow: #0000003d 0 3px 8px;
    .proheader {
      font-size: 1.3em;
    }

    .content {
      display: flex;
      gap: 0.5em;
      align-items: center;
      img {
        width: 3em;
        height: auto;
      }

      img.coins {
        width: 2.1em;
        height: 2.1em;
      }
    }
    div.nav {
      display: flex;
      gap: 0.3em;
      a {
        cursor: pointer;
        display: flex;
        font-size: 0.85em;
        gap: 0.5em;
        align-items: center;
        color: #898989;
      }
      .forward svg {
        fill: #898989;
        width: 0.75em;
      }
    }
    .rotating-coin {
      /* background: #ffde00; */
      border-radius: 50%;
      position: relative;
      -webkit-transform-style: preserve-3d;
      animation: spin 5s linear infinite;
      transition-timing-function: ease-in-out;

      .rotating-coin:before {
        -webkit-animation: spin 0.2s infinite;
        animation: spin 0.2s infinite;
        display: inline-block;
      }
      @-webkit-keyframes spin {
        from {
          transform: rotateY(0deg);
        }
        to {
          transform: rotateY(360deg);
        }
      }
      @keyframes spin {
        from {
          transform: rotateY(0deg);
        }
        to {
          transform: rotateY(360deg);
        }
      }
    }
  `},si=e=>{const[n,r]=(0,v.useState)([]),[a,o]=(0,v.useState)(""),[i,l]=(0,v.useState)(""),{openPopup:s}=Na();return(0,v.useEffect)((()=>{ba(e.applicationId,e.userId).then((e=>{r(null==e?void 0:e.balance[0].balance),l(null==e?void 0:e.balance[0].imageUrl)})).catch((e=>{console.error("Error fetching data:",e)})),ja().then((e=>{o(e)})).catch((e=>{console.error("Error fetching data:",e)}))}),[]),(0,t.jsxs)(li.CoinHeader,{className:"card-item",onClick:()=>{s((0,t.jsx)(ii.Container,{children:(0,t.jsx)(oi,{userId:e.userId,applicationId:e.applicationId})}))},children:[(0,t.jsx)("div",{className:"proheader",children:"Wallet"}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsx)("img",{className:"coins rotating-coin "+(i?"":"default-coin"),onError:e=>(e=>{e.target.src=`${ft}/${pt}/coins.png`})(e),src:`${i}${a}`}),(0,t.jsx)("div",{children:(0,t.jsx)("strong",{children:n||0})})]}),(0,t.jsxs)("div",{className:"nav",children:[(0,t.jsx)("a",{children:"Go to Wallet"}),(0,t.jsx)("div",{className:"forward",children:(0,t.jsx)(la,{height:"0.7em",color:""})})]})]})},ui=e=>{const{openPopup:n}=Na();return(0,t.jsxs)(li.CoinHeader,{className:"card-item",onClick:()=>{n((0,t.jsx)(ii.Container,{children:(0,t.jsx)(ri,{userId:e.userId,applicationId:e.applicationId})}))},children:[(0,t.jsx)("div",{className:"proheader",children:"Redeem"}),(0,t.jsx)("div",{className:"content",children:(0,t.jsx)("img",{alt:"redeem",className:"redeem",src:`${ft}/${pt}/redeems-icon-min.gif`})}),(0,t.jsxs)("div",{className:"nav",children:[(0,t.jsx)("a",{children:"Redeem your coins"}),(0,t.jsx)("div",{className:"forward",children:(0,t.jsx)(la,{height:"0.7em",color:""})})]})]})},ci=e=>{const{openPopup:n}=Na()||{};return(0,t.jsxs)(li.CoinHeader,{onClick:()=>{n?n((0,t.jsx)(ii.Container,{children:(0,t.jsx)(Oa,{userId:e.userId,applicationId:e.applicationId})})):console.log("openPopup is null, cannot open")},children:[(0,t.jsx)("div",{className:"proheader",children:"My Vouchers"}),(0,t.jsx)("div",{className:"content",children:(0,t.jsx)("img",{alt:"order",className:"orders",src:`${ft}/${pt}/orders-min.gif`})}),(0,t.jsxs)("div",{className:"nav",children:[(0,t.jsx)("a",{children:"See your orders"}),(0,t.jsx)("div",{className:"forward",children:(0,t.jsx)(la,{height:"0.7em",color:""})})]})]})},di={Scroll:aa.div`
    font-family: "DM Sans", sans-serif;
    height: calc(100vh - 10em) !important;
    overflow: auto !important;
    -ms-overflow-style: none !important;
    scrollbar-width: none !important;
    &::-webkit-scrollbar {
      display: none !important;
    }
  `,DMFonts:aa.div`
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100&family=Indie+Flower&display=swap");
  `},fi={Container:aa.div`
    padding: 0.6em;
    .card {
      margin: 0.7em 0.4em;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      > * {
        margin: 0.75em 0;
        flex-basis: calc(45% - 1.2em);
        justify-content: space-between;
        cursor: pointer;
      }
    }
  `},pi=e=>{const[n,r]=(0,v.useState)({});return(0,v.useEffect)((()=>{xa(e.userId,e.applicationId).then((e=>{r(e.data)})).catch((e=>{console.error("Error fetching data:",e)}))}),[]),(0,t.jsx)(di.Scroll,{children:(0,t.jsxs)(fi.Container,{children:[(0,t.jsx)(ia,{progress:n.progress,userScore:e.userScore,level:n.level,nextReward:n.nextReward,previousReward:n.previousReward}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)(si,{userId:e.userId,applicationId:e.applicationId}),(0,t.jsx)(ui,{userId:e.userId,applicationId:e.applicationId}),(0,t.jsx)(ci,{userId:e.userId,applicationId:e.applicationId})]})]})})};var mi=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function l(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((r=r.apply(e,t||[])).next())}))};const hi=(new ga).getServiceInstance(),gi={Container:aa.div`
    height: 95%;
    font-family: "DM Sans", sans-serif;
    .tabs-group {
      display: flex;
      justify-content: center;
      background-color: white;
      width: 62%;
      border-radius: 1.3em;
      border: 1px solid #ff8725;
      padding: 0.12em;
      margin: 1em auto;

      button {
        font-family: "DM Sans", sans-serif !important;
        outline: none;
        border: none;
        background-color: white;
        width: 50%;
        padding: 0.6em 0.8em;
        border-radius: 1.3em;
        font-size: 0.9em;
        font-weight: 600;
        cursor: pointer;
        &.active {
          background-color: #ff8725;
          color: white;
          transition: transform 0.5s ease;
        }
      }
    }
    .bg-leaderboard {
      background: url("../../../app/img/leaderboard-bg.svg");
      background-position: top;
      height: 100%;
      background-repeat: no-repeat;
      background-size: contain;
      padding-top: 4em;
      animation: fadeIn ease 500ms;
      .gpName {
        position: relative;
        margin: 0.3em;
        display: flex;
        align-items: center;
        justify-content: center;
        .back-arrow {
          border: none;
          &:hover {
            transform: translateX(0.1em);
          }
          position: absolute;
          left: 1em;
          cursor: pointer;
          .back {
            content: url("../../../app/img/back.svg");
            height: 1.5em;
          }
        }

        .gpName {
          font-weight: 700;
        }
      }
    }
    .groups {
      display: flex;
      gap: 0.3em;
      flex-direction: column;
      padding: auto;

      div.heading {
        align-self: flex-start;
        margin-left: 0.5em;
        margin-bottom: 0.5em;
        font-weight: 500;
        font-size: 1.65em;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.3em;

        .profile {
          width: 1.4em !important;
          height: 1.4em !important;
          background: var(--pro-gamify-rank-bg-color);
          background-size: cover !important;
          border-radius: 50% !important;
          border: 1.7px solid white;
          box-shadow: 0px 10px 30px #00000034;
          &.default-avatar-gamify,
          &.on-img-error {
            content: url("${ft}/${pt}/avatar.png");
          }
        }
      }
    }
    .usergp-list {
      display: flex;
      justify-content: space-between;
      border: 1px solid rgb(247, 111, 0, 0.5);
      padding: 1em 0.75em;
      border-radius: 0.5em;
      align-items: center;
      cursor: pointer;
      margin: 0 0.3em;
      &:hover {
        background-color: rgb(247, 111, 0, 0.1);
      }

      .list {
        display: flex;
        gap: 2em;
        .rank {
          font-weight: bold;
        }
        .name {
          font-weight: 500;
        }
      }
      button {
        border: none;
        background: none;
        img {
          content: url("../../../app/img/arrow-down.svg");
        }
      }
    }
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `},vi={Container:aa.div`
    .rank-holder {
      margin: 3em auto -1em;
      height: 15em;
      display: flex;
      justify-content: space-evenly;
      font-weight: bold;
      .score {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        font-size: 0.8em;
        gap: 0.5em;

        .points {
          background-color: #f0f0f0;
          border-radius: 1.5em;
          width: auto;
          font-size: 0.9em;
          padding: 0.45em 1.3em;
          font-weight: medium;
        }
      }
      .rank {
        color: #ee8c40;
        font-weight: bold;
      }

      .profile {
        width: 3.5em;
        height: 3.5em;
        background-size: cover !important;
        border-radius: 50% !important;

        &.highlighted {
          &.inner-content {
            border: 0.65em solid #ff8725;
            padding: 0.2em;
          }
        }
        &.default-avatar-gamify {
          content: url("${ft}/${pt}/avatar.png");
        }
      }
      .outer-border {
        display: flex;
        border: 0.6em solid #ff7c000f;
        border-radius: 6em;
      }
      .inner-content {
        display: flex;
        border: 0.4em solid rgba(255, 115, 0, 0.31);
        border-radius: 5em;
      }

      .rank-2 {
        min-width: 0;
        align-self: flex-start;
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 0.5em;

        .inner-content {
          border-color: rgba(255, 115, 0, 0.31);
        }
      }
      .rank-1 {
        align-self: flex-end;
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        .profile {
          height: -webkit-fill-available;
          position: absolute;
          width: -webkit-fill-available;
          left: 0;
        }
        .container {
          border: 1.1em solid rgba(255, 124, 0, 0.28);
          border-radius: 5em;
          background-color: #ecf0f1;
          width: 6.5em;
          height: 6.5em;
          position: relative;
        }
        img.crown {
          content: url("../../../../app/img/crown.svg");
          width: 1.5em;
        }
        .outer-border {
          border-width: 1em;
        }
      }
      .rank-3 {
        align-self: flex-start;
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 0.5em;

        .inner-content {
          border-color: rgba(255, 115, 0, 0.31);
        }
      }
    }

    .rank-holder .rank-1,
    .rank-holder .rank-2,
    .rank-holder .rank-3 {
      opacity: 0;
      transform: translateY(-20px);
      transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    }

    .rank-holder .rank-3 {
      animation: fadeInAndSlide 0.2s ease-in-out 0.2s forwards;
    }

    .rank-holder .rank-2 {
      animation: fadeInAndSlide 0.2s ease-in-out 1s forwards;
    }

    .rank-holder .rank-1 {
      animation: fadeInAndSlide 0.2s ease-in-out 2s forwards;
    }

    @keyframes fadeInAndSlide {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `},yi=e=>{var n,r,a,o,i,l,s,u,c,d,f,p,m,h,g,v,y,b,x,w,k,S,j,E,N,C,_,I,P,O,R,T,A,z,D,L,F,M,U,B,$,V,H,W,q,G,Q,Y,K,Z,J,X,ee,te,ne;const re=e=>{e.target.src=`${ft}/${pt}/avatar.png`},ae=(e,t)=>(null==e?void 0:e.length)>10?e.substring(0,10)+"...":e||`player-${t}`;return(0,t.jsx)(vi.Container,{children:(0,t.jsx)("div",{className:"rank-holder "+((null===(n=e.leaderBoard)||void 0===n?void 0:n.length)>3?"attained-score":""),children:(null===(r=e.leaderBoard)||void 0===r?void 0:r.length)>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"rank-2",title:(null===(o=null===(a=e.leaderBoard)||void 0===a?void 0:a[1])||void 0===o?void 0:o.userName)||"NA",children:[(0,t.jsx)("div",{className:"rank",children:(null===(l=null===(i=e.leaderBoard)||void 0===i?void 0:i[1])||void 0===l?void 0:l.rank)||"NA"}),(0,t.jsx)("div",{className:"outer-border",children:(0,t.jsx)("div",{className:"dp",children:(0,t.jsx)("img",{className:`profile inner-content ${(null===(u=null===(s=e.leaderBoard)||void 0===s?void 0:s[1])||void 0===u?void 0:u.profileImageUrl)&&e.sasToken?"":"default-avatar-gamify"} ${(null===(d=null===(c=e.leaderBoard)||void 0===c?void 0:c[1])||void 0===d?void 0:d.userId)===e.userId?"highlighted":""}`,alt:"",src:(null===(m=null===(p=null===(f=e.leaderBoard)||void 0===f?void 0:f[1])||void 0===p?void 0:p.profileImageUrl)||void 0===m?void 0:m.includes("assets"))?`${null===(g=null===(h=e.leaderBoard)||void 0===h?void 0:h[1])||void 0===g?void 0:g.profileImageUrl}\n\t\t\t\t\t\t\t\t\t\t\t  ${e.sasToken}`:(null===(y=null===(v=e.leaderBoard)||void 0===v?void 0:v[1])||void 0===y?void 0:y.profileImageUrl)||"",onError:e=>re(e)})})}),(0,t.jsxs)("div",{className:"score",children:[(0,t.jsx)("span",{children:ae(null===(x=null===(b=e.leaderBoard)||void 0===b?void 0:b[1])||void 0===x?void 0:x.userName,2)}),(0,t.jsx)("span",{className:"points",children:(null===(k=null===(w=e.leaderBoard)||void 0===w?void 0:w[1])||void 0===k?void 0:k.score)||0})]})]}),(0,t.jsxs)("div",{className:"rank-1",title:null===(j=null===(S=e.leaderBoard)||void 0===S?void 0:S[0])||void 0===j?void 0:j.userName,children:[(0,t.jsx)("img",{className:"crown",alt:"crown"}),(0,t.jsx)("div",{className:"outer-border",children:(0,t.jsx)("div",{className:"dp container",children:(0,t.jsx)("img",{className:`profile inner-content ${(null===(N=null===(E=e.leaderBoard)||void 0===E?void 0:E[0])||void 0===N?void 0:N.profileImageUrl)&&e.sasToken?"":"default-avatar-gamify"} highlighted`,alt:"",src:(null===(I=null===(_=null===(C=e.leaderBoard)||void 0===C?void 0:C[0])||void 0===_?void 0:_.profileImageUrl)||void 0===I?void 0:I.includes("assets"))?`${null===(O=null===(P=e.leaderBoard)||void 0===P?void 0:P[0])||void 0===O?void 0:O.profileImageUrl}\n\t\t\t\t\t\t\t\t\t\t\t${e.sasToken}`:null===(T=null===(R=e.leaderBoard)||void 0===R?void 0:R[0])||void 0===T?void 0:T.profileImageUrl,onError:e=>re(e)})})}),(0,t.jsx)("div",{}),(0,t.jsxs)("div",{className:"score",children:[(0,t.jsx)("span",{children:ae(null===(z=null===(A=e.leaderBoard)||void 0===A?void 0:A[0])||void 0===z?void 0:z.userName,1)}),(0,t.jsx)("span",{className:"points",children:(null===(L=null===(D=e.leaderBoard)||void 0===D?void 0:D[0])||void 0===L?void 0:L.score)||0})]})]}),(0,t.jsxs)("div",{className:"rank-3",title:null===(M=null===(F=e.leaderBoard)||void 0===F?void 0:F[2])||void 0===M?void 0:M.userName,children:[(0,t.jsx)("div",{className:"rank",children:(null===(B=null===(U=e.leaderBoard)||void 0===U?void 0:U[2])||void 0===B?void 0:B.rank)||"NA"}),(0,t.jsx)("div",{className:"outer-border",children:(0,t.jsx)("div",{className:"dp",children:(0,t.jsx)("img",{className:`profile inner-content ${(null===(V=null===($=e.leaderBoard)||void 0===$?void 0:$[2])||void 0===V?void 0:V.profileImageUrl)&&e.sasToken?"":"default-avatar-gamify"} ${(null===(W=null===(H=e.leaderBoard)||void 0===H?void 0:H[2])||void 0===W?void 0:W.userId)===e.userId?"highlighted":""}`,alt:"",src:(null===(Q=null===(G=null===(q=e.leaderBoard)||void 0===q?void 0:q[2])||void 0===G?void 0:G.profileImageUrl)||void 0===Q?void 0:Q.includes("assets"))?`${null===(K=null===(Y=e.leaderBoard)||void 0===Y?void 0:Y[2])||void 0===K?void 0:K.profileImageUrl}\n\t\t\t\t\t\t\t\t\t\t\t${e.sasToken}`:null===(J=null===(Z=e.leaderBoard)||void 0===Z?void 0:Z[2])||void 0===J?void 0:J.profileImageUrl,onError:e=>re(e)})})}),(0,t.jsxs)("div",{className:"score",children:[(0,t.jsx)("span",{children:ae(null===(ee=null===(X=e.leaderBoard)||void 0===X?void 0:X[2])||void 0===ee?void 0:ee.userName,3)}),(0,t.jsx)("span",{className:"points",children:(null===(ne=null===(te=e.leaderBoard)||void 0===te?void 0:te[2])||void 0===ne?void 0:ne.score)||0})]})]})]})})})},bi={Container:aa.div`
    .leaderboard {
      border-collapse: collapse;
      border-spacing: 0;
      font-weight: 500;
      font-size: medium;
      background: transparent;
      width: 100% !important;

      th {
        padding: 0.7em 1.4em;
        color: #777777;
        font-size: 0.8em !important;
      }
      tr {
        border: 1.5px solid #ebebeb;
        text-align: left;
        font-size: 0.9em;
        &.selectedRow {
          background-color: #fff0db;
          .rank .circle {
            background: #fff0db;
            color: white;
          }
        }

        td {
          padding: 0.7em 1.4em;
          &.more {
            text-align: center;
            img {
              content: url("../../../../../assets/icons/more.svg");
            }
          }
          &.rank .circle {
            border-radius: 100%;
            display: flex;
            background: #ebebeb;
            padding: 1px 0.7px;
            font-size: 0.9em;
          }
          &:nth-child(3) {
            text-align: left;
          }
          &:nth-child(4) {
            text-align: left;
          }
          &.avatar {
            .player {
              display: flex;
              gap: 0.3em;
              align-items: center;
            }
            .profile {
              width: 2.75em !important;
              height: 2.75em !important;
              background: var(--pro-gamify-rank-bg-color);
              background-size: cover !important;
              border-radius: 50% !important;
              box-shadow: 0px 10px 30px #00000034;

              &.default-avatar-gamify,
              &.on-img-error {
                content: url("${ft}/${pt}/avatar.png");
              }
            }
          }
          .score {
            display: flex;
            gap: 0.4em;
            lib-bolt {
              display: inherit;
            }
          }
          .reward {
            img {
              width: 2em;
              height: 2em;

              &.default-reward-gamify {
                content: url("${ft}/${pt}/no-reward.png");
              }
            }
          }
        }
      }
    }
  `},xi=({leaderBoards:e,userInformation:n,sasToken:r})=>{const a=["Rank","Player","Points","Reward"];return(0,t.jsx)(bi.Container,{children:(0,t.jsxs)("table",{"aria-label":"leaderboard","aria-describedby":"leaderboard","aria-hidden":"true",className:"leaderboard",children:[(0,t.jsx)("thead",{children:(null==e?void 0:e.length)>=3&&(0,t.jsx)("tr",{children:a.map(((e,n)=>(0,t.jsx)("th",{scope:"col",role:"columnheader",children:e},n)))})}),(0,t.jsx)("tbody",{children:null==e?void 0:e.map(((o,i)=>{var l,s,u,c,d,f,p;return(0,t.jsxs)(v.Fragment,{children:[10===i&&e[i].rank-e[i-1].rank>=2&&(0,t.jsx)("tr",{children:(0,t.jsx)("td",{className:"more",colSpan:a.length,children:(0,t.jsx)("img",{alt:"more"})})}),i>=3&&(0,t.jsxs)("tr",{className:n.userId===o.userId?"selectedRow":"",id:n.userId===o.userId?"selectedRow":"",children:[(0,t.jsx)("td",{className:"rank",role:"columnheader",children:(0,t.jsx)("div",{children:(null==o?void 0:o.rank)||"NA"})}),(0,t.jsx)("td",{className:"avatar",role:"columnheader",children:(0,t.jsxs)("div",{className:"player",children:[(0,t.jsx)("img",{className:"profile "+((null==o?void 0:o.profileImageUrl)&&r&&!(null==o?void 0:o.imageOnError)?"":"default-avatar-gamify"),alt:"",src:(null===(l=null==o?void 0:o.profileImageUrl)||void 0===l?void 0:l.includes("assets"))?`${null==o?void 0:o.profileImageUrl}${r}`:null==o?void 0:o.profileImageUrl,onError:e=>(e=>{e.target.src=`${ft}/${pt}/avatar.png`})(e)}),(0,t.jsx)("span",{children:(null==o?void 0:o.userName)||"-"})]})}),(0,t.jsx)("td",{role:"columnheader",children:(0,t.jsx)("div",{className:"score",children:(0,t.jsx)("span",{children:null==o?void 0:o.score})})}),(0,t.jsx)("td",{role:"columnheader",children:(0,t.jsx)("div",{className:"reward",children:(0,t.jsx)("img",{alt:(null===(u=null===(s=null==o?void 0:o.userReward)||void 0===s?void 0:s.previousReward)||void 0===u?void 0:u.value)||"",className:"reward "+((null===(d=null===(c=null==o?void 0:o.userReward)||void 0===c?void 0:c.previousReward)||void 0===d?void 0:d.sourceImgUrl)&&r?"":"default-reward-gamify"),src:`${null===(p=null===(f=null==o?void 0:o.userReward)||void 0===f?void 0:f.previousReward)||void 0===p?void 0:p.sourceImgUrl}${r}`,onError:e=>(e=>{e.target.src=`${ft}/${pt}/no-reward.png`})(e)})})})]})]},i)}))})]})})},wi=e=>{const[n,r]=(0,v.useState)(0),[a,o]=(0,v.useState)([]),[i,l]=(0,v.useState)([]),[s,u]=(0,v.useState)(""),c=()=>{r(0),Sa(e.userInfo.userId,e.applicationId).then((e=>{o(null==e?void 0:e.Items)})).catch((e=>{console.error("Error fetching data:",e)}))},d=()=>{var t,n;r(1),(t=e.userInfo.userId,n=e.applicationId,mi(void 0,void 0,void 0,(function*(){let e;return e=(yield hi.post(mt.userGroup.getUserGroupByAppId(),{userId:t,applicationId:n})).data.data,e}))).then((e=>{l(e)})).catch((e=>{console.error("Error fetching data:",e)}))},[f,p]=(0,v.useState)("");return(0,v.useEffect)((()=>{c(),ja().then((e=>{p(e)})).catch((e=>{console.error("Error fetching data:",e)}))}),[e.userInfo.userId,e.applicationId]),(0,t.jsx)(di.Scroll,{children:(0,t.jsxs)(gi.Container,{className:"container",children:[(0,t.jsxs)("div",{className:"tabs-group",children:[(0,t.jsx)("button",{className:"tab "+(0===n?"active":""),onClick:c,disabled:0===n,children:"Local"}),(0,t.jsx)("button",{className:"tab "+(1===n||2===n?"active":""),onClick:()=>d(),disabled:1===n||2===n,children:"Over All"})]}),(()=>{var l,c,p,m,h;switch(n){case 0:return(0,t.jsxs)(v.Fragment,{children:[(0,t.jsx)(yi,{sasToken:f,leaderBoard:a,userId:e.userInfo.userId}),(0,t.jsx)("div",{className:"bg-leaderboard",children:(0,t.jsx)(xi,{leaderBoards:a,userInformation:e.userInfo,sasToken:f})})]});case 1:return(0,t.jsxs)("div",{className:"bg-leaderboard groups",children:[(0,t.jsxs)("div",{className:"heading",children:[(0,t.jsx)("img",{className:"profile "+((null===(l=e.userInfo)||void 0===l?void 0:l.profileImageUrl)&&f?"":"default-avatar-gamify"),alt:"",src:(null===(p=null===(c=e.userInfo)||void 0===c?void 0:c.profileImageUrl)||void 0===p?void 0:p.includes("assets"))?`${null===(m=e.userInfo)||void 0===m?void 0:m.profileImageUrl}${f}`:null===(h=e.userInfo)||void 0===h?void 0:h.profileImageUrl}),(0,t.jsx)("span",{children:"You Stand …"})]}),(null==i?void 0:i.length)>0&&i.map(((n,a)=>void 0!==(null==n?void 0:n.rank)&&(0,t.jsxs)("button",{className:"usergp-list",onClick:()=>(t=>{var n,a,i;r(2),u(t.userGroupName),(n=t.userGroupId,a=e.userInfo.userId,i=e.applicationId,mi(void 0,void 0,void 0,(function*(){let e;return e=(yield hi.post(mt.userGroup.getRankByUserGroupId(1,10),{userGroupId:n,userId:a,applicationId:i})).data.data,e}))).then((e=>{o(null==e?void 0:e.Items)})).catch((e=>{console.error("Error fetching data:",e)}))})(n),children:[(0,t.jsxs)("div",{className:"list",children:[(0,t.jsx)("div",{className:"rank",children:`#${null==n?void 0:n.rank}`}),(0,t.jsx)("div",{className:"name",children:null==n?void 0:n.userGroupName})]}),(0,t.jsx)("button",{children:(0,t.jsx)("img",{alt:"drop-down"})})]},a)))]});case 2:return(0,t.jsxs)(v.Fragment,{children:[(0,t.jsx)(yi,{sasToken:f,leaderBoard:a,userId:e.userInfo.userId}),(0,t.jsxs)("div",{className:"bg-leaderboard",children:[(0,t.jsxs)("div",{className:"gpName",children:[(0,t.jsx)("button",{className:"back-arrow",onClick:()=>d(),children:(0,t.jsx)("img",{alt:"",className:"back"})}),(0,t.jsx)("span",{className:"gpName",children:s})]}),(0,t.jsx)(xi,{leaderBoards:a,userInformation:e.userInfo,sasToken:f})]})]});default:return(0,t.jsx)("div",{children:"default"})}})()]})})},ki={TabContainer:aa.div`
    width: 50%;
    min-width: 410px;
    background-color: white !important;
    z-index: 9999 !important;
  `,TabNav:aa.ul`
    display: flex !important;
    background: white !important;
    font-size: large !important;
    font-weight: 500;
    padding: 0 !important;
    margin: 0 !important;
    position: relative !important;
    border-bottom: 1px solid #dedede;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
  `,TabList:aa.li`
    cursor: pointer !important;
    list-style-type: none !important;
    padding: 0.95em 2em !important;
    margin: 0 !important;
    width: 50% !important;
    text-align: center !important;
    position: relative !important;
    border-top-left-radius: 1.3em;
    border-top-right-radius: 1.3em;
    &.active {
      a {
        color: black;
      }

      &::after {
        content: "";
        width: 100%;
        height: 0.2em;
        background-color: #333333;
        position: absolute;
        z-index: 1200;
        bottom: 0;
        left: 0;
        transition: all 0.4s linear;
      }
    }

    a {
      text-decoration: none !important;
      color: #898989;
    }
  `};const Si=e=>{const[n,r]=(0,v.useState)(0),[a,o]=(0,v.useState)("");return(0,v.useEffect)((()=>{var e,t,n,r;e=void 0,t=void 0,r=function*(){let e=yield gt();o(e)},new((n=void 0)||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function l(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((r=r.apply(e,t||[])).next())}))})),(0,t.jsxs)(ki.TabContainer,{children:[(0,t.jsx)(ki.TabNav,{children:["Achievement","LeaderBoard"].map(((e,a)=>(0,t.jsx)(ki.TabList,{className:n===a?"active":"",onClick:()=>{r(a)},children:(0,t.jsx)("a",{children:e})},e)))}),(0,t.jsx)("div",{children:0===n?(0,t.jsx)(pi,{userId:e.userId,applicationId:e.applicationId,clientId:e.clientId,clientSecret:e.clientSecret,userScore:e.userScore,redemptionEnabled:e.redemptionEnabled}):(0,t.jsx)(wi,{userInfo:e.userInfo,applicationId:e.applicationId})})]})},ji=e=>{const[n,r]=(0,v.useState)(!1),[a,o]=(0,v.useState)("");let[i,l]=(0,v.useState)({}),[s,u]=(0,v.useState)(!1);const[c,d]=(0,v.useState)({}),[f,p]=(0,v.useState)(!0),[m,h]=(0,v.useState)(!1),[g,y]=(0,v.useState)(!1);var b,x;return b=e.clientId,x=e.clientSecret,ht={clientId:b,clientSecret:x},(0,v.useEffect)((()=>{var t,n;(t=e.userId,n=e.applicationId,wa(void 0,void 0,void 0,(function*(){return yield ka.get(mt.users.get(t,n))}))).then((e=>{l(e.data.data),u(e.data.data.client.redemptionEnabled)})).catch((e=>{console.error("Error fetching user info:",e)})),ja().then((e=>{o(e)})).catch((e=>{console.error("Error fetching data:",e)})),Sa(e.userId,e.applicationId).then((t=>{const n=t.Items.find((t=>t.userId===e.userId));n&&l((e=>Object.assign(Object.assign({},e),{score:n.score})))})).catch((e=>{console.error("Error fetching data:",e)}))}),[e.userId,e.applicationId]),(0,v.useEffect)((()=>{xa(e.userId,e.applicationId).then((e=>{d(e.data),p(!1)})).catch((e=>{console.error("Error fetching data:",e)}))}),[]),(0,t.jsx)(di.DMFonts,{children:(0,t.jsx)("div",{className:"tabs",style:{display:"flex",justifyContent:"center"},children:(0,t.jsx)(Si,{clientId:e.clientId,clientSecret:e.clientId,userInfo:i,userId:e.userId,applicationId:e.applicationId,userScore:i.score,profileImageUrl:null==i?void 0:i.profileImageUrl,redemptionEnabled:s})})})};var Ei=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function l(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((r=r.apply(e,t||[])).next())}))};const Ni={Form:aa.form`
    max-width: 400px;
    margin: 0 auto;
    .div {
      margin-bottom: 1em;
    }
    .label {
      display: block;
      margin-bottom: 0.5em;
    }
    .input {
      width: 100%;
      padding: 0.5em;
      margin-top: 0.2em;
    }
    .button {
      background-color: #007bff;
      color: #fff;
      padding: 0.5em 1em;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 1em;
    }
  `},Ci=e=>{const{register:n,handleSubmit:r}=Wo();return(0,t.jsx)(Ni.Form,{children:(0,t.jsxs)("form",{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"clientId",className:"label",children:"Client ID:"}),(0,t.jsx)("input",Object.assign({type:"text",id:"clientId",className:"input"},n("clientId")))]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"label",htmlFor:"clientSecret",children:"Client Secret:"}),(0,t.jsx)("input",Object.assign({className:"input",type:"text",id:"clientSecret"},n("clientSecret")))]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"label",htmlFor:"applicationId",children:"Application ID:"}),(0,t.jsx)("input",Object.assign({className:"input",type:"text",id:"applicationId"},n("applicationId")))]}),(0,t.jsx)("button",{type:"button",onClick:r((t=>{var n;console.log(t),e.onButtonClick(t),(n=t,Ei(void 0,void 0,void 0,(function*(){return ZOHODESK.set("database",{key:"001",value:n,queriableValue:"Reward_Rally"})}))).then((e=>{console.log("Client Data Added")})).catch((e=>{console.log(e)}))})),className:"button",children:"Submit"})]})})},_i=()=>{const[e,n]=(0,v.useState)(null),[r,a]=(0,v.useState)(""),{app:o,loading:i}=(0,v.useContext)(b);return(0,v.useEffect)((()=>{ZOHODESK.get("user",{queriableValue:""}).then((function(e){var t;a(null===(t=e.user)||void 0===t?void 0:t.email)})).catch((function(e){a("")})),Ei(void 0,void 0,void 0,(function*(){return ZOHODESK.get("database",{queriableValue:"Reward_Rally"})})).then((e=>{var t;const r=null===(t=e["database.get"].data[0])||void 0===t?void 0:t.value;n(r||null)})).catch((e=>{console.error(e)}))}),[]),i?(0,t.jsx)("p",{children:"Loading..."}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(Ca,{children:e?(0,t.jsx)(ji,{userId:r,applicationId:null==e?void 0:e.applicationId,clientId:null==e?void 0:e.clientId,clientSecret:null==e?void 0:e.clientSecret}):(0,t.jsx)(Ci,{onButtonClick:e=>{n(e)}})})})},Ii=document.getElementById("root");(0,y.s)(Ii).render((0,t.jsx)(v.StrictMode,{children:(0,t.jsx)((()=>(0,t.jsx)(x,{children:(0,t.jsx)(_i,{})})),{})}))})()})();