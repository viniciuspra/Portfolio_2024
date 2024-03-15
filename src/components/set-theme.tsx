import { Theme as ThemeTypes, useTheme } from "@/components/theme-provider";
import { Check } from "lucide-react";

interface ThemeProps {
  theme: ThemeTypes;
}

export default function SetTheme({ theme }: ThemeProps) {
  const { theme: currentTheme, setTheme } = useTheme();

  return (
    <div>
      {theme === "default" && (
        <div
          className={`${
            currentTheme === "default"
              ? "rounded-full bg-transparent border-2 p-1 border-[#0A66C2]"
              : "p-1 border-2 border-transparent"
          }`}
          onClick={() => setTheme(theme)}
        >
          <div className="w-6 h-6 cursor-pointer bg-[#0A66C2] rounded-full flex items-center justify-center text-white">
            {currentTheme === "default" && <Check size={20} />}
          </div>
        </div>
      )}
      {theme === "red" && (
        <div
          className={`${
            currentTheme === "red"
              ? "rounded-full bg-transparent border-2 p-1 border-[#F34720]"
              : "p-1 border-2 border-transparent"
          }`}
          onClick={() => setTheme(theme)}
        >
          <div className="w-6 h-6 cursor-pointer bg-[#F34720] rounded-full flex items-center justify-center text-white">
            {currentTheme === "red" && <Check size={20} />}
          </div>
        </div>
      )}

      {theme === "green" && (
        <div
          className={`${
            currentTheme === "green"
              ? "rounded-full bg-transparent border-2 p-1 border-[#0AC20A]"
              : "p-1 border-2 border-transparent"
          }`}
          onClick={() => setTheme(theme)}
        >
          <div className="w-6 h-6 cursor-pointer bg-[#0AC20A] rounded-full flex items-center justify-center text-white">
            {currentTheme === "green" && <Check size={20} />}
          </div>
        </div>
      )}
      {theme === "purple" && (
        <div
          className={`${
            currentTheme === "purple"
              ? "rounded-full bg-transparent border-2 p-1 border-[#660AC2]"
              : "p-1 border-2 border-transparent"
          }`}
          onClick={() => setTheme(theme)}
        >
          <div className="w-6 h-6 cursor-pointer bg-[#660AC2] rounded-full flex items-center justify-center text-white">
            {currentTheme === "purple" && <Check size={20} />}
          </div>
        </div>
      )}
    </div>
  );
}
