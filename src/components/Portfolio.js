import React, { useState, useEffect } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './Portfolio.module.css';

// Your project data remains the same
const webProjectsData = [
    { title: 'Job Portal', link: '#', imageUrl: '/img/portfolio/jobportal-min.png', description: `I developed a full-stack web application for a job portal that facilitates connections between job seekers and employers... Please note, the link is disabled due to a Non-Disclosure Agreement (NDA).` },
    { title: '24/7 Mixtapes', link: 'https://www.247mixtapes.com/', imageUrl: '/img/portfolio/247mixtape.png', description: 'I developed this web application in Laravel that allows users to download, stream, and upload free music. It has a Premium Membership area based on a monthly/yearly subscription model.' },
    { title: 'MixFix - Fleet/Courier Management', link: 'https://www.midfix.co.uk/', imageUrl: '/img/portfolio/midfix.png', description: 'A UK-based company required a fleet management internal web app that they needed for the shipment of material and accounting.' },
    { title: 'Black Diamond - The Express Riches', link: 'https://www.blackdiamondclub.co.uk/', imageUrl: '/img/portfolio/blackdiamondclub.png', description: 'Developed this membership-based Web App in Laravel for the client with a heavy emphasis on profit tracking and a referral system.' },
    { title: 'Pclub - For Professional Photography', link: 'https://pclub.com.sa/', imageUrl: '/img/portfolio/pclub.png', description: 'I developed this webstore and specifically its backend for my international client for providing quality equipment for professional photography.' },
    { title: 'Marktplaats - Marketplace', link: 'https://www.marktplaats.nl/', imageUrl: '/img/portfolio/Marktplaats.png', description: 'Worked on this marketplace, made improvements to its UI, payment, scroll, bundle, and search features.' },
    { title: 'Gerry Music - Royalty Free Music', link: 'https://www.gerrymusic.com/', imageUrl: '/img/portfolio/gerrymusic.png', description: 'Redesigned the front-end and made additional payment processors for membership subscription along with improving security.' },
    { title: 'NATUREAL', link: 'https://www.natu-real.com', imageUrl: '/img/portfolio/natureal.png', description: 'A dietary supplement store I made with WordPress with a main focus on the integration of multiple couriers and their complex shipping calculations. (P.S. This was before they migrated to Shopify).' },
];

// The Modal component remains exactly the same
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
        {project.link && project.link !== '#' && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className={`button button--primary ${styles.modalLink}`}>
            Visit Site
          </a>
        )}
      </div>
    </div>
  );
}


// --- Main Portfolio Component (with "Load More" logic) ---
export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  
  // --- NEW: State for controlling how many items are visible ---
  const [visibleCount, setVisibleCount] = useState(4); // Initially show 4 items

  const webProjects = webProjectsData.map(project => ({
    ...project,
    resolvedImageUrl: useBaseUrl(project.imageUrl),
  }));
  
  // --- NEW: Function to handle the "Load More" button click ---
  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 4); // Show 4 more items
  };

  return (
    <>
      <section className={styles.portfolioSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Portfolio</h2>
          <Tabs>
            <TabItem value="web" label="Web Development" default>
              <div className={styles.projectGrid}>
                {/* --- CHANGED: Use slice() to show only a portion of the projects --- */}
                {webProjects.slice(0, visibleCount).map((project, idx) => (
                  <div key={idx} className={styles.projectCard} onClick={() => setSelectedProject(project)}>
                    <img src={project.resolvedImageUrl} alt={project.title} className={styles.projectImage} />
                    <div className={styles.projectMask}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* --- NEW: Conditionally render the "Load More" button --- */}
              {visibleCount < webProjects.length && (
                <div className={styles.loadMoreContainer}>
                  <button className={`button button--secondary button--lg ${styles.loadMoreButton}`} onClick={loadMore}>
                    Load More
                  </button>
                </div>
              )}

            </TabItem>
            <TabItem value="ml" label="Machine Learning">
              <p className={styles.placeholderText}>
                My machine learning projects will be showcased here soon. Stay tuned for exciting developments in this space.
              </p>
            </TabItem>
          </Tabs>
        </div>
      </section>
      
      <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}