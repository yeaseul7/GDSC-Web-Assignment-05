import MovieComponent from '../components/Movie/movie';
import styled from 'styled-components';
import React from 'react';

const StyledHome = styled.article`
  display: flex;
  width: 80%;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 25px;
  margin: 2% auto;
`;

export default function Allmovies() {
  return (
    <>
      <StyledHome>
        <MovieComponent
          name="라라랜드"
          imgSrc="/images/lalaland.jpg"
          imgAlt="라라랜드 설명"
          movieURL="https://www.youtube.com/watch?v=QL6YHxkVnSM"
          moviePrice={12000}
        ></MovieComponent>
        <MovieComponent
          name="탑건"
          imgSrc="/images/TOPGUN.jpg"
          imgAlt="탑건 설명"
          movieURL="https://www.youtube.com/watch?v=Mrj9XACVJ8U"
          moviePrice={11000}
        ></MovieComponent>
        <MovieComponent
          name="테넷"
          imgSrc="/images/Tenet.jpg"
          imgAlt="테넷 사진"
          movieURL="https://www.youtube.com/watch?v=7oKAPbnl7mQ"
          moviePrice={9000}
        ></MovieComponent>
        <MovieComponent
          name="죽은 시인의 사회"
          imgSrc="/images/DeadPoetsSociety.jpg"
          imgAlt="죽은 시인의 사회 설명"
          movieURL="https://www.youtube.com/watch?v=CjUhcdgOChU"
          moviePrice={8000}
        ></MovieComponent>
        <MovieComponent
          name="서치"
          imgSrc="/images/search.jpg"
          imgAlt="서치 설명"
          movieURL="https://www.youtube.com/watch?v=BQJ9HgPnr7w"
          moviePrice={10000}
        ></MovieComponent>
      </StyledHome>
    </>
  );
}
