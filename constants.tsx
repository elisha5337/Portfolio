import { Project, Skill, Testimonial, BlogPost } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "DiscussionHubSystem",
    description:
      "High-concurrency real-time communication engine for global engagement.",
    fullDescription:
      "A high-concurrency real-time communication engine designed to bridge global perspectives, allowing users to engage with trending topics and hot issues through an optimized, low-latency discussion framework.",
    features: [
      "Real-Time communication",
      "Multi-user collaboration",
      "Customizable user roles and permissions",
      "Real-time notification system",
    ],
    image: "./src/image.png",
    tags: ["React", "Python", "Django", "web", "mySQL"],
    link: "https://github.com/elisha5337/DiscusionHubSystem",
    github: "#",
  },
  {
    id: "2",
    title: "ExamHub Mobile App",
    description:
      "Cross-platform preparation tool for national and mock examinations.",
    fullDescription:
      "Cross-platform mobile application for practicing mock exams and preparing for national exams. Anyone can use this app for study and practicing previous year exams with a focus on accessibility and offline reliability.",
    features: [
      "Practicing previous year exams",
      "Offline-first data caching",
      "Training simulation tests",
      "Tracking users status and progress",
    ],
    image: "./src/me.jpg",
    tags: ["Java", "Mobile"],
    link: "https://github.com/elisha5337/ExamHub-Mob-App",
    github: "#",
  },
  {
    id: "3",
    title: "Graphics Designing",
    description:
      "Premium visual identity and digital asset system for modern brands.",
    fullDescription:
      "This project involved creating a cohesive visual language, including logo design, typography systems, and a suite of social media assets. Extensive photo editing was performed to create a premium, editorial aesthetic for brand scaling.",
    features: [
      "Vector-based logo architecture",
      "Advanced color theory application",
      "High-end retouching and compositing",
      "Social media marketing kit",
    ],
    image: "./src/elsa.png",
    gallery: [
      "./src/ElsaArba.png",
      "./src/FlyerDesignProject3.jpg",
      "./src/Elsaye-Arba.jpg",
      "./src/logo.jpg",
      "./src/FlyerDesignProject3.jpg",
      "./src/Elsaye-Arba.jpg",
      "./src/logo.jpg",
    ],
    tags: ["Graphics", "Design", "Photo Editing"],
    link: "",
    github: "#",
  },
  {
    id: "4",
    title: "Amazon Clone Website",
    description:
      "Full-stack e-commerce replica demonstrating complex marketplace logic.",
    fullDescription:
      "This project is a high-fidelity clone of the real Amazon website, showcasing advanced skills in full-stack development, including complex state management and secure checkout flows.",
    features: [
      "Frontend and UI cloning",
      "Backend commerce engine",
      "External API integration",
      "User authentication and authorization",
      "Responsive design and mobile optimization",
    ],
    image: "./src/Gemini_Generated_Image_b282eob282eob282.png",
    tags: ["Fullstack", "Web", " React", "Node.js"],
    link: "https://github.com/elisha5337/AmazonCloneProject",
    github: "#",
  },
  {
    id: "5",
    title: "Employee-Management-System",
    description:
      "Comprehensive enterprise tool for tracking personnel and workflows.",
    fullDescription:
      "A robust employee management system that allows organizations to track employee information, monitor performance metrics, and manage organizational workflows efficiently through a secure administrative dashboard.",
    features: [
      "Employee data management",
      "Performance tracking",
      "Workflow automation",
      "Reporting and analytics engine",
      "User authentication and authorization",
    ],
    image: "./src/download.webp",
    tags: ["Fullstack", "Web", "React", "Node.js"],
    link: "https://github.com/elisha5337/Employee-Management-system-Django-React",
    github: "#",
  },
  {
    id: "6",
    title: "Netflix Clone Website",
    description:
      "Immersive streaming platform replica with dynamic content fetching.",
    fullDescription:
      "This project is a sophisticated clone of the real Netflix website, demonstrating full-stack development skills specifically in streaming media delivery and dynamic data population via external movie databases.",
    features: [
      "Frontend cinema experience",
      "Backend media management",
      "Movie Database API integration",
      "User authentication and profile management",
      "Responsive mobile optimization",
    ],
    image: "./src/netflix.png",
    tags: ["Fullstack", "Web", "React", "Node.js"],
    link: "",
    github: "#",
  },
];

export const SKILLS: Skill[] = [
  // Web Development Stack
  {
    name: "React.js",
    icon: "⚛️",
    detailedDescription:
      "Expert building of complex, high-performance web interfaces using modern React paradigms. Specialized in state management, hooks, and Next.js optimization.",
    subSkills: ["Next.js", "Redux", "Hooks", "Tailwind CSS"],
  },
  {
    name: "JavaScript",
    icon: "📜",
    detailedDescription:
      "Deep architectural knowledge of modern JavaScript (ES6+), asynchronous programming, and DOM manipulation for high-end interactivity.",
    subSkills: ["ES6+", "Async/Await", "Promises", "Functional JS"],
  },
  {
    name: "Node.js",
    icon: "🚀",
    detailedDescription:
      "Scalable server-side engineering. Building RESTful APIs and real-time backend systems with high throughput and efficiency.",
    subSkills: ["Express", "Middleware", "WebSockets", "NPM/Yarn"],
  },
  {
    name: "Python",
    icon: "🐍",
    detailedDescription:
      "Sophisticated development in Python for both scripting and web backends. Expertise in building efficient, readable code for heavy logic.",
    subSkills: ["Scripting", "Pip", "Automation", "Poetry"],
  },
  {
    name: "Django",
    icon: "🎸",
    detailedDescription:
      "Architecting robust enterprise-grade backends using Django. Expert in ORM, security protocols, and rapid application development.",
    subSkills: [
      "Django Rest Framework",
      "ORM",
      "Authentication",
      "Admin Panel",
    ],
  },
  {
    name: "MySQL & Postgres",
    icon: "💾",
    detailedDescription:
      "Relational database architecture. Expert in schema design, query optimization, and managing large datasets with ACID compliance.",
    subSkills: [
      "Relational Schema",
      "Indexing",
      "Query Optimization",
      "Transactions",
    ],
  },
  // Mobile App Stack
  {
    name: "Java / Kotlin",
    icon: "☕",
    detailedDescription:
      "Native Android engineering with Kotlin and Java. Deep mastery of Android SDK, Coroutines, and modern Jetpack libraries.",
    subSkills: ["Kotlin Coroutines", "Android SDK", "Jetpack Compose", "MVVM"],
  },
  {
    name: "React Native",
    icon: "📱",
    detailedDescription:
      "High-fidelity cross-platform mobile development. Combining the speed of React with native performance for iOS and Android.",
    subSkills: ["Expo", "Native Modules", "Fast Refresh", "Reanimated"],
  },
  {
    name: "Flutter",
    icon: "💙",
    detailedDescription:
      "Building beautiful, natively compiled applications for mobile using Dart. Specialized in custom widget design and animations.",
    subSkills: ["Dart", "Widgets", "State Management", "Material Design"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    content:
      "A master of both web and mobile paradigms. The speed and quality of delivery for our cross-platform app were exceptional.",
    author: "Bereket Tadesse",
    role: "Software Engineer ",
    avatar: "./src/pc1.jpg",
  },
  {
    id: "2",
    content:
      "The Django backend built for our e-commerce site is incredibly stable and fast. A true professional engineer.",
    author: "Samuel Getachew",
    role: "Backend Developer",
    avatar: "./src/pc.png",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Native Performance in React Native",
    excerpt:
      "Optimizing your bridge and UI thread for a truly fluid 60fps mobile experience.",
    date: "March 10, 2024",
    readTime: "8 min read",
    image: "./src/me.jpg",
  },
  {
    id: "2",
    title: "Django Security Best Practices",
    excerpt:
      "Hardening your Django applications against modern web vulnerabilities.",
    date: "April 05, 2024",
    readTime: "10 min read",
    image: "./src/gc.jpg",
  },
];
