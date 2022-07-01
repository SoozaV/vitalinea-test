import React from "react";

function ProductDetails() {
  return (
    <>
      <p className="title">Información nutrimental</p>
      <div>
        <div className="ingredients-list">
          <p className="description">
            <b>Vitalínea® Bebible Guayaba 217gr</b>
            <br />
            <b>Valor promedio por porción de 217gr</b>
            <br />
            <b>Porciones por envase: 1</b>
          </p>
          <p className="ingredients">
            <b>Ingredientes:</b>
            <br />
            Leche descremada pasteurizada y/o reconstituida pasteurizada de
            vaca. 3.5% preparado de fruta guayaba (acesulfame K y sucralosa
            (27.2mg/100g)), crema, almidón modificado, maltodextrina y cultivos
            lácticos.
          </p>
        </div>
        <div className="ingredients-table">
          <div>
            <span>Contenido energético kJ/kcal</span>
            <span>413,2/97,9</span>
          </div>
          <div>
            <span>Proteínas (g) </span>
            <span>5.3</span>
          </div>
          <div>
            <span>Grasas (lípidos) (g)</span>
            <span>2.1</span>
          </div>
          <div>
            <span>Grasas saturadas (g)</span>
            <span>1.4</span>
          </div>
          <div>
            <span>Carbohidratos (Hidratos de carbono) (g) </span>
            <span>12.4</span>
          </div>
          <div>
            <span>Azúcares (g)</span>
            <span>7.7</span>
          </div>
          <div>
            <span>Azúcares añadidos (g) </span>
            <span>0.1</span>
          </div>
          <div>
            <span>Fibra dietética (g)</span>
            <span>0.0</span>
          </div>
          <div>
            <span>Sodio (mg)</span>
            <span>92.7</span>
          </div>
          <div>
            <span>Calcio (mg)</span>
            <span>199.6</span>
          </div>
          <div>
            <span>%VNR*</span>
            <span>22</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
