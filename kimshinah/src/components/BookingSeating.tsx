import MiniHeader from "../components/MiniHeader";
import BookingSection from "../components/BookingSection";
import styled from "styled-components";

const BookingSeating = () => {
  return (
    <BookingContainer>
      <MiniHeader />
      <BookingSection />
    </BookingContainer>
  );
};
export default BookingSeating;

const BookingContainer = styled.section`
  width: 70vw;
  height: 70vh;
  margin: 1.5em auto;
`;
