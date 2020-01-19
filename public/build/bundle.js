var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function l(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function f(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let p;function m(t){p=t}const g=[],h=[],y=[],v=[],$=Promise.resolve();let b=!1;function w(t){y.push(t)}function x(){const t=new Set;do{for(;g.length;){const t=g.shift();m(t),_(t.$$)}for(;h.length;)h.pop()();for(let e=0;e<y.length;e+=1){const n=y[e];t.has(n)||(n(),t.add(n))}y.length=0}while(g.length);for(;v.length;)v.pop()();b=!1}function _(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const k=new Set;function E(t,e){-1===t.$$.dirty[0]&&(g.push(t),b||(b=!0,$.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(c,a,i,u,d,s,l=[-1]){const f=p;m(c);const g=a.props||{},h=c.$$={fragment:null,ctx:null,props:s,update:t,not_equal:d,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:l};let y=!1;var v,$;h.ctx=i?i(c,g,(t,e,...n)=>{const o=n.length?n[0]:e;return h.ctx&&d(h.ctx[t],h.ctx[t]=o)&&(h.bound[t]&&h.bound[t](o),y&&E(c,t)),e}):[],h.update(),y=!0,o(h.before_update),h.fragment=!!u&&u(h.ctx),a.target&&(a.hydrate?h.fragment&&h.fragment.l(function(t){return Array.from(t.childNodes)}(a.target)):h.fragment&&h.fragment.c(),a.intro&&((v=c.$$.fragment)&&v.i&&(k.delete(v),v.i($))),function(t,n,c){const{fragment:a,on_mount:i,on_destroy:u,after_update:d}=t.$$;a&&a.m(n,c),w(()=>{const n=i.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]}),d.forEach(w)}(c,a.target,a.anchor),x()),m(f)}function L(t){let e,n,o,r;return{c(){e=d("button"),n=s("◉ Screen recording starts in "),o=s(t[2]),r=s(" sec")},m(t,c){i(t,e,c),a(e,n),a(e,o),a(e,r)},p(t,e){4&e&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(o,t[2])},d(t){t&&u(e)}}}function R(e){let n,o;return{c(){n=d("button"),n.textContent="► Start recording screen"},m(t,r){i(t,n,r),o=l(n,"click",e[16])},p:t,d(t){t&&u(n),o()}}}function T(e){let n,o;return{c(){n=d("button"),n.textContent="◉ Stop Recording",f(n,"color","red")},m(t,r){i(t,n,r),o=l(n,"click",e[15])},p:t,d(t){t&&u(n),o()}}}function C(e){let n,o,r,c;function l(t,e){return t[1]?T:4==t[2]?R:L}let p=l(e),m=p(e);return{c(){n=d("center"),m.c(),o=s(" "),r=d("center"),c=d("video"),c.autoplay=!0,f(c,"width","20em")},m(t,u){i(t,n,u),m.m(n,null),i(t,o,u),i(t,r,u),a(r,c),e[17](c)},p(t,[e]){p===(p=l(t))&&m?m.p(t,e):(m.d(1),m=p(t),m&&(m.c(),m.m(n,null)))},i:t,o:t,d(t){t&&u(n),m.d(),t&&u(o),t&&u(r),e[17](null)}}}function j(t,e,n){let o,r,c,a,i=!1,u=[];var d,s=4;function l(){u=[],p().then(m).then(()=>{n(2,s--,s),d=setInterval((function(){n(2,s--,s),s<=0&&(n(2,s=4),clearInterval(d),g())}),1e3)})}function f(){c.getTracks().forEach((function(t){t.stop()})),r.getTracks().forEach((function(t){t.stop()})),a.stop()}async function p(){try{return c=await navigator.mediaDevices.getUserMedia({audio:!0}),c}catch(t){console.log("audioStream err ",t)}}async function m(){try{return r=await navigator.mediaDevices.getDisplayMedia({video:!0,audio:!1}),n(0,o.srcObject=r,o),o.play(),r.addEventListener("inactive",t=>{console.log("incative",a),a&&"inactive"!=a.state&&a.stop()}),r}catch(t){console.log("videoStream err ",t)}}function g(){if(!r)return void alert("Video stream missing !");n(1,i=!0);let t=new MediaStream([r.getTracks()[0],c?c.getTracks()[0]:null]);a=new MediaRecorder(t,{mimeType:"video/webm; codecs=vp9"}),a.ondataavailable=y,a.onstop=v,a.start()}function y(t){t.data.size>0&&u.push(t.data)}function v(){n(1,i=!1);var t=new Blob(u,{type:"video/webm"}),e=URL.createObjectURL(t),o=document.createElement("a");document.body.appendChild(o),o.style="display: none",o.href=e,o.download="Record.webm",o.click(),setTimeout(()=>{window.URL.revokeObjectURL(e),u=[],document.body.removeChild(o)},0)}return[o,i,s,l,f,r,c,u,a,d,p,m,g,y,v,()=>f(),()=>l(),function(t){h[t?"unshift":"push"](()=>{n(0,o=t)})}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),S(this,t,j,C,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
