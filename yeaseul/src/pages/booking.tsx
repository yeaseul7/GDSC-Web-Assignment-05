import styled from "styled-components";
import { useState } from "react";
import GlobalStyle from "../components/GlobalStyle";
import Image from "next/image";
import ReservationModal from "../components/ReservationModal";
import React from "react";
import ChairBoxes from "../components/ChairBox";

const bookingMovieList = [
  {
    title: "데시벨",
    imageUrl: "/데시벨.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=jGcQXD5EdkQ",
    id: 1,
  },
  {
    title: "동감",
    imageUrl: "/동감.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=X8b3KvxybA4",
    id: 2,
  },
  {
    title: "에브리씽",
    imageUrl: "/에브리씽.webp",
    movieUrl: "https://www.youtube.com/watch?v=mWEEh9AxzEM",
    id: 3,
  },
  {
    title: "올빼미",
    imageUrl: "/올빼미.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=eRX5_KUyx7c",
    id: 4,
  },
  {
    title: "자백",
    imageUrl: "/자백.jpeg",
    movieUrl:
      "https://www.youtube.com/results?search_query=%EC%9E%90%EB%B0%B1+%EC%98%88%EA%B3%A0%ED%8E%B8",
    id: 5,
  },
  {
    title: "짱구",
    imageUrl: "/짱구.png",
    movieUrl: "https://www.youtube.com/watch?v=qAPdFL_Z1ck",
    id: 6,
  },
  {
    title: "폴",
    imageUrl: "/폴.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=jOPihnkCNmU",
    id: 7,
  },
  {
    title: "압꾸정",
    imageUrl: "/압꾸정.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=I03P8Ec6lfg",
    id: 8,
  },
];

export default function Booking() {
  const [movie, setMovie] = useState(bookingMovieList);
  const [movieImg, setMovieImg] = useState(bookingMovieList[0].imageUrl);
  const [childNum, setChildNum] = useState(0);
  const [adultNum, setAdultNum] = useState(0);
  const [modalBox, setModalBox] = useState(false);
  const [price, setPrice] = useState(0);

  const onChangeMovie = (e: any) => {
    setMovieImg(e.target.value);
  };
  // console.log(movieImg);

  const plusChildPrice = (price: number) => {
    setPrice(price + 10000);
  };
  const plusAdultPrice = (price: number) => {
    setPrice(price + 13000);
  };
  const minusChildPrice = (price: number) => {
    if (price >= 0) {
      setPrice(price - 10000);
    }
    setPrice(price);
  };
  const minusAdultPrice = (price: number) => {
    if (price >= 0) {
      setPrice(price - 13000);
    }
    setPrice(price);
  };
  const onClickMinus = (count: number) => {
    if (count < 1) {
      alert("최소인원은 0명입니다.");
      return;
    }
    setChildNum(count - 1);
  };
  //???: 공통 로직은 추출해라

  const onClickMinus1 = (count: number) => {
    if (count < 1) {
      alert("최소인원은 0명입니다.");
      return;
    }
    setAdultNum(count - 1);
  };
  return (
    <>
      <GlobalStyle />
      {modalBox === true ? (
        <ReservationModal
          // setModalBox={setModalBox}  key = value
          // adultNum={adultNum}
          // childNum={childNum}
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
          {...{ setModalBox, adultNum, childNum, price }}
          //js 문법 생각 js에서는 key:value 근데 같으니까 생략
        />
      ) : null}
      <Title>Movie reservation</Title>
      <DivBox>
        <BookingDiv1>
          <Screen></Screen>
          <ChairBoxes />
        </BookingDiv1>
        <BookingDiv2>
          <SubTitle>Movie</SubTitle>
          <MovieArticle>
            <MovieSelect onChange={onChangeMovie} value={movieImg}>
              {bookingMovieList.map((v) => (
                <option value={v.imageUrl} key={v.id}>
                  {v.title}
                </option>
              ))}
            </MovieSelect>
          </MovieArticle>
          <MovieBookingBox>
            <MovieBookingImg>
              <Image src={movieImg} alt={movieImg} width={255} height={320} />
            </MovieBookingImg>
          </MovieBookingBox>
          <PersonBox>
            <p>인원</p>
            <div>
              <ChildBox>
                <MinPersonBoxP>청소년: </MinPersonBoxP>
                <NumBox>{childNum}명</NumBox>
                <BtnBox>
                  <Personbtn
                    onClick={() => {
                      setChildNum(childNum + 1);
                      plusChildPrice(price);
                    }}
                  >
                    +
                  </Personbtn>
                  <Personbtn
                    onClick={() => {
                      onClickMinus(childNum);
                      minusChildPrice(price);
                    }}
                  >
                    -
                  </Personbtn>
                </BtnBox>
              </ChildBox>
              <AdultBox>
                <MinPersonBoxP2>성인: </MinPersonBoxP2>
                <NumBox>{adultNum}명</NumBox>
                <BtnBox>
                  <Personbtn
                    onClick={() => {
                      setAdultNum(adultNum + 1);
                      plusAdultPrice(price);
                    }}
                  >
                    +
                  </Personbtn>
                  <Personbtn
                    onClick={() => {
                      onClickMinus1(adultNum);
                      minusAdultPrice(price);
                    }}
                  >
                    -
                  </Personbtn>
                </BtnBox>
              </AdultBox>
            </div>
          </PersonBox>
          <ReserationBtn
            onClick={() => {
              setModalBox(true);
            }}
          >
            <ReservationP>총 {price}원 예매 하기</ReservationP>
          </ReserationBtn>
        </BookingDiv2>
      </DivBox>
      <Hr></Hr>
    </>
  );
}

const ReserationBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
  margin: 2rem auto;
  height: 3rem;
  width: 18rem;
  border-radius: 5px;
  background-color: red;
  &:hover {
    transition: transform 1s ease;
    background-color: #470000;
  }
`;
const ReservationP = styled.p`
  text-align: center;

`;

const ChildBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: monospace;
`;
const NumBox = styled.div`
  border: 1px solid gray;
  padding: 5px;
  width: 5rem;
`;
const BtnBox = styled.div`
  display: flex;
  gap: 5px;
`;
const Personbtn = styled.button`
  background-color: #5f5f5f;
  color: white;
  border-radius: 5px;
  height: 2rem;
  width: 2rem;
`;

const AdultBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: monospace;
`;
const PersonBox = styled.div`
  display: flex;
  gap: 15px;
  font-size: large;
  margin-left: 4rem;
  height: 6rem;
  margin-top: 1rem;
`;
const MinPersonBoxP = styled.p`
  border-bottom: 2px solid red;
  text-align: center;
`;
const MinPersonBoxP2 = styled.p`
  border-bottom: 2px solid red;
  text-align: center;
  margin-right: 1rem;
`;

const MovieBookingBox = styled.div`
  display: flex;
  justify-content: center;
`;
const MovieBookingImg = styled.div`
  width: 16rem;
  height: 20rem;
  border: 1px solid wheat;
  margin-left: 10px;
  margin-top: 20px;
`;
const MovieArticle = styled.div`
  display: flex;
  justify-content: center;
`;
const MovieSelect = styled.select`
  width: 16rem;
  height: 2rem;
  font-size: large;
  text-align: center;
  border-bottom: 3px solid red;
  background-color: #5f5f5f;
  color: white;
  margin-left: 10px;
  border-radius: 5px;
`;

const Screen = styled.div`
  width: 48rem;
  height: 6rem;
  background-color: #dddddd;
  box-shadow: 0px 0px 24px;
  border-radius: 22px;
  margin: 5rem auto 7rem;
`;

const Hr = styled.div`
  border-top: 0.5px solid #6a6a6a;
  margin-left: 20px;
  margin-right: 20px;
`;

const Title = styled.p`
  font-size: 3rem;
  font-family: serif;
  margin: 2rem 10rem 0rem 6rem;
  text-decoration: underline red 0.1875rem;
`;
const SubTitle = styled.p`
  font-size: 2rem;
  text-align: center;
  font-family: serif;
`;
const DivBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px auto;
`;
const BookingDiv1 = styled.div`
  background-color: #292929;
  border-radius: 20px;
  width: 70rem;
  height: 43rem;
`;
const BookingDiv2 = styled.div`
  background-color: #292929;
  border-radius: 20px;
  width: 25rem;
  height: 43rem;
`;