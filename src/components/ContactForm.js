import React from 'react';
import styles from './ContactForm.module.css';

// Simple SVG Icon components for a clean look
const PhoneIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const EmailIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);


export default function ContactForm() {
  return (
    <section className={styles.contactSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Let's Connect</h2>

        {/* --- NEW CONTACT INFO SECTION --- */}
        <div className={styles.contactInfoWrapper}>
          <div className={styles.contactInfoItem}>
            <PhoneIcon className={styles.contactIcon} />
            <h3>Call me</h3>
            <p>
              <a href="tel:+923032360487">+92 303 2360487</a>
            </p>
          </div>
          <div className={styles.contactInfoItem}>
            <EmailIcon className={styles.contactIcon} />
            <h3>Email me</h3>
            <p>
              <a href="mailto:aliasgharforwork@gmail.com">aliasgharforwork@gmail.com</a>
            </p>
          </div>
        </div>
        {/* ----------------------------- */}

        <form id="contact-form" className={styles.contactForm} action="https://formspree.io/f/xrgdlwej" method="POST">
          {/* ... The rest of your form JSX remains unchanged ... */}
          <div className={styles.messages}></div>
          <div className={styles.row}>
            <div className={styles.column}><div className={styles.formGroup}><input type="text" className={styles.formControl} name="InputName" id="InputName" placeholder="Your name" required /></div></div>
            <div className={styles.column}><div className={styles.formGroup}><input type="email" className={styles.formControl} id="InputEmail" name="InputEmail" placeholder="Email address" required /></div></div>
            <div className={styles.column}><div className={styles.formGroup}><input type="text" className={styles.formControl} id="InputSubject" name="InputSubject" placeholder="Subject" required /></div></div>
            <div className={styles.fullWidthColumn}><div className={styles.formGroup}><textarea name="InputMessage" id="InputMessage" className={styles.formControl} rows="5" placeholder="Message" required></textarea></div></div>
          </div>
          <button type="submit" name="submit" id="submit" value="Submit" className={`button button--lg ${styles.submitButton}`}>
            Submit Message
          </button>
        </form>
      </div>
    </section>
  );
}