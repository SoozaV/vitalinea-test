import React from "react";

import vitBebible from "../assets/img/img-vitalinea-bebible.png"
import vitGriego from "../assets/img/img-vitalinea-griego.png"
import vitSAzucar from "../assets/img/img-vitalinea-sin-azucar.png"

function VitalineaFamily() {
  return (
    <>
      <p className="title">LA FAMILIA VITALÍNEA</p>
      <div className="slider">
        <div className="slide">
          <img src={vitGriego} alt="Vitalínea Griego" />
          <p>Vitalínea Griego</p>
        </div>
        <div className="slide">
          <img src={vitSAzucar} alt="Vitalínea sin Azúcar" />
          <p>Vitalínea sin Azúcar</p>
        </div>
        <div className="slide">
          <img src={vitBebible} alt="Vitalínea Bebible" />
          <p>Vitalínea Bebible</p>
        </div>
      </div>
    </>
  );
}

export default VitalineaFamily;
