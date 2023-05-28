import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {currentYear} <FontAwesomeIcon icon={regular("copyright")} />&nbsp;
      Designed and developed by&nbsp;
      <a href="https://viknikolova.com" target="_blank" rel="noreferrer" className={styles.link}>
        Vik
      </a>
      <br />
    </footer>
  );
};
