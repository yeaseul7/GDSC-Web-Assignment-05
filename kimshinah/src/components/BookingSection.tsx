import styled from "styled-components";
import { useState, ChangeEvent, useEffect } from "react";
import Seating from "../components/Seating";
import SeatingOccupied from "../components/SeatingOccupied";
import Router from "next/router";

const BookingSection = () => {
  //any가 왜있어야 하는걸까...
  const seatingArray: any = [];
  const seatingOccupied = true;
  const seatingNone = false;

  //
  const [seatingCount, setSeatingCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [movieNumber, setmovieNumber] = useState(3);
  const [movieName, setmovieName] = useState("엔시티 드림 더 무비");

  //숫자 10 이상으로 랜덤을 넣진 않을 것.
  const seatingOccupiedConst = [23, 24, 26, 32, 33, 36, 37, 38, 45, 46, 51, 53];

  const Movies = [
    { name: "탄생", price: 1 },
    { name: "올빼미", price: 2 },
    { name: "엔시티 드림 더무비", price: 3 },
    { name: "2022 카타르 월드컵", price: 4 },
    { name: "압꾸정", price: 5 },
  ];

  //예외 처리를 꼭 try catch로 해야 하나?
  const SendQuery = () => {
    if (seatingCount > 0) {
      Router.push({
        pathname: "/purchase",
        query: {
          movieNameE: movieName,
          moviePeople: seatingCount,
          resultprice: price,
        },
      });
    } else {
      alert("좌석을 선택해주세요.");
    }
  };

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setmovieNumber(Number(e.target.value));
    console.log(Number(e.target.value));
    setmovieName(Movies[Number(e.target.value) - 1].name);
    console.log(movieNumber);
    //그 전이 올빼미였다면 올빼미 번호가 뜨는 식으로  그 이전께 저장 됨ㅋ
  };
  //일단 배열을 0으로 초기화
  for (let i = 0; i < 56; i++) {
    seatingArray.push({ number: i, seatingStatus: seatingNone });
  }
  //occupied 좌석 설정
  seatingOccupiedConst.forEach((element) => {
    seatingArray[element].seatingStatus = seatingOccupied;
  });
  useEffect(() => {
    setPrice(movieNumber * seatingCount);
  }, [seatingCount]);

  //map함수에 '=>'이게 인식이 안되었음. 근데 갑자기 { } 중괄호를 넣으니까 갑자기 잘됨 왜지?
  return (
    <BookingMainSection>
      <select value={movieNumber} onChange={onSelectChange}>
        <option value={3}>엔시티 드림 더 무비,3원</option>
        <option value={2}>올빼미,2원</option>
        <option value={5}>압꾸정,5원</option>
        <option value={4}>2022 카타르 월드컵,4원</option>
        <option value={1}>탄생,1원</option>
      </select>

      <BookingGridContainer>
        {seatingArray.map((element: any, index: any) =>
          element.seatingStatus ? (
            <SeatingOccupied key={index} />
          ) : (
            <Seating
              key={index}
              setSeatingCount={setSeatingCount}
              seatingArray={seatingArray[index].seatingStatus}
            />
          )
        )}
      </BookingGridContainer>
      <div>
        {seatingCount}개 좌석을 선택했으며 가격은 {movieNumber * seatingCount}원
        입니다.
      </div>

      <button onClick={SendQuery}>구매하기</button>
    </BookingMainSection>
  );
};
export default BookingSection;

const BookingMainSection = styled.article`
  width: 100%;
  height: 70vh;
  background: #f2f0e5;
  border: 0.2em solid #e0dcc6;
`;

const BookingGridContainer = styled.div`
  width: 20em;
  height: 100%;
  margin: auto;
  padding: 2em 0em;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  align-items: center;
`;
