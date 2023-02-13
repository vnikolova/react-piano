import { Logo } from "./components/Logo";
import { Footer } from "./components/Footer";
import styles from "./App.module.css";
import { Main } from "./components/Main";

export function App() {
  return (
    <div className={styles.app}>
      <Logo />
      <Main />
      <Footer />
    </div>
  );
}
