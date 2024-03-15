import ProjectCard from "@/components/project-card";
import { projects } from "@/data";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectsContent() {
  return (
    <div className="bg-gradient-to-tr from-background to-card h-full rounded-lg border-1.5 md:px-16 md:pt-10 pt-16 pb-3 px-3 border-card-stroke relative hover:border-1.5 hover:border-primary transition-all">
      <Link
        to="/"
        className="absolute top-6 left-6 py-1 px-2 active:bg-white/10 active:scale-90 transition-all rounded-lg border-card-stroke hover:border-white border-1.5 text-white bg-primary hover:scale-105"
      >
        <ArrowLeft size={32} />
      </Link>
      <div className="w-full h-full grid xl:grid-rows-2 xl:grid-cols-3 lg:grid-cols-2 gap-4 py-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            img={project.img}
            color={project.color}
            url={project.url}
            url_github={project.url_github}
          />
        ))}
      </div>
    </div>
  );
}
