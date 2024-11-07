import React, { useState } from "react";

import styles from "./NavBar.module.css";
import closeIcon from "../../../assets/nav/closeIcon.png";
import menuIcon from "../../../assets/nav/menuIcon.png";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a
                className={styles.titulo} href="/joao">Portifolio</a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={
                        menuOpen
                            ? {closeIcon}
                            : {menuIcon}
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`${styles.menuItens} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li>
                        <a href="#experiencia">Experiência</a>
                    </li>
                    <li>
                        <a href="https://quiz-semuni-lix4.vercel.app/">Projetos</a>
                    </li>
                    <li>
                        <a href="https://github.com/JoaoPC10">Contatos</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

