import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SetTitle() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let pageTitle = "Portfolio - Vinicius Cascaes Prá";

    if (path === "/") {
      pageTitle += "";
    } else if (path.startsWith("/projetos")) {
      pageTitle += " | PROJETOS";
    } else {
      const paths = path.split("/");
      if (paths.length > 1) {
        pageTitle += " | " + paths[1].toUpperCase();
      }
    }

    document.title = pageTitle;
  }, [location]);

  return null;
}
