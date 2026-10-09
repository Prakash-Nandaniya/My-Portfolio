'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Camera, Code2, Download, Mail, Menu, Phone, X } from 'lucide-react'

const navItems = ['Profile', 'About', 'Experience', 'Projects', 'Resume', 'Socials', 'Contact Me']

const projects = [
  { title: 'Karma Trading', kicker: 'Agro-merchant billing and analytics platform', description: "My biggest and most practical project, built for my brother's crop-trading business and used day to day. It brings invoicing, farmer bills, tradebooks, dashboards and an AI business assistant into one system.", tags: ['FastAPI', 'React', 'Neon', 'Docker', 'LangGraph'], github: 'https://github.com/Prakash-Nandaniya/agro_merchent_management_system', live: 'https://www.karmatrading.org/', featured: true },
  { title: 'MANCHITRA', kicker: 'Rajasthan music community platform', description: 'A discovery platform for Rajasthan music communities and artists. Users explore communities on an interactive map, while artists manage profiles and media uploads.', tags: ['Django REST', 'React', 'AWS S3', 'PostgreSQL'], github: 'https://github.com/Prakash-Nandaniya/Rajasthan-music-community', live: 'https://manchitra.vercel.app/', featured: true },
  { title: 'Civil Comment Classifier', kicker: 'LoRA + XGBoost hybrid', description: "A toxic-comment classifier trained on 100K+ streamed samples. RoBERTa embeddings compressed with Truncated SVD fed an XGBoost classifier that beat the model's own classification head.", tags: ['PyTorch', 'LoRA', 'XGBoost'], github: 'https://github.com/Prakash-Nandaniya/Civil-Comment-Classifier' },
  { title: 'Sign Language Recognition', kicker: 'Temporal gesture understanding', description: 'A real-time Transformer and Bi-LSTM pipeline combining person segmentation with spatial features, reaching 84.75% accuracy on RWTH-Boston-104.', tags: ['Transformers', 'Bi-LSTM', 'OpenCV'], github: 'https://github.com/Prakash-Nandaniya/sign-language-recognition' },
  { title: 'Video Action Recognition', kicker: 'UCF101 temporal modelling', description: 'An end-to-end video pipeline with custom frame sampling, ResNet18 frame features and temporal multi-head attention trained on UCF101.', tags: ['PyTorch', 'Attention', 'Transfer Learning'], github: 'https://github.com/Prakash-Nandaniya/Video-Action-Recognition' },
  { title: 'Lucas–Kanade Optical Flow', kicker: 'Classical computer vision', description: 'A from-scratch implementation using Harris corners, Sobel gradients and patch-based least-squares motion estimation with eigenvalue filtering.', tags: ['OpenCV', 'NumPy', 'Least Squares'] },
]

const skillGroups = [
  ['Programming Languages', 'Python · C++ · SQL · R', 'Backend, ML, data work and statistical analysis.'],
  ['Backend and APIs', 'FastAPI · Django REST · Celery · RabbitMQ', 'Async REST backends and background-processing pipelines.'],
  ['Databases and Storage', 'PostgreSQL (Neon) · AWS S3', 'Relational schema design, queries and media storage.'],
  ['Frontend', 'React · Vite · TypeScript', 'Responsive interfaces for products and data-rich tools.'],
  ['Cloud and Deployment', 'Docker · Git · Linux · GCP · Vercel · Render', 'I containerise and deploy full stacks myself.'],
  ['Machine Learning', 'PyTorch · TensorFlow · Scikit-learn · XGBoost', 'Models for text, video and gesture tasks.'],
  ['LLMs and Agentic AI', 'HuggingFace · LangGraph · LoRA · Tool calling', 'Assistants that plan, call tools and generate SQL.'],
  ['Computer Vision', 'OpenCV · Optical Flow · Segmentation · SLAM', 'Classical and deep-learning vision systems.'],
  ['Data, Maths and Finance', 'Pandas · NumPy · Statistics · Econometrics', 'The foundation for my move into quantitative finance.'],
]

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading"><span>{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Profile')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: '-35% 0px -55% 0px' })
    navItems.forEach((item) => observer.observe(document.getElementById(item.toLowerCase().replace(' ', '-'))!))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="portfolio">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#profile" onClick={() => setMenuOpen(false)}><b>PN</b><span>Prakash Nandaniya</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => { const id = item.toLowerCase().replace(' ', '-'); return <a key={item} className={active === id ? 'active' : ''} href={`#${id}`} onClick={() => setMenuOpen(false)}>{item}</a> })}
        </div>
      </nav>

      <section id="profile" className="hero section-shell">
        <div className="hero-portrait"><div className="portrait-ring"><div className="portrait">PN</div></div><span className="portrait-caption">IIT Jodhpur · EE ’26</span></div>
        <div className="hero-copy"><p className="eyebrow">Hello, I&apos;m Prakash</p><h1>Building systems<br /><em>that actually work.</em></h1><p className="hero-role">Electrical Engineer · Software Developer · Aspiring Financial Engineer</p><p className="lede">I build across backend development, machine learning and data — now focused on applying maths and code to finance: risk, market analysis and financial modelling.</p><div className="hero-actions"><a className="button button-primary" href="#projects">View projects <ArrowUpRight size={16} /></a><a className="button button-ghost" href="/resume.pdf" download="Prakash_Nandaniya_Resume.pdf"><Download size={16} /> Resume</a></div></div>
      </section>

      <section id="about" className="section-shell section-block"><SectionHeading eyebrow="01 / About" title="Curiosity became a direction." copy="I like understanding a system from the code I write all the way down to how it runs at the bit level." /><div className="about-grid"><div className="story"><p>In my first year I started with C++. By my second year I had moved into data structures, algorithms and web development, building systems that made ideas tangible.</p><p>I explored AI and machine learning, trained models on real datasets and enjoyed the mathematics underneath. But my strongest pull was always finance — business, markets and the mechanics behind value.</p><p className="highlight">My first attempts weren&apos;t my fit, and that&apos;s fine. I love learning new things and keeping my coding brain running. Now I know where I want to go: finance.</p></div><div className="education"><h3>Education</h3><div className="edu-card"><strong>B.Tech, Electrical Engineering</strong><span>IIT Jodhpur · 2022—2026</span><b>7.69 <small>CGPA</small></b></div><div className="edu-card"><strong>Class XII</strong><span>JNV Porbandar · 2021</span><b>73.60<small>%</small></b></div><div className="edu-card"><strong>Class X</strong><span>JNV Porbandar · 2019</span><b>90.80<small>%</small></b></div></div></div><div className="coursework"><h3>Relevant coursework</h3><div className="chip-list">{['Data Structures and Algorithms', 'Computer Architecture', 'Pattern Recognition and ML', 'Computer Vision', 'Probability & Statistics', 'Econometrics', 'Equity and Derivatives', 'Digital Design', 'Signals and Systems'].map((x, i) => <span className="chip" key={x}>{x}{i < 2 && <b>A-</b>}</span>)}</div></div></section>

      <section id="experience" className="section-shell section-block"><SectionHeading eyebrow="02 / Experience" title="Learning by shipping." /><div className="experience-card"><div className="timeline-dot" /><div><p className="card-kicker">Jun 2025 — Jul 2025</p><h3>Backend Software Engineer Intern</h3><p className="company">Advertyzement</p><ul><li>Developed a scalable FastAPI service for secure storage, retrieval and streaming of multimedia files using AWS S3 and PostgreSQL.</li><li>Built asynchronous pipelines with Celery and RabbitMQ for efficient upload and processing workflows.</li><li>Engineered GitLab CI/CD workflows and containerised the full stack with Docker.</li></ul></div></div><div className="coming-soon">More coming soon<span /></div></section>

      <section id="projects" className="section-shell section-block"><SectionHeading eyebrow="03 / Selected work" title="A practical body of work." copy="Products, models and experiments built to understand how things work in the real world." /><div className="projects-grid">{projects.map((project) => <article key={project.title} className={`project-card ${project.featured ? 'featured' : ''}`}><div><p className="card-kicker">{project.featured ? 'Featured project' : 'Research / build'}</p><h3>{project.title}</h3><p className="project-kicker">{project.kicker}</p><p className="project-description">{project.description}</p><div className="chip-list">{project.tags.map((tag) => <span className="chip" key={tag}>{tag}</span>)}</div></div><div className="project-links">{project.github && <ExternalLink href={project.github}><Code2 size={15} /> GitHub</ExternalLink>}{project.live && <ExternalLink href={project.live}>Live site <ArrowUpRight size={15} /></ExternalLink>}</div></article>)}</div></section>

      <section className="section-shell section-block skills-section"><SectionHeading eyebrow="04 / Toolkit" title="Tools with a reason behind them." /><div className="skills-grid">{skillGroups.map(([title, skills, copy], index) => <div className="skill-card" key={title}><p className="skill-number">{String(index + 1).padStart(2, '0')}</p><h3>{title}</h3><strong>{skills}</strong><p>{copy}</p></div>)}</div></section>

      <section id="resume" className="section-shell section-block resume-block"><div><p className="eyebrow">05 / Resume</p><h2>Let&apos;s make something<br /><em>meaningful.</em></h2><p>Electrical engineering foundations, product-minded software and a growing focus on quantitative finance.</p></div><div className="resume-actions"><a className="button button-primary" href="/resume.pdf" download="Prakash_Nandaniya_Resume.pdf"><Download size={16} /> Download resume</a><a className="text-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer">View PDF <ArrowUpRight size={15} /></a></div></section>

      <section id="socials" className="section-shell section-block socials-section"><SectionHeading eyebrow="06 / Find me online" title="Stay in touch." /><div className="social-grid"><ExternalLink href="https://www.linkedin.com/in/prakash-nandaniya-47797b247/"><Code2 /><span>LinkedIn<small>prakash-nandaniya-47797b247</small></span><ArrowUpRight /></ExternalLink><ExternalLink href="https://github.com/Prakash-Nandaniya"><Code2 /><span>GitHub<small>Prakash-Nandaniya</small></span><ArrowUpRight /></ExternalLink><ExternalLink href="https://www.instagram.com/prakash_nandaniya12/?hl=en"><Camera /><span>Instagram<small>@prakash_nandaniya12</small></span><ArrowUpRight /></ExternalLink></div></section>

      <section id="contact-me" className="section-shell contact-block"><div><p className="eyebrow">07 / Contact</p><h2>Open to the<br /><em>right opportunity.</em></h2><p>Open to opportunities in software, data and quantitative finance.</p></div><div className="contact-links"><a href="mailto:prakashnandaniya12@gmail.com"><Mail size={17} /> prakashnandaniya12@gmail.com</a><a href="tel:+919664706486"><Phone size={17} /> +91 96647 06486</a></div></section>
      <footer className="site-footer section-shell"><span>© 2026 Prakash Nandaniya</span><a href="#profile">Back to top ↑</a></footer>
    </main>
  )
}
