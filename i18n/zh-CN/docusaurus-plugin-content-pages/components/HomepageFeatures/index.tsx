import React from 'react';
import clsx from 'clsx';
import styles from '../../../../../src/components/HomepageFeatures/styles.module.css';

type FeatureItem = {
    title: string;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: '快速',
        description: (
            <>
                减少数据 shuffle 过程中的连接数和随机 I/O。
            </>
        ),
    },
    {
        title: '可靠',
        description: (
            <>
                减少大型任务中出现内存（或磁盘空间）不足的故障。
            </>
        ),
    },
    {
        title: '弹性',
        description: (
            <>
                支持编排和提高资源利用率。
            </>
        ),
    },
    {
        title: 'Spark 支持',
        description: (
            <>
                支持 Apache Spark 2.3.x, 2.4.x, 3.0.x, 3.1.x, 3.2.x, 3.3.x。
            </>
        ),
    },
    {
        title: 'MapReduce/Tez 支持',
        description: (
            <>
                支持 Apache Hadoop 2.8.x, 3.2.x 和 Apache Tez 0.9.1 的 MapReduce 架构
            </>
        ),
    },
    {
        title: 'Kubernetes Operator',
        description: (
            <>
                扩展 Kubernetes API 从而可以创建、配置和管理 Uniffle 实例。
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
