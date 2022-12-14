import { useRouter } from 'next/router';
import styled from 'styled-components';
const StyledPurchaseDiv = styled.article`
  width: 50%;
  background-color: #d3d3d3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 10px;
  border-radius: 2%;
`;

const StyledpurchaseImg = styled.img`
  max-height: 350px;
  width: auto;
  object-fit: contain;
`;
export default function Purchase() {
  const router = useRouter();
  const { totalprice, moviename, totalseat, movieimg } = router.query;

  return (
    <>
      <StyledPurchaseDiv>
        <h2>🙃예매가 완료되었습니다</h2>
        {typeof movieimg === 'string' ? (
          <StyledpurchaseImg src={movieimg} />
        ) : null}
        <section>{totalprice}원</section>
        <section>{moviename}</section>
        <section>좌석 : {totalseat}개</section>
      </StyledPurchaseDiv>
      ;
    </>
  );
}
