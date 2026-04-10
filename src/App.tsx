import { useEffect, useRef } from "react";
import "./App.css";
import { FiGithub, FiLinkedin, FiMail, FiCpu, FiLayers, FiCommand, FiArrowRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

// Components
import Magnetic from "./components/Magnetic";
import NeuralBackground from "./components/NeuralBackground";
import ProjectCard from "./components/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reveal animations
    const titles = gsap.utils.toArray(".reveal-title");
    titles.forEach((title: any) => {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, []);

  const projects = [
    {
      title: "Neural Vision Assistant",
      focus: "Computer Vision",
      description: "A real-time edge computing system that interprets spatial dynamics and human interaction through deep learning models.",
      technologies: ["OpenCV", "TensorFlow", "Python"],
      index: 1
    },
    {
      title: "Autonomous Interviewer",
      focus: "Intelligent Automation",
      description: "Scaling recruitment workflows with LLM-backed decision support and automated behavior analysis.",
      technologies: ["FastAPI", "React", "OpenAI"],
      index: 2
    },
    {
      title: "Systems Nexus",
      focus: "Full-stack Systems",
      description: "A comprehensive architecture bridging mechanical engineering precision with cloud-native software scalability.",
      technologies: ["PostgreSQL", "Next.js", "Docker"],
      index: 3
    }
  ];

  return (
    <div className="app-shell" ref={containerRef}>
      <NeuralBackground />
      
      <header className="topbar">
        <div className="brand">SHAKER.</div>
        <nav className="nav-links">
          <Magnetic><a href="#work">Work</a></Magnetic>
          <Magnetic><a href="#stack">Stack</a></Magnetic>
          <Magnetic><a href="#contact">Contact</a></Magnetic>
        </nav>
      </header>

      <main>
        <section className="hero">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-eyebrow"
          >
            AI & Computer Vision Engineer
          </motion.p>
          <h1 className="reveal-title">
            <span>ENGINEERING</span>
            <span>INTELLIGENCE</span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hero-sub"
          >
            I architect systems where mechanical precision meets neural intelligence. 
            Final year Engineering @ Al-Azhar University 2025.
          </motion.p>
          
          <div style={{ marginTop: '3rem' }}>
            <Magnetic>
              <a href="#work" className="contact-btn" style={{ margin: 0 }}>
                Explore Work <FiArrowRight style={{ marginLeft: '10px' }} />
              </a>
            </Magnetic>
          </div>
        </section>

        <section id="work">
          <h2 className="reveal-title" style={{ fontSize: '1rem', color: 'var(--accent-muted)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Selected Projects</h2>
          <div className="projects-grid-new">
            {projects.map((p) => (
              <ProjectCard key={p.index} project={p} />
            ))}
          </div>
        </section>

        <section id="stack">
          <h2 className="reveal-title">TECHNICAL ENGINE</h2>
          <div className="stack-grid">
            <div className="stack-item">
              <FiCpu size={32} style={{ marginBottom: '1.5rem' }} />
              <h3>AI & Vision</h3>
              <p>Specializing in object detection, facial recognition, and real-time processing using TensorFlow and PyTorch.</p>
            </div>
            <div className="stack-item">
              <FiLayers size={32} style={{ marginBottom: '1.5rem' }} />
              <h3>Product Build</h3>
              <p>Designing scalable web architectures with React, Next.js, and FastAPI for production environments.</p>
            </div>
            <div className="stack-item">
              <FiCommand size={32} style={{ marginBottom: '1.5rem' }} />
              <h3>Systems</h3>
              <p>Infrastructure as code, Docker orchestration, and high-performance database tuning.</p>
            </div>
          </div>
        </section>

        <section className="footer" id="contact">
          <h2 className="reveal-title">LET'S BUILD THE FUTURE.</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '3rem' }}>
            <Magnetic><a href="https://github.com/Shaker17s" target="_blank" className="nav-cta"><FiGithub size={24} /></a></Magnetic>
            <Magnetic><a href="#" className="nav-cta"><FiLinkedin size={24} /></a></Magnetic>
            <Magnetic><a href="mailto:shakerabdallah66@gmail.com" className="nav-cta"><FiMail size={24} /></a></Magnetic>
          </div>
          
          <Magnetic>
            <a href="mailto:shakerabdallah66@gmail.com" className="contact-btn">
              Hire Me
            </a>
          </Magnetic>
          
          <p className="copy">SHAKER ABDALLAH &copy; {new Date().getFullYear()} &mdash; BUILT FOR THE NEXT ERA</p>
        </section>
      </main>
    </div>
  );
};

export default App;
