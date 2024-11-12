import React from 'react'
import styles from "./Experiencia.module.css";
import html from "../../../assets/habilidades/html.png";
import css from "../../../assets/habilidades/css.png";
import react from "../../../assets/habilidades/react.png";
import node from "../../../assets/habilidades/node.png";

export const Experiencia = () => {
  return (
    <section className={styles.experienciaSection} id='experiencia'>
      <div className={styles.contentContainer}>
        <h2 className={styles.titulo}>
          Habilidades
        </h2>
        <div className={styles.habilidades}>

          <div className={styles.habilidadeItem}>
            <img src={html} alt="HTML" />
            <p>HTML</p>
          </div>

          <div className={styles.habilidadeItem}>
            <img src={css} alt="CSS" />
            <p>CSS</p>
          </div>

          <div className={styles.habilidadeItem}>
            <img src={node} alt="Node.js" />
            <p>Node.js</p>
          </div>

          <div className={styles.habilidadeItem}>
            <img src={react} alt="React" />
            <p>React</p>
          </div>

        </div>
      </div>
    </section>

  );
};

