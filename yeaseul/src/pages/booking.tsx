import Link from "next/link";
import styled from "styled-components";
import { MdChair } from "react-icons/md";
import { useState } from "react";
import GlobalStyle from "../components/GlobalStyle";
import Image from "next/image";

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

// const alphabetList = ["A","B","C","D","E","F","G","H"];
// 65~72
const alphabetList = Array.from({ length: 8 }, (__, i) =>
  String.fromCharCode(i + 65)
);

export default function Booking() {
  const [movie, setMovie] = useState(bookingMovieList);
  const [movieImg, setMovieImg] = useState(bookingMovieList[0].imageUrl);
  const [childNum, setChildNum] = useState(0);
  const [adultNum, setAdultNum] = useState(0);

  const onChangeMovie = (e: any) => {
    setMovieImg(e.target.value);
  };
  // console.log(movieImg);

  const onClickMinus = (count: number) => {
    if (count < 1) {
      alert("최소인원은 0명입니다.");
      return;
    }
    setChildNum(count - 1);
  }
  //???: 공통 로직은 추출해라

  return (
    <>
      <GlobalStyle />
      <Title>Movie reservation</Title>
      <DivBox>
        <BookingDiv1>
          <Screen></Screen>
          <ChairBox>
            <LineNumber>
              {alphabetList.map((v) => (
                <Number key={v}>{v}</Number>
              ))}
            </LineNumber>
            <SeatTable>
              {Array.from({ length: 2 }, (__, i) => (
                <div key={i}>
                  {Array.from(Array(8)).map((__, j) => (
                    <div key={j}>
                      <Seatbtn onClick={() => {}}>
                        <MdChair size={30} />
                      </Seatbtn>
                    </div>
                  ))}
                </div>
              ))}
            </SeatTable>
            <SeatTable>
              {Array.from({ length: 8 }, (__, i) => (
                <div key={i}>
                  {Array.from(Array(8)).map((__, j) => (
                    <div key={j}>
                      <Seatbtn onClick={() => {}}>
                        <MdChair size={30} />
                      </Seatbtn>
                    </div>
                  ))}
                </div>
              ))}
            </SeatTable>
            <SeatTable>
              {Array.from({ length: 2 }, (__, i) => (
                <div key={i}>
                  {Array.from(Array(8)).map((__, j) => (
                    <div key={j}>
                      <Seatbtn onClick={() => {}}>
                        <MdChair size={30} />
                      </Seatbtn>
                    </div>
                  ))}
                </div>
              ))}
            </SeatTable>

            <LineNumber>
              {alphabetList.map((v) => (
                <Number key={v}>{v}</Number>
              ))}
            </LineNumber>
          </ChairBox>
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
                    }}
                  >
                    +
                  </Personbtn>
                  <Personbtn
                    onClick={() => onClickMinus(childNum)}
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
                    }}
                  >
                    +
                  </Personbtn>
                  <Personbtn
                    onClick={() => onClickMinus(adultNum)}
                  >
                    -
                  </Personbtn>
                </BtnBox>
              </AdultBox>
            </div>
          </PersonBox>
        </BookingDiv2>
      </DivBox>
      <Hr></Hr>
    </>
  );
}
const Seatbtn = styled.button`
  margin: 3px;
  background-color: #292929 ;
  color: #d4d4d4;
  border-radius: 10px;
`;
const ChildBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
`;
const PersonBox = styled.div`
  display: flex;
  gap: 20px;
  font-size: large;
  margin-left: 4rem;
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

const Number = styled.div`
  display: flex;
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

const LineNumber = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  margin-left: -13px;
  font-weight: lighter;
  gap: 28px;
`;

const SeatTable = styled.div`
  display: flex;
`;

const Screen = styled.div`
  width: 50rem;
  height: 5rem;
  background-color: #ececec;
  box-shadow: 0px 0px 24px;
  border-radius: 22px;
  margin: 30px auto;
`;
const ChairBox = styled.div`
  display: flex;
  gap: 1.9rem;
  justify-content: center;
  margin: 4.9rem 9.5rem;

  border-left: 2px solid gray;
  border-right: 2px solid gray;
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
  height: 40rem;
`;
const BookingDiv2 = styled.div`
  background-color: #292929;
  border-radius: 20px;
  width: 25rem;
  height: 40rem;
`;
