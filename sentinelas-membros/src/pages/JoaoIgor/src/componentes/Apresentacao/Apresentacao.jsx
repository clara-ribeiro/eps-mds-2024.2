import React from 'react'
import styles from "./Apresentacao.module.css";
import minhaFoto from "../../../assets/apresentacao/minhaFoto-r.png";

export const Apresentacao = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.titulo}>Olá, sou o João</h1>
            <p className={styles.descricao}>Me chamo João Igor, tenho 19 anos e 
              sou estudante de Engenharia de Softaware na Universidade de Brasília.</p>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-igor-pereira-da-costa-7230a2260/" className={styles.contatoBtn}>Me contate</a>
        </div>
        <img src={minhaFoto} alt="Imagem de Apresentação de João" className={styles.apresentacaoImg} />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  );
};