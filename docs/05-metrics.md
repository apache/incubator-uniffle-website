# Metrics System

In Uniffle, both coordinator and shuffle server have provided many runtime metrics, which help to maintain the Uniffle cluster in production.

We list a [script](https://github.com/apache/incubator-uniffle/blob/master/bin/get-metrics.py) to get these metrics via http protocol.

```
python get-metrics.py [serverListFile] [jettyPort] [metricName]
```

Extract server ip from line in the serverListFile, which contains lines of server node and the format is $IP-$PORT. 
The ip and port are server's rpc ip and port respectively, the port is useless here so we only extract the
ip and assemble the url with jetty http port to get metrics and extract the value of the metric specified by metricName.

See all available [server runtime metrics](https://github.com/apache/incubator-uniffle/blob/master/server/src/main/java/org/apache/uniffle/server/ShuffleServerMetrics.java).
 
See all available [server grpc metrics](https://github.com/apache/incubator-uniffle/blob/master/server/src/main/java/org/apache/uniffle/server/ShuffleServerGrpcMetrics.java).

See all available [coordinator runtime metrics](https://github.com/apache/incubator-uniffle/blob/master/coordinator/src/main/java/org/apache/uniffle/coordinator/CoordinatorMetrics.java).

See all available [coordinator grpc metrics](https://github.com/apache/incubator-uniffle/blob/master/coordinator/src/main/java/org/apache/uniffle/coordinator/CoordinatorMetrics.java).