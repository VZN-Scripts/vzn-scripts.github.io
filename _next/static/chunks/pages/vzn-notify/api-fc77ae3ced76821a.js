(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[216],{8497:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vzn-notify/api",function(){return s(9692)}])},9692:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return c}});var i=s(2676),t=s(1662),o=s(8371),r=s(7229);s(1647);var l=s(5056);let c=[{depth:3,value:"VISIBILITY",id:"visibility"},{depth:3,value:"ADD NOTIFICATION",id:"add-notification"}];function _createMdxContent(e){let n=Object.assign({h1:"h1",h3:"h3",p:"p",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",a:"a"},(0,l.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"API"}),"\n",(0,i.jsx)(n.h3,{id:"visibility",children:"VISIBILITY"}),"\n",(0,i.jsx)(n.p,{children:"To show / hide notifications (for example, some cinematic mode etc) you can use export"}),"\n",(0,i.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,i.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"exports["}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'vzn-notify'"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"]:"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"setVisible"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(visible)"})]})})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["visible: ",(0,i.jsx)(n.code,{children:"boolean"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"setting will change the visibility of notifications nui"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"add-notification",children:"ADD NOTIFICATION"}),"\n",(0,i.jsx)(n.p,{children:"To add new notification you have to use export"}),"\n",(0,i.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,i.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@class"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"NotifyData"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@field"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" notifType? "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"error" '}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"| "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"success" '}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"| "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"primary" '}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"| "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"warning" '}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"| "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"money"'})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@field"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" designType? 1 "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"| "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"2 "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"| "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"3 "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"| "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"4"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@field"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" duration? "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"number in miliseconds"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@field"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" title? "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@field"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" message "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:" "}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@type"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"NotifyData"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" data "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    notifType "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"warning"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    title "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Caution"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    duration "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"3000"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    message "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Remember to join our discord and subscribe VZN Scripts on youtube"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"exports["}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'vzn-notify'"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"]:"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"addNotification"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(data)"})]})]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["data: ",(0,i.jsx)(n.code,{children:"NotifyData"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["notifType: ",(0,i.jsx)(n.code,{children:"error"})," | ",(0,i.jsx)(n.code,{children:"success"})," | ",(0,i.jsx)(n.code,{children:"primary"})," | ",(0,i.jsx)(n.code,{children:"warning"})," | ",(0,i.jsx)(n.code,{children:"money"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"the color of the notification"}),"\n",(0,i.jsx)(n.li,{children:"if not setted -> primary"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["designType?: ",(0,i.jsx)(n.code,{children:"1"})," | ",(0,i.jsx)(n.code,{children:"2"})," | ",(0,i.jsx)(n.code,{children:"3"})," | ",(0,i.jsx)(n.code,{children:"4"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["the design of the notification ",(0,i.jsx)(n.a,{href:"./designs",children:"Preview"})]}),"\n",(0,i.jsx)(n.li,{children:"if not setted -> default from Config"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["duration?: ",(0,i.jsx)(n.code,{children:"number"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"time during which the notification will be visible (in miliseconds)"}),"\n",(0,i.jsx)(n.li,{children:"if not setted -> default from Config"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["title?: ",(0,i.jsx)(n.code,{children:"string"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"the title of the notification"}),"\n",(0,i.jsx)(n.li,{children:"if not setted -> default from Config"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["message: ",(0,i.jsx)(n.code,{children:"string"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"message of the notification"}),"\n",(0,i.jsx)(n.li,{children:"if not setted -> notification will not appear"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}let a={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.a)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/vzn-notify/api.mdx",route:"/vzn-notify/api",timestamp:1721515425e3,pageMap:[{kind:"Meta",data:{index:"Introduction","vzn-notify":"vzn-notify"}},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"vzn-notify",route:"/vzn-notify",children:[{kind:"Folder",name:"Integration",route:"/vzn-notify/Integration",children:[{kind:"MdxPage",name:"esx",route:"/vzn-notify/Integration/esx"},{kind:"MdxPage",name:"ox_lib",route:"/vzn-notify/Integration/ox_lib"},{kind:"MdxPage",name:"qb-core",route:"/vzn-notify/Integration/qb-core"},{kind:"Meta",data:{esx:"Esx",ox_lib:"Ox Lib","qb-core":"Qb Core"}}]},{kind:"MdxPage",name:"api",route:"/vzn-notify/api"},{kind:"MdxPage",name:"designs",route:"/vzn-notify/designs"},{kind:"Meta",data:{api:"API",designs:"Designs"}}]},{kind:"MdxPage",name:"vzn-notify",route:"/vzn-notify"}],flexsearch:{codeblocks:!0},title:"API",headings:c},pageNextRoute:"/vzn-notify/api",nextraLayout:o.ZP,themeConfig:r.Z};n.default=(0,t.j)(a)},7229:function(e,n,s){"use strict";var i=s(2676);s(5271);var t=s(8371),o=s(3087);let r={head:()=>{let{asPath:e}=(0,o.useRouter)(),{frontMatter:n,title:s}=(0,t.ZR)(),r="Documentation for VZN Scripts assets";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("link",{rel:"icon",type:"image/png",href:"/logo.png"}),(0,i.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,i.jsx)("meta",{name:"description",content:n.description||r}),(0,i.jsx)("meta",{name:"og:title",content:s||"VZN Scripts Documentation"}),(0,i.jsx)("meta",{name:"og:url",content:"https://docs.vzn-scripts.com/".concat(e)}),(0,i.jsx)("meta",{name:"og:description",content:n.description||r}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]})},logo:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[(0,i.jsx)("div",{style:{width:"38px",height:"38px",background:"url('https://avatars.githubusercontent.com/u/175264237?s=38') no-repeat left",backgroundSize:"38px",borderRadius:"50%"}}),(0,i.jsx)("span",{style:{fontWeight:550,lineHeight:"38px"}}),"VZN Scripts"]}),useNextSeoProps:()=>{let{asPath:e}=(0,o.useRouter)(),n=e.replace(/[-_]/g," ").split("/"),s="#"!==n[1][0]&&n[1]||"VZN Scripts",i=n[n.length-1],t=/[a-z]/.test(i)&&/[A-Z]/.test(i)?i:"%s";return{titleTemplate:"".concat(t," | ").concat(i===s?"Documentation":s.replace(/(^\w|\s\w)/g,e=>e.toUpperCase()))}},project:{link:"https://github.com/VZN-Scripts"},chat:{link:"https://discord.gg/wqzrVM3QYk"},docsRepositoryBase:"https://github.com/VZN-Scripts/vzn-scripts.github.io/blob/main",footer:{text:"VZN Scripts"}};n.Z=r},5184:function(){}},function(e){e.O(0,[774,902,888,179],function(){return e(e.s=8497)}),_N_E=e.O()}]);