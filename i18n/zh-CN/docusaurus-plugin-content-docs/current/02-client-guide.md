# Uniffle Shuffle 客户端指南

Uniffle 被设计为适用于多种计算框架的统一 shuffle 引擎，包括 Apache Spark 和 Apache Hadoop。
Uniffle 提供了可插拔的客户端插件来在 Spark 和 MapReduce 中启用远程 shuffle。

## 部署

本文档将介绍如何使用 Spark 和 MapReduce 部署 Uniffle 客户端插件。

### 部署 Spark 客户端插件

1. 将客户端 jar 包添加到 Spark classpath，例如 SPARK_HOME/jars/。

   Spark2 jar 包的位置在 <RSS_HOME>/jars/client/spark2/rss-client-XXXXX-shaded.jar

   Spark3 jar 包的位置在 <RSS_HOME>/jars/client/spark3/rss-client-XXXXX-shaded.jar

2. 更新 Spark 配置以启动 Uniffle，例如：

   ```
   spark.shuffle.manager org.apache.spark.shuffle.RssShuffleManager
   spark.rss.coordinator.quorum <coordinatorIp1>:19999,<coordinatorIp2>:19999
   # 注意：对于 Spark2，spark.sql.adaptive.enabled 应为 false，因为 Spark2 不支持 AQE。
   ```

### 支持 Spark 动态分配

为支持使用 Uniffle 的 spark 动态分配，需要更新 spark 代码。
在 spark-patches 文件夹中有 2 个针对 spark-2.4.6 和 spark-3.1.2 的补丁供参考。

在打完补丁并重新构建 spark 后，在 spark conf 中添加以下配置以启用动态分配：

```
spark.shuffle.service.enabled false
spark.dynamicAllocation.enabled true
```

### 部署 MapReduce 客户端插件

1. 将客户端 jar 添加到每个 NodeManager 的 classpath 中，例如 <HADOOP_HOME>/share/hadoop/mapreduce/

MapReduce 的 jar 位于 <RSS_HOME>/jars/client/mr/rss-client-mr-XXXXX-shaded.jar

2. 更新 MapReduce 配置以启动 Uniffle，例如：

   ```
   -Dmapreduce.rss.coordinator.quorum=<coordinatorIp1>:19999,<coordinatorIp2>:19999
   -Dyarn.app.mapreduce.am.command-opts=org.apache.hadoop.mapreduce.v2.app.RssMRAppMaster
   -Dmapreduce.job.map.output.collector.class=org.apache.hadoop.mapred.RssMapOutputCollector
   -Dmapreduce.job.reduce.shuffle.consumer.plugin.class=org.apache.hadoop.mapreduce.task.reduce.RssShuffle
   ```

请注意，RssMRAppMaster 将自动禁用慢启动 (即，`mapreduce.job.reduce.slowstart.completedmaps=1`) 和作业恢复 (即，`yarn.app.mapreduce.am.job.recovery.enable=false`)。

## 配置

客户端的重要配置如下。

### 通用设置

所有类型的客户都可以共享这些配置。

| 属性名称                                              | 默认值                    | 描述                                                                                                                                                                       |
| ----------------------------------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <client_type>.rss.coordinator.quorum                  | -                         | Coordinator quorum                                                                                                                                                         |
| <client_type>.rss.writer.buffer.size                  | 3m                        | 单个分区数据的缓冲区大小                                                                                                                                                   |
| <client_type>.rss.storage.type                        | -                         | 支持 MEMORY_LOCALFILE, MEMORY_HDFS, MEMORY_LOCALFILE_HDFS                                                                                                                  |
| <client_type>.rss.client.read.buffer.size             | 14m                       | 从存储中读取的最大数据量                                                                                                                                                   |
| <client_type>.rss.client.send.threadPool.size         | 5                         | 向 shuffle 服务器发送 shuffle 数据的线程大小                                                                                                                               |
| <client_type>.rss.client.assignment.tags              | -                         | 以逗号分隔的标签列表，用于决定分配 shuffle 的服务器。请注意，无论是否设置此配置，SHUFFLE_SERVER_VERSION 都将作为分配标记                                                   |
| <client_type>.rss.client.data.commit.pool.size        | 分配的 shuffle 服务器数量 | 向 shuffle 服务器发送 commit 的线程大小                                                                                                                                        |
| <client_type>.rss.client.assignment.shuffle.nodes.max | -1                        | 所需分配的 shuffle 服务器数量。如果小于 0 或等于 0 或大于 coordinator 配置的 "rss.coordinator.shuffle.nodes.max"，将使用默认的 "rss.coordinator.shuffle.nodes.max " 大小。 |

注意：

1. `<client_type>` 应为 `spark` 或者 `mapreduce`

2. 当启用 coordinator 动态配置时，`<client_type>.rss.coordinator.quorum` 为必选配置，其他配置为可选配置。

### 自适应远程 Shuffle 启用

为了智能地选择内置 shuffle 或远程 shuffle，Uniffle 支持自适应启用。
客户端应使用 `DelegationRssShuffleManager`，并提供唯一的 <access_id>，以便 coordinator 能区分是否应启用远程 shuffle 。

```
spark.shuffle.manager org.apache.spark.shuffle.DelegationRssShuffleManager
spark.rss.access.id=<access_id>
```

注意：
目前，该功能仅支持 Spark。

其他配置：

| 属性名称                                  | 默认值 | 描述                                         |
| ----------------------------------------- | ------ | -------------------------------------------- |
| spark.rss.access.timeout.ms               | 10000  | 访问 Uniffle coordinator 的超时时间          |
| spark.rss.client.access.retry.interval.ms | 20000  | 在重试后回退为 SortShuffleManager 的时间间隔 |
| spark.rss.client.access.retry.times       | 0      | 回退到 SortShuffleManager 的重试次数         |

### 客户端 Quorum 配置

Uniffle 支持客户端 quorum 协议，以容忍 shuffle 服务器的崩溃。
该功能是客户端行为，即 shuffle 写入程序将每个块发送到多个服务器，而 shuffle 读取程序可以从其中一个服务器获取块数据。
由于发送多个块的副本会降低 shuffle 的性能和资源消耗，我们将其设计为可选功能。

| 属性名称                             | 默认值 | 描述                                                   |
| ------------------------------------ | ------ | ------------------------------------------------------ |
| <client_type>.rss.data.replica       | 1      | 在 quorum 协议中，客户端将每个块发送给服务器的最大个数 |
| <client_type>.rss.data.replica.write | 1      | 客户端需要将每个块成功发送给服务器的最小个数           |
| <client_type>.rss.data.replica.read  | 1      | 客户端需要成功获取每个块元数据的服务器的最小个数       |

注意：

1. `spark.rss.data.replica.write` + `spark.rss.data.replica.read` > `spark.rss.data.replica`

推荐的例子:

1. 性能优先（默认）

```
spark.rss.data.replica 1
spark.rss.data.replica.write 1
spark.rss.data.replica.read 1
```

2. 容错性优先

```
spark.rss.data.replica 3
spark.rss.data.replica.write 2
spark.rss.data.replica.read 2
```

### Spark 专属配置

重要的配置列出如下。

| 属性名称                                        | 默认值 | 描述                                        |
| ----------------------------------------------- | ------ | ------------------------------------------- |
| spark.rss.writer.buffer.spill.size              | 128m   | 整个分区数据的缓冲区大小                    |
| spark.rss.client.send.size.limit                | 16m    | 发送到 shuffle 服务器的最大数据大小         |
| spark.rss.client.unregister.thread.pool.size    | 10     | 取消注册的线程池的最大大小                  |
| spark.rss.client.unregister.request.timeout.sec | 10     | 取消注册远程 shuffle 服务器时的最大超时秒数 |

### MapReduce 专属配置

| 属性名称                               | 默认值 | 描述                              |
| -------------------------------------- | ------ | --------------------------------- |
| mapreduce.rss.client.max.buffer.size   | 3k     | map 侧最大缓冲区大小              |
| mapreduce.rss.client.batch.trigger.num | 50     | 在 map 侧发送数据的最大缓冲区批次 |

### 远程溢出（试验性）

在云环境中，虚拟机的磁盘空间和性能可能非常有限。
这项实验功能允许减少任务，将数据溢出到远程存储（如 hdfs）。

| 属性名称                                      | 默认值 | 描述                                               |
| --------------------------------------------- | ------ | -------------------------------------------------- |
| mapreduce.rss.reduce.remote.spill.enable      | false  | 是否使用远程溢出                                   |
| mapreduce.rss.reduce.remote.spill.attempt.inc | 1      | 增加 reduce 尝试的次数，因为 hdfs 比磁盘更容易崩溃 |
| mapreduce.rss.reduce.remote.spill.replication | 1      | 将数据复制到 hdfs 的副本数量                       |
| mapreduce.rss.reduce.remote.spill.retries     | 5      | 向 hdfs 溢出数据的重试次数                         |

注意：此功能需要 MEMORY_LOCAL_HDFS 模式。
