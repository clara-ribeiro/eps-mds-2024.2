import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import NavbarMenu from './NavbarMenu';

import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState(false);

  const handleGoback = () => {
    navigate("/");
  };

  const toggleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="nav_bar">
      <a href="#">
        <h1>Rodrigo Amaral</h1>
      </a>
      <ul className="shortcuts">
        <li >
          <a href=" " onClick={handleGoback} className="cor">
            Voltar
          </a>
        </li>
        <li>
          <a href="#about">Sobre Mim</a>
        </li>
        <li>
          <a href="#infos">Informações</a>
        </li>
        <li>
          <a href="#contact">Socials</a>
        </li>
      </ul>
      <FcMenu onClick={toggleMenuActive} className="icone_hamburguer" />
        {menuActive ? (
          <NavbarMenu />
        ) : (
          <></>
        )}
    </header>
  );
};

export default Navbar;
