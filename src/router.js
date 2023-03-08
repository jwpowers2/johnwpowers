import {
  createBrowserRouter,
  createBrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from "./views/Home";
import Experience from "./views/Experience";
import Objective from "./views/Objective";
import Skills from "./views/Skills";
import Education from "./views/Education";

const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <Home />,
    children: [
      {
        index: true,
        element: <Navigate to="/experience" replace />
      },
      {
        path: "/experience",
        element: <Experience />
      },
      {
        path: "/objective",
        element: <Objective />
      },
      {
        path: "/skills",
        element: <Skills />
      },
      {
        path: "/education",
        element: <Education />
      }
    ]
  }
]);
export { router };
