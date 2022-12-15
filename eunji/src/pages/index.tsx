import Movie from "../components/Movies";

import styled from "styled-components";

export default function Home() {
  return (
    <StyledDiv>
      <StyledH2>무비차트</StyledH2>
      <StyledDiv2>
        <Movie title="Aladin" imgSrc="movie1.jpg" />
        <Movie title="beauty and the beast" imgSrc="movie2.jpg" />
        <Movie title="범죄도시2" imgSrc="movie3.jpg" />
      </StyledDiv2>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
margin: 1rem;
`;

const StyledH2 = styled.h2`
margin-top: 5rem;
margin-left: 15.9vw;
`;

const StyledDiv2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;