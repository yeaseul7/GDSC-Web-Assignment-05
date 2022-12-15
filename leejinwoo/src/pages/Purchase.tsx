import {useRouter} from "next/router";
import styled from "styled-components";


export default function Purchase() {

    const MoveList = () => {
        router.push({
            pathname: '/',
        });
    }

    const router = useRouter();

    
    return(
        <>
        <PurchaseDiv>
            <h2>선택하신 영화: {router.query.movie}</h2>
            <ResultDiv>
                <div>
                    <p>인원수: {router.query.people}명 </p>   
                </div>
                <div>
                    <p>결제하실 금액: {router.query.price}원</p>
                </div>
            </ResultDiv>
            <FirstBtn onClick={MoveList}>처음으로</FirstBtn>
        </PurchaseDiv>
    
        </>
        
    )
}

const PurchaseDiv = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    margin-top: 100px;
`;

const FirstBtn = styled.div`
width: 136px;
padding: 12px 0 14px;
margin-top: 30px;
font-size: 16px;
font-weight: 500;

background: linear-gradient(to left, rgb(255, 115, 86), rgb(251, 67, 87));
box-shadow: 1px 3px 6px 0 rgb(0 0 0 / 30%);
border-radius: 25px;
color: white;
text-align: center;


bottom: 20px;
right: 20px;
`;

const ResultDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    margin: 30px;

`;