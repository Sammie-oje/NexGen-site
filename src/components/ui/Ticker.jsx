import { cn } from "../../lib/cn.js";
import Text from "./Text.jsx";

/*
* Dot-separated strip of labels
* tones : surface (on page) | inset (on Card)

* Positioning should be from the outside e.g  <Ticker className="absolute inset-x-0 bottom-4"/>
*/

const TONES = {
  surface: "bg-surface",
  inset: "bg-inset",
};

function Ticker({ className, texts, tone = "surface" }) {
  return (
    <div
      className={cn(
        "rounded-tile p-card-sm overflow-x-hidden",
        TONES[tone],
        className,
      )}
    >
      <div className="flex gap-tight w-max ">
        {texts.map((text, i) => (
          <Text
            key={`${text}-${i}`}
            as="span"
            variant="eyebrow"
            className="relative pr-4 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:rounded-pill after:size-2 after:bg-accent"
          >
            {text}
          </Text>
        ))}
      </div>
    </div>
  );
}

export default Ticker;
