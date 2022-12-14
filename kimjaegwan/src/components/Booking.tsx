import React, {
    ChangeEvent,
    useEffect,
    useState,
    Dispatch,
    SetStateAction,
} from 'react';
import styled from 'styled-components';
import returnSeatData from '../data/seatData';
import Router from 'next/router';

interface ISeat {
    id: number;
    status: string;
}
interface IColorSet {
    // * 객체의 인덱스를 string으로 접근할 수 있게 함
    [key: string]: string;
}

const Seats = ({ count }) => {
    //? Dispatch를 찾을 수 없다는 에러가 떠서 해결하지 못하고 any로 함
    const SeatOnClick = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e.currentTarget.id); //
        const id = Number(e.currentTarget.id);

        setSeatsState((c: any) => {
            const currentSeatState = [...c];
            console.log(currentSeatState[id].status);
            if (currentSeatState[id].status == 'vacancy') {
                currentSeatState[id].status = 'occupied';
            } else if (currentSeatState[id].status == 'occupied') {
                currentSeatState[id].status = 'vacancy';
            }

            // } else if (currentSeatState[id].status == 'occupied') {
            //     currentSeatState[id].status == 'vacancy';
            // }  ? 이 부분이 작동을 안합니다.

            return currentSeatState;
        });
    };

    const Seat = (prop: ISeat) => {
        const colorSet: IColorSet = {
            vacancy: 'gray',
            unvailable: 'red',
            occupied: 'green',
        };

        const status = prop.status;

        return (
            <StyledSeat
                id={prop.id.toString()}
                style={{ backgroundColor: `${colorSet[status]}` }}
                onClick={(e) => {
                    SeatOnClick(e);
                }}
            >
                {prop.id}
            </StyledSeat>
        );
    };

    const sd = returnSeatData();
    const [seatsState, setSeatsState] = useState<any>(sd);
    console.log(seatsState);
    const resultArr = seatsState.filter(
        (seat: { status: string }) => seat.status == 'occupied'
    );
    console.log(resultArr); //선택된 시트 배열 목록

    count(resultArr.length);

    return (
        <StyledSeats>
            {seatsState.map((prop: ISeat) => (
                <Seat id={prop.id} key={prop.id} status={prop.status} />
            ))}
        </StyledSeats>
    );
};

const Booking = () => {
    const [quantity, setQuantity] = useState<numb>(0);
    const [price, setPrice] = useState<number>(3);
    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPrice(Number(e.target.value));
    };

    // const greeting = 'hello';
    const movieValue = price;
    const quantityValue = quantity;

    {
        /* 무슨 영화, n명, 결제 금액 */
    }
    const SendQuery = () => {
        Router.push({
            pathname: '/purchase',
            query: { movieValueE: movieValue, quantityValueE: quantityValue },
        });
    };

    return (
        <StyledBooking>
            <div>
                Pick a moive:
                <select value={price} onChange={onSelectChange}>
                    <option value={3}>소셜네트워크, 3원</option>
                    <option value={2}>월터의 상상은 현실이 된다, 2원</option>
                    <option value={5}>소스코드, 5원</option>
                    <option value={10}>바스터즈 거친녀석들, 10원</option>
                </select>
            </div>
            <h1>Screen</h1>
            <Seats count={setQuantity} />
            <h2>
                {quantity}개 좌석을 선택했으며 가격은 {price * quantity}원
                입니다.
            </h2>
            {quantity != 0 ? (
                <button onClick={SendQuery}>구매하기</button>
            ) : (
                <button>좌석을 선택하세요.</button>
            )}
            {/* <button onClick={history.push("/~")}>리셋하기</button> */}
        </StyledBooking>
    );
};

const StyledSeats = styled.div`
    width: 550px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
`;

const StyledSeat = styled.div`
    width: 30px;
    height: 30px;
`;
// const StyledSeatRed = styled.div`
//     width: 30px;
//     height: 30px;
//     background-color: Red;
// `;
// const StyledSeatGreen = styled.div`
//     width: 30px;
//     height: 30px;
//     background-color: Green;
// `;

const StyledBooking = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    select {
        color: black;
    }
    button {
        all: unset;
        cursor: pointer;
        border: 1px solid white;
        padding: 10px;
        transition: all 0.3s;
        &:hover {
            padding: 10px 15px;
        }
    }
`;

export default Booking;
