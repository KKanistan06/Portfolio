import React, { useState, useEffect } from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import SectionBackground from '../../components/SectionBackground';
import Card3D from '../../components/Card3D';
import './About.scss';

const About = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem('portfolio-visited');
    if (!visited) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleModalClose = () => {
    setShowModal(false);
    localStorage.setItem('portfolio-visited', 'true');
  };

  const handleLinkedInConnect = () => {
    window.open('https://linkedin.com/in/your-profile', '_blank');
    handleModalClose();
  };

  const personalStats = [
    { label: "Years of Experience", value: "1+", icon: "🚀" },
    { label: "Projects Completed", value: "10+", icon: "💼" },
    { label: "Technologies Mastered", value: "15+", icon: "⚡" },
    { label: "Coffee Consumed", value: "∞", icon: "☕" }
  ];

  const education = [
    {
      degree: "Bachelor of Science of Engineering",
      university: "University of Jaffna",
      duration: "April 2022 - Present",
      grade: "GPA: 3.6/4.0",
      icon: "🎓",
      color: "#FF6B6B"
    }
  ];

  const experience = [
    {
      role: "Web Developer",
      company: "Ravana Industrial",
      duration: "June2024 - February 2025",
      description: "Developing scalable web applications and ERP systems designed to streamline business processes",
      achievements: ["Collaborated with cross-functional teams", "Improved app performance by 20%", "Customized ERP modules"],
      icon: "💻",
      color: "#4ECDC4"
    },
    {
      role: "Web Developer trainee",
      company: "Ravana Industrial",
      duration: "March 2024 - June 2024",
      description: "Worked on Wordpress and Elementor projects",
      achievements: ["Developed custom Plugins", "Designed responsive layouts", "Optimized site performance"],
      icon: "🤖",
      color: "#45B7D1"
    }
  ];

  const interests = [
    { name: "Machine Learning", icon: "🧠", description: "Exploring AI frontiers" },
    { name: "Web Development", icon: "🌐", description: "Building modern experiences" },
    { name: "Open Source", icon: "🔓", description: "Contributing to community" },
    { name: "Photography", icon: "📸", description: "Capturing moments" },
    { name: "Gaming", icon: "🎮", description: "Strategic thinking" },
    { name: "Travel", icon: "✈️", description: "Exploring cultures" }
  ];

  return (
    <SectionBackground sectionName="about">
      <section id="about" className="about section">
        <div className="about__lighting-effects">
          <div className="about__light about__light--1"></div>
          <div className="about__light about__light--2"></div>
          <div className="about__light about__light--3"></div>
          <div className="about__floating-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`about__particle about__particle--${(i % 3) + 1}`}></div>
            ))}
          </div>
        </div>

        <div className="about__container container">
          <ScrollReveal animation="fadeInUp">
            <div className="about__header">
              <h2 className="about__title">About Me</h2>
              <p className="about__subtitle">Get to know the person behind the code</p>
              <div className="about__title-decoration">
                <div className="about__title-line"></div>
                <div className="about__title-dot"></div>
                <div className="about__title-line"></div>
              </div>
            </div>
          </ScrollReveal>

          <div className="about__content">
            <ScrollReveal animation="fadeInUp" delay={200}>
              <Card3D className="about__intro" intensity={10}>
                <div className="about__intro-content">
                  <div className="about__intro-avatar">
                    <div className="about__avatar-container">
                      <div className="about__avatar-glow"></div>
                      {/* UPDATED: Replace with actual image */}
                      <div className="about__avatar-image">
                        <img 
                          src="/images/Kani.png" 
                          alt="Kanesalingam Kanistan"
                          className="about__avatar-photo"
                          onError={(e) => {
                            // Fallback to placeholder if image fails to load
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback placeholder */}
                        <div className="about__avatar-placeholder" style={{ display: 'none' }}>
                          KK
                        </div>
                      </div>
                      <div className="about__avatar-ring"></div>
                    </div>
                  </div>
                  <div className="about__intro-text">
                    <h3 className="about__intro-title">Hello, I'm Kanesalingam Kanistan</h3>
                    <p className="about__intro-description">
                      I'm a passionate software developer and machine learning enthusiast with a strong 
                      foundation in modern web technologies and artificial intelligence. I love creating 
                      innovative solutions that bridge the gap between cutting-edge technology and 
                      real-world applications.
                    </p>
                    <p className="about__intro-description">
                      My journey in technology started with a curiosity about how things work, which 
                      evolved into a deep passion for building scalable applications and exploring the 
                      endless possibilities of machine learning and AI.
                    </p>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>

            {/* Rest of your existing content remains the same */}
            <ScrollReveal animation="fadeInUp" delay={400}>
              <div className="about__stats">
                {personalStats.map((stat, index) => (
                  <Card3D key={stat.label} className="about__stat" intensity={8}>
                    <div className="about__stat-content">
                      <div className="about__stat-icon">{stat.icon}</div>
                      <div className="about__stat-value">{stat.value}</div>
                      <div className="about__stat-label">{stat.label}</div>
                      <div className="about__stat-glow"></div>
                    </div>
                  </Card3D>
                ))}
              </div>
            </ScrollReveal>

            {/* Timeline sections remain the same */}
            <div className="about__timeline-section">
              <ScrollReveal animation="fadeInLeft" delay={600}>
                <Card3D className="about__timeline-card" intensity={12}>
                  <div className="about__section-header">
                    <h3 className="about__section-title">
                      <span className="about__section-icon">🎓</span>
                      Education Journey
                    </h3>
                    <div className="about__section-glow"></div>
                  </div>
                  
                  <div className="about__timeline-container">
                    {education.map((item, index) => (
                      <div key={index} className="about__timeline-item">
                        <div className="about__timeline-marker" style={{ '--item-color': item.color }}>
                          <span className="about__timeline-icon">{item.icon}</span>
                          <div className="about__timeline-pulse"></div>
                        </div>
                        <div className="about__timeline-content">
                          <div className="about__timeline-header">
                            <h4 className="about__timeline-title">{item.degree}</h4>
                            <span className="about__timeline-grade">{item.grade}</span>
                          </div>
                          <p className="about__timeline-company">{item.university}</p>
                          <span className="about__timeline-duration">{item.duration}</span>
                          <p className="about__timeline-description">{item.description}</p>
                          <div className="about__timeline-glow" style={{ '--glow-color': item.color }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card3D>
              </ScrollReveal>

              <ScrollReveal animation="fadeInRight" delay={800}>
                <Card3D className="about__timeline-card" intensity={12}>
                  <div className="about__section-header">
                    <h3 className="about__section-title">
                      <span className="about__section-icon">💼</span>
                      Professional Experience
                    </h3>
                    <div className="about__section-glow"></div>
                  </div>
                  
                  <div className="about__timeline-container">
                    {experience.map((item, index) => (
                      <div key={index} className="about__timeline-item">
                        <div className="about__timeline-marker" style={{ '--item-color': item.color }}>
                          <span className="about__timeline-icon">{item.icon}</span>
                          <div className="about__timeline-pulse"></div>
                        </div>
                        <div className="about__timeline-content">
                          <div className="about__timeline-header">
                            <h4 className="about__timeline-title">{item.role}</h4>
                            <span className="about__timeline-status">Current</span>
                          </div>
                          <p className="about__timeline-company">{item.company}</p>
                          <span className="about__timeline-duration">{item.duration}</span>
                          <p className="about__timeline-description">{item.description}</p>
                          <div className="about__achievements">
                            {item.achievements.map((achievement, i) => (
                              <span key={i} className="about__achievement">
                                ✨ {achievement}
                              </span>
                            ))}
                          </div>
                          <div className="about__timeline-glow" style={{ '--glow-color': item.color }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card3D>
              </ScrollReveal>
            </div>

            <ScrollReveal animation="fadeInUp" delay={1000}>
              <Card3D className="about__interests" intensity={8}>
                <div className="about__interests-header">
                  <h3 className="about__interests-title">Interests & Hobbies</h3>
                  <p className="about__interests-subtitle">What I'm passionate about beyond coding</p>
                </div>
                <div className="about__interests-grid">
                  {interests.map((interest, index) => (
                    <div key={interest.name} className="about__interest-item">
                      <div className="about__interest-icon">{interest.icon}</div>
                      <div className="about__interest-content">
                        <h4 className="about__interest-name">{interest.name}</h4>
                        <p className="about__interest-description">{interest.description}</p>
                      </div>
                      <div className="about__interest-glow"></div>
                    </div>
                  ))}
                </div>
              </Card3D>
            </ScrollReveal>
          </div>
        </div>

        {showModal && (
          <div className="about__modal">
            <div className="about__modal-content">
              <div className="about__modal-header">
                <div className="about__modal-avatar">👋</div>
                <h3>Hi there!</h3>
              </div>
              <p>I'd love to connect and discuss exciting opportunities. Feel free to reach out on LinkedIn!</p>
              <div className="about__modal-actions">
                <button 
                  className="about__modal-btn about__modal-btn--primary"
                  onClick={handleLinkedInConnect}
                >
                  <span className="about__modal-btn-icon">💼</span>
                  Connect on LinkedIn
                </button>
                <button 
                  className="about__modal-btn about__modal-btn--secondary"
                  onClick={handleModalClose}
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </SectionBackground>
  );
};

export default About;
