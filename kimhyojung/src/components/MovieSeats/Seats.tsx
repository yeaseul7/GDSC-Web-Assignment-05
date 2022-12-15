import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Bookingdetail from './MovieSeatDetail';
const StyledmovieSeats = styled.section`
  width: auto;
  background-color: #d3d3d3;
  display: flex;
  gap: 1.5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2%;
`;
const StyledmovieSeat = styled.button`
  margin: 1px;
  width: 25px;
  height: 25px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5%;
  font-size: 1vw;
  &:hover {
    cursor: pointer;
  }
`;

export default function Seats(
  seatonclickAction: React.MouseEventHandler<HTMLButtonElement>
) {
  const [backgroundColor, setbackgroundColor] = useState<Boolean>(false);

  return (
    <>
      <StyledmovieSeats>
        <p>Screen</p>
        <Bookingdetail />
        <div>
          <span>A</span>
          <StyledmovieSeat onClick={seatonclickAction}>A1</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>A2</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>A3</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>A4</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>A5</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>A6</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>A7</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>A8</StyledmovieSeat>
        </div>
        <div>
          <span>B</span>
          <StyledmovieSeat onClick={seatonclickAction}>B1</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>B2</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>B3</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>B4</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>B5</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>B6</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>B7</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>B8</StyledmovieSeat>
        </div>
        <div>
          <span>C</span>
          <StyledmovieSeat onClick={seatonclickAction}>C1</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>C2</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>C3</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>C4</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>C5</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>C6</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>C7</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>C8</StyledmovieSeat>
        </div>
        <div>
          <span>D</span>
          <StyledmovieSeat onClick={seatonclickAction}>D1</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>D2</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>D3</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>D4</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>D5</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>D6</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>D7</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>D8</StyledmovieSeat>
        </div>
        <div>
          <span>E</span>
          <StyledmovieSeat onClick={seatonclickAction}>E1</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>E2</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>E3</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>E4</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>E5</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>E6</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>E7</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>E8</StyledmovieSeat>
        </div>
        <div>
          <span>F</span>
          <StyledmovieSeat onClick={seatonclickAction}>F1</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>F2</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>F3</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>F4</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>F5</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>F6</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>F7</StyledmovieSeat>
          <StyledmovieSeat onClick={seatonclickAction}>F8</StyledmovieSeat>
        </div>
      </StyledmovieSeats>
    </>
  );
}
