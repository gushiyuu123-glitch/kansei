import Hero from "./components/sections/Hero";
import { Spacer } from "./components/sections/Spacer";
import Features from "./components/sections/Features";
import Products from "./components/sections/Products";
import GiftSet from "./components/sections/GiftSet";
import Artisan from "./components/sections/Artisan";
import Shop from "./components/sections/Shop";
import AfterShop from "./components/sections/AfterShop";
import Silence from "./components/sections/Silence";
import Footer from "./components/sections/Footer";
import Nav from "./components/Nav";

// ===== SP =====
import HeroSP from "./components/sections/HeroSP";
import FeaturesSP from "./components/sections/FeaturesSP";
import ArtisanSP from "./components/sections/ArtisanSP";
import ProductsSP from "./components/sections/ProductsSP";
import GiftSetSP from "./components/sections/GiftSetSP";
import ShopSP from "./components/sections/ShopSP";
import AfterShopSP from "./components/sections/AfterShopSP";
import SilenceSP from "./components/sections/SilenceSP";
import FooterSP from "./components/sections/FooterSP";


export default function App() {
  return (
    <main className="bg-[var(--paper)] text-[var(--ink)]">

      {/* ================= PC ================= */}
      <div className="hidden md:block">
        <Nav />
        <Hero />
        <Spacer />
        <Features id="features" />
        <Spacer />
        <Artisan id="artisan" />
        <Spacer />
        <Products id="okashi" />
        <GiftSet id="gift" />
        <Spacer />
        <Shop id="shop" />
        <AfterShop id="aftermath" />
        <Silence id="silence" />
        <Footer />
      </div>

      {/* ================= SP ================= */}
      <div className="md:hidden">

        <HeroSP />
        <FeaturesSP />
        <ArtisanSP />
         <ProductsSP />
         <GiftSetSP />
         <ShopSP />
         <AfterShopSP />
         <SilenceSP />
         <FooterSP />


      </div>
    </main>
  );
}
