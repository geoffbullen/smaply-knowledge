import React from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const videoUrl = "https://www.youtube.com/embed/jbwQI-OFRqY";

function HomepageVideo() {
  return (
    <section className={styles.videoSection}>
      <Heading as="h2" className={styles.videoTitle}>
        New to Smaply 3.0?
      </Heading>
      <h3
        className={styles.introText}
        style={{ maxWidth: "1200px", marginInline: "auto", fontWeight: 100 }}
      >
        A 10 minute walkthrough from our founder Marc of how to get
        started and the core features that will help you become a Smaply pro
        before you know it.
      </h3>
      <div className={styles.buttons} style={{ marginTop: "40px" }}>
        <Link
          className="button button--secondary button--lg blue"
          to="/docs/documentation/general/journey-management"
        >
          Take me to the guides
        </Link>
      </div>

      <div className={styles.videoWrapper} style={{ marginTop: "50px" }}>
        <iframe
          width="480"
          height="270"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default HomepageVideo;
