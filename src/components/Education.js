import React from 'react';
import styles from './ComponentStyles.module.css'; // A shared style file

const educationData = [
    {
        degree: "Bachelor's degree, Computer Science",
        institution: 'COMSATS Institute of Information and Technology',
        location: 'Islamabad, Pakistan',
        dates: '2015-2019'
    },
    {
        degree: 'Diploma of Associate Engineering in IT',
        institution: 'Rawalpindi Polytechnic Institute',
        location: 'Rawalpindi, Pakistan',
        dates: '2012-2015'
    }
];

function EducationItem({ degree, institution, location, dates }) {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.itemHeader}>
                <h3 className={styles.itemTitle}>{degree}</h3>
                <span className={styles.itemDates}>{dates}</span>
            </div>
            <h4 className={styles.itemSubtitle}>{institution} - {location}</h4>
        </div>
    );
}

export default function Education() {
    return (
        <section className={`${styles.section} ${styles.sectionGray}`}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Education</h2>
                 <div className={styles.timeline}>
                    {educationData.map((edu, idx) => (
                        <EducationItem key={idx} {...edu} />
                    ))}
                </div>
            </div>
        </section>
    );
}