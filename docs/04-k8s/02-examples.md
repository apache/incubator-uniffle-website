# Examples

We need to create configMap first which saves coordinators, shuffleServers and log4j's configuration(we can refer
to [configuration](https://github.com/apache/incubator-uniffle/tree/master/deploy/kubernetes/operator/examples/configuration.yaml)).

Coordinator is a stateless service, when upgrading, we can directly update the configuration and then update the image.

Shuffle server is a stateful service, and the upgrade operation is more complicated, so we show examples of different
upgrade modes.
- [Full Upgrade](https://github.com/apache/incubator-uniffle/tree/master/deploy/kubernetes/operator/examples/full-upgrade)
- [Full Restart](https://github.com/apache/incubator-uniffle/tree/master/deploy/kubernetes/operator/examples/full-restart)
- [Partition Upgrade](https://github.com/apache/incubator-uniffle/tree/master/deploy/kubernetes/operator/examples/partition-upgrade)
- [Specific Upgrade](https://github.com/apache/incubator-uniffle/tree/master/deploy/kubernetes/operator/examples/specific-upgrade)
