// TWO-FILE SETUP: replace src/App.jsx and src/App.css in a Vite React project.
// All editable content is in DATA below. No extra packages are needed.
// Optional assets: public/profile.jpg and public/resume.pdf.
// To use the second page instead: return <KarmaHome /> in App at the bottom.
// KarmaHome is presentation only; set DATA.karma.loginHref to your existing login URL.
import React, { useEffect, useState } from "react";
import "./App.css";

export const DATA = {
  name: "Prakash Nandaniya",
  initials: "PN",
  role: "Electrical Engineer · Software Developer · Aspiring Financial Engineer",
  intro:
    "I'm a B.Tech Electrical Engineering graduate from IIT Jodhpur who loves building systems that actually work. I work across backend development, machine learning and data, and I'm now focused on applying maths and code to finance: risk, market analysis and financial modelling.",
  email: "prakashnandaniya12@gmail.com",
  phone: "+91 96647 06486",
  phoneHref: "tel:+919664706486",
  availability:
    "Open to opportunities in software, data and quantitative finance.",
  photo: "/profile.jpg",
  resume: "/resume.pdf",
  resumeFilename: "Prakash_Nandaniya_Resume.pdf",
  nav: [
    ["profile", "Profile"],
    ["about", "About"],
    ["experience", "Experience"],
    ["projects", "Projects"],
    ["resume", "Resume"],
    ["socials", "Socials"],
    ["contact", "Contact Me"],
  ],
  labels: {
    menu: "Toggle navigation",
    projects: "View Projects",
    download: "Download Resume",
    view: "View",
    github: "GitHub",
    live: "Live Site",
    about: "About Me",
    education: "Education",
    coursework: "Relevant coursework",
    skills: "Technical skills",
    experience: "Experience",
    soon: "More coming soon",
    projectsTitle: "Projects",
    featured: "Selected work",
    more: "More Projects",
    resume: "Resume",
    socials: "Socials",
    community: "Community & Leadership",
    contact: "Contact Me",
    top: "Back to top",
    footer: "© 2026 Prakash Nandaniya",
    details: "Explore project details",
    profileAlt: "Portrait of Prakash Nandaniya",
    resumeMissing: "Resume not added yet.",
    resumeSummary:
      "IIT Jodhpur · B.Tech Electrical Engineering · CGPA 7.69. Backend Software Engineer Intern at Advertyzement. Backend and APIs, machine learning, computer vision, cloud deployment and agentic AI.",
    metaDescription:
      "Prakash Nandaniya — IIT Jodhpur Electrical Engineering graduate, software developer and aspiring financial engineer. Explore projects, experience and skills.",
  },
  story: [
    [
      "Starting out.",
      "In my first year I started exploring tech by learning C++. In my second year I moved into data structures and algorithms and web development, and built several capstone projects. I loved designing systems, solving problems and building things that really work.",
    ],
    [
      "How things run.",
      "I'm drawn to low-level and system-level thinking: computer architecture, operating systems and networking. They explain how the real-world things around us actually work. I like understanding a program from the code I write all the way down to how it runs at the bit level. I enjoy the electronics-level side of execution too, though I haven't gone very deep there.",
    ],
    [
      "Web and ML.",
      "I realised that in web development, design and thinking are only a small part. Most of the work is reading documentation, writing code and debugging. I'm good at it, but it didn't give me the spark to code for hours. So I tried AI/ML. I built models, worked with standard models on Kaggle datasets, and enjoyed understanding how models work and the maths underneath. But research needs higher education, and in industry much of it is repeating fixed standard models and designing data pipelines. I like that, but not enough.",
    ],
    [
      "Finding finance.",
      "Since childhood I've been curious about business: asking my father what things cost, what their price should be, and the business behind them. During JEE preparation I opened my first Demat account and made small trades to learn. That led me to fundamental and technical analysis, finding good stocks, and understanding markets and how money works in the world. In college, coding and trading both got paused for lack of time and capital. Now, with solid knowledge of maths and markets, I've realised I can apply both maths and coding to finance. I'm actively learning financial modelling and financial engineering, risk and market analysis, and model building. I analyse markets live, apply maths to them, and write systems that analyse things and produce results.",
    ],
  ],
  closing:
    "My first attempts weren't my fit, and that's fine. I love learning new things and keeping my coding brain running, and now I know where I want to go: finance.",
  education: [
    [
      "B.Tech, Electrical Engineering",
      "IIT Jodhpur",
      "Jul 2022 – Jun 2026",
      "CGPA 7.69",
    ],
    [
      "Class XII",
      "Jawahar Navodaya Vidyalaya, Porbandar",
      "Jul 2021",
      "73.60%",
    ],
    ["Class X", "Jawahar Navodaya Vidyalaya, Porbandar", "May 2019", "90.80%"],
  ],
  gradedCourses: [
    "Data Structures and Algorithms",
    "Computer Architecture",
    "Introduction to Computer Science",
    "Power Engineering",
    "Introduction to Entrepreneurship",
  ],
  courses: [
    "Pattern Recognition and Machine Learning",
    "Artificial Intelligence",
    "Computer Vision",
    "Probability Statistics and Stochastic Processes",
    "Theoretical Foundations of Econometrics",
    "Equity and Derivatives",
    "Machine Learning for Communications",
    "Digital Design",
    "Digital Signal Processing",
    "Signals and Systems",
    "Embedded Systems",
    "Data Communication Networks",
    "Control Systems",
    "Analog Circuits",
    "Foundations of Quantum Information",
  ],
  grade: "A-",
  skills: [
    [
      "Programming Languages",
      ["Python", "C++", "SQL", "R"],
      "Python is my main language for backend, ML and data work. C++ is where I started and where I did my DSA. SQL I use for database design and for the queries my AI assistant generates. R I use for statistical analysis.",
    ],
    [
      "Backend and APIs",
      [
        "FastAPI (async)",
        "Django REST Framework",
        "REST API design",
        "Celery",
        "RabbitMQ",
      ],
      "I build asynchronous REST backends and background-processing pipelines. I used them for the multimedia service at my internship, Karma Trading and MANCHITRA.",
    ],
    [
      "Databases and Storage",
      ["PostgreSQL (Neon)", "AWS S3"],
      "Relational schema design, queries and media storage for uploads and streaming.",
    ],
    [
      "Frontend",
      ["React", "Vite", "TypeScript"],
      "Responsive web interfaces for my own products, such as the billing dashboard and the interactive music-community map.",
    ],
    [
      "DevOps, Cloud and Deployment",
      [
        "Docker",
        "Git",
        "GitHub",
        "GitLab CI/CD",
        "Linux",
        "GCP Compute Engine",
        "Cloudflare Tunnels",
        "Vercel",
        "Render",
        "Streamlit",
      ],
      "I containerise and deploy full stacks myself. Karma Trading runs in Docker on a GCP VM behind Cloudflare Tunnels with zero exposed ports, and the frontends are on Vercel.",
    ],
    [
      "Machine Learning and Deep Learning",
      [
        "PyTorch",
        "TensorFlow/Keras",
        "Scikit-learn",
        "XGBoost",
        "CNNs",
        "RNNs and Bi-LSTM",
        "Transformers",
        "Attention Models",
        "Transfer Learning",
        "Feature Engineering",
        "CUDA (basics)",
      ],
      "I've trained and evaluated models for text, video and gesture tasks, and I'm comfortable with the maths underneath them.",
    ],
    [
      "LLMs and Agentic AI",
      [
        "HuggingFace",
        "LLM fine-tuning (LoRA)",
        "LangGraph",
        "tool calling",
        "prompt engineering",
        "contrastive/triplet-loss training",
        "OpenAI API",
      ],
      "I fine-tune language models and build agentic assistants that plan, call tools and generate SQL, as in the Karma Trading chatbot.",
    ],
    [
      "Computer Vision",
      [
        "OpenCV",
        "Feature Detection",
        "Optical Flow",
        "Epipolar Geometry",
        "Image Segmentation",
        "SLAM basics",
      ],
      "Classical and deep-learning vision, from Lucas–Kanade optical flow to video action recognition and sign-language recognition.",
    ],
    [
      "Data, Maths and Finance interests",
      [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Probability",
        "Statistics",
        "Econometrics",
        "Financial Modelling",
        "Risk and Market Analysis",
      ],
      "The foundation for my move into quantitative finance.",
    ],
  ],
  experience: [
    {
      company: "Advertyzement",
      role: "Backend Software Engineer Intern",
      dates: "Jun 2025 – Jul 2025",
      link: "",
      bullets: [
        "Developed a scalable FastAPI service for secure storage, retrieval and streaming of multimedia files, integrating AWS S3 and PostgreSQL.",
        "Implemented asynchronous pipelines using Celery and RabbitMQ, improving system performance through efficient upload and processing workflows.",
        "Engineered automated CI/CD workflows in GitLab and containerised the entire stack with Docker.",
      ],
    },
  ],
  community: [
    "Core member of SAA Society; part of the transportation team at the Dashak event.",
    "School Captain (Grade 11), JNV Porbandar: led student representation, mediated with faculty, and held a key leadership role.",
  ],
  socials: [
    [
      "linkedin",
      "LinkedIn",
      "prakash-nandaniya-47797b247",
      "https://www.linkedin.com/in/prakash-nandaniya-47797b247/",
    ],
    [
      "github",
      "GitHub",
      "Prakash-Nandaniya",
      "https://github.com/Prakash-Nandaniya",
    ],
    [
      "instagram",
      "Instagram",
      "prakash_nandaniya12",
      "https://www.instagram.com/prakash_nandaniya12/?hl=en",
    ],
  ],
  projects: [
    {
      title: "Karma Trading",
      tagline: "Agro-Merchant Billing and Analytics Platform.",
      badge: "Real-world used",
      featured: true,
      github:
        "https://github.com/Prakash-Nandaniya/agro_merchent_management_system",
      live: "https://www.karmatrading.org/",
      description:
        "My biggest and most practical project. I built it for my brother's local crop-trading business, where it is used day to day. It was made to his exact requirements, but the architecture suits any small crop trader, and I plan to grow it into a paid SaaS product. It is currently a custom personal application, not a legally registered product.",
      features: [
        "Invoice generation with an Invoice Book to view, download, share and print invoices.",
        "Farmer purchase bills: simple farmer purchase bills and RCM-based self-invoice purchase bills, stored on a remote server in a Farmer Bill Book.",
        "Auto invoice numbering: tracks the last invoice number and increments it automatically.",
        "Trade feature: records cash inflow and outflow for each trade cycle (mill payment, GST collection, payment to farmer, transport, labour and other costs, TDS deducted at the mill, and RCM payable to the government). Every trade builds the Tradebook, which shows the whole business.",
        "Dashboard: total inflow, outflow and net profit or loss for the financial year; monthly cash-flow analysis; crop-wise and party-wise analysis; counts of bills and invoices.",
        "Profile settings: editable list of crops with HSN codes and GST rates, plus business details that auto-fill into every bill.",
        "Agentic AI assistant (LangGraph): does multi-step reasoning and tool calling, plans its next action, generates SQL against the database, and returns written analysis with auto-generated plots, tables and charts.",
        "Single-firm access: no sign-up. The admin sets usernames and passwords, and several users can log in to the same firm's data.",
        "Deployment: async FastAPI backend in Docker on a GCP VM behind Cloudflare Tunnels (zero exposed ports); PostgreSQL on Neon; React and Vite frontend on Vercel.",
      ],
      stack: [
        "FastAPI",
        "React",
        "Vite",
        "PostgreSQL (Neon)",
        "Docker",
        "GCP",
        "Cloudflare",
        "LangGraph",
        "OpenAI API",
      ],
    },
    {
      title: "MANCHITRA",
      tagline: "Rajasthan Music Community Platform.",
      featured: true,
      github: "https://github.com/Prakash-Nandaniya/Rajasthan-music-community",
      live: "https://manchitra.vercel.app/",
      description:
        "A platform where Rajasthan music communities register their communities and artists, and where users discover and explore them.",
      features: [
        "Artists apply to add their community, log in with a mobile OTP, and manage community and artist details, including media uploads.",
        "Tourists and users browse communities on an interactive map and view images, videos and artist information.",
      ],
      stack: [
        "Django REST Framework",
        "React",
        "AWS S3",
        "PostgreSQL",
        "Vercel",
        "Render",
      ],
    },
    {
      title: "Civil Comment Classifier",
      tagline: "LoRA + XGBoost hybrid",
      github: "https://github.com/Prakash-Nandaniya/Civil-Comment-Classifier",
      description:
        "A hybrid toxic-comment classifier trained on 100K+ streamed samples from Google's Civil Comments dataset. I fine-tuned RoBERTa-base with LoRA adapters (mixed-precision AdamW, 3 epochs), mean-pooled the last-hidden-layer embeddings, and compressed them with Truncated SVD. An XGBoost classifier with stratified 5-fold cross-validation then consistently beat the transformer's own classification head on holdout ROC-AUC.",
      stack: ["PyTorch", "HuggingFace Transformers", "LoRA", "XGBoost"],
    },
    {
      title: "Sign Language Gesture Recognition",
      tagline: "Real-time multimodal recognition",
      github: "https://github.com/Prakash-Nandaniya/sign-language-recognition",
      description:
        "A real-time recognition system using a Transformer + Bi-LSTM to capture temporal dependencies across gesture sequences. Sapiens Lite segments the person and suppresses background noise, and ResNet50 extracts spatial features. The end-to-end multimodal pipeline reached 84.75% accuracy on RWTH-Boston-104.",
      stack: [
        "PyTorch",
        "Transformers",
        "Bi-LSTM",
        "Sapiens Lite",
        "ResNet50",
        "OpenCV",
      ],
    },
    {
      title: "Video Action Recognition (UCF101)",
      tagline: "Learning motion through attention",
      github: "https://github.com/Prakash-Nandaniya/Video-Action-Recognition",
      description:
        "An end-to-end pipeline with custom frame sampling and a PyTorch Dataset/DataLoader. ResNet18 extracts per-frame features and temporal multi-head attention captures motion across frames. Trained and evaluated on UCF101 with custom train/test splits.",
      stack: [
        "PyTorch",
        "Torchvision",
        "OpenCV",
        "Attention",
        "Transfer Learning",
      ],
    },
    {
      title: "Reddit Comment Rule-Violation Classifier",
      tagline: "Kaggle Agile Competition 2025",
      github: "",
      description:
        "A Kaggle Agile Competition 2025 entry. It classifies whether a comment violates a rule from few-shot examples, using HuggingFace LLMs fine-tuned with a triplet-loss (contrastive) objective.",
      stack: [
        "HuggingFace LLMs",
        "Triplet Loss",
        "Prompt Engineering",
        "Contrastive Training",
      ],
    },
    {
      title: "Lucas–Kanade Optical Flow Tracking",
      tagline: "Classical vision, built from scratch",
      github: "",
      description:
        "A from-scratch implementation using Harris corners, Sobel gradients and patch-based least-squares motion estimation. Unstable points are filtered by eigenvalue analysis, and motion is visualised with scaled displacement vectors.",
      stack: [
        "OpenCV",
        "NumPy",
        "Image Gradients",
        "Least-Squares Optimisation",
      ],
    },
  ],
  karma: {
    name: "Karma Trading",
    intro:
      "Billing, farmer purchase bills and trade tracking for crop traders.",
    login: "Login",
    loginHref: "/login",
    servicesTitle: "Built around your trade",
    featuresTitle: "Smart features",
    previewTitle: "Bill preview",
    sampleImage: "/sample-bill.jpg",
    samplePdf: "/sample-bill.pdf",
    sampleAlt: "Sample Karma Trading bill",
    sampleMissing: "Sample bill not added yet",
    sampleHint:
      "Add your dummy bill to public/sample-bill.jpg or public/sample-bill.pdf.",
    footer:
      "Built for local crop traders. Access is provided by the administrator.",
    services: [
      [
        "document",
        "Invoice generation",
        "Create invoices and keep records in the Invoice Book, where you can view, download, share and print them.",
      ],
      [
        "document",
        "Farmer purchase bills",
        "Simple farmer purchase bills and RCM-based self-invoice purchase bills, recorded on a remote server in the Farmer Bill Book.",
      ],
      [
        "chart",
        "Trade creation",
        "A personal business record for each trade cycle, covering mill payment, GST collection, farmer payment, transport, labour and other costs, TDS deducted at the mill, and RCM payable to the government. All trades build the business book (Tradebook).",
      ],
    ],
    features: [
      [
        "hash",
        "Automatic invoice numbering",
        "Automatic invoice-number tracking.",
      ],
      [
        "chart",
        "Business dashboard",
        "Monthly cash flow, crop-wise and party-wise analysis, bill and invoice counts, and total inflow, outflow and net profit or loss for the financial year.",
      ],
      [
        "settings",
        "Profile settings",
        "Editable crops, HSN numbers and GST rates, plus business details auto-filled into every bill.",
      ],
      [
        "spark",
        "AI business assistant",
        "LangGraph-powered questions and analysis.",
      ],
    ],
  },
};

const paths = {
  arrow: (
    <>
      <path d="M7 17 17 7M7 7h10v10" />
    </>
  ),
  down: (
    <>
      <path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" />
    </>
  ),
  up: (
    <>
      <path d="m6 12 6-6 6 6M12 6v14" />
    </>
  ),
  menu: (
    <>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12M6 18 18 6" />
    </>
  ),
  document: (
    <>
      <path d="M14 2H5v20h14V7l-5-5ZM14 2v5h5M8 12h8M8 16h8" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
  phone: (
    <>
      <path d="M8 3H4c-1 0-1 2-1 3 0 8 7 15 15 15 1 0 3 0 3-1v-4l-5-2-2 3a15 15 0 0 1-7-7l3-2-2-5Z" />
    </>
  ),
  github: (
    <>
      <path d="M9 19c-4 1-4-2-6-2m14 5v-4c0-1-.4-2-1-2.5 4-.5 6-2 6-6 0-1.5-.5-2.5-1.5-3.5.2-1 .2-2-.5-3-2 0-3 1-4 1.5a13 13 0 0 0-6 0C9 4 8 3 6 3c-.7 1-.7 2-.5 3C4.5 7 4 8 4 9.5c0 4 2 5.5 6 6-.6.5-1 1.5-1 2.5v4" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7v.1M11 17v-7m0 3c0-4 6-4 6 0v4" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  chart: (
    <>
      <path d="M4 3v18h17M8 17v-5M13 17V7M18 17v-8" />
    </>
  ),
  hash: (
    <>
      <path d="m9 3-3 18M18 3l-3 18M3 8h18M2 16h18" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="m9 3-1 3-3 1-2 3 2 2-1 3 3 2 3-1 2 3 3-1 1-3 3-1 1-3-2-2 1-3-3-2-3 1-2-2Z" />
    </>
  ),
  spark: (
    <>
      <path d="m12 3 3 6 6 3-6 3-3 6-3-6-6-3 6-3 3-6Z" />
    </>
  ),
};
function Icon({ name, ...props }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}
function Card({ children, className = "", ...props }) {
  return (
    <article className={`card ${className}`} {...props}>
      {children}
    </article>
  );
}
function Chip({ children, grade }) {
  return (
    <span className="chip">
      {children}
      {grade && <span className="grade">{grade}</span>}
    </span>
  );
}
function Section({ id, title, children, className = "" }) {
  return (
    <section
      id={id}
      className={`section ${className}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="section-heading">
        <span className="section-index" aria-hidden="true">
          {String(DATA.nav.findIndex(([key]) => key === id) + 1).padStart(
            2,
            "0",
          )}
        </span>
        <h2 id={`${id}-title`}>{title}</h2>
        <span className="section-rule" />
      </div>
      {children}
    </section>
  );
}
function IconButton({
  href,
  icon,
  children,
  secondary = false,
  external = false,
  ...props
}) {
  return (
    <a
      className={`button ${secondary ? "button-secondary" : ""}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      <Icon name={icon} />
      {children}
    </a>
  );
}
function useAsset(url, kind = "pdf") {
  const [available, setAvailable] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setAvailable(false);
    fetch(url, { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) return;
        const blob = await response.blob();
        const valid =
          kind === "image"
            ? blob.type.startsWith("image/")
            : (await blob.slice(0, 5).text()) === "%PDF-";
        if (!controller.signal.aborted) setAvailable(valid);
      })
      .catch(() => {});
    return () => controller.abort();
  }, [url, kind]);
  return available;
}
function useHead(title, description) {
  useEffect(() => {
    const oldTitle = document.title;
    document.title = title;
    const specs = [
      ["name", "description", description],
      ["property", "og:title", title],
      ["property", "og:description", description],
      ["property", "og:type", "website"],
      ["name", "twitter:card", "summary_large_image"],
    ];
    const records = specs.map(([attr, key, content]) => {
      let node = document.head.querySelector(`meta[${attr}="${key}"]`);
      const created = !node;
      const old = node?.getAttribute("content");
      if (!node) {
        node = document.createElement("meta");
        node.setAttribute(attr, key);
        document.head.append(node);
      }
      node.setAttribute("content", content);
      return { node, created, old };
    });
    const font = document.createElement("link");
    font.rel = "stylesheet";
    font.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;500;600&display=swap";
    document.head.append(font);
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/svg+xml";
    const gold = getComputedStyle(document.documentElement)
      .getPropertyValue("--primary")
      .trim();
    favicon.href = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><text x="12" y="49" font-family="Georgia" font-size="54" fill="${gold}">P</text></svg>`)}`;
    document.head.append(favicon);
    return () => {
      document.title = oldTitle;
      font.remove();
      favicon.remove();
      records.forEach(({ node, created, old }) =>
        created
          ? node.remove()
          : old == null
            ? node.removeAttribute("content")
            : node.setAttribute("content", old),
      );
    };
  }, [title, description]);
}
function ResumeActions({ available }) {
  return available ? (
    <div className="actions">
      <IconButton href={DATA.resume} icon="down" download={DATA.resumeFilename}>
        {DATA.labels.download}
      </IconButton>
      <IconButton href={DATA.resume} icon="arrow" secondary external>
        {DATA.labels.view}
      </IconButton>
    </div>
  ) : (
    <span className="asset-note">
      <Icon name="document" />
      {DATA.labels.resumeMissing}
    </span>
  );
}
function ProjectCard({ project, index }) {
  return (
    <Card
      className={project.featured ? "project-card featured" : "project-card"}
    >
      <div className="project-top">
        <span className="project-number">
          {String(index + 1).padStart(2, "0")}
        </span>
        {project.badge && <span className="badge">{project.badge}</span>}
        <Icon name={project.featured ? "chart" : "spark"} />
      </div>
      <h3>{project.title}</h3>
      <p className="tagline">{project.tagline}</p>
      <p>{project.description}</p>
      {project.features?.length > 0 && (
        <details>
          <summary>{DATA.labels.details}</summary>
          <ul>
            {project.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>
      )}
      <div className="chips">
        {project.stack.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>
      {(project.github || project.live) && (
        <div className="actions project-actions">
          {project.github && (
            <IconButton href={project.github} icon="github" secondary external>
              {DATA.labels.github}
            </IconButton>
          )}
          {project.live && (
            <IconButton href={project.live} icon="arrow" secondary external>
              {DATA.labels.live}
            </IconButton>
          )}
        </div>
      )}
    </Card>
  );
}
export function Portfolio() {
  const [active, setActive] = useState("profile");
  const [menuOpen, setMenuOpen] = useState(false);
  const [photoFailed, setPhotoFailed] = useState(false);
  const resumeAvailable = useAsset(DATA.resume);
  useHead(
    `${DATA.name} | Software & Financial Engineering`,
    DATA.labels.metaDescription,
  );
  useEffect(() => {
    const nodes = DATA.nav
      .map(([id]) => document.getElementById(id))
      .filter(Boolean);
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries
          .filter((item) => item.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        if (entry) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -60% 0px", threshold: 0 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <div className="portfolio">
      <header className="navbar">
        <div className="nav-inner">
          <a
            href="#profile"
            className="monogram"
            aria-label={DATA.name}
            onClick={() => setMenuOpen(false)}
          >
            {DATA.initials}
            <span className="brand-name">{DATA.name}</span>
          </a>
          <button
            type="button"
            className="menu-button"
            aria-label={DATA.labels.menu}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
          <nav
            id="main-navigation"
            className={menuOpen ? "navigation is-open" : "navigation"}
          >
            {DATA.nav.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? "active" : ""}
                aria-current={active === id ? "location" : undefined}
                onClick={() => {
                  setActive(id);
                  setMenuOpen(false);
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <main className="container">
        <section
          id="profile"
          className="profile"
          aria-labelledby="profile-title"
        >
          <div className="portrait-ring">
            <div className="portrait">
              {!photoFailed ? (
                <img
                  src={DATA.photo}
                  alt={DATA.labels.profileAlt}
                  loading="lazy"
                  onError={() => setPhotoFailed(true)}
                />
              ) : (
                <span className="portrait-initials" aria-label={DATA.name}>
                  {DATA.initials}
                </span>
              )}
            </div>
          </div>
          <div className="profile-copy">
            <p className="eyebrow">{DATA.name}</p>
            <h1 id="profile-title">
              {DATA.role.split(" · ").map((role, index) => (
                <React.Fragment key={role}>
                  {index > 0 && <span className="role-divider"> · </span>}
                  <span>{role}</span>
                </React.Fragment>
              ))}
            </h1>
            <p className="intro">{DATA.intro}</p>
            <div className="actions">
              <IconButton href="#projects" icon="arrow">
                {DATA.labels.projects}
              </IconButton>
              {resumeAvailable && (
                <IconButton
                  href={DATA.resume}
                  icon="down"
                  secondary
                  download={DATA.resumeFilename}
                >
                  {DATA.labels.download}
                </IconButton>
              )}
            </div>
          </div>
        </section>
        <Section id="about" title={DATA.labels.about}>
          <div className="story">
            {DATA.story.map(([title, text]) => (
              <div className="story-stage" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <blockquote>{DATA.closing}</blockquote>
          <h3 className="subheading">{DATA.labels.education}</h3>
          <div className="grid grid-three">
            {DATA.education.map(([degree, institute, period, score]) => (
              <Card key={degree}>
                <span className="small-label">{period}</span>
                <h4>{degree}</h4>
                <p>{institute}</p>
                <strong className="score">{score}</strong>
              </Card>
            ))}
          </div>
          <h3 className="subheading">{DATA.labels.coursework}</h3>
          <div className="chips course-chips">
            {DATA.gradedCourses.map((course) => (
              <Chip key={course} grade={DATA.grade}>
                {course}
              </Chip>
            ))}
            {DATA.courses.map((course) => (
              <Chip key={course}>{course}</Chip>
            ))}
          </div>
          <h3 className="subheading">{DATA.labels.skills}</h3>
          <div className="grid grid-three skills-grid">
            {DATA.skills.map(([title, skills, description]) => (
              <Card key={title}>
                <h4>{title}</h4>
                <div className="chips">
                  {skills.map((skill) => (
                    <Chip key={skill}>{skill}</Chip>
                  ))}
                </div>
                <p>{description}</p>
              </Card>
            ))}
          </div>
        </Section>
        <Section id="experience" title={DATA.labels.experience}>
          <div className="experience-timeline">
            {DATA.experience.map((job) => (
              <Card key={`${job.company}-${job.dates}`}>
                <div className="job-heading">
                  <div>
                    <h3>{job.role}</h3>
                    {job.link ? (
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {job.company}
                      </a>
                    ) : (
                      <p className="company">{job.company}</p>
                    )}
                  </div>
                  <span className="small-label">{job.dates}</span>
                </div>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <div className="coming-soon">{DATA.labels.soon}</div>
        </Section>
        <Section id="projects" title={DATA.labels.projectsTitle}>
          <p className="eyebrow section-eyebrow">{DATA.labels.featured}</p>
          <div className="grid grid-two">
            {DATA.projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
          </div>
          <h3 className="subheading">{DATA.labels.more}</h3>
          <div className="grid grid-two">
            {DATA.projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index + 2}
                />
              ))}
          </div>
        </Section>
        <Section id="resume" title={DATA.labels.resume}>
          <div className="resume-band">
            <Icon name="document" width="44" height="44" />
            <div>
              <h3>{DATA.name}</h3>
              <p>{DATA.labels.resumeSummary}</p>
            </div>
            <ResumeActions available={resumeAvailable} />
          </div>
        </Section>
        <Section id="socials" title={DATA.labels.socials}>
          <div className="grid grid-three">
            {DATA.socials.map(([icon, name, username, url]) => (
              <a
                className="card social-card"
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}: ${username}`}
              >
                <Icon name={icon} />
                <div>
                  <h3>{name}</h3>
                  <p>{username}</p>
                </div>
                <Icon name="arrow" />
              </a>
            ))}
          </div>
        </Section>
        <aside className="community" aria-labelledby="community-title">
          <h3 id="community-title">{DATA.labels.community}</h3>
          <ul>
            {DATA.community.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
        <Section id="contact" title={DATA.labels.contact}>
          <p className="contact-lead">{DATA.availability}</p>
          <div className="contact-links">
            <a href={`mailto:${DATA.email}`}>
              <Icon name="mail" />
              {DATA.email}
              <Icon name="arrow" />
            </a>
            <a href={DATA.phoneHref}>
              <Icon name="phone" />
              {DATA.phone}
            </a>
          </div>
        </Section>
      </main>
      <footer className="footer container">
        <span>{DATA.labels.footer}</span>
        <a href="#profile">
          {DATA.labels.top}
          <Icon name="up" />
        </a>
      </footer>
    </div>
  );
}
export function KarmaHome() {
  const k = DATA.karma;
  const [imageFailed, setImageFailed] = useState(false);
  const pdfAvailable = useAsset(k.samplePdf);
  useHead(k.name, k.intro);
  return (
    <div className="karma-home">
      <header className="karma-nav container">
        <a className="karma-brand" href="#karma-top">
          {k.name}
        </a>
        <IconButton href={k.loginHref} icon="arrow">
          {k.login}
        </IconButton>
      </header>
      <main className="container">
        <section id="karma-top" className="karma-hero">
          <p className="eyebrow">{k.name}</p>
          <h1>{k.name}</h1>
          <p>{k.intro}</p>
          <IconButton href={k.loginHref} icon="arrow">
            {k.login}
          </IconButton>
        </section>
        <section className="karma-section">
          <h2>{k.servicesTitle}</h2>
          <div className="grid grid-three">
            {k.services.map(([icon, title, text]) => (
              <Card key={title}>
                <Icon name={icon} />
                <h3>{title}</h3>
                <p>{text}</p>
              </Card>
            ))}
          </div>
        </section>
        <section className="karma-section">
          <h2>{k.featuresTitle}</h2>
          <div className="grid grid-two">
            {k.features.map(([icon, title, text]) => (
              <Card key={title}>
                <Icon name={icon} />
                <h3>{title}</h3>
                <p>{text}</p>
              </Card>
            ))}
          </div>
        </section>
        <section className="karma-section">
          <h2>{k.previewTitle}</h2>
          <div className="bill-frame">
            {!imageFailed ? (
              <img
                src={k.sampleImage}
                alt={k.sampleAlt}
                loading="lazy"
                onError={() => setImageFailed(true)}
              />
            ) : pdfAvailable ? (
              <>
                <iframe
                  src={k.samplePdf}
                  title={k.previewTitle}
                  loading="lazy"
                />
                <IconButton
                  href={k.samplePdf}
                  icon="document"
                  external
                  secondary
                >
                  {DATA.labels.view}
                </IconButton>
              </>
            ) : (
              <div className="bill-placeholder">
                <Icon name="document" width="60" height="60" />
                <h3>{k.sampleMissing}</h3>
                <p>{k.sampleHint}</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <footer className="container karma-footer">{k.footer}</footer>
    </div>
  );
}
export default function App() {
  return <Portfolio />;
}