import React from 'react';
import styled from 'styled-components';
import Image, { StaticImageData } from 'next/image';
import movie1 from '../imgs/movie1.jpeg';
import movie2 from '../imgs/movie2.jpeg';
import movie4 from '../imgs/movie4.jpeg';
import movie5 from '../imgs/movie5.jpeg';
import Link from 'next/link';

interface IMovieItem {
    imgSrc: StaticImageData;
    num: number;
    title: string;
}

const MovieItem = ({ imgSrc, num, title }: IMovieItem) => {
    return (
        <Link href="/booking">
            <StyledMovieItem>
                <Image src={imgSrc} width={245} alt={title} />
                <h1>{num + 1}</h1>
            </StyledMovieItem>
        </Link>
    );
};

const Movie = () => {
    const Movies = [
        { img: movie1, title: '소셜네트워크' },
        { img: movie2, title: '월터의 상상은 현실이 된다' },
        { img: movie4, title: '소스코드' },
        { img: movie5, title: '거친녀석들' },
    ];
    return (
        <StyledMovie>
            <h2>박스오피스</h2>

            <StyledMovieItemBox>
                {Movies.map((movie, key) => (
                    <MovieItem
                        key={key}
                        num={key}
                        imgSrc={movie.img}
                        title={movie.title}
                    />
                ))}
            </StyledMovieItemBox>
        </StyledMovie>
    );
};

const StyledMovieItem = styled.div`
    position: relative;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        transform: translateY(-10px);
    }
    h1 {
        position: absolute;
        bottom: 0%;
        left: 10%;
        transform: translate(-50%, -50%);
        color: white;
        text-shadow: 3px 3px 3px #23232385;
        font-size: 40px;
    }
`;
const StyledMovie = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    align-items: center;
    h2 {
        width: fit-content;
        border-bottom: 1px solid white;
        margin-bottom: 20px;
    }
`;

const StyledMovieItemBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;
export default Movie;
