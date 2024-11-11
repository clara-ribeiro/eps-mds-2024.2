import React from 'react'; /* importação da biblioteca */
import './App.css'; /* importação do arquivo css*/

function App() { /* parte principal do meu código, função */
  return (
    <div className="app-container"> 
      <div className="welcome-section">
        <h1>Seja Bem-Vindo à minha apresentação!</h1>
      </div>

      <nav className="navbar"> {/* ícons de retorno, armazenam navegação */}
        <a href="#SM">Sobre Mim</a>
        <a href="#H">Habilidades</a>
        <a href="#Ct">Contato</a>
      </nav> 

      <div className="info-section">
        <div className="info-block"> {/* dentro dessa seção eu tenho 4 blocos */}
          <p>Meu nome é Mariana Martins, sou graduanda em Engenharia de Software.</p>
        </div>

        <div className="info-block">
          <p>Atualmente me encontro no 5° semestre na Universidade de Brasília.</p>
        </div>

        <div className="info-block">
          <p>Possuo proeficiência em Inglês e Espanhol.</p> {/* cada parágrafo */}
        </div>

        <div className="info-block">
          <p>Minha maior área de atuação e trabalho é no Back-End, e as linguagens que mais domino são: C, Java e Go.</p>
        </div>
        
      <footer className="footer"> {/*Rodapé para a página */}
        <p>&copy; Mariana Martins - {new Date().getFullYear()}</p> {/* adicionei o símbolo de copyright, e a data atual */}
        <div className="redes-sociais">
          <a href="https://br.linkedin.com/?src=go-pa&trk=sem-ga_campid.12619604099_asid.149519181115_crid.657343811713_kw.linkedin_d.c_tid.kwd-148086543_n.g_mt.e_geo.1001541&mcid=6821526239111716925&cid=&gad_source=1&gclid=CjwKCAiAxKy5BhBbEiwAYiW--0MksGYhbr2o7prq8UIyfPUHariKjzCmTP4gusvFNHT1vWBKThOokxoCC5YQAvD_BwE&gclsrc=aw.ds">LinkedIn</a>
          <a href="https://github.com/Marianamrts">GitHub</a> {/* links redirecionáveis, href armazena essses links */}
        </div>
      </footer>

      
        </div>
      </div>
  );
}


export default App;

