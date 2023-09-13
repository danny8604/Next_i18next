"use client";

import ClientLanguageSwitcher from "@/components/language/ClientLanguageSwitcher";
import { useTranslation } from "@/i18n/client";
import Link from "next/link";

interface ClientPageProps extends ParamsLan {}

const ClientPage = ({ params: { lng } }: ClientPageProps) => {
  const { t } = useTranslation(lng);
  return (
    <div className="flex flex-col items-center space-y-10">
      <h3 className=" tracking-wider border-2 border-slate-300 p-10 rounded-lg text-2xl font-bold">
        🧊🐧🐧🧊 {t("Penguin")} {t("Client Side")} 🧊🐧🐧🧊
      </h3>
      <Link href={`/${lng}`}>{t("Back")}</Link>
      <ClientLanguageSwitcher lng={lng} />
    </div>
  );
};
export default ClientPage;
