import Text from "./Text.jsx";

export function Tag({ label, value }) {
  return (
    <div className="flex w-fit items-center gap-1 rounded-pill bg-raised px-gutter py-1.5">
      <Text as="span" variant="caption">
        {label}
      </Text>
      <span aria-hidden className="size-2 bg-accent rounded-pill" />
      <Text as="span" variant="caption-strong" tone="strong">
        {value}
      </Text>
    </div>
  );
}
