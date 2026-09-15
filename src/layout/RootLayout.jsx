import NavBar from "../components/blocks/Nav.jsx";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default RootLayout;
