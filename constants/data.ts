import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
} from "lucide-react";

export const socialMedia: SocialMedia[] = [
  {
    name: "GitHub",
    url: "https://github.com/utsavdotdev",
    icon: Github,
  },
  {
    name: "Twitter",
    url: "https://x.com/utsavdotdev",
    icon: Twitter,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/utsavdotdev",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/utsavdotdev",
    icon: Instagram,
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@utsavdotdev",
    icon: Youtube,
  },
  {
    name: "Email",
    url: "mailto:utsavdotdev@gmail.com",
    icon: Mail,
  },
];

export const stack: Stack[] = [
  {
    name: "Next.js",
    icon: "/assets/stack/nextjs.svg",
  },
  {
    name: "TypeScript",
    icon: "/assets/stack/typescript.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "/assets/stack/tailwindcss.svg",
  },
  {
    name: "MongoDB",
    icon: "/assets/stack/mongodb.svg",
  },
  {
    name: "Docker",
    icon: "/assets/stack/docker.svg",
  },
  {
    name: "Github",
    icon: "/assets/stack/github.svg",
  },
  {
    name: "Figma",
    icon: "/assets/stack/figma.svg",
  },
  {
    name: "Zen Browser",
    icon: "/assets/stack/zen.svg",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    subtitle: "Full-stack web application with payment integration",
    label: "React",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Task Management App",
    subtitle: "Collaborative productivity tool with real-time updates",
    label: "Next.js",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    subtitle: "Interactive weather forecasting with data visualization",
    label: "Vue.js",
    image: "/placeholder.svg?height=200&width=400",
  },
];
