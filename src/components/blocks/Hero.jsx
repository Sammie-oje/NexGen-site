import Card from "../ui/Card.jsx";
import Ticker from "../ui/Ticker.jsx";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section>
      <Card styles="relative gap-5 pb-24">
        <h2 className="uppercase font-roboto-flex text-orange-95 text-[28px] font-semibold">
          Digital Solutions that drive success
        </h2>
        <button className="flex w-full justify-start items-center gap-1 ">
          <div className="flex p-1 bg-orange-60 rounded-pill outline-solid outline-2 outline-orange-60 outline-offset-4">
            <ArrowRight size={20} className="text-neutral-06" />
          </div>
          <span className="uppercase font-roboto-flex font-medium text-orange-80">
            Start a Project
          </span>
        </button>
        <p className="font-roboto-flex text-neutral-40 text-[14px]">
          At NexGen, we believe in the transformative power of digital
          solutions.Our teams of experts to helping businesses like yours thrive
          in the fast-paced digital landscape
        </p>
        <Ticker />
      </Card>
    </section>
  );
}

export default Hero;
