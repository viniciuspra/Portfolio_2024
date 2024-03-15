import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import person from "@/assets/person.png";

export default function AboutContent() {
  return (
    <div className="bg-card overflow-y-auto h-full rounded-lg border-1.5 md:px-16 md:pt-10 pt-16 pb-3 px-3 border-card-stroke relative hover:border-1.5 hover:border-primary transition-all">
      <Link
        to="/"
        className="absolute top-6 left-6 py-1 px-2 active:bg-white/10 active:scale-90 transition-all rounded-lg border-card-stroke hover:border-white border-1.5 text-white bg-primary hover:scale-105"
      >
        <ArrowLeft size={32} />
      </Link>
      <div className="flex px-5 h-full flex-col xl:flex-row justify-center gap-10">
        <div className="md:space-y-7 space-y-2 2xl:space-y-10 flex flex-col justify-center py-10">
          <h1 className="md:text-3xl text-2xl lg:text-5xl font-bold 2xl:text-6xl">
            Sobre <span className="text-primary">mim</span>
          </h1>
          <div className="md:text-base text-xs 2xl:text-xl xl:text-lg">
            <p className="leading-relaxed">
              E aí! Sou o <span className="text-primary">Vinicius</span>, um dev
              júnior <span className="text-primary">full-stack</span> viciado em
              tecnologia e apaixonado por resolver quebra-cabeças digitais.
              Comecei nessa jornada com o pé na porta, explorando as maravilhas
              do <span className="text-primary">front-end</span>, e logo me vi
              mergulhando cada vez mais fundo no mundo da programação. <br />{" "}
              <br />
              No final de 2022, comecei um curso{" "}
              <span className="text-primary">full-stack</span> que foi tipo uma
              montanha-russa de aprendizado. Aprendi muita coisa nova, desde
              criar <span className="text-primary">interfaces</span> até lidar
              com <span className="text-primary">servidores</span>. <br />{" "}
              <br /> Tô sempre na busca de aprender mais, seja fuçando em
              <span className="text-primary"> documentações</span>, ou até mesmo
              botando a mão na massa em{" "}
              <span className="text-primary">projetos</span> que me desafiam a
              sair da <span className="text-primary">zona de conforto</span>.{" "}
              <br /> <br />{" "}
              <span className="text-primary">
                O que me motiva nessa jornada?
              </span>{" "}
              Não é só escrever código, é fazer parte de algo maior. É saber que
              cada linha que eu escrevo pode fazer a diferença na vida de
              alguém, seja simplificando tarefas do dia a dia ou criando algo
              que inspire mudanças positivas. <br /> <br /> Tô ligado que o
              caminho pela frente é cheio de{" "}
              <span className="text-primary">desafios</span>, mas tô pronto pra
              encarar tudo de cabeça erguida. Tamo junto nessa, vamos
              transformar o mundo da <span className="text-primary">web!</span>
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-20 mb-6">
          <div className="min-w-40 min-h-40 w-48 h-48 xl:w-52 xl:h-52 2xl:w-60 2xl:h-60 border-1.5 border-card-stroke rounded-full flex items-center justify-center shadow-lg hover:border-primary transition-colors">
            <img
              src={person}
              alt="uma foto cartoon de uma pessoa"
              className="rounded-full w-40 h-40 bg-card-stroke xl:w-44 xl:h-44 2xl:w-52 2xl:h-52"
            />
          </div>
          <div className="w-full flex flex-col items-center gap-7">
            <h1 className="text-xl font-semibold md:px-5 xl:w-fit w-full text-center">
              Certificado
            </h1>
            <div className="w-full xl:w-fit">
              <a
                className="bg-background xl:w-fit xl:mx-0 mx-20 rounded-full md:px-5 px-2 py-3 border-1.5 border-card-stroke hover:border-primary items-center transition-colors cursor-pointer flex gap-3"
                href="https://app.rocketseat.com.br/certificates/04f7863d-eca9-4382-8b87-95963d73f175"
                target="_blank"
              >
                <img
                  src="https://app.rocketseat.com.br/_next/image?url=%2Fassets%2Flogos%2Frocketseat-symbol.svg&w=64&q=75"
                  alt="rocketseat logo"
                  className="bg-[#8257E5] w-10 h-10 p-2 rounded-2xl"
                />
                <div>
                  <h3 className="text-white text-sm md:text-base xl:text-lg">
                    Desenvolvimento Web
                  </h3>
                  <p className="text-sm md:text-base">Rocketseat</p>
                </div>
                <p className="flex flex-1 justify-end lg:text-base md:text-sm text-xs">
                  nov/22 - out/23
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
