import LanguageSwitcher from "@/components/language/LanguageSwitcher";
import ServerLanguageSwitcher from "@/components/language/ServerLanguageSwitcher";
import { useTranslation } from "@/i18n";
import Link from "next/link";

interface ServerPageProps extends ParamsLan {}

const ServerPage = async ({ params: { lng } }: ServerPageProps) => {
  const { t } = await useTranslation(lng);
  return (
    <div className="flex flex-col items-center space-y-10">
      <h3 className="tracking-wider border-2 border-slate-300 p-10 rounded-lg text-2xl font-bold">
        🌳🐄🐄🌳 {t("Cow")} {t("Server Side")} 🌳🐄🐄🌳
      </h3>
      <Link href={`/${lng}`}>{t("Back")}</Link>
      <ServerLanguageSwitcher lng={lng} />
    </div>
  );
};
export default ServerPage;
