import cn from "../../lib/cn.js";

const COLUMNS = {
  1: "grid-cols-1",
  2: "grid-cols-2",
};

function CardContainer({
  as: Tag = "section",
  columns = 1,
  children,
  className,
  ...props
}) {
  return (
    <Tag
      className={cn(
        "border-2 border-frame grid p-gutter gap-gutter rounded-container",
        COLUMNS[column],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default CardContainer;
