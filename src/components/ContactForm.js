import React from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  return (
    <section className={styles.contactSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Let's Connect</h2>
        
        <form id="contact-form" className={styles.contactForm} action="https://formspree.io/f/xrgdlwej" method="POST">
            
            <div className={styles.messages}></div> {/* This div is for Formspree success/error messages */}
            
            <div className={styles.row}>
                {/* Name Input */}
                <div className={styles.column}>
                    <div className={styles.formGroup}>
                        <input type="text" className={styles.formControl} name="InputName" id="InputName" placeholder="Your name" required />
                        <div className={styles.helpBlock}></div>
                    </div>
                </div>
                
                {/* Email Input */}
                <div className={styles.column}>
                    <div className={styles.formGroup}>
                        <input type="email" className={styles.formControl} id="InputEmail" name="InputEmail" placeholder="Email address" required />
                        <div className={styles.helpBlock}></div>
                    </div>
                </div>

                {/* Subject Input */}
                <div className={styles.column}>
                    <div className={styles.formGroup}>
                        <input type="text" className={styles.formControl} id="InputSubject" name="InputSubject" placeholder="Subject" required />
                        <div className={styles.helpBlock}></div>
                    </div>
                </div>
        
                {/* Message Textarea */}
                <div className={styles.fullWidthColumn}>
                    <div className={styles.formGroup}>
                        <textarea name="InputMessage" id="InputMessage" className={styles.formControl} rows="5" placeholder="Message" required></textarea>
                        <div className={styles.helpBlock}></div>
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <button type="submit" name="submit" id="submit" value="Submit" className={`button button--lg ${styles.submitButton}`}>
                Submit Message
            </button>
        </form>
      </div>
    </section>
  );
}