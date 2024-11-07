import React, { useState, useEffect } from "react";
import Picture from "./foto.jpg";
import "./Corpo.css";

const Corpo = () => {
  const texto = [
    "'Nome': 'Rodrigo Amaral'",
    "'Idade': 19",
    "'Titulo': 'Engenheiro de Software, UnB | Assessor de operações da Orc'estra Gamificação'",
    "'Descrição': 'cursando Engenharia de Software na Universidade de Brasília (UnB) e sou entusiasta pela área de desenvolvimento de jogos. Sempre busco novas oportunidades para aprimorar minhas habilidades em programação. Atualmente, estou focado nos estudos de HTML, CSS e JavaScript, com o objetivo de expandir meus conhecimentos.'",
  ];
  const texto2 = [
    "'Orc'estra Gamificação': 'Assessor de Operações'",
    "'UnB': 'Monitor de APC'",
    "'Taubatexas Robotic': 'Membro na área de eletrônica e programação'",
    "'FIRST Robotics Competition': 'Participação na competição de robótica realizada pela FIRST Inspire como integrante da equipe Taubatexas Robotics'",
    "'Supergeeks': 'Auxílio durante as aulas decorridas, sendo elas de programação e de robótica'",
  ];
  const texto3 = [
    "'Inglês'",
    "'C'",
    "'C#'",
    "'Java'",
    "'JavaScript'",
    "'Gamificação'",
    "'Análise de Player'",
    "'Octalysis'",
    "'Excel, Google Sheets'",
    "'React, Node.js'",
  ];
  const [textoDividido, setTextoDividido] = useState([texto]);
  const [textoDividido2, setTextoDividido2] = useState([texto2]);
  const [textoDividido3, setTextoDividido3] = useState([texto3]);
  const [ran, setRan] = useState(Math.floor(Math.random() * 10));
  const [ran2, setRan2] = useState(Math.floor(Math.random() * 10));
  const [ran3, setRan3] = useState(Math.floor(Math.random() * 10));
  const [altImg, setAltImg] = useState("foto");
  const [conAlt, setConAlt] = useState("container");

  //Faz a mudança de alguns elementos da tela ao ser chamado clickando em "Hello"
  const handleAlt = () => {
    setRan(Math.floor(Math.random() * 10));
    setRan2(Math.floor(Math.random() * 10));
    setRan3(Math.floor(Math.random() * 10));
    handleTexto();
    handleImg();
  };

  //Separa o texto em diferentes partes para serem trabalhadas e altera alguns deles dependendo de ran
  const handleTexto = () => {
    setTextoDividido(
      texto.map((e, index) => {
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
    setTextoDividido2(
      texto2.map((e, index) => {
        if (ran2 === index) {
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
    setTextoDividido3(
      texto3.map((e, index) => {
        if (ran3 === index) {
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

  //Altera a imagem dependendo dos valores de ran
  const handleImg = () => {
    if (ran === ran2) {
      setAltImg("fotoAlt");
      setConAlt("containerAlt");
    } else {
      setAltImg("foto");
      setConAlt("container");
    }
  };

  //Retorna a pagina para versão padrão ao clickar em "World!"
  const handleReset = () => {
    setTextoDividido(
      texto.map((e, index) => {
        return (
          <p key={index} className="texto">
            {e}
          </p>
        );
      })
    );
    setTextoDividido2(
      texto2.map((e, index) => {
        return (
          <p key={index} className="texto">
            {e}
          </p>
        );
      })
    );
    setTextoDividido3(
      texto3.map((e, index) => {
        return (
          <p key={index} className="texto">
            {e}
          </p>
        );
      })
    );
    setAltImg("foto");
    setConAlt("container");
  };

  //Faz com que o texto seja exibido da maneira correta ao iniciar a tela
  useEffect(() => {
    handleReset();
  }, []);

  return (
    <div className={conAlt} id="about">
      <section className="home">
        <h1 onClick={handleAlt}>Hello </h1> 
        <h1 onClick={handleReset}>World!</h1>
      </section>

      <section className="sobre">
        <div className="left">
          <img className={altImg} src={Picture} alt="Rodrigo Amaral" />
        </div>
        <div className="right">
          <h1>{`"Sobre Mim": {`}</h1>
          <p>{textoDividido}</p>
          <h1 id="infos">{`}`}</h1>
        </div>
      </section>

      <hr />

      <section className="infos">
        <div className="right">
          <h1>{`"Competências": {`}</h1>
          <p>{textoDividido3}</p>
          <h1>{`}`}</h1>
        </div>
        <div className="right" id="vl">
          <h1>{`"Experiências": {`}</h1>
          <p>{textoDividido2}</p>
          <h1>{`}`}</h1>
        </div>
      </section>
    </div>
  );
};

export default Corpo;
