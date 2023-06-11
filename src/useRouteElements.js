import { useRoutes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: "/about",
      element: (
        <MainLayout>
          <About />
        </MainLayout>
      )
    },
    {
      path: "/contact",
      element: (
        <MainLayout>
          <Contact />
        </MainLayout>
      )
    },
    {
      path: "/",
      index: true,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    }
  ]);

  return routeElements;
}
