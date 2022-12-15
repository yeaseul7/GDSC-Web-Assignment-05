import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

interface IMovieName {
    [key: number]: string;
}

const Purchase = () => {
    const router = useRouter();
    console.log('K : ', router.query.movieValueE);
    console.log('E : ', router.query.quantityValueE);
    const nameValue: number = Number(router.query.movieValueE);
    const quantity = Number(router.query.quantityValueE);
    // 무슨 영화, n명, 결제 금액
    const movieName: IMovieName = {
        3: '소셜네트워크',
        2: '월터의 상상은 현실이 된다.',
        5: '소스코드',
        10: '바스터즈 거친 녀석들',
    };
    return (
        <StyledPurchase>
            <h1>결제</h1>
            <h2>
                영화 명:
                <br />
                {movieName[nameValue]}
            </h2>
            <h2>
                예매 수량:
                <br />
                {quantity}개
            </h2>
            <h2>
                총 가격:
                <br />
                {nameValue * quantity}원
            </h2>
        </StyledPurchase>
    );
};
const StyledPurchase = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: flex-start;
    margin-left: 20%;
    h1 {
        align-items: center;
    }
`;
export default Purchase;
