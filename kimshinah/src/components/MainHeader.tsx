import styled from "styled-components";
import Image from "next/image";
import cgvLogo from "../../public/images/cgvlogo.png";

const MainHeader = () => {
  return (
    <SearchForm>
      <Image src={cgvLogo} alt="cgv_logo" />
    </SearchForm>
  );
};
export default MainHeader;

const SearchForm = styled.header`
  background: linear-gradient(90deg, #d74457, #ef632f);
  height: 3em;
  display: flex;
  align-items: center;
  img {
    width: 3.5em;
    height: fit-content;
    object-fit: contain;
    margin-left: 1.5em;
  }
`;
