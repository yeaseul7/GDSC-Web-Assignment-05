import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Movie from '../components/Movie';
import styled from 'styled-components';

const Home = () => {
    return (
        <>
            <StyledArticle>
                <Movie />
            </StyledArticle>
        </>
    );
};

const StyledArticle = styled.article`
    display: flex;
    justify-content: center;
`;
export default Home;
