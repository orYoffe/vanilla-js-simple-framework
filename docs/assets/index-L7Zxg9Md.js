const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/todos-DUpYVIOI.js","assets/state-DrVJWTxu.js","assets/counter-CvIg7Z4D.js"])))=>i.map(i=>d[i]);
(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();const L="modulepreload",T=function(t){return"https://oryoffe.github.io/vanilla-js-simple-framework/"+t},m={},d=function(i,e,s){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),o=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));r=Promise.all(e.map(a=>{if(a=T(a),a in m)return;m[a]=!0;const u=a.endsWith(".css"),_=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${_}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":L,u||(c.as="script",c.crossOrigin=""),c.href=a,o&&c.setAttribute("nonce",o),document.head.appendChild(c),u)return new Promise((S,E)=>{c.addEventListener("load",S),c.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${a}`)))})}))}return r.then(()=>i()).catch(n=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=n,window.dispatchEvent(o),!o.defaultPrevented)throw n})},C=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","animation","audio","canvas","circle","clipPath","color-profile","cursor","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","handler","hkern","iframe","image","line","linearGradient","listener","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","prefetch","radialGradient","rect","script","set","solidColor","stop","style","svg","switch","symbol","tbreak","text","textArea","textPath","title","tref","tspan","unknown","use","video","view","vkern"],f=new Set(C);f.delete("a");f.delete("audio");f.delete("canvas");f.delete("iframe");f.delete("script");f.delete("video");const k=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,A=t=>t===DocumentFragment,P=(t,i)=>{for(const[e,s]of Object.entries(i))e.startsWith("-")?t.style.setProperty(e,s):typeof s=="number"&&!k.test(e)?t.style[e]=`${s}px`:t.style[e]=s},O=t=>typeof t=="string"?f.has(t)?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t):A(t)?document.createDocumentFragment():t(t.defaultProps),p=(t,i,e)=>{e!=null&&(/^xlink[AHRST]/.test(i)?t.setAttributeNS("http://www.w3.org/1999/xlink",i.replace("xlink","xlink:").toLowerCase(),e):t.setAttribute(i,e))},w=(t,i)=>{for(const e of i)e instanceof Node?t.appendChild(e):Array.isArray(e)?w(t,e):typeof e!="boolean"&&typeof e<"u"&&e!==null&&t.appendChild(document.createTextNode(e))},x=new Set(["contentEditable","draggable","spellCheck","value","autoReverse","externalResourcesRequired","focusable","preserveAlpha"]),l=(t,i,...e)=>{var s;const r=O(t);if(w(r,e),r instanceof DocumentFragment||!i)return r;for(let[n,o]of Object.entries(i))if(n==="htmlFor"&&(n="for"),n==="class"||n==="className"){const a=(s=r.getAttribute("class"))!==null&&s!==void 0?s:"";p(r,"class",(a+" "+String(o)).trim())}else if(n==="style")P(r,o);else if(n.startsWith("on")){const a=n.slice(2).toLowerCase().replace(/^-/,"");r.addEventListener(a,o)}else n==="dangerouslySetInnerHTML"&&"__html"in o?r.innerHTML=o.__html:n!=="key"&&(x.has(n)||o!==!1)&&p(r,n,o===!0?"":o);return r},v="/vanilla-js-simple-framework",h=v+"/todos",g=v+"/counter";document.addEventListener("click",function(t){t.target instanceof HTMLAnchorElement&&t.target.href.startsWith(window.location.origin)&&t.preventDefault()});function y(t){window.history.replaceState({},"",t),b()}async function b(){let t;switch(window.location.pathname){case h:t=await d(async()=>{const{Todos:e}=await import("./todos-DUpYVIOI.js");return{Todos:e}},__vite__mapDeps([0,1])).then(({Todos:e})=>e);break;case g:t=await d(async()=>{const{Counter:e}=await import("./counter-CvIg7Z4D.js");return{Counter:e}},__vite__mapDeps([2,1])).then(({Counter:e})=>e);break;default:t=await d(async()=>{const{Counter:e}=await import("./counter-CvIg7Z4D.js");return{Counter:e}},__vite__mapDeps([2,1])).then(({Counter:e})=>e)}const i=l("div",{id:"app"},l("h1",null,"Simple vanilla js framework example"),l("p",null,"Including TypeScript, JSX, State updates, Templating, Routing, code splitting.. What else do you need? ",l("br",null),"Ok.. go ahead and add tailwind or another css lib.."),l("nav",null,l("a",{href:"/counter",onClick:()=>(y(g),!1)},"Counter"),l("a",{href:"/todos",onClick:()=>(y(h),!1)},"Todos"),l("a",{target:"_blank",href:"https://github.com/orYoffe/vanilla-js-simple-framework"},"Github repo 🔗")),l("div",{class:"card"},l(t,null)));document.getElementById("app").replaceWith(i)}b();export{l as h};
