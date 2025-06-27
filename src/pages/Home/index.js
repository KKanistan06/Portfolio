import React from 'react';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../utils/constants';
import ScrollReveal from '../../components/ScrollReveal';
import './Home.scss';

const Home = () => {
  const SOCIAL_LINKS = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/your-profile',
      icon: 'linkedin'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/your-username',
      icon: 'github'
    },
    {
      name: 'Email',
      url: 'mailto:your-email@example.com',
      icon: 'email'
    }
  ];

  const handleCVDownload = () => {
  const modal = document.createElement('div');
  modal.className = 'cv-modal';
  modal.innerHTML = `
    <div class="cv-modal__content">
      <div class="cv-modal__header">
        <h3>Choose Resume Type</h3>
        <button class="cv-modal__close">&times;</button>
      </div>
      <div class="cv-modal__description">
        <p>Select the resume that best matches your requirements:</p>
      </div>
      <div class="cv-modal__buttons">
        <button class="cv-btn cv-btn--se" data-type="SE">
          <div class="cv-btn__icon">💻</div>
          <div class="cv-btn__content">
            <div class="cv-btn__title">Software Engineer</div>
            <div class="cv-btn__subtitle">Full-stack development & web technologies</div>
          </div>
        </button>
        <button class="cv-btn cv-btn--ml" data-type="ML">
          <div class="cv-btn__icon">🤖</div>
          <div class="cv-btn__content">
            <div class="cv-btn__title">Machine Learning</div>
            <div class="cv-btn__subtitle">AI & ML engineering</div>
          </div>
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Add event listeners
  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('cv-btn') || e.target.closest('.cv-btn')) {
      const button = e.target.closest('.cv-btn');
      const type = button.dataset.type;
      downloadCV(type);
      document.body.removeChild(modal);
    } else if (e.target.classList.contains('cv-modal__close') || e.target === modal) {
      document.body.removeChild(modal);
    }
  });

  // Add escape key listener
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      document.body.removeChild(modal);
      document.removeEventListener('keydown', handleEscape);
    }
  };
  document.addEventListener('keydown', handleEscape);
};

const downloadCV = (type) => {
  const link = document.createElement('a');
  link.href = `/cv/kanistan_resume_${type}.pdf`;
  link.download = `Kanesalingam_Kanistan_${type}_Resume.pdf`;
  link.click();
  
  // Optional: Track download analytics
  console.log(`Resume downloaded: ${type}`);
};


  const renderSocialIcon = (iconName) => {
    const icons = {
      linkedin: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      github: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      email: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z" />
        </svg>
      )
    };
    return icons[iconName] || null;
  };

  return (
    <section id="home" className="home section">
      <div className="home__container container">
        <motion.div
          className="home__content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ScrollReveal animation="fadeInLeft" delay={200}>
            <div className="home__text">
              <motion.h1
                className="home__name"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {PERSONAL_INFO.name}
              </motion.h1>

              <motion.div
                className="home__roles"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <span className="home__role-prefix">I'm a </span>
                <span className="home__role-dynamic">
                  <ReactTyped
                    strings={PERSONAL_INFO.roles}
                    typeSpeed={100}
                    backSpeed={50}
                    backDelay={2000}
                    loop
                    showCursor={true}
                    cursorChar="|"
                  />
                </span>
              </motion.div>

              <motion.p
                className="home__description"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Passionate about creating innovative solutions through code and machine learning.
                I build scalable applications and explore the frontiers of artificial intelligence.
              </motion.p>

              <motion.div
                className="home__actions"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <button
                  className="home__cv-btn"
                  onClick={handleCVDownload}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                  Download CV
                </button>

                <div className="home__social">
                  {SOCIAL_LINKS.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      className="home__social-link"
                      target={link.name !== 'Email' ? '_blank' : '_self'}
                      rel={link.name !== 'Email' ? 'noopener noreferrer' : ''}
                      aria-label={`Visit ${link.name}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {renderSocialIcon(link.icon)}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeInRight" delay={400}>
            <div className="home__image">
              <div className="home__hero-visual">
                <div className="home__floating-elements">
                  <div className="floating-circle floating-circle--1"></div>
                  <div className="floating-circle floating-circle--2"></div>
                  <div className="floating-circle floating-circle--3"></div>
                </div>
                <div className="home__profile-container">
                  {/* UPDATED: Replace with actual image */}
                  <div className="home__profile-image">
                    <img
                      src="/images/kanistan.jpg"
                      alt="Kanesalingam Kanistan"
                      className="home__profile-photo"
                      style={{
                        width: '280px',
                        height: '280px'
                      }}
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback placeholder */}
                    <div className="home__profile-placeholder" style={{ display: 'none' }}>
                      <span>KK</span>
                    </div>
                  </div>
                  <div className="home__profile-ring"></div>
                  <div className="home__profile-glow"></div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
