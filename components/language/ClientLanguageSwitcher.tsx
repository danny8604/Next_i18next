import { useTranslation } from "@/i18n/client";
import LanguageSwitcher from "./LanguageSwitcher";

interface ClientLanguageSwitcherProps {
  lng: Lng;
}

const ClientLanguageSwitcher = ({ lng }: ClientLanguageSwitcherProps) => {
  const { t } = useTranslation(lng);
  return <LanguageSwitcher t={t} lng={lng} />;
};

export default ClientLanguageSwitcher;
