import { useState, useEffect, useRef } from 'react'
import './App.css'
import myPhoto from './assets/personal-photo.jpg'
import fraudImg from './assets/projects/fraud.jpg'
import gradImg from './assets/projects/grad.png'
import agentImg from './assets/projects/agent.jpeg'
import groupImg from './assets/projects/group.png'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

/* ─────────────────────────────────────────
   HOOK: Typing effect
───────────────────────────────────────── */
function useTypingEffect(text, speed = 70, startDelay = 800) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone]           = useState(false)

  useEffect(() => {
    let interval = null
    const timeout = setTimeout(() => {
      let i = 0
      interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeout)
      if (interval) clearInterval(interval)
    }
  }, [text, speed, startDelay])

  return { displayed, done }
}

/* ─────────────────────────────────────────
   COMPONENT: Fade-in on scroll
───────────────────────────────────────── */
function FadeIn({ children, delay = 0, className = '' }) {
  const ref                   = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`fade-in ${visible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const SKILLS = [
  { label: 'Languages',                    items: ['Python', 'C++', 'C', 'HTML', 'CSS'] },
  { label: 'ML / DL',                      items: [ 'Data Manipulations', 'Supervised Algorithms', 'Unsupervised Algorithms', 'Neural Network',
                                                     'Backpropagation', 'CNN', 'RNN', 'LSTM'] },
  { label: 'Dev. tools & Libs',            items: ['Simulink' , 'Git', 'Conda', 'FastAPI', 'OpenCV', 'Pytorch', 'scikit-learn','pandas', 'numpy', 'matplotlib'] },
  { label: 'Concepts',                     items: ['OOP', 'DS', 'Algorithms', 'Data Concepts', 'Modeling Concepts',
                                                      'Ensemble Learning' , 'Imbalanced Learning', 'End-to-End Pipelines', 'Model Deployment'] },
]

const PROJECTS = [
    {
    title:   'Group Activity Recognition (CVPR)',
    inProgress: true,
    img:     groupImg,
    alt:     'Group Activity Classification Project',
    tags:    ['CNN', 'LSTM', 'PyTorch', 'Temporal modeling'],
    bullets: [
      'In group activity recognition, the temporal dynamics of the whole activity can be inferred based on the dynamics of the individual people representing the activity.',
      'I will build a deep model to capture these dynamics based on LSTM models',
      'LSTM model will be designed to represent action dynamics of individual people in a sequence and another LSTM model will be designed to aggregate person-level information for whole activity understanding.'
    ],
    link: 'https://github.com/Abd-Salem/group-activity-recognition',
  },
  {
    title:   'Credit Card Fraud Detection System',
    img:     fraudImg,
    alt:     'fraud detection project',
    metric:  'AUPRC: 85.88% · F1: 84.75%',
    tags:    ['Imbalanced Dataset', 'SMOTE', 'Random Forest', 'VotingClassifier', 'Focal Loss', 'PyTorch', 'FastAPI'],
    bullets: [
      'End-to-end ML pipeline to detect fraudulent transactions on a <strong> severely imbalanced dataset (~0.17% fraud rate)</strong>.',
      'Full pipeline: EDA, feature engineering, SMOTEENN resampling, RobustScaler, evaluated via AUPRC & F2-score.',
      'Trained and compared <strong>LR, RF, KNN, custom PyTorch MLP with Focal Loss, and a soft-voting VotingClassifier</strong>.',
      'Integrated a <strong>FastAPI</strong> backend for real-time inference deployed as a production-ready ML system.',
    ],
    link: 'https://github.com/Abd-Salem/Credit-Card-Fraud-Detection',
  },
  {
    title:   'Micrograd Engine',
    img:     gradImg,
    alt:     'micrograd engine project',
    metric:  null,
    tags:    ['Python', 'OOP', 'Depth-First Search', 'Backpropagation', 'Math'],
    bullets: [
      "Forked Karpathy's micrograd, a scalar-valued autograd engine and extended it with additional capabilities.",
      'Implemented <strong>requires_grad flag</strong> for selective gradient tracking and blocking accumulation on frozen nodes.',
      'Added activation functions <strong>sigmoid, tanh, exp, and log</strong> with correct backward passes from first principles.',
      'Implemented <strong>Binary Cross-Entropy loss and Softmax</strong> from scratch, enabling classification support.',
    ],
    link: 'https://github.com/Abd-Salem/micrograd',
  },
  {
    title:   'Agentic AI Pipeline (Claude Code Clone)',
    img:     agentImg,
    alt:     'agentic pipeline project',
    metric:  null,
    tags:    ['Python', 'Anthropic API', 'Tool Use', 'Agentic AI', 'Subprocess'],
    bullets: [
      'Built an agentic Python pipeline using the <strong>Anthropic API</strong>, implementing autonomous multi-step tool use.',
      'Supports Bash execution and file writing through structured <strong>tool_use / tool_result message loops</strong>.',
      'Multi-turn conversation loop allows the agent to <strong>plan, act, and self-correct</strong> across multiple steps.',
      'Demonstrates <strong>core agentic concepts</strong>: system prompts, tool schemas, and subprocess shell execution.',
    ],
    link: 'https://github.com/Abd-Salem/build-your-own-claude-code',
  },
]

/* ─────────────────────────────────────────
   APP
───────────────────────────────────────── */
export default function App() {
  const { displayed, done } = useTypingEffect('Machine Learning Engineer')

  return (
    <div>

      {/* ================= HERO ================= */}
      <div className="hero">

        <img src={myPhoto} alt="Abdallah Salem" className="profile hero-item" style={{ animationDelay: '0.1s' }} />

        <h1 className="name hero-item" style={{ animationDelay: '0.25s' }}>
          Abdallah Salem
        </h1>

        <p className="role hero-item" style={{ animationDelay: '0.4s' }}>
          {displayed}
          <span className={`cursor ${done ? 'blink' : ''}`}>|</span>
        </p>

        <p className="bio hero-item" style={{ animationDelay: '0.55s' }}>
          Applied Machine Learning Engineering with a focus on building
          end-to-end ML pipelines and production-ready AI systems. Focused on Computer Vision and Gen AI / LLMs
          , driven by a desire to understand how things working.
        </p>

        <div className="social-icons hero-item" style={{ animationDelay: '0.7s' }}>
          <a href="https://github.com/Abd-Salem" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/abdallah-0-salem/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:abdallah.ashraf854@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        <div className="section-links hero-item" style={{ animationDelay: '0.85s' }}>
          <a href="#projects" className="section-btn">Projects</a>
          <a
            href="https://drive.google.com/file/d/1AkAOwTS9UtGkGnw2brSt_MUyEOpWVj7W/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="section-btn"
          >
            Resume
          </a>
          <a href="#about" className="section-btn">About Me</a>
        </div>

      </div>

      {/* ================= SKILLS ================= */}
      <section className="skills">
        <FadeIn>
          <h2 className="section-title">Skills</h2>
        </FadeIn>
        <div className="skills-grid">
          {SKILLS.map(({ label, items }, i) => (
            <FadeIn key={label} delay={i * 100}>
              <div className="skill-group">
                <h4 className="skill-label">{label}</h4>
                <div className="tags">
                  {items.map(item => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="projects">
        <FadeIn>
          <h2 className="section-title">Projects</h2>
        </FadeIn>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 150}>
              <div className="project-card">

                <h3 dangerouslySetInnerHTML={{ __html: p.title }} />
                {p.inProgress && (
                  <span className="in-progress-badge">🚧 In Progress</span>
                )}

                {p.metric && (
                  <span className="metric-badge">{p.metric}</span>
                )}

                {p.img
                  ? <img src={p.img} className="project-img" alt={p.alt} />
                  : <div className="project-img-placeholder">🤖 Agentic Pipeline</div>
                }

                <div className="tags">
                  {p.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                <ul className="project-bullets">
                  {p.bullets.map((b, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: b }} />
                  ))}
                </ul>

                <a href={p.link} target="_blank" rel="noopener noreferrer" className="github-btn">
                  <FaGithub /> Repo
                </a>

              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="about">
        <FadeIn>
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I'm an Electrical Engineering graduate (Control &amp; Automation, Benha University)
            transitioning into Machine Learning Engineering. I build end-to-end ML pipelines
            from raw data and feature engineering through model training, evaluation, and deployment.
            My background in control systems gives me a structured, engineering-first approach to
            solving ML problems. I'm actively targeting Applied ML Engineer roles (Computer Vision) and able to expand
            into Generative AI and LLM systems.
          </p>
        </FadeIn>
      </section>

    </div>
  )
}
