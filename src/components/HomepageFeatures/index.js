import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Intuitive Interface',
    Svg: require('@site/static/img/smaply-logo-with-name.svg').default,
    description: (
      <>
        Smaply 3.0 offers an intuitive interface designed to make journey mapping simple and effective, with easy-to-use tools and features.
      </>
    ),
  },
  {
    title: 'Collaborative Environment',
    Svg: require('@site/static/img/smaply-logo-with-name.svg').default,
    description: (
      <>
        Enhance team collaboration by sharing and working on journey maps together in real-time, ensuring everyone is on the same page.
      </>
    ),
  },
  {
    title: 'Comprehensive Insights',
    Svg: require('@site/static/img/smaply-logo-with-name.svg').default,
    description: (
      <>
        Gain deep insights into your customer journeys with advanced analytics and reporting features, helping you make data-driven decisions.
      </>
    ),
  },
  {
    title: 'Comprehensive Insights',
    Svg: require('@site/static/img/smaply-logo-with-name.svg').default,
    description: (
      <>
        Gain deep insights into your customer journeys with advanced analytics and reporting features, helping you make data-driven decisions.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
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

export default function HomepageFeatures() {
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
