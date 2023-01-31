import {
    createBrowserRouter,
    createBrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
  import Home  from "./views/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: <Home />
    }
  ]
)
export { router };