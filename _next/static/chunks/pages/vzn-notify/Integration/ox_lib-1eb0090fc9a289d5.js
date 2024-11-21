(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[805],{9268:function(i,s,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vzn-notify/Integration/ox_lib",function(){return e(2149)}])},2149:function(i,s,e){"use strict";e.r(s),e.d(s,{useTOC:function(){return useTOC}});var n=e(2676),t=e(2979),r=e(6791),a=e(5797),h=e(5547);function useTOC(i){let s={code:"code",...(0,a.a)()};return[{value:"Go to ox_lib/resource/interface/client/notify.lua",id:"go-to-ox_libresourceinterfaceclientnotifylua",depth:3},{value:(0,n.jsxs)(n.Fragment,{children:["Find function called ",(0,n.jsx)(s.code,{children:"lib.notify"})]}),id:"find-function-called-libnotify",depth:3},{value:"Replace this function with this code below",id:"replace-this-function-with-this-code-below",depth:3}]}s.default=(0,t.c)(function(i){let{toc:s=useTOC(i)}=i,e={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",span:"span",...(0,a.a)(),...i.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{children:"OX_LIB INTEGRATION"}),"\n",(0,n.jsx)(e.p,{children:"To integrate vzn-notify with ox_lib do steps below!"}),"\n",(0,n.jsxs)(h.R,{children:[(0,n.jsx)(e.h3,{id:s[0].id,children:s[0].value}),(0,n.jsx)(e.h3,{id:s[1].id,children:s[1].value}),(0,n.jsx)(e.h3,{id:s[2].id,children:s[2].value}),(0,n.jsx)(e.pre,{tabIndex:"0","data-language":"lua","data-word-wrap":"","data-filename":"ox_lib/resource/interface/client/notify.lua","data-copy":"",children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"function"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" lib"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"."}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"notify"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(data)"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    local"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" sound "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" settings."}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"notification_audio"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" and"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" data."}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"sound"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    data."}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"sound"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" nil"})]}),"\n",(0,n.jsx)(e.span,{children:" "}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    exports["}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'vzn-notify'"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"]:"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"oxLibNotification"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(data)"})]}),"\n",(0,n.jsx)(e.span,{children:" "}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    if"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" not"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" sound "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"then"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" return"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" end"})]}),"\n",(0,n.jsx)(e.span,{children:" "}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    if"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" sound."}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"bank"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" then"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" lib."}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"requestAudioBank"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(sound."}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"bank"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"end"})]}),"\n",(0,n.jsx)(e.span,{children:" "}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    local"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" soundId "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" GetSoundId"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"()"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"    PlaySoundFrontend"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(soundId, sound."}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"name"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", sound."}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"set"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"true"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"    ReleaseSoundId"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(soundId)"})]}),"\n",(0,n.jsx)(e.span,{children:" "}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    if"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" sound."}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"bank"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" then"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" ReleaseNamedScriptAudioBank"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(sound."}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"bank"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"end"})]}),"\n",(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"end"})})]})})]})]})},"/vzn-notify/Integration/ox_lib",{filePath:"pages/vzn-notify/Integration/ox_lib.mdx",timestamp:1732201491e3,pageMap:r.v,frontMatter:{},title:"OX_LIB INTEGRATION"},"undefined"==typeof RemoteContent?useTOC:RemoteContent.useTOC)},5547:function(i,s,e){"use strict";e.d(s,{R:function(){return Steps}});var n=e(2676),t=e(4814),r=e(5271);function Steps({children:i,className:s,style:e,...a}){let h=(0,r.useId)().replaceAll(":","");return(0,n.jsx)("div",{className:(0,t.Z)("nextra-steps _ms-4 _mb-12 _border-s _border-gray-200 _ps-6","dark:_border-neutral-800",s),style:{...e,"--counter-id":h},...a,children:i})}},6791:function(i,s,e){"use strict";e.d(s,{v:function(){return n}});let n=[{data:{index:"Introduction","--":{type:"separator"},"vzn-notify":"VZN Notify","vzn-cleanerjob":"VZN Cleanerjob","vzn-references":"VZN References"}},{name:"index",route:"/",frontMatter:{sidebarTitle:"Index"}},{name:"vzn-cleanerjob",route:"/vzn-cleanerjob",children:[{data:{config:"Configuration",framework:"Framework"}},{name:"config",route:"/vzn-cleanerjob/config",frontMatter:{sidebarTitle:"Config"}},{name:"framework",route:"/vzn-cleanerjob/framework",frontMatter:{sidebarTitle:"Framework"}}]},{name:"vzn-cleanerjob",route:"/vzn-cleanerjob",frontMatter:{sidebarTitle:"Vzn Cleanerjob"}},{name:"vzn-notify",route:"/vzn-notify",children:[{name:"api",route:"/vzn-notify/api",frontMatter:{sidebarTitle:"API"}},{name:"designs",route:"/vzn-notify/designs",frontMatter:{sidebarTitle:"Designs"}},{name:"Integration",route:"/vzn-notify/Integration",children:[{name:"esx",route:"/vzn-notify/Integration/esx",frontMatter:{sidebarTitle:"Esx"}},{name:"ox_lib",route:"/vzn-notify/Integration/ox_lib",frontMatter:{sidebarTitle:"Ox Lib"}},{name:"qb-core",route:"/vzn-notify/Integration/qb-core",frontMatter:{sidebarTitle:"Qb Core"}}]}]},{name:"vzn-notify",route:"/vzn-notify",frontMatter:{sidebarTitle:"Vzn Notify"}},{name:"vzn-references",route:"/vzn-references",children:[{data:{config:"Configuration",framework:"Framework",custom_reward:"Custom Reward"}},{name:"config",route:"/vzn-references/config",frontMatter:{sidebarTitle:"Config"}},{name:"custom_reward",route:"/vzn-references/custom_reward",frontMatter:{sidebarTitle:"Custom Reward"}},{name:"framework",route:"/vzn-references/framework",frontMatter:{sidebarTitle:"Framework"}}]},{name:"vzn-references",route:"/vzn-references",frontMatter:{sidebarTitle:"Vzn References"}}]}},function(i){i.O(0,[979,774,888,179],function(){return i(i.s=9268)}),_N_E=i.O()}]);