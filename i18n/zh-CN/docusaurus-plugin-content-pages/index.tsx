import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from './components/HomepageFeatures';

import styles from '../../../src/pages/index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">Apache Uniffle 是一个适用于分布式计算引擎的高性能、通用型的远程 shuffle 服务。</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            开始文档
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/apache/incubator-uniffle">
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="主页"
      description="Apache Uniffle 是一个适用于分布式计算引擎的高性能、通用型的远程 shuffle 服务。">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
