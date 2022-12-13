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
    summary: "사채업자에게 고용된 일두는 채무자의 딸 윤서를 윤락가에 팔아 넘기기 위해 1번국도를 따라 달린다. 자신의 운명을 체념한 듯한 윤서는 저항없이 일두를 따라 나선다. 더 이상 갈 수 없는 끊어진 길에서 만난 미스터리 남자 ‘유씨’. 1번국도 그 길을 따라 세 사람은 여정을 함께한다. 그런데 시간이 지날수록 일두는 범상치 않은 윤서를 내버려두고 갈 수 없는 마음이 커져가는데… 떠날 곳도 돌아갈 곳도 가진 것도 없는 자들의 여정이 시작된다!"
  },
  {
    title: "견왕",
    imageUrl: "/견왕.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=SbZoLqpYPzI",
    summary:"무로마치의 교토, 사루가쿠(무로마치 시대에 성행한 일본 전통 예능)의 일원으로 태어난 남들과는 다른 모습을 한 아이, ‘견왕’. 주위 사람들은 그를 멀리했고 그의 얼굴은 표주박 가면으로 가려졌다. 그러던 어느 날, 견왕은 타이라 가문의 저주로 장님이 된 비파법사 소년, ‘토모나’를 만나게 된다. 한 순간에 펼쳐지는 두 사람만의 호흡, 두 사람만의 세계. 정상에 도달한 두 사람을 기다리고 있는 것은?"
  },
  {
    title: "마이선",
    imageUrl: "/마이선.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=uxTOxh_edkU",
    summary:"작가로서의 삶을 포기한 채 선천적 지체장애를 가진 아들 현재를 돌보고 있는 민석. 소년에서 성인이 되어가는 현재가 장애인 활동지원사인 기철과 독립을 꿈꾸며 민석과 갈등을 빚게 된다. 그러던 어느 날 예기치 못한 사고로 민석의 몸에 이상이 생긴 것을 알게 되고, 현재와 가족들의 일상이 변하게 되는데… “아빠는 점점 죽어가고 있어…” 보통의 평범한 일상이 힘든 모든 이들을 위한 영화가 온다!"
  },
  {
    title: "보디가드",
    imageUrl: "/보디가드.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=kmcZXxarkp0",
    summary:"“절대 그녀에게서 눈을 떼지 말 것” “절대 경호를 풀지 말 것” “절대 사랑에 빠지지 말 것” 전직 대통령을 경호했던 보디가드(케빈 코스트너)와 세계적인 톱스타 여가수(휘트니 휴스턴)의 이뤄질 수 없는 운명적인 사랑을 그린 모두의 인생 로맨스"
  },
  {
    title: "스트레인지",
    imageUrl: "/스트레인지.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=jsfLsJTUIMU",
    summary:"전설적인 탐험가 가문 ‘클레이드’ 패밀리의 ‘서처 클레이드’는 아내 ‘메리디언’, 아들 ‘이든’과 함께 농장을 운영하며 평화로운 일상을 살고 있다. 어느 날, 대통령 ‘칼리스토’가 찾아와 위험에 빠진 아발로니아를 위해 도움을 요청하고 ‘서처’는 내키지 않지만 어쩔 수 없이 가족들과 모험에 나서게 된다. 서로 너무 다른 개성 강한 클레이드 패밀리는 누구도 본 적 없고, 가본 적 없는 신비롭고 경이로운 세계에서 무사히 집으로 돌아갈 수 있을까?"
  },
  {
    title: "스페이스",
    imageUrl: "/스페이스.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=W8owRJMjJp8",
    summary:"평화로운 우주 여행을 마치고 지구로 돌아가던 ‘윌리’는 소행성 충돌로 미지의 행성에 불시착한다. 호기심 많은 '윌리'는 구조대가 올 때까지 만능 로봇 ‘버크’와 사랑스러운 새 친구 ‘플래시’와 함께 신나는 탐험을 시작하는데… 과연, ‘윌리’와 친구들은 생존 미션에 성공해 가족들을 다시 만날 수 있을까?"
  },
  {
    title: "크리스마스캐럴",
    imageUrl: "/크리스마스캐럴.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=tWZc1z_wiCs",
    summary:"크리스마스 아침, 쌍둥이 동생 ‘월우’가 죽은 채로 발견된다. 단순 사고로 사건이 종결되자, 형 ‘일우’는 복수를 결심하고 ‘월우’와의 마지막 통화에서 들렸던 목소리를 찾아 스스로 소년원에 들어간다. 그곳에서 동생을 돌봐주던 상담교사 ‘조순우’의 도움을 받으며 비밀을 숨기고 있는 ‘손환’과 자신을 없애려는 ‘문자훈’, 그리고 무자비한 힘으로 군림하는 교정교사 ‘한희상’까지 폭력에 맞서 목숨을 건 싸움을 계획하는데…"
  },
  {
    title: "튜브펫",
    imageUrl: "/튜브펫.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=Mwews2JwekY",
    summary:"굴지의 천연 피혁 기업 후계자인 ‘반석’ 이질적이게도 그는 동물 보호 벤처 기업의 대표다. 집으로 돌아와 가업을 이으라는 아버지, 죽어도 동물 가죽은 못 팔겠다는 아들! 결국 ‘반대길’(김진근) 회장은 아들의 기업을 무너트리기로 결심하고… 강아지 ‘라오뜨’와 고양이 ‘춘자’는 ‘반석’을 도와 그의 회사를 지켜낼 수 있을까? 아, 그리고 사랑도!"
  },
];

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
      <MovieBoard>
        {commingList.map((v) => {
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

const SubH1 = styled.h1`
  margin-top: 5px;
  margin-bottom: 5px;
`
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
