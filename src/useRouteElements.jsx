import { useRoutes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import path from "./constants/path";
import NotFound from "./pages/NotFound";

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
      path: path.product,
      element: (
        <MainLayout>
          <Product />
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
    },
    {
      path: path.notFound,
      element: (
        <MainLayout>
          <NotFound />
        </MainLayout>
      )
    }
  ]);

  return routeElements;
}
