import Hero from "../components/hero/Hero";
import NewCollection from "../components/newCollection/NewCollection";
import Offers from "../components/offers/Offers";
import Popular from "../components/popular/Popular";

export default function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
    </div>
  );
}
