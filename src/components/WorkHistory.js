import React from 'react';
import styles from './ComponentStyles.module.css'; // A shared style file

const experienceData = [
    {
        company: 'Ah Game Studio',
        location: 'Rawalpindi',
        role: 'Full Stack Developer',
        dates: 'Dec 2021 – Feb 2024',
        description: 'Maintained and tested several mid-size monolith web applications and added features upon changing requirements. Responsible for developing full stack applications using Laravel and Django, debugging systems, managing large databases, implementing APIs, and ensuring the seamless integration of new features into existing systems.'
    },
    {
        company: 'DexterCode LLC',
        location: 'Islamabad',
        role: 'Full Stack Developer',
        dates: 'Nov 2020 - Jan 2021',
        description: 'Worked as a full stack developer using Laravel, Codeigniter and VueJS frameworks. I developed valuable commercial applications that served thousands of people, ranging from music web applications to e-commerce centric ones.'
    },
    {
        company: 'Creative Tech Ltd',
        location: 'Islamabad',
        role: 'Full Stack Developer',
        dates: 'Aug 2020 - Nov 2020',
        description: 'Hired as a full stack web developer, I maintained and tested several mid-size monolith web applications and added features upon changing requirements.'
    },
    {
        company: 'Shades',
        location: 'Bahria Town, Rawalpindi',
        role: 'Full Stack Developer',
        dates: 'Apr 2020 - Aug 2020',
        description: 'Employed as a full stack web developer, my responsibilities were developing, testing and deploying small business-oriented web applications for local to international clients.'
    }
];

function ExperienceItem({ company, location, role, dates, description }) {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.itemHeader}>
                <h3 className={styles.itemTitle}>{role}</h3>
                <span className={styles.itemDates}>{dates}</span>
            </div>
            <h4 className={styles.itemSubtitle}>{company} - {location}</h4>
            <p className={styles.itemDescription}>{description}</p>
        </div>
    );
}


export default function WorkHistory() {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Experience</h2>
                <div className={styles.timeline}>
                    {experienceData.map((exp, idx) => (
                        <ExperienceItem key={idx} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
}