import { ValidationError, useForm } from "@formspree/react";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("mleqwrao");
  if (state.succeeded) {
    if (typeof window !== "undefined") {
      window.alert("Thank you for getting in touch with me!");
    }
    return null;
  }
  return (
    <div className="flex flex-col lg:w-1/2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col flex-1 space-y-7 justify-center"
      >
        <div className="flex gap-4">
          <label htmlFor="name" className="flex flex-col gap-2 w-full">
            <span className="font-bold text-lg">{t("FORMname")}</span>
            <input
              id="name"
              type="name"
              name="name"
              className="text-white w-full p-2 bg-background rounded-lg"
            />
          </label>

          <label htmlFor="email" className="flex flex-col gap-2 w-full">
            <span className="font-bold text-lg">{t("FORMemail")}</span>
            <input
              id="email"
              type="email"
              name="email"
              className="text-white w-full p-2 bg-background rounded-lg"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 md:text-sm text-xs"
            />
          </label>
        </div>
        <label htmlFor="message" className="flex flex-col gap-2">
          <span className="font-bold text-lg">{t("FORMmessage")}</span>
          <textarea
            id="message"
            name="message"
            className="min-h-40 px-2 py-3 text-white bg-background rounded-lg"
          />
        </label>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-primary p-3 text-white font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
