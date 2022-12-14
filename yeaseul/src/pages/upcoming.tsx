import styled from "styled-components";
import Image from "next/image";
import GlobalStyle from "../styles/style";
import { useState } from "react";
import { commingList } from "../constants";


const SubIntro = ({ v, setSubBox }: any) => {
  return (
    <SubMenu onMouseLeave={() => setSubBox(true)}>
      <SubH1>줄거리</SubH1>
      {v.summary}
    </SubMenu>
  );
};

const OnMovieBlock = ({ v }: any) => {
  const [subBox, setSubBox] = useState(true);
  return (
    <Movieblocks>
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

export default function Upcoming() {
  const [subBox, setSubBox] = useState(true);

  return (
    <div>
      <GlobalStyle />
      <MovieBoard>
        {commingList.map((v) => {
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
const SubMenu = styled.div`
  width: 230px;
  height: 330px;
  background-color: #0a0a0aa0;
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
const Movieblocks = styled.div`
  border: 0.1px solid gray;
  padding: 5px;
`;
