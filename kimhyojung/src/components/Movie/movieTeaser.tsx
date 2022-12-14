import React from 'react';
import Embed from 'react-embed';
import styled from 'styled-components';
const StyledmovieTeaser = styled.div`
  width: 70%;
  margin-top: 5px;
  position: absolute;
  background-color: white;
`;

export default function MovieTeaser(
  movieurl: string,
  setmodal: React.MouseEventHandler<HTMLButtonElement>
) {
  return (
    <StyledmovieTeaser>
      <Embed url={movieurl}></Embed>
      <button onClick={setmodal}>X</button>
    </StyledmovieTeaser>
  );
}
