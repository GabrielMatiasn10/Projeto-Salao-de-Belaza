import React from "react";
import "./Footer.css";
import { BsInstagram, BsWhatsapp, BsYoutube } from 'react-icons/bs';

function Footer() {
  return (
    <div className="footer">
      <p className="footer-direitos">@2023 Todos os direitos reservados.</p>
      <div className="footer-icons">
        <button className="button-footer"><BsInstagram className="footer-icon" /></button>
        <button className="button-footer"><BsWhatsapp className="footer-icon" /></button>
        <button className="button-footer"><BsYoutube className="footer-icon" /></button>
      </div>
    </div>
  );
}

export default Footer;
