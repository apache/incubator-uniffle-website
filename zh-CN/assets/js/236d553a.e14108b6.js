"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6823],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,h=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4472:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={},a="Hardware Provision",l={unversionedId:"Deploy/hardware-provisioning",id:"Deploy/hardware-provisioning",title:"Hardware Provision",description:"A common question received by Uniffle users is how to configure hardware for it. While the right hardware will depend on the situation, we make the following recommendations.",source:"@site/docs/03-Deploy/02-hardware-provisioning.md",sourceDirName:"03-Deploy",slug:"/Deploy/hardware-provisioning",permalink:"/zh-CN/docs/Deploy/hardware-provisioning",draft:!1,editUrl:"https://github.com/apache/incubator-uniffle/docs/03-Deploy/02-hardware-provisioning.md",tags:[],version:"current",lastUpdatedBy:"zhengchenyu",lastUpdatedAt:1736392112,formattedLastUpdatedAt:"2025\u5e741\u67089\u65e5",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Uniffle Shuffle Server Guide",permalink:"/zh-CN/docs/Deploy/server-guide"},next:{title:"Metrics",permalink:"/zh-CN/docs/Deploy/metrics"}},s={},c=[{value:"LOCAL DISKS",id:"local-disks",level:2},{value:"MEMORY",id:"memory",level:2},{value:"NETWORK",id:"network",level:2},{value:"CPU CORES",id:"cpu-cores",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hardware-provision"},"Hardware Provision"),(0,o.kt)("p",null,"A common question received by Uniffle users is how to configure hardware for it. While the right hardware will depend on the situation, we make the following recommendations."),(0,o.kt)("h2",{id:"local-disks"},"LOCAL DISKS"),(0,o.kt)("p",null,"HDD or SSD is ok for Uniffle. We need to notice that we should provide enough quantity of disks for Uniffle.\nUsually HDD provide 100MB/s write speed we should guarantee that the data can be flushed to disks.\nIf our cluster applications write 1 GB/s in the busiest time, we should provide 10 HDD disks."),(0,o.kt)("h2",{id:"memory"},"MEMORY"),(0,o.kt)("p",null,"We use the memory to reduce the random IO of write stage. If we have too many partitions, we will flush to small data to the disk.\nIt will influence the performance, we should guarantee that every partition's memory is bigger than 3MB.\nFor example, if we have 1k partitions in our busiest time, we should provide 3 GB memory for them."),(0,o.kt)("h2",{id:"network"},"NETWORK"),(0,o.kt)("p",null,"In our experience, Uniffle are network-bound. Using a 10 Gigabit or higher network is the best way to make these applications faster."),(0,o.kt)("h2",{id:"cpu-cores"},"CPU CORES"),(0,o.kt)("p",null,"Uniffle don't depend on the CPU too much."))}d.isMDXComponent=!0}}]);