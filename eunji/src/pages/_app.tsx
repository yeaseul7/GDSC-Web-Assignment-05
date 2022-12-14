import type { AppProps } from 'next/app';
import Link from 'next/link';
import styled from "styled-components";
import GlobalStyle from '../../styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Link href='/'><StyledImg src="egv.png" alt="EGV로고" /></Link>
      <Component {...pageProps} />
    </>
  )
}

const StyledImg = styled.img`
      width: 60px;
      height: auto;

      margin-top: 1rem;
      margin-left: 1rem;
      `;