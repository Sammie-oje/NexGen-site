import { Plus, Minus } from "lucide-react";
import Card from "./Card.jsx";
import Divider from "./Divider.jsx";
import IconCircle from "./IconCircle.jsx";
import Text from "./Text.jsx";

function Accordion({ question, answer, name = "faqs" }) {
  return (
    <Card padding="wide">
      <details name={name} className="group">
        <summary className="flex items-center gap-stack list-none cursor-pointer [&::-webkit-details-marker]:hidden">
          <Text as="span" variant="subtitle" caps={false}>
            {question}
          </Text>

          <IconCircle>
            <Plus aria-hidden className="size-5 group-open:hidden" />
            <Minus aria-hidden className="hidden size-5 group-open:block" />
          </IconCircle>
        </summary>

        <Divider className="my-stack" />

        <Text>{answer}</Text>
      </details>
    </Card>
  );
}

export default Accordion;
