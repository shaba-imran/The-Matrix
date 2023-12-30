import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import { FilmCardList } from "../components/CardList/CardList";
import filmInfo from "../filmInfo";

const Quotes = () => {
  return (
    <div>
      <ImageCarousel />
      <FilmCardList filmInfo={filmInfo} />
    </div>
  );
};

export default Quotes;
