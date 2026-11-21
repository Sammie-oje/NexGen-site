import { ListSortDescending } from "lucide-react";

function Menu(props) {
  return (
    <button
      type="button"
      aria-label="Open menu"
      className="size-10 flex items-center justify-center rounded-control bg-page"
      {...props}
    >
      <ListSortDescending
        aria-hidden
        className="size-6 scale-x-[-1] text-heading"
      />
    </button>
  );
}
export default Menu;

