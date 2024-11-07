import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaArrowAltCircleUp } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  

  return (
    <footer>
        <section className="footer" id="contact">
          <h1>Socials: </h1>
          <div class="social">
              <a href="https://github.com/rodrigoFAmaral">
                <FaGithub className="links" />
              </a>
              <a href="https://www.linkedin.com/in/rodrigo-ferreira-do-amaral-741912332/">
                <FaLinkedin className="links" />
              </a> 
              <a href="#" className="voltar">
                <FaArrowAltCircleUp className="links" />
              </a> 
          </div>
        </section>
      </footer>
  );
};

export default Footer;
