import styled from "styled-components";

const SeatingOccupied = () => {
  const changeOccupiedStatus = () => {
    confirm("이 좌석은 이미 선택된 좌석입니다.");
  };
  return <OccupiedWhite onClick={changeOccupiedStatus}></OccupiedWhite>;
};
export default SeatingOccupied;

const OccupiedWhite = styled.div`
  width: 1em;
  height: 1em;
  background-color: white;
`;
