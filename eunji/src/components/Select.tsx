import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";

// 좌석 선택을 위한 배열 생성
const selectArray: Array<string> = new Array<string>();

export default function Select() {
    // 사람의 수
    const [person, setPerson] = useState<number>(0);
    // 영화의 가격
    const [price, setPrice] = useState<number>(600);
    // 총 가격
    const [total, setTotal] = useState<number>(3);
    // 영화 이름
    const [name, setName] = useState<string>('Aladin');
    // 영화 이미지
    const [poster, setPoster] = useState<string>('');
    // router query를 위하여 정의
    const router = useRouter();

    // 영화 선택될 때마다 가격, 영화제목 바뀌게 하기
    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPrice(Number(e.target.value));

        // 만약 value가 600, 700, 800이면 setName을 그 값에 해당하는 영화 이름으로 바꿔라.
        if (e.target.value == '600') {
            setName(String('Aladin'));
            setPoster("movie1.jpg");
        }
        if (e.target.value == '700') {
            setName(String('Beauty and the Beast'));
        }
        if (e.target.value == '800') {
            setName(String('범죄도시2'));
        }
    };

    // 선택한 인원만큼 가격 증가
    useEffect(() => {
        setTotal(price * person);
    }, [price, person]);

    // 좌석 선택 가능하게 하기
    const SelectChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        const selectStyle = e.currentTarget;
        const changeSeat = e.currentTarget.innerHTML;

        // 만약 changeSeat이 selectArray에 포함된다면
        if (selectArray.includes(changeSeat)) {
            const indexSeat = selectArray.indexOf(changeSeat);
            // indexSeat를 삭제하고(기본값)
            delete selectArray[indexSeat];
            // 배경색을 변경하고
            selectStyle.style.backgroundColor = "#666";
            // 값을 줄여라
            setPerson(person - 1);
        }
        // 그렇지 않으면
        else {
            // selectArray의 changeSeat을 클릭했을 때
            selectArray.push(changeSeat);
            // 배경색을 변경하고
            selectStyle.style.backgroundColor = "#ad1712";
            // 값을 늘려라
            setPerson(person + 1);
        }
    }

    // 혹시 -값이나 좌석을 선택하지 않았을 시 0으로 리셋
    const onReset = () => {
        setPerson(0);
        setPrice(0);
    }

    // 좌석 선택 후 결제창으로 넘어가기
    const onClickPurchase = () => {
        // 만약 선택을 안 하면
        if (person <= 0) {
            // 해당 알림을 띄우고
            alert('좌석을 선택해 주세요.');
            // 0으로 리셋해 주고
            onReset();
            // 알라딘의 기본값인 600으로 변경해라
            setPrice(600);
            return;
        }
        // 그렇지 않으면(선택을 하면)
        router.push({
            // purchase로 이동하고
            pathname: '/purchase',
            // 해당 값들을 purchase로 넘겨라
            query: { poster: poster, name: name, person: person, price: total },
        });
    };

    return (
        <Container>
            <p>영화를 선택해 주세요.</p>
            <StyledSelect value={price} onChange={onSelectChange}>
                <option value={600}>Aladin(600원)</option>
                <option value={700}>Beauty and the Beast(700원)</option>
                <option value={800}>범죄도시2(800원)</option>
            </StyledSelect>

            <ScreenDiv>screen</ScreenDiv>

            <SeatList>
                <SelectSeat onClick={SelectChange}>1</SelectSeat>
                <AlreadySelectSeat>2</AlreadySelectSeat>
                <SelectSeat onClick={SelectChange}>3</SelectSeat>
                <SelectSeat onClick={SelectChange}>4</SelectSeat>
                <SelectSeat onClick={SelectChange}>5</SelectSeat>
                <SelectSeat onClick={SelectChange}>6</SelectSeat>
            </SeatList>
            <SeatList>
                <SelectSeat onClick={SelectChange}>7</SelectSeat>
                <SelectSeat onClick={SelectChange}>8</SelectSeat>
                <AlreadySelectSeat>9</AlreadySelectSeat>
                <AlreadySelectSeat>10</AlreadySelectSeat>
                <SelectSeat onClick={SelectChange}>11</SelectSeat>
                <SelectSeat onClick={SelectChange}>12</SelectSeat>
            </SeatList>
            <SeatList>
                <SelectSeat onClick={SelectChange}>13</SelectSeat>
                <SelectSeat onClick={SelectChange}>14</SelectSeat>
                <SelectSeat onClick={SelectChange}>15</SelectSeat>
                <SelectSeat onClick={SelectChange}>16</SelectSeat>
                <SelectSeat onClick={SelectChange}>17</SelectSeat>
                <AlreadySelectSeat>18</AlreadySelectSeat>
            </SeatList>
            <SeatList>
                <SelectSeat onClick={SelectChange}>19</SelectSeat>
                <SelectSeat onClick={SelectChange}>20</SelectSeat>
                <SelectSeat onClick={SelectChange}>21</SelectSeat>
                <SelectSeat onClick={SelectChange}>22</SelectSeat>
                <SelectSeat onClick={SelectChange}>23</SelectSeat>
                <SelectSeat onClick={SelectChange}>24</SelectSeat>
            </SeatList>
            <SeatList>
                <SelectSeat onClick={SelectChange}>25</SelectSeat>
                <SelectSeat onClick={SelectChange}>26</SelectSeat>
                <SelectSeat onClick={SelectChange}>27</SelectSeat>
                <AlreadySelectSeat>28</AlreadySelectSeat>
                <SelectSeat onClick={SelectChange}>29</SelectSeat>
                <SelectSeat onClick={SelectChange}>30</SelectSeat>
            </SeatList>

            <SeatState>
                <Occupied />
                <p>: 이미 예매된 좌석</p>
                <Selected />
                <p>: 선택한 좌석</p>
                <Vacate />
                <p>: 예매 가능한 좌석</p>
            </SeatState>

            <ResultAlert>선택하신 인원수는 {person}명, 총 금액은 {total}원입니다.</ResultAlert>

            <PurchaseBtn onClick={onClickPurchase}>결제하기</PurchaseBtn>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

margin: 0 10vw;
padding: 1rem 0;

background-color: #d4d3c9;

border: 1px solid black;
`;

const StyledSelect = styled.select`
all: unset;

padding: 5px 10px;

background-color: #ad1712;
color: white;

border: 1px solid black;
border-radius: 20px;
text-align: center;
font-weight: bold;
cursor: pointer;
`;

const ScreenDiv = styled.div`
width: 20em;
height: 5em;
margin-top: 2rem;
margin-bottom: 1rem;

background-color: #E6E6E6;

border-radius: 1rem;
text-align: center;
opacity: 0.6;
box-shadow: 0px 0px 1rem #000;
`;

const SeatList = styled.div`
display: flex;
justify-content: center;
align-items: center;

margin-top: 1rem;
`;

const SeatState = styled.div`
display: flex;
width: fit-content;
`;

const Occupied = styled.div`
width: 20px;
height: 20px;
margin-top: 1rem;

background-color: #bbb;
color: #fff;

border: 1px solid #dbdee2;
border-radius: 10px;
`;

const Selected = styled.div`
width: 20px;
height: 20px;
margin-top: 1rem;
margin-left: 1rem;

background-color: #ad1712;
color: #fff;

border: 1px solid #dbdee2;
border-radius: 10px;
`;

const Vacate = styled.div`
width: 20px;
height: 20px;
margin-top: 1rem;
margin-left: 1rem;

background-color: #666;
color: #fff;

border: 1px solid #dbdee2;
border-radius: 10px;
`;

const SelectSeat = styled.button`
width: 40px;
height: 40px;
margin: 0 5px;

background-color: #666;
color: white;

border: none;
border-radius: 10px;
cursor: pointer;
`;

const AlreadySelectSeat = styled.div`
display: flex;
justify-content: center;
align-items: center;

width: 40px;
height: 40px;
margin: 0 5px;

background-color: #bbb;
color: #fff;

border-radius: 10px;
font-size: small;
`;

const ResultAlert = styled.h2`
font-size: 135%;
`;

const PurchaseBtn = styled.button`
padding: 8px 15px;

background-color: black;
color: #d4d3c9;

border: 1px solid black;
border-radius: 1rem;
font-size: 1rem;
font-weight: bolder;
cursor: pointer;

&:hover {
    background-color: #d4d3c9;
    color: black;

    border: 1px solid black;
}
`;