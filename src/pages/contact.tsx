import ContactForm from "@/components/contact-form";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ilustration from "@/assets/contact.svg";
import { t } from "i18next";

export default function ContactContent() {
  return (
    <div className="bg-card overflow-y-auto h-full rounded-lg border-1.5 border-card-stroke relative hover:border-1.5 hover:border-primary transition-all flex flex-col">
      <Link
        to="/"
        className="absolute top-6 left-6 py-1 px-2 active:bg-white/10 active:scale-90 transition-all rounded-lg border-card-stroke hover:border-white border-1.5 text-white bg-primary hover:scale-105"
      >
        <ArrowLeft size={32} />
      </Link>
      <div className="flex flex-1 flex-col lg:p-20 pt-28 pb-10 px-5 gap-10 justify-center">
        <div className="space-y-3">
          <h1
            className="text-4xl font-bold text-white/90"
            dangerouslySetInnerHTML={{ __html: t("CONTACTtitle") }}
          />
          <p
            className="text-lg leading-relaxed font-medium"
            dangerouslySetInnerHTML={{ __html: t("CONTACTdescription") }}
          />
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-10">
          <ContactForm />
          <img
            src={ilustration}
            alt="ilustraçao para contato"
            className="lg:w-1/2 xl:w-1/3 m-auto"
          />
        </div>
      </div>
    </div>
  );
}
