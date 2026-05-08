import './App.css'
import myPhoto from './assets/personal-photo.jpg'
import fraudImg from './assets/projects/fraud.jpg'
import gradImg from './assets/projects/grad.png'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function App() {
  return (
    <div>

      {/* ================= HERO ================= */}
      <div className="hero">

        {/* Profile */}
        <img src={myPhoto} alt="me" className="profile" />

        {/* Name */}
        <h1 className="name">Abdallah Salem</h1>

        {/* Role */}
        <p className="role">
          Machine Learning Engineer | AI Engineer
        </p>

        {/* Bio */}
        <p className="bio">
          Electrical Engineering graduate specializing in Control & Automation,
          transitioning into Machine Learning Engineering with a focus on building
          end-to-end ML systems.
        </p>

        {/* SOCIAL ICONS */}
        <div className="social-icons">

          <a href="https://github.com/Abd-Salem" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/abdallah-0-salem/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href="mailto:abdallah.ashraf854@gmail.com">
            <FaEnvelope />
          </a>

        </div>

        {/* SECTION BUTTONS */}
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

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="projects">

        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">

          {/* FRAUD DETECTION PROJECT */}
            <a
              href="https://github.com/Abd-Salem/Credit-Card-Fraud-Detection"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              >
              <div className="project-card">

                <h3>Credit Card Fraud Detection System</h3>

                <img src={fraudImg} className="project-img" alt="fraud project" />

                <span>
                  Imbalanced dataset · Smote · Random-Forest · Voting-Classifier ·  Focal-loss · pytorch · FastAPI
                </span>

                <p>
                  • End-to-end machine learning system designed to detect fraudulent credit card transactions for highly imbalanced dataset. <br/>
                  • The project includes EDA, feature engineering, data resampling, data scaling & classification models.   <br/>
                  • Trained models: LR, RF, VC, KNN, MLP and MLP with focal loss.   <br/>
                  • Integrated a FastAPI backend for real-time inference making it a production-ready ML system.    <br/>
                </p>

              </div>
          </a>

          <a
              href="https://github.com/Abd-Salem/micrograd"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <div className="project-card">
                <h3>Micrograd Engine</h3>

                <img src={gradImg} className="project-img" alt="fraud project" />
                <span>Python · OOP · Depth-Search-First · Backpropagation · Math </span>
                <p>
                    •	Forked Karpathy's micro-grad, a scalar-valued auto-grad engine, and extended it with additional capabilities beyond the original implementation <br/>
                    •	Implemented requires grad flag, enabling selective gradient tracking and blocking gradient accumulation for frozen nodes <br/>
                    •	Added activation functions sigmoid, tanh, exp, and log with correct backward passes derived from first principles <br/>
                    •	Implemented Binary Cross-Entropy loss and SoftMax from scratch, enabling the engine to support classification tasks <br/>

                </p>
              </div>
          </a>

        </div>

      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="about">

        <h2 className="section-title">About Me</h2>

        <p className="about-text">
          I am passionate about building intelligent systems that connect machine learning with real-world applications.
          My focus is on end-to-end ML pipelines, model deployment, and production-ready systems in Computer Vision and NLP.
        </p>

      </section>

    </div>
  )
}