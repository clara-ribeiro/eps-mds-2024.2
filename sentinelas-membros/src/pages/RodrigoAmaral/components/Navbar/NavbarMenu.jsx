import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavbarMenu = () => {
  return (
    <div className="menu_hamburguer">
      <ul>
        <li>
          <Link to={"/"} className="link">
            Home
          </Link>
        </li>
        <li>
          <a href="#about">Sobre Mim</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
        <li>
          <a href="#contact">Contatos</a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarMenu;
