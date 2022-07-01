import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductTabs from "./components/ProductTabs";
import ProductDetails from "./components/ProductDetails";
import VitalineaFamily from "./components/VitalineaFamily";

import fresa2 from "./assets/img/img-fresas-2.png";
import fresa3 from "./assets/img/img-fresas-3.png";
import fresa4 from "./assets/img/img-fresas-4.png";
import fresa5 from "./assets/img/img-fresas-5.png";
import fresa6 from "./assets/img/img-fresas-6.png";
import fresa7 from "./assets/img/img-fresas-7.png";
import fresa8 from "./assets/img/img-fresas-8.png";
import fresa9 from "./assets/img/img-fresas-9.png";

function App() {
  window.addEventListener("scroll", () => {
    const target = document.querySelectorAll(".parallax");

    for(let i = 0; i < target.length; i++) {
      const pos = window.pageYOffset * target[i].dataset.rate
      if(target[i].dataset.rotate) {
        target[i].style.transform = `translate3d(0px, ${pos}px, 0px) rotate(${target[i].dataset.rotate}deg)`
      } else {
        target[i].style.transform = `translate3d(0px, ${pos}px, 0px)`
      }
      console.log(target[i].style.transform)
    }
  });

  return (
    <>
      <Header />
      <section className="main-product-section">
        <img className="parallax fresa5" data-rate="0.3" data-rotate="-45" src={fresa5} alt="" />
        <img className="parallax fresa2" data-rate="0.6" src={fresa2} alt="" />
        <ProductTabs />
        <a href="#" className="scroll-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z" />
          </svg>
        </a>
      </section>
      <section className="product-details-section">
        <img className="parallax fresa3" data-rate="-0.2" src={fresa3} alt="" />
        <img className="parallax fresa4" data-rate="-0.1" src={fresa4} alt="" />
        <img className="parallax fresa5" data-rate="-0.3" src={fresa5} alt="" />
        <img className="parallax fresa6" data-rate="-0.4" src={fresa6} alt="" />
        <img className="parallax fresa7" data-rate="0.1" src={fresa7} alt="" />
        <ProductDetails />
        <img className="parallax fresa8" data-rate="-0.1" src={fresa8} alt="" />
        <img className="parallax fresa9" data-rate="-0.12" src={fresa9} alt="" />
      </section>
      <section className="vitalinea-family-section">
        <VitalineaFamily />
      </section>
      <Footer />
    </>
  );
}

export default App;
