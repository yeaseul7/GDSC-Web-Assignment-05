import { useRouter } from "next/router";
const PurChaseSection = () => {
  const router = useRouter();
  return (
    <div>
      <h2>선택한 영화</h2>
      <h4>{router.query.movieNameE}</h4>
      <h2>영화 인원수</h2>
      <h4>{router.query.moviePeople}</h4>
      <h2>최종 결제 금액</h2>
      <h4>{router.query.resultprice}</h4>
    </div>
  );
};
export default PurChaseSection;
