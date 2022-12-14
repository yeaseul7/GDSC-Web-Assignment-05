import styled from "styled-components";

const MiniHeader = () => {
  return <MiniBookingHeader>인원 / 좌석</MiniBookingHeader>;
};
export default MiniHeader;

const MiniBookingHeader = styled.header`
  width: 70vw; //이 길이를 퍼센테이지로 쓰면 관례에 안맞나?
  height: 2em;
  background: #303030;
  margin: 0 auto;
  color: #b4b4b4;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;
