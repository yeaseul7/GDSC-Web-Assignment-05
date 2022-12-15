import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <StyledHeader>
            <StyledLogo>
                <div>J</div>
                <div>A</div>
                <div>E</div>
                <div>G</div>
                <div>W</div>
                <div>A</div>
                <div>N</div>
                <div>B</div>
                <div>O</div>
                <div>X</div>
            </StyledLogo>
            <h2>MEET PLAY SHAER™</h2>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1.5625rem;
    h2 {
        margin-top: 0.25rem;
        font-size: 1.2rem;
    }
`;

const StyledLogo = styled.div`
    display: flex;
    justify-content: center;
    div {
        color: #121212;
        background-color: white;
        width: fit-content;
        font-size: 30px;
        font-weight: 800;
        margin: 0px 2px;
        padding: 4px 2px 0px 2px;
        margin-top: 0.625rem;
        display: flex;
        justify-content: center;
    }
`;

export default Header;
