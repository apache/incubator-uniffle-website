# Build Notes

## Build requirements

* Mac OS X or Linux
* JDK 1.8, 64-bit
* [Maven](https://maven.apache.org/)
  
## Building Uniffle
 
### Build Minimal

    mvn -DskipTests clean package

### Build against profile Spark2(2.4.6)

    mvn -DskipTests clean package -Pspark2

### Build against profile Spark3(3.1.2)

    mvn -DskipTests clean package -Pspark3

### Build against Spark 3.2.x, Except 3.2.0

    mvn -DskipTests clean package -Pspark3.2

### Build against Spark 3.2.0

    mvn -DskipTests clean package -Pspark3.2.0

### Build distribution

    ./build_distribution.sh

### Build distribution Spark 3.2.0

    ./build_distribution.sh --spark3-profile 'spark3.2.0'

### Build distribution Spark 3.2.x (Not 3.2.0)

    ./build_distribution.sh --spark3-profile 'spark3.2'

rss-xxx.tgz will be generated.