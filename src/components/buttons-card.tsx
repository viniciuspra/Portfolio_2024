import { Link } from "react-router-dom";

export default function ButtonsCard() {
  return (
    <div className="lg:w-1/2 w-full flex flex-col gap-4 min-h-52">
      <div className="md:text-lg xl:text-2xl hover:text-white/80 hover:animate-pulse w-full cursor-pointer bg-gradient-to-tr from-card from-50% to-primary-opacity h-1/2 flex items-center justify-center rounded-lg border-primary border-t-2 border-r-2 hover:border-1.5 transition-all">
        <Link
          to="sobre"
          className="w-full h-full flex items-center justify-center"
        >
          Sobre Mim
        </Link>
      </div>
      <div className=" flex flex-1 gap-4 items-center justify-center">
        <Link
          to="projetos"
          className="md:text-lg xl:text-2xl hover:text-white/80 hover:animate-pulse w-full cursor-pointer bg-gradient-to-tr from-card from-50% to-primary-opacity h-full flex items-center justify-center rounded-lg border-primary border-t-2 border-r-2 hover:border-1.5 transition-all"
        >
          Projetos
        </Link>
        <Link
          to="contato"
          className="md:text-lg xl:text-2xl hover:text-white/80 hover:animate-pulse w-full cursor-pointer bg-gradient-to-tr from-card from-50% to-primary-opacity h-full flex items-center justify-center rounded-lg border-primary border-t-2 border-r-2 hover:border-1.5 transition-all"
        >
          Contato
        </Link>
      </div>
    </div>
  );
}
