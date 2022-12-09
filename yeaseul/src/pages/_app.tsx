import type { AppProps } from "next/app";
import Link from "next/link";
import { BiCameraMovie } from "react-icons/bi";
import styled from "styled-components";
import GlobalStyle from "../components/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>
          <BiCameraMovie size={80} />
          <StyledP>PangCinema</StyledP>
        </Title>
        <SubNav>
          <StyledP2>로그인</StyledP2>
          <StyledP2>회원가입</StyledP2>
          <StyledP2>고객센터</StyledP2>
          <StyledP2>맴버쉽</StyledP2>
        </SubNav>
        <Hr />
        <MovieNav>
          <StyleLink href="/">movie 예매 순위</StyleLink>
          <StyleLink href="/upcoming">상영 예정작</StyleLink>
        </MovieNav>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
const Hr = styled.div`
  border-top: 0.5px solid #6a6a6a ;
  margin-left: 20px;
  margin-right: 20px;
`;
const StyledP2 = styled.p`
  &:hover {
    transform: translateY(-3px);
    transition: transform 0.3s ease;
    color: white;
    text-decoration: underline red 0.1875rem;
  }
`;
const SubNav = styled.nav`
  color: #6a6a6a;
  display: flex;
  gap: 1.25rem;
  flex-direction: row-reverse;
  padding-right: 25px;
`;
const MovieNav = styled.nav`
  margin: 10px;
  display: flex;
  gap: 20px;
  justify-content: center;
`;
const StyleLink = styled(Link)`
  text-decoration: none;
  color: white;

  padding: 10px;
  font-size: large;
  border-radius: 5px;

  &:hover {
    transform: translateY(-3px);
    transition: transform 0.3s ease;
    text-decoration: underline red 0.1875rem;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0px 20px 0px;
  color: white;
  height: 60px;
`;
const StyledP = styled.p`
  font-size: 50px;
  margin: 0px;
  padding-top: 25px;
  font-family: serif;
  letter-spacing: 4px;
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1c1c1c;
  background-size: cover;
  color: white;
`;
