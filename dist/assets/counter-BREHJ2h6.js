import{h as n}from"./index-CPHkABQf.js";import{s as r,w as c,u as s}from"./state-CNLGedDY.js";const{state:o,id:e}=r({counter:0});console.log("----count--------stateId------------",e);function i(){o.setState(t=>({counter:++t.counter}))}function a(){o.setState(t=>({counter:--t.counter}))}function m(){function t(u){s(e,c(u.counter,e))}return o.subscribe(t),n("div",null,n("p",null,"count is ",c(o.state.counter,e)),n("button",{onClick:i},"Increment +"),n("button",{onClick:a},"Decrement -"))}export{m as Counter};
