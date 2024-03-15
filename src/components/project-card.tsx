import { ProjectProps } from "@/data";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectCard({
  id,
  title,
  subtitle,
  description,
  color,
  img,
  url,
  url_github,
}: ProjectProps) {
  return (
    <Link
      to={`${id}`}
      state={{
        project: {
          id,
          title,
          subtitle,
          description,
          color,
          img,
          url,
          url_github,
        },
      }}
      style={{ backgroundColor: color }}
      className="flex flex-col relative group p-7 justify-center items-center rounded-2xl hover:scale-95 gap-10 border-4 border-card-stroke hover:border-primary cursor-pointer transition-transform duration-300"
    >
      <div className="w-full text-white transition-colors">
        <h2 className="lg:text-xl text-lg xl:text-2xl 2xl:text-3xl font-semibold">
          {title}
        </h2>
      </div>
      <div className="flex flex-col gap-10 py-10">
        <img
          src={img}
          alt="project cover image"
          className="aspect-auto rounded-lg w-full"
        />
        <button className="absolute top-7 right-7 bg-white text-black hover:text-white p-1 rounded-full hover:brightness-125 hover:scale-110 hover:bg-background border-dashed hover:border-1.5 border-primary transition-all">
          <ArrowUpRight size={32} />
        </button>
      </div>
    </Link>
  );
}
