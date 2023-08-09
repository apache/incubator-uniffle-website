<!--
  ~ Licensed to the Apache Software Foundation (ASF) under one or more
  ~ contributor license agreements.  See the NOTICE file distributed with
  ~ this work for additional information regarding copyright ownership.
  ~ The ASF licenses this file to You under the Apache License, Version 2.0
  ~ (the "License"); you may not use this file except in compliance with
  ~ the License.  You may obtain a copy of the License at
  ~
  ~    http：//www.apache.org/licenses/LICENSE-2.0
  ~
  ~ Unless required by applicable law or agreed to in writing, software
  ~ distributed under the License is distributed on an "AS IS" BASIS,
  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  ~ See the License for the specific language governing permissions and
  ~ limitations under the License.
  -->
# Apache Uniffle (incubating) - 2022 年终总结
  
## 引言

2020 年底，Apache Uniffle (incubating) 在腾讯内部写下了他的第一行代码，21 年 11 月份对外开源，22 年中被捐献给了 Apache 基金会。自被捐献给了 Apache 基金会后，它吸引了较多来自各个公司的开发者。本文瑾对 Apache Uniffle (incubating) 2022 做个简单的小结。

## 时间线
Apache Uniffle (Incubating) 于 2022 年 6 月 6 日进行 Apache 孵化器，截止到 2022 年 12 月底 (当前写作时间：2022.12.26)，共新建了 157 个 Issue (其中 76 个被关闭或者解决)， 新增了 272 个 PRs (其中 264 个被合入或者关闭)。

Apache Uniffle (incubating) 2022 年共发布了两个版本：0.6.0 和 0.6.1。 其中：
1. 2022.10.27：0.6.0 版本发布
2. 2022.11.30：0.6.1 版本发布

0.6.0 版本是 Uniffle 进入到 Apache 孵化器后发布的第一个版本，它包括以下特点：
1. 优化了 Coordinator 的分配机制
2. 优化了 `Shuffle Server` 的调度策略
3. 优化了性能和稳定性，
4. 支持了需 Kerberos 验证的 HDFS
5. 支持了 Uniffle K8S Operator，让其在可在云原生环境进行部署和应用。

0.6.1 版本是 0.6.0 版本之后的一个重要的 bug fix 版本，它主要修复了如下几个问题：
1. MR 计算框架中，当 reudce task 个数超过 1024 时，partition 无法被访问的问题
2. 并发注册 shuffle 导致了获取 shuffle 结果失败
3. 在 WriteBufferManager#addRecord 处理 NPE
4. 对于存在坏盘时，可能存在的内存泄漏

除上述已发布的两个版本，当前 master 分支中，引入了 local order，以应对 Spark AQE 的数据倾斜优化，相比于未优化版本，性能提升 3 倍。

## 社区运营情况
Apache Uniffle (incubating) 自进入孵化器以来，增加了贡献者22人，共有贡献者33人，贡献者来自腾讯，爱奇艺，Ebay，滴滴，顺丰，百度，字节，京东，B站，Databricks等互联网公司。在新增的 22 名贡献者中，Apache Uniffle (incubating) PMC 根据贡献度, 投票选择了新增了2名 committer。希望两位新增 Committer 可以在接下来的一年对 Apache Uniffle (incubating) 持续贡献。

## 使用情况
根据跟贡献者和使用者的线上/线下沟通交流，当前 Apache Uniffle (incubating) 在腾讯，爱奇艺，滴滴，顺丰，维品会，B 站，货拉拉等公司均有生产使用。多家公司 Uniffle 处理的 Shuffle 数据量日均超过 PB，运行的 App 数过万。其使用的场景除解决原生 shuffle 的稳定性/扩展性问题外，也为了满足存算分离的计算资源，提升整体资源的利用率。

## 后续规划
在 2023 年，Apache Uniffle(incubating) 将继续以提供高效，普适的 Shuffle Service 为目标。目前有如下的工作在规划列表中：
1. 更完整地计算引擎生态：
   - 支持 Tez 计算框架
   - 支持 Flink 计算框架
2. 更完备地存储介质支持：
   - 高效支持对象存储
   - HDD, SSD 等本地混合存储支持
3. 性能优化：
   - 使用 Netty 替换 gRPC
   - Off-heap 内存管理, 应用 zero-copy技术, 减少数据拷贝
4. 更多的企业级特性：
   - 多租户隔离相关功能开发
   - 稳定性和可靠性提升
