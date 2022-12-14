import Link from "next/link";
import styled from "styled-components";

export default function Nav() {
  return (
    <>
      <StyledNavBox>
        <StyledLink href="/">Movee Chart</StyledLink>
        <StyledLink href="/Booking">Reservation</StyledLink>
      </StyledNavBox>
    </>
  );
}

const StyledNavBox = styled.nav`
  width: 800px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  border-bottom: 1px solid black;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

const StyledLink = styled(Link)`
  color: #444444;
  text-decoration: none;
  margin-left: 30px;
  font-size: 1.5rem;
  display: flex;
  justify-content: flex-end;
  :visited {
    color: #444444;
  }
  :hover {
    color: #b1d488;
    transform: translateY(-3px);
    transition: all 0.3s;
  }
  :focus {
    color: #96b474;
  }
`;
