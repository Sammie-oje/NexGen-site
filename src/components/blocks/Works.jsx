import { ArrowUpRight, ArrowDown } from "lucide-react";
import Balloon from "../../assets/images/Balloon.svg?react";
import MagicStick from "../../assets/images/Magic Stick 2.svg?react";
import ZenithFitnessImg from "../../assets/images/Image (7).png";
import AauraImg from "../../assets/images/Image (8).png";
import Card from "../ui/Card.jsx";
import CardContainer from "../ui/CardContainer.jsx";

const WORKS = [
  {
    title: "A-aura ecommerce",
    icon: <MagicStick />,
    productImage: AauraImg,
    category: "Web design & development",
    time: 3,
    text: "A complete overhaul of a corporate website to enhance its brand identity and user experience",
  },
  {
    title: "Zenith fitness app",
    icon: <Balloon />,
    productImage: ZenithFitnessImg,
    category: "Mobile app development",
    time: 6,
    text: "An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance ",
  },
];

function Work({ title, category, time, text, icon, productImage }) {
  return (
    <>
      <img src={productImage} alt={`${title} product snapshot`} />

      <Card styles="gap-5">
        <div className="uppercase flex items-center gap-[var(--gap-connected)] w-full">
          <span className="p-3 bg-neutral-12 border border-1 border-neutral-20 size-[52px] rounded-1">
            {icon}
          </span>
          <h3 className="text-[16px] font-roboto-flex font-medium text-orange-95">
            {title}
          </h3>
        </div>

        <div className="flex flex-col gap-[var(--gap-connected)] w-full">
          <div className="flex gap-[4px] items-center bg-neutral-12 rounded-pill px-1 py-[6px] w-fit">
            <span className="text-[12px] font-roboto-flex font-regular text-neutral-70">
              Category
            </span>
            <span className="p-[4px] bg-orange-60 rounded-full "></span>
            <span className="text-[12px] font-medium font-roboto-flex text-neutral-90">
              {category}
            </span>
          </div>
          <div className="flex gap-[4px] items-center bg-neutral-12 rounded-pill px-1 py-[6px] w-fit">
            <span className="text-[12px] font-roboto-flex font-regular text-neutral-70">
              Time taken
            </span>
            <span className="p-[4px] bg-orange-60 rounded-full "></span>
            <span className="text-[12px] font-medium font-roboto-flex text-neutral-90">
              {time} months
            </span>
          </div>
        </div>

        <p className="text-[14px] font-roboto-flex font-regular text-neutral-70">
          {text}
        </p>

        <button className="flex items-center gap-[var(--gap-connected)] w-full">
          <div className="flex p-1 border border-1 border-neutral-20 bg-neutral-12 rounded-pill">
            <ArrowUpRight className="text-orange-80 size-[20px]" />
          </div>
          <span className="uppercase font-roboto-mono font-medium text-neutral-70 text-[16px]">
            Details
          </span>
        </button>
      </Card>
    </>
  );
}

function Works() {
  return (
    <CardContainer styles="mt-12">
      <Card>
        <h2 className="uppercase font-roboto-flex text-orange-95 text-[28px] text-left font-semibold w-full">
          Our works
        </h2>
      </Card>

      {WORKS.map((work) => (
        <CardContainer key={work.title}>
          <Work {...work} />
        </CardContainer>
      ))}

      <Card>
        <button className="flex items-center gap-[var(--gap-connected)]">
          <div className="flex p-3 border border-1 border-neutral-15 bg-neutral-06 rounded-pill">
            <ArrowDown className="text-orange-80 size-[20px]" />
          </div>
          <span className="uppercase font-roboto-mono font-medium text-neutral-70 text-[14px]">
            All works
          </span>
        </button>
      </Card>
    </CardContainer>
  );
}

export default Works;
