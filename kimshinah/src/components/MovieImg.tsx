import styled from "styled-components";
import Image from "next/image";
import goldenegg from "../../public/images/eggGoldenegggreat.png";

interface Props {
  myNum: number;
  title: string;
  source: string;
}
const MovieImg = ({ myNum, title, source }: Props) => {
  return (
    <ImgTextContainer>
      <ImgContainer>
        <div className="movieaward">{myNum}</div>
        <Image src={source} alt="영화사진" width={100} height={100} />
      </ImgContainer>
      <TextContainer>
        <div className="movieTitle">{title}</div>
        <div className="movieTitleDetail">
          <div className="movieTitleDetailreservationrate">
            <Image src={goldenegg} alt="goldenegg" />
            <div>97%</div>
          </div>
          <div className="reservationrate">예매율 18.5%</div>
        </div>
      </TextContainer>
    </ImgTextContainer>
  );
};
export default MovieImg;
//클래스 네임에 카멜케이스를 써도 되나?
const ImgTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 8em;
  margin-right: 1em;
`; //이미지랑 글자 같이 컨테이너

const ImgContainer = styled.div`
  position: relative;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.09) 35%,
      rgba(0, 0, 0, 0.85)
    );
    border-radius: 0.3em;
  }
  .movieaward {
    position: absolute;
    top: 157px;
    left: 10px;
    color: white;
    font-size: 2.2em;
    font-weight: 700;
    height: fit-content;
    font-style: italic;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.3em;
  }
`; //이미지만 컨테이너

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .movieTitle {
    font-weight: 700;
    margin-top: 0.5em;
  }
  .movieTitleDetail {
    display: flex;
    font-size: 0.8em;
    height: 1em;
    display: flex;
    margin-top: 0.5em;

    img {
      width: 100%;
      height: 100%;
    }

    .movieTitleDetailreservationrate {
      display: flex;
    }
  }

  .reservationrate {
    margin-left: 1em;
  }
`;
