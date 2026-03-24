export type NavItem = {
  href: string;
  label: string;
};

export type ProjectSection = {
  heading: string;
  content: string[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  status?: string;
  summary: string;
  shortSummary: string;
  role: string;
  technologies: string[];
  tags: string[];
  featured?: boolean;
  overview: string;
  context: string[];
  built: string[];
  decisions: string[];
  outcome: string[];
  futureWork?: string[];
};

export const site = {
  name: "Dazheng Ted Fang",
  title: "I build real systems across robotics, software, and applied AI.",
  intro:
    "Engineer with experience in real-time perception and control systems, production-grade software, and AI-powered products. My work spans immersive locomotion platforms, full-stack business systems, and retrieval-augmented engineering tools.",
  email: "dazh.fang@gmail.com",
  github: "https://github.com/TedFang-424/",
  linkedin: "https://www.linkedin.com/in/dazhengfang-b59026255/",
  websiteUrl: "https://dazheng-fang.com",
  resumePdfHref: "/Dazheng_Ted_Fang_Resume.pdf",
  education: [
    "Vanderbilt University - M.S. in Computer Science",
    "Southeast University - B.Eng. in Computer Science (AI track)",
  ],
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/research", label: "Research" },
  { href: "/ask-my-work", label: "Ask My Work" },
  { href: "/contact", label: "Contact" },
];

export const heroStats = [
  { value: "4", label: "Featured systems" },
  { value: "500+", label: "Operational SKUs supported" },
  { value: "10+", label: "Locations across live workflows" },
  { value: "2023", label: "IEEE TVCG publication year" },
];

export const workingPrinciples = [
  "I like projects that connect sensing, control, and software into one coherent product.",
  "I care about execution quality, not just experimentation.",
  "I try to make technically ambitious systems legible, usable, and trustworthy.",
];

export const projects: Project[] = [
  {
    slug: "hex-core",
    title: "Hex-Core-MK1 Omnidirectional Treadmill",
    category: "Robotics / XR / Real-Time Systems",
    summary:
      "A real-time locomotion and interaction platform for immersive VR experiences, combining motion tracking, localization, and locomotion-aware control.",
    shortSummary:
      "Built software for a VR omnidirectional treadmill platform integrating motion tracking, locomotion control, and immersive interaction.",
    role: "Cofounder and Software/Systems Engineer",
    technologies: [
      "Unity",
      "Computer Vision",
      "Localization",
      "Motion Tracking",
      "Control Logic",
      "XR Systems",
    ],
    tags: ["Robotics / XR", "Localization", "Control Systems"],
    featured: true,
    overview:
      "Hex-Core-MK1 was built as an immersive locomotion system designed to make room-scale VR movement feel more natural, stable, and convincing. My work focused on the software stack that connected tracking, locomotion interpretation, and interaction into a usable product prototype.",
    context: [
      "I co-founded SYH Technology and helped shape the product direction around embodied interaction, believable locomotion, and investor-facing demos.",
      "The challenge was not just getting motion data into the system, but building a pipeline that could interpret user movement reliably enough to support immersive experiences.",
    ],
    built: [
      "Led software development for the treadmill platform and integrated motion tracking, locomotion-control modules, and Unity-based interaction into a functional prototype.",
      "Contributed to a four-camera passive localization workflow that improved indoor tracking robustness without requiring an overly intrusive setup.",
      "Developed gait-aware control logic to improve responsiveness and motion stability as users transitioned across walking patterns.",
    ],
    decisions: [
      "We treated localization, control, and immersive rendering as a single product system rather than isolated subsystems, which made demo performance more reliable.",
      "The locomotion logic was tuned around user feel as much as raw signal processing so the platform remained convincing during live demonstrations.",
    ],
    outcome: [
      "The prototype was packaged for investor demos and early commercialization conversations.",
      "The work later contributed to technical credibility around the Hex-Core system and the broader research direction behind it.",
    ],
  },
  {
    slug: "ted-tech",
    title: "Ted Tech Production Systems",
    category: "Production Software / Full-Stack",
    summary:
      "Production business systems for e-commerce and appointment operations.",
    shortSummary:
      "Built and shipped production systems for multi-location business operations, spanning scheduling, inventory, payments, and customer workflows.",
    role: "Full-Stack Engineer",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Payments",
    ],
    tags: ["Production Software", "Operations", "Full-Stack"],
    featured: true,
    overview:
      "At Ted Tech LLC, I built operational software that had to work reliably for day-to-day business use. The focus was less on prototypes and more on shipping systems that reduced manual work, supported staff, and scaled with real operations.",
    context: [
      "The business handled 500+ SKUs and appointment workflows across more than 10 massage shop locations.",
      "Operational pain points included scheduling friction, inventory coordination, payment handling, and inconsistent manual workflows.",
    ],
    built: [
      "Designed and shipped production software across frontend, backend, database, and deployment layers.",
      "Built backend and data workflows for reservations, inventory management, payment handling, and customer operations.",
      "Improved reliability in order processing and reduced manual scheduling overhead by turning ad hoc processes into structured product flows.",
    ],
    decisions: [
      "I prioritized operational clarity and error reduction over unnecessary system complexity so the software remained maintainable while solving real bottlenecks.",
      "The architecture emphasized traceable business workflows and dependable admin tooling because the product needed to support staff under live conditions.",
    ],
    outcome: [
      "The systems supported active multi-location operations and reduced recurring manual work.",
      "This project sharpened my ability to connect product thinking, implementation detail, and operational reliability in production environments.",
    ],
  },
  {
    slug: "ros-teleoperation",
    title: "ROS2 Treadmill-Driven Robot Teleoperation Prototype",
    category: "Robotics / Systems",
    status: "In Progress",
    summary:
      "A software-first ROS2 teleoperation prototype that maps locomotion inputs to robot motion commands in simulation.",
    shortSummary:
      "A ROS2 teleoperation prototype exploring how treadmill-style locomotion intent can drive real-time robot control and telemetry capture.",
    role: "Systems Engineer",
    technologies: [
      "ROS2",
      "Python",
      "Telemetry Logging",
      "Trajectory Visualization",
      "Simulation",
    ],
    tags: ["Robotics Systems", "ROS2", "Teleoperation"],
    featured: true,
    overview:
      "This prototype explores how treadmill-style locomotion intent can become a practical interface for robot teleoperation. The current work is software-first, with simulation used to validate the control and observability pipeline before hardware integration.",
    context: [
      "Traditional teleoperation often separates human intent from embodied motion. I wanted to explore whether locomotion itself could act as the control signal.",
      "The project sits at the intersection of human-in-the-loop robotics, real-time command mapping, and experimentation tooling.",
    ],
    built: [
      "Designed a ROS2 pipeline that maps locomotion-style input signals to motion commands in simulation.",
      "Added telemetry logging and trajectory visualization to inspect how user intent propagates through the control stack.",
      "Structured the project for future hardware integration rather than treating simulation as a dead-end prototype.",
    ],
    decisions: [
      "I chose a software-first workflow so I could iterate quickly on command semantics, observability, and interface design before dealing with hardware constraints.",
      "Logging and visualization were included early because understanding system behavior is just as important as generating motion commands.",
    ],
    outcome: [
      "The prototype establishes a baseline for testing human locomotion as a teleoperation modality.",
      "It also creates a platform for future work in embodied interfaces, robot control, and experiment evaluation.",
    ],
    futureWork: [
      "Integrate physical treadmill or locomotion input hardware.",
      "Expand evaluation around latency, controllability, and user adaptation.",
    ],
  },
  {
    slug: "engineering-knowledge-assistant",
    title: "Website-Deployed Engineering Knowledge Assistant",
    category: "Applied AI",
    status: "In Progress",
    summary:
      "A retrieval-augmented assistant for exploring project materials, technical notes, and engineering knowledge through grounded question answering.",
    shortSummary:
      "A website-integrated RAG system for grounded exploration of my projects, technical materials, and engineering work.",
    role: "Applied AI Engineer",
    technologies: [
      "RAG",
      "Embeddings",
      "Vector Retrieval",
      "Metadata Chunking",
      "Evaluation",
    ],
    tags: ["Applied AI", "RAG", "Knowledge Systems"],
    featured: true,
    overview:
      "This project turns a personal portfolio into an interactive knowledge surface. Instead of just listing projects, it makes technical work explorable through grounded retrieval and citation-aware responses.",
    context: [
      "Engineering work often lives across notes, project docs, architecture decisions, and code-adjacent artifacts that are hard to browse linearly.",
      "I wanted an interface that could help recruiters, collaborators, or technical peers ask targeted questions and get grounded answers quickly.",
    ],
    built: [
      "Designed a website-integrated RAG concept for project materials, engineering notes, and personal technical knowledge.",
      "Focused on metadata-aware chunking and citation-backed retrieval so answers remain grounded and easier to trust.",
      "Evaluated the system around relevance, groundedness, and latency rather than treating it as a purely aesthetic AI feature.",
    ],
    decisions: [
      "The interface is designed as a product surface, not just a model demo, so interaction quality and trust signals matter as much as retrieval quality.",
      "I kept the content model structured so future ingestion and assistant features can grow without redesigning the whole website.",
    ],
    outcome: [
      "The project creates a natural future extension point for a portfolio that is both expressive and technically legible.",
      "It reflects how I think about applied AI: grounded, useful, and integrated into real user-facing systems.",
    ],
    futureWork: [
      "Add document ingestion and citation rendering.",
      "Introduce conversation memory and richer evaluation tooling for user-facing queries.",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const experience = [
  {
    company: "Ted Tech LLC",
    role: "Full-Stack Engineer",
    period: "Jan 2025 - Present",
    summary:
      "Built and shipped production software for e-commerce and appointment workflows, owning implementation across frontend, backend, database, and deployment.",
    bullets: [
      "Designed backend and data workflows for reservations, inventory, and payment handling.",
      "Reduced order processing errors and manual scheduling overhead.",
    ],
  },
  {
    company: "SYH Technology Co., Ltd.",
    role: "Cofounder & Software/Systems Engineer",
    period: "Jul 2022 - Dec 2022",
    summary:
      "Led software development for the Hex-Core-MK1 omnidirectional treadmill and helped integrate motion tracking, localization, and locomotion-aware interaction into an investor demo-ready prototype.",
    bullets: [
      "Contributed to a four-camera passive localization workflow for robust indoor tracking.",
      "Developed gait-aware control logic to improve responsiveness and motion stability.",
    ],
  },
];

export const research = {
  publications: [
    {
      title: "Strolling in Room-Scale VR: Hex-Core-MK1 Omnidirectional Treadmill",
      venue: "IEEE Transactions on Visualization and Computer Graphics",
      year: "2023",
      summary:
        "Research on an omnidirectional treadmill system for room-scale VR locomotion, connecting embodied interaction design with real-time systems implementation.",
      link: "https://pubmed.ncbi.nlm.nih.gov/36264727/",
    },
    {
      title: "High-performance Data Management for Whole Slide Image Analysis in Digital Pathology",
      venue:
        "Proceedings of SPIE Medical Imaging 2024: Digital and Computational Pathology",
      year: "2024",
      summary:
        "A Vanderbilt publication on high-performance I/O and data management for whole-slide image analysis in digital pathology, with a focus on parallelized data pipelines and performance improvements for CPU and GPU workloads.",
      link: "https://www.vanderbilt.edu/valiant/2024/06/20/high-performance-data-management-for-whole-slide-image-analysis-in-digital-pathology/",
    },
  ],
  awards: [
    "Region 10 Winner, IEEE Circuits and Systems Society Student Design Competition, 2020-2021",
    "Silver Medal, International Exhibition of Inventions Geneva, 2022",
  ],
  recognition: [
    "IEEE TVCG publication",
    "IEEE CAS student competition award",
    "Geneva silver medal",
  ],
};

export const skills = {
  languages: ["Python", "TypeScript / JavaScript", "C++", "SQL"],
  robotics: [
    "ROS2",
    "Computer Vision",
    "Pose Estimation",
    "Motion Tracking",
    "Control Systems",
    "Teleoperation",
    "Unity",
  ],
  software: [
    "Next.js",
    "React",
    "FastAPI",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "REST APIs",
    "Docker",
  ],
  ai: [
    "RAG",
    "LLM Applications",
    "Retrieval Pipelines",
    "Embeddings",
    "Vector Retrieval",
  ],
};

export const assistantQuestions = [
  "What did you build at SYH?",
  "How does your ROS teleoperation project work?",
  "What kinds of systems do you enjoy building?",
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const siteUrl = site.websiteUrl || null;
