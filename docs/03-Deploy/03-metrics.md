# Metrics

Uniffle has provided many metrics information, which help to maintain the Uniffle cluster in production.

## Http Interface

Each coordinator or shuffle server has a http interface to get its metrics. 
We divide all metrics into four categories.

### coordinator-related metrics
```
curl http://[coordinatorIP]:[jettyPort]/metrics/server
```


### server-related metrics
```
curl http://[serverIp]:[jettyPort]/metrics/server
```

### grpc-related metrics
```
curl http://[coordinatorIP or serverIp]:[jettyPort]/metrics/grpc
```


### jvm-related metrics
```
curl http://[coordinatorIP or serverIp]:[jettyPort]/metrics/jvm
```