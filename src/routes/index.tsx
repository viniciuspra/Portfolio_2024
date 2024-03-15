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
        path: "/sobre",
        element: <AboutContent />,
      },
      {
        path: "/projetos",
        element: <ProjectsContent />,
      },
      {
        path: "/projetos/:projectId",
        element: <ProjectInfo />,
      },
      {
        path: "/contato",
        element: <ContactContent />,
      },
    ],
  },
]);
