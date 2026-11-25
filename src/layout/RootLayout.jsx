import NavBar from "../components/blocks/Nav.jsx";
import Footer from "../components/blocks/footer/Footer.jsx";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
