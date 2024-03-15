import person from "@/assets/person.png";
import { Github, Plus } from "lucide-react";

export default function MainCard() {
  return (
    <div className="flex md:flex-col flex-1 md:max-h-[600px] 2xl:min-h-[450px] 2xl:px-10 px-8 py-12 bg-card border-1.5 border-card-stroke rounded-lg gap-10 flex-col-reverse hover:border-primary transition-colors">
      <div className="flex items-center justify-between flex-col md:flex-row gap-4">
        <h2 className="font-semibold md:text-xl text-lg 2xl:text-2xl">
          Desenvolvedor Web
        </h2>
        <div className="bg-background border border-card-stroke gap-3 py-1 px-3 flex items-center rounded-full hover:border-primary transition-colors cursor-default">
          <div className="w-1 h-1 2xl:w-2 2xl:h-2 bg-green-500 rounded-full" />
          <p className="uppercase text-xs 2xl:text-base">
            disponível para trabalho
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between flex-1 flex-col md:flex-row md:m-0">
        <div className="space-y-6 2xl:space-y-10 mb-6 md:mb-0">
          <h1 className="md:text-4xl text-3xl 2xl:text-5xl text-white font-bold">
            I'm Vinicius Cascaes
          </h1>
          <p className="leading-relaxed md:text-base text-sm 2xl:text-lg">
            Desenvolvedor web full stack, apaixonado por criar aplicações
            modernas. <br /> Sempre em busca de novos desafios e oportunidades
            para melhorar meu <br /> código.
          </p>
          <div className="flex items-center gap-4 text-white justify-center md:justify-normal md:flex-row-reverse">
            <div className="w-full flex justify-end md:inline-block">
              <button className="h-10 relative flex items-center bg-button border-1.5 border-button-stroke rounded-md shadow-cv-button hover:shadow-h-button transition-shadow">
                <a
                  href="../src/assets/Currículo-Vinicius-Cascaes-Prá.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-r-1.5 p-3 border-background h-10 flex items-center text-xs md:text-base"
                >
                  Visualizar CV
                </a>{" "}
                <Plus className="mx-2" size={20} />
                <div className="absolute top-[-1px] left-1 right-1 h-0.5 bg-gradient-to-b from-button-stroke brightness-150 via-button rounded-md"></div>
              </button>
            </div>
            <div className="w-full md:w-fit">
              <a
                className="h-10 w-fit flex items-center bg-background border-1.5 border-card-stroke rounded-md cursor-pointer hover:shadow-git-button transition-shadow"
                href="https://github.com/viniciuspra"
                target="_blank"
              >
                <p className="border-r-1.5 p-3 border-card-stroke h-10 flex items-center">
                  GitHub
                </p>{" "}
                <Github className="mx-2" size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="min-w-32 min-h-32 w-40 h-40 xl:w-52 xl:h-52 2xl:w-60 2xl:h-60 border-1.5 border-card-stroke rounded-full flex items-center justify-center shadow-lg hover:border-primary transition-colors">
          <img
            src={person}
            alt="uma foto cartoon de uma pessoa"
            className="rounded-full w-32 h-32 bg-card-stroke xl:w-44 xl:h-44  2xl:w-52 2xl:h-52"
          />
        </div>
      </div>
    </div>
  );
}
