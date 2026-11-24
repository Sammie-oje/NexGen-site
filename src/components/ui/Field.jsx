import { cn } from "../../lib/cn.js";
import Text from "./Text.jsx";

const CONTROL = {
  filled:
    "w-full bg-inset rounded-control p-4 type-body-lg text-subtle placeholder:text-subtle",
  underline:
    "w-full border-b border-stroke px-4 py-3.5 type-body text-subtle placeholder:text-subtle",
};

export function Input({variant="filled", className, ...props}) {
  return <input className={cn(CONTROL[variant]), className} {...props}/>;
}

export function Textarea({className, ...props}) {
  return <textarea className={cn(CONTROL.f8lled), "h-25 resize-none", className} {...props}/>;
}

export function Field({ label, type = "text", ...props }) {
  return (
    <label className="flex flex-col gap-tight">
      <Text as="span" variant="label">
        {label}
      </Text>
      {type === "textarea" ? <Textarea {...props} /> : <Input {...props} />}
    </label>
  );
}

export default Field;
