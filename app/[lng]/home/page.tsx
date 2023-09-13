import ServerLanguageSwitcher from "@/components/language/ServerLanguageSwitcher";
import { useTranslation } from "@/i18n";
import Link from "next/link";

interface HomePageProps extends ParamsLan {}

const HomePage = async ({ params: { lng } }: HomePageProps) => {
  const { t } = await useTranslation(lng);

  return (
    <div className="flex flex-col items-center space-y-10">
      <h1 className="tracking-wider text-3xl font-bold">{`🦔🦔 ${t(
        "This Is The Home Page"
      )} 🦔🦔`}</h1>
      <Link className=" text-yellow-400" href={`/${lng}/home/server`}>
        {t("Server Side")}
      </Link>
      <Link className=" text-yellow-400" href={`/${lng}/home/client`}>
        {t("Client Side")}
      </Link>
      <Link href={`/${lng}`}>{t("Back")}</Link>
    </div>
  );
};

export default HomePage;
