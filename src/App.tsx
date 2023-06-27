import { Logo } from "./components/Logo";
import { Footer } from "./components/Footer";
import styles from "./App.module.css";
import { Main } from "./components/Main";
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from '@chakra-ui/theme'

const { Button, Select, FormLabel, Alert } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Alert,
    Button,
    Select,
    FormLabel  },
})
export function App() {
  return (
    <ChakraBaseProvider theme={theme}>
    <div className={styles.app}>
      <Logo />
      <div className={styles.content}>
        <Main />
      </div>
      <Footer />
    </div>
    </ChakraBaseProvider>

  );
}
