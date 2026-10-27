import { ArrowUpRight } from "lucide-react";

function CTASection() {
  return (
    <section className="bg-orange-60 rounded-[14px] flex flex-col gap-[16px] p-8">
      <div className="flex flex-col gap-[2px]">
        <h2 className="uppercase text-[28px] font-medium font-roboto-flex text-neutral-06">
          Ready to transform your digital presence?
        </h2>
        <p className="text-[14px] font-regular font-roboto-flex text-neutral-15">
          Take the first step towards digital success with NexGen by your side.
          Our team of experts is eager to craft tailored solutions that drive
          growth for your business.
        </p>
      </div>
      <button className="flex items-center justify-center gap-(--gap-connected) px-6 py-3 bg-neutral-06 rounded-2">
        <span className="uppercase text-[14px] text-orange-90 font-roboto-flex font-medium">
          Get in touch
        </span>
        <ArrowUpRight className="size-[22px] text-orange-80" />
      </button>
    </section>
  );
}

export default CTASection;
