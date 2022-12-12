import { useState } from "react";
import { MdChair } from "react-icons/md";
import styled from "styled-components";
import { alphabetList } from "../constants";

const initColor = "#d4d4d4";

const SeatBtnWrap = ({ childNum, adultNum, seatCheck}: any) => {
  const [color, setColor] = useState(true);

  return (
    <Seatbtn
      onClick={() => {
        setColor((prev) => !prev);
        if(seatCheck>1){
          return;
        }
      }}
      color={color ? initColor : "red"}
    >
      <MdChair size={30} />
    </Seatbtn>
  );
};

const ChairBoxes = ({ childNum, adultNum }: any) => {
  const [color, setColor] = useState(true);
  const [seatCheck, setSeatCheck] = useState(0);

  const onMaxCheck = () => {
    if (seatCheck > childNum + adultNum) {
      alert("선택하신 인원을 초과하였습니다.");
    }
    setSeatCheck((prevSeatCheck) => prevSeatCheck + 1);
    console.log(seatCheck);
    
  };

  const onChangeColor = () => {
    setColor(false);
  };

  return (
    <ChairBox>
      <LineNumber>
        {alphabetList.map((v) => (
          <Number key={v}>{v}</Number>
        ))}
      </LineNumber>
      <SeatTable>
        {Array.from({ length: 2 }, (__, i) => (
          <div key={i}>
            {Array.from(Array(8)).map((__, j) => (
              <div key={j}>
                <SeatBtnWrap 
                />
              </div>
            ))}
          </div>
        ))}
      </SeatTable>
      <SeatTable>
        {Array.from({ length: 8 }, (__, i) => (
          <div key={i}>
            {Array.from(Array(8)).map((__, j) => (
              <div key={j}>
                <SeatBtnWrap />
              </div>
            ))}
          </div>
        ))}
      </SeatTable>
      <SeatTable>
        {Array.from({ length: 2 }, (__, i) => (
          <div key={i}>
            {Array.from(Array(8)).map((__, j) => (
              <div key={j}>
                <SeatBtnWrap />
              </div>
            ))}
          </div>
        ))}
      </SeatTable>

      <LineNumber>
        {alphabetList.map((v) => (
          <Number key={v}>{v}</Number>
        ))}
      </LineNumber>
    </ChairBox>
  );
};

const Number = styled.div`
  display: flex;
`;

const ChairBox = styled.div`
  display: flex;
  gap: 1.9rem;
  justify-content: center;
  margin: 4.9rem 11rem;
  padding: 0px 64px;

  border-left: 2px solid gray;
  border-right: 2px solid gray;
`;

const LineNumber = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin-left: -13px;
  font-weight: lighter;
  gap: 20px;
`;

const SeatTable = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Seatbtn = styled.button`
  background-color: #292929;
  color: ${(props) => props.color};
`;

export default ChairBoxes;
