import React from 'react'

import styles from "./Sobre.module.css";
import CursorIcon from "../../../assets/sobre/cursorIcon.png";
import ServidorIcon from "../../../assets/sobre/serverIcon.png";
import DesingIcon from "../../../assets/sobre/uiIcon.png";

export const Sobre = () => {
  return (
    <section className={styles.container} id='sobre'>
        <h2 className={styles.titulo}>Sobre mim</h2>
        <div className={styles.content}>
        <ul className={styles.sobreItens}>
            <li className={styles.sobreItem}>
                <img src={CursorIcon} alt="Icone de Cursor" />
                <div >
                    <h3>FontEnd Developer</h3>
                    <p>Desenvolvo para front-end há um tempo, exige tempo e dedicação,
                         mas consigo sobreescrever minha dificuldades e seguir em frente</p>
                </div>
            </li>
            <li className={styles.sobreItem}>
                <img src={ServidorIcon} alt="Icone de Servidor" />
                <div className={styles.aboutItemsText} >
                    <h3>BackEnd Developer</h3>
                    <p>Me saio melhor desenvolvendo para back-end, a lógica é sempre difícil 
                        e eu acredito que é oque mais evolui minhas habilidades</p>
                </div>
            </li>
            <li className={styles.sobreItem}>
                <img src={DesingIcon} alt="Icone de Desing" />
                <div className={styles.aboutItemsText}>
                    <h3>UI/UX</h3>
                    <p>Minhas experiências com UI/UX são muito poucas, não sei muito, mas tento dar o meu melhor</p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  );
};

