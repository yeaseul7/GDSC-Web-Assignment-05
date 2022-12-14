import type { AppProps } from 'next/app'
import styled from 'styled-components';
import { GlobalStyle } from "../styles/GlobalStyle";
import Image from "next/image";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopDiv>
        <LogoDiv>
          <Image src={"/logoWhite.png"} alt={"logo"} width={70} height={32}/>
          <p>역곡</p>
        </LogoDiv>
      </TopDiv>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

const TopDiv = styled.div`
  display: flex;
  height: 60px;
  padding: 5px 20px;
  background: linear-gradient(to right, rgb(215, 67, 87), rgb(241,79,58) 59%, rgb(239, 100, 47));

  align-items: center;
`;

const LogoDiv = styled.div`
  display: flex;
  margin-left: 80px;
  color: white;
  text-align: center;
  font-size: 25px;
`;
