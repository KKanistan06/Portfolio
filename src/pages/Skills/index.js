import React, { useState, useEffect, useRef } from 'react';
import TechIcon from '../../components/TechIcon';
import ScrollReveal from '../../components/ScrollReveal';
import SectionBackground from '../../components/SectionBackground';
import Card3D from '../../components/Card3D';
import './Skills.scss';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState(new Set());
  const [, setHoveredCategory] = useState(null);
  const skillsRef = useRef([]);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      color: "#FF6B6B",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Java", level: 75 },
        { name: "C++", level: 70 }
      ]
    },
    {
      title: "Frontend Technologies",
      icon: "🎨",
      color: "#4ECDC4",
      skills: [
        { name: "React", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Sass", level: 85 },
        { name: "Vue.js", level: 70 }
      ]
    },
    {
      title: "Backend & Database",
      icon: "⚙️",
      color: "#45B7D1",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "Firebase", level: 80 }
      ]
    },
    {
      title: "Machine Learning",
      icon: "🤖",
      color: "#96CEB4",
      skills: [
        { name: "TensorFlow", level: 80 },
        { name: "PyTorch", level: 75 },
        { name: "Scikit-learn", level: 85 },
        { name: "OpenCV", level: 70 },
        { name: "Pandas", level: 90 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      color: "#FFEAA7",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Linux", level: 80 },
        { name: "VS Code", level: 95 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillIndex = parseInt(entry.target.dataset.skillIndex);
            setTimeout(() => {
              setVisibleSkills(prev => new Set([...prev, skillIndex]));
            }, Math.random() * 500);
          }
        });
      },
      { threshold: 0.3 }
    );

    skillsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <SectionBackground sectionName="skills">
      <section id="skills" className="skills section">
        <div className="skills__container container">
          <ScrollReveal animation="fadeInUp">
            <div className="skills__header">
              <h2 className="skills__title">Skills & Technologies</h2>
              <p className="skills__subtitle">My technical expertise and proficiency levels</p>
              <div className="skills__decorative-line"></div>
            </div>
          </ScrollReveal>

          <div className="skills__categories">
            {skillCategories.map((category, categoryIndex) => (
              <ScrollReveal key={category.title} animation="fadeInUp" delay={categoryIndex * 200}>
                <Card3D 
                  className="skills__category" 
                  intensity={12}
                  onMouseEnter={() => setHoveredCategory(categoryIndex)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <div 
                    className="skills__category-inner"
                    style={{ '--category-color': category.color }}
                  >
                    <div className="skills__category-header">
                      <div className="skills__category-icon">
                        <span className="skills__category-emoji">{category.icon}</span>
                      </div>
                      <h3 className="skills__category-title">{category.title}</h3>
                      <div className="skills__category-glow"></div>
                    </div>
                    
                    <div className="skills__list">
                      {category.skills.map((skill, skillIndex) => {
                        const globalIndex = categoryIndex * 10 + skillIndex;
                        const isVisible = visibleSkills.has(globalIndex);
                        
                        return (
                          <div
                            key={skill.name}
                            className="skills__item"
                            ref={(el) => skillsRef.current[globalIndex] = el}
                            data-skill-index={globalIndex}
                            style={{ 
                              animationDelay: `${skillIndex * 0.1}s`,
                              '--skill-level': `${skill.level}%`
                            }}
                          >
                            <div className="skills__item-header">
                              <div className="skills__item-info">
                                <div className="skills__item-icon">
                                  <TechIcon name={skill.name} size={24} />
                                  <div className="skills__item-icon-glow"></div>
                                </div>
                                <span className="skills__item-name">{skill.name}</span>
                              </div>
                              <div className="skills__item-level-container">
                                <span className="skills__item-level">{skill.level}%</span>
                                <div className="skills__item-level-badge"></div>
                              </div>
                            </div>
                            
                            <div className="skills__item-bar-container">
                              <div className="skills__item-bar">
                                <div 
                                  className="skills__item-progress"
                                  style={{
                                    width: isVisible ? `${skill.level}%` : '0%',
                                    background: `linear-gradient(90deg, ${category.color}, ${category.color}dd)`
                                  }}
                                >
                                  <div className="skills__item-progress-glow"></div>
                                  <div className="skills__item-progress-shine"></div>
                                </div>
                              </div>
                              <div className="skills__item-particles">
                                {[...Array(3)].map((_, i) => (
                                  <div key={i} className={`skills__particle skills__particle--${i + 1}`}></div>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fadeInUp" delay={1000}>
            <div className="skills__stats">
              <div className="skills__stat">
                <div className="skills__stat-number">25+</div>
                <div className="skills__stat-label">Technologies</div>
              </div>
              <div className="skills__stat">
                <div className="skills__stat-number">5+</div>
                <div className="skills__stat-label">Years Experience</div>
              </div>
              <div className="skills__stat">
                <div className="skills__stat-number">50+</div>
                <div className="skills__stat-label">Projects Completed</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </SectionBackground>
  );
};

export default Skills;
