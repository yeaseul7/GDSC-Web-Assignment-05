import { useRouter } from "next/router";
import styled from "styled-components";

export default function Purchase() {
  const router = useRouter();

  return (
    <StyledDiv>
      <div>
        <StyledP>
          <StyledSpan>
            영화: {router.query.name}
            <br />
          </StyledSpan>
          <br />
          인원: {router.query.number}명, 결제 금액: {router.query.result}원
          <br />
          <p>감사합니다!</p>
        </StyledP>
      </div>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  padding: 0;
  margin: 0;
`;

const StyledP = styled.p`
  color: white;
  text-align: center;
`;

const StyledSpan = styled.span`
  font-size: 40px;
`;
