import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Picture from "./foto.jpg";
import "./Corpo.css";

//colocar tbm um random para alterar a fonte para wingdings
//mudar partes do texto de lugar

const Corpo = () => {
  const [texto, setTexto] = useState("testando o map no texto");
  const [texto2, setTexto2] = useState([
    "'Nome': 'Rodrigo Amaral'",
    "'Idade': 19",
    "'Titulo': 'Engenharia de Software, UnB | Assessor de operações da Orc'estra Gamificação'",
    "'Descrição': 'cursando Engenharia de Software na Universidade de Brasília (UnB) e sou entusiasta pela área de desenvolvimento de jogos. Sempre busco novas oportunidades para aprimorar minhas habilidades em programação. Atualmente, estou focado nos estudos de HTML, CSS e JavaScript, com o objetivo de expandir meus conhecimentos.'",
  ]);
  const [textoDividido, setTextoDividido] = useState([texto2]);
  const [ran, setRan] = useState(Math.floor(Math.random() * 10));
  const [ran2, setRan2] = useState(Math.floor(Math.random() * 10));
  const [altImg, setAltImg] = useState("foto");
  const [conAlt, setConAlt] = useState("container");

  const handleAlt = () => {
    setRan(Math.floor(Math.random() * 10));
    setRan2(Math.floor(Math.random() * 10));
    console.log(ran, ran2);
    handleTexto();
    handleImg();
  };

  const handleTexto = () => {
    setTextoDividido(
      texto2.map((e, index) => {
        if (ran === index) {
          return (
            <p key={index} className="textoAlt">
              {e}
            </p>
          );
        }
        return (
          <p key={index} className="texto">
            {e}
          </p>
        );
      })
    );
  };

  const handleImg = () => {
    if (ran === ran2) {
      setAltImg("fotoAlt");
      setConAlt("containerAlt");
    } else {
      setAltImg("foto");
      setConAlt("container");
    }
  };

  const handleReset = () => {
    setTextoDividido([texto]);
    setAltImg("foto");
    setConAlt("container");
  };

  return (
    <div className={conAlt}>
      <div className="content">
        <section className="home">
          <h1 onClick={handleAlt}>Hello </h1>
          <h1 onClick={handleReset}>World!</h1>
        </section>

        <section className="about" id="about">
          <div className="left">
            <img className={altImg} src={Picture} alt="Rodrigo Amaral" />
          </div>
          <div className="right">
            <h1>{`"Sobre Mim": {`}</h1>
            <p>{textoDividido}</p>
            <h1>{`}`}</h1>
          </div>
        </section>

        <section className="projects" id="projects">
          <div>
            <h1>Projetos</h1>
            <p>
              Essa parte está um pouco vazia não! <br />
              <i class="fa-solid fa-ghost"></i> <br />
              Projetos ainda estão por vir
            </p>
          </div>
        </section>
      </div>

      <footer>
        <section class="contact" id="contact">
          <h1>Contatos</h1>
          <hr />
          <div class="social">
            <div class="links">
              <a href="https://github.com/rodrigoFAmaral">
                <i class="fa-brands fa-github"></i> GitHub
              </a>
              <a href="#">
                <i class="fa-solid fa-envelope"></i> G-mail:
                rodrigoamaral1705@gmail.com
              </a>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Corpo;
