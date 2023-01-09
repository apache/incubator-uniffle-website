<!--
  ~ Licensed to the Apache Software Foundation (ASF) under one or more
  ~ contributor license agreements.  See the NOTICE file distributed with
  ~ this work for additional information regarding copyright ownership.
  ~ The ASF licenses this file to You under the Apache License, Version 2.0
  ~ (the "License"); you may not use this file except in compliance with
  ~ the License.  You may obtain a copy of the License at
  ~
  ~    http://www.apache.org/licenses/LICENSE-2.0
  ~
  ~ Unless required by applicable law or agreed to in writing, software
  ~ distributed under the License is distributed on an "AS IS" BASIS,
  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  ~ See the License for the specific language governing permissions and
  ~ limitations under the License.
  -->
  
## Introduction

 At the end of 2020,  Apache Uniffle (incubating) wrote his first line of code inside Tencent. It was open-sourced in November 2021, and was donated to the Apache Foundation in mid-2022. Since it was donated to the Apache Foundation, it attracted more developers from various companies. This article makes a brief summary of Apache Uniffle (incubating) 2022.

## Timeline
Apache Uniffle (Incubating) started the Apache incubator on June 6, 2022. As of the end of December 2022 (current writing time: 2022.12.26), a total of 157 new issues have been created (76 of which have been closed or resolved), and new 272 PRs (of which 264 were merged or closed).

Apache Uniffle (incubating) has released two versions in 2022: 0.6.0 and 0.6.1. Among them:
1. 2022.10.27: Version 0.6.0 released
2. 2022.11.30: Version 0.6.1 released
Version 0.6.0 is the first version released after Uniffle entered the Apache incubator. 
1. Optimizes the Coordinator's allocation mechanism
2. Optimizes the scheduling strategy for `Shuffle Server`
3. Optimizes performance and stability
4. Supports HDFS that requires Kerberos authentication
5. Supports the Uniffle K8S Operator, allowing it to be deployed and applied in a cloud-native environment.

Version 0.6.1 is an important bug fix version after version 0.6.0. It mainly fixes the following problems:
1. In the MR computing framework, when the number of reduce tasks exceeds 1024, the partition cannot be accessed
2. Concurrent registration of shuffle leads to failure to obtain shuffle results
3. Handle NPE in WriteBufferManager#addRecord
4. When there is a bad disk, there may be a memory leak
In addition to the above two released versions, local order is introduced in the current master branch to cope with the data skew optimization of Spark AQE. Compared with the unoptimized version, the performance is improved by 3 times.

## Community Building
Apache Uniffle (incubating) has added 22 contributors since entering the incubator, with a total of 33 contributors. Contributors come from Tencent, iQiyi, Ebay, Didi, SF Express, Baidu, Byte, JD.com, Bilibili, Databricks And other Internet companies. Among the 22 new contributors, Apache Uniffle (incubating) PMC voted to add 2 new committers according to their contribution. It is hoped that the two new Committers can contribute to Apache Uniffle in the next year (incubating) continuous contribution.

## Company Usage
According to the online/offline communication with contributors and users, Apache Uniffle (incubating) is currently in production and use in companies such as Tencent, iQiyi, Didi, SF Express, VIPShop, Blibli, etc. A amount of Shuffle data processed by Uniffle of many companies exceeds PB per day, and tens of thousands of apps are running. In addition to solving the stability and scalability problems of native Spark shuffle, it also improves the overall resource utilization.

## Project Plans
In 2023, Apache Uniffle (incubating) will continue to aim to provide an efficient and pervasive Shuffle Service. Currently, the following work is on the planning list:
1. A more complete calculation engine ecology
   - Support Tez computing framework
   - Support Flink computing framework
2. More complete storage media support:
   - Efficient support for object storage
   - HDD, SSD and other local hybrid storage support
3. Performance optimization:
   - Replace gRPC with Netty
   - Off-heap memory management, application of zero-copy technology, reducing data copying
4. More enterprise-level features:
   - Multi-tenant isolation related function development
   - Improved stability and reliability
