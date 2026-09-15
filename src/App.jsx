import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layout/RootLayout.jsx";
import NavBar from "./components/blocks/Nav.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Project from "./pages/Project.jsx";
import Blog from "./pages/Blog.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="project" element={<Project />} />
        <Route path="blog" element={<Blog />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
