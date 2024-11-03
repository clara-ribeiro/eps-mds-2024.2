import React, { useState } from "react";
import Picture from "./foto.jpg";
import "./Corpo.css";

//colocar tbm um random para alterar a fonte para wingdings
//mudar partes do texto de lugar

const Corpo = () => {
  const [texto, setTexto] = useState("testando o map no texto");
  const [textoDividido, setTextoDividido] = useState([texto]);
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

  const handleTeste = () => {
    setTextoDividido([...texto]);
    for (let i = 0; i < 20; i++) {
      console.log(-i /10);
    }
  };

  const handleTexto = () => {
    setTextoDividido(
      texto.split(" ").map((e, index) => {
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
      <div className="botoes">
        <button onClick={handleTeste}>CLIQUE AQUI</button>
        <button onClick={handleReset}>RESET</button>
      </div>
      <h1 className="texto">{texto}</h1>
      <div className="textoDividido">{textoDividido}</div>
      <img className={altImg} src={Picture} alt="Rodrigo Amaral" />
    </div>
  );
};

export default Corpo;
