import { ArrowRight, ArrowUpRight, ArrowDown } from "lucide-react";
import CrossPen from "../assets/images/Ruler Cross Pen.svg?react";
import SmartPhone from "../assets/images/Smartphone 2.svg?react";
import CodeCircle from "../assets/images/Code Circle.svg?react";
import Clover from "../assets/images/Widget 6.svg?react";
import Balloon from "../assets/images/Balloon.svg?react";
import MagicStick from "../assets/images/Magic Stick 2.svg?react";
import ZenithFitnessImg from "../assets/images/Image (7).png";
import AauraImg from "../assets/images/Image (8).png";

export const hero = {
  title: "Digital Solutions that drive success",
  text: "At NexGen, we believe in the transformative power of digital solutions. Our teams of experts to helping businesses like yours thrive in the fast-paced digital landscape",
  action: { label: "Start a Project", icon: ArrowRight },
  ticker: [
    "Branding",
    "Digital Marketing",
    "App development",
    "Web development",
    "Web design",
  ],
};

export const stats = {
  items: [
    { label: "Clients", value: "200+" },
    { label: "Projects", value: "280+" },
    { label: "Happy Clients", value: "100%" },
    { label: "Follow+ers", value: "420k" },
  ],
  featured: { label: "Years of Experience", value: "10+" },
  action: { label: "Know more", icon: ArrowUpRight },
};

export const reasons = {
  title: "Reasons to choose NexGen for your digital journey",
  items: [
    {
      title: "Expertise in cutting-edge technologies",
      text: "NexGen ensures your projects are powered by state-of-the-art technologies, guaranteeing…",
    },
    {
      title: "Proven track record of success",
      text: "NexGen demonstrates a consistent ability to meet client and exceeed client expectations, providing reliable…",
    },
    {
      title: "Client-centric approach",
      text: "At NexGen, we prioritize understanding our clients'unique requirements, fostering…",
    },
    {
      title: "Dedicated team of professionals",
      text: "Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable…",
    },
  ],
};

export const services = {
  title: "Our services",
  items: [
    {
      title: "Web design",
      bid: 1500,
      image: CrossPen,
      text: "Our Web Design service is all about creating visually stunning and user friendly websites that leave a lasting.",
    },
    {
      title: "Mobile app development",
      bid: 2500,
      image: SmartPhone,
      text: "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications.",
    },
    {
      title: "Web development",
      bid: 1800,
      image: CodeCircle,
      text: "Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites.",
    },
    {
      title: "Digital Marketing",
      bid: 1200,
      image: Clover,
      text: "In the digital age, marketing is a critical aspect of your business's success. Our Digital Marketing service employs data-driven strategies to enhance your brand's visibility.",
    },
  ],
};

export const works = {
  title: "Our works",
  items: [
    {
      title: "A-aura ecommerce",
      icon: MagicStick,
      productImage: AauraImg,
      category: "Web design & development",
      time: 3,
      text: "A complete overhaul of a corporate website to enhance its brand identity and user experience",
    },
    {
      title: "Zenith fitness app",
      icon: Balloon,
      productImage: ZenithFitnessImg,
      category: "Mobile app development",
      time: 6,
      text: "An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance ",
    },
  ],
};
