import cn from "../../lib/cn.js";

const VARIANTS = {
  accent: "bg-accent text-on-accent",
  light: "bg-accent-light text-on-accent",
  dark: "bg-inset text-emphasis",
};

function Button({
  as: Tag = "button",
  variant = "accent",
  icon: Icon,
  children,
  className,
  ...props
}) {
  <Tag
    className={cn(
      "uppercase flex items-center justify-center gap-tight rounded-control px-5 py-3.5",
      VARIANTS[variant],
      className,
    )}
    {...props}
  >
    {children}
    {Icon && <Icon aria-hidden className="size-5 text-action" />}
  </Tag>;
}

export default Button;
