import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/style';
import Header from '../components/Header';
export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <GlobalStyle />
        </>
    );
}
