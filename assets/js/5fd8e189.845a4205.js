"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4071],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"Release Notes 0.6.1",sidebar_position:998},l="Uniffle Release 0.6.1",o={unversionedId:"release-notes-0.6.1",id:"release-notes-0.6.1",title:"Release Notes 0.6.1",description:"Highlight",source:"@site/download/release-notes-0.6.1.md",sourceDirName:".",slug:"/release-notes-0.6.1",permalink:"/download/release-notes-0.6.1",draft:!1,tags:[],version:"current",sidebarPosition:998,frontMatter:{title:"Release Notes 0.6.1",sidebar_position:998},sidebar:"tutorialSidebar",previous:{title:"Release Notes 0.7.0",permalink:"/download/release-notes-0.7.0"},next:{title:"Release Notes 0.6.0",permalink:"/download/release-notes-0.6.0"}},s={},c=[{value:"Highlight",id:"highlight",level:2},{value:"ChangeLog",id:"changelog",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uniffle-release-061"},"Uniffle Release 0.6.1"),(0,a.kt)("h2",{id:"highlight"},"Highlight"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Major bug fixes"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Partition cannot be accessed in MapReduce when the reduce task number exceeds 1024."),(0,a.kt)("li",{parentName:"ul"},"Get shuffle result failure caused by concurrent calls to registerShuffle."),(0,a.kt)("li",{parentName:"ul"},"Inconsistent blocks caused by missing length in RssUtils#transIndexDataToSegments."),(0,a.kt)("li",{parentName:"ul"},"Handle NPE in WriteBufferManager#addRecord in the same way as Spark."),(0,a.kt)("li",{parentName:"ul"},"AbstractStorage#containsWriteHandler is checking the wrong Map."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"indexWriter")," isn't closed if exception is thrown when closing dataWriter."),(0,a.kt)("li",{parentName:"ul"},"Incorrect dependency of protobuf-java at compile time."),(0,a.kt)("li",{parentName:"ul"},"Potential memory leak when encountering disk unhealthy."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Minor bug fixes"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Potenial missing reads of exclude nodes."),(0,a.kt)("li",{parentName:"ul"},"Incorrect contributing link in pull-request template."),(0,a.kt)("li",{parentName:"ul"},"Incorrect spark metrics.")))),(0,a.kt)("h2",{id:"changelog"},"ChangeLog"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[ISSUE-257]"," RssMRUtils#getBlockId change the partitionId of int type to long (#266)"),(0,a.kt)("li",{parentName:"ul"},"[ISSUE-273][BUG]"," Get shuffle result failed caused by concurrent calls to registerShuffle (#274)"),(0,a.kt)("li",{parentName:"ul"},"Fix potenial missing reads of exclude nodes (#269)"),(0,a.kt)("li",{parentName:"ul"},"[ISSUE-239][BUG]"," RssUtils#transIndexDataToSegments should consider the length of the data file (#275)"),(0,a.kt)("li",{parentName:"ul"},"Fix NPE in WriteBufferManager.addRecord (#296)"),(0,a.kt)("li",{parentName:"ul"},"Fix AbstractStorage#containsWriteHandler (#281)"),(0,a.kt)("li",{parentName:"ul"},"Correct the pull-request contributing link in template (#314)"),(0,a.kt)("li",{parentName:"ul"},"[BUG]"," Fix incorrect spark metrics (#324)"),(0,a.kt)("li",{parentName:"ul"},"[ISSUE-364]"," Fix ",(0,a.kt)("inlineCode",{parentName:"li"},"indexWriter")," don't close if exception thrown when close dataWriter (#349)"),(0,a.kt)("li",{parentName:"ul"},"[ISSUE-228]"," Fix the problem of protobuf-java incorrect dependency at compile time (#362)"),(0,a.kt)("li",{parentName:"ul"},"Bump project version to 0.6.1"),(0,a.kt)("li",{parentName:"ul"},"[BUG]"," Potenial memory leak when encountering disk unhealthy (#370)")))}d.isMDXComponent=!0}}]);