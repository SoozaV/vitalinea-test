import React, { useState } from "react";
import Fresa from "../assets/img/img-bote-fresa.png";
import Guayaba from "../assets/img/img-bote-guayaba.png";
import Toronja from "../assets/img/img-bote-toronja.png";
import federacion from "../assets/img/img-sello-avalado.png";
import menosDe100 from "../assets/img/img-100-kcal.png";

const tabs = [
  {
    name: "Fresa",
  },
  {
    name: "Guayaba",
  },
  {
    name: "Toronja",
  },
];

function ProductTabs() {
  const [currentFlavor, setCurrentFlavor] = useState(0);
  const [currentImage, setCurrentImage] = useState(Fresa);

  return (
    <div className="tabs-container">
      <div className="product-img">
        <img src={currentImage} alt="Vitalinea Fresa" />
      </div>
      <div className="product-info">
        <div className="tabs">
          <span>Sabor:</span>
          <a className="tab-option active" onClick={()=>{
            setCurrentFlavor(0)
            setCurrentImage(Fresa)
          }} href="#">
            Fresa
          </a>
          <a className="tab-option"  onClick={()=>{
            setCurrentFlavor(1)
            setCurrentImage(Guayaba)
          }} href="#">
            Guayaba
          </a>
          <a className="tab-option"  onClick={()=>{
            setCurrentFlavor(2)
            setCurrentImage(Toronja)
          }} href="#">
            Toronja
          </a>
        </div>
        <div className="product-title">
          <span>Vitalínea® Bebible {tabs[currentFlavor].name} 217 gr.</span>
        </div>
        <div className="product-description">
          <p>
            ¡La presentación ideal para llevar contigo! Vitalínea bebible es la
            opción si eres de las personas que siempre están activas y quieren
            probar algo sano, rico y práctico.
          </p>
        </div>
        <a href="#" className="walmart-btn">
          Comprar en Walmart
        </a>
        <div className="ribbons">
          <img src={federacion} alt="Federación Mexicana de Diabetes, A.C." />
          <img src={menosDe100} alt="Menos de 100 kcal" />
        </div>
      </div>
    </div>
  );
}

export default ProductTabs;
