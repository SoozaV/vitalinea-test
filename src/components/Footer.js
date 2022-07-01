import React from "react";
import logo from "../assets/img/img-logo-danone.png";
import logoFooter from "../assets/img/img-logo-footer.png";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <div><img src={logo} alt="" /></div>
        <div>
          <ul>
          <li><a href="#">Términos y condiciones</a></li>
          <li><a href="#">Políticas de privacidad</a></li>
          <li><a href="#">Aviso de privacidad</a></li>
          </ul>
          <p>Danone de México 2017 ©. Todos los derechos reservados 2017</p>
        </div>
        <div><img src={logoFooter} alt="" /></div>
      </div>
    </footer>
  );
}

export default Footer;
