import { createBrowserRouter } from "react-router-dom";

import Root from "@/pages/root";
import MainContent from "@/pages/main";
import AboutContent from "@/pages/about";
import ErrorContent from "@/pages/404";
import ProjectsContent from "@/pages/projects";
import ProjectInfo from "@/pages/project-info";
import ContactContent from "@/pages/contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorContent />,
    children: [
      {
        path: "/",
        element: <MainContent />,
      },
      {
        path: "/about",
        element: <AboutContent />,
      },
      {
        path: "/projects",
        element: <ProjectsContent />,
      },
      {
        path: "/projects/:projectId",
        element: <ProjectInfo />,
      },
      {
        path: "/contact",
        element: <ContactContent />,
      },
    ],
  },
]);
