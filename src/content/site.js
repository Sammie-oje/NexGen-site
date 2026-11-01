/**Content to be used across all 8 pages i.e in RootLayout.jsx**/
import { ArrowUpRight } from "lucide-react";
import Instagram from "../assets/images/instagram.svg?react";
import Twitter from "../assets/images/twitter.svg?react";
import Dribble from "../assets/images/dribble.svg?react";
import Behance from "../assets/images/behance.svg?react";
import WadeWarren from "../../assets/images/Wade-warren.png";
import SarahThompson from "../../assets/images/Sarah-thompson.png";
import LisaWilliams from "../../assets/images/Lisa-williams.png";

export const testimonials = {
  title: "Testimonials",
  items: [
    {
      title: "NexGen turned our business around!",
      text: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
      name: "Sarah Thompson",
      occupation: "CEO of BlueBoom",
      image: SarahThompson,
    },
    {
      title: "NexGen turned our business around!",
      text: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
      name: "Wade Warren",
      occupation: "Art Director",
      image: WadeWarren,
    },
    {
      title: "Working with NexGen was a pleasure.",
      text: "Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive",
      name: "Lisa Williams",
      occupation: "CEO of HealthTech",
      image: LisaWilliams,
    },
  ],
};

export const faq = {
  title: "Frequently Asked Questions",
  items: [
    {
      question: "How long does it take to complete a web development project?",
      answer:
        "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
    },
    {
      question: "Can you handle large-scale mobile-app development projects?",
      answer:
        "Yes, our team has the experience and resources to take on projects of any size. We plan carefully, scale our workflow to match your needs, and keep communication open so your project stays on track from start to finish.",
    },
    {
      question: "Can you integrate third-party APIs into our mobile app?",
      answer:
        "Absolutely. We regularly integrate third-party services such as payment gateways, analytics, and authentication providers. Each integration is built securely and tested thoroughly to ensure it performs reliably within your app.",
    },
    {
      question:
        "How do you ensure cross-platform compatibility for mobile apps?",
      answer:
        "We build with modern cross-platform frameworks and test across a wide range of devices, screen sizes, and operating systems. This helps us deliver a consistent, high-quality experience for every user, regardless of their platform.",
    },
    {
      question: "What is your approach to user experience (UX) design?",
      answer:
        "We start by understanding your users and business goals, then design intuitive interfaces through research, wireframing, and prototyping. Every decision is validated with feedback so the final product is both easy to use and visually engaging.",
    },
  ],
  form: {
    title: "Ask your question",
    submitLabel: "Send your message",
    fields: [
      { label: "Name", placeholder: "Enter your name", type: "text" },
      { label: "Email", placeholder: "Enter your email", type: "email" },
      {
        label: "Your question",
        placeholder: "Enter your question here ……",
        type: "textarea",
      },
    ],
  },
};

export const footer = {
  cta: {
    title: "Ready to transform your digital presence?",
    text: "Take the first step towards digital success with NexGen by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business.",
    action: { label: "Get in touch", icon: ArrowUpRight },
  },
  ticker: Array.fill(5).fill("Follow us on social media"),
  socials: {
    instagram: Instagram,
    twitter: Twitter,
    dribble: Dribble,
    behance: Behance,
  },
  links: [
    {
      header: "Home",
      links: [
        { name: "Why Us", status: "active" },
        { name: "About Us", status: "active" },
        { name: "Testimonials", status: "active" },
        { name: "FAQ's", status: "active" },
      ],
    },
    {
      header: "Services",
      links: [
        { name: "Web Development" },
        { name: "App Development" },
        { name: "Web Design" },
        { name: "Digital Marketing" },
      ],
    },
    {
      header: "Projects",
      links: [
        { name: "Klothink" },
        { name: "Zenith" },
        { name: "Novus" },
        { name: "Apex" },
      ],
    },
    {
      header: "Blogs",
      links: [
        { name: "Business" },
        { name: "Design", soon: "true" },
        { name: "Development", soon: "true" },
      ],
    },
  ],
  newsletter: {
    eyebrow: "Newsletter",
    title: "Subscribe to our newsletter",
    placeholder: "Enter your email",
  },
  legal: {
    copywright: "© 2024 NexGen. All rights reserved.",
    links: ["Terms & Conditions", "Privacy Policy"],
  },
};
