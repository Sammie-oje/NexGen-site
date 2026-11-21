import { cn } from "../../lib.js";

const TONES = {
  raised: "bg-raised border border-stroke text-action",
  inset: "bg-inset border border-divider text-action",
  accent:
    "bg-on-accent text-on-accent outline-2 outline-offset-4 outline-accent",
};

const SIZES = {
  sm: "size-10",
  md: "size-13",
};

function IconCircle({
  as: Tag = "span",
  icon: Icon,
  tone = "raised",
  size = "sm",
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn(
        "flex shrink-0 items-center justify-center rounded-pill",
        TONES[tones],
        SIZES[size],
        className,
      )}
      {...(Tag === "span" && { "aria-hidden": true })}
      {...props}
    >
      {Icon ? <Icon aria-hidden className="size-5" /> : children}
    </Tag>
  );
}

export default IconCircle;

