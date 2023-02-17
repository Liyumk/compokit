"use strict";var e,t=require("react"),r={};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
e={get exports(){return r},set exports(e){r=e}},function(){var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var s=r.apply(null,n);s&&e.push(s)}}else if("object"===l){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)t.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}();var a=r;const n={avatar:{base:"flex justify-center items-center bg-gray-400",wrapper:"w-fit",default:"w-8 h-8",appearance:{circle:"rounded-full",square:"rounded-md"},disabled:"opacity-50",presence:{base:"rounded-full absolute",online:{base:"bg-green-500 border-2 border-white",xsmall:"",small:"w-3 h-3 bottom-0 -right-1",medium:"w-3.5 h-3. bottom-0 -right-1",large:"w-4 h-4 bottom-0 -right-1",xlarge:"w-5 h-5 bottom-2 right-0",xxlarge:""},busy:{base:"flex justify-center items-center bg-red-500",innerBase:"w-1 h-2 bg-white -rotate-45",xsmall:"",small:"w-3 h-3  bottom-0 -right-1",medium:"w-3.5 h-3.5 bottom-0 -right-1",large:"w-4 h-4 bottom-0 -right-1",xlarge:"w-5 h-5 bottom-2 right-0",xxlarge:""},focus:{base:"flex justify-center items-center bg-white border-4 border-gray-500",innerBase:" w-1.5 h-1.5 bg-gray-500 rounded-full",xsmall:"",small:"w-3 h-3bottom-0 -right-1",medium:"w-3.5 h-3.5 bottom-0 -right-1",large:"w-4 h-4 bottom-0 -right-1",xlarge:"w-5 h-5 bottom-2 right-0",xxlarge:""},offline:{base:"flex justify-center items-center bg-gray-500 border-2 border-white",innerBase:" w-1.5 h-1.5 bg-gray-200 rounded-full",xsmall:"",small:"w-3 h-3 bottom-0 -right-1",medium:"w-3.5 h-3.5 bottom-0 -right-1",large:"w-4 h-4 bottom-0 -right-1",xlarge:"w-5 h-5 bottom-2 right-0",xxlarge:""}},sizes:{xsmall:"w-4 h-4",small:"w-6 h-6",medium:"w-8 h-8",large:"w-10 h-10",xlarge:"w-24 h-24",xxlarge:"w-32 h-32"},status:{base:"w-4 h-4 absolute top-0 -right-2 flex justify-center items-center rounded-full border border-white",xlarge:"top-3 right-1",large:"top-1 right-0",approved:"bg-green-500",declined:"bg-red-500",locked:"bg-gray-500"}},badge:{base:"w-fit px-1.5 rounded-xl text-xs ",appearance:{added:"bg-green-100 text-green-600",default:"bg-blue-500 text-white",important:"bg-red-500 text-white",primary:"bg-blue-500 text-white",primaryInverted:"bg-white text-blue-400",removed:"bg-red-100 text-red-600"}},banner:{base:"flex justify-start items-center gap-x-2 rounded-sm p-3 relative border-none ",appearance:{announcement:"bg-slate-600 text-white",error:"bg-red-600 text-white",warning:"bg-yellow-500 text-gray-900"}},button:{base:"relative h-9 px-2.5 rounded font-medium flex items-center justify-between focus:outline-none",appearance:{default:"bg-[#091E420F]/[0.04] text-[#42526E] hover:bg-[#091E420F]/[0.08] focus:ring-2 focus:ring-[#091E420F]/[0.3]",danger:"bg-red-500 text-white hover:bg-red-700 border border-transparent focus:ring-2 focus:ring-red-300",link:"bg-transparent text-blue-600 hover:underline hover:text-blue-500",primary:"bg-blue-600 text-white hover:bg-blue-500 border-transparent focus:ring-2 focus:ring-blue-300",subtle:"bg-transparent text-[#42526E] hover:bg-[#091E420F]/[0.05] border-transparent focus:ring-4 focus:ring-[#42526E]/[0.5]",subtleLink:"bg-transparent text-[#42526E] hover:underline",warning:"bg-yellow-500 text-gray-900 hover:bg-yellow-600 border-transparent focus:ring-2 focus:ring-yellow-300"},disabled:"cursor-not-allowed opacity-50",selected:{default:"bg-[#091E420F]/[0.2] text-[#42526E]",danger:"bg-red-900 text-white ",link:"bg-transparent text-blue-600 underline",primary:"bg-blue-800 text-white",subtle:"bg-blue-100 text-blue-300",subtleLink:"bg-transparent text-[#42526E]/[0.5] underline",warning:"bg-yellow-700/[0.7]"},fitContainer:"w-full",icon:{before:"mr-1",after:"ml-1"},overlay:"flex items-center justify-center absolute top-0 left-0 w-full h-full bg-gray-200 rounded text-slate-600",spacing:{compact:"h-7",default:"h-9",none:"h-auto px-0"},loading:"w-5 h-5 rounded-full animate-spin border-2 border-solid border-blue-500 border-t-transparent"},lozenge:{base:"px-1.5 rounded-sm w-fit leading-4 uppercase overflow-hidden",appearance:{default:"text-slate-700 bg-slate-100 font-medium",inprogress:"text-blue-700 bg-blue-100 font-medium",moved:"text-yellow-700 bg-yellow-100 font-medium",new:"text-indigo-700 bg-indigo-100 font-medium",removed:"text-red-700 bg-red-100 font-medium",success:"text-green-700 bg-green-100 font-medium"},isBoldAppearance:{default:"text-white bg-slate-700 font-bold",inprogress:"text-white bg-blue-700 font-bold",moved:"text-white bg-yellow-700 font-bold",new:"text-white bg-indigo-700 font-bold",removed:"text-white bg-red-700 font-bold",success:"text-white bg-green-700 font-bold"}},pageHeader:{base:"",titleAndAction:"flex gap-x-2 items-center",title:{base:"text-2xl flex-1 mt-1",truncate:"truncate"},action:"flex gap-x-2",bottomBar:"flex gap-x-2 mt-2"},progressBar:{root:{outer:"w-full h-1.5 rounded-lg relative overflow-hidden",filler:"h-1.5 rounded-lg",appearance:{default:{inner:"bg-blue-900",outer:"bg-gray-100"},inverse:{inner:"bg-white",outer:"bg-blue-900"},success:{inner:"bg-green-500",outer:"bg-green-500"}}}},progressIndicator:{root:{base:"flex w-fit justify-center items-center",spacing:{comfortable:"gap-x-2",cozy:"gap-x-1.5",compact:"gap-x-1"}},indicate:{base:"rounded-xl",pointer:"cursor-pointer",appearance:{default:{selected:"bg-blue-900",others:"bg-blue-200"},primary:{selected:"bg-blue-700",others:"bg-blue-200"},help:{selected:"bg-purple-900",others:"bg-purple-200"},inverted:{selected:"bg-white",others:"bg-gray-200"}},size:{small:"w-1 h-1",default:"w-2 h-2",large:"w-3 h-3"}}},sectionMessage:{base:"flex p-4 gap-x-4 rounded",appearance:{information:"bg-blue-200",discovery:"bg-indigo-200",error:"bg-red-200",success:"bg-green-200",warning:"bg-yellow-100"},left:"",right:"flex flex-col gap-y-2 justify-between flex-1",rightTop:"",rightBottom:"mt-2",title:"text-xl font-semibold"}},l=()=>({theme:n});!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===r&&a.firstChild?a.insertBefore(n,a.firstChild):a.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}(".indeterminate{\r\n  width: 50%;\r\n  animation-duration: 1s;\r\n  animation-iteration-count: infinite;\r\n  animation-name: indeterminate-progress-bar;\r\n  position: absolute;\r\n  bottom: 0;\r\n  top: 0;\r\n}\r\n\r\n@keyframes indeterminate-progress-bar{\r\n  from {\r\n    left: -50%;\r\n  }\r\n  to {\r\n    left: 100%;\r\n  }\r\n}");var s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=t.createContext&&t.createContext(s),o=function(){return o=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)},c=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};function d(e){return e&&e.map((function(e,r){return t.createElement(e.tag,o({key:r},e.attr),d(e.child))}))}function g(e){return function(r){return t.createElement(u,o({attr:o({},e.attr)},r),d(e.child))}}function u(e){var r=function(r){var a,n=e.attr,l=e.size,s=e.title,i=c(e,["attr","size","title"]),d=l||r.size||"1em";return r.className&&(a=r.className),e.className&&(a=(a?a+" ":"")+e.className),t.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,i,{className:a,style:o(o({color:e.color||r.color},r.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&t.createElement("title",null,s),e.children)};return void 0!==i?t.createElement(i.Consumer,null,(function(e){return r(e)})):r(s)}function m(e){return g({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 10h-1v-2c0-2.205-1.794-4-4-4s-4 1.795-4 4v2h-1c-1.103 0-2 .896-2 2v7c0 1.104.897 2 2 2h10c1.103 0 2-.896 2-2v-7c0-1.104-.897-2-2-2zm-5 8.299c-.719 0-1.3-.58-1.3-1.299s.581-1.301 1.3-1.301 1.3.582 1.3 1.301-.581 1.299-1.3 1.299zm2-7.299h-4v-3c0-1.104.897-2 2-2s2 .896 2 2v3z"}}]})(e)}function b(e){return g({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"}}]})(e)}function p(e){return g({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"}}]})(e)}function h(e){return g({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 0 0-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z"}}]})(e)}function f(e){return g({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zM480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416zm32 352a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"}}]})(e)}function x(e){return g({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]})(e)}function v(e){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z"}},{tag:"path",attr:{d:"M11 7h2v6h-2zM11 15h2v2h-2z"}}]})(e)}exports.Avatar=({appearance:e="circle",label:r,borderColour:n,children:s,href:i,isDisabled:o,name:c,presence:d,src:g,size:u="xlarge",status:p,tabIndex:h,target:f="_blank",onClick:v,testId:w,stackIndex:y,analyticsContext:E})=>{const z=l().theme.avatar,N=t.createElement("svg",{width:"128",height:"128",viewBox:"0 0 24 24",role:"presentation"},t.createElement("g",{fill:"white","fill-rule":"evenodd"},t.createElement("path",{d:"M6 14c0-1.105.902-2 2.009-2h7.982c1.11 0 2.009.894 2.009 2.006v4.44c0 3.405-12 3.405-12 0V14z"}),t.createElement("circle",{cx:"12",cy:"7",r:"4"}))),B=t.createElement("img",{src:g,alt:c,style:{height:"100%",width:"100%",objectFit:"cover",borderRadius:"circle"!==e&&z.appearance[e]?"4%":"50%"}});return t.createElement("div",{"data-testid":w,tabIndex:h,className:"relative w-fit"},s||t.createElement("div",{"aria-label":r,className:a(z.base,z.appearance[e]?z.appearance[e]:z.appearance.circle,z.sizes[u]?z.sizes[u]:z.default,o&&z.disabled),onClick:v,style:{border:n&&n.length>0?`3px solid ${n}`:""}},g&&i?t.createElement("a",{href:i,target:f,style:{height:"100%",width:"100%"}},B):g?t.createElement(t.Fragment,null,B):N),"xxlarge"!==u&&"xsmall"!==u&&"small"!==u&&(p?t.createElement("div",{className:a(z.status.base,"xlarge"===u&&z.status.xlarge,"large"===u&&z.status.large,z.status[p])},t.createElement("div",null,"locked"===p&&t.createElement(m,{size:12}),"approved"===p&&t.createElement(b,{size:12,color:"white"}),"declined"===p&&t.createElement(x,{size:12,color:"white"}))):t.createElement("div",{className:a(d&&z.presence[d][u],d&&z.presence[d].base,z.presence.base)},t.createElement("div",{className:a("focus"===d&&z.presence.focus.innerBase,"busy"===d&&z.presence.busy.innerBase,"offline"===d&&z.presence.offline.innerBase)}))))},exports.Badge=({appearance:e="default",children:r,max:n=99,style:s,testId:i})=>{const o=l().theme.badge;return t.createElement("div",{className:a(o.base,o.appearance[e]),style:s,"data-testid":i},"number"==typeof r&&n&&n>r?(console.log("inside maxappend true condition"),`${r} +`):r)},exports.Banner=({appearance:e="warning",children:r,icon:n,testId:s})=>{const i=l().theme.banner;return t.createElement("div",{"data-testid":s,className:a(i.base,i.appearance[e])},n,t.Children.map(r,(e=>(e=>{const r={className:a(e.props.className,"truncate")};return t.cloneElement(e,r)})(e))))},exports.Button=({appearance:e="default",autoFocus:r,className:n,overlay:s,href:i,iconAfter:o,iconBefore:c,isDisabled:d,isSelected:g,onBlur:u,onClick:m,onFocus:b,spacing:p="default",target:h,type:f,shouldFitContainer:x,children:v,testId:w,isLoading:y,component:E,interactionName:z,analyticsContext:N})=>{const B=l().theme.button,[C,j]=t.useState(!1),I=t.useRef();return t.createElement("button",{ref:I.current,"data-testId":w,disabled:d,type:f,autoFocus:r,className:a(B.base,!C&&!g&&B.appearance[e],(C||g)&&B.selected[e],x&&B.fitContainer,B.spacing[p],(d||y)&&B.disabled,n),onMouseDown:()=>{j(!0)},onMouseUp:()=>{j(!1)},onBlur:u,onClick:m,onFocus:b},c&&t.createElement("div",{className:B.icon.before},c),"subtleLink"===e||"link"===e?t.createElement("a",{href:i,target:h},v):v,y&&t.createElement("div",{className:B.overlay},t.createElement("div",{className:B.loading})),o&&t.createElement("div",{className:B.icon.after},o),s&&t.createElement("div",{className:B.overlay},s))},exports.Image=e=>{const{isDark:r,srcDark:a,src:n}=e;return t.createElement("img",Object.assign({},e,{src:r&&a?a:n}))},exports.Lozenge=({appearance:e="default",children:r,isBold:n,maxWidth:s,style:i,testId:o})=>{const c=l().theme.lozenge,d=Object.assign({fontSize:"11px",maxWidth:s},i);return t.createElement("div",{"data-testid":o,style:d,className:a(c.base,!n&&c.appearance[e],n&&c.isBoldAppearance[e])},r)},exports.PageHeader=({actions:e,bottomBar:r,breadCrumbs:n,children:s,disableTitleStyle:i,truncateTitle:o,innerRef:c,id:d})=>{const g=l().theme.pageHeader;return t.createElement("div",{className:a(g.base)},t.createElement("div",null,n),t.createElement("div",{className:a(g.titleAndAction)},t.createElement("h1",{className:a(!i&&g.title.base,o&&g.title.truncate),id:d,ref:c},s),t.createElement("div",{className:a(g.action)},e)),t.createElement("div",{className:a(g.bottomBar)},r))},exports.ProgressBar=({appearance:e="default",value:r,ariaLabel:n,testId:s,isIndeterminate:i})=>{const o=l().theme.progressBar,c="success"===e&&!i,d=r&&!i;return t.createElement(t.Fragment,null,t.createElement("div",{className:a(o.root.outer,o.root.appearance[e].outer),"aria-label":n,"data-testId":s},t.createElement("div",{className:a(o.root.filler,o.root.appearance[e].inner,i&&"indeterminate"),style:{width:(c?100:d?100*r:i?50:0)+"%"}})))},exports.ProgressIndicator=({selectedIndex:e=1,values:r,appearance:n="default",ariaControls:s,ariaLabel:i,onSelect:o,size:c="default",spacing:d="cozy",testId:g})=>{const u=l().theme.progressIndicator;return t.createElement("div",{className:a(u.root.base,u.root.spacing[d]),"data-testId":g},r&&r.map(((r,l)=>t.createElement("div",{"aria-controls":s&&s+l,"aria-aria-label":i&&i+l,defaultValue:r,onClick:()=>{o&&o()},className:a(u.indicate.base,e===l+1?u.indicate.appearance[n].selected:u.indicate.appearance[n].others,u.indicate.size[c],o&&u.indicate.pointer)}))))},exports.SectionMessage=({appearance:e="information",children:r,title:n,actions:s,icon:i,testId:o})=>{const c=l().theme.sectionMessage;return t.createElement("div",{"data-testid":o,className:a(c.base,c.appearance[e])},t.createElement("div",{className:a(c.left)},i||(()=>{switch(e){case"information":return t.createElement(p,{size:26,className:"text-blue-600"});case"success":return t.createElement("div",null,t.createElement(b,{size:26}));case"discovery":return t.createElement(h,{size:26,className:"text-indigo-500"});case"error":return t.createElement(v,{size:26,className:"text-red-500"});case"warning":return t.createElement(f,{size:26,className:"text-orange-500"});default:return}})()),t.createElement("div",{className:a(c.right)},t.createElement("div",{className:c.title},n),r,t.createElement("div",{className:a("w-fit flex gap-x-2")},s)))};
//# sourceMappingURL=index.js.map
