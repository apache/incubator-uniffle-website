import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'What is Apache Uniffle(Incubating)',
        description: (
            <>
                Apache Uniffle(Incubating) is a Remote Shuffle Service, and provides the capability for Apache Spark applications to store shuffle data on remote servers.
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
