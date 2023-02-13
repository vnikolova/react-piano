import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <h1 className={styles.logo}>
      <span role="img" aria-label="metal hand emoji">
        🤘
      </span>
    </h1>
  );
};
