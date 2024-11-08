import React from 'react';
import './index.css';
import profilepicture from './profilepicture.png';

function App() {
    return (
        <div className="app">
            <header className="header">
                <div className="header-content">
                    <div className="text-content">
                        <h1 className="name">Dannyeclisson Rodrigo</h1>
                        <p className="subtitle">Engenharia de Software | Universidade de Brasília</p>
                    </div>
                    <img className="profile-picture" src={profilepicture} alt="Profile" />
                </div>
            </header>

            <section className="section about">
                <h2>Sobre Mim</h2>
                <p>Atualmente, sou aluno da Universidade de Brasília e estou cursando Engenharia de Software na FCTE...</p>
            </section>

            <section className="section experience">
                <h2>Experiência Profissional</h2>
                <div className="experience-item">
                    <h3>"Atualmente" Estagiário - SERPRO</h3>
                    <p>Responsável por desenvolvimento de APIs e manutenção de sistemas em PHP.</p>
                </div>
                <div className="experience-item">
                    <h3>Estagiário - ANAC</h3>
                    <p>Responsável por atualizar planilhas e criar formulários de segurança de vôo.</p>
                </div>
                <div className="experience-item">
                    <h3>Jovem aprendiz - CODHAB</h3>
                    <p>Auxiliar administrativo.</p>
                </div>
            </section>

            <section className="section education">
                <h2>Educação</h2>
                <p>Universidade de Brasília - Engenharia de Software<br />FCTE</p>
            </section>

            <section className="section skills">
                <h2>Habilidades</h2>
                <p>React<br />PHP<br />Ruby</p>
            </section>

            <footer>
                <p>Contato: dannyeclissonrodrigo@gmail.com | LinkedIn: /dannyeclisson-rodrigo</p>
            </footer>
        </div>
    );
}

export default App;
