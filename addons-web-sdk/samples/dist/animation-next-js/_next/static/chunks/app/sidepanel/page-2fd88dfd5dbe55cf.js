(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[925],{9797:(t,e,a)=>{Promise.resolve().then(a.bind(a,8111))},8111:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var i=a(7821),n=a(8078),o=a(4880),l=a(4501);function r(){let[t,e]=(0,n.useState)();async function a(e){if(!t)throw Error("Side Panel is not yet initialized!");let a=document.getElementById("starting-color").value;await t.startActivity({mainStageUrl:l.lp,sidePanelUrl:l.V2,additionalData:'{"startingColor": "'.concat(a,'"}')}),window.location.replace(l.V2+window.location.search)}return(0,n.useEffect)(()=>{(async function(){let t=await o.meet.addon.createAddonSession({cloudProjectNumber:l.nS});e(await t.createSidePanelClient())})()},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{children:"Welcome to Pretty Colors! This is a contrived demo add-on that lets you look at an animation involving your favorite color."}),(0,i.jsx)("label",{htmlFor:"starting-color",children:"Pick a color you like. Everyone will see this:"}),(0,i.jsx)("input",{"aria-label":"Color picker for animation in main stage",type:"color",id:"starting-color",name:"starting-color",defaultValue:"#00ff00"}),(0,i.jsx)("br",{}),(0,i.jsx)("button",{"aria-label":"Launch activity for all participants",onClick:a,children:"Start activity"})]})}},4501:(t,e,a)=>{"use strict";a.d(e,{V2:()=>s,lp:()=>l,nS:()=>n,yp:()=>r});var i=a(5050);let n="285788035016",o="1"===i.env.NEXT_PUBLIC_DEBUG?"https://localhost:3000/meet/animation-next-js":"https://googleworkspace.github.io/meet/animation-next-js",l=o+"/mainstage",r=o+"/sidepanel",s=o+"/activitysidepanel"}},t=>{var e=e=>t(t.s=e);t.O(0,[880,601,166,744],()=>e(9797)),_N_E=t.O()}]);