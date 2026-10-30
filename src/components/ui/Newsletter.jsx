import { ArrowUpRight } from "lucide-react";
import Card from "./Card.jsx";

function Newsletter() {
  return (
    <Card styles="gap-y-4">
      <div className="flex flex-col gap-[4px] w-full">
        <h3 className="uppercase text-[14px] font-roboto-mono font-regular text-neutral-40">
          Newsletter
        </h3>
        <strong className="uppercase font-roboto-flex font-medium text-[20px] text-orange-95">
          Subscribe to our newsletter
        </strong>
      </div>

      <div className="flex gap-(--gap-connected) w-full">
        <div className="px-4 py-3 border-b border-neutral-20 w-full">
          <input
            className="w-full font-regular font-roboto-flex text-neutral-40 text-[14px] placeholder:font-regular placeholder:font-roboto-flex placeholder:text-neutral-40 placeholder:text-[14px]"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <button className="self-end p-1 bg-neutral-12 border border-neutral-20 rounded-pill">
          <ArrowUpRight className="size-[20px] text-orange-80" />
        </button>
      </div>
    </Card>
  );
}

export default Newsletter;
