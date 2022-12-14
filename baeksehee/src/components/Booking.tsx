import { MouseEvent } from "react";
import Router from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";

export default function Booking() {
  const [number, setNumber] = useState<number>(0);
  const [price, setPrice] = useState<number>(10000);
  const [result, setResult] = useState<number>(3);
  const [name, setName] = useState<string>("아바타 2");

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPrice(Number(e.target.value));
    if (e.target.value == "10000") {
      setName("아바타 2");
    } else if (e.target.value == "11000") {
      setName("엔드게임");
    } else if (e.target.value == "12000") {
      setName("노웨이홈");
    } else if (e.target.value == "13000") {
      setName("올빼미");
    } else if (e.target.value == "14000") {
      setName("트와일라잇");
    }
  };

  const onClickSeat = (e: MouseEvent<HTMLButtonElement>) => {
    const selectColor = e.currentTarget;
    if (selectColor.style.backgroundColor != "white") {
      selectColor.style.backgroundColor = "white";
      setNumber(number + 1);
    } else {
      selectColor.style.backgroundColor = "#444451";
      setNumber(number - 1);
    }
  };

  useEffect(() => {
    const actualNumber = number;
    setResult(price * actualNumber);
  }, [price, number]);

  const onClickSelected = () => {
    alert("이미 예약된 좌석입니다.");
  };

  const onClickPurchase = () => {
    if (number <= 0) {
      alert("좌석을 선택하지 않으셨습니다.");
      return;
    }

    Router.push({
      pathname: "/purchase",
      query: { name: name, number: number, result: result },
    });
  };

  return (
    <StyledBox>
      <StyledH1>영화 고르기</StyledH1>
      <StyledSelect value={price} onChange={onSelectChange}>
        <StyledOption value={10000}>아바타 2, 10000원</StyledOption>
        <StyledOption value={11000}>엔드게임, 11000원</StyledOption>
        <StyledOption value={12000}>노웨이홈, 12000원</StyledOption>
        <StyledOption value={13000}>올빼미, 13000원</StyledOption>
        <StyledOption value={14000}>트와일라잇, 14000원</StyledOption>
      </StyledSelect>

      <StyledH2>
        {name} 좌석 선택하기
        <br />
        <br />
        스크린
      </StyledH2>
      <div>
        <div></div>
        <StyledDiv>
          <div>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSelected}>X</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
          </div>
          <div>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSelected}>X</StyledButton>
            <StyledButton onClick={onClickSelected}>X</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
          </div>
          <div>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSelected}>X</StyledButton>
            <StyledButton onClick={onClickSelected}>X</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
          </div>
          <div>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
          </div>
          <div>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
            <StyledButton onClick={onClickSeat}>o</StyledButton>
          </div>
        </StyledDiv>
      </div>

      <StyledH3>
        {number} 명 {result} 원
      </StyledH3>

      <StyledButtonTwo onClick={onClickPurchase}>결제하기</StyledButtonTwo>
    </StyledBox>
  );
}

const StyledBox = styled.div`
  padding: 7px;
`;

const StyledH1 = styled.h1`
  color: white;
`;

const StyledSelect = styled.select`
  background-color: white;
`;

const StyledOption = styled.option`
  background-color: purple;
`;

const StyledH2 = styled.h2`
  text-align: center;
  color: white;
`;

const StyledDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
`;

const StyledButton = styled.button`
  background-color: #444451;
  height: 50px;
  width: 35px;
  margin: 3px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const StyledH3 = styled.h3`
  color: white;
`;

const StyledButtonTwo = styled.button`
  background-color: white;
`;
