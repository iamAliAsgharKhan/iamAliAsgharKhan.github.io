import React, { useState, useEffect } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './Portfolio.module.css';

// --- Data for Web Development Projects ---
const webProjectsData = [
    {
        title: 'Job Portal',
        link: '#',
        imageUrl: '/img/portfolio/jobportal-min.png',
        description: `I developed a full-stack web application for a job portal that facilitates connections between job seekers and employers. I was responsible for building complex search functionalities, profile management, media management, job applications, and tracking systems. I also integrated Google Maps API for location-based services and established seamless database connectivity. Please note, the link is disabled due to a Non-Disclosure Agreement (NDA).`,
    },
    {
        title: '24/7 Mixtapes',
        link: 'https://www.247mixtapes.com/',
        imageUrl: '/img/portfolio/247mixtape.png',
        description: 'I developed this web application in Laravel that allows users to download, stream, and upload free music. It has a Premium Membership area based on a monthly/yearly subscription model.',
    },
    {
        title: 'MixFix - Fleet/Courier Management',
        link: 'https://www.midfix.co.uk/',
        imageUrl: '/img/portfolio/midfix.png',
        description: 'A UK-based company required a fleet management internal web app that they needed for the shipment of material and accounting.',
    },
    {
        title: 'Black Diamond - The Express Riches',
        link: 'https://www.blackdiamondclub.co.uk/',
        imageUrl: '/img/portfolio/blackdiamondclub.png',
        description: 'Developed this membership-based Web App in Laravel for the client with a heavy emphasis on profit tracking and a referral system.',
    },
    {
        title: 'Pclub - For Professional Photography',
        link: 'https://pclub.com.sa/',
        imageUrl: '/img/portfolio/pclub.png',
        description: 'I developed this webstore and specifically its backend for my international client for providing quality equipment for professional photography.',
    },
    {
        title: 'Marktplaats - Marketplace',
        link: 'https://www.marktplaats.nl/',
        imageUrl: '/img/portfolio/Marktplaats.png',
        description: 'Worked on this marketplace, made improvements to its UI, payment, scroll, bundle, and search features.',
    },
    {
        title: 'Gerry Music - Royalty Free Music',
        link: 'https://www.gerrymusic.com/',
        imageUrl: '/img/portfolio/gerrymusic.png',
        description: 'Redesigned the front-end and made additional payment processors for membership subscription along with improving security.',
    },
    {
        title: 'NATUREAL',
        link: 'https://www.natu-real.com',
        imageUrl: '/img/portfolio/natureal.png',
        description: 'A dietary supplement store I made with WordPress with a main focus on the integration of multiple couriers and their complex shipping calculations. (P.S. This was before they migrated to Shopify).',
    },
];

// --- Data for Machine Learning Projects ---
const mlProjectsData = [
    {
        title: 'Cognita: Conversational AI for Obsidian Notes',
        link: 'https://github.com/iamAliAsgharKhan/Cognita',
        imageUrl: '/img/portfolio/cognita/screenshot1.png',
        description: `A sophisticated, conversational AI web application that allows you to chat with your local Obsidian notes. It uses Retrieval-Augmented Generation (RAG) to provide contextually-aware answers, backed by a persistent vector database and powered by the high-speed Groq LLM API.`,
        features: [
            'Conversational Chat Interface',
            'Persistent Vector Storage with Chroma DB',
            'Dynamic Embedding Model Selection',
            'Configurable Source Directory',
            'Source-Aware Responses (Citations)',
            'Real-time Re-indexing via UI',
        ],
        techStack: [
            'FastAPI', 'Groq', 'Chroma DB', 'Sentence Transformers', 'Vanilla JS'
        ],
    },
];

// --- Sub-component for the Modal (Upgraded to show more detail) ---
function Modal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <img src={project.resolvedImageUrl} alt={project.title} className={styles.modalImage} />
        <h2 className={styles.modalTitle}>{project.title}</h2>
        <p className={styles.modalDescription}>{project.description}</p>

        {/* Conditionally render Key Features if they exist */}
        {project.features && (
            <>
                <h3 className={styles.modalSubtitle}>Key Features</h3>
                <ul className={styles.featuresList}>
                    {project.features.map((feature, i) => <li key={i}>{feature}</li>)}
                </ul>
            </>
        )}

        {/* Conditionally render Tech Stack if it exists */}
        {project.techStack && (
            <>
                <h3 className={styles.modalSubtitle}>Tech Stack</h3>
                <div className={styles.techStack}>
                    {project.techStack.map((tech, i) => <span key={i} className={styles.techTag}>{tech}</span>)}
                </div>
            </>
        )}
        
        {project.link && project.link !== '#' && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className={`button button--primary ${styles.modalLink}`}>
            {project.techStack ? "View on GitHub" : "Visit Site"}
          </a>
        )}
      </div>
    </div>
  );
}

// --- Main Portfolio Component (with "Load More" logic and ML projects) ---
export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4); // Initially show 4 web items

  // Process Web Projects
  const webProjects = webProjectsData.map(project => ({
    ...project,
    resolvedImageUrl: useBaseUrl(project.imageUrl),
  }));
  
  // Process ML Projects
  const mlProjects = mlProjectsData.map(project => ({
      ...project,
      resolvedImageUrl: useBaseUrl(project.imageUrl),
  }));

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  return (
    <>
      <section className={styles.portfolioSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Portfolio</h2>
          <Tabs>
            <TabItem value="web" label="Web Development" default>
              <div className={styles.projectGrid}>
                {webProjects.slice(0, visibleCount).map((project, idx) => (
                  <div key={idx} className={styles.projectCard} onClick={() => setSelectedProject(project)}>
                    <img src={project.resolvedImageUrl} alt={project.title} className={styles.projectImage} />
                    <div className={styles.projectMask}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                    </div>
                  </div>
                ))}
              </div>

              {visibleCount < webProjects.length && (
                <div className={styles.loadMoreContainer}>
                  <button className={`button button--secondary button--lg ${styles.loadMoreButton}`} onClick={loadMore}>
                    Load More
                  </button>
                </div>
              )}
            </TabItem>
            
            <TabItem value="ml" label="Machine Learning">
              <div className={styles.projectGrid}>
                  {mlProjects.map((project, idx) => (
                      <div key={idx} className={styles.projectCard} onClick={() => setSelectedProject(project)}>
                          <img src={project.resolvedImageUrl} alt={project.title} className={styles.projectImage} />
                          <div className={styles.projectMask}>
                              <h3 className={styles.projectTitle}>{project.title}</h3>
                          </div>
                      </div>
                  ))}
              </div>
            </TabItem>
          </Tabs>
        </div>
      </section>
      
      <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}