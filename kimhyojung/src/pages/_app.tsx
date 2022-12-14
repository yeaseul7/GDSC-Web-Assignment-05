import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import Nav from '../components/UI/nav';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Component {...pageProps}></Component>
    </>
  );
}
