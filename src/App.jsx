import './App.css'
import myPhoto from './assets/personal-photo.jpg'
import fraudImg from './assets/projects/fraud.jpg'
import gradImg from './assets/projects/grad.png'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const SKILLS = [
  { label: 'Languages',    items: ['Python', 'C++', 'SQL'] },
  { label: 'ML / DL',      items: ['Scikit-learn', 'PyTorch', 'Focal Loss', 'SMOTE', 'Threshold Tuning'] },
  { label: 'Tools',        items: ['FastAPI', 'Git', 'Docker', 'Conda', 'Railway'] },
  { label: 'Concepts',     items: ['End-to-End Pipelines', 'Imbalanced Learning', 'Backpropagation', 'Model Deployment'] },
]

const PROJECTS = [
  {
    title:   'Credit Card Fraud Detection System',
    img:     fraudImg,
    alt:     'fraud detection project',
    metric:  'AUPRC: 85.88% · F1: 85.87%',
    tags:    ['Imbalanced Dataset', 'SMOTE', 'Random Forest', 'VotingClassifier', 'Focal Loss', 'PyTorch', 'FastAPI'],
    bullets: [
      'End-to-end ML pipeline to detect fraudulent transactions on a severely imbalanced dataset (~0.17% fraud rate).',
      'Full pipeline: EDA, feature engineering, SMOTEENN resampling, RobustScaler, and model evaluation via AUPRC & F2-score.',
      'Trained and compared LR, RF, KNN, custom PyTorch MLP with Focal Loss, and a soft-voting VotingClassifier.',
      'Integrated a FastAPI backend for real-time inference — deployed to Railway as a production-ready ML system.',
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
      'Forked Karpathy\'s micrograd — a scalar-valued autograd engine — and extended it with additional capabilities.',
      'Implemented requires_grad flag for selective gradient tracking and blocking accumulation on frozen nodes.',
      'Added activation functions sigmoid, tanh, exp, and log with correct backward passes from first principles.',
      'Implemented Binary Cross-Entropy loss and Softmax from scratch, enabling the engine to support classification.',
    ],
    link: 'https://github.com/Abd-Salem/micrograd',
  },
  {
    title:   'Agentic AI Pipeline (Claude Code Clone)',
    img:     null,
    alt:     'agentic pipeline project',
    metric:  null,
    tags:    ['Python', 'Anthropic API', 'Tool Use', 'Agentic AI', 'Subprocess'],
    bullets: [
      'Built an agentic Python pipeline using the Anthropic API via OpenRouter, implementing autonomous tool use.',
      'Supports Bash execution and file writing through structured tool_use / tool_result message loops.',
      'Multi-turn conversation loop allows the agent to plan, act, and self-correct across multiple steps.',
      'Demonstrates core agentic concepts: system prompts, tool schemas, and subprocess shell execution.',
    ],
    link: 'https://github.com/Abd-Salem',
  },
]

export default function App() {
  return (
    <div>

      {/* ================= HERO ================= */}
      <div className="hero">

        <img src={myPhoto} alt="Abdallah Salem" className="profile" />

        <h1 className="name">Abdallah Salem</h1>

        <p className="role">Machine Learning Engineer</p>

        <p className="bio">
          Electrical Engineering graduate specialising in Control &amp; Automation,
          transitioning into Machine Learning Engineering with a focus on building
          end-to-end ML pipelines and production-ready AI systems.
        </p>

        <div className="social-icons">
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

        <div className="section-links">
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
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {SKILLS.map(({ label, items }) => (
            <div key={label} className="skill-group">
              <h4 className="skill-label">{label}</h4>
              <div className="tags">
                {items.map(item => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <div className="project-card">

                <h3>{p.title}</h3>

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
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="about">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          I'm an Electrical Engineering graduate (Control &amp; Automation, Benha University)
          transitioning into Machine Learning Engineering. I build end-to-end ML pipelines —
          from raw data and feature engineering through model training, evaluation, and deployment.
          My background in control systems gives me a structured, engineering-first approach to
          solving ML problems. I'm actively targeting Applied ML Engineer roles and expanding
          into Generative AI and LLM systems.
        </p>
      </section>

    </div>
  )
}
