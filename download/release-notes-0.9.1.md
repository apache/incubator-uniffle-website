---
title: Release Notes 0.9.1
sidebar_position: 993
---

# Uniffle Release 0.9.1

## Highlight

- Optimized dashboard.
- Optimized or fixed logs, startup scripts, compilation scripts, etc.
- Reduce block id layout limitations and simplify layout configuration for MR/Tez.

## ChangeLog

* [MINOR] fix(client/netty): ShuffleServerGrpcNettyClient missing to send shuffleId and partitionIds for requirePreAllocation request (#2053)
* [#1398] fix(mr)(tez): Make attempId computable and move it to taskAttemptId in BlockId layout. (#2027)
* [MINOR] docs: Fix docs yaml parse error about dashboard_guide.md (#1981)
* [MINOR] fix(test): fix flaky test ServletTest.testUnhealthyNodesServlet (#1952)
* [MINOR] fix(test): fix flaky test ShuffleServerOnRandomPortTest (#1953)
* [#1910] fix: Remove the method name from the log (#1911)
* [MINOR] Improvement(dashboard): Support display human-readable time format for app page (#2011)
* [MINOR] improvement(client): Rename rss.shade.packageName from org.apache.uniffle to org.apache.uniffle.shaded (#1883)
* replace netcat to netcat-openbsd in Dockerfile (#1950)
* [#1982] fix(build): specify maven.compiler.release while JDK version greater than 8 (#1983)
* [#1149][FOLLOWUP] fix(coordinator): Fix coordinator startup issues (#1902)
* [#1826][FOLLOWUP] fix(build): Revert incorrect shift statements deletion in build_distribution.sh (#1830)
* [#1818] fix(spark3): Avoid calling RssShuffleDataIterator.cleanup multiple times (#1819)
* [MINOR] fix(docs) Correct the example of decommission interface (#1777)
* [#1699][FOLLOWUP] fix(client): Add commons-collections4 dependencies in shaded clients (#1742)
* [MINOR] fix(dashboard): Display the registration time in 24-hour format (#1752)
* [#1743] fix: Add exception handling for thread pools (#1744)
* [#1698][FOLLOWUP] fix(test): Adjust jvm opts to increase stability of tests (#1739)
* [#1698] fix(test): Increase tests running memory for better stability (#1726)
