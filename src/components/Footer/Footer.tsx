import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {currentYear} <FontAwesomeIcon icon={regular("copyright")} />
      &nbsp;Made with&nbsp;
      <FontAwesomeIcon icon={solid("heart")} /> by
      <a href="https://viknikolova.com" target="_blank" rel="noreferrer">
        {" "}
        Vik{" "}
      </a>
      <br />
    </footer>
  );
};
