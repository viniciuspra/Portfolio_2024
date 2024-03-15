import { Linkedin } from "lucide-react";
import Tooltip from "./tooltip";

export default function Footer() {
  return (
    <div className="flex flex-1 bg-card border-1.5 border-card-stroke rounded-lg items-center hover:border-primary transition-colors">
      <div className="flex flex-1 justify-center">
        <h3 className="text-primary font-semibold md:text-base text-sm">
          Portfolio 2024
        </h3>
      </div>
      <div className="flex flex-1 justify-center">
        <Tooltip tooltip="Linkedin">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/vinicius-cascaes-pra/"
          >
            <Linkedin size={20} />
          </a>
        </Tooltip>
      </div>
      <div className="flex flex-1 justify-center">
        <div className="bg-background border border-card-stroke gap-3 md:py-1 md:px-3 px-2 flex items-center hover:border-1.5 transition-colors rounded-full md:h-7 hover:border-primary">
          <div className="w-1 h-1 bg-green-500 rounded-full" />
          <p className="uppercase md:text-xs text-[10px]">
            disponível para trabalho
          </p>
        </div>
      </div>
    </div>
  );
}
