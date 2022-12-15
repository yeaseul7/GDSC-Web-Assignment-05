import MovieList from "../components/MovieList"
import Image from "next/image"
import styled from "styled-components"
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <MovieList/>
      <YemeBtn>
        <Link href={"/Booking"} style={{textDecoration:'none', color:'white',padding:'13px'}}>예매하기</Link>
      </YemeBtn>
    </main>
  )
}

const YemeBtn = styled.div`
width: 136px;
padding: 12px 0 14px;
font-size: 16px;
font-weight: 500;

background: linear-gradient(to left, rgb(255, 115, 86), rgb(251, 67, 87));
box-shadow: 1px 3px 6px 0 rgb(0 0 0 / 30%);
border-radius: 25px;
color: white;
text-align: center;

//우측 하단 고정
position: fixed;
bottom: 20px;
right: 20px;
`;