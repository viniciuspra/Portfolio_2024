import { useState } from "react";
import { ChevronRight, Github, Linkedin, X } from "lucide-react";
import { Theme } from "./theme-provider";
import SetTheme from "./set-theme";
import Icon from "./icon";

export default function FloatingButtonMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Themes: Theme[] = ["default", "red", "green", "purple"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-1/2 left-1 transform translate-y-2/4 translate-x-2/4">
      <button
        className={`rounded-full w-10 h-10 cursor-pointer transition-all hover:brightness-110 hover:animate-none flex justify-center items-center ${
          isMenuOpen ? "" : "animate-pulse"
        }`}
        onClick={toggleMenu}
      >
        <Icon />
      </button>
      {isMenuOpen && (
        <div className="absolute top-1/2 transform -translate-y-1/2 left-11 bg-background border-1.5 border-card-stroke z-50 w-60 rounded-md h-fit">
          <div className="h-12 bg-card-stroke rounded-t-md absolute top-0 left-0 w-full -z-40" />
          <div className="space-y-6">
            <div className="mt-6 flex items-center justify-between px-3">
              <Icon />
              <span
                className="absolute top-3 right-3 text-white/40 cursor-pointer"
                onClick={toggleMenu}
              >
                <X />
              </span>
            </div>
            <div className="h-20 w-full flex items-center justify-evenly">
              {Themes.map((theme, index) => (
                <SetTheme theme={theme} key={index} />
              ))}
            </div>
            <div className="flex flex-col">
              <a
                className="border-1.5 border-card-stroke w-full flex items-center justify-around py-3 cursor-pointer"
                href="https://www.linkedin.com/in/vinicius-cascaes-pra/"
                target="_blank"
              >
                <Linkedin /> Linkedin <ChevronRight />
              </a>
              <a
                className="border-1.5 border-card-stroke w-full flex items-center justify-around py-3 cursor-pointer"
                href="https://github.com/viniciuspra"
                target="_blank"
              >
                <Github /> Github <ChevronRight />
              </a>
            </div>
          </div>
          <div className="h-12 bg-card-stroke rounded-b-md w-full" />
        </div>
      )}
    </div>
  );
}
