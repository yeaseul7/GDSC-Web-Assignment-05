import styled from "styled-components";
import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

export default function ReservationModal({
  setModalBox,
  adultNum,
  childNum,
  price,
}: any) {
  return (
    <>
      <ReservationBox className="reservation">
        <ModalBox>
          <BoxTop>
            <ExitBtn
              onClick={() => {
                setModalBox(false);
              }}
            >
              <MdOutlineCancel size={30} />
            </ExitBtn>
          </BoxTop>
          <BoxInner>
            <ReservationH1>Reservation</ReservationH1>
            <ReservationP>청소년 {childNum}명</ReservationP>
            <ReservationP>성인 {adultNum}명</ReservationP>
            <PriceBox>
              <ReservationPrice>총 {price}원</ReservationPrice>
              <PriceBtn
                onClick={() => {
                  setModalBox(false);
                  alert("예약 완료되었습니다.");
                }}
              >
                예약 확인
              </PriceBtn>
            </PriceBox>
          </BoxInner>
        </ModalBox>
      </ReservationBox>
    </>
  );
}
const PriceBtn = styled.button`
  background-color: red;
  color: white;
  font-size: 20px;
  width: 7rem;
  height: 3rem;
  font-family: monospace;
`;

const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ReservationPrice = styled.p`
  font-size: 25px;
  margin: 10px;
  border-bottom: 2px solid red;
  width: 15rem;
`;

const ReservationP = styled.p`
  font-size: 15px;
  margin: 10px;
  font-family: monospace;
`;

const ReservationH1 = styled.h1`
  font-family: serif;
  border-bottom: 2px solid red;
  margin-top: 4px;
  width: 11rem;
`;
const BoxInner = styled.div`
  padding: 1rem 3rem;
`;
const ExitBtn = styled.div``;
const BoxTop = styled.div`
  height: 2rem;
  background-color: red;
  padding: 0px;
  display: flex;
  justify-content: end;
  padding: 5px;
`;

const ModalBox = styled.div`
  background-color: #2f2f2f;
  width: 30rem;
  height: 15rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 0px 25px black;
`;

const ReservationBox = styled.div`
  color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;
