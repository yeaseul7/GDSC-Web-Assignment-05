import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Seats from './Seats';
import Router from 'next/router';
import {
  MOVIE_SEAT_ERRORMESSAGE,
  POSSIBLE_SEAT_COLOR,
  NOT_POSSIBLE_SEAT_COLOR,
  CURRENT_SEAT_COLOR,
  MOVIE_EMPTY_ERRORMESSAGE,
} from '../../constants';

const StyledmovieWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 75%;
  justify-content: center;
  gap: 3%;
`;
const StyledmovieImage = styled.img`
  max-height: 80%;
  object-fit: cover;
  display: flex;
  height: 350px;
  border-radius: 2%;
`;

const StyledmoiveName = styled.h2`
  color: white;
  text-align: center;
  margin-bottom: 2%;
`;

const StyledmoviePrice = styled.h3`
  color: black;
  font-weight: 700;
  display: flex;
  justify-content: center;
`;

const StyledmovieDetail = styled.section`
  display: flex;
  width: 15%;
  flex-direction: column;
  background-color: #d3d3d3;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5px auto;
  border-radius: 2%;
`;

const StylemoviebuttonDiv = styled.div`
  display: flex;
`;

/* 이미 선택된 영화 좌석을 로컬 스토리지에서 가져옴 */
function getlocalStorage(moviename: string | undefined | string[]) {
  if (typeof moviename !== 'string') {
    return false;
  }
  const getlocalstorage = localStorage.getItem(moviename);
  if (typeof getlocalstorage !== 'string') {
    return false;
  }
  return JSON.parse(getlocalstorage);
}

export default function MovieSeats() {
  /*
기본 영화-> 라라랜드로 설정
*/

  //예매한 영화의 총 금액 (선택한 좌석 수 * 영화의 가격)
  const [totalmovieprice, settotalmovieprice] = useState<number>(1);

  //예매한 좌석의 개수
  const [seatCount, setseatCount] = useState<number>(0);

  //이미 선택된 좌석(좌석을 누르면, 선택된 좌석 배열의 상태가 바뀜)
  const [clickedSeats, setclickedSeats] = useState<string[]>([]);

  //영화 이미지
  const [movieimg, setmovieimg] = useState<string>('/images/lalaland.jpg');

  //영화 이름
  const [moviename, setmoviename] = useState<string>('라라랜드');

  //영화 가격
  const [movieprice, setmovieprice] = useState<number>(12000);

  //영화가 바뀌면 일어날 일들
  /*
  영화 이름이 바뀌어야하고, 영화 이미지도 바뀌어야함.
  영화의 가격과, 총금액도 마찬가지로 바뀌어야 함
  선택한 좌석의 개수도 0으로 바뀌어야하고,(다른 영화 이므로),
  새 영화로 바뀌었으니깐, 내가 선택한 좌석의 배열도 새로 초기화되어야 한다고 생각했음 
  */
  const movieonChangeEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const moviename = event.target.value;
    const { price, img } = event.target.selectedOptions[0].dataset;

    setmoviename(moviename);
    settotalmovieprice(Number(price));
    setmovieprice(Number(price));
    setseatCount(0);
    setclickedSeats([]);
    if (typeof img === 'string') setmovieimg(img);
  };

  /*
  좌석을 클릭했을 떄 
  */
  function seatbutClick(event: React.MouseEvent<HTMLButtonElement>) {
    const currentclickedNode = event.currentTarget;
    const currentclickedSeat = event.currentTarget.innerHTML;
    const currentclickedNodeColor = currentclickedNode.style.backgroundColor;

    //이미 예약된 좌석인 경우 예외처리
    if (currentclickedNodeColor === NOT_POSSIBLE_SEAT_COLOR) {
      alert(MOVIE_SEAT_ERRORMESSAGE);
      return;
    }

    // 좌석을 눌렀을떄, 선택한 좌석을 담는 배열에 지금좌석이 있는경우(좌석을 누르고, 그 좌석을 다시 누른 경우)

    /*
      선택한 좌석을 담는 배열에 지금 좌석을 지워주고, 좌석 개수 -1
    */
    if (clickedSeats.includes(currentclickedSeat)) {
      setclickedSeats(
        clickedSeats.filter((clickedseat) => clickedseat !== currentclickedSeat)
      );
      currentclickedNode.style.backgroundColor = POSSIBLE_SEAT_COLOR;
      setseatCount(seatCount - 1);
    }

    // 좌석을 한번만 누른 경우

    /*
      배열에 지금 좌석을 넣어주고, 좌석 개수 + 1
    */
    else {
      setseatCount(seatCount + 1);
      setclickedSeats([...clickedSeats, currentclickedSeat]);
      currentclickedNode.style.backgroundColor = CURRENT_SEAT_COLOR;
    }
  }

  /* 좌석의 개수가 바뀔떄마다, 총 내야 하는 영화 금액도 바뀜 */
  useEffect(() => {
    settotalmovieprice(seatCount * movieprice);
  }, [seatCount]);

  /* 영화가 바뀔때 */
  useEffect(() => {
    //먼저 모든 좌석색을 초기화해줌
    const allbuttons = Array.from(document.getElementsByTagName('button'));
    allbuttons.forEach((eachbutton) => {
      eachbutton.style.backgroundColor = POSSIBLE_SEAT_COLOR;
    });

    //로컬 스토리지에 없는 경우
    const isnotpossibleSeats = getlocalStorage(moviename);
    if (isnotpossibleSeats === false) {
      return;
    }

    // 로컬 스토리지에 있는 경우

    /*
    모든 좌석 중, 로컬 스토리지에 있는 좌석(이미 예매된 좌석)만 골라서, 그 좌석의 배경색을 바꿔줌
    이미 선택된 좌석 배열을,  예메된 좌석들로 갱신해줌
    */
    [...isnotpossibleSeats].forEach((eachprevseat) => {
      const prevseatNodes = allbuttons.filter(
        (eachbuttonNode) => eachbuttonNode.innerHTML === eachprevseat
      );

      prevseatNodes.forEach((eachseatNode) => {
        eachseatNode.style.backgroundColor = NOT_POSSIBLE_SEAT_COLOR;
      });
    });
    setclickedSeats(isnotpossibleSeats);
  }, [moviename]);

  /*예매 버튼을 눌렀을떄 로컬스토리지에 예약된 좌석들의 값 저장 + purchase로 페이지 이동 */
  const setLocalStorage = (event: React.MouseEvent<HTMLButtonElement>) => {
    window.localStorage.setItem(`${moviename}`, JSON.stringify(clickedSeats));

    // 좌석을 안눌렀는데, 예매버튼 누른 경우 예외처리
    if (seatCount === 0) {
      alert(MOVIE_EMPTY_ERRORMESSAGE);
      return;
    }
    Router.push(
      {
        pathname: '/purchase',
        query: {
          moviename: moviename,
          totalprice: totalmovieprice,
          totalseat: seatCount,
          movieimg: movieimg,
        },
      },
      'purchase' + `${moviename}`
    );
  };

  /* 취소 버튼을 누르면 로컬스토리지 값 제거 + 홈으로 이동 */
  const clearLocalStorage = (event: React.MouseEvent<HTMLButtonElement>) => {
    window.localStorage.removeItem(`${moviename}`);
    Router.push({
      pathname: '/',
    });
  };

  return (
    <>
      <select onChange={movieonChangeEvent}>
        <option
          value="라라랜드"
          data-price={12000}
          data-img="/images/lalaland.jpg"
          selected
        >
          라라랜드
        </option>
        <option value="탑건" data-price={11000} data-img="/images/TOPGUN.jpg">
          탑건
        </option>
        <option value="테넷" data-price={9000} data-img="/images/Tenet.jpg">
          테넷
        </option>
        <option
          value="죽은 시인의 사회"
          data-price={8000}
          data-img="/images/DeadPoetsSociety.jpg"
        >
          죽은 시인의 사회
        </option>
        <option value="서치" data-price={10000} data-img="/images/search.jpg">
          서치
        </option>
      </select>

      <StyledmoiveName>{moviename}</StyledmoiveName>
      <StyledmovieWrapper>
        <StyledmovieImage src={movieimg}></StyledmovieImage>
        {Seats(seatbutClick)}
      </StyledmovieWrapper>
      <StyledmovieDetail>
        <StyledmoviePrice>{totalmovieprice}</StyledmoviePrice>
        <StylemoviebuttonDiv>
          <button onClick={setLocalStorage}>예매</button>
          <button onClick={clearLocalStorage}>취소</button>
        </StylemoviebuttonDiv>
      </StyledmovieDetail>
    </>
  );
}
