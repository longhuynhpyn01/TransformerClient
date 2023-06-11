import React from "react";

import useRouteElements from "./useRouteElements";

function App() {
  const routeElements = useRouteElements();

  return <div className="bg-white dark:bg-gray-900">{routeElements}</div>;
}

export default App;
