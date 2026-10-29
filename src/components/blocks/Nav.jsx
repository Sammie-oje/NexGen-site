import Menu from "../ui/Menu.jsx";
import Logo from "../../assets/images/logo.svg?react";

function NavBar() {
  return (
    <nav
      style={{
        backgroundColor: "var(--element-background)",
        borderRadius: "var(--radius-button)",
      }}
      className="flex justify-between items-center p-3 mb-5"
      aria-label="Header navigation"
    >
      <Logo />
      <Menu />
    </nav>
  );
}

export default NavBar;
