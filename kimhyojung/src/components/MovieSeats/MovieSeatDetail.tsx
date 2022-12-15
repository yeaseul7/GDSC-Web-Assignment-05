import styled from 'styled-components';

const StyledmoviepossibleSeat = styled.span`
  background-color: #b1b1b1;
  width: 15px;
  height: 15px;
`;
const StyledmovienotpossibleSeat = styled(StyledmoviepossibleSeat)`
  background-color: red;
`;

const StylemoviecurrentclickSeat = styled(StyledmoviepossibleSeat)`
  background-color: #50bcdf;
`;

const StyledbuttonDetail = styled.div`
  display: flex;
  font-size: small;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 10px auto;
  gap: 5px;
`;
export default function MovieSeatdetail() {
  return (
    <>
      <StyledbuttonDetail>
        <span>선택 불가능좌석</span>
        <StyledmovienotpossibleSeat />
        <span>선택 가능좌석</span>
        <StyledmoviepossibleSeat />
        <span>현재 선책좌석</span>
        <StylemoviecurrentclickSeat />
      </StyledbuttonDetail>
    </>
  );
}
