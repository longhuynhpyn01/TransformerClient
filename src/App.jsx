import React, { useContext, useEffect } from "react";

import useRouteElements from "./useRouteElements";
import { AppContext } from "./contexts/app.context";

function App() {
  const routeElements = useRouteElements();
  const { mode } = useContext(AppContext);

  useEffect(() => {
    if (mode === "light") {
      document.documentElement.classList.remove("dark");
    } else if (mode === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, [mode]);

  return <div className="">{routeElements}</div>;
}

export default App;
