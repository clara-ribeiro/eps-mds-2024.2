import React from 'react';
import './index.css';
import Picture from './profilePicture.png';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const ProfileCard = () => (
  <>
  <section className="sectionWrapper">
    <div className="profile-card">
      <div className="left-section">
        <div className="text-content">
          <h1 className="name"><span>CLARA</span><br/>RIBEIRO</h1>
          <p className="title">desenvolvedora de software</p>
        </div>
        <div className="icons">
          <a href='https://github.com/clara-ribeiro' target='_blank' rel="noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href='https://www.linkedin.com/in/clara-marcelino/' target='_blank' rel="noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href='https://wa.me/5562985228351' target='_blank' rel="noreferrer">
            <FaWhatsapp className="icon" />
          </a>
        </div>
      </div>
      <div className="right-section">
        <img
          className="profile-picture"
          src={Picture}
          alt="Clara Ribeiro"
        />
      </div>
    </div>
  </section>
  <section>
    <div className="resume-container">
      <div className="resume-left-container">
        <div className="about">
          <h2>sobre mim</h2>
          <p>
            sou graduanda de Engenharia de Software na Universidade de Brasília desde 2020. Atuo no mercado de
            trabalho na área de desenvolvimento de software, especificamente em desenvolvimento front end.
          </p>
        </div>

        <div className="contact">
          <h2>contato</h2>
          <p>claramarcelinors@gmail.com</p>
          <p>(62) 9 8522-8351</p>
          <p>Brasília, DF</p>
        </div>

        <div className="skills">
          <h2>habilidades</h2>
          <ul>
            <li>javascript</li>
            <li>typescript</li>
            <li>nodeJS</li>
            <li>reactJS</li>
            <li>react native</li>
            <li>nextJS</li>
            <li>jestJS</li>
            <li>jasmineJS</li>
            <li>git</li>
            <li>wordpress</li>
            <li>trunk based development</li>
          </ul>
        </div>
      </div>
      <div className='resume-right-container'>
        <div className="education">
          <h2>formação acadêmica</h2>
          <p>Ensino médio profissionalizante em Edificações<br />
            <span>Instituto Federal de Educação, Ciência e Tecnologia de Goiás, IFG</span></p>
          <p>Bacharelado em Engenharia de Software<br />
            <span>Universidade de Brasília, UNB</span></p>
          <p>Curso de Língua Inglesa<br />
            <span>Achieve Languages by Oxford University Press</span></p>
          <p>Curso Expert de Língua Inglesa<br />
            <span>Achieve Languages by Oxford University Press</span></p>
        </div>

        <div className="experience">
          <h2>experiência profissional</h2>
          <p>Estágio – Descomplica Tecnologia e Educação S.A.<br />
            <span>Atuação no programa de Estágio Tech, passando pelas times de Landing Page (Frontend), User Experience (Frontend e Backend) e Mobile (Frontend e Backend).</span></p>
          <p>Engenheira de Software Júnior – Descomplica Tecnologia e Educação S.A.<br />
            <span>Atuação na área de Landing Pages e CRO, desenvolvendo a aplicação web utilizando JavaScript, HTML, CSS, ReactJS e NextJS.</span></p>
          <p>Pesquisadora de IA<br/>
            <span>Laboratório de Inteligência Artificial da Universidade de Brasília (AiLab UnB)</span></p>
          <p>Assessora de Projetos e Marketing<br/>
            <span>Empresa Júnior de Engenharia de Software da Universidade de Brasília</span></p>
        </div>

        <div className="extra">
          <h2>experiência extracurricular</h2>
          <p>Participação voluntária no <strong>Projeto de Ensino: Algoritmos e Programação para Iniciantes</strong> realizado no Campus Goiânia do Instituto Federal de Educação, Ciência e Tecnologia de Goiás.</p>
          <p>Participação no programa <strong>Sakura Science High School Program 2019</strong> ministrado na área metropolitana de Tóquio, Japão e organizado pelo JST – Agência Japonesa de Ciência e Tecnologia.</p>
          <p>Pesquisadora do projeto <strong>Práticas, vivências e representações sociais da violência dos alunos do IFG: uma análise comparativa entre as composições por gênero e raça</strong>. Iniciação Científica na área de Ciências Humanas.</p>
        </div>
      </div>
  </div>
</section>
</>
);

export default ProfileCard;
