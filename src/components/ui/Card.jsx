import cn from "../../lib.js";

/*
Variants like tone, gaps, padding, alignment should never be changed or overwritten using `className`. 
className should only handle layouts e.g flex, col-span-*, border, position properties 
*/

const TONES = {
  surface: "bg-surface",
  accent: "bg-accent",
};

const ALIGN = { stretch: "items-stretch", center: "items-center" };

const GAP = {
  none: "gap-0",
  gutter: "gap-gutter", // 10 - default
  md: "gap-4", // 16
  stack: "gap-stack", // 20
};

const PADDING = {
  none: "p-0",
  sm: "p-card-sm", // 14
  md: "p-card", // 24
  lg: "p-card-lg", // 32
  wide: "px-card-lg py-card", // 32 × 24 (Accordion)
};

function Card({
  as: Tag = "article",
  tone = "surface",
  align = "stretch",
  gap = "gutter",
  padding = "md",
  children,
  className,
  ...props
}) {
  return (
    <Tag
      className={cn(
        "flex flex-col justify-center rounded-card",
        PADDING[padding],
        ALIGN[align],
        TONES[tone],
        GAP[gap],
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Card;
