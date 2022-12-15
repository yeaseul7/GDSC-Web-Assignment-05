import { useRouter } from "next/router";
import styled from "styled-components";

export default function Purchase() {
  const router = useRouter();
  return (
    <>
      <StyledContainer>
        <p>선택한 영화: {router.query.movieName}</p>
        <p>인원 수: {router.query.watchNum}</p>
        <p>결제할 금액: {router.query.price}</p>
        <div>결제되었습니다.</div>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  width: 1000px;
  height: 200px;
  border: 1px solid black;
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;
`;
