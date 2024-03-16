import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import person from "@/assets/person.png";
import { useTranslation } from "react-i18next";

export default function AboutContent() {
  const { t } = useTranslation();

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
          <h1
            className="md:text-3xl text-2xl lg:text-5xl font-bold 2xl:text-6xl"
            dangerouslySetInnerHTML={{ __html: t("ABOUTtitle") }}
          />
          <div className="md:text-base text-xs 2xl:text-xl xl:text-lg">
            <p
              className="leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t("ABOUTdescription") }}
            />
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
              {t("ABOUTcertificate")}
            </h1>
            <div className="w-full xl:w-fit flex justify-center">
              <a
                className="bg-background w-full xl:w-fit xl:mx-0 md:mx-20 rounded-full md:px-5 px-2 py-3 border-1.5 border-card-stroke hover:border-primary items-center transition-colors cursor-pointer flex gap-3"
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
                    {t("ABOUTcourseName")}
                  </h3>
                  <p className="text-sm md:text-base">Rocketseat</p>
                </div>
                <p className="flex flex-1 justify-end lg:text-base md:text-sm text-xs">
                  {t("ABOUTcourseDate")}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
