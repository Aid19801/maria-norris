import { ThemeProvider } from '@mui/material/styles';
import { MainContextProvider } from '../context/main';
import { theme } from '../theme';
import './styles.css';

export default function Application({ Component, pageProps }) {
  return (
    <MainContextProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </MainContextProvider>
  )
}