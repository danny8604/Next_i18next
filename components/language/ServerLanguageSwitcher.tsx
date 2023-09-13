import { useTranslation } from "@/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

interface ServerLanguageSwitcherProps {
  lng: Lng;
}

const ServerLanguageSwitcher = async ({ lng }: ServerLanguageSwitcherProps) => {
  const { t } = await useTranslation(lng);
  return <LanguageSwitcher t={t} lng={lng} />;
};

export default ServerLanguageSwitcher;
