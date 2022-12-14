import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

interface IMovie {
  width?: number;
  height?: number;
  mSrc1?: string;
  mSrc2?: string;
  mSrc3?: string;
  mSrc4?: string;
  mSrc5?: string;
  mSrc6?: string;
  mTitle1?: string;
  mTitle2?: string;
  mTitle3?: string;
  mTitle4?: string;
  mTitle5?: string;
  mTitle6?: string;
  title?: string;
  num?: string;
  reserve?: string;
  radius?: string;
  margin?: string;
}

const Movie = ({
  width = 180,
  height = 260,
  mSrc1 = "/img/cruella.jpg",
  mSrc2 = "/img/baley.jpg",
  mSrc3 = "/img/ifonly.jpg",
  mSrc4 = "/img/tommorow.jpg",
  mSrc5 = "/img/inter.jpg",
  mSrc6 = "/img/busan.jpg",
  mTitle1 = "크루엘라",
  mTitle2 = "베일리 어게인",
  mTitle3 = "이프 온리",
  mTitle4 = "나는 내일 어제의 너와 만난다",
  mTitle5 = "인터스텔라",
  mTitle6 = "부산행",
  radius = "8px",
  reserve = "예매하기",
}: IMovie) => {
  const [isHover, setIsHover] = useState(false);
  const onMouseEnter = () => setIsHover(true);
  const onMouseLeave = () => setIsHover(false);
  return (
    <>
      <StyledImgBox>
        <StyledLink href="/Booking">
          <StyledWrapperImg radius={radius}>
            <Image width={width} height={height} src={mSrc1} alt={mTitle1} />
            {/* <StyledDiv> */}
            <StyledP>예매하기</StyledP>
            {/* </StyledDiv> */}
          </StyledWrapperImg>
        </StyledLink>

        <StyledLink href="/Booking">
          <StyledWrapperImg radius={radius}>
            <Image width={width} height={height} src={mSrc2} alt={mTitle2} />
            <StyledP>예매하기</StyledP>
          </StyledWrapperImg>
        </StyledLink>

        <StyledLink href="/Booking">
          <StyledWrapperImg radius={radius}>
            <Image width={width} height={height} src={mSrc3} alt={mTitle3} />
            <StyledP>예매하기</StyledP>
          </StyledWrapperImg>
        </StyledLink>
      </StyledImgBox>
      <StyledHr></StyledHr>

      <StyledImgBox>
        <StyledLink href="/Booking">
          <StyledWrapperImg radius={radius}>
            <Image width={width} height={height} src={mSrc4} alt={mTitle4} />
            <StyledP>예매하기</StyledP>
          </StyledWrapperImg>
        </StyledLink>

        <StyledLink href="/Booking">
          <StyledWrapperImg radius={radius}>
            <Image width={width} height={height} src={mSrc5} alt={mTitle5} />
            <StyledP>예매하기</StyledP>
          </StyledWrapperImg>
        </StyledLink>

        <StyledLink href="/Booking">
          <StyledWrapperImg radius={radius}>
            <Image width={width} height={height} src={mSrc6} alt={mTitle6} />
            <StyledP>예매하기</StyledP>
          </StyledWrapperImg>
        </StyledLink>
      </StyledImgBox>
    </>
  );
};

interface wrapperImg {
  radius?: string;
}

const StyledWrapperImg = styled.span<wrapperImg>`
  align-items: center;
  img {
    border-radius: ${(props) => props.radius};
  }
  img:hover {
    filter: brightness(60%);
    cursor: pointer;
    transition: all 0.3s;
  }
`;

const StyledImgBox = styled.div`
  width: 800px;
  height: 300px;
  background-color: #ffffff;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
`;

const StyledP = styled.p`
  position: relative;
  bottom: 140px;
  left: 60px;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
`;

const StyledHr = styled.hr`
  width: 800px;
  border: 1px thin black;
  margin: 0 auto;
  margin-top: 40px;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export default Movie;

//   const [watchNumber, setWatchNumber] = useState<number>(1);
//   const [moviePrice, setMoviePrice] = useState<number>(10000);
//   const [sumPrice, setSumPrice] = useState<number>(10000);
