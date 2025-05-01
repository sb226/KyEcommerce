import Hero from "../components/hero/Hero";
import NewCollection from "../components/newCollection/NewCollection";
import Offers from "../components/offers/Offers";
import NewsLetter from "../components/newsLetter/NewsLetter";
import CategoryList from "../components/categoryList/CategoryList";

export default function Shop() {
  return (
    <div>
      <Hero />
      <CategoryList />
      <Offers />
      <NewCollection />
      <NewsLetter />
    </div>
  );
}
