import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "@/i18n/settings";
import { TFunction } from "i18next";

interface LanguageSwitcherProps {
  t: TFunction<any, any>;
  lng: Lng;
}

const LanguageSwitcher = ({ t, lng }: LanguageSwitcherProps) => {
  return (
    <div className="bg-slate-100 py-4 px-8 rounded-xl text-slate-500">
      <Trans i18nKey="languageSwitcher" t={t}>
        {t("Switch From")} {lng} {t("To")}:{" "}
      </Trans>
      <>
        {languages
          .filter((l) => lng !== l)
          .map((l, index) => {
            return (
              <span key={l}>
                {index > 0 && " or "}
                <Link href={`/${l}`}>{l}</Link>
              </span>
            );
          })}
      </>
    </div>
  );
};

export default LanguageSwitcher;
