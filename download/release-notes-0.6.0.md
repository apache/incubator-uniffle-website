---
title: Release Notes 0.6.0
sidebar_position: 2
--- 

# Release Note

## Highlight

- Optimize the assignment strategy

- Some improvement of stability and performance

- Add a plugin mechanism of SelectStorageStrategy

- Add LowestIOSampleCostSelectStorageStrategy

- Support Kerberos HDFS

## ChangeLog

* Change license owner to ASF by @kaijchen in https://github.com/apache/incubator-uniffle/pull/5
* Trivial code improvements by @wForget in https://github.com/apache/incubator-uniffle/pull/7
* [Minor] Store shuffleId int to be consistent with other data structure by @zuston in https://github.com/apache/incubator-uniffle/pull/10
* Introduce the asList method in ConfigOptions by @zuston in https://github.com/apache/incubator-uniffle/pull/9
* Rename package by @jerqi in https://github.com/apache/incubator-uniffle/pull/6
* Minimize apache-rat excluded files by @kaijchen in https://github.com/apache/incubator-uniffle/pull/11
* Update module names by @kaijchen in https://github.com/apache/incubator-uniffle/pull/12
* Covert PartitionAssignmentInfo to static inner class by @pan3793 in https://github.com/apache/incubator-uniffle/pull/15
* [Followup] Migrate to Junit5 by @zuston in https://github.com/apache/incubator-uniffle/pull/14
* [Bug] Fix NPE problem when process the event if application was cleared already by @colinmjj in https://github.com/apache/incubator-uniffle/pull/16
* [CI] Enable codecov report by @kaijchen in https://github.com/apache/incubator-uniffle/pull/17
* Correct the config description and fix typo by @zuston in https://github.com/apache/incubator-uniffle/pull/19
* Add CI and Codecov badges in README by @kaijchen in https://github.com/apache/incubator-uniffle/pull/20
* [Followup] Use asList method in some existing configOptions by @zuston in https://github.com/apache/incubator-uniffle/pull/18
* Move rss-integration-spark-common-test module package by @wForget in https://github.com/apache/incubator-uniffle/pull/23
* [INFRA] Improve asf.yaml to reduce the notifications by @jerryshao in https://github.com/apache/incubator-uniffle/pull/25
* [TEST] Improve code coverage in rss-common by @kaijchen in https://github.com/apache/incubator-uniffle/pull/26
* Remove redundant package by @wForget in https://github.com/apache/incubator-uniffle/pull/27
* [CI] Switch to temurin JDK by @kaijchen in https://github.com/apache/incubator-uniffle/pull/24
* [INFRA] Improve asf.yaml to reduce the notifications (another-try) by @jerryshao in https://github.com/apache/incubator-uniffle/pull/33
* Bump commons-lang3 from 3.5 to 3.10 by @wForget in https://github.com/apache/incubator-uniffle/pull/28
* Fix the log of incorrectly bound class by @wForget in https://github.com/apache/incubator-uniffle/pull/35
* [TYPO] Fix misspelled word "integration" by @kaijchen in https://github.com/apache/incubator-uniffle/pull/34
* Fix some hyperlink in README.md by @daugraph in https://github.com/apache/incubator-uniffle/pull/32
* Upgrade gRPC to support Apple Silicon by @pan3793 in https://github.com/apache/incubator-uniffle/pull/13
* Allow to specify custom tags to decide the assignment of servers by @zuston in https://github.com/apache/incubator-uniffle/pull/30
* Optimize the bash script by @zuston in https://github.com/apache/incubator-uniffle/pull/29
* [Improvement] reduce compiler warnings by @advancedxy in https://github.com/apache/incubator-uniffle/pull/46
* [Chore]: document update and build time optimize by @advancedxy in https://github.com/apache/incubator-uniffle/pull/45
* Supplement doc about assignment tags by @zuston in https://github.com/apache/incubator-uniffle/pull/47
* [Bug] Fix skip() api maybe skip unexpected bytes which makes inconsistent data by @colinmjj in https://github.com/apache/incubator-uniffle/pull/40
* [improvement] Remove experimental feature with ShuffleUploader by @colinmjj in https://github.com/apache/incubator-uniffle/pull/51
* [Improvement] Provides utility classes for creating thread factories by @smallzhongfeng in https://github.com/apache/incubator-uniffle/pull/49
* Enable spotbugs and fix high priority bugs by @kaijchen in https://github.com/apache/incubator-uniffle/pull/38
* [CI] Change default checkstyle severity to error by @kaijchen in https://github.com/apache/incubator-uniffle/pull/57
* [Style] Check indentation by @kaijchen in https://github.com/apache/incubator-uniffle/pull/56
* [Experimental Feature] MR Supports Remote Spill by @frankliee in https://github.com/apache/incubator-uniffle/pull/55
* [Improvement] Log indicate the shuffle server host:port when doing re… by @zuston in https://github.com/apache/incubator-uniffle/pull/58
* Send commit concurrently in client side by @zuston in https://github.com/apache/incubator-uniffle/pull/59
* Explicitly set the constructor with AccessManager when extending AccessChecker by @zuston in https://github.com/apache/incubator-uniffle/pull/43
* [DOC] Replace Firestorm with Uniffle by @jerqi in https://github.com/apache/incubator-uniffle/pull/60
* Introduce the extraProperties to support user-defined pluggable accessCheckers by @zuston in https://github.com/apache/incubator-uniffle/pull/42
* Log enhancement: Merge multiple logs into oneline and add more description  by @zuston in https://github.com/apache/incubator-uniffle/pull/62
* [TEST] Add more unit tests in rss-common by @kaijchen in https://github.com/apache/incubator-uniffle/pull/63
* [MINOR] Comments of PartitionBalanceAssignmentStrategy miss byte units by @smallzhongfeng in https://github.com/apache/incubator-uniffle/pull/68
* [Minor] Make config keys and default values finalized by @kaijchen in https://github.com/apache/incubator-uniffle/pull/70
* [Log Improvment] Add more detailed debug info for MR client by @frankliee in https://github.com/apache/incubator-uniffle/pull/84
* [Improvement] Shutdown the grpc executors pool when closing by @zuston in https://github.com/apache/incubator-uniffle/pull/83
* Log enhancement: return error message when getting assignment servers and log exception when initializing by @zuston in https://github.com/apache/incubator-uniffle/pull/64
* [ISSUE-48] [Feature] Init Kubernetes operator directory by @jerqi in https://github.com/apache/incubator-uniffle/pull/75
* [Improvement] No need to use synchronized lock of the method scope when getting client by @zuston in https://github.com/apache/incubator-uniffle/pull/82
* [DOC] Remove Wechat group in README by @jerqi in https://github.com/apache/incubator-uniffle/pull/88
* [Performance Optimization] Improve the speed of writing index file in shuffle server by @zuston in https://github.com/apache/incubator-uniffle/pull/91
* [DOC] Update title and description in README by @kaijchen in https://github.com/apache/incubator-uniffle/pull/94
* [Improvement] ShuffleBlock should be release when finished reading by @xianjingfeng in https://github.com/apache/incubator-uniffle/pull/74
* [IMPROVEMENT][COMMON] Fix common module code style by @jerqi in https://github.com/apache/incubator-uniffle/pull/99
* [Improvement]LocalStorage init use multi thread #71 by @xianjingfeng in https://github.com/apache/incubator-uniffle/pull/72
* [Improvement] Use OR operation instead of serialization for cloning BitMaps by @kaijchen in https://github.com/apache/incubator-uniffle/pull/103
* [Improvement] Ignore partial failure on initializing local storage in shuffle server side by @zuston in https://github.com/apache/incubator-uniffle/pull/102
* [CI] Test compile in Java 11 and Java 17 by @kaijchen in https://github.com/apache/incubator-uniffle/pull/105
* Sleep less time but try more times when stopping by @xianjingfeng in https://github.com/apache/incubator-uniffle/pull/112
* [Improvement] Use ConfigBuilder to rewrite the class RssSparkConfig by @smallzhongfeng in https://github.com/apache/incubator-uniffle/pull/104
* [Improvement] Introduce config to customize assignment server numbers in client side by @zuston in https://github.com/apache/incubator-uniffle/pull/100
* Assign partition again if registerShuffleServers failed by @xianjingfeng in https://github.com/apache/incubator-uniffle/pull/115
* [ISSUE-106][IMPROVEMENT] Set rpc timeout for all rpc interface by @xianjingfeng in https://github.com/apache/incubator-uniffle/pull/113
* [MINOR][IMPROVEMENT] Avoid CoordinatorServer#initialization multiple `new Configuration()` by @zwangsheng in https://github.com/apache/incubator-uniffle/pull/118
* [Improve] Remove useless server id from `StorageManagerFactory#createStorageManager` by @zwangsheng in https://github.com/apache/incubator-uniffle/pull/119
* [MINOR][IMPROVEMENT][COORD] Fix coordinator module code style by @jerqi in https://github.com/apache/incubator-uniffle/pull/122
* [Improvement] Set heartBeatExecutorService as daemon thread by @smallzhongfeng in https://github.com/apache/incubator-uniffle/pull/121
* [JUnit] Introduce the property of trimStackTrace to show error stacktrace in mvn-test by @zuston in https://github.com/apache/incubator-uniffle/pull/126
* Make the conf of rss.storage.basePath as list by @zuston in https://github.com/apache/incubator-uniffle/pull/130
* [MINOR][IMPROVEMENT][STORAGE] Fix storage module code style by @jerqi in https://github.com/apache/incubator-uniffle/pull/131
* [Improvement] Add timeout reconnection when DelegationRssShuffleManager send the request of AccessCluster by @smallzhongfeng in https://github.com/apache/incubator-uniffle/pull/139
* [MINOR] Fix flaky test testGetHostIp by @izchen in https://github.com/apache/incubator-uniffle/pull/141
* [Improvement] Add the number of unhealthy nodes in CoordinatorMetrics by @smallzhongfeng in https://github.com/apache/incubator-uniffle/pull/147
* [ISSUE-48][FEATURE] Add Uniffle Dockerfile by @wangao1236 in https://github.com/apache/incubator-uniffle/pull/132
* [BUGFIX] Fix memory leak which cause oom by @summaryzb in https://github.com/apache/incubator-uniffle/pull/145
* [Log Improvement] Output the registering/lost/exclude nodes in log by @zuston in https://github.com/apache/incubator-uniffle/pull/148
* [MINOR] Tagged spark hadoop version in release package by @izchen in https://github.com/apache/incubator-uniffle/pull/149
* [DOC] Migrate the coordinator doc from README to docs page by @zuston in https://github.com/apache/incubator-uniffle/pull/153
* [MINOR][DOC] Remove spaces when reading file of excluded nodes by @smallzhongfeng in https://github.com/apache/incubator-uniffle/pull/155
* [Improvement] Filter null value when selecting remote storage in ApplicationManager by @smallzhongfeng in https://github.com/apache/incubator-uniffle/pull/156
* Introduce more grpc server metrics by @zuston in https://github.com/apache/incubator-uniffle/pull/150
* [Improvement] Introduce a new class ShuffleTaskInfo by @smallzhongfeng in https://github.com/apache/incubator-uniffle/pull/158
* [ISSUE-76] Disallow sendShuffleData if requireBufferId expired by @xianjingfeng in https://github.com/apache/incubator-uniffle/pull/159
* Support storing shuffle data to secured dfs cluster by @zuston in https://github.com/apache/incubator-uniffle/pull/53
* [FOLLOWUP] Delete hdfs shuffle data files using proxy user by @zuston in https://github.com/apache/incubator-uniffle/pull/170
* [ISSUE-48][FEATURE] Init Operator Directory by @wangao1236 in https://github.com/apache/incubator-uniffle/pull/161
* PID file name should contains program name by @zuston in https://github.com/apache/incubator-uniffle/pull/165
* [BUGFIX] Fix resource leak when shuffle read by @izchen in https://github.com/apache/incubator-uniffle/pull/174
* [Improvement] ShuffleBufferManager supports triggering flush according to the size of single ShuffleBuffer by @leixm in https://github.com/apache/incubator-uniffle/pull/176
* [Improvement] Should match from pathToStorages when appId does not exist in appIdToStorages by @smallzhongfeng in https://github.com/apache/incubator-uniffle/pull/168
* [ISSUE-173][FOLLOWUP] The size of single buffer flush should reach rss.server.flush.cold.storage.threshold.size  by @leixm in https://github.com/apache/incubator-uniffle/pull/178
* Revert "[ISSUE-173][FOLLOWUP] The size of single buffer flush should reach rss.server.flush.cold.storage.threshold.size " by @jerqi in https://github.com/apache/incubator-uniffle/pull/179
* [ISSUE-173][FOLLOWUP] The size of single buffer flush should reach rss.server.flush.cold.storage.threshold.size by @leixm in https://github.com/apache/incubator-uniffle/pull/180
* [FOLLOWUP] Store app user in ShuffleTaskInfo by @smallzhongfeng in https://github.com/apache/incubator-uniffle/pull/181
* [ISSUE-123] Fix all test code style  by @macroguo-ghy in https://github.com/apache/incubator-uniffle/pull/185
* [ISSUE-48][FEATURE][FOLLOW UP] Add RemoteShuffleService CRD by @wangao1236 in https://github.com/apache/incubator-uniffle/pull/175
* [FOLLOWUP] Add the conf of rss.security.hadoop.krb5-conf.file by @zuston in https://github.com/apache/incubator-uniffle/pull/184
* Fix flaky test about kerberos by @zuston in https://github.com/apache/incubator-uniffle/pull/191
* [Improvement] Add optional environment variables by @izchen in https://github.com/apache/incubator-uniffle/pull/187
* [MINOR] Fix some bad practices reported by spotbugs by @kaijchen in https://github.com/apache/incubator-uniffle/pull/177
* [ISSUE-48][FEATURE][FOLLOW UP] Add webhook component by @wangao1236 in https://github.com/apache/incubator-uniffle/pull/188
* [Log-Improvement] Log the newly registered app id by @zuston in https://github.com/apache/incubator-uniffle/pull/193
* [MINOR] Replace HashSet with ImmutableSet in configs by @kaijchen in https://github.com/apache/incubator-uniffle/pull/195
* [IMPROVEMENT] Introduce the enumType in ConfigOptions by @zuston in https://github.com/apache/incubator-uniffle/pull/199
* [ISSUE-48][FEATURE][FOLLOW UP] Generate informer and lister for crd by @wangao1236 in https://github.com/apache/incubator-uniffle/pull/202
* [ISSUE-144] Fix flaky test `RssShuffleUtilsTest#testDestroyDirectByteBuffer`  by @LuciferYang in https://github.com/apache/incubator-uniffle/pull/203
* [Issue-194][Feature] Support spark 3.2.0 by @leixm in https://github.com/apache/incubator-uniffle/pull/201
* [ISSUE-186][Feature] Use I/O cost time to select storage paths by @smallzhongfeng in https://github.com/apache/incubator-uniffle/pull/192
* [Improvement][AQE] Avoid calling getShuffleResult multiple times by @leixm in https://github.com/apache/incubator-uniffle/pull/190
* Fix flaky test of heartbeatTimeoutTest by @zuston in https://github.com/apache/incubator-uniffle/pull/206
* [IMPROVEMENT] Add more metrics about local storage info by @zuston in https://github.com/apache/incubator-uniffle/pull/205
* [MINOR][IMPROVEMENT] Return index-file size of n*SEGMENT_SIZE in HDFS reading by @zuston in https://github.com/apache/incubator-uniffle/pull/204
* Add DISCLAIMER by @jerqi in https://github.com/apache/incubator-uniffle/pull/212
* [TEST] Improve SimpleClusterManagerTest by @kaijchen in https://github.com/apache/incubator-uniffle/pull/216
* [Minor] Modify the format of DISCLAIMER by @jerqi in https://github.com/apache/incubator-uniffle/pull/217
* Add Notice and DISCLAMER file by @frankliee in https://github.com/apache/incubator-uniffle/pull/215

## Credits
The release of Uniffle 0.6.0 is inseparable from the contributors of the Uniffle community. Thanks to all the community contributors! 