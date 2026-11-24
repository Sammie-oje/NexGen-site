import NavBar from "../components/blocks/Nav.jsx";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
