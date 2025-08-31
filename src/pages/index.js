// src/pages/index.js
import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useHistory } from '@docusaurus/router';
import styles from './index.module.css'; // We will create this CSS file
import WorkHistory from '../components/WorkHistory';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import ContactForm from '../components/ContactForm';
import useBaseUrl from '@docusaurus/useBaseUrl';


function HomepageHeader() {
  const history = useHistory();

  const handleContactClick = () => {
    // Smooth scroll to the form
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className={styles.heroTitle}>Ali Asghar</h1>
        <p className={styles.heroSubtitle}>
          Machine Learning Engineer & Creative Web Developer
        </p>
        <p className={styles.heroDescription}>
          I build intelligent, high-performance web applications and explore the frontiers of data. My work is a fusion of logic, creativity, and a relentless pursuit of knowledge.
        </p>
        <div className={styles.buttons}>
          <button
            className={`button button--lg ${styles.primaryButton}`}
            onClick={handleContactClick}>
            Get In Touch
          </button>

          <a
            className={`button button--lg ${styles.secondaryButton}`}
            href={useBaseUrl('/files/ali-asghar-resume.pdf')}
            download>
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Portfolio of ${siteConfig.title}`}
            description="Aliasghar Khan's Portfolio: Machine Learning and Web Development">
            <HomepageHeader />
            <main>
                <WorkHistory />
                <Education />
                <Skills />
                <Portfolio />
                <ContactForm />
            </main>
        </Layout>
    );
}