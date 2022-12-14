import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/style";
import Link from "next/link";
import {movieList} from "../constants"


const SubIntro = ({ setSubBox, v }: any) => {
  return (
    <SubMenu onMouseLeave={() => setSubBox(true)}>
      <h1>줄거리</h1>
      {v.summary}
    </SubMenu>
  );
};

const OnMovieBlock = ({ v }: any) => {
  const [subBox, setSubBox] = useState(true);
  return (
    <Movieblocks>
      <Link href="/purchase">
        <ImageBox>
          {!subBox && <SubIntro {...{ setSubBox, v }} /> }
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
      <GlobalStyle />
      <MovieBoard>
        {movieList.map((v) => {
          return (
            <>
              <OnMovieBlock {...{ v }} />
            </>
          );
        })}
      </MovieBoard>
    </div>
  );
}
const SubH1 = styled.h1`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const ImageBox = styled.div`
  position: relative;
`;
const SubMenu = styled.div`
  width: 230px;
  height: 330px;
  color: white;
  margin-bottom: 5px;
  position: absolute;
  padding: 10px;
  letter-spacing: 2px;
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
