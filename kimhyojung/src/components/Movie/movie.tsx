import styled, { StyledComponent } from 'styled-components';
import { Movie } from '../../constants';
import { useState } from 'react';
import React from 'react';
import MovieTeaser from './movieTeaser';
import Router from 'next/router';

const StyledMovie = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  max-height: 400px;
`;

const StyledmovieName = styled.p`
  width: 100%;
  color: whitesmoke;
  font-weight: 100;
`;

const StyledmovieImage = styled.img`
  height: 80%;
  width: 100%;
  object-fit: cover;
  display: flex;
  border-radius: 6%;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const StyledmovieButton = styled.button`
  color: #fff;
  background-color: #037b94;
  border: none;
  display: block;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    background-color: #037b95;
  }
  border-radius: 5%;
`;

export default function MovieComponent({
  name,
  imgSrc,
  imgAlt,
  movieURL,
  moviePrice,
}: Movie) {
  const [modal, setModal] = useState<Boolean>(false);

  const movieimgonClick = (event: React.MouseEvent<HTMLImageElement>) => {
    Router.push({
      pathname: '/booking',
    });
  };

  const showTeaser = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };
  return (
    <>
      <StyledMovie>
        <StyledmovieImage onClick={movieimgonClick} src={imgSrc} alt={imgAlt} />
        <StyledmovieName>{name}</StyledmovieName>
        <StyledmovieButton onClick={showTeaser}>티저보기</StyledmovieButton>
      </StyledMovie>
      {modal === true ? MovieTeaser(movieURL, showTeaser) : null}
    </>
  );
}
