"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1748],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,c=d["".concat(i,".").concat(m)]||d[m]||f[m]||l;return r?a.createElement(c,s(s({ref:t},u),{},{components:r})):a.createElement(c,s({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<l;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6476:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={},s="Uniffle Shuffle Server Guide",o={unversionedId:"Deploy/server-guide",id:"Deploy/server-guide",title:"Uniffle Shuffle Server Guide",description:"Deploy",source:"@site/docs/03-Deploy/01-server-guide.md",sourceDirName:"03-Deploy",slug:"/Deploy/server-guide",permalink:"/docs/Deploy/server-guide",draft:!1,editUrl:"https://github.com/apache/incubator-uniffle/docs/03-Deploy/01-server-guide.md",tags:[],version:"current",lastUpdatedBy:"zhengchenyu",lastUpdatedAt:1736392112,formattedLastUpdatedAt:"Jan 9, 2025",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Uniffle Coordinator Guide",permalink:"/docs/Deploy/coordinator-guide"},next:{title:"Hardware Provision",permalink:"/docs/Deploy/hardware-provisioning"}},i={},p=[{value:"Deploy",id:"deploy",level:2},{value:"Steps",id:"steps",level:3},{value:"Configuration",id:"configuration",level:2}],u={toc:p},d="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"uniffle-shuffle-server-guide"},"Uniffle Shuffle Server Guide"),(0,n.kt)("h2",{id:"deploy"},"Deploy"),(0,n.kt)("p",null,"This document will introduce how to deploy Uniffle shuffle servers."),(0,n.kt)("h3",{id:"steps"},"Steps"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"unzip package to RSS_HOME"),(0,n.kt)("li",{parentName:"ol"},"update RSS_HOME/bin/rss-env.sh, eg,",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'  JAVA_HOME=<java_home>\n  HADOOP_HOME=<hadoop home>\n  XMX_SIZE="80g"\n'))),(0,n.kt)("li",{parentName:"ol"},"update RSS_HOME/conf/server.conf, eg,",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  rss.rpc.server.port 19999\n  rss.jetty.http.port 19998\n  rss.rpc.executor.size 2000\n  # it should be configed the same as in coordinator\n  rss.storage.type MEMORY_LOCALFILE_HDFS\n  rss.coordinator.quorum <coordinatorIp1>:19999,<coordinatorIp2>:19999\n  # local storage path for shuffle server\n  rss.storage.basePath /data1/rssdata,/data2/rssdata....\n  # it's better to config thread num according to local disk num\n  rss.server.flush.thread.alive 5\n  rss.server.flush.threadPool.size 10\n  rss.server.buffer.capacity 40g\n  rss.server.read.buffer.capacity 20g\n  rss.server.heartbeat.timeout 60000\n  rss.server.heartbeat.interval 10000\n  rss.rpc.message.max.size 1073741824\n  rss.server.preAllocation.expired 120000\n  rss.server.commit.timeout 600000\n  rss.server.app.expired.withoutHeartbeat 120000\n  # note: the default value of rss.server.flush.cold.storage.threshold.size is 64m\n  # there will be no data written to DFS if set it as 100g even rss.storage.type=MEMORY_LOCALFILE_HDFS\n  # please set proper value if DFS is used, eg, 64m, 128m.\n  rss.server.flush.cold.storage.threshold.size 100g\n"))),(0,n.kt)("li",{parentName:"ol"},"start Shuffle Server",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"}," bash RSS_HOME/bin/start-shuffle-server.sh\n")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.coordinator.quorum"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"Coordinator quorum")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.rpc.server.port"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"RPC port for Shuffle server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.jetty.http.port"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"Http port for Shuffle server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.server.buffer.capacity"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"Max memory of buffer manager for shuffle server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.server.memory.shuffle.highWaterMark.percentage"),(0,n.kt)("td",{parentName:"tr",align:null},"75.0"),(0,n.kt)("td",{parentName:"tr",align:null},"Threshold of spill data to storage, percentage of rss.server.buffer.capacity")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.server.memory.shuffle.lowWaterMark.percentage"),(0,n.kt)("td",{parentName:"tr",align:null},"25.0"),(0,n.kt)("td",{parentName:"tr",align:null},"Threshold of keep data in memory, percentage of rss.server.buffer.capacity")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.server.read.buffer.capacity"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"Max size of buffer for reading data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.server.heartbeat.interval"),(0,n.kt)("td",{parentName:"tr",align:null},"10000"),(0,n.kt)("td",{parentName:"tr",align:null},"Heartbeat interval to Coordinator (ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.server.flush.threadPool.size"),(0,n.kt)("td",{parentName:"tr",align:null},"10"),(0,n.kt)("td",{parentName:"tr",align:null},"Thread pool for flush data to file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.server.commit.timeout"),(0,n.kt)("td",{parentName:"tr",align:null},"600000"),(0,n.kt)("td",{parentName:"tr",align:null},"Timeout when commit shuffle data (ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.storage.type"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"Supports MEMORY_LOCALFILE, MEMORY_HDFS, MEMORY_LOCALFILE_HDFS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.server.flush.cold.storage.threshold.size"),(0,n.kt)("td",{parentName:"tr",align:null},"64M"),(0,n.kt)("td",{parentName:"tr",align:null},"The threshold of data size for LOACALFILE and HDFS if MEMORY_LOCALFILE_HDFS is used")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.server.tags"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"The comma-separated list of tags to indicate the shuffle server's attributes. It will be used as the assignment basis for the coordinator")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.server.single.buffer.flush.enabled"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether single buffer flush when size exceeded rss.server.single.buffer.flush.threshold")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.server.single.buffer.flush.threshold"),(0,n.kt)("td",{parentName:"tr",align:null},"64M"),(0,n.kt)("td",{parentName:"tr",align:null},"The threshold of single shuffle buffer flush")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.server.disk.capacity"),(0,n.kt)("td",{parentName:"tr",align:null},"-1"),(0,n.kt)("td",{parentName:"tr",align:null},"Disk capacity that shuffle server can use. If it's negative, it will use the default disk whole space")))))}f.isMDXComponent=!0}}]);