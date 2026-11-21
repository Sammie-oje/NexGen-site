import { cn } from "../../lib/cn.js";

function Divider({ className }) {
  return (
    <hr
      className={cn("w-full border-0 border-t-2 border-divider", className)}
    />
  );
}

export default Divider;
