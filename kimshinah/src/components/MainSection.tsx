import styled from "styled-components";
import MovieImg from "./MovieImg";
import { useRouter } from "next/router";

const MainSection = () => {
  //useRouter
  const router = useRouter();
  return (
    <Section>
      <div className="moviechart">무비차트</div>
      <SectionMovieImg>
        <MovieImg
          myNum={1}
          title="엔시티 드림 더 무비"
          source="/images/nctimg.jpg"
        />
        <MovieImg myNum={2} title="올빼미" source="/images/movie2.jpg" />
        <MovieImg myNum={3} title="압꾸정" source="/images/movie3.jpg" />
        <MovieImg
          myNum={4}
          title="2022 카타르 월드컵"
          source="/images/liveatcgv.jpg"
        />
        <MovieImg myNum={5} title="탄생" source="/images/movie1.jpg" />
      </SectionMovieImg>

      <button
        onClick={() => {
          router.push("/booking");
        }}
      >
        예매
      </button>
    </Section>
  );
};
export default MainSection;

const Section = styled.section`
  margin: 6em auto;
  width: fit-content;
  //줄어들면 margin값이 자동으로 같이 줄어들도록 만들게 양 옆에 margin값을 주고 auto로 적용하였음.
  .moviechart {
    font-size: 1.4em;
    font-weight: 800;
  }
`;

const SectionMovieImg = styled.div`
  display: flex;
  margin-top: 0.5em;
`; //여기서 표기법을 이렇게 써도 되는지? BEM 방법론
