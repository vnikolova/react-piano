import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/logo.png" alt="logo" className={styles.logo} />
      <h1 className={styles.heading}>| Virtual Piano</h1>
    </div>
  );
};
