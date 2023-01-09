import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Fast',
        description: (
            <>
                Reduces number of connections and random I/O in data shuffle.
            </>
        ),
    },
    {
        title: 'Reliable',
        description: (
            <>
                Reduces out of memory (or disk space) failures for large jobs.
            </>
        ),
    },
    {
        title: 'Disaggregated Storage',
        description: (
            <>
                Enables orchestration and improves resource utilization.
            </>
        ),
    },
    {
        title: 'Spark Support',
        description: (
            <>
                Supports Apache Spark 2.3.x, 2.4.x, 3.0.x, 3.1.x, 3.2.x.
            </>
        ),
    },
    {
        title: 'MapReduce Support',
        description: (
            <>
                Supports the MapReduce framework of Apache Hadoop 2.8.x.
            </>
        ),
    },
    {
        title: 'Kubernetes Integration',
        description: (
            <>
                Works well in containerized environments like Kubernetes.
            </>
        ),
    },
];

function Feature({title, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
