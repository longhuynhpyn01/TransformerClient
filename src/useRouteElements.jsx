import { useRoutes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import path from "./constants/path";

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: path.about,
      element: (
        <MainLayout>
          <About />
        </MainLayout>
      )
    },
    {
      path: path.contact,
      element: (
        <MainLayout>
          <Contact />
        </MainLayout>
      )
    },
    {
      path: path.home,
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
