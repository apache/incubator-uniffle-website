---
title: Release Notes 0.7.1
sidebar_position: 998
---

# Uniffle Release 0.7.1

## Highlight

- Improvements
  * Refresh application when reading memory data to prevent application from being expired.

- Major bug fixes
  * Cache proxy user ugi to avoid memory leak.
  * Make metric reporter usable by fixing some logic errors.
  * Close ShuffleWriteClient after task was completed to exit container process.
  * Make sure 'finishShuffle' invoked after all shuffle data sent.
  * Update local storage metadata for all related events instead of just the first event.
  * Correct a wrong metric, grpc_server_connection_number.

- Minor bug fixes
  * Avoid returning null in defaultUserApps when quote file doesn't config user.
  * Fix LocalStorageManager divide by zero exception.

## ChangeLog

* [ISSUE-669] improvement: refresh application when reading memory data (#741)
* Bump project version to 0.7.1-SNAPSHOT
* [ISSUE-772] fix(kerberos): cache proxy user ugi to avoid memory leak (#773)
* Revert "[ISSUE-772] fix(kerberos): cache proxy user ugi to avoid memory leak (#773)
* [ISSUE-796][0.7] bug: Fix the issues of MetricReporter (#821)
* [MINOR][0.7] Avoid returning null in defaultUserApps when quota file doesn't config user (#822)
* [ISSUE-772] fix(kerberos): cache proxy user ugi to avoid memory leak (#773)
* Revert "[ISSUE-772] fix(kerberos): cache proxy user ugi to avoid memory leak (#773)
* [ISSUE-772][0.7] fix(kerberos): cache proxy user ugi to avoid memory leak (#773)
* [ISSUE-715] fix(mr): The container does not exit because shuffleclient is not closed (#882)
* [ISSUE-886] fix(mr): MR Client may lose data or throw exception when rss.storage.type without MEMORY (#887)
* Revert "[ISSUE-886] fix(mr): MR Client may lose data or throw exception when rss.storage.type without MEMORY (#887)
* [MINOR] fix: Fix LocalStorageManager divide by zero exception (#900)
* [ISSUE-881][0.7] fix(followup): Ensure LocalStorageMeta disk size is correctly updated when events are processed for 0.7.0 (#914)
* [ISSUE-933][0.7] fix: incorrect metric grpc_server_connection_number (#941)
* change version to 0.7.1 release
