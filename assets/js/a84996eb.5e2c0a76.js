"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3510],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(a),c=n,k=u["".concat(o,".").concat(c)]||u[c]||m[c]||l;return a?r.createElement(k,i(i({ref:t},d),{},{components:a})):r.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4916:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const l={},i="Uniffle Shuffle Client Guide",p={unversionedId:"client-guide",id:"client-guide",title:"Uniffle Shuffle Client Guide",description:"Uniffle is designed as a unified shuffle engine for multiple computing frameworks, including Apache Spark and Apache Hadoop.",source:"@site/docs/02-client-guide.md",sourceDirName:".",slug:"/client-guide",permalink:"/docs/client-guide",draft:!1,editUrl:"https://github.com/apache/incubator-uniffle/docs/02-client-guide.md",tags:[],version:"current",lastUpdatedBy:"zhengchenyu",lastUpdatedAt:1736392112,formattedLastUpdatedAt:"Jan 9, 2025",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/intro"},next:{title:"Uniffle Coordinator Guide",permalink:"/docs/Deploy/coordinator-guide"}},o={},s=[{value:"Deploy",id:"deploy",level:2},{value:"Deploy Spark Client Plugin",id:"deploy-spark-client-plugin",level:3},{value:"Support Spark Dynamic Allocation",id:"support-spark-dynamic-allocation",level:3},{value:"Deploy MapReduce Client Plugin",id:"deploy-mapreduce-client-plugin",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Common Setting",id:"common-setting",level:3},{value:"Adaptive Remote Shuffle Enabling",id:"adaptive-remote-shuffle-enabling",level:3},{value:"Client Quorum Setting",id:"client-quorum-setting",level:3},{value:"Spark Specialized Setting",id:"spark-specialized-setting",level:3},{value:"MapReduce Specialized Setting",id:"mapreduce-specialized-setting",level:3},{value:"Remote Spill (Experimental)",id:"remote-spill-experimental",level:3}],d={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"uniffle-shuffle-client-guide"},"Uniffle Shuffle Client Guide"),(0,n.kt)("p",null,"Uniffle is designed as a unified shuffle engine for multiple computing frameworks, including Apache Spark and Apache Hadoop.\nUniffle has provided pluggable client plugins to enable remote shuffle in Spark and MapReduce."),(0,n.kt)("h2",{id:"deploy"},"Deploy"),(0,n.kt)("p",null,"This document will introduce how to deploy Uniffle client plugins with Spark and MapReduce."),(0,n.kt)("h3",{id:"deploy-spark-client-plugin"},"Deploy Spark Client Plugin"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add client jar to Spark classpath, eg, SPARK_HOME/jars/"),(0,n.kt)("p",{parentName:"li"},"The jar for Spark2 is located in <RSS_HOME>/jars/client/spark2/rss-client-XXXXX-shaded.jar"),(0,n.kt)("p",{parentName:"li"},"The jar for Spark3 is located in <RSS_HOME>/jars/client/spark3/rss-client-XXXXX-shaded.jar")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Update Spark conf to enable Uniffle, eg,"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"spark.shuffle.manager org.apache.spark.shuffle.RssShuffleManager\nspark.rss.coordinator.quorum <coordinatorIp1>:19999,<coordinatorIp2>:19999\n# Note: For Spark2, spark.sql.adaptive.enabled should be false because Spark2 doesn't support AQE.\n")))),(0,n.kt)("h3",{id:"support-spark-dynamic-allocation"},"Support Spark Dynamic Allocation"),(0,n.kt)("p",null,"To support spark dynamic allocation with Uniffle, spark code should be updated.\nThere are 7 patches for spark (2.3.4/2.4.6/3.0.1/3.1.2/3.2.1/3.3.1/3.4.1) in patch/spark folder for reference."),(0,n.kt)("p",null,"After apply the patch and rebuild spark, add following configuration in spark conf to enable dynamic allocation:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"spark.shuffle.service.enabled false\nspark.dynamicAllocation.enabled true\n")),(0,n.kt)("p",null,"For spark3.5 or above just add one more configuration:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"spark.shuffle.sort.io.plugin.class org.apache.spark.shuffle.RssShuffleDataIo\n")),(0,n.kt)("h3",{id:"deploy-mapreduce-client-plugin"},"Deploy MapReduce Client Plugin"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Add client jar to the classpath of each NodeManager, e.g., <HADOOP_HOME>/share/hadoop/mapreduce/")),(0,n.kt)("p",null,"The jar for MapReduce is located in <RSS_HOME>/jars/client/mr/rss-client-mr-XXXXX-shaded.jar"),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Update MapReduce conf to enable Uniffle, eg,"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"-Dmapreduce.rss.coordinator.quorum=<coordinatorIp1>:19999,<coordinatorIp2>:19999\n-Dyarn.app.mapreduce.am.command-opts=org.apache.hadoop.mapreduce.v2.app.RssMRAppMaster\n-Dmapreduce.job.map.output.collector.class=org.apache.hadoop.mapred.RssMapOutputCollector\n-Dmapreduce.job.reduce.shuffle.consumer.plugin.class=org.apache.hadoop.mapreduce.task.reduce.RssShuffle\n")),(0,n.kt)("p",{parentName:"li"},"Note that the RssMRAppMaster will automatically disable slow start (i.e., ",(0,n.kt)("inlineCode",{parentName:"p"},"mapreduce.job.reduce.slowstart.completedmaps=1"),")\nand job recovery (i.e., ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn.app.mapreduce.am.job.recovery.enable=false"),")"))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"The important configuration of client is listed as following."),(0,n.kt)("h3",{id:"common-setting"},"Common Setting"),(0,n.kt)("p",null,"These configurations are shared by all types of clients."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"<client_type>.rss.coordinator.quorum"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"Coordinator quorum")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"<client_type>.rss.writer.buffer.size"),(0,n.kt)("td",{parentName:"tr",align:null},"3m"),(0,n.kt)("td",{parentName:"tr",align:null},"Buffer size for single partition data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"<client_type>.rss.storage.type"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"Supports MEMORY_LOCALFILE, MEMORY_HDFS, MEMORY_LOCALFILE_HDFS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"<client_type>.rss.client.read.buffer.size"),(0,n.kt)("td",{parentName:"tr",align:null},"14m"),(0,n.kt)("td",{parentName:"tr",align:null},"The max data size read from storage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"<client_type>.rss.client.send.threadPool.size"),(0,n.kt)("td",{parentName:"tr",align:null},"5"),(0,n.kt)("td",{parentName:"tr",align:null},"The thread size for send shuffle data to shuffle server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"<client_type>.rss.client.assignment.tags"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"The comma-separated list of tags for deciding assignment shuffle servers. Notice that the SHUFFLE_SERVER_VERSION will always as the assignment tag whether this conf is set or not")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"<client_type>.rss.client.data.commit.pool.size"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of assigned shuffle servers"),(0,n.kt)("td",{parentName:"tr",align:null},"The thread size for sending commit to shuffle servers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"<client_type>.rss.client.assignment.shuffle.nodes.max"),(0,n.kt)("td",{parentName:"tr",align:null},"-1"),(0,n.kt)("td",{parentName:"tr",align:null},'The number of required assignment shuffle servers. If it is less than 0 or equals to 0 or greater than the coordinator\'s config of "rss.coordinator.shuffle.nodes.max", it will use the size of "rss.coordinator.shuffle.nodes.max" default')))),(0,n.kt)("p",null,"Notice:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"<client_type>")," should be ",(0,n.kt)("inlineCode",{parentName:"p"},"spark")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"mapreduce"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"<client_type>.rss.coordinator.quorum")," is compulsory, and other configurations are optional when coordinator dynamic configuration is enabled."))),(0,n.kt)("h3",{id:"adaptive-remote-shuffle-enabling"},"Adaptive Remote Shuffle Enabling"),(0,n.kt)("p",null,"To select build-in shuffle or remote shuffle in a smart manner, Uniffle support adaptive enabling.\nThe client should use ",(0,n.kt)("inlineCode",{parentName:"p"},"DelegationRssShuffleManager")," and provide its unique <access_id> so that the coordinator could distinguish whether it should enable remote shuffle."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"spark.shuffle.manager org.apache.spark.shuffle.DelegationRssShuffleManager\nspark.rss.access.id=<access_id> \n")),(0,n.kt)("p",null,"Notice:\nCurrently, this feature only supports Spark."),(0,n.kt)("p",null,"Other configuration:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"spark.rss.access.timeout.ms"),(0,n.kt)("td",{parentName:"tr",align:null},"10000"),(0,n.kt)("td",{parentName:"tr",align:null},"The timeout to access Uniffle coordinator")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"spark.rss.client.access.retry.interval.ms"),(0,n.kt)("td",{parentName:"tr",align:null},"20000"),(0,n.kt)("td",{parentName:"tr",align:null},"The interval between retries fallback to SortShuffleManager")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"spark.rss.client.access.retry.times"),(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of retries fallback to SortShuffleManager")))),(0,n.kt)("h3",{id:"client-quorum-setting"},"Client Quorum Setting"),(0,n.kt)("p",null,"Uniffle supports client-side quorum protocol to tolerant shuffle server crash.\nThis feature is client-side behaviour, in which shuffle writer sends each block to multiple servers, and shuffle readers could fetch block data from one of server.\nSince sending multiple replicas of blocks can reduce the shuffle performance and resource consumption, we designed it as an optional feature."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"<client_type>.rss.data.replica"),(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"The max server number that each block can be send by client in quorum protocol")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"<client_type>.rss.data.replica.write"),(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"The min server number that each block should be send by client successfully")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"<client_type>.rss.data.replica.read"),(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"The min server number that metadata should be fetched by client successfully")))),(0,n.kt)("p",null,"Notice:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"spark.rss.data.replica.write")," + ",(0,n.kt)("inlineCode",{parentName:"li"},"spark.rss.data.replica.read")," > ",(0,n.kt)("inlineCode",{parentName:"li"},"spark.rss.data.replica"))),(0,n.kt)("p",null,"Recommended examples:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Performance First (default)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"spark.rss.data.replica 1\nspark.rss.data.replica.write 1\nspark.rss.data.replica.read 1\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Fault-tolerant First")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"spark.rss.data.replica 3\nspark.rss.data.replica.write 2\nspark.rss.data.replica.read 2\n")),(0,n.kt)("h3",{id:"spark-specialized-setting"},"Spark Specialized Setting"),(0,n.kt)("p",null,"The important configuration is listed as following."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"spark.rss.writer.buffer.spill.size"),(0,n.kt)("td",{parentName:"tr",align:null},"128m"),(0,n.kt)("td",{parentName:"tr",align:null},"Buffer size for total partition data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"spark.rss.client.send.size.limit"),(0,n.kt)("td",{parentName:"tr",align:null},"16m"),(0,n.kt)("td",{parentName:"tr",align:null},"The max data size sent to shuffle server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"spark.rss.client.unregister.thread.pool.size"),(0,n.kt)("td",{parentName:"tr",align:null},"10"),(0,n.kt)("td",{parentName:"tr",align:null},"The max size of thread pool of unregistering")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"spark.rss.client.unregister.request.timeout.sec"),(0,n.kt)("td",{parentName:"tr",align:null},"10"),(0,n.kt)("td",{parentName:"tr",align:null},"The max timeout sec when doing unregister to remote shuffle-servers")))),(0,n.kt)("h3",{id:"mapreduce-specialized-setting"},"MapReduce Specialized Setting"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mapreduce.rss.client.max.buffer.size"),(0,n.kt)("td",{parentName:"tr",align:null},"3k"),(0,n.kt)("td",{parentName:"tr",align:null},"The max buffer size in map side")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mapreduce.rss.client.batch.trigger.num"),(0,n.kt)("td",{parentName:"tr",align:null},"50"),(0,n.kt)("td",{parentName:"tr",align:null},"The max batch of buffers to send data in map side")))),(0,n.kt)("h3",{id:"remote-spill-experimental"},"Remote Spill (Experimental)"),(0,n.kt)("p",null,"In cloud environment, VM may have very limited disk space and performance.\nThis experimental feature allows reduce tasks to spill data to remote storage (e.g., hdfs)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mapreduce.rss.reduce.remote.spill.enable"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to use remote spill")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mapreduce.rss.reduce.remote.spill.attempt.inc"),(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"Increase reduce attempts as hdfs is easier to crash than disk")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mapreduce.rss.reduce.remote.spill.replication"),(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"The replication number to spill data to hdfs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mapreduce.rss.reduce.remote.spill.retries"),(0,n.kt)("td",{parentName:"tr",align:null},"5"),(0,n.kt)("td",{parentName:"tr",align:null},"The retry number to spill data to hdfs")))),(0,n.kt)("p",null,"Notice: this feature requires the MEMORY_LOCAL_HDFS mode."))}m.isMDXComponent=!0}}]);