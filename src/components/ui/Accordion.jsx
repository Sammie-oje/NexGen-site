import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Card from "./Card.jsx";

function Accordion({ question, answer }) {
  return (
    <Card styles="px-8 py-6">
      <details name="faqs">
        <summary className=" list-none [&::-webkit-details-marker]:hidden cursor-pointer flex items-center gap-5">
          <span className="text-[18px] font-medium font-roboto-flex text-orange-95">
            {question}
          </span>
          <div className="flex items-center p-1 bg-neutral-12 border-1 border-neutral-20 rounded-pill">
            <Plus className="text-orange-80" />
          </div>
        </summary>

        <hr className="border border-neutral-15 w-full mt-5 mb-5" />

        <p className="text-[14px] font-roboto-flex font-regular text-neutral-70">
          {answer}
        </p>
      </details>
    </Card>
  );
}

export default Accordion;
