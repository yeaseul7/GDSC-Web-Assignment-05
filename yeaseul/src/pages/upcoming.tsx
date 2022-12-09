import styled from "styled-components";
import Image from "next/image";
import GlobalStyle from "../components/GlobalStyle";
import { useState } from "react";
import Link from "next/link";

const commingList = [
  {
    title: "1번국도",
    imageUrl: "/1번국도.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=f-AFAdByzFE",
  },
  {
    title: "견왕",
    imageUrl: "/견왕.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=SbZoLqpYPzI",
  },
  {
    title: "마이선",
    imageUrl: "/마이선.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=uxTOxh_edkU",
  },
  {
    title: "보디가드",
    imageUrl: "/보디가드.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=kmcZXxarkp0",
  },
  {
    title: "스트레인지",
    imageUrl: "/스트레인지.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=jsfLsJTUIMU",
  },
  {
    title: "스페이스",
    imageUrl: "/스페이스.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=W8owRJMjJp8",
  },
  {
    title: "크리스마스캐럴",
    imageUrl: "/크리스마스캐럴.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=tWZc1z_wiCs",
  },
  {
    title: "튜브펫",
    imageUrl: "/튜브펫.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=Mwews2JwekY",
  },
];

export default function Upcoming() {
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  return (
    <div>
      <MovieBoard>
        {commingList.map((v) => {
          return (
            <>
              <GlobalStyle />
              <Movieblocks>
                <Image
                  key={v.title}
                  src={v.imageUrl}
                  alt={v.title}
                  width={250}
                  height={350}
                />
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
            </>
          );
        })}
      </MovieBoard>
    </div>
  );
}
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
