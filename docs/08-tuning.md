# Tuning Uniffle

## Local Disk

Normally HDD is recommended since the shuffle data is non-critical and temporary. You can skip this part if you do not care the cost of SSD.Uniffle's shuffle server is a typical I/O-intensive application, it's suggested to use multiple disks to amortize the IO and increase the total throughput.[RAID10](https://www.techtarget.com/searchstorage/definition/RAID-10-redundant-array-of-independent-disks) is strongly recommended to use to get lower latency, high throughput, and good fault tolerance, which consumes more space (twice), which is acceptable since we use HDD.

## Flush Threshold

One of the design principles of Uniffle is to handle both small and huge shuffles, therefore the shuffle server writes the small block to the local disk and the big block to the HDFS, and the threshold is configured by the parameter `rss.server.flush.cold.storage.threshold.size`. It is recommended to tune this parameter to make the ratio between the remote write total size and local write total size according to your workload and storage system's situation.

## Total buffer size

Uniffle use `rss.server.buffer.capacity` to constrait the memory consumed by the buffered shuffle data, however the memory used by the metadata is not controlled, and it is recommended to reserve a certain percentage of redundancy, for example 20%, in the the shuffler server's jvm process (`XMX_SIZE`) in additon to the total buffer (`rss.server.buffer.capacity` + `rss.server.read.buffer.capacity`).

## Partition num and spark write buffer size

Uniffle's spark client allocated buffer for each partition, and if the total memory used exceed the total buffer spill threshold (`spark.rss.writer.buffer.spill.size`) the client would send all the buffer data to the shuffle server, so it is recommmended to increase this threshold for the huge shuffle spark applications to avoid small network io.

## Multiple Remote Storage

Uniffle not only support multiple local disk but also supports using multiple remote storage with different configuration.
