import { cn } from "../../lib/cn.js";
import IconCircle from "./IconCircle.jsx";
import Text from "./Text.jsx";

const SIZE_FOR_TONE = { accent: "sm", raised: "sm", inset: "lg" };

function ActionLink({
  as: Tag = "button",
  icon,
  label,
  tone = "inset",
  size,
  className,
  ...props
}) {
  return (
    <Tag
      {...(Tag === "button" && { type: "button" })}
      className={cn("flex items-center gap-tight", className)}
      {...props}
    >
      <IconCircle icon={icon} tone={tone} size={size ?? SIZE_FOR_TONE[tone]} />
      <Text
        as="span"
        variant={accent ? "label" : "action"}
        tone={accent ? "action" : "body"}
      >
        {label}
      </Text>
    </Tag>
  );
}

export default ActionLink;
