import React, { useState } from 'react';
import TechIcon from '../../components/TechIcon';
import ScrollReveal from '../../components/ScrollReveal';
import SectionBackground from '../../components/SectionBackground';
import Card3D from '../../components/Card3D';
import './Projects.scss';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Course Registration System",
      description: "Full-stack course registration system with .NET, MS SQL Server, featuring user authentication, real-time registration management, and comprehensive admin dashboard.",
      image: "/images/project1.jpg",
      category: "Software Engineering",
      techStack: [".NET", "MS SQL Server", "C#", "React"],
      githubUrl: "https://github.com/your-username/course-registration-system",
      liveUrl: "https://your-course-registration-demo.com",
      color: "#FF6B6B"
    },
    {
      id: 2,
      title: "Image Captioning with VGG16",
      description: "Advanced image captioning system using VGG16 models with optimized accuracy. Implements deep learning for automatic image description generation with 92% accuracy.",
      image: "/images/project2.jpg",
      category: "Machine Learning",
      techStack: ["Python", "TensorFlow", "VGG16", "NLTK"],
      githubUrl: "https://github.com/your-username/image-captioning-vgg16",
      liveUrl: null,
      color: "#4ECDC4"
    },
    {
      id: 3,
      title: "Air Quality Monitoring System",
      description: "IoT-based air quality monitoring system using ESP32, LoRa, MQTT for sensor data transmission, with real-time visualization via a React dashboard and MongoDB backend.",
      image: "/images/project3.jpg",
      category: "Embadded Systems",
      techStack: ["ESP32", "LoRa", "MQTT", "C", "React", "MongoDB"],
      githubUrl: "https://github.com/your-username/air-quality-monitoring-system",
      liveUrl: "https://your-air-quality-demo.com",
      color: "#4ECDC4"
    },
    {
      id: 4,
      title: "Password Manager Application",
      description: "Secure password manager web application built with React, MongoDB, and JWT authentication, allowing users to store and manage credentials with encryption.",
      image: "/images/project3.png",
      category: "Software Engineering",
      techStack: ["React", "MongoDB", "JWT"],
      githubUrl: "https://github.com/KKanistan06/password-manager",
      liveUrl: "https://your-password-manager-demo.com",
      color: "#1A535C"
    },
    {
      id: 5,
      title: "Feedback Management System",
      description: "Web-based feedback management platform developed with HTML5, CSS3, JavaScript, PHP, and MySQL to collect and manage user feedback for institutions.",
      image: "/images/project2.jpeg",
      category: "Software Engineering",
      techStack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      githubUrl: "https://github.com/KKanistan06/feedback-management-system",
      color: "#FFB347"
    },
    {
      id: 6,
      title: "Face Recognition System",
      description: "Face recognition system implemented using Python, OpenCV, and TensorFlow for real-time face detection and identification, suitable for security and attendance tracking.",
      image: "/images/project5.png",
      category: "Machine Learning",
      techStack: ["Python", "OpenCV", "TensorFlow"],
      githubUrl: "https://github.com/KKanistan06/face-recognition-system",
      color: "#6A0572"
    },
    {
      id: 7,
      title: "Project Information Management System",
      description: "A React and MongoDB-based web application for managing academic or organizational project data, featuring CRUD operations, role-based access, and search/filter capabilities.",
      image: "/images/project4.png",
      category: "Software Engineering",
      techStack: ["React", "MongoDB", "Node.js", "Express"],
      githubUrl: "https://github.com/KKanistan06/project-info-management",
      liveUrl: "https://your-project-info-demo.com",
      color: "#FFA07A"
    },
    {
      id: 8,
      title: "Object Detection by Color",
      description: "Real-time object detection system using Python, OpenCV, and Keras to identify and track objects based on specific color ranges, useful in robotics and vision applications.",
      image: "/images/project6.png",
      category: "AI / Machine Learning",
      techStack: ["Python", "OpenCV", "Keras"],
      githubUrl: "https://github.com/KKanistan06/color-object-detection",
      color: "#00BFFF"
    }
  ];

  const categories = ['All', 'Software Engineering', 'Machine Learning', 'Embedded Systems'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Function to determine grid class based on project count
  const getGridClass = () => {
    const count = filteredProjects.length;
    if (count === 1) return 'projects__grid--single';
    if (count === 2) return 'projects__grid--double';
    return '';
  };

  return (
    <SectionBackground sectionName="projects">
      <section id="projects" className="projects section">
        {/* Enhanced Lighting Effects */}
        <div className="projects__lighting-effects">
          <div className="projects__light projects__light--1"></div>
          <div className="projects__light projects__light--2"></div>
          <div className="projects__light projects__light--3"></div>
          <div className="projects__light projects__light--4"></div>
          <div className="projects__floating-particles">
            {[...Array(25)].map((_, i) => (
              <div key={i} className={`projects__particle projects__particle--${(i % 4) + 1}`}></div>
            ))}
          </div>
          <div className="projects__energy-beams">
            <div className="projects__beam projects__beam--1"></div>
            <div className="projects__beam projects__beam--2"></div>
            <div className="projects__beam projects__beam--3"></div>
          </div>
        </div>

        <div className="projects__container container">
          <ScrollReveal animation="fadeInUp">
            <div className="projects__header">
              <h2 className="projects__title">My Projects</h2>
              <p className="projects__subtitle">Explore my latest work and innovations</p>
              <div className="projects__title-decoration">
                <div className="projects__title-line"></div>
                <div className="projects__title-dot"></div>
                <div className="projects__title-line"></div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeInUp" delay={200}>
            <div className="projects__filters">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`projects__filter ${
                    activeFilter === category ? 'projects__filter--active' : ''
                  }`}
                  onClick={() => setActiveFilter(category)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="projects__filter-text">{category}</span>
                  <div className="projects__filter-glow"></div>
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className={`projects__grid ${getGridClass()}`}>
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.id} animation="fadeInUp" delay={index * 100}>
                <Card3D className="projects__card-wrapper" intensity={8}>
                  <div className="projects__card" style={{ '--project-color': project.color }}>
                    <div className="projects__card-glow"></div>
                    <div className="projects__card-image">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="projects__card-placeholder">
                        <div className="projects__placeholder-icon">
                          <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                            <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"/>
                          </svg>
                        </div>
                        <div className="projects__placeholder-glow"></div>
                      </div>
                      <div className="projects__card-overlay">
                        <div className="projects__card-actions">
                          <a 
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projects__card-btn"
                            aria-label="View GitHub repository"
                          >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            <div className="projects__btn-glow"></div>
                          </a>
                          {project.liveUrl && (
                            <a 
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="projects__card-btn"
                              aria-label="View live demo"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                              </svg>
                              <div className="projects__btn-glow"></div>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="projects__card-content">
                      <div className="projects__card-header">
                        <h3 className="projects__card-title">{project.title}</h3>
                        <div className="projects__card-category" style={{ background: project.color }}>
                          {project.category}
                        </div>
                      </div>
                      <p className="projects__card-description">{project.description}</p>
                      
                      <div className="projects__card-tech">
                        {project.techStack.map((tech, techIndex) => (
                          <span 
                            key={tech} 
                            className="projects__card-tech-item"
                            style={{ animationDelay: `${techIndex * 0.1}s` }}
                          >
                            <TechIcon name={tech} size={16} />
                            <span className="projects__tech-name">{tech}</span>
                            <div className="projects__tech-glow"></div>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fadeInUp" delay={1000}>
            <div className="projects__stats">
              <div className="projects__stat">
                <div className="projects__stat-icon">🚀</div>
                <div className="projects__stat-number">20+</div>
                <div className="projects__stat-label">Projects Completed</div>
                <div className="projects__stat-glow"></div>
              </div>
              <div className="projects__stat">
                <div className="projects__stat-icon">⭐</div>
                <div className="projects__stat-number">150+</div>
                <div className="projects__stat-label">GitHub Stars</div>
                <div className="projects__stat-glow"></div>
              </div>
              <div className="projects__stat">
                <div className="projects__stat-icon">🏆</div>
                <div className="projects__stat-number">8+</div>
                <div className="projects__stat-label">Awards Won</div>
                <div className="projects__stat-glow"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </SectionBackground>
  );
};

export default Projects;
