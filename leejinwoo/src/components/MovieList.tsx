import MovieImg from "./MovieImg";
import styled from "styled-components";

const MovieList= () => {
    return(
        <ListArticle>
            <h1>현재 상영중인 영화</h1>
            <PostOl>
                <li>
                    <MovieImg title={"올빼미"} imgSrc={"/owl.jpg"} when={"2020.11.23"} Movdetail={" http://www.cgv.co.kr/movies/detail-view/?midx=86481 "}/>
                </li>
                <li>
                    <MovieImg title={"(라이브뷰잉)Ensemble Stars!! DREAM LIVE -7th Tour Allied Worlds- Live Viewing "} imgSrc={"/Ensemble.jpg"} when ={"2020.11.25"} Movdetail={" http://www.cgv.co.kr/movies/detail-view/?midx=86435 "} />
                </li>
                <li>
                    <MovieImg title={"오늘 밤, 세계에서 이 사랑이 사라진다 해도"} imgSrc={"/tonight.jpg"} when={"2022.11.30"} Movdetail={" http://www.cgv.co.kr/movies/detail-view/?midx=86503 "} />
                </li>
                <li>
                    <MovieImg title={"탄생"} imgSrc={"/birth.jpg"} when={"2022.11.30"} Movdetail={" http://www.cgv.co.kr/movies/detail-view/?midx=86510 "} />
                </li>
                <li>
                    <MovieImg title={"그래비티"} imgSrc={"/gravity.jpg"} when={"2022.12.07"} Movdetail={" http://www.cgv.co.kr/movies/detail-view/?midx=77200 "} />
                </li>
            </PostOl>
            <PostOl>
                <li>
                    <MovieImg title={"더 메뉴"} imgSrc={"/menu.jpg"} when={"2022.12.07"} Movdetail={" http://www.cgv.co.kr/movies/detail-view/?midx=86490 "} />
                </li>
                <li>
                    <MovieImg title={"프레이 포 더 데블"} imgSrc={"/pray.jpg"} when={"2022.12.07"} Movdetail={" http://www.cgv.co.kr/movies/detail-view/?midx=86340 "} />
                </li>
                <li>
                    <MovieImg title={"매드맥스-분노의도로"} imgSrc={"/madmax.jpg"} when={"2022.12.07"} Movdetail={" http://www.cgv.co.kr/movies/detail-view/?midx=78207 "} />
                </li>
                <li>
                    <MovieImg title={"압꾸정"} imgSrc={"/apggujung.jpg"} when={"2022.12.07"} Movdetail={" http://www.cgv.co.kr/movies/detail-view/?midx=86498 "} />
                </li>
                <li>
                <   MovieImg title={"크리스마스 캐럴"} imgSrc={"/christmas.jpg"} when={"2022.12.07"} Movdetail={" http://www.cgv.co.kr/movies/detail-view/?midx=86507 "} />
                </li>
            </PostOl>
        </ListArticle>
        
    )   
}

export default MovieList;   

const ListArticle = styled.article`
    width: 100vw;

    h1{
        margin: 40px 100px;
        padding-bottom: 20px;

        width: 85vw;
        border-bottom: 4px solid ;
        
    }

    li{
        //번호 안내보낼라고 플렉스 넣음
        //가운데 정렬 포스터 모양 만들기
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 5px;

        border-radius: 5px;
        box-shadow: 2px 3px 6px 0 rgb(0 0 0 / 30%);

        :active{
            box-shadow: 2px 3px 6px 0 rgb(0 0 0 / 30%) inset;
        }
       
    }
`;

const PostOl = styled.ol`
    display: flex;
    flex-direction: row;
    //가운데 정렬
    align-items: center;
    justify-content: center;

    margin: 60px 0px;
    gap: 30px;
`;

