import type { AppProps } from "next/app";
import Link from "next/link";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <StyledDivBox>
        <nav>
          <StyledImg src="../megabox.png"></StyledImg>

          <p>
            <Link href="/">
              <StyledSpan>상영 영화 </StyledSpan>
            </Link>
            <Link href="/booking">
              <StyledSpan>예매하기</StyledSpan>
            </Link>
          </p>
        </nav>
      </StyledDivBox>

      <Component {...pageProps} />
    </>
  );
}

const StyledDivBox = styled.div`
  margin: 0;
  padding-top: 20px;

  padding-bottom: 50px;
`;

const StyledImg = styled.img`
  width: 1520px;
  height: 300px;

  overflow: hidden;
`;

const StyledSpan = styled.span`
  font-size: 20px;
  color: white;
`;
