# Hardware Provision
A common question received by Uniffle users is how to configure hardware for it. While the right hardware will depend on the situation, we make the following recommendations.

## LOCAL DISKS
HDD or SSD is ok for Uniffle. We need to notice that we should provide enough quantity of disks for Uniffle. 
Usually HDD provide 100MB/s write speed we should guarantee that the data can be flushed to disks.
If our cluster applications write 1 GB/s in the busiest time, we should provide 10 HDD disks.

## MEMORY
We use the memory to reduce the random IO of write stage. If we have too many partitions, we will flush to small data to the disk.
It will influence the performance, we should guarantee that every partition's memory is bigger than 3MB. 
For example, if we have 1k partitions in our busiest time, we should provide 3 GB memory for them.

## NETWORK
In our experience, Uniffle are network-bound. Using a 10 Gigabit or higher network is the best way to make these applications faster.

## CPU CORES
Uniffle don't depend on the CPU too much. 
  
  