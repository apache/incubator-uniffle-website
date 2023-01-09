---
title: Release Notes 0.6.1
sidebar_position: 2
--- 

# Release Note

## Highlight

- Major bug fixes
  * Partition cannot be accessed in MapReduce when the reduce task number exceeds 1024.
  * Get shuffle result failure caused by concurrent calls to registerShuffle.
  * Inconsistent blocks caused by missing length in RssUtils#transIndexDataToSegments.
  * Handle NPE in WriteBufferManager#addRecord in the same way as Spark.
  * AbstractStorage#containsWriteHandler is checking the wrong Map.
  * `indexWriter` isn't closed if exception is thrown when closing dataWriter.
  * Incorrect dependency of protobuf-java at compile time.
  * Potential memory leak when encountering disk unhealthy.

- Minor bug fixes
  * Potenial missing reads of exclude nodes.
  * Incorrect contributing link in pull-request template.
  * Incorrect spark metrics.

## ChangeLog

* [ISSUE-257] RssMRUtils#getBlockId change the partitionId of int type to long (#266)
* [ISSUE-273][BUG] Get shuffle result failed caused by concurrent calls to registerShuffle (#274)
* Fix potenial missing reads of exclude nodes (#269)
* [ISSUE-239][BUG] RssUtils#transIndexDataToSegments should consider the length of the data file (#275)
* Fix NPE in WriteBufferManager.addRecord (#296)
* Fix AbstractStorage#containsWriteHandler (#281)
* Correct the pull-request contributing link in template (#314)
* [BUG] Fix incorrect spark metrics (#324)
* [ISSUE-364] Fix `indexWriter` don't close if exception thrown when close dataWriter (#349)
* [ISSUE-228] Fix the problem of protobuf-java incorrect dependency at compile time (#362)
* Bump project version to 0.6.1
* [BUG] Potenial memory leak when encountering disk unhealthy (#370)
