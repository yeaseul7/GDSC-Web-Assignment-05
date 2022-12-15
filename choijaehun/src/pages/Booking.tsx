import { watch } from "fs";
import { Redirect } from "next/dist/lib/load-custom-routes";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";

interface IMovie {
  id: number;
  color: string;
}

interface IColorSet {
  [key: string]: string;
}

const INITCOLOR = "#fc9595";

export default function Booking() {
  // 예매자 수
  const [watchNum, setWatchNum] = useState<number>(0);

  // 영화 가격
  const [price, setPrice] = useState<number>(3000);

  // 예매한 영화의 총 가격 (예매자수 * 영화 가격)
  const [sumPrice, setSumPrice] = useState<number>(3000);

  // 영화 이름
  const [movieName, setMovieName] = useState<string>("이프 온리");

  // 음 좌석 버튼? 1)
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
    // console.log(isActive);
    setWatchNum(watchNum + 1);
  };

  // 좌석 버튼 시도 2)
  const [seatButton, setSeatButton] = useState<IMovie[]>([
    { id: 0, color: "red" },
    { id: 1, color: "blue" },
  ]);

  const [currentSeatBtn, setCurrentSeatBtn] = useState<string>("");

  const onSelectSeat = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectColor = e.currentTarget;
    if (selectColor.style.backgroundColor != "#9bb37f") {
      selectColor.style.backgroundColor = "#9bb37f";
      setWatchNum((prev) => prev + 1);
    } else {
      selectColor.style.backgroundColor = "#ffffff";
      setWatchNum((prev) => prev - 1);
    }
  };

  // 선택된 좌석의 수 ?
  // const onSelectSeat = (e: React.MouseEvent<HTMLButtonElement>) => { };

  // const onSelectSeat = () => {
  //   setWatchNum((prev) => prev + 1);
  // };

  // const switchState = () => {
  //   setSwitchSeat(!switchSeat);
  //   {switchSeat === true?
  // };

  // router query 사용
  const router = useRouter();

  // 영화 선택될 때 가격, 몇 명, 영화제목 변경되야 함
  // 영화 제목과 선택좌석 하는 법 모르겠음

  // 가격 변경 value는 하나밖에 안되서 먼가 음 .
  // 영화가 선택될 때마다 가격과 제목이 그 영화의 것으로 바꾸게
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPrice(Number(e.target.value));

    if (e.target.value === "1000") {
      setMovieName("크루엘라");
    }
    if (e.target.value === "2000") {
      setMovieName("베일리 어게인");
    }
    if (e.target.value === "3000") {
      setMovieName("이프 온리");
    }
    if (e.target.value === "4000") {
      setMovieName("나는 내일 어제의 너와 만난다");
    }
    if (e.target.value === "5000") {
      setMovieName("인터스텔라");
    }
    if (e.target.value === "6000") {
      setMovieName("부산행");
    }
    // 인터페이스를 만들어서 해볼려 했는데 option 태그에는 value 속성 하나만 들어갈 수 있어서
    // 할당을 하는 방법이 이것밖에 모르겠음
  };

  // useEffect 사용해서 예매자 수* 가격으로 총 가격 구함
  useEffect(() => {
    const actualNum = watchNum;

    setSumPrice(price * actualNum);
  }, [price, watchNum]);

  // 결제확인 눌렀을 때 Purchase에 전달할 쿼리
  const onClickPurChase = () => {
    if (watchNum <= 0) {
      alert("관객이 없어용~");
      return;
    }
    router.push({
      pathname: "/Purchase",
      query: { watchNum: watchNum, price: sumPrice, movieName: movieName },
    });
  };

  return (
    <StyledDiv>
      <div>
        <div>Choice Movie:</div>
        <select value={price} onChange={onSelectChange}>
          <option value="1000">크루엘라</option>
          <option value="2000">베일리 어게인</option>
          <option value="3000">이프 온리</option>
          <option value="4000">나는 내일 어제의 너와 만난다</option>
          <option value="5000">인터스텔라</option>
          <option value="6000">부산행</option>
        </select>
      </div>
      <div>
        <p>영화 가격 {price}원</p>
      </div>

      <StyledSelectSeats>
        <StyledScreen></StyledScreen>

        <StyledSeats>
          <StyledSelectSeat
            onClick={onSelectSeat}
            // onClick={() => {
            //   setIsActive((prev) => !prev);
            // }}
            // background-color={isActive ? INITCOLOR : "red"}
          >
            1
          </StyledSelectSeat>
          <StyledSelectSeat onClick={onSelectSeat}>2</StyledSelectSeat>
          <StyledOccupiedSeat>3</StyledOccupiedSeat>
          <StyledSelectSeat onClick={onSelectSeat}>4</StyledSelectSeat>
          <StyledSelectSeat onClick={onSelectSeat}>5</StyledSelectSeat>
          <StyledSelectSeat onClick={onSelectSeat}>6</StyledSelectSeat>
        </StyledSeats>
        <StyledSeats>
          <StyledSelectSeat onClick={onSelectSeat}>7</StyledSelectSeat>
          <StyledSelectSeat onClick={onSelectSeat}>8</StyledSelectSeat>
          <StyledSelectSeat onClick={onSelectSeat}>9</StyledSelectSeat>
          <StyledSelectSeat onClick={onSelectSeat}>10</StyledSelectSeat>
          <StyledOccupiedSeat>11</StyledOccupiedSeat>
          <StyledSelectSeat onClick={onSelectSeat}>12</StyledSelectSeat>
        </StyledSeats>
        <StyledSeats>
          <StyledSelectSeat onClick={onSelectSeat}>13</StyledSelectSeat>
          <StyledOccupiedSeat>14</StyledOccupiedSeat>
          <StyledSelectSeat onClick={onSelectSeat}>15</StyledSelectSeat>
          <StyledOccupiedSeat>16</StyledOccupiedSeat>
          <StyledSelectSeat onClick={onSelectSeat}>17</StyledSelectSeat>
          <StyledSelectSeat onClick={onSelectSeat}>18</StyledSelectSeat>
        </StyledSeats>
        <StyledSeats>
          <StyledOccupiedSeat>19</StyledOccupiedSeat>
          <StyledSelectSeat onClick={onSelectSeat}>20</StyledSelectSeat>
          <StyledSelectSeat onClick={onSelectSeat}>21</StyledSelectSeat>
          <StyledSelectSeat onClick={onSelectSeat}>22</StyledSelectSeat>
          <StyledOccupiedSeat>23</StyledOccupiedSeat>
          <StyledOccupiedSeat>24</StyledOccupiedSeat>
        </StyledSeats>
      </StyledSelectSeats>
      <p>
        {watchNum}개 좌석, 가격은 {sumPrice}원 입니다.
      </p>
      <StyledPayBtn onClick={onClickPurChase}>결제하기</StyledPayBtn>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
  gap: 20px;
`;

const StyledSelectSeats = styled.div`
  width: 1000px;
  height: 600px;
  background-color: #ccd8bd;
  margin: 0 auto;
  margin-top: 30px;
`;

const StyledScreen = styled.h1`
  width: 300px;
  height: 100px;
  background-color: white;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 25px;
`;

const StyledSeats = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const StyledSelectSeat = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    transform: translateY(-3px);
    transition: all 0.3s;
  }
`;
const StyledOccupiedSeat = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #bfcfbc;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    transform: translateY(-3px);
    transition: all 0.3s;
  }
`;

const StyledPayBtn = styled.button`
  background-color: white;
  width: 100px;
  padding: 10px 20px;
  margin: 0 auto;
  border-radius: 25px;
  :hover {
    cursor: pointer;
    transform: translateY(-2px);
    background: #ecf8ea;
    transition: all 0.3s;
  }
`;
