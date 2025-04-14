import Hero from "../components/hero/Hero";
import NewCollection from "../components/newCollection/NewCollection";
import Offers from "../components/offers/Offers";
import Popular from "../components/popular/Popular";
import NewsLetter from "../components/newsLetter/NewsLetter";
import Footer from "../components/footer/Footer";

export default function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
      <Footer />
    </div>
  );
}
