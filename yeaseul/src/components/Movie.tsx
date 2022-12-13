import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../components/GlobalStyle";
import Link from "next/link";

const movieList = [
  {
    title: "데시벨",
    imageUrl: "/데시벨.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=jGcQXD5EdkQ",
  },
  {
    title: "동감",
    imageUrl: "/동감.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=X8b3KvxybA4",
  },
  {
    title: "에브리씽",
    imageUrl: "/에브리씽.webp",
    movieUrl: "https://www.youtube.com/watch?v=mWEEh9AxzEM",
  },
  {
    title: "올빼미",
    imageUrl: "/올빼미.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=eRX5_KUyx7c",
  },
  {
    title: "자백",
    imageUrl: "/자백.jpeg",
    movieUrl:
      "https://www.youtube.com/results?search_query=%EC%9E%90%EB%B0%B1+%EC%98%88%EA%B3%A0%ED%8E%B8",
  },
  {
    title: "짱구",
    imageUrl: "/짱구.png",
    movieUrl: "https://www.youtube.com/watch?v=qAPdFL_Z1ck",
  },
  {
    title: "폴",
    imageUrl: "/폴.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=jOPihnkCNmU",
  },
  {
    title: "압꾸정",
    imageUrl: "/압꾸정.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=I03P8Ec6lfg",
  },
];

const SubIntro = ({ setSubBox }: any) => {
  return (
    <SubMenu onMouseLeave={() => setSubBox(true)}>
      줄거리
      <br />
      블라블라블라블라
      <br />아
    </SubMenu>
  );
};

const OnMovieBlock = ({ v }: any) => {
  const [subBox, setSubBox] = useState(true);
  return (
    <Movieblocks>
      <Link href="/booking">
        <ImageBox>
          {!subBox ? <SubIntro {...{ setSubBox, v }} /> : null}
          <Image
            key={v.title}
            src={v.imageUrl}
            alt={v.title}
            width={250}
            height={350}
            onMouseOver={() => setSubBox(false)}
          />
        </ImageBox>
      </Link>
      <div>
        <LikeBtn
          href={v.movieUrl}
          target="_blank"
          onClick={(event) => {
            if (!v.movieUrl) {
              alert("이 영화는 예고편이 존재하지 않습니다.");
              event.preventDefault();
            }
          }}
        >
          미리보기
        </LikeBtn>
      </div>
    </Movieblocks>
  );
};

export default function Movie() {
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  return (
    <div>
      <MovieBoard>
        {movieList.map((v) => {
          return (
            <>
              <GlobalStyle />
              <OnMovieBlock {...{ v }} />
            </>
          );
        })}
      </MovieBoard>
    </div>
  );
}

const ImageBox = styled.div`
  position: relative;
`;
const SubMenu = styled.div`
  width: 250px;
  height: 350px;
  color: white;
  margin-bottom: 5px;
  position: absolute;
  padding: 1rem;
  &:hover {
    transition-duration: 1s;
    transition-property: all;
    background-color: #0a0a0ad0;
  }
`;
const MovieBoard = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 300px;
`;
const LikeBtn = styled.a`
  border: 0.5px solid gray;
  padding: 10px;
  width: 80%;
  margin: auto;
  height: 15px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
  color: white;
  &:hover {
    transform: translateY(-2px);
    transition: transform 0.3s ease;
    background-color: red;
  }
`;
const Movieblocks = styled.div`
  border: 0.1px solid gray;
  padding: 5px;
`;
//jsx에서 js 코드 쓰려면 중괄호를 쓴다~
