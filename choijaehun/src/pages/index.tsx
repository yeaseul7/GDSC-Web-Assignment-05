import Movie from "../components/Movie";
import Seo from "../components/Seo";
import GlobalStyle from "./GlobalStyle";

export default function Home() {
  return (
    <>
      <Seo title="Home" />
      <GlobalStyle />
      <Movie />
    </>
  );
}
