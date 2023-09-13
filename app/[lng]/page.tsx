import ServerLanguageSwitcher from "@/components/language/ServerLanguageSwitcher";
import { useTranslation } from "@/i18n";
import Link from "next/link";

interface PageProps extends ParamsLan {}

export default async function Page({ params: { lng } }: PageProps) {
  const { t } = await useTranslation(lng);
  return (
    <div className="flex flex-col w-full items-center space-y-10">
      <h1 className="tracking-wider text-3xl font-bold">{`🐧🐧 ${t(
        "This Is The First Page"
      )} 🐧🐧 `}</h1>
      <Link className=" text-yellow-400" href={`/${lng}/home`}>{`${t(
        "Home Page"
      )}`}</Link>
      <ServerLanguageSwitcher lng={lng} />
    </div>
  );
}
