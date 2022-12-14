import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";

const Seats = () => {
    //인원수
    const [people, setPeople] = useState<number>(1);
    // 가격 종류
    const [price, setPrice] = useState<number>(14000);
    // 영화선택
    const [movie, setMovie] = useState<number>(1);
    // 영화 이름
    const [movieName, setMovieName] = useState<string>('올빼미');
    const [result, setResult] = useState<number>(14000);
    // 라우터쓸거임ㅇㅇ
    const router = useRouter();

    //영화가 바뀌면 영화 이름을 바꾸게함
    const onSelectChange = (e:ChangeEvent<HTMLSelectElement>) =>{
        setMovie(Number(e.target.value));

        if(e.target.value == '1'){
            setMovieName(String('올빼미'));
        }
        if(e.target.value == '2'){
            setMovieName(String('앙상블 스타즈'));
        }
        if(e.target.value == '3'){
            setMovieName(String('오늘 밤, 세계에서 이 사랑이 사라진다 해도'));
        }
        if(e.target.value == '4'){
            setMovieName(String('탄생'));
        }
        if(e.target.value == '5'){
            setMovieName(String('그래비티'));
        }
        if(e.target.value == '6'){
            setMovieName(String('더 메뉴'));
        }
        if(e.target.value == '7'){
            setMovieName(String('프레이 포 더 데블'));
        }
        if(e.target.value == '8'){
            setMovieName(String('매드맥스-분노의도로'));
        }
        if(e.target.value == '9'){
            setMovieName(String('압꾸정'));
        }
        if(e.target.value == '10'){
            setMovieName(String('크리스마스 캐럴'));
        }
    };

    //조조할인은 못참지
    const movePriceChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPrice(Number(e.target.value));
    };

    //사람이 선택될 때 마다 가격이 변동 됨
    useEffect(() => {
        setResult(price * people)
    },[price, people]);//[의존성 배열]

    //선택 안하면 초기화
    const onReset = () => {
        setPeople(0);
    };

    //좌석 선택
    const choiseChange = (e: React.MouseEvent<HTMLElement>) => {
        // console.log(e.target);
        // console.log(e.currentTarget.classList.contains('occu'));
        //선택한 좌석이 이미 선택한 좌석이라면
        const SeatStyle = e.currentTarget;
        if(e.currentTarget.classList.contains('occupied')){
            //알림창 생성"이미 선택된 좌석입니다"
            alert("이미 선택된 좌석입니다")
            return;
            
        }
        //선택된 좌석을 다시 누르면
        else if (e.currentTarget.classList.contains('selected')){
            //사람 -1
            setPeople(people -1);
            SeatStyle.style.backgroundColor = '#fff';
            SeatStyle.classList.remove('selected');

        }
        //선택한 좌석이 빈 좌석이라면
        else{
            setPeople(people +1);
            SeatStyle.classList.add('selected');
            SeatStyle.style.backgroundColor = '#0000ff';
        }



    };
    //

    //클릭되면 Purchase로 넘어가는 라우터
    const onClickPurchase = () => {
        if (people <= 0) {
            alert('좌석을 선택하세요');
            onReset();
            setPrice(14000);
            return;
        }
        else router.push({
            pathname: '/Purchase',
            // 해당 값들을 purchase로 넘겨라
            query: {movie: movieName, people: people, price: result },
        });
    };
    //초기화면으로 돌아가는 라우터
    const backMove = () => {
        router.push({
            pathname: '/',
        });
    }


    return(
        <SitArticle>
            <h2>영화를 선택하세요</h2>
            <SelectDiv>
                <select value={movie} onChange={onSelectChange}>
                    <option value={1} >올빼미</option>
                    <option value={2} >앙상블 스타즈</option>
                    <option value={3} >오늘 밤, 세계에서 이 사랑이 사라진다 해도</option>
                    <option value={4} >탄생</option>
                    <option value={5} >그래비티</option>
                    <option value={6} >더 메뉴</option>
                    <option value={7} >프레이 포 더 데블</option>
                    <option value={8} >매드맥스-분노의도로</option>
                    <option value={9} >압꾸정</option>
                    <option value={10} >크리스마스 캐럴</option>
                </select>
                <select value={price} onChange={movePriceChange}>
                    <option value={14000}>일반( 11:01~ )</option>
                    <option value={10000}>모닝( 06:00~ )</option>
                </select>
            </SelectDiv>
                <ScreenDiv>screen</ScreenDiv>
            <LineDiv>
                <HalfLineDiv>
                    <OccupiedSit className="occupied" onClick={choiseChange} >A1</OccupiedSit>
                    <SitDiv onClick={choiseChange} >A2</SitDiv>
                    <SitDiv onClick={choiseChange} >A3</SitDiv> 
                    <SitDiv onClick={choiseChange} >A4</SitDiv>
                    <SitDiv onClick={choiseChange} >A5</SitDiv>
                </HalfLineDiv>
                <HalfLineDiv>
                    <SitDiv onClick={choiseChange} >A6</SitDiv>
                    <SitDiv onClick={choiseChange} >A7</SitDiv>
                    <SitDiv onClick={choiseChange} >A8</SitDiv> 
                    <OccupiedSit className="occupied" onClick={choiseChange} >A9</OccupiedSit>
                    <SitDiv onClick={choiseChange} >A10</SitDiv>
                </HalfLineDiv>
            </LineDiv>
            <LineDiv>
                <HalfLineDiv>
                    <SitDiv onClick={choiseChange} >B1</SitDiv>
                    <OccupiedSit  className="occupied" onClick={choiseChange} >B2</OccupiedSit>
                    <SitDiv onClick={choiseChange} >B3</SitDiv> 
                    <SitDiv onClick={choiseChange} >B4</SitDiv>
                    <SitDiv onClick={choiseChange} >B5</SitDiv>
                </HalfLineDiv>
                <HalfLineDiv>
                    <SitDiv onClick={choiseChange} >B6</SitDiv>
                    <SitDiv onClick={choiseChange} >B7</SitDiv>
                    <SitDiv onClick={choiseChange} >B8</SitDiv> 
                    <SitDiv onClick={choiseChange} >B9</SitDiv>
                    <OccupiedSit  className="occupied" onClick={choiseChange} >B10</OccupiedSit>
                </HalfLineDiv>
            </LineDiv>
            <LineDiv>
                <HalfLineDiv>
                    <SitDiv onClick={choiseChange} >C1</SitDiv>
                    <SitDiv onClick={choiseChange} >C2</SitDiv>
                    <OccupiedSit  className="occupied" onClick={choiseChange} >C3</OccupiedSit> 
                    <SitDiv onClick={choiseChange} >C4</SitDiv>
                    <SitDiv onClick={choiseChange} >C5</SitDiv>
                </HalfLineDiv>
                <HalfLineDiv>
                    <OccupiedSit className="occupied" onClick={choiseChange} >C6</OccupiedSit>
                    <SitDiv onClick={choiseChange} >C7</SitDiv>
                    <SitDiv onClick={choiseChange} >C8</SitDiv> 
                    <SitDiv onClick={choiseChange} >C9</SitDiv>
                    <SitDiv onClick={choiseChange} >C10</SitDiv>
                </HalfLineDiv>
            </LineDiv>
            <LineDiv>
                <HalfLineDiv>
                    <SelectedSit className="selected"  onClick={choiseChange} >D1</SelectedSit>
                    <SitDiv onClick={choiseChange} >D2</SitDiv>
                    <SitDiv onClick={choiseChange} >D3</SitDiv> 
                    <SitDiv onClick={choiseChange} >D4</SitDiv>
                    <SitDiv onClick={choiseChange} >D5</SitDiv>
                </HalfLineDiv>
                <HalfLineDiv>
                    <SitDiv onClick={choiseChange} >D6</SitDiv>
                    <SitDiv onClick={choiseChange} >D7</SitDiv>
                    <SitDiv onClick={choiseChange} >D8</SitDiv> 
                    <SitDiv onClick={choiseChange} >D9</SitDiv>
                    <OccupiedSit  className="occupied" onClick={choiseChange} >D10</OccupiedSit>
                </HalfLineDiv>
            </LineDiv>
            <LineDiv>
                <HalfLineDiv>
                    <SitDiv onClick={choiseChange} >E1</SitDiv>
                    <SitDiv onClick={choiseChange} >E2</SitDiv>
                    <SitDiv onClick={choiseChange} >E3</SitDiv> 
                    <SitDiv onClick={choiseChange} >E4</SitDiv>
                    <SitDiv onClick={choiseChange} >E5</SitDiv>
                </HalfLineDiv>
                <HalfLineDiv>
                    <SitDiv onClick={choiseChange} >E6</SitDiv>
                    <OccupiedSit className="occupied" onClick={choiseChange} >E7</OccupiedSit>
                    <OccupiedSit className="occupied" onClick={choiseChange} >E8</OccupiedSit> 
                    <SitDiv onClick={choiseChange} >E9</SitDiv>
                    <SitDiv onClick={choiseChange} >E10</SitDiv>
                </HalfLineDiv>
            </LineDiv>
            
            <LineDiv>
                <HalfLineDiv>
                    <SitDiv onClick={choiseChange} >F1</SitDiv>
                    <SitDiv onClick={choiseChange} >F2</SitDiv>
                    <SitDiv onClick={choiseChange} >F3</SitDiv> 
                    <SitDiv onClick={choiseChange} >F4</SitDiv>
                    <SitDiv onClick={choiseChange} >F5</SitDiv>
                    <SitDiv onClick={choiseChange} >F6</SitDiv>
                    <SitDiv onClick={choiseChange} >F7</SitDiv>
                    <SitDiv onClick={choiseChange} >F8</SitDiv>
                    <OccupiedSit className="occupied" onClick={choiseChange} >F9</OccupiedSit>
                    <OccupiedSit className="occupied" onClick={choiseChange} >F10</OccupiedSit> 
                    <OccupiedSit className="occupied" onClick={choiseChange} >F11</OccupiedSit>
                    <OccupiedSit className="occupied" onClick={choiseChange} >F12</OccupiedSit>
                </HalfLineDiv>
                
            </LineDiv>
            <LowDiv>
                <h3>인원: {people}명 금액: {result}원</h3>
                <BtnDiv>
                <BackBtn onClick={backMove}>뒤로가기</BackBtn>

                <PurchaseBtn onClick={onClickPurchase}>결제하기</PurchaseBtn>
                </BtnDiv>
            </LowDiv>

            
        </SitArticle>
    );
    

}

export default Seats;

const SitArticle = styled.article`

    h2{
        margin: 40px 100px;
        padding-bottom: 20px;

        width: 85vw;
        border-bottom: 4px solid ;
        
    }

`;

const SelectDiv = styled.div`
    display: flex;
    margin: 10px 100px;
    gap: 10px;
`;

const ScreenDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 40px 100px;
    width: 85vw;
    height: 200px;
    background-color: gray;
    color: white;

    font-size: 80px;
`;

const LineDiv = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-evenly;
    margin: 0px 100px;
    width: 85vw;
    background-color: gray;

`;


const HalfLineDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px;
    gap: 20px;
`;

const SitDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;

    background-color: white;

    //얘네 둘은 왜 안되는지 몰?루
    .occupied{
        background-color: red;
    }

    .selected{
        background-color: blue;
    }
`;

const OccupiedSit = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;
    background-color: red;
`;

const SelectedSit = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;
    background-color: blue;
`;

const LowDiv = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    margin:  30px 0px;

`;

const BtnDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
    margin:  30px 0px;
`;

const PurchaseBtn = styled.div`
width: 136px;
padding: 12px 0 14px;
font-size: 16px;
font-weight: 500;

background: linear-gradient(to left, rgb(255, 115, 86), rgb(251, 67, 87));
box-shadow: 1px 3px 6px 0 rgb(0 0 0 / 30%);
border-radius: 25px;
color: white;
text-align: center;
`;

const BackBtn = styled.div`
width: 136px;
padding: 12px 0 14px;
font-size: 16px;
font-weight: 500;

background: linear-gradient(to left, rgb(255, 115, 86), rgb(251, 67, 87));
box-shadow: 1px 3px 6px 0 rgb(0 0 0 / 30%);
border-radius: 25px;
color: white;
text-align: center;
`;

