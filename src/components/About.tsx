import { useEffect, useRef, useState } from 'react';
import './styles/About.css';
import { Code, Award, Briefcase, GraduationCap, Zap, TrendingUp, User, Mail, MapPin, Calendar } from 'lucide-react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { playClickSound } from '../utils/sound';
import { portfolio } from '../config/portfolio.config';
gsap.registerPlugin(ScrollTrigger);

type AboutProps = {
  imageUrl?: string;
};

const About: React.FC<AboutProps> = ({ imageUrl }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  
  const skillTags = portfolio.skills;

  const experienceData = portfolio.experience;

  const statsData = portfolio.stats;

  const highlightData = portfolio.highlights;

  const educationData = portfolio.education;

  const journeyData = portfolio.journey;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleDownloadResume = () => {
    playClickSound();
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = portfolio.profile.resumeName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () => {
    playClickSound();
    const contactSection = document.getElementById('yath-contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getCategoryColor = (category?: string) => {
    switch(category) {
      case 'competition': return 'var(--gradient-start)';
      case 'hackathon': return 'var(--gradient-end)';
      case 'certification': return '#10b981';
      default: return 'var(--gradient-start)';
    }
  };

  return (
    <section ref={sectionRef} id="about" className="about-section page-section">
      <div className="about-bg-blob about-bg-blob-1"></div>
      <div className="about-bg-blob about-bg-blob-2"></div>
      
      <div className="about-container">
        <div className="about-image-col about-hide-mobile">
          <div className="image-sticky-wrapper">
            <div className="about-profile-card">
              <div className="about-image-wrapper">
                <div className="about-image-border"></div>
                {imageUrl ? (
                  <img src={imageUrl} alt="Jhon Doe" className="about-profile-image-main" />
                ) : (
                  <div className="about-hero-photo-placeholder">
                    <Code size={48} />
                    <span>Your Photo Here</span>
                  </div>
                )}
              </div>
              
              <div className="about-profile-info-card">
                <h3 className="about-profile-name">{portfolio.profile.name}</h3>
                <p className="about-profile-title">{portfolio.profile.role}</p>
                
                <div className="about-profile-details">
                  <div className="about-profile-detail-item">
                    <User size={14} />
                    <span>{portfolio.profile.degree}</span>
                  </div>
                  <div className="about-profile-detail-item">
                    <MapPin size={14} />
                    <span>{portfolio.profile.location}</span>
                  </div>
                  <div className="about-profile-detail-item">
                    <Mail size={14} />
                    <span>{portfolio.profile.email}</span>
                  </div>
                  <div className="about-profile-detail-item">
                    <Calendar size={14} />
                    <span>{portfolio.profile.availability}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`about-content-col ${isVisible ? 'fade-in' : ''}`} ref={contentRef}>
          <div className="about-stats-grid">
            {statsData.map((stat, idx) => (
              <div key={idx} className="about-stat-card">
                <div className="about-stat-icon">  {idx === 0 && <Code size={20} />}
                                                    {idx === 1 && <TrendingUp size={20} />}
                                                    {idx === 2 && <Award size={20} />}
                                                    {idx === 3 && <Zap size={20} />}</div>
                <div className="about-stat-content">
                  <h4 className="about-stat-value">{stat.value}</h4>
                  <p className="about-stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="about-bio-section">
            <h2 className="about-section-title">
              <span className="about-title-gradient">About Me</span>
            </h2>
            <p className="about-bio-text">
              I'm a passionate Computer Science student with a drive for creating impactful web applications. 
              My journey in tech started with curiosity and has evolved into a commitment to building 
              solutions that matter. I thrive on challenges, whether it's mastering new technologies, 
              solving complex problems, or collaborating on innovative projects.
            </p>
            <p className="about-bio-text">
              While pursuing my B.Tech in Computer Science, I've built multiple full-stack applications and actively 
              participate in hackathons and coding competitions. I believe in continuous learning and 
              pushing boundaries to create meaningful digital experiences.
            </p>
          </div>

          <div className="about-highlights-section">
            <h3 className="about-section-subtitle">
              <Award size={20} />
              Key Highlights
            </h3>
            <div className="about-highlights-grid">
              {highlightData.map((highlight, idx) => (
                <div key={idx} className="about-highlight-card">
                  <div 
                    className="about-highlight-dot" 
                    style={{ background: getCategoryColor(highlight.category) }}
                  ></div>
                  <div className="about-highlight-content">
                    <p className="about-highlight-text">{highlight.text}</p>
                    {highlight.category && (
                      <span className="about-highlight-category">{highlight.category}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-skills-section">
            <h3 className="about-section-subtitle">
              <Code size={20} />
              Tech Stack & Tools
            </h3>
            <div className="about-skills-tags">
              {skillTags.map((skill, idx) => (
                <span key={idx} className="about-skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="about-experience-section">
            <h3 className="about-section-subtitle">
              <Briefcase size={20} />
              Experience
            </h3>
            <div className="about-experience-cards">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="about-experience-card">
                  <h4 className="about-experience-role">{exp.role}</h4>
                  <p className="about-experience-company">{exp.company}</p>
                  <span className="about-experience-duration">{exp.duration}</span>
                  <ul className="about-experience-list">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="about-dual-timeline-section">
            <div className="about-timeline-columns">
              <div className="about-timeline-column">
                <h3 className="about-timeline-column-title">
                  <GraduationCap size={18} />
                  Education
                </h3>
                <div className="about-vertical-timeline">
                  {educationData.map((item, idx) => (
                    <div key={idx} className="about-timeline-node">
                      <div className="about-timeline-marker"><GraduationCap size={18} /></div>
                      <div className="about-timeline-content-card">
                        <div className="about-timeline-year">{item.year}</div>
                        <h4 className="about-timeline-degree">{item.degree}</h4>
                        <p className="about-timeline-institution">{item.institution}</p>
                        <p className="about-timeline-details">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="about-timeline-column">
                <h3 className="about-timeline-column-title">
                  <Briefcase size={18} />
                  Journey
                </h3>
                <div className="about-vertical-timeline">
                  {journeyData.map((item, idx) => (
                    <div key={idx} className="about-timeline-node">
                      <div className="about-timeline-marker"><TrendingUp size={18} /></div>
                      <div className="about-timeline-content-card">
                        <div className="about-timeline-year">{item.year}</div>
                        <h4 className="about-timeline-degree">{item.title}</h4>
                        <p className="about-timeline-details">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="about-action-buttons">
            <button className="about-btn about-btn-primary" onClick={handleDownloadResume}>
              <svg className="about-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v12m0 0-3-3m3 3 3-3M5 21h14" stroke="currentColor" strokeLinecap="round"/>
              </svg>
              Download Resume
            </button>
            <button className="about-btn about-btn-secondary about-hide-mobile" onClick={handleContactClick}>
              <svg className="about-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;