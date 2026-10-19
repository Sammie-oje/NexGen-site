import { ArrowRight } from "lucide-react";
import Card from "../ui/Card.jsx";
import CardContainer from "../ui/CardContainer.jsx";
import WadeWarren from "../../assets/images/Wade-warren.png";
import SarahThompson from "../../assets/images/Sarah-thompson.png";
import LisaWilliams from "../../assets/images/Lisa-williams.png";

const TESTIMONIALS = [
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
];

function Testimonial({ title, text, name, occupation, image }) {
  return (
    <>
      <div className="flex flex-col gap-4 p-6">
        <h3 className="uppercase text-[18px] font-roboto-flex font-medium text-orange-95">
          {title}
        </h3>
        <p className="text-[14px] font-roboto-flex font-normal text-neutral-70">
          {text}
        </p>
      </div>

      <div className="px-5 py-4 w-full bg-neutral-12 flex justify-between align-center">
        <div className="flex items-center justify-center gap-[var(--gap-connected)]">
          <div className="bg-[oklch(67.04%_0.1081_38.55)] size-[40px] rounded-pill">
            {" "}
            <img src={image} alt={`${name} image`} className=" " />
          </div>
          <div className="flex flex-col">
            <span className="text-[16px] font-medium font-roboto-flex text-orange-90">
              {name}
            </span>
            <span className="text-[14px] font-regular font-roboto-flex text-neutral-50">
              {occupation}
            </span>
          </div>
        </div>
        <div className="flex h-fit p-1 border border-1 border-neutral-20 bg-neutral-12 rounded-pill">
          <ArrowRight className="text-orange-80 size-[20px]" />
        </div>
      </div>
    </>
  );
}

function Testimonials() {
  return (
    <CardContainer styles="mt-12">
      <Card>
        <h2 className="uppercase w-full font-roboto-flex text-orange-95 text-[28px] font-semibold">
          Testimonials
        </h2>
      </Card>

      {TESTIMONIALS.map((testimonial) => (
        <Card styles="px-0 py-0 ">
          <Testimonial {...testimonial} />
        </Card>
      ))}
    </CardContainer>
  );
}

export default Testimonials;
