import styled from "styled-components";
import { useRouter } from "next/router";

export default function Purchase() {

    const router = useRouter();

    const clickPurchase = () => {
        alert('결제 안 되지롱');
    }

    return (
        <Container>
            <h2>선택하신 영화: {router.query.name}</h2>
            <img src="{router.query.poster}" />
            <Summary>
                <StyledDiv>
                    <StyledH3>결제하실 금액</StyledH3>
                    <StyledP>{router.query.price}원</StyledP>
                </StyledDiv>
                <StyledDiv>
                    <StyledH3>인원수</StyledH3>
                    <StyledP>{router.query.person}명</StyledP>
                </StyledDiv>
            </Summary>
            <StyledBtn onClick={clickPurchase}>결제하기</StyledBtn>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

margin-left: 1rem;

background-color: #d4d3c9;
`;

const Summary = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const StyledDiv = styled.div`
width: 10rem;
height: 5rem;
margin-right: 1rem;
margin-bottom: 1rem;

border: 1px solid black;
border-radius: 5px;

text-align: center;
`;

const StyledH3 = styled.h3`
margin: 0;
padding: 10px;

border-bottom: 1px solid black;
`;

const StyledP = styled.p`
margin: 0;
padding: 10px;
`;

const StyledBtn = styled.button`
padding: 8px 15px;

background-color: #ad1712;
color: #d4d3c9;

border: 1px solid #ad1712;
border-radius: 10px;
cursor: pointer;

&:hover {
    background-color: #d4d3c9;
    color: #ad1712;

    border: 1px solid #ad1712;
}
`;