import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const currentTheme = document
      .querySelector("html")
      .getAttribute("data-theme");
    setTheme(currentTheme);

    const observer = new MutationObserver(() => {
      const updatedTheme = document
        .querySelector("html")
        .getAttribute("data-theme");
      setTheme(updatedTheme);
    });

    observer.observe(document.querySelector("html"), {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const backgroundStyle =
    theme === "dark"
      ? {
          backgroundImage:
            "url(https://cdn.prod.website-files.com/5ef0d72dc95490356f7ad90b/6422e128b344d0047e13da24_smaply3-grid.svg)",

          backgroundPosition: "0 0",
          backgroundSize: "108px 108px",
          backgroundAttachment: "fixed",
        }
      : { backgroundImage: "linear-gradient(#202030, #3d3d56)" };

  return (
    <header
      className={clsx("hero hero--primary", styles.heroBanner)}
      style={backgroundStyle}
    >
      <div className="container">
      <Heading
          as="h3"
          className={clsx("hero__title")}
        >
          Smaply 3.0
        </Heading>
        <Heading
          as="h1"
          className={clsx("hero__title", styles.hugeHeroTitle)}
        >
          Knowledge Center
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <p className={styles.introText}>
          Welcome to the Smaply Knowledge Center, your go-to resource for
          mastering customer journey mapping. Explore our guides, tips, and
          tutorials designed to help you get the most out of Smaply 3.0.
          Discover how Smaply can empower your team to collaborate effectively
          and drive meaningful improvements.
        </p>

        <div className={styles.buttons} style={{ marginTop: "40px" }}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            I'm ready to learn Smaply 3.0!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
