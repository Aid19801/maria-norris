import { MainContextProvider } from '../context/main';

export default function Application({ Component, pageProps }) {
  return (
    <MainContextProvider>
        <Component {...pageProps} />
    </MainContextProvider>
  )
}