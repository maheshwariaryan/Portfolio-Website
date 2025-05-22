import React from 'react';
import './styles.css';
import BackgroundAnimation from './components/BackgroundAnimation';
import ProjectCard from './components/ProjectCard';

const App = () => {
  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  // Projects data
  const projects = [
    {
      title: "AI-Powered Mock Interview System",
      description: "Developed an AI-driven interview system that analyzes resumes, generates tailored questions, and evaluates responses in real-time. Enhanced candidate preparation with voice-based technical and behavioral interviews using a scalable multi-agent framework.",
      
      tags: ["Multi-Agent LLMs", "FastAPI", "Python", "React"]
    },
    {
      title: "SHIPWizard",
      description: "Developed a React-based web app with dynamic animations and Python backend at Google's CheeseHacks Hackathon to simplify UW-Madison student insurance processes. Engineered a PyTorch-based LLM trained with augmented SHIP data for coverage detail retrieval and auto-fill claims.",
      
      tags: ["PyTorch", "Python", "FastAPI", "React", "N8N"]
    },
    {
      title: "The Intern",
      description: "Designed a React-based app to streamline work tasks by deploying specialized agents to summarize PDFs/PPTs, automate email responses, generate PowerPoint outlines, and answer queries. Supports voice, text, and file upload inputs with a multi-agent framework.",
      
      tags: ["Python", "React", "Llama3", "FastAPI", "Groq"]
    },
  ];
  
  return (
    <>
      {/* Header */}
      <header>
        <div className="container flex justify-between items-center">
          <div className="logo">
            <h1 className="gradient-text">AM</h1>
          </div>
          <nav>
            <ul>
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
              <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
              <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      {/* Hero Section */}
      <section id="home" className="hero">
        <BackgroundAnimation />
        <div className="container">
          <div className="hero-content animate-fade-in">
            <h1>Hi, I'm <span className="gradient-text">Aryan Maheshwari</span></h1>
            <h2>Engineering Intern at HG Insights</h2>
            <p>Computer Science (Honors) & Data Science student at UW-Madison with a passion for AI/ML. I build innovative solutions using cutting-edge technologies and multi-agent LLM frameworks.</p>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container">
            <div className="about-content">
              <h2 className="section-title">About Me</h2>
              <p className="mb-4">I'm a sophomore at the University of Wisconsin-Madison, pursuing a dual degree in Computer Science and Data Science. My academic journey is fueled by a deep passion for artificial intelligence and machine learning.</p>
              <p className="mb-4">I'm constantly exploring new technologies and frameworks to develop innovative solutions to real-world problems. My goal is to leverage data-driven approaches and AI to create impactful applications that can make a difference.</p>
              <p>When I'm not coding or studying, you might find me participating in hackathons, contributing to open-source projects, or exploring the latest developments in the tech world.</p>
              <div className="mt-4">
              <a href={process.env.PUBLIC_URL + "/Aryan_Maheshwari_Resume.pdf"} 
                className="btn" 
                download>
                Download Resume
              </a>
              </div>
            </div>
          </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-16" style={{ backgroundColor: 'var(--card-bg)' }}>
        <div className="container">
          <h2 className="section-title text-center">My Top Skills</h2>
          <p className="text-center mb-4">Here are some technologies and tools I am proficient in</p>
          
          <div className="skills-container">
            {/* Languages */}
            <div className="skill-card">
              <i className="fab fa-python"></i>
              <span>Python</span>
            </div>
            <div className="skill-card">
              <i className="fab fa-java"></i>
              <span>Java</span>
            </div>
            <div className="skill-card">
              <i className="fab fa-js"></i>
              <span>JavaScript</span>
            </div>
            {/* Frameworks */}
            <div className="skill-card">
              <i className="fas fa-fire"></i>
              <span>PyTorch</span>
            </div>
            <div className="skill-card">
              <i className="fas fa-robot"></i>
              <span>Llama 3</span>
            </div>
            <div className="skill-card">
              <i className="fas fa-users"></i>
              <span>CrewAI</span>
            </div>
            <div className="skill-card">
              <i className="fab fa-react"></i>
              <span>React</span>
            </div>
            <div className="skill-card">
              <i className="fas fa-flask"></i>
              <span>Flask</span>
            </div>
            <div className="skill-card">
              <i className="fas fa-bolt"></i>
              <span>FastAPI</span>
            </div>
            <div className="skill-card">
              <i className="fab fa-git-alt"></i>
              <span>Git</span>
            </div>
            <div className="skill-card">
              <i className="fab fa-google"></i>
              <span>GCP</span>
            </div>
            <div className="skill-card">
              <i className="fas fa-cogs"></i>
              <span>scikit-learn</span>
            </div>
            <div className="skill-card">
              <i className="fas fa-database"></i>
              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container">
          <h2 className="section-title text-center">Featured Projects</h2>
          <p className="text-center mb-4">Check out some of my recent work</p>
          
          <div className="grid grid-cols-3 gap-8 my-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          
          <div className="text-center">
            <a href="https://github.com/maheshwariaryan" target="_blank" rel="noopener noreferrer" className="btn">
              View More Projects <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16" style={{ backgroundColor: 'var(--card-bg)' }}>
        <div className="container">
          <h2 className="section-title text-center">Get In Touch</h2>
          <p className="text-center mb-4">Feel free to reach out for collaborations or just a chat</p>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>maheshwari25@wisc.edu</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h3>Location</h3>
                  <p>Madison, Wisconsin</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>608-957-1692</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fab fa-linkedin"></i>
                </div>
                <div>
                  <h3>LinkedIn</h3>
                  <p><a href="https://linkedin.com/in/arymaheshwari" target="_blank" rel="noopener noreferrer">linkedin.com/in/arymaheshwari</a></p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fab fa-github"></i>
                </div>
                <div>
                  <h3>GitHub</h3>
                  <p><a href="https://github.com/maheshwariaryan" target="_blank" rel="noopener noreferrer">github.com/maheshwariaryan</a></p>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" className="form-control" placeholder="Your Name" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" className="form-control" placeholder="Your Email" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" className="form-control" placeholder="Subject" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" className="form-control" placeholder="Your Message"></textarea>
                </div>
                
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer>
        <div className="container">
          <div className="social-links">
            <a href="https://github.com/maheshwariaryan" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/arymaheshwari" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          
          <p>&copy; {new Date().getFullYear()} Aryan Maheshwari. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default App;