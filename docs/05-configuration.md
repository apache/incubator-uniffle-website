# Uniffle Configuration

## Common Settings

>Common settings are common settings both used by coordinators and shuffle servers

|Property Name|Default|	Description|
|---|---|---|
|rss.coordinator.quorum|-|Coordinator quorum list|
|rss.rpc.server.type | | GRPC | rpc service type |
|rss.rpc.server.port|-|rpc service port for the coordinator and the shuffle server|
|rss.rpc.message.max.size|1073741824|Max size of rpc message|
|rss.rpc.metrics.enabled|true|enable rpc related metrics|
|rss.jetty.http.port||metrics service port|
|rss.jetty.corePool.size|256|metrcis service jetty corePool size|
|rss.jetty.maxPool.size|256|metrics service jetty max pool size|
|rss.jetty.stop.timeout|30000|jetty stop timeout (ms) |
|rss.jetty.http.idle.timeout|30000|jetty http idle timeout (ms) |
|rss.rpc.client.type|GRPC|client rpc type|
|rss.storage.type|-|Supports MEMORY_LOCALFILE, MEMORY_HDFS, MEMORY_LOCALFILE_HDFS|
|rss.storage.data.replica|1|replica num of storage|
|rss.rpc.executor.size|1000|thread number for grpc to process request|
|rss.jvm.metrics.verbose.enable|true|enable jvm metrics verbose|

## Coordinator

|Property Name|Default|	Description|
|---|---|---|
|rss.coordinator.exclude.nodes.file.path|-|The path of configuration file which have exclude nodes|
|rss.coordinator.exclude.nodes.check.interval.ms|60000|Update interval (ms) for exclude nodes|
|rss.coordinator.server.heartbeat.timeout|30000|Timeout if can't get heartbeat from shuffle server|
|rss.coordinator.server.periodic.output.interval.times|30|The periodic interval times of output alive nodes.The interval sec can be calculated by (rss.coordinator.server.heartbeat.timeout/3 * rss.coordinator.server.periodic.output.interval.times). Default output interval is 5min.|
|rss.coordinator.assignment.strategy|PARTITION_BALANCE|Strategy for assigning shuffle server, PARTITION_BALANCE should be used for workload balance|
|rss.coordinator.app.expired|60000|Application expired time (ms), the heartbeat interval should be less than it|
|rss.coordinator.shuffle.nodes.max|9|The max number of shuffle server when do the assignment|
|rss.coordinator.dynamicClientConf.path|-|The path of configuration file which have default conf for rss client|
|rss.coordinator.access.checkers|org.apache.uniffle.coordinator.AccessClusterLoadChecker|The access checkers will be used when the spark client use the DelegationShuffleManager, which will decide whether to use rss according to the result of the specified access checkers|
|rss.coordinator.access.loadChecker.serverNum.threshold|-|The minimal required number of healthy shuffle servers when being accessed by client. And when not specified, it will use the required shuffle-server number from client as the checking condition. If there is no client shuffle-server number specified, the coordinator conf of rss.coordinator.shuffle.nodes.max will be adopted|
|rss.coordinator.access.candidates.updateIntervalSec|120|Accessed candidates update interval in seconds, which is only valid when AccessCandidatesChecker is enabled.|
|rss.coordinator.access.candidates.path|-|Accessed candidates file path, the file can be stored on HDFS|
|rss.coordinator.access.loadChecker.memory.percentage|15.0|The minimal percentage of available memory percentage of a server|
|rss.coordinator.dynamicClientConf.enabled|false|whether to enable dynamic client conf, which will be fetched by spark client|
|rss.coordinator.dynamicClientConf.path|-|The dynamic client conf of this cluster and can be stored in HDFS or local|
|rss.coordinator.dynamicClientConf.updateIntervalSec|120|The dynamic client conf update interval in seconds|
|rss.coordinator.remote.storage.cluster.conf|-|Remote Storage Cluster related conf with format $clusterId,$key=$value, separated by ';'|
|rss.coordinator.remote.storage.select.strategy|APP_BALANCE|Strategy for selecting the remote path|
|rss.coordinator.remote.storage.schedule.time|60000|The time of scheduling the read and write time of the paths to obtain different HDFS|
|rss.coordinator.remote.storage.schedule.file.size|204800000|The size of the file that the scheduled thread reads and writes|
|rss.coordinator.remote.storage.schedule.access.times|3|The number of times to read and write HDFS files|
|rss.coordinator.assignment.host.strategy|-|Strategy for selecting shuffle servers|
|rss.coordinator.startup-silent-period.enabled|false|Enable the startup-silent-period to reject the assignment requests for avoiding partial assignments. To avoid service interruption, this mechanism is disabled by default. Especially it's recommended to use in coordinator HA mode when restarting single coordinator.|
|rss.coordinator.startup-silent-period.duration|20000|The waiting duration(ms) when conf of rss.coordinator.startup-silent-period.enabled is enabled.|

## Shuffle Server

|Property Name|Default|Description|
|---|---|---|
|rss.server.buffer.capacity|-|Max memory of buffer manager for shuffle server|
|rss.server.read.buffer.capacity|10000|Max size of buffer for reading data|
|rss.server.heartbeat.delay|10000|rss heartbeat initial delay (ms)|
|rss.server.heartbeat.threadNum|2|rss heartbeat thread number|
|rss.server.heartbeat.interval|10000|Heartbeat interval to Coordinator (ms)|
|rss.server.heartbeat.timeout|10000|Heartbeat timeout to Coordinator (ms)|
|rss.server.flush.threadPool.size|10|Thread pool for flush data to file|
|rss.server.flush.threadPool.queue.size|Integer.MAX_VALUE|size of waiting queue for thread pool|
|rss.server.flush.thread.alive|120|thread idle time in pool (s)|
|rss.server.commit.timeout|600000|Timeout when commit shuffle data (ms)|
rss.server.commit.check.interval.max.ms|10000|Max interval(ms) for check commit status|
|rss.server.write.retry.max|10|Retry times when write fail|
|rss.server.app.expired.withoutHeartbeat|60000|Expired time (ms) for application which has no heartbeat with coordinator|
|rss.server.memory.request.retry.max|50|Max times to retry for memory request|
|rss.server.preAllocation.expired|20000|Expired time (ms) for pre allocated buffer|
|rss.server.write.slow.threshold|10000|Threshold for write slow defined|
|rss.server.event.size.threshold.l1|200000|Threshold for event1 size|
|rss.server.event.size.threshold.l2|200000|Threshold for event2 size|
|rss.server.event.size.threshold.l3|200000|Threshold for event3 size|
|rss.server.cleanup.threshold|10.0|Threshold for disk cleanup|
|rss.server.pending.event.timeout.sec|600|If disk cannot be written for timeout seconds, the flush data event will fail|
|rss.server.shuffle.expired.timeout.ms|120000|shuffle data reserve timeout|
|rss.server.index.size.hint|2097152|The index file size hint|
|rss.server.health.max.storage.usage.percentage|90.0|The usage percentage of a storage exceed the value, the disk become unavailable|
|rss.server.health.storage.recovery.usage.percentage|80.0|The usage percentage of an unavailable storage decline the value, the disk will become available|
|rss.server.health.check.interval.ms|5000|The interval for health check|
|rss.server.health.min.storage.percentage|80|The minimum fraction of storage that must pass the check mark the node as healthy|
|rss.server.health.check.enable|false|The switch for the health check|
|rss.server.health.checker.class.names|-|The list of the Checker's name|
|rss.server.memory.shuffle.highWaterMark.percentage|75.0|Threshold of spill data to storage, percentage of rss.server.buffer.capacity|
|rss.server.memory.shuffle.lowWaterMark.percentage|25.0|Threshold of keep data in memory, percentage of rss.server.buffer.capacity|
|rss.server.flush.cold.storage.threshold.size|64M| The threshold of data size for LOACALFILE and HDFS if MEMORY_LOCALFILE_HDFS is used|
|rss.server.tags|-|The comma-separated list of tags to indicate the shuffle server's attributes. It will be used as the assignment basis for the coordinator|
|rss.server.single.buffer.flush.enabled|false|Whether single buffer flush when size exceeded rss.server.single.buffer.flush.threshold|
|rss.server.single.buffer.flush.threshold|64M|The threshold of single shuffle buffer flush|
|rss.server.disk.capacity|-1|Disk capacity that shuffle server can use. If it's negative, it will use the default disk whole space|
|rss.server.multistorage.fallback.max.fail.times|0|For multistorage, fail times exceed the number, will switch storage|
|rss.server.localstorage.initialize.max.fail.number|0|For localstorage, it will exit when the failed initialized local storage exceed the number|
|rss.server.single.buffer.flush.enabled|false|Whether single buffer flush when size exceeded rss.server.single.buffer.flush.threshold|
|rss.server.single.buffer.flush.threshold|67108864|The threshold of single shuffle buffer flush|


## Client

### Common Setting

>Common settings are common settings both used by spark and mr, but each carries different prefix.
>`spark.` is used by the spark client and `mapreduce.` is used by the mr client.

|Property Name|Default|Description|
|---|---|---|
|rss.c.ient.type|GRPC|rpc client type|
|rss.client.retry.max|100|max rpc retry count|
|rss.client.retry.interval.max|10000|rpc retry interval (ms)|
|rss.coordinator.quorum|-|coordinator quorum to acess|
|rss.data.replica|1|data replica num|
|rss.data.replica.write|1|quorum write num|
|rss.data.replica.read|1|quorum read num|
|rss.data.replica.skip.enabled|true|enable data replica skipping|
|rss.client.data.transfer.pool.size|auto get host's processors num|data transfer threadpool size|
|rss.client.data.commit.pool.size|-1|data commit pool size|
|rss.heartbeat.interval|10000|client heartbaet interval|
|rss.heartbeat.timeout|-|client heartbeat timeout|
|rss.storage.type|-|storage type of shuffle data, supports MEMORY_LOCALFILE, MEMORY_HDFS, MEMORY_LOCALFILE_HDFS|
|rss.client.send.check.interval.ms|500|check send result interval (ms)|
|rss.client.send.check.timeout.ms|600000|send result checkout timeout (ms)|
|rss.writer.buffer.size|3m|Buffer size for single partition data|
|rss.remote.storage.path|-|remote storage path|
|rss.index.read.limit|500|index num limit for each read|
|rss.client.read.buffer.size|14m|buffer size for each read|
|rss.client.assignment.tags|-|client assigment tags|
|rss.client.assignment.retry.interval|-|max client asssigment retry times|
|rss.access.timeout.ms|10000|cluster access timeout|
|rss.dynamicClientConf.enabled|true|use dynamic conf from coordinator|
|rss.client.assignment.shuffle.nodes.max|-1|max assigned shuffle server nodes|

### Spark Specialized Setting

|Property Name|Default|Description|
|---|---|---|
|spark.rss.writer.serializer.buffer.size|3k|serializer buffer size|
|spark.rss.writer.buffer.segment.size|3k|buffer size pre allocated for each records add|
|spark.rss.writer.buffer.spill.size|128m|Buffer size for total partition data|
|spark.rss.writer.pre.allocated.buffer.size|16m|allocated size for each request memory from spark executor|
|spark.rss.writer.require.memory.retryMax|1200|max memory request times|
|spark.rss.writer.require.memory.interval|1000|memory request interval (ms)|
|spark.rss.client.heartBeat.threadNum|4|spark client heartbeat thread num|
|spark.rss.client.send.size.limit|16m|The max data size sent to shuffle server|
|spark.rss.client.unregister.thread.pool.size|10|The max size of thread pool of unregistering|
|spark.rss.client.unregister.request.timeout.sec|10|The max timeout sec when doing unregister to remote shuffle-servers|
|spark.rss.client.send.threadPool.size|10|client send data threadpool size of each executor|
|spark.rss.client.send.threadPool.keepalive|60|maximum time that excess idle threads will wait for new tasks before terminating|
|spark.rss.client.bitmap.splitNum|1|bitmap split num|
|spark.rss.access.id|-|auto access id|
|spark.rss.enabled|false|enable to use RssShuffleManager, this is used in auto access mode (DelegationRssShuffleManager)|
|spark.rss.client.access.retry.interval.ms|20000|auto access retry interval|
|spark.rss.client.access.retry.times|0|auto access retry count|

### MapReduce Specialized Setting

|Property Name|Default|Description|
|---|---|---|
|mapreduce.rss.client.send.threshold|0.2|threshold to send data|
|mapreduce.rss.client.sort.memory.use.threshold|-|threshold of memory to sort in the client|
|mapreduce.rss.client.max.buffer.size|3k|The max buffer size in map side|
|mapreduce.rss.client.batch.trigger.num|50|The max batch of buffers to send data in map side|
|mapreduce.rss.client.memory.threshold|0.8|Threshold to send data in the mapper|
|mapreduce.rss.reduce.remote.spill.enable|false|Whether to use remote spill (Experimental, MEMORY_LOCAL_HDFS mode)|
|mapreduce.rss.reduce.remote.spill.attempt.inc|1|Increase reduce attempts as hdfs is easier to crash than disk (Experimental, MEMORY_LOCAL_HDFS mode)|
|mapreduce.rss.reduce.remote.spill.replication|1|The replication number to spill data to hdfs (Experimental, MEMORY_LOCAL_HDFS mode)|
|mapreduce.rss.reduce.remote.spill.retries|5|The retry number to spill data to hdfs (Experimental, MEMORY_LOCAL_HDFS mode)|
|mapreduce.rss.remote.storage.conf|-|remote storage cluster conf|

## Security

|Property Name|Default|Description|
|---|---|---|
|rss.security.hadoop.kerberos.enable|false|Whether enable access secured hadoop cluster|
|rss.security.hadoop.kerberos.krb5-conf.file|-|The file path of krb5.conf. And only when rss.security.hadoop.kerberos.enable is enabled, the option will be valid|
|rss.security.hadoop.kerberos.keytab.file|-|The kerberos keytab file path. And only when rss.security.hadoop.kerberos.enable is enabled, the option will be valid|
|rss.security.hadoop.kerberos.principal|-|The kerberos keytab principal. And only when rss.security.hadoop.kerberos.enable is enabled, the option will be valid|
|rss.security.hadoop.kerberos.relogin.interval.sec|60|The kerberos authentication relogin interval. unit: sec|
|rss.jetty.ssl.enable|false|enable metrics service jetty ssl|
|rss.jetty.https.port|-|metrics service jetty ssl port|
|rss.jetty.ssl.keystore.path|-|jetty ssl keystore path|
|rss.jetty.ssl.keymanager.password|-|jetty ssl keymanager password|
|rss.jetty.ssl.keystore.password|-|jetty ssl keystore password|
|rss.jetty.ssl.truststore.password|-|jetty ssl truststore password|
