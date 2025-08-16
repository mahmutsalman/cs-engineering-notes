import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Programming & Algorithms',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Deep dive into <strong>Java</strong>, <strong>JavaScript</strong>, and <strong>Apex</strong> fundamentals, 
        data structures, algorithms, and problem-solving techniques. 
      </>
    ),
  },
  {
    title: 'AI & Machine Learning',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Exploring artificial intelligence concepts, machine learning algorithms, 
        and practical implementations. Sharing insights from research papers, 
        experiments, and real-world <strong>AI applications</strong>.
      </>
    ),
  },
  {
    title: 'Learning Journey',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Documenting my continuous learning path in computer science. 
        Research paper summaries, coding challenges, project insights, 
        and knowledge discoveries shared for fellow learners.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
