import styled from 'styled-components';
import Link from 'next/link';

const StyledhomeNav = styled.nav`
  display: flex;
  background-color: #222;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15%;
  height: 35%;
  max-height: 150px;
  margin-bottom: 6%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const StyledhomeLink = styled(Link)`
  color: white;
`;

const StyledhomeLogo = styled.span`
  font-size: 1.5rem;
  color: #fdfdfd;
`;

export default function Nav() {
  return (
    <>
      <StyledhomeNav>
        <StyledhomeLink href="/">홈</StyledhomeLink>
        <StyledhomeLogo>Carpe diem</StyledhomeLogo>
        <StyledhomeLink href="/booking">예매</StyledhomeLink>
      </StyledhomeNav>
    </>
  );
}
