import Card from "../ui/Card.jsx";
import CardContainer from "../ui/CardContainer.jsx";
import CrossPen from "../../assets/images/Ruler Cross Pen.svg?react";
import SmartPhone from "../../assets/images/Smartphone 2.svg?react";
import CodeCircle from "../../assets/images/Code Circle.svg?react";
import Clover from "../../assets/images/Widget 6.svg?react";

const SERVICES = [
  {
    title: "Web design",
    bid: 1500,
    image: <CrossPen />,
    text: "Our Web Design service is all about creating visually stunning and user friendly websites that leave a lasting.",
  },
  {
    title: "Mobile app development",
    bid: 2500,
    image: <SmartPhone />,
    text: "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications.",
  },
  {
    title: "Web development",
    bid: 1800,
    image: <CodeCircle />,
    text: "Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites.",
  },
  {
    title: "Digital Marketing",
    bid: 1200,
    image: <Clover />,
    text: "In the digital age, marketing is a critical aspect of your business's success. Our Digital Marketing service employs data-driven strategies to enhance your brand's visibility.",
  },
];

function Service({ title, bid, text, image }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="uppercase flex items-center gap-3">
        <span className="p-3 bg-neutral-12 border border-1 border-neutral-20 size-[52px] rounded-1">
          {image}
        </span>
        <h3 className="text-[20px] font-roboto-flex font-medium text-orange-95">
          {title}
        </h3>
      </div>
      <div className="flex flex-col gap-[var(--gap-connected)]">
        <strong className="uppercase text-[18px] font-roboto-flex font-medium text-orange-95">
          Starts from{" "}
          {bid.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          })}
        </strong>
        <p className="text-[14px] font-roboto-flex font-normal text-neutral-70">
          {text}
        </p>
      </div>
      <button className="uppercase bg-orange-60 px-5 py-3 rounded-1 text-neutral-06 text-[14px] font-roboto-flex font-medium ">
        Book a call
      </button>
    </div>
  );
}

function Services() {
  return (
    <CardContainer styles="mt-12">
      <Card>
        <h2 className="uppercase font-roboto-flex text-orange-95 text-[28px] text-left font-semibold w-full">
          Our services
        </h2>
      </Card>

      {SERVICES.map((service) => (
        <Card key={service.title}>
          <Service {...service} />
        </Card>
      ))}
    </CardContainer>
  );
}

export default Services;
