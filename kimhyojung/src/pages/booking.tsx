import { useRouter } from 'next/router';
import MovieSeats from '../components/MovieSeats/MovieSeats';
export default function Booking() {
  const router = useRouter();

  return (
    <>
      <MovieSeats />
    </>
  );
}
