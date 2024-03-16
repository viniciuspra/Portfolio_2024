import br from "@/assets/brazil.svg";
import usa from "@/assets/usa.svg";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageOptions = [
  {
    name: "pt-BR",
    value: "ptBR",
    flag: br,
  },
  {
    name: "en-US",
    value: "en",
    flag: usa,
  },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [selectedlng, setSelectedLng] = useState(usa);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (languageCode: string, flag: string) => {
    setSelectedLng(flag);
    i18n.changeLanguage(languageCode);
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex justify-center items-center gap-x-1.5 rounded-lg bg-background px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-card-stroke hover:bg-card transition-colors"
            id="menu-button"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-haspopup="true"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {selectedlng && (
              <img src={selectedlng} alt="" className="rounded-full w-7 h-7" />
            )}
            <ChevronDown className="text-muted" size={20} />
          </button>
        </div>
        {isMenuOpen && (
          <div
            className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-background shadow-lg ring-1 ring-card-stroke ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div role="none">
              {LanguageOptions.map((lng) => (
                <a
                  key={lng.value}
                  className="px-4 py-3 text-sm flex items-center gap-x-2 cursor-pointer first-of-type:border-b border-b-card-stroke hover:bg-card"
                  role="menuitem"
                  tabIndex={-1}
                  id={`menu-item-${lng.value}`}
                  onClick={() => handleLanguageChange(lng.value, lng.flag)}
                >
                  <img src={lng.flag} alt="" className="rounded-full w-8 h-8" />
                  {lng.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
