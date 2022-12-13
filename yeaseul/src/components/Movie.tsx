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
    summary:"물이 끓는 주전자 소리, 창문 여는 소리, 놀이터 아이들의 웃음 소리… 잠시 후, 거대한 굉음과 함께 단독 주택이 폭발했다는 뉴스 속보가 전해진다. 그리고, 뉴스를 지켜보던 전직 해군 부함장(김래원)에게 걸려온 전화 “소음이 커지면 터집니다. 사상 최대의 도심 폭탄 테러를 막기 위해 모든 비밀을 손에 쥔 폭탄 설계자를 찾아야만 하는데… 도심 한복판에서 벌어지는 사운드 테러 액션 오늘 반드시 이 폭발을 막아야만 한다!"
  },
  {
    title: "동감",
    imageUrl: "/동감.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=X8b3KvxybA4",
    summary:"1999년, '용'은 첫눈에 반하게 된 '한솔'을 사로잡기 위해 친구에게 HAM 무전기를 빌린다. 2022년, ‘무늬’는 인터뷰 과제를 위해 오래된 HAM 무전기를 작동시킨다. '씨큐... 씨큐... 제 목소리 들리세요?' 개기 월식이 일어난 날, 시간을 뛰어넘어 기적처럼 연결된 ‘용’과 ‘무늬’는 서로의 사랑과 우정을 이야기하며 특별한 감정을 쌓아가는데... 1999 - 2022 마음을 수신합니다."
  },
  {
    title: "에브리씽",
    imageUrl: "/에브리씽.webp",
    movieUrl: "https://www.youtube.com/watch?v=mWEEh9AxzEM",
    summary:"미국에 이민 와 힘겹게 세탁소를 운영하던 에블린은 세무당국의 조사에 시달리던 어느 날 남편의 이혼 요구와 삐딱하게 구는 딸로 인해 대혼란에 빠진다. 그 순간 에블린은 멀티버스 안에서 수천, 수만의 자신이 세상을 살아가고 있다는 사실을 알게 되고, 그 모든 능력을 빌려와 위기의 세상과 가족을 구해야 하는 운명에 처한다."
  },
  {
    title: "올빼미",
    imageUrl: "/올빼미.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=eRX5_KUyx7c",
    summary:"맹인이지만 뛰어난 침술 실력을 지닌 ‘경수’는 어의 ‘이형익’에게 그 재주를 인정받아 궁으로 들어간다. 그 무렵, 청에 인질로 끌려갔던 ‘소현세자’가 8년 만에 귀국하고, ‘인조’는 아들을 향한 반가움도 잠시 정체 모를 불안감에 휩싸인다. 아들의 죽음 후 ‘인조’의 불안감은 광기로 변하여 폭주하기 시작하고 세자의 죽음을 목격한 ‘경수’로 인해 관련된 인물들의 민낯이 서서히 드러나게 되는데..."
  },
  {
    title: "자백",
    imageUrl: "/자백.jpeg",
    movieUrl:
      "https://www.youtube.com/results?search_query=%EC%9E%90%EB%B0%B1+%EC%98%88%EA%B3%A0%ED%8E%B8",
      summary:"불륜 사실을 폭로하겠다는 협박을 받고 향한 호텔에서 의문의 습격을 당한 유민호(소지섭). 정신을 차려보니 함께 있던 김세희(나나)는 죽어있고, 범인은 흔적도 없이 사라졌다. 하루아침에 성공한 사업가에서 밀실 살인 사건의 유일한 용의자로 누명을 쓴 유민호는 무죄를 입증하기 위해 승률 100%의 변호사 양신애(김윤진)를 찾는다. 사건의 조각들이 맞춰지며 유민호가 감추고 있던 또 다른 사건이 모습을 드러내게 되는데…"
  },
  {
    title: "짱구",
    imageUrl: "/짱구.png",
    movieUrl: "https://www.youtube.com/watch?v=qAPdFL_Z1ck",
    summary:"명문 엘리트 양성학교에 체험 입학하게 된 짱구와 친구들! 좋은 성적을 내서 학교에 정식 입학하고 싶은 철수와 장난만 치려는 짱구는 크게 싸우게 된다. 그러던 중 학교에 도는 괴소문의 존재 ‘흡덩귀’에게 철수가 엉덩이를 물린 채 발견된다. ‘흡덩귀’에게 엉덩이를 물리면 엘리트 학생도 모지리로 변하게 되는데…. 범인은 과연 누구? 짱구는 사건을 해결하고 철수와의 우정을 지킬 수 있을까?!"
  },
  {
    title: "폴",
    imageUrl: "/폴.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=jOPihnkCNmU",
    summary:"지구 생활 60년, 음주가무 돋는 어른용 ET가 온다! 4월, 지상 최대의 SF 코미디 지구 상륙! 외계인과 SF를 좋아하는 절친한 괴짜들 그램과 클라이브는 SF 코믹콘 행사에 참여하기 위해 미국 여행길에 오른다. '폴'을 이용해서 한 몫을 챙기려는 이들로부터 '폴'을 돕기 시작한 두 남자. 이제 쫓고 쫓기는 사상 최대의 글로벌 추격전이 시작된다!"
  },
  {
    title: "압꾸정",
    imageUrl: "/압꾸정.jpeg",
    movieUrl: "https://www.youtube.com/watch?v=I03P8Ec6lfg",
    summary:"샘솟는 사업 아이디어와 타고난 말빨의 압구정 토박이 ‘대국’(마동석)은 한때 잘나가던 실력 TOP 성형외과 의사 ‘지우’(정경호)를 만나게 된다. 재기를 꿈꾸는 그의 욕심과 잠재력을 한눈에 알아본 ‘대국’은 일생일대의 사업 수완을 발휘할 때가 왔음을 본능적으로 직감한다. ‘대국’은 인맥을 한데 모아 압구정을 대표하는 성형외과를 넘어, 아시아를 대표하는 뷰.티.도.시.를 꿈꾸는데…"
  },
];

const SubIntro = ({ setSubBox, v }: any) => {
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
const SubH1 = styled.h1`
  margin-top: 5px;
  margin-bottom: 5px;
`

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
