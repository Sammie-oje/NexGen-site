import { cn } from "../../lib.jsx";

/*VARIANTS — puts text into roles, manages element + colour + capslock + font-family etc*/

const VARIANTS = {
  figure: { cls: "type-figure", tag: "span", tone: "highlight", caps: false },
  display: { cls: "type-display", tag: "h2", tone: "heading", caps: true },
  title: { cls: "type-title", tag: "h3", tone: "heading", caps: true },
  subtitle: { cls: "type-subtitle", tag: "h3", tone: "heading", caps: true },
  label: { cls: "type-label", tag: "span", tone: "emphasis", caps: true },
  "body-lg": { cls: "type-body-lg", tag: "p", tone: "body", caps: false },
  body: { cls: "type-body", tag: "p", tone: "body", caps: false },
  button: { cls: "type-button", tag: "span", tone: "on-accent", caps: true },
  caption: { cls: "type-caption", tag: "span", tone: "body", caps: false },
  "caption-strong": {
    cls: "type-caption-strong",
    tag: "span",
    tone: "emphasis",
    caps: false,
  },
  eyebrow: { cls: "type-eyebrow", tag: "span", tone: "subtle", caps: true },
  action: { cls: "type-action", tag: "span", tone: "body", caps: true },
  "heading-mono": {
    cls: "type-heading-mono",
    tag: "h3",
    tone: "emphasis",
    caps: false,
  },
};

//Full class names so that Tailwind can see them
const TONES = {
  heading: "text-heading",
  emphasis: "text-emphasis",
  highlight: "text-highlight",
  action: "text-action",
  body: "text-body",
  muted: "text-muted",
  subtle: "text-subtle",
  "on-accent": "text-on-accent",
  "on-accent-muted": "text-on-accent-muted",
};

function Text({
  as,
  variant = "body",
  tone,
  caps,
  className,
  children,
  ...props
}) {
  const v = VARIANTS[variant];
  const Tag = as ?? v.tag;
  const uppercase = caps ?? v.caps;

  return (
    <Tag
      className={cn(
        v.cls,
        TONES[tone ?? v.tone],
        uppercase && "uppercase",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
