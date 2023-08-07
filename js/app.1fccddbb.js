(function(){"use strict";var t={9219:function(t,n,e){var l=e(9242),i=e(3396);const o=(0,i._)("h1",null,"Browse & Fly App",-1);function u(t,n){const e=(0,i.up)("router-link"),l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("nav",null,[(0,i.Wm)(e,{to:"/"},{default:(0,i.w5)((()=>[(0,i.Uk)("Home")])),_:1}),(0,i.Uk)(" | "),(0,i.Wm)(e,{to:"/about"},{default:(0,i.w5)((()=>[(0,i.Uk)("About")])),_:1})]),o,(0,i.Wm)(l)],64)}var r=e(89);const a={},s=(0,r.Z)(a,[["render",u]]);var c=s,f=e(2483),h=(e(7658),e(7139));const p=["src"];var d=(0,i.aZ)({__name:"FlightWidget",props:{flight:{}},setup(t){const n=t,e=(0,f.tv)();function l(t){e.push({path:"/flight/"+t})}function o(t){return"https://img.pequla.com/destination/"+t.toLowerCase().split(" ")[0]+".jpg"}return(t,e)=>((0,i.wg)(),(0,i.iD)("li",{onClick:e[0]||(e[0]=t=>l(n.flight.id)),class:"flight-box"},[(0,i._)("p",null,[(0,i._)("img",{src:o(n.flight.destination),width:"300"},null,8,p)]),(0,i._)("h3",null,(0,h.zw)(n.flight.destination)+" ("+(0,h.zw)(n.flight.flightNumber)+")",1),(0,i._)("p",null,(0,h.zw)(n.flight.scheduledAt),1)]))}});const g=d;var v=g,m=e(4870),w=e(4161);const _={class:"home"},b={class:"flex-list"};var y=(0,i.aZ)({__name:"HomeView",setup(t){const n=(0,m.iH)(0),e=(0,m.iH)([]);let l=!1,o=0;function u(){if(l)return;l=!0;const t="https://flight.pequla.com/api/flight?size=30&sort=scheduledAt,asc&page="+o;w.Z.get(t).then((t=>{t.data.last||o++,n.value=t.data.totalPages-1,e.value.push(...t.data.content),l=!1}))}return u(),window.addEventListener("scroll",(()=>{window.scrollY+window.innerHeight>=document.body.scrollHeight-100&&u()})),(t,n)=>((0,i.wg)(),(0,i.iD)("div",_,[(0,i._)("ul",b,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.value,(t=>((0,i.wg)(),(0,i.j4)(v,{flight:t,key:t.id},null,8,["flight"])))),128))])]))}});const k=y;var z=k;const O={key:0,class:"center content-box"},j=["src"];var H=(0,i.aZ)({__name:"FlightView",setup(t){const n=(0,f.yj)(),e=n.params.id,l=(0,m.iH)();function o(t){return"https://img.pequla.com/destination/"+t.toLowerCase().split(" ")[0]+".jpg"}return w.Z.get("https://flight.pequla.com/api/flight/"+e).then((t=>l.value=t.data)),(t,n)=>l.value?((0,i.wg)(),(0,i.iD)("div",O,[(0,i._)("h3",null,(0,h.zw)(l.value.destination)+" ("+(0,h.zw)(l.value.flightNumber)+")",1),(0,i._)("p",null,[(0,i._)("img",{src:o(l.value.destination),width:"960"},null,8,j)]),(0,i._)("ul",null,[(0,i._)("li",null,"International code: "+(0,h.zw)(l.value.flightKey),1),(0,i._)("li",null,"Flight number: "+(0,h.zw)(l.value.flightNumber),1),(0,i._)("li",null,"Destination: "+(0,h.zw)(l.value.destination),1),(0,i._)("li",null,"Scheduled at: "+(0,h.zw)(l.value.scheduledAt),1),(0,i._)("li",null,"Plane model: "+(0,h.zw)(l.value.plane),1),(0,i._)("li",null,"Airport gate: "+(0,h.zw)(l.value.gate),1),(0,i._)("li",null,"Airport terminal: "+(0,h.zw)(l.value.terminal),1)])])):(0,i.kq)("",!0)}});const x=H;var A=x;const D={class:"about"},F=(0,i._)("h3",null,"This is an about page",-1),Z=[F];function q(t,n){return(0,i.wg)(),(0,i.iD)("div",D,Z)}const C={},P=(0,r.Z)(C,[["render",q]]);var W=P;const E=[{path:"/",name:"home",component:z,meta:{title:"Home"}},{path:"/about",name:"about",component:W,meta:{title:"About"}},{path:"/flight/:id",name:"flight",component:A,props:!0,meta:{title:"Flight"}}],L=(0,f.p7)({history:(0,f.PO)("/"),routes:E});L.beforeEach(((t,n,e)=>{t.meta.title&&(document.title=`${t.meta.title} :: FlyVue`),e()}));var N=L;(0,l.ri)(c).use(N).mount("#app")}},n={};function e(l){var i=n[l];if(void 0!==i)return i.exports;var o=n[l]={exports:{}};return t[l].call(o.exports,o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,l,i,o){if(!l){var u=1/0;for(c=0;c<t.length;c++){l=t[c][0],i=t[c][1],o=t[c][2];for(var r=!0,a=0;a<l.length;a++)(!1&o||u>=o)&&Object.keys(e.O).every((function(t){return e.O[t](l[a])}))?l.splice(a--,1):(r=!1,o<u&&(u=o));if(r){t.splice(c--,1);var s=i();void 0!==s&&(n=s)}}return n}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[l,i,o]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var l in n)e.o(n,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:n[l]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,l){var i,o,u=l[0],r=l[1],a=l[2],s=0;if(u.some((function(n){return 0!==t[n]}))){for(i in r)e.o(r,i)&&(e.m[i]=r[i]);if(a)var c=a(e)}for(n&&n(l);s<u.length;s++)o=u[s],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(c)},l=self["webpackChunkflyvue"]=self["webpackChunkflyvue"]||[];l.forEach(n.bind(null,0)),l.push=n.bind(null,l.push.bind(l))}();var l=e.O(void 0,[998],(function(){return e(9219)}));l=e.O(l)})();
//# sourceMappingURL=app.1fccddbb.js.map