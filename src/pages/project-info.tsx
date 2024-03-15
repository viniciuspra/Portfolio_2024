import Tooltip from "@/components/tooltip";
import { ProjectProps } from "@/data";
import { ArrowLeft, Github, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface StateProps {
  project: ProjectProps;
}

export default function ProjectInfo() {
  const { state } = useLocation();
  const { project } = state as StateProps;

  return (
    <div className="bg-gradient-to-tr from-background to-card h-full flex flex-col justify-center p-5 md:p-10 rounded-lg border-1.5 border-card-stroke relative hover:border-1.5 hover:border-primary transition-all">
      <Link
        to="/projetos"
        className="absolute top-6 left-6 py-1 px-2 active:bg-white/10 active:scale-90 transition-all rounded-lg border-card-stroke hover:border-white border-1.5 text-white bg-primary hover:scale-105"
      >
        <ArrowLeft size={32} />
      </Link>
      <div className="bg-card border-1.5 border-card-stroke hover:border-primary p-10 lg:py-14 rounded-lg shadow-md md:my-10 my-20">
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-center">
          <div className="flex flex-col gap-3 lg:w-2/3">
            <h2 className="text-xl font-bold text-white">{project.subtitle}</h2>
            <h1 className="text-3xl font-bold text-white">{project.title}</h1>
            <p>{project.description}</p>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src={project.img}
              alt={`foto da capa do projeto ${project.title}`}
              className="rounded-lg shadow-md"
              style={{ boxShadow: `0 15px 50px -6px ${project.color}` }}
            />
          </div>
        </div>
        <div className="flex gap-4 items-center lg:justify-normal justify-center w-full mt-10">
          <a
            href={project.url}
            target="_blank"
            className="hover:bg-transparent bg-primary text-white transition-colors rounded-full border-1.5 border-transparent hover:border-primary hover:border-dashed"
          >
            <Tooltip tooltip="Site" className="w-full h-full p-3">
              <Globe />
            </Tooltip>
          </a>
          <a
            href={project.url_github}
            target="_blank"
            className="hover:bg-transparent bg-primary text-white transition-colors rounded-full border-1.5 border-transparent hover:border-primary hover:border-dashed"
          >
            <Tooltip tooltip="GitHub" className="w-full h-full p-3">
              <Github />
            </Tooltip>
          </a>
        </div>
      </div>
    </div>
  );
}
