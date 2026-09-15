import Menu from "../ui/Menu.jsx";
import Logo from "../ui/Logo.jsx";

function NavBar() {
  return (
    <nav
      style={{
        backgroundColor: "var(--element-background)",
        borderRadius: "var(--radius-button)",
      }}
      className="flex justify-between align-center p-3"
    >
      <Logo />
      <Menu />
    </nav>
  );
}

export default NavBar;
