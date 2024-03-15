import { Dot } from "lucide-react";
import Tooltip from "./tooltip";

export default function SkillCard() {
  const skillIconStyle =
    "cursor-pointer border-2 border-transparent hover:border-primary rounded-2xl md:w-12 min-[1970px]:w-20";

  const skillIconUrl = "https://skillicons.dev/icons?i=";
  return (
    <div className="flex lg:w-1/2 w-full bg-card border-1.5 border-card-stroke rounded-lg hover:border-primary transition-colors">
      <div className="flex flex-1 flex-col px-8 2xl:px-10 flex-wrap xl:justify-center 2xl:space-y-8 min-[1900px]:space-y-12 py-3">
        <h2 className="text-2xl xl:text-4xl flex items-center font-semibold py-4">
          <Dot size={32} /> Skills
        </h2>
        <div className="flex gap-3 font-semibold">
          <Tooltip tooltip="JavaScript">
            <img className={skillIconStyle} src={`${skillIconUrl}js`} alt="" />
          </Tooltip>
          <Tooltip tooltip="TypeScript">
            <img className={skillIconStyle} src={`${skillIconUrl}ts`} alt="" />
          </Tooltip>
        </div>
        <div className="flex flex-col relative">
          <div className="pb-6 pt-3 space-y-2">
            <h3 className="text-xl font-bold">Front-end</h3>
            <div className="flex gap-3 font-semibold flex-wrap leading-3">
              <Tooltip tooltip="HTML5">
                <img
                  className={skillIconStyle}
                  src={`${skillIconUrl}html`}
                  alt=""
                />
              </Tooltip>
              <Tooltip tooltip="CSS3">
                <img
                  className={skillIconStyle}
                  src={`${skillIconUrl}css`}
                  alt=""
                />
              </Tooltip>
              <Tooltip tooltip="Reactjs">
                <img
                  className={skillIconStyle}
                  src={`${skillIconUrl}react`}
                  alt=""
                />
              </Tooltip>
              <Tooltip tooltip="TailwindCSs">
                <img
                  className={skillIconStyle}
                  src={`${skillIconUrl}tailwind`}
                  alt=""
                />
              </Tooltip>
              <Tooltip tooltip="Styled-Components">
                <img
                  className={skillIconStyle}
                  src={`${skillIconUrl}styledcomponents`}
                  alt=""
                />
              </Tooltip>
              <Tooltip tooltip="Redux">
                <img
                  className={skillIconStyle}
                  src={`${skillIconUrl}redux`}
                  alt=""
                />
              </Tooltip>
            </div>
          </div>
          <div className="border-b border-card-stroke w-full absolute top-1/2 left-0" />
          <div className="pb-6 pt-3 space-y-2">
            <h3 className="text-xl font-bold">Back-end</h3>
            <div className="flex gap-3 font-semibold flex-wrap leading-3">
              <Tooltip tooltip="Nodejs">
                <img
                  className={skillIconStyle}
                  src={`${skillIconUrl}nodejs`}
                  alt=""
                />
              </Tooltip>
              <Tooltip tooltip="Express">
                <img
                  className={skillIconStyle}
                  src={`${skillIconUrl}express`}
                  alt=""
                />
              </Tooltip>
              <Tooltip tooltip="SQLite">
                <img
                  className={skillIconStyle}
                  src={`${skillIconUrl}sqlite`}
                  alt=""
                />
              </Tooltip>
              <Tooltip tooltip="PostgreSQL">
                <img
                  className={skillIconStyle}
                  src={`${skillIconUrl}postgresql`}
                  alt=""
                />
              </Tooltip>
              <Tooltip tooltip="Prisma">
                <img
                  className={skillIconStyle}
                  src={`${skillIconUrl}prisma`}
                  alt=""
                />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
