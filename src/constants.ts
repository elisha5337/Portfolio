import {
  Palette,
  Files,
  Tv,
  Layout,
  Code2,
  Smartphone,
  PenTool,
  Image as ImageIcon,
} from "lucide-react";
import raw1 from "./Assets/raw.jpg";
import edited1 from "./Assets/edited1.png";
import raw2 from "./Assets/raw2.jpeg";
import edited2 from "./Assets/edited2.png";
import edited3 from "./Assets/edited3.png";
import raw3 from "./Assets/raw3.jpg";
import edited4 from "./Assets/Gurd-photo.png";
import raw4 from "./Assets/raw4.jpg";
import banner1Web from "./Assets/banner1-web.jpg";
import rollup1Web from "./Assets/RollUp1-web.jpg";
import logo1 from "./Assets/logo.jpg";
export const PERSONAL_INFO = {
  name: "Elsaye Arba",
  location: "Ethiopia",
  profession: "Creative Digital Freelancer",
  email: "elsayearba@gmail.com",
  bio: "I am a passionate digital freelancer from Ethiopia with skills in design, video editing, and development. I help businesses build strong visual identities and digital experiences that attract customers and grow their brand.",
  tagline: "I Create Digital Designs & Experiences That Grow Your Business",
  subheadline:
    "Freelancer specializing in design, video editing, and development",
  socials: {
    github: "https://github.com/elisha5337",
    instagram: "https://www.instagram.com/elishaarba/",
    telegram: "https://t.me/onetruthlife",
    tiktok: "https://www.tiktok.com/@elishaelegant",
  },
};

export const SERVICES = [
  {
    id: "logo-design",
    title: "Logo Design",
    description:
      "Crafting unique visual identities that define your brand and make a lasting impression.",
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
    deliverables: [
      "Vector files (AI, EPS)",
      "High-res PNG & JPG",
      "Brand guide",
    ],
    benefits: ["Professional look", "Brand recognition", "Scalability"],
  },
  {
    id: "flyer-design",
    title: "Flyer Design",
    description:
      "Eye-catching flyers for events, businesses, and promos that drive engagement.",
    icon: Files,
    image:
      "https://images.unsplash.com/photo-1623039405147-547794f92e9e?q=80&w=800&auto=format&fit=crop",
    deliverables: ["Print-ready PDF", "Social media versions", "Source files"],
    benefits: ["Increased sales", "Better visibility", "Clear communication"],
  },
  {
    id: "banner-design",
    title: "Banner Design",
    description:
      "High-impact social media and digital ad banners to boost your online presence.",
    icon: ImageIcon,
    image: banner1Web,
    deliverables: [
      "Optimized JPG/PNG",
      "Animated versions (if needed)",
      "Multiple sizes",
    ],
    benefits: ["Traffic growth", "Digital authority", "Platform optimization"],
  },
  {
    id: "rollup-banner",
    title: "Roll-up Banner Design",
    description:
      "Professional print branding for exhibitions, offices, and events.",
    icon: PenTool,
    image: rollup1Web,
    deliverables: ["Large format PDF", "High-res prepress files"],
    benefits: [
      "Face-to-face impact",
      "Brand professionality",
      "Lasting impression",
    ],
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description:
      "Cinematic and engaging video content specialized for social media and commercials.",
    icon: Tv,
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
    deliverables: ["Full HD/4K export", "Subtitles/CC", "Motion graphics"],
    benefits: ["Higher engagement", "Storytelling power", "Audience retention"],
  },
  {
    id: "uiux-design",
    title: "UI/UX Design",
    description:
      "Intuitive and beautiful user interfaces designed for seamless user experiences.",
    icon: Layout,
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800&auto=format&fit=crop",
    deliverables: ["Figma prototypes", "User flows", "Design systems"],
    benefits: ["Reduced friction", "User satisfaction", "Modern look"],
  },
  {
    id: "web-dev",
    title: "Web Development",
    description:
      "Custom, responsive websites built with modern technologies for performance and SEO.",
    icon: Code2,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    deliverables: ["Responsive site", "SEO setup", "Source code"],
    benefits: ["Global reach", "Search visibility", "Business growth"],
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    description:
      "Functional and stylish mobile applications tailored to your business needs.",
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    deliverables: [
      "Native/Cross-platform apps",
      "Stores deployment assistance",
    ],
    benefits: ["Customer loyalty", "Direct marketing", "Advanced features"],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Amazon Clone Project",
    category: "Web Development",
    description:
      "A full-stack Amazon replica featuring product listings, user authentication, a shopping cart, and payment integration. Built to demonstrate proficiency in E-commerce architecture.",
    objective:
      "To build a robust E-commerce platform that handles real-time state management and secure payments.",
    challenge:
      "Managing complex cart logic and ensuring a seamless checkout flow across different devices.",
    outcome:
      "Successfully implemented a scalable architecture with secure Stripe payment integration.",
    tools: ["Node.js", "Express", "React", "Javascript", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1523474253046-2cd2c78b6ad1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "ExamHub Mobile App",
    category: "Mobile App Development",
    description:
      "A comprehensive mobile application for student examination management. It allows students to take quizzes, track progress, and view results in real-time.",
    objective:
      "To digitalize the examination process and provide students with an easy-to-use testing interface.",
    challenge:
      "Ensuring data integrity during low-connectivity scenarios and implementing a secure exam timer.",
    outcome:
      "Increased student engagement by 25% and reduced manual grading efforts for teachers.",
    tools: ["Java", "Android Studio", "Firebase", "XML"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Employee Management System",
    category: "Web Development",
    description:
      "An internal corporate tool designed to manage employee records, department structures, and payroll. Highly secure and optimized for administrative efficiency.",
    objective:
      "To centralize employee data and automate routine HR tasks using a modern web interface.",
    challenge:
      "Implementing complex role-based access control (RBAC) and ensuring HIPAA-compliant data security.",
    outcome:
      "Reduced HR processing time by 40% and improved data accuracy across the organization.",
    tools: ["Django", "React", "PostgreSQL", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Discussion Hub System",
    category: "Web Development",
    description:
      "A community-focused web platform for open discussions. Features real-time commenting, thread voting, and category-based sorting.",
    objective:
      "To create a scalable community space for knowledge sharing and interactive debates.",
    challenge:
      "Handling concurrent real-time updates and preventing spam through automated moderation.",
    outcome:
      "Grew to 5,000+ active users within the first three months of launch.",
    tools: ["React", "Node.js", "MongoDB", "Socket.io"],
    image:
      "https://images.unsplash.com/photo-1515378866965-f80dcd591c8a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Netflix Clone",
    category: "Web Development",
    description:
      "A high-fidelity clone of the Netflix streaming interface. Includes dynamic movie fetching, category browsing, and a responsive media player UI.",
    objective:
      "To replicate a world-class streaming experience and optimize video content delivery.",
    challenge:
      "Managing massive amounts of visual metadata and ensuring smooth lazy-loading across wide galleries.",
    outcome:
      "Achieved a Lighthouse performance score of 95+ and perfected the cinema-style UI/UX.",
    tools: ["React", "TMDB API", "Firebase", "Styled Components"],
    image:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "EcoLink Brand Identity",
    category: "Logo Design",
    description:
      "Sustainable tech startup brand identity focusing on connectivity and nature.",
    objective:
      "To redefine the visual presence of a green-tech firm entering the European market.",
    challenge:
      "Balancing the cold efficiency of technology with the warmth of organic nature.",
    outcome:
      "A 40% increase in brand recognition and positive feedback from lead investors.",
    tools: ["Adobe Illustrator", "Photoshop", "Figma"],
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Cinematic Color Grade",
    category: "Photo Editing",
    description:
      "Advanced color correction and grading to achieve a moody, Hollywood-style cinematic look.",
    objective:
      "Transform flat, raw photography into a dramatic storytelling asset.",
    challenge:
      "Matching skin tones while applying aggressive color shifts to the environment.",
    outcome:
      "Client reported a significantly professional visual tone for their social campaign.",
    tools: ["Adobe Photoshop", "Camera Raw", "Lightroom"],
    image: edited1,
    beforeImage: raw1,
    afterImage: edited1,
  },
  {
    id: 8,
    title: "Urban Retouching",
    category: "Photo Editing",
    description:
      "Deep retouching and composite creation for high-end urban advertising.",
    objective:
      "Clean up distracting elements and enhance the focal subject's presence.",
    challenge:
      "Maintaining realistic texture while removing complex background artifacts.",
    outcome: "Image was successfully used for a billboard-scale advertisement.",
    tools: ["Photoshop", "Wacom Tablet"],
    image:
      "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=1200&auto=format&fit=crop",
    beforeImage:
      "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=20&w=1200&auto=format&fit=crop&sepia=1",
    afterImage:
      "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Conference Rollup Banner",
    category: "Graphics Design",
    description:
      "A vertical 2-meter tall rollup banner designed for a tech summit.",
    objective:
      "Create a high-impact vertical visual that conveys key brand messaging at eye level.",
    challenge:
      "Managing information hierarchy across a very narrow and tall aspect ratio.",
    outcome: "Increased booth traffic by 25% at the 2024 TechExpo.",
    tools: ["Illustrator", "Photoshop"],
    image:
      "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?q=80&w=1200&auto=format&fit=crop&ar=1:3",
  },
  {
    id: 10,
    title: "Summer Music Fest Flyer",
    category: "Graphics Design",
    description:
      "Vibrant A5 flyer design with complex typography and 3D elements.",
    objective: "Attract a young audience for an outdoor music festival.",
    challenge:
      "Fitting a large artist lineup while maintaining readability and energy.",
    outcome: "Social media shares hit record highs for the festival promotion.",
    tools: ["Photoshop", "Cinema 4D"],
    image:
      "https://images.unsplash.com/photo-1541746972996-4e0b0f43e03a?q=80&w=1200&auto=format&fit=crop&ar=3:4",
  },
  {
    id: 12,
    title: "Retouch Fashion Shoot Edit",
    category: "Photo Editing",
    description:
      "Advanced color correction and grading to achieve a moody, Hollywood-style cinematic look.",
    objective:
      "Transform flat, raw photography into a dramatic storytelling asset.",
    challenge:
      "Matching skin tones while applying aggressive color shifts to the environment.",
    outcome:
      "Client reported a significantly professional visual tone for their social campaign.",
    tools: ["Adobe Photoshop", "Camera Raw", "Lightroom"],
    image: edited2,
    beforeImage: raw2,
    afterImage: edited2,
  },
  ,
  {
    id: 13,
    title: "Retouch Fashion Shoot Edit",
    category: "Photo Editing",
    description:
      "Advanced color correction and grading to achieve a moody, Hollywood-style cinematic look.",
    objective:
      "Transform flat, raw photography into a dramatic storytelling asset.",
    challenge:
      "Matching skin tones while applying aggressive color shifts to the environment.",
    outcome:
      "Client reported a significantly professional visual tone for their social campaign.",
    tools: ["Adobe Photoshop", "Camera Raw", "Lightroom"],
    image: edited1,
    beforeImage: raw1,
    afterImage: edited1,
  },
  ,
  {
    id: 14,
    title: "Retouch Fashion Shoot Edit",
    category: "Photo Editing",
    description:
      "Advanced color correction and grading to achieve a moody, Hollywood-style cinematic look.",
    objective:
      "Transform flat, raw photography into a dramatic storytelling asset.",
    challenge:
      "Matching skin tones while applying aggressive color shifts to the environment.",
    outcome:
      "Client reported a significantly professional visual tone for their social campaign.",
    tools: ["Adobe Photoshop", "Camera Raw", "Lightroom"],
    image: edited3,
    beforeImage: raw3,
    afterImage: edited3,
  },
  ,
  {
    id: 15,
    title: "Retouch Fashion Shoot Edit",
    category: "Photo Editing",
    description:
      "Advanced color correction and grading to achieve a moody, Hollywood-style cinematic look.",
    objective:
      "Transform flat, raw photography into a dramatic storytelling asset.",
    challenge:
      "Matching skin tones while applying aggressive color shifts to the environment.",
    outcome:
      "Client reported a significantly professional visual tone for their social campaign.",
    tools: ["Adobe Photoshop", "Camera Raw", "Lightroom"],
    image: edited4,
    beforeImage: raw4,
    afterImage: edited4,
  },
  ,
  {
    id: 16,
    title: "Summer Music Fest Flyer",
    category: "Graphics Design",
    description:
      "Vibrant A5 flyer design with complex typography and 3D elements.",
    objective: "Attract a young audience for an outdoor music festival.",
    challenge:
      "Fitting a large artist lineup while maintaining readability and energy.",
    outcome: "Social media shares hit record highs for the festival promotion.",
    tools: ["Photoshop", "Cinema 4D"],
    image: rollup1Web,
  },
  ,
  {
    id: 17,
    title: "Summer Music Fest Flyer",
    category: "Graphics Design",
    description:
      "Vibrant A5 flyer design with complex typography and 3D elements.",
    objective: "Attract a young audience for an outdoor music festival.",
    challenge:
      "Fitting a large artist lineup while maintaining readability and energy.",
    outcome: "Social media shares hit record highs for the festival promotion.",
    tools: ["Photoshop", "Cinema 4D"],
    image: banner1Web,
  },

  ,
  {
    id: 18,
    title: "Summer Music Fest Flyer",
    category: "Logo Design",
    description:
      "Vibrant A5 flyer design with complex typography and 3D elements.",
    objective: "Attract a young audience for an outdoor music festival.",
    challenge:
      "Fitting a large artist lineup while maintaining readability and energy.",
    outcome: "Social media shares hit record highs for the festival promotion.",
    tools: ["Photoshop", "Cinema 4D"],
    image: logo1,
  },
];

export const SKILLS = [
  { name: "JavaScript", level: 80, color: "from-yellow-400 to-yellow-600" },
  { name: "ReactJS", level: 78, color: "from-cyan-400 to-blue-500" },
  { name: "NodeJS", level: 75, color: "from-green-500 to-green-700" },
  { name: "HTML & CSS", level: 80, color: "from-orange-500 to-red-500" },
  { name: "Python", level: 72, color: "from-blue-500 to-yellow-500" },
  { name: "Django", level: 70, color: "from-green-800 to-green-600" },
  { name: "Java", level: 65, color: "from-red-600 to-red-400" },
  { name: "Graphics Design", level: 85, color: "from-purple-500 to-pink-500" },
  { name: "Photo Editing", level: 88, color: "from-blue-600 to-indigo-600" },
];

export const TESTIMONIALS = [
  {
    name: "Samuel Kebede",
    role: "CEO, TechFlow",
    content:
      "Elsaye's attention to detail is unmatched. He took our vague ideas and turned them into a stunning brand identity. Fast, professional, and highly creative.",
    rating: 5,
  },
  {
    name: "Marta Alemu",
    role: "Event Coordinator",
    content:
      "The flyers and banners created for our annual gala were a huge success. The design was modern and perfectly captured the event's vibe. Highly recommended!",
    rating: 5,
  },
  {
    name: "Dr. Biruk",
    role: "Studio Director",
    content:
      "Excellent video editing skills. The transitions and color work brought our documentary to life. Great communication throughout the project.",
    rating: 5,
  },
];

export const WHY_CHOOSE_ME = [
  {
    title: "Fast Delivery",
    description:
      "Your time is valuable. I ensure quick turnarounds without compromising on quality.",
  },
  {
    title: "Creative Design",
    description:
      "Unique, modern, and bespoke solutions tailored specifically to your brand.",
  },
  {
    title: "Client Satisfaction",
    description:
      "I work closely with you until the final result is exactly what you envisioned.",
  },
  {
    title: "Affordable Pricing",
    description:
      "Get premium digital services at competitive rates that fit your budget.",
  },
];
