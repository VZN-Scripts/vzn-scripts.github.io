(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[873],{9695:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return f}});let n=i(1351),o=i(5815),r=o._(i(5271)),a=n._(i(967)),s=n._(i(6426)),l=i(8736),d=i(4160),h=i(247);i(5990);let c=i(7607),u=n._(i(7870)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function handleLoading(e,t,i,n,o,r){let a=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===a)return;e["data-loaded-src"]=a;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function getDynamicProps(e){let[t,i]=r.version.split("."),n=parseInt(t,10),o=parseInt(i,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let m=(0,r.forwardRef)((e,t)=>{let{src:i,srcSet:n,sizes:o,height:a,width:s,decoding:l,className:d,style:h,fetchPriority:c,placeholder:u,loading:g,unoptimized:m,fill:f,onLoadRef:p,onLoadingCompleteRef:v,setBlurComplete:w,setShowAltText:E,onLoad:S,onError:y,...b}=e;return r.default.createElement("img",{...b,...getDynamicProps(c),loading:g,width:s,height:a,decoding:l,"data-nimg":f?"fill":"1",className:d,style:h,sizes:o,srcSet:n,src:i,ref:(0,r.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(y&&(e.src=e.src),e.complete&&handleLoading(e,u,p,v,w,m))},[i,u,p,v,w,y,m,t]),onLoad:e=>{let t=e.currentTarget;handleLoading(t,u,p,v,w,m)},onError:e=>{E(!0),"empty"!==u&&w(!0),y&&y(e)}})});function ImagePreload(e){let{isAppRouter:t,imgAttributes:i}=e,n={as:"image",imageSrcSet:i.srcSet,imageSizes:i.sizes,crossOrigin:i.crossOrigin,referrerPolicy:i.referrerPolicy,...getDynamicProps(i.fetchPriority)};return t&&a.default.preload?(a.default.preload(i.src,n),null):r.default.createElement(s.default,null,r.default.createElement("link",{key:"__nimg-"+i.src+i.srcSet+i.sizes,rel:"preload",href:i.srcSet?void 0:i.src,...n}))}let f=(0,r.forwardRef)((e,t)=>{let i=(0,r.useContext)(c.RouterContext),n=(0,r.useContext)(h.ImageConfigContext),o=(0,r.useMemo)(()=>{let e=g||n||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[n]),{onLoad:a,onLoadingComplete:s}=e,f=(0,r.useRef)(a);(0,r.useEffect)(()=>{f.current=a},[a]);let p=(0,r.useRef)(s);(0,r.useEffect)(()=>{p.current=s},[s]);let[v,w]=(0,r.useState)(!1),[E,S]=(0,r.useState)(!1),{props:y,meta:b}=(0,l.getImgProps)(e,{defaultLoader:u.default,imgConf:o,blurComplete:v,showAltText:E});return r.default.createElement(r.default.Fragment,null,r.default.createElement(m,{...y,unoptimized:b.unoptimized,placeholder:b.placeholder,fill:b.fill,onLoadRef:f,onLoadingCompleteRef:p,setBlurComplete:w,setShowAltText:S,ref:t}),b.priority?r.default.createElement(ImagePreload,{isAppRouter:!i,imgAttributes:y}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8736:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return getImgProps}}),i(5990);let n=i(15),o=i(4160);function isStaticRequire(e){return void 0!==e.default}function getInt(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function getImgProps(e,t){var i;let r,a,s,{src:l,sizes:d,unoptimized:h=!1,priority:c=!1,loading:u,className:g,quality:m,width:f,height:p,fill:v=!1,style:w,onLoad:E,onLoadingComplete:S,placeholder:y="empty",blurDataURL:b,fetchPriority:L,layout:I,objectFit:C,objectPosition:z,lazyBoundary:D,lazyRoot:M,...O}=e,{imgConf:P,showAltText:N,blurComplete:T,defaultLoader:x}=t,A=P||o.imageConfigDefault;if("allSizes"in A)r=A;else{let e=[...A.deviceSizes,...A.imageSizes].sort((e,t)=>e-t),t=A.deviceSizes.sort((e,t)=>e-t);r={...A,allSizes:e,deviceSizes:t}}let j=O.loader||x;delete O.loader,delete O.srcSet;let W="__next_img_default"in j;if(W){if("custom"===r.loader)throw Error('Image with src "'+l+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=j;j=t=>{let{config:i,...n}=t;return e(n)}}if(I){"fill"===I&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[I];t&&!d&&(d=t)}let _="",R=getInt(f),k=getInt(p);if("object"==typeof(i=l)&&(isStaticRequire(i)||void 0!==i.src)){let e=isStaticRequire(l)?l.default:l;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,s=e.blurHeight,b=b||e.blurDataURL,_=e.src,!v){if(R||k){if(R&&!k){let t=R/e.width;k=Math.round(e.height*t)}else if(!R&&k){let t=k/e.height;R=Math.round(e.width*t)}}else R=e.width,k=e.height}}let U=!c&&("lazy"===u||void 0===u);(!(l="string"==typeof l?l:_)||l.startsWith("data:")||l.startsWith("blob:"))&&(h=!0,U=!1),r.unoptimized&&(h=!0),W&&l.endsWith(".svg")&&!r.dangerouslyAllowSVG&&(h=!0),c&&(L="high");let G=getInt(m),F=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:z}:{},N?{}:{color:"transparent"},w),$=T||"empty"===y?null:"blur"===y?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:R,heightInt:k,blurWidth:a,blurHeight:s,blurDataURL:b||"",objectFit:F.objectFit})+'")':'url("'+y+'")',B=$?{backgroundSize:F.objectFit||"cover",backgroundPosition:F.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:$}:{},H=function(e){let{config:t,src:i,unoptimized:n,width:o,quality:r,sizes:a,loader:s}=e;if(n)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,i){let{deviceSizes:n,allSizes:o}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(i);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let r=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:r,kind:"x"}}(t,o,a),h=l.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:l.map((e,n)=>s({config:t,src:i,quality:r,width:e})+" "+("w"===d?e:n+1)+d).join(", "),src:s({config:t,src:i,quality:r,width:l[h]})}}({config:r,src:l,unoptimized:h,width:R,quality:G,sizes:d,loader:j}),Z={...O,loading:U?"lazy":u,fetchPriority:L,width:R,height:k,decoding:"async",className:g,style:{...F,...B},sizes:H.sizes,srcSet:H.srcSet,src:H.src},Y={unoptimized:h,priority:c,placeholder:y,fill:v};return{props:Z,meta:Y}}},15:function(e,t){"use strict";function getImageBlurSvg(e){let{widthInt:t,heightInt:i,blurWidth:n,blurHeight:o,blurDataURL:r,objectFit:a}=e,s=n?40*n:t,l=o?40*o:i,d=s&&l?"viewBox='0 0 "+s+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+r+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return getImageBlurSvg}})},501:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return l}});let n=i(1351),o=i(8736),r=i(5990),a=i(9695),s=n._(i(7870)),unstable_getImgProps=e=>{(0,r.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}},l=a.Image},7870:function(e,t){"use strict";function defaultLoader(e){let{config:t,src:i,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),defaultLoader.__next_img_default=!0;let i=defaultLoader},85:function(e,t,i){e.exports=i(501)},6545:function(e,t,i){"use strict";i.d(t,{a:function(){return useMDXComponents}});var n=i(139),o=i(2676),r=i(5271),a=i(967);let testElType=(e,t)=>e===t?.tagName?.toUpperCase?.(),testDiv=e=>testElType("DIV",e)||testElType("SPAN",e),testImg=e=>testElType("IMG",e),testImgLoaded=e=>e.complete&&0!==e.naturalHeight,testSvg=e=>testElType("SVG",e),getScaleToWindow=({height:e,offset:t,width:i})=>Math.min((window.innerWidth-2*t)/i,(window.innerHeight-2*t)/e),getScaleToWindowMax=({containerHeight:e,containerWidth:t,offset:i,targetHeight:n,targetWidth:o})=>{let r=getScaleToWindow({height:n,offset:i,width:o}),a=o>n?o/t:n/e;return r>1?a:r*a},getScale=({containerHeight:e,containerWidth:t,hasScalableSrc:i,offset:n,targetHeight:o,targetWidth:r})=>e&&t?!i&&o&&r?getScaleToWindowMax({containerHeight:e,containerWidth:t,offset:n,targetHeight:o,targetWidth:r}):getScaleToWindow({height:e,offset:n,width:t}):1,s=/url(?:\(['"]?)(.*?)(?:['"]?\))/,getImgSrc=e=>{if(e){if(testImg(e))return e.currentSrc;if(testDiv(e)){let t=window.getComputedStyle(e).backgroundImage;if(t)return s.exec(t)?.[1]}}},getImgAlt=e=>{if(e)return testImg(e)?e.alt??void 0:e.getAttribute("aria-label")??void 0},getImgRegularStyle=({containerHeight:e,containerLeft:t,containerTop:i,containerWidth:n,hasScalableSrc:o,offset:r,targetHeight:a,targetWidth:s})=>{let l=getScale({containerHeight:e,containerWidth:n,hasScalableSrc:o,offset:r,targetHeight:a,targetWidth:s});return{top:i,left:t,width:n*l,height:e*l,transform:`translate(0,0) scale(${1/l})`}},parsePosition=({position:e,relativeNum:t})=>{let i=parseFloat(e);return e.endsWith("%")?t*i/100:i},getImgObjectFitStyle=({containerHeight:e,containerLeft:t,containerTop:i,containerWidth:n,hasScalableSrc:o,objectFit:r,objectPosition:a,offset:s,targetHeight:l,targetWidth:d})=>{if("scale-down"===r&&(r=d<=n&&l<=e?"none":"contain"),"cover"===r||"contain"===r){let h=n/d,c=e/l,u="cover"===r?Math.max(h,c):Math.min(h,c),[g="50%",m="50%"]=a.split(" "),f=parsePosition({position:g,relativeNum:n-d*u}),p=parsePosition({position:m,relativeNum:e-l*u}),v=getScale({containerHeight:l*u,containerWidth:d*u,hasScalableSrc:o,offset:s,targetHeight:l,targetWidth:d});return{top:i+p,left:t+f,width:d*u*v,height:l*u*v,transform:`translate(0,0) scale(${1/v})`}}if("none"===r){let[r="50%",h="50%"]=a.split(" "),c=parsePosition({position:r,relativeNum:n-d}),u=parsePosition({position:h,relativeNum:e-l}),g=getScale({containerHeight:l,containerWidth:d,hasScalableSrc:o,offset:s,targetHeight:l,targetWidth:d});return{top:i+u,left:t+c,width:d*g,height:l*g,transform:`translate(0,0) scale(${1/g})`}}if("fill"!==r)return{};{let t=n/d,i=e/l,r=Math.max(t,i),a=getScale({containerHeight:l*r,containerWidth:d*r,hasScalableSrc:o,offset:s,targetHeight:l,targetWidth:d});return{width:n*a,height:e*a,transform:`translate(0,0) scale(${1/a})`}}},getDivImgStyle=({backgroundPosition:e,backgroundSize:t,containerHeight:i,containerLeft:n,containerTop:o,containerWidth:r,hasScalableSrc:a,offset:s,targetHeight:l,targetWidth:d})=>{if("cover"===t||"contain"===t){let h=r/d,c=i/l,u="cover"===t?Math.max(h,c):Math.min(h,c),[g="50%",m="50%"]=e.split(" "),f=parsePosition({position:g,relativeNum:r-d*u}),p=parsePosition({position:m,relativeNum:i-l*u}),v=getScale({containerHeight:l*u,containerWidth:d*u,hasScalableSrc:a,offset:s,targetHeight:l,targetWidth:d});return{top:o+p,left:n+f,width:d*u*v,height:l*u*v,transform:`translate(0,0) scale(${1/v})`}}if("auto"===t){let[t="50%",h="50%"]=e.split(" "),c=parsePosition({position:t,relativeNum:r-d}),u=parsePosition({position:h,relativeNum:i-l}),g=getScale({containerHeight:l,containerWidth:d,hasScalableSrc:a,offset:s,targetHeight:l,targetWidth:d});return{top:o+u,left:n+c,width:d*g,height:l*g,transform:`translate(0,0) scale(${1/g})`}}{let[h="50%",c="50%"]=t.split(" "),u=parsePosition({position:h,relativeNum:r}),g=parsePosition({position:c,relativeNum:i}),m=u/d,f=g/l,p=Math.min(m,f),[v="50%",w="50%"]=e.split(" "),E=parsePosition({position:v,relativeNum:r-d*p}),S=parsePosition({position:w,relativeNum:i-l*p}),y=getScale({containerHeight:l*p,containerWidth:d*p,hasScalableSrc:a,offset:s,targetHeight:l,targetWidth:d});return{top:o+S,left:n+E,width:d*p*y,height:l*p*y,transform:`translate(0,0) scale(${1/y})`}}},l=/\.svg$/i,getStyleModalImg=({hasZoomImg:e,imgSrc:t,isSvg:i,isZoomed:n,loadedImgEl:o,offset:r,shouldRefresh:a,targetEl:s})=>{let d=i||t?.slice?.(0,18)==="data:image/svg+xml"||e||!!(t&&l.test(t)),h=s.getBoundingClientRect(),c=window.getComputedStyle(s),u=null!=o&&testDiv(s),g=getImgRegularStyle({containerHeight:h.height,containerLeft:h.left,containerTop:h.top,containerWidth:h.width,hasScalableSrc:d,offset:r,targetHeight:o?.naturalHeight||h.height,targetWidth:o?.naturalWidth||h.width}),m=null==o||u?void 0:getImgObjectFitStyle({containerHeight:h.height,containerLeft:h.left,containerTop:h.top,containerWidth:h.width,hasScalableSrc:d,objectFit:c.objectFit,objectPosition:c.objectPosition,offset:r,targetHeight:o?.naturalHeight||h.height,targetWidth:o?.naturalWidth||h.width}),f=u?getDivImgStyle({backgroundPosition:c.backgroundPosition,backgroundSize:c.backgroundSize,containerHeight:h.height,containerLeft:h.left,containerTop:h.top,containerWidth:h.width,hasScalableSrc:d,offset:r,targetHeight:o?.naturalHeight||h.height,targetWidth:o?.naturalWidth||h.width}):void 0,p=Object.assign({},g,m,f);if(n){let e=window.innerWidth/2,t=window.innerHeight/2,i=parseFloat(String(p.left||0))+parseFloat(String(p.width||0))/2,n=parseFloat(String(p.top||0))+parseFloat(String(p.height||0))/2;a&&(p.transitionDuration="0.01ms"),p.transform=`translate(${e-i}px,${t-n}px) scale(1)`}return p},getStyleGhost=e=>{if(!e)return{};if(!testSvg(e))return{height:e.offsetHeight,left:e.offsetLeft,width:e.offsetWidth,top:e.offsetTop};{let t=e.parentElement,i=e.getBoundingClientRect();if(!t)return{height:i.height,left:i.left,width:i.width,top:i.top};{let e=t.getBoundingClientRect();return{height:i.height,left:e.left-i.left,top:e.top-i.top,width:i.width}}}},adjustSvgIDs=e=>{let t="-zoom",i=["clip-path","fill","mask","marker-start","marker-mid","marker-end"],n=new Map;if(e.hasAttribute("id")){let i=e.id,o=i+t;n.set(i,o),e.id=o}e.querySelectorAll("[id]").forEach(e=>{let i=e.id,o=i+t;n.set(i,o),e.id=o}),n.forEach((t,n)=>{let o=`url(#${n})`,r=`url(#${t})`,a=i.map(e=>`[${e}="${o}"]`).join(", ");e.querySelectorAll(a).forEach(e=>{i.forEach(t=>{e.getAttribute(t)===o&&e.setAttribute(t,r)})})}),e.querySelectorAll("style").forEach(e=>{n.forEach((t,i)=>{e.textContent&&(e.textContent=e.textContent.replaceAll(`#${i}`,`#${t}`))})})},d=["img","svg",'[role="img"]',"[data-zoom]"].map(e=>`${e}:not([aria-hidden="true"])`).join(","),h={overflow:"",width:""};function Controlled(e){return r.createElement(ControlledBase,{...e})}let ControlledBase=class ControlledBase extends r.Component{constructor(){super(...arguments),this.state={id:"",isZoomImgLoaded:!1,loadedImgEl:void 0,modalState:"UNLOADED",shouldRefresh:!1,styleGhost:{}},this.refContent=r.createRef(),this.refDialog=r.createRef(),this.refModalContent=r.createRef(),this.refModalImg=r.createRef(),this.refWrap=r.createRef(),this.imgEl=null,this.isScaling=!1,this.prevBodyAttrs=h,this.styleModalImg={},this.handleModalStateChange=e=>{let{modalState:t}=this.state;"LOADING"!==e&&"LOADING"===t?(this.loadZoomImg(),window.addEventListener("resize",this.handleResize,{passive:!0}),window.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!0}),window.addEventListener("touchend",this.handleTouchEnd,{passive:!0}),window.addEventListener("touchcancel",this.handleTouchCancel,{passive:!0}),document.addEventListener("keydown",this.handleKeyDown,!0)):"LOADED"!==e&&"LOADED"===t?window.addEventListener("wheel",this.handleWheel,{passive:!0}):"UNLOADING"!==e&&"UNLOADING"===t?(this.ensureImgTransitionEnd(),window.removeEventListener("wheel",this.handleWheel),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchend",this.handleTouchEnd),window.removeEventListener("touchcancel",this.handleTouchCancel),document.removeEventListener("keydown",this.handleKeyDown,!0)):"UNLOADED"!==e&&"UNLOADED"===t&&(this.bodyScrollEnable(),window.removeEventListener("resize",this.handleResize),this.refModalImg.current?.removeEventListener?.("transitionend",this.handleImgTransitionEnd),this.refDialog.current?.close?.())},this.getDialogContainer=()=>{let e=document.querySelector("[data-rmiz-portal]");return null==e&&((e=document.createElement("div")).setAttribute("data-rmiz-portal",""),document.body.appendChild(e)),e},this.setId=()=>{let gen4=()=>Math.random().toString(16).slice(-4);this.setState({id:gen4()+gen4()+gen4()})},this.setAndTrackImg=()=>{let e=this.refContent.current;!e||(this.imgEl=e.querySelector(d),this.imgEl?(this.contentNotFoundChangeObserver?.disconnect?.(),this.imgEl.addEventListener("load",this.handleImgLoad),this.imgEl.addEventListener("click",this.handleZoom),this.state.loadedImgEl||this.handleImgLoad(),this.imgElResizeObserver=new ResizeObserver(e=>{let t=e[0];t?.target&&(this.imgEl=t.target,this.setState({styleGhost:getStyleGhost(this.imgEl)}))}),this.imgElResizeObserver.observe(this.imgEl),this.contentChangeObserver||(this.contentChangeObserver=new MutationObserver(()=>{this.setState({styleGhost:getStyleGhost(this.imgEl)})}),this.contentChangeObserver.observe(e,{attributes:!0,childList:!0,subtree:!0}))):this.contentNotFoundChangeObserver||(this.contentNotFoundChangeObserver=new MutationObserver(this.setAndTrackImg),this.contentNotFoundChangeObserver.observe(e,{childList:!0,subtree:!0})))},this.handleIfZoomChanged=e=>{let{isZoomed:t}=this.props;!e&&t?this.zoom():e&&!t&&this.unzoom()},this.handleImgLoad=()=>{let e=getImgSrc(this.imgEl);if(!e)return;let t=new Image;testImg(this.imgEl)&&(t.sizes=this.imgEl.sizes,t.srcset=this.imgEl.srcset),t.src=e;let setLoaded=()=>{this.setState({loadedImgEl:t,styleGhost:getStyleGhost(this.imgEl)})};t.decode().then(setLoaded).catch(()=>{if(testImgLoaded(t)){setLoaded();return}t.onload=setLoaded})},this.handleZoom=()=>{this.hasImage()&&this.props.onZoomChange?.(!0)},this.handleUnzoom=()=>{this.props.onZoomChange?.(!1)},this.handleBtnUnzoomClick=e=>{e.preventDefault(),e.stopPropagation(),this.handleUnzoom()},this.handleDialogCancel=e=>{e.preventDefault()},this.handleDialogClick=e=>{(e.target===this.refModalContent.current||e.target===this.refModalImg.current)&&(e.stopPropagation(),this.handleUnzoom())},this.handleDialogClose=e=>{e.stopPropagation(),this.handleUnzoom()},this.handleKeyDown=e=>{("Escape"===e.key||27===e.keyCode)&&(e.preventDefault(),e.stopPropagation(),this.handleUnzoom())},this.handleWheel=e=>{e.ctrlKey||(e.stopPropagation(),queueMicrotask(()=>{this.handleUnzoom()}))},this.handleTouchStart=e=>{if(e.touches.length>1){this.isScaling=!0;return}1===e.changedTouches.length&&e.changedTouches[0]&&(this.touchYStart=e.changedTouches[0].screenY)},this.handleTouchMove=e=>{let t=window.visualViewport?.scale??1;if(this.props.canSwipeToUnzoom&&!this.isScaling&&t<=1&&null!=this.touchYStart&&e.changedTouches[0]){this.touchYEnd=e.changedTouches[0].screenY;let t=Math.max(this.touchYStart,this.touchYEnd),i=Math.min(this.touchYStart,this.touchYEnd);Math.abs(t-i)>this.props.swipeToUnzoomThreshold&&(this.touchYStart=void 0,this.touchYEnd=void 0,this.handleUnzoom())}},this.handleTouchEnd=()=>{this.isScaling=!1,this.touchYStart=void 0,this.touchYEnd=void 0},this.handleTouchCancel=()=>{this.isScaling=!1,this.touchYStart=void 0,this.touchYEnd=void 0},this.handleResize=()=>{this.setState({shouldRefresh:!0})},this.hasImage=()=>this.imgEl&&(this.state.loadedImgEl||testSvg(this.imgEl))&&"none"!==window.getComputedStyle(this.imgEl).display,this.zoom=()=>{this.bodyScrollDisable(),this.refDialog.current?.showModal?.(),this.refModalImg.current?.addEventListener?.("transitionend",this.handleImgTransitionEnd),this.setState({modalState:"LOADING"})},this.unzoom=()=>{this.setState({modalState:"UNLOADING"})},this.handleImgTransitionEnd=()=>{clearTimeout(this.timeoutTransitionEnd),"LOADING"===this.state.modalState?this.setState({modalState:"LOADED"}):"UNLOADING"===this.state.modalState&&this.setState({shouldRefresh:!1,modalState:"UNLOADED"})},this.ensureImgTransitionEnd=()=>{if(this.refModalImg.current){let e=window.getComputedStyle(this.refModalImg.current).transitionDuration,t=parseFloat(e);if(t){let i=t*(e.endsWith("ms")?1:1e3)+50;this.timeoutTransitionEnd=setTimeout(this.handleImgTransitionEnd,i)}}},this.bodyScrollDisable=()=>{this.prevBodyAttrs={overflow:document.body.style.overflow,width:document.body.style.width};let e=document.body.clientWidth;document.body.style.overflow="hidden",document.body.style.width=`${e}px`},this.bodyScrollEnable=()=>{document.body.style.width=this.prevBodyAttrs.width,document.body.style.overflow=this.prevBodyAttrs.overflow,this.prevBodyAttrs=h},this.loadZoomImg=()=>{let{props:{zoomImg:e}}=this,t=e?.src;if(t){let i=new Image;i.sizes=e?.sizes??"",i.srcset=e?.srcSet??"",i.src=t;let setLoaded=()=>{this.setState({isZoomImgLoaded:!0})};i.decode().then(setLoaded).catch(()=>{if(testImgLoaded(i)){setLoaded();return}i.onload=setLoaded})}},this.UNSAFE_handleSvg=()=>{let{imgEl:e,refModalImg:t,styleModalImg:i}=this;if(testSvg(e)){let n=e.cloneNode(!0);adjustSvgIDs(n),n.style.width=`${i.width||0}px`,n.style.height=`${i.height||0}px`,n.addEventListener("click",this.handleUnzoom),t.current?.firstChild?.remove?.(),t.current?.appendChild?.(n)}}}render(){let{handleBtnUnzoomClick:e,handleDialogCancel:t,handleDialogClick:i,handleDialogClose:n,handleUnzoom:o,handleZoom:s,imgEl:l,props:{a11yNameButtonUnzoom:d,a11yNameButtonZoom:h,children:c,classDialog:u,IconUnzoom:g,IconZoom:m,isZoomed:f,wrapElement:p,ZoomContent:v,zoomImg:w,zoomMargin:E},refContent:S,refDialog:y,refModalContent:b,refModalImg:L,refWrap:I,state:{id:C,isZoomImgLoaded:z,loadedImgEl:D,modalState:M,shouldRefresh:O,styleGhost:P}}=this,N=`rmiz-modal-${C}`,T=`rmiz-modal-img-${C}`,x=testDiv(l),A=testImg(l),j=testSvg(l),W=getImgAlt(l),_=getImgSrc(l),R=A?l.sizes:void 0,k=A?l.srcset:void 0,U=!!w?.src,G=this.hasImage(),F=W?`${h}: ${W}`:h,$="LOADING"===M||"LOADED"===M,B=G?"found":"not-found",H="UNLOADED"===M||"UNLOADING"===M?"hidden":"visible";this.styleModalImg=G?getStyleModalImg({hasZoomImg:U,imgSrc:_,isSvg:j,isZoomed:f&&$,loadedImgEl:D,offset:E,shouldRefresh:O,targetEl:l}):{};let Z=null;if(G){let t=A||x?r.createElement("img",{alt:W,sizes:R,src:_,srcSet:k,...z&&"LOADED"===M?w:{},"data-rmiz-modal-img":"",height:this.styleModalImg.height||void 0,id:T,ref:L,style:this.styleModalImg,width:this.styleModalImg.width||void 0}):j?r.createElement("div",{"data-rmiz-modal-img":!0,ref:L,style:this.styleModalImg}):null,i=r.createElement("button",{"aria-label":d,"data-rmiz-btn-unzoom":"",onClick:e,type:"button"},r.createElement(g,null));Z=v?r.createElement(v,{buttonUnzoom:i,modalState:M,img:t,onUnzoom:o}):r.createElement(r.Fragment,null,t,i)}return r.createElement(p,{"aria-owns":N,"data-rmiz":"",ref:I},r.createElement(p,{"data-rmiz-content":B,ref:S,style:{visibility:"UNLOADED"===M?"visible":"hidden"}},c),G&&r.createElement(p,{"data-rmiz-ghost":"",style:P},r.createElement("button",{"aria-label":F,"data-rmiz-btn-zoom":"",onClick:s,type:"button"},r.createElement(m,null))),G&&a.createPortal(r.createElement("dialog",{"aria-labelledby":T,"aria-modal":"true",className:u,"data-rmiz-modal":"",id:N,onClick:i,onClose:n,onCancel:t,ref:y,role:"dialog"},r.createElement("div",{"data-rmiz-modal-overlay":H}),r.createElement("div",{"data-rmiz-modal-content":"",ref:b},Z)),this.getDialogContainer()))}componentDidMount(){this.setId(),this.setAndTrackImg(),this.handleImgLoad(),this.UNSAFE_handleSvg()}componentWillUnmount(){"UNLOADED"!==this.state.modalState&&this.bodyScrollEnable(),this.contentChangeObserver?.disconnect?.(),this.contentNotFoundChangeObserver?.disconnect?.(),this.imgElResizeObserver?.disconnect?.(),this.imgEl?.removeEventListener?.("load",this.handleImgLoad),this.imgEl?.removeEventListener?.("click",this.handleZoom),this.refModalImg.current?.removeEventListener?.("transitionend",this.handleImgTransitionEnd),window.removeEventListener("wheel",this.handleWheel),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchend",this.handleTouchEnd),window.removeEventListener("touchcancel",this.handleTouchCancel),window.removeEventListener("resize",this.handleResize),document.removeEventListener("keydown",this.handleKeyDown,!0)}componentDidUpdate(e,t){this.handleModalStateChange(t.modalState),this.UNSAFE_handleSvg(),this.handleIfZoomChanged(e.isZoomed)}};function Uncontrolled(e){let[t,i]=r.useState(!1);return r.createElement(Controlled,{...e,isZoomed:t,onZoomChange:i})}ControlledBase.defaultProps={a11yNameButtonUnzoom:"Minimize image",a11yNameButtonZoom:"Expand image",canSwipeToUnzoom:!0,IconUnzoom:function(){return r.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-unzoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z"}))},IconZoom:function(){return r.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-zoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z"}))},swipeToUnzoomThreshold:10,wrapElement:"div",zoomMargin:0};var c=i(85),u=i.n(c);let g=(0,r.forwardRef)((e,t)=>{let i="object"==typeof e.src?u():"img";return(0,o.jsx)(i,{...e,ref:t})});g.displayName="Image";let m={img:e=>{var t;let i=(0,r.useRef)(null),[n,a]=(0,r.useState)(!1);(0,r.useEffect)(()=>{a(null!==i.current.closest("a"))},[]);let s=(0,o.jsx)(g,{...e,ref:i});return n?s:(0,o.jsx)(Uncontrolled,{zoomMargin:40,zoomImg:{src:"string"==typeof(t=e.src)?t:"default"in t?t.default.src:t.src,alt:e.alt},wrapElement:"span",children:s})}},useMDXComponents=e=>({...m,...(0,n.a)(e)})},9873:function(e,t,i){"use strict";i.d(t,{c:function(){return HOC_MDXWrapper}});var n=i(2676),o=i(2599),r=i(9741),a=i(5271);let s=(0,a.createContext)({}),l=s.Provider;s.displayName="SSG";var d=i(6545);function HOC_MDXWrapper(e,t,i,n){let r=globalThis[o.ud];return r.route=t,r.pageMap=i.pageMap,r.context[t]={Content:e,pageOpts:i,useTOC:n},NextraLayout}function NextraLayout({__nextra_pageMap:e=[],__nextra_dynamic_opts:t,...i}){let a=globalThis[o.ud],{Layout:s,themeConfig:d}=a,{route:h,locale:c}=(0,r.t)(),u=a.context[h];if(!u)throw Error(`No content found for the "${h}" route. Please report it as a bug.`);let{pageOpts:g,useTOC:m,Content:f}=u,p=h.startsWith("/[");if(p)g.pageMap=e;else for(let{route:t,children:i}of e){let e=t.split("/").slice(c?2:1),n=function findFolder(e,[t,...i]){for(let n of e)if("children"in n&&t===n.name)return i.length?findFolder(n.children,i):n}(g.pageMap,e);n.children=i}if(t){let{title:e,frontMatter:i}=t;g={...g,title:e,frontMatter:i}}return(0,n.jsx)(s,{themeConfig:d,pageOpts:g,pageProps:i,children:(0,n.jsx)(l,{value:i,children:(0,n.jsx)(MDXWrapper,{useTOC:m,children:(0,n.jsx)(f,{...i})})})})}function MDXWrapper({children:e,useTOC:t}){let{wrapper:i}=(0,d.a)();return(0,n.jsx)(TOCWrapper,{useTOC:t,wrapper:i,children:e})}function TOCWrapper({children:e,useTOC:t,wrapper:i,...o}){let r=t(o);return i?(0,n.jsx)(i,{toc:r,children:e}):e}}}]);