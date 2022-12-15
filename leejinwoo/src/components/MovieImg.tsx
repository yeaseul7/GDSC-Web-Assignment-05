import Image from "next/image";
import styled from "styled-components";

interface Prop {
    title: string;
    imgSrc: string;
    when: string;
    Movdetail: string;
}

const MovieImg = ({title, imgSrc, when,Movdetail}:Prop) =>{
    return(
    <PostDiv>
        <StyledA href={Movdetail} target="_blank">
            <div>
                 <Image src={imgSrc} alt={title} width={200} height={280} />
                 <TextDiv>
                    <h3>{title}</h3>
                </TextDiv>
            </div>
        </StyledA>
        <div>
            <p>{when} 개봉</p>
        </div>
    </PostDiv>
        
    )
}

export default MovieImg;

const PostDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const TextDiv = styled.div`

    h3{// 글씨가 너무 크면 ... 생성
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 190px;
        height: 24.8px;
    }
`;

const StyledA = styled.a`
    text-Decoration: none;
    color: black;
`;
