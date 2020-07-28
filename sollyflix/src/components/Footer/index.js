import React from 'react';
import Solly3 from "../../assets/img/Solly3.png";
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/Solly42" target="_blank">
      <img className="Solly3" src={Solly3} alt="SollyFlix logo" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
