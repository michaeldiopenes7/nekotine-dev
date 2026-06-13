export type ExperienceItem = {
  period: string;
  company: string;
  points: string[];
};

export type ProjectImage = { src: string; alt: string; wide?: boolean };

export type Project = {
  title: string;
  icon: "bars" | "card" | "pencil" | "mic";
  description: string;
  tags: string[];
  images: ProjectImage[];
  galleryVariant?: "default" | "mobile" | "five-up";
};

export const experience: ExperienceItem[] = [
  {
    period: "August - December 2025",
    company: "Lear Corporation (B.V) - Netherlands",
    points: [
      "Designed multiple wireframes and high-fidelity UI/UX mockups in Figma for a company web application, submitting 3 design concepts for supervisor review and securing approval on one concept to move forward into development.",
      "Collaborated with a supervisor to gather feedback and iterated through multiple revision cycles, proactively suggesting improvements such as simplifying navigation flow to reduce user friction, producing a final UI/UX that met both business requirements and usability standards.",
      "Applied core UI/UX principles including visual hierarchy and consistent spacing to build a clean, intuitive interface, ensuring the design was accessible and easy to navigate for end users.",
      "Delivered a complete set of wireframes and UI/UX designs for a web application and handed off finalized assets to the development team, eliminating the need to outsource to freelance designers and saving the company costs.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Basic Work Unit (BWU)",
    icon: "bars",
    description:
      "High-fidelity UI/UX screens for the Basic Work Unit workflow, designed in Figma and prepared for development handoff.",
    tags: ["Web App", "Figma", "UI/UX"],
    images: [
      { src: "/assets/projects/bwu/bwu1.png", alt: "BWU dashboard — Management view with line overview" },
      { src: "/assets/projects/bwu/bwu2.png", alt: "BWU dashboard — Efficiency week-to-date trends" },
      { src: "/assets/projects/bwu/bwu3.png", alt: "BWU dashboard — Hourly monitoring table" },
      { src: "/assets/projects/bwu/bwu4.png", alt: "BWU dashboard — Supplier scorecard" },
    ],
  },
  {
    title: "Certify",
    icon: "card",
    description:
      "Blockchain-powered certificate editor for creating, verifying, and managing professional certificates through a secure web interface.",
    tags: ["Blockchain", "Certificate Editor", "Web App", "Figma"],
    images: [
      { src: "/assets/projects/certify/certify-login.png", alt: "Certify sign in screen" },
      { src: "/assets/projects/certify/certify-tech.png", alt: "Certify technology stack screen" },
      { src: "/assets/projects/certify/certify-admin.png", alt: "Certify admin dashboard screen" },
      { src: "/assets/projects/certify/certify-editor.png", alt: "Certify certificate editor screen" },
      { src: "/assets/projects/certify/certify-verification.png", alt: "Certify certificate verification screen", wide: true },
    ],
  },
  {
    title: "TLE Brain Boost",
    icon: "pencil",
    description:
      "Mobile learning application concept for TLE students, combining lessons, quiz pathways, progress tracking, and leaderboard motivation.",
    tags: ["Mobile App", "EdTech", "Gamification", "UI Design"],
    galleryVariant: "mobile",
    images: [
      { src: "/assets/projects/tle-brain-boost/tle-login.png", alt: "TLE Brain Boost login screen" },
      { src: "/assets/projects/tle-brain-boost/tle-home.png", alt: "TLE Brain Boost home dashboard screen" },
      { src: "/assets/projects/tle-brain-boost/tle-lessons.png", alt: "TLE Brain Boost lessons screen" },
      { src: "/assets/projects/tle-brain-boost/tle-leaderboard.png", alt: "TLE Brain Boost leaderboard screen" },
    ],
  },
  {
    title: "Speak to Spell",
    icon: "mic",
    description:
      "Mobile learning application concept that supports spelling practice through speech-based interaction, playful screens, and guided learner progress.",
    tags: ["Mobile App", "EdTech", "Speech Interaction", "UI Design"],
    galleryVariant: "five-up",
    images: [
      { src: "/assets/projects/speak-to-spell/sts1.png", alt: "Speak to Spell mobile screen 1" },
      { src: "/assets/projects/speak-to-spell/sts2.png", alt: "Speak to Spell mobile screen 2" },
      { src: "/assets/projects/speak-to-spell/sts3.png", alt: "Speak to Spell mobile screen 3" },
      { src: "/assets/projects/speak-to-spell/sts4.png", alt: "Speak to Spell mobile screen 4" },
      { src: "/assets/projects/speak-to-spell/sts5.png", alt: "Speak to Spell mobile screen 5" },
    ],
  },
];

export type Hobby = {
  name: string;
  blurb: string;
  accent: string;
  /** folder under /assets/hobbies; images are 1.jpg..4.jpg */
  folder: string;
};

const hobbyImages = (folder: string) =>
  [1, 2, 3, 4].map((n) => `/assets/hobbies/${folder}/${n}.jpg`);

export const hobbies: Hobby[] = [
  { name: "Painting",         blurb: "Color, texture, and mood on canvas.",   accent: "#e07a5f", folder: "painting" },
  { name: "Drawing",          blurb: "Line work and character studies.",      accent: "#3d5a80", folder: "drawing" },
  { name: "Cosplaying",       blurb: "Becoming the characters I love.",       accent: "#9b5de5", folder: "cosplaying" },
  { name: "Singing",          blurb: "Finding the melody in everything.",     accent: "#f15bb5", folder: "singing" },
  { name: "Playing Guitar",   blurb: "Six strings, endless practice loops.",  accent: "#f4a261", folder: "guitar" },
  { name: "Make-up Artistry", blurb: "Faces as a canvas for transformation.", accent: "#e76f51", folder: "makeup" },
  { name: "Sketching",        blurb: "Fast ideas, pencil-first thinking.",    accent: "#2a9d8f", folder: "sketching" },
  { name: "Gaming",           blurb: "Systems, stories, and reflexes.",       accent: "#43aa8b", folder: "gaming" },
  { name: "Photography",      blurb: "Framing light and fleeting moments.",   accent: "#577590", folder: "photography" },
  { name: "Web Designing",    blurb: "Where all the craft comes together.",   accent: "#06d6a0", folder: "web" },
];

export const hobbyImageList = (folder: string) => hobbyImages(folder);
