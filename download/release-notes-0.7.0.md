---
title: Release Notes 0.7.0
sidebar_position: 997
---

# Release Note

## Highlight
- Better support for Spark AQE
  * Leveraging the LOCAL_ORDER data distribution to improve performance
  * Estimating assignment number of shuffle servers to improve user experience
  * Better assignment policy of assigning adjacent partitions to the same shuffle server to improve performance
- Optimization of huge partition to improve stability of shuffle servers
- More bug fixes and usability improvements of K8S operator
- Add support of user quota management and more compression algorithms
- Add support of spark data eviction mechanism of stage level
- Some improvement of stability and performance

## ChangeLog
* Add more badges in README by @kaijchen in #219
* Fix incorrect log format strings by @kaijchen in #220
* Change total lines badge url to sloc.xyz in README by @kaijchen in #222
* [MINOR] Fix warnings reported by lgtm by @kaijchen in #223
* [MINOR] Simplify creating buffer logic by @zuston in #227
* Support cancelling previous ci actions by @zuston in #225
* Use the conf of shuffleNodesNumber from jobs to be as checking factor by @zuston in #208
* Output the stderr and stdout to output file in startup script by @zuston in #226
* [ISSUE-48][FEATURE][FOLLOW UP] Add controller component by @wangao1236 in #214
* Add more metrics about requiring read memory by @zuston in #231
* Adjust the memory required times to match grpc max deadline conf by @zuston in #218
* [MINOR] Fix flaky test by @jerqi in #238
* [ISSUE-48][FEATURE][FOLLOW UP] Add yaml of components and crd exampes by @wangao1236 in #236
* Fix Flaky test GetShuffleReportForMultiPartTest by @leixm in #241
* Set the default disk capacity to the total space by @zuston in #237
* Add issue template by @jerqi in #8
* [MINOR] Fix inefficient map iteration by @kaijchen in #245
* Support deploy multiple shuffle servers in a single node by @xianjingfeng in #166
* Fast fail when reading failed in ComposedClientReadHandler by @zuston in #213
* Fix startup shell problem by @jerqi in #251
* New version 0.7.0-snapshot by @jerqi in #252
* [ISSUE-196] Fix flaky test about kerberos by @zuston in #250
* [ISSUE-48][FEATURE][FOLLOW UP] add unit test for validating rss objects by @wangao1236 in #248
* [Improvement] Add hdfs path health check to AppBalanceSelectStorageStrategy by @smallzhongfeng in #210
* [TYPO] Replace Chinese colon by ASCII colon by @kaijchen in #255
* Introduce startup-silent-period mechanism to avoid partial assignments by @zuston in #247
* Replace DISCLAIMER with DISCLAIMER-WIP by @jerqi in #258
* [ISSUE-244] Fix flaky test of CoordinatorGrpcTest.rpcMetricsTest by @zuston in #256
* Fix flaky test of ClientConfManagerTest by @smallzhongfeng in #260
* [Refactor] Optimize creating shuffle handlers by @zuston in #259
* Introduce data cleanup mechanism on stage level by @zuston in #249
* [ISSUE-48][FEATURE][FOLLOW UP] add docs for operator by @wangao1236 in #261
* Fix potenial missing reads of exclude nodes by @zuston in #269
* [ISSUE-257] RssMRUtils#getBlockId change the partitionId of int type to long by @fpkgithub in #266
* [ISSUE-273][BUG] Get shuffle result failed caused by concurrent calls to registerShuffle by @leixm in #274
* Add enum type test about case insensitive by @zuston in #280
* Support ZSTD by @zuston in #254
* [ISSUE-239][BUG] RssUtils#transIndexDataToSegments should consider the length of the data file by @leixm in #275
* Remove code quality badge and add release badge by @kaijchen in #284
* [ISSUE-163][FEATURE] Write to hdfs when local disk can't be write by @xianjingfeng in #235
* Upgrade Github actions for Node.js 16 by @kaijchen in #292
* Fix NPE in WriteBufferManager.addRecord by @wForget in #296
* Fix AbstractStorage#containsWriteHandler by @xianjingfeng in #281
* Add more test cases on LocalStorageManager.selectStorage by @zuston in #298
* [ISSUE-137][Improvement][AQE] Sort MapId before the data are flushed by @zuston in #293
* [ISSUE-283][FEATURE] Support snappy compression/decompression by @amaliujia in #304
* [ISSUE-290] Make RpcNodePort and HttpNodePort optional by @amaliujia in #305
* [ISSUE-301][Subtask][Improvement][AQE] Merge continuous ShuffleDataSegment into single one by @zuston in #303
* Cleanup RuntimeException and fetchRemoteStorage logic in ClientUtils by @kaijchen in #295
* [ISSUE-135][FOLLOWUP][Improvement][AQE] Assign adjacent partitions to the same ShuffleServer by @leixm in #307
* Correct the contributing guide link in pull-request template by @zuston in #314
* Fix bug of "Comparison method violates its general contract" by @zuston in #315
* [AQE][LocalOrder] Fix potenial bug when merging continuous segments by @zuston in #318
* [AQE][LocalOrder] Fix wrong param of expectedTaskIds in LocalOrderSegmentSplit by @zuston in #319
* [Feature] Support the estimated number of ShuffleServers required. by @leixm in #322
* [Bug] Fix potenial bug when the index reading offset is greater than data length by @zuston in #320
* [ISSUE-154][Improvement] Support Empty assignment to Shuffle Server by @rhh777 in #325
* [Bug] Fix invalid owner of host path volumes by @wangao1236 in #330
* [ISSUE-309][FEATURE] Support ShuffleServer latency metrics. by @leixm in #327
* [ISSUE-329]Catch NPE in ShuffleTaskManager#addFinishedBlockIds by @xianjingfeng in #331
* [BUG] Fix wrong method name by @leixm in #335
* [ISSUE-328] Cleanup unused shuffle servers after stage completed by @xianjingfeng in #334
* [MINOR] Migrate RankValue to the package of the common class by @smallzhongfeng in #265
* [BUG] Fix incorrect spark metrics by @zuston in #324
* [Improvement][LocalOrder] Add tests about keeping consistent with FixedSize when no skew optimization by @zuston in #336
* [INFRA] Add k8s pipeline by @jerqi in #340
* Remove unused class of RssShuffleUtils by @zuston in #345
* [ISSUE-342][Improvement] Check Spark Serializer type by @chong0929 in #344
* [Feature] Support user's app quota level limit by @smallzhongfeng in #311
* [BUG][AQE][LocalOrder] Fix the bug of missed data due to block sorting by @zuston in #347
* [ISSUE-364] Fix indexWriter don't close if exception thrown when close dataWriter by @xianjingfeng in #349
* [BUG] Fix flaky test of AQESkewedJoinWithLocalOrderTest by @zuston in #350
* Add collaborators by @jerqi in #351
* [BUG][FOLLOWUP] Fix flaky test of AQESkewedJoinWithLocalOrderTest by @zuston in #355
* [BUG][AQE][LocalOrder] Remove check of discontinuous map task ids by @zuston in #354
* [Improvement] Task fast fail once blocks fail to send by @zuston in #332
* [ISSUE-228][FEATURE] Add a period local storage cleaner thread by @sfwang218 in #357
* [Improvement] Optimize the use of QuotaManager by @smallzhongfeng in #359
* [ISSUE-339] Optimize retry logic in send shuffle data by @xianjingfeng in #361
* [ISSUE-300] Make config type of RSS_CLIENT_TYPE as enum by @selectbook in #310
* [ISSUE-228] Fix the problem of protobuf-java incorrect dependency at compile time by @tsface in #362
* [ISSUE-124] Add fallback mechanism for blocks read inconsistent by @xianjingfeng in #276
* [BUG] Fix potential memory leak when encountering disk unhealthy by @zuston in #370
* [Improvement][AQE] Support getting memory data skip by upstream task ids by @zuston in #358
* [ISSUE-369] Don't throw exception if blocks are corrupted but have multi replicas by @xianjingfeng in #374
* [ISSUE-285][Improvement] Only use HDFS and LOCALFILE storageType in the test by @tiantingting5435 in #360
* Fix typo of PreferDiffHostAssignmentStrategy by @zuston in #379
* [ISSUE-376] Fix concurrency problems may occur when the ApplicationManager register app by @smallzhongfeng in #382
* [ISSUE-380] Refactor the flush process to fix fallback fail by @zuston in #383
* [Refactor] Make coordinator class more organized by @smallzhongfeng in #386
* [ISSUE-392] Fix the bug in the shuffle data cleanup checker that causes false reports of disk corruption by @zuston in #393
* [ISSUE-390] Print more infos after read finished by @xianjingfeng in #395
* [Improvement] Skip blocks when read from memory by @xianjingfeng in #294
* [Improvement] Small refactor for code quality by @advancedxy in #394
* [BUG] Fix incorrect block info statistics after read finished by @xianjingfeng in #401
* Revert "[Improvement] Skip blocks when read from memory (#294)" by @xianjingfeng in #403
* [ISSUE-388][ISSUE-244][Bug] Fix incorrect usage of GRPCMetrics#setGauge by @xianjingfeng in #404
* [MINOR] If there is no data flush to hdfs, return directly instead of throw exception by @xianjingfeng in #406
* Support writing multi files of single partition to improve speed in HDFS storage by @zuston in #396
* Fix incorrect metrics of event_queue_size and total_write_handler by @zuston in #411
* [Improvement] Support skip memory data when use multiple replicas by @xianjingfeng in #400
* [ISSUE-402] Flaky Test: QuorumTest#case1 by @Rembrant777 in #422
* Fix flaky test QuotaManagerTest#testDetectUserResource by @xianjingfeng in #421
* Improve README by @kaijchen in #427
* Remove unused data structure and method by @zuston in #429
* [FOLLOWUP] Remove unused methods in Storage interface by @zuston in #431
* Flaky Test: AppBalanceSelectStorageStrategyTest#selectStorageTest by @smallzhongfeng in #438
* [Minor] Move GrpcServerTest to common.rpc package by @kaijchen in #439
* [Minor] refactor test code by @advancedxy in #432
* [Minor][Improvement] Introduce FileWriter interface for Localfile/HDFS file writer by @zuston in #444
* [ISSUE-169] Support metric reporter and Support promethues push gateway by @xianjingfeng in #415
* [Improvement] Avoid selecting storage which has reached the high watermark by @zuston in #424
* [Bug] Fix potential negative preAllocatedSize variable by @advancedxy in #428
* [Feature] add a configuration to control shuffle data flush by @advancedxy in #445
* [Improvement] Refactor getPartitionRange to calculate range directly by @a-li in #447
* Fix Flaky Test: AppBalanceSelectStorageStrategyTest#selectStorageTest by @smallzhongfeng in #450
* Fix Flaky Test: QuotaManagerTest#testDetectUserResource by @smallzhongfeng in #453
* [ISSUE-451][Improvement] Read HDFS data files with random sequence to distribute pressure by @zuston in #452
* [ISSUE-455] Lazily create uncompressedData by @xianjingfeng in #457
* [ISSUE-378][HugePartition][Part-1] Record every partition data size for one app by @zuston in #458
* [ISSUE-456] Avoid removeResources for multiple times by @xianjingfeng in #459
* [ISSUE-461] Support Spark 3.3 by @kaijchen in #463
* [Deps] Bump slf4j to 1.7.36 to fix vulnerability in slf4j-log4j12 by @kaijchen in #464
* [ISSUE-448][Feature] shuffle server report storage info by @advancedxy in #449
* [ISSUE-472] Fix Flaky Test: LocalFileServerReadHandlerTest#testDataInconsistent by @zuston in #473
* [Improvement] Remove some unused empty server metrics by @zuston in #474
* [Improvement] Add more logs about data flush by @zuston in #482
* Fix potential race condition when registering remote storage info by @zuston in #481
* [Minor] Improve readability by replacing lambda with method reference by @iwangjie in #488
* [ISSUE-489][Minor] Cleanup some code by @iwangjie in #490
* [Test] Assume unknown blockID in LocalFileHandlerTestBase by @kaijchen in #478
* [ISSUE-475][Improvement] It's unnecessary to use ConcurrentHashMap for "partitionToBlockIds" in RssShuffleWriter by @zjf2012 in #480
* [ISSUE-378][HugePartition][Part-2] Introduce memory usage limit and data flush by @zuston in #471
* [ISSUE-484] Fix accidentally remove the storage of appId when unregistering partial shuffle in HdfsStorageManager by @zuston in #485
* [Test] Cleanup tests with Files#createTempDir() by @kaijchen in #492
* [Test] Add ConfigUtilsTest by @kaijchen in #500
* [Deps] Bump protobuf to 3.19.6 to address vulnerability by @kaijchen in #499
* [Minor] Make Constants final by @kaijchen in #501
* Cleanup UnitConverter and improve UnitConverterTest by @kaijchen in #504
* Fixes errors in doc header and operator install command by @zuston in #506
* [ISSUE-378][HugePartition][Part-3] Introduce more metrics about huge partition by @zuston in #494
* [ISSUE-378][HugePartition][Part-4] Supplement doc about huge partitions by @zuston in #505
* [Deps] Switch to slf4j-reload4j by @kaijchen in #508
* [ISSUE-512][Operator] Bump golang to 1.17 by @kaijchen in #515
* [ISSUE-514] Fix flaky test: ShuffleServerGrpcTest#clearResourceTest by @xianjingfeng in #516
* [ISSUE-507] Fix Flaky Test: ShuffleBufferManagerTest#cacheShuffleDataTest by @xianjingfeng in #511
* [ISSUE-509] Fix Flaky Test: ShuffleBufferManagerTest#shuffleFlushThreshold by @xianjingfeng in #510
* [ISSUE-479] [operator] refine operator's build system by @advancedxy in #491
* [ISSUE_479][operator][followup] use exec form instead of shell form in Dockerfile by @advancedxy in #518
* [SpotBugs] Set threshold to middle with exceptions by @kaijchen in #517
* [ISSUE-522] [operator] pass RSS_IP to coordinator container env by @advancedxy in #523
* [ISSUE-496][operator] infer resource request/limit from spec for init container by @advancedxy in #521
* [SpotBugs] Remove unread protected field in Checker by @kaijchen in #520
* [ISSUE-468] Put unavailable servers to the end of the list when sending shuffle data by @xianjingfeng in #470
* chore: add new collaborator by @advancedxy in #535
* [SpotBugs] Fix REC_CATCH_EXCEPTION by @kaijchen in #527
* [ISSUE-524][operator] Upgrading rss could also be deleted by @advancedxy in #531
* [ISSUE-553] Avoid removing buffer multiple times when clearing resources by @xianjingfeng in #534
* [ISSUE-469][operator] feat: supports adding labels to rss pods. by @wangao1236 in #528
* [SpotBugs] Fix UWF_UNWRITTEN_PUBLIC_OR_PROTECTED_FIELD by @kaijchen in #536
* Result of mkdirs() is ignored in LocalFileWriteHandler#createBasePath() by @kaijchen in #537
* [Minor] Optimize ShuffleServerInfo#hashCode by @xianjingfeng in #538
* [SpotBugs] Enable SC_START_IN_CTOR check by @kaijchen in #541
* [operator] fix error kind of ownerreference by @wangao1236 in #540
* [ISSUE-542] Ensure the elements of StatusCode and RssProtos.StatusCode are the same by @xianjingfeng in #543
* Flaky Test: LowestIOSampleCostSelectStorageStrategyTest#selectStorageTest by @smallzhongfeng in #544
* [Improvement] Only report to the shuffle servers that owns the blocks by @zuston in #539
* [Minor] Cleanup "throws RuntimeException" by @kaijchen in #549
* [ISSUE-546] Replace ResponseStatusCode with StatusCode by @xianjingfeng in #547
* [ISSUE-476][FEATURE] Respect spark.shuffle.compress configuration in Uniffle by @zjf2012 in #495
* [ISSUE-545][operator] feat: support setting runtime class name and env for rss by @wangao1236 in #548
* [ISSUE #525][operator] refine svc creations by @advancedxy in #530
* [#552] docs: add more doc about spark.serializer requirement by @advancedxy in #556
* [#559] test: use withEnvironmentVariable to replace RssUtilsTest#setEnv by @advancedxy in #560
* [Followup #249] refactor: cleanup code and unify interfaces by @kaijchen in #558
* [#554] feat: infer rss base storage conf from env by @advancedxy in #555
* [MINOR] Remove commiters from collaborators by @jerqi in #563
* [#525][FOLLOWUP] fix: add omitempty tag by @advancedxy in #565
* [#545][FOLLOWUP] update rbac rule for webhook by @advancedxy in #566
* [#571] feat: skip init for empty writable base dir by @advancedxy in #573
* [#567] feat: add a shuffle-server metric about read_used_buffer_size by @zuston in #568
* [MINOR] test: fix assertion in tests by @kaijchen in #574
* [#575] refactor: replace switch-case with EnumMap in ComposedClientReadHandler by @kaijchen in #570
* [#580] chore: improve CI workflows by @kaijchen in #579
* [#410] feat: support the hot reload of coordinator's configuration by @jerqi in #572
* [MINOR] chore(deps): bump go-restful to 2.16.0 in operator by @dependabot in #577
* [#580] chore: move deploy/kubernetes to a standalone workflow by @kaijchen in #578
* [MINOR] refactor: simplify ShuffleWriteClientImpl#genServerToBlocks() by @kaijchen in #594
* [MINOR] chore: remove duplicated dependency in rss-client-mr by @kaijchen in #599
* [#580] chore: speed up CI workflows by @kaijchen in #602
* [MINOR] chore(operator): bump prometheus/client_golang to 1.11.1 by @dependabot in #601
* [MINOR] docs: correct the format of server_guide doc by @zuston in #608
* [FOLLOWUP] fix: don't recreate base dir if it's already existed by @advancedxy in #622
