import{h as r}from"./index-CPHkABQf.js";function a(e){if(typeof e!="object"||e===null)throw new Error("Initial state is required to be an object or an array");return{state:e,subscribers:[],async setState(t){let s;typeof t=="function"?s=t(this.state):s=t,this.state=Object.assign({},this.state,s),await Promise.all(this.subscribers.map(i=>i(this.state)))},subscribe(t){this.subscribers.push(t)},unsubscribe(t){this.subscribers=this.subscribers.filter(s=>s!==t)}}}let n=0;function u(e,t){return r("span",{class:t},e)}function o(e){const t=a(e),s="signal_id_"+ ++n;return{state:t,id:s}}function b(e,t){const s=document.getElementsByClassName(e)[0];s&&s.replaceWith(t)}export{o as s,b as u,u as w};
