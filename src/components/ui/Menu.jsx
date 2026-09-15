import { ListSortDescending } from "lucide-react";

function Menu() {
  return (
    <button
      className="size-10 p-1 flex align-center justify-center"
      style={{
        backgroundColor: "var(--page-background)",
        borderRadius: "var(--radius-button)",
      }}
    >
      <ListSortDescending className="scale-x-[-1] text-white" size={24} />
    </button>
  );
}
export default Menu;
