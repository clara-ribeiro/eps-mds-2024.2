import React from 'react';
import './style.css';
import Picture from './yzabella-profile.png';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ZProfile = () => (
    <section className="sectionAll">
        <section id="top" className="sectionWrapper1">
            <header className="navbar">
            <h1 className="logo">
                <a href="#top" style={{ color: '#BBBBBB', textDecoration: 'none' }}>YZABELLA MIRANDA</a>
            </h1>
            <nav className="navLinks">
                <a href="#about">Sobre mim</a>
            </nav>
            </header>
            
            <div className="zprofile-card">
            <div className="left-section">
                <div className="text-content">
                <h2>OI, EU SOU A</h2>
                <h1>YZABELLA MIRANDA.</h1>
                <p>Estudante de Engenharia de Software pela Universidade de Brasília.</p>
                <button className="about-button">
                    <a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>SOBRE MIM</a>
                </button>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/yzabella-miranda-017429232/" target="_blank" rel="noreferrer">
                    <FaLinkedin className="icon" />
                    </a>
                    <a href="https://github.com/redjsun" target="_blank" rel="noreferrer">
                    <FaGithub className="icon" />
                    </a>
                    <a href="yzabellamiranda4@gmail.com" target="_blank" rel="noreferrer">
                    <FaEnvelope className="icon" />
                    </a>
                </div>
                </div>
            </div>
            <div className="right-section">
                <img className="profile-picture-z" src={Picture} alt="eu"/>
            </div>
            </div>
        </section>


        <section id="about" className="sectionAbout">
            <div className="about-container">
            <h2 className="about-title">SOBRE MIM</h2>
            <div className="about-content">
                <h3 className="about-heading">Estudante de Engenharia de Software na Universidade de Brasilia</h3>
                <p className="about-description">
                    Sou uma estudante animada com qualquer projeto de desenvolvimento, com o objetivo de entrar na área de Análise de Dados.
                    Quando não estou estudando costumo focar em K-pop, jogar Project Zomboid ou Bloons TD6 e assistir séries.
                </p>
            </div>
        </div>
        <div className="experience-section">
        <div className="experience-item left-aligned">
          <h2>EXPERIENCIAS</h2>
          <p>UNB: monitora de IAL</p>
          <p>projeto RS Revive</p>
        </div>
        <div className="experience-item right-aligned">
          <h2>CONHECIMENTOS</h2>
          <p>Inglês</p>
          <p>C</p>
          <p>Python</p>
          <p>Java</p>
          <p>React, Node.js</p>
        </div>
      </div>
        </section>
    </section>
);

export default ZProfile;
