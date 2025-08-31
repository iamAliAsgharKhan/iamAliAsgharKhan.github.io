import React from 'react';
import styles from './ComponentStyles.module.css'; // A shared style file

const skillsData = {
    "Programming Languages": ["PHP", "Javascript", "Python"],
    "PHP Frameworks": ["Laravel"],
    "Python Frameworks and Libraries": ["Django", "Scikit-Learn", "Numpy", "Pandas", "Matplotlib"],
    "JS Frameworks and Libraries": ["ReactJS", "Jquery", "D3.js", "Three.js"],
    "Front-end Languages and Frameworks": ["HTML", "Sass", "CSS3", "Bootstrap", "Font Awesome"],
    "Dev Tools": ["Visual Studio Code", "Github", "Git", "Terminal", "Postman"],
    "CMS": ["Wordpress"],
    "Databases": ["MySQL", "MongoDB"]
};

function SkillCategory({ category, skills }) {
    return (
        <div className={styles.skillCategory}>
            <h3 className={styles.skillCategoryTitle}>{category}</h3>
            <div className={styles.skillTags}>
                {skills.map((skill, index) => (
                    <span key={index} className={styles.skillTag}>{skill}</span>
                ))}
            </div>
        </div>
    );
}


export default function Skills() {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Skills</h2>
                <div className={styles.skillsGrid}>
                    {Object.entries(skillsData).map(([category, skills], index) => (
                        <SkillCategory key={index} category={category} skills={skills} />
                    ))}
                </div>
            </div>
        </section>
    );
}