import "./Footer.css"
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div>
        <footer>
          {t("Footer")}
        </footer>
    </div>
  )
}

export default Footer