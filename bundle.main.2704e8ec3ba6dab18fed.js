(()=>{"use strict";var e={973:(e,n,o)=>{var r=o(212),t=o(76),i=o(886),a=new r.xsS;a.background=new r.Ilk("white");var s=new r.cPb(50,.6,1,2e3);s.position.z=24;var c=new r.CP7;c.setPixelRatio(2*window.devicePixelRatio),c.setSize(300,500),document.body.appendChild(c.domElement);var l=new r.Mig("#eee");a.add(l),(new t.k).load("./static/mmd/kizunaai/kizunaai.pmx",(function(e){a.add(e),e.position.y=-10.5;var n=function(){return c.render(a,s)};new i.z(s,c.domElement).addEventListener("change",n),function e(){requestAnimationFrame(e),n()}()})),navigator.serviceWorker.register("/static/worker.js",{scope:"/static/worker/"}).then((function(e){e.installing?console.log("Service worker installing"):e.waiting?console.log("Service worker installed"):e.active&&console.log("Service worker active")})).catch((function(e){console.log("Registration failed with "+e)})),window.onload=function(){var e=new XMLHttpRequest;e.open("get","/static/worker/1111.png"),e.send(),e.onload=function(){console.log("load"),console.log(e.response)}}}},n={};function o(r){if(n[r])return n[r].exports;var t=n[r]={exports:{}};return e[r](t,t.exports,o),t.exports}o.m=e,o.d=(e,n)=>{for(var r in n)o.o(n,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={179:0},n=[[973,216]],r=()=>{};function t(){for(var r,t=0;t<n.length;t++){for(var i=n[t],a=!0,s=1;s<i.length;s++){var c=i[s];0!==e[c]&&(a=!1)}a&&(n.splice(t--,1),r=o(o.s=i[0]))}return 0===n.length&&(o.x(),o.x=()=>{}),r}o.x=()=>{o.x=()=>{},a=a.slice();for(var e=0;e<a.length;e++)i(a[e]);return(r=t)()};var i=t=>{for(var i,a,[c,l,u,d]=t,p=0,v=[];p<c.length;p++)a=c[p],o.o(e,a)&&e[a]&&v.push(e[a][0]),e[a]=0;for(i in l)o.o(l,i)&&(o.m[i]=l[i]);for(u&&u(o),s(t);v.length;)v.shift()();return d&&n.push.apply(n,d),r()},a=self.webpackChunkbaisc=self.webpackChunkbaisc||[],s=a.push.bind(a);a.push=i})(),o.x()})();