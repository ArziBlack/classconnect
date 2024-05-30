import "./App.css";
import PricingPackages from "./components/Pricing";
import SecondaryHero from "./components/SecondaryHero";
import { PRICING } from "./constants/illlustrations";

const links = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
];

function App() {
  return (
    <>
      <SecondaryHero
        title="Our Pre-ready Pricing Packages"
        links={links}
        imageUrl={PRICING}
      />
      <PricingPackages />
    </>
  );
}

export default App;
