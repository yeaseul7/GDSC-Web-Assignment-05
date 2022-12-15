import styled from "styled-components";
import { useState } from "react";

interface Props {
  setSeatingCount: (seating: number) => void;
  seatingArray: boolean;
}

const Seating = ({ setSeatingCount, seatingArray }: Props) => {
  const [newNumber, setnewNumber] = useState(0);
  //여기가 안된다.. ㅠ 좌석이 true에서 false로 넘어가질 않아ㅠ 올라가질 않음.
  const changeOccupiedStatus = (event: any) => {
    if (newNumber === 0) {
      console.log(seatingArray + "1");
      setnewNumber((prev) => prev + 1);
      event.target.style.backgroundColor = "#7ED0FF";
      //number로 지정했는데도 변경안됨.
      setSeatingCount((prev) => prev + 1);
      console.log(seatingArray + "2");
    } else {
      event.target.style.backgroundColor = "#000000";
      setnewNumber((prev) => prev - 1);
      setSeatingCount((prev) => prev - 1);
      console.log(seatingArray + "3");
    }
  };
  return <SeatingCss onClick={changeOccupiedStatus}></SeatingCss>;
};
export default Seating;

const SeatingCss = styled.div`
  width: 1em;
  height: 1em;
  background: black;
`;
