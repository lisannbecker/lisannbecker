// All resume content lives here. Edit text in this file; the pages only handle layout.

export const profile = {
  name: 'Lisann Becker',
  // Used in search results and link previews.
  role: 'AI, data and automation',
  location: 'Amsterdam, NL',
  email: 'lisann.becker@gmx.de',
  // TODO: check these URLs.
  github: 'https://github.com/lisannbecker',
  linkedin: 'https://www.linkedin.com/in/lisannbecker',
  // Home page, under the name.
  intro:
    'I build AI, data and automation systems, working directly with the teams who use them.',  // Top of the resume page.
  summary:
    'Trained in machine learning, with three years at Tesla building LLM tools, data pipelines, analytics and automations. Most of that work happened side by side with business teams: scoping problems with them, building the solution, and training people to use it.',
};

export interface Role {
  title: string;
  org: string;
  start: string;
  end: string;
  location: string;
  url?: string;
  points: string[];
}

export const experience: Role[] = [
  {
    title: 'Software Engineer',
    org: 'Tesla',
    start: '2025',
    end: 'Present',
    location: 'Amsterdam, Netherlands',
    points: [
      'Engineered an English-to-SQL system with retrieval and an LLM query generator, speeding team query writing 5x and reaching 7 teams.',
      'Built Airflow ETLs and CI/CD processes for three compensation tools, two taxation tools, a job description library and a leadership scorecard app.',
      'Built an EMEA job description library app supporting 1,200 managers and 180 HR and recruiters with integrated version control and approvals.',
      'Raised engineering and AI capability across the team through enablement in AI coding tools, API-based deployment, secure token and Vault governance, and production application delivery; selected to co-lead EMEA AI Office Hours.',
    ],
  },
  {
    title: 'Founder',
    org: 'Origami CV',
    start: '2025',
    end: 'Present',
    location: 'Netherlands',
    url: 'https://www.origamicv.com',
    points: [
      'Resume tool that interviews you, optimises your content for the job, and lets you fine-tune every detail of the layout.',
      'In post-launch hypercare stage, attracting 1000+ users monthly. Shipping fixes and improvements based on usage analytics and user feedback.',
      'Tech stack: Next.js, React, TypeScript, Tailwind CSS, FastAPI (Python), PostgreSQL, PostHog, Playwright (PDF rendering) and Docker.',
    ],
  },
  {
    title: 'Associate Software Engineer',
    org: 'Tesla',
    start: '2023',
    end: '2025',
    location: 'Amsterdam, Netherlands',
    points: [
      'Automated promotion-letter generation, distribution, and signature tracking for ~800 promotions each half-year using Airflow and hash-based detection.',
      'Built OpenCV preprocessing and OCR to extract machine-readable zone fields from passports across EMEA and NA. Processed 69,000 passport documents for United States H1B visa-lottery submissions; validated extracted data and finding fraudulent nationality records.',
      'Trained 150 people in Power Automate notification workflows, enabling 7 teams to build automations independently.',
      'Audited 50+ security groups against business mappings, identifying invalid access for 3,000 people across EMEA.',
    ],
  },
  {
    title: 'Data Analytics Intern, Automation',
    org: 'Tesla',
    start: '2023',
    end: '2023',
    location: 'Amsterdam, Netherlands',
    points: [
      'Automated recruitment job feeds to 11 German job boards, increasing applications in the region by 14% and ensuring daily role updates.',
      'Reduced Recruitment Coordination team workload by 15% (equivalent to EUR 50k annual salary) by automating interview reminders and availability requests across EMEA.',
    ],
  },
  {
    title: 'Student Member of Policy Advocacy Committee',
    org: 'United Nations',
    start: '2020',
    end: '2021',
    location: 'Remote',
    points: [
      "Co-author: PCUN's Statement in Commemoration of the United Nations' World Health Day 2021.",
      "Reviewer: SPSSI's Statement for the United Nations' 54th Commission on Population and Development.",
    ],
  },
  {
    title: 'Research Assistant, Radicalisation',
    org: 'University of Amsterdam',
    start: '2020',
    end: '2021',
    location: 'Amsterdam, Netherlands',
    points: [
      'Researched radicalisation interventions in collaboration with TNO and the Dutch government, supervised by Dr Allard Feddes.',
    ],
  },
];

export const education = [
  {
    title: 'MSc Artificial Intelligence',
    org: 'University of Amsterdam',
    start: '2023',
    end: '2025',
    location: 'Amsterdam, Netherlands',
    points: [
      'Thesis: Developed and evaluated a diffusion-based SE(3) motion prior with KDE corrections, reducing pose prediction error (simulated ATE) from 1.7833 to 1.0725; graded 8.5/10.',
      'Developed three ROS2 autonomous-robot navigation pipelines for perception, localisation, and mapping, achieving the highest group grade, 9/10.',
      'Investigated crosscoder representations across three transformer model pairs, identifying shared and model-specific features through controlled activation comparisons.',
    ],
  },
  {
    title: "Open Pre-Master's, Artificial Intelligence",
    org: 'Vrije Universiteit Amsterdam',
    start: '2024',
    end: '2024',
    location: 'Amsterdam, Netherlands',
    points: [
      'Electives in graph and network theory, multivariate calculus, linear algebra, information systems, probability theory and logic.',
    ],
  },
  {
    title: 'BSc Political Science',
    org: 'University of Amsterdam',
    start: '2020',
    end: '2024',
    location: 'Amsterdam, Netherlands',
    points: [
      "Second bachelor's, studied in parallel with Psychology.",
      'Electives in scientific programming and data processing.',
    ],
  },
  {
    title: 'BSc Psychology',
    org: 'University of Amsterdam',
    start: '2019',
    end: '2022',
    location: 'Amsterdam, Netherlands',
    points: ['Honours student, GPA 8.3.'],
  },
];

export const skills = [
  {
    group: 'Machine Learning',
    items: 'PyTorch, Hugging Face Transformers, TensorFlow, scikit-learn; model design, training and evaluation, LoRA fine-tuning, distillation, diffusion models, reinforcement learning',
  },
  {
    group: 'LLMs & Interpretability',
    items: 'Retrieval, text-to-SQL, LangChain, OpenAI API, crosscoders, TransformerLens',
  },
  {
    group: 'Computer Vision & Robotics',
    items: 'OpenCV, OCR, YOLO, NeRF, 3D segmentation, Open3D, ROS2, SLAM',
  },
  {
    group: 'Software',
    items: 'Python, TypeScript, JavaScript, R, SQL (PostgreSQL, MySQL, SQL Server), React, Next.js, Node.js, FastAPI, Tailwind CSS',
  },
  {
    group: 'Data & Automation',
    items: 'Apache Airflow ETLs, Power Automate, Playwright, web drivers, XML feeds, document and notification automation, Power BI, Tableau',
  },
  {
    group: 'DevOps & Cloud',
    items: 'Docker, Kubernetes, Jenkins, CI/CD, Azure Blob Storage, Splunk',
  },
  {
    group: 'Security & Identity',
    items: 'Entra ID, service principals, Active Directory, SSO, OAuth, HashiCorp Vault, secrets and token governance, application security reviews, access audits, PR testing',
  },
  {
    group: 'Enterprise & Product Tools',
    items: 'SharePoint, Workday, Jira, Confluence, Stripe, PostHog',
  },
];

export const languages = [
  { name: 'German', level: 'Native' },
  { name: 'English', level: 'C2' },
  { name: 'Dutch', level: 'B2' },
];
