import { useId } from "react";
import Card from "./Card.jsx";
import CardGroup from "./CardGroup.jsx";
import Text from "./Text.jsx";

function Section({ title, framed = "true", columns = 1, children, ...props }) {
  const titleId = useId();
  const heading = (
    <Card>
      <Text id={titleId} variant="display">
        {title}
      </Text>
    </Card>
  );

  if (!framed) {
    return (
      <section
        className="flex flex-col gap-gutter"
        aria-labelledby={titleId}
        {...props}
      >
        {heading}
        {children}
      </section>
    );
  }

  return (
    <CardGroup aria-labelledby={titleId} columns={columns} {...props}>
      {heading} {children}
    </CardGroup>
  );
}

export default Section;
