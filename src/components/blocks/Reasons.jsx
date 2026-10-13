import { ArrowUpRight } from "lucide-react";
import Card from "../ui/Card.jsx";
import CardContainer from "../ui/CardContainer.jsx";

const REASONS = [
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
];

function Reason({ title, text }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-[var(--gap-connected)]">
        <h3 className="uppercase font-roboto-flex text-orange-95 text-[20px] font-medium">
          {title}
        </h3>
        <p className="text-neutral-70 font-roboto-flex text-[14px]">{text}</p>
      </div>
      <button className="flex items-center gap-[var(--gap-connected)]">
        <div className="flex p-4 border border-1 border-neutral-15 bg-neutral-06 rounded-pill">
          <ArrowUpRight className="text-orange-80 size-[20px]" />
        </div>
        <span className="font-roboto-flex text-neutral-70 text-[16px]">
          Learn More
        </span>
      </button>
    </div>
  );
}

function Reasons() {
  return (
    <CardContainer styles="mt-12">
      <Card>
        <h2 className="uppercase font-roboto-flex text-orange-95 text-[28px] font-semibold">
          Reasons to choose NexGen for your digital journey
        </h2>
      </Card>
      {REASONS.map((reason) => (
        <Card key={reason.title}>
          <Reason title={reason.title} text={reason.text} />
        </Card>
      ))}
    </CardContainer>
  );
}

export default Reasons;
