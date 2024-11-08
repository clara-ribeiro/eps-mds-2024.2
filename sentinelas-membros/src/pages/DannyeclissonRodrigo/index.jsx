import React from 'react';
import './index.css';
import profilepicture from './profilepicture.jpeg';
import backgroundImage from './code_g1019737194.jpg';

function App() {
    return (
        <div className="App">
            <header className="header">
                <img src={profilepicture} alt="Foto de perfil" className="profile-photo"/>
                <div>
                    <h1>Dannyeclisson Rodrigo</h1>
                </div>
                <p>Engenharia de Software | Universidade de Brasília</p>
            </header>

            <section>
                <h2>Sobre Mim</h2>
                <p>Sou estagiário no SERPRO e estou aprimorando minhas habilidades em React e desenvolvimento de
                    software.</p>
            </section>

            <section>
                <h2>Experiência Profissional</h2>
                <ul>
                    <li>
                        <h3>"Atualmente" Estagiário - SERPRO</h3>
                        <p>Responsável por desenvolvimento de APIs e manutenção de sistemas em PHP.</p>
                    </li>
                    <li>
                        <h3>Estagiário - ANAC</h3>
                        <p>Responsável por atualizar planilhas e criar formularios de segurança de vôo</p>
                    </li>
                    <li>
                        <h3>Jovem aprendiz - CODHAB</h3>
                        <p>Auxiliar administrativo</p>
                    </li>
                </ul>
            </section>

            <section>
                <h2>Educação</h2>
                <p>Universidade de Brasília - Engenharia de Software</p>
                <p>FCTE</p>
            </section>

            <section>
                <h2>Habilidades</h2>
                <ul>
                    <li>React</li>
                    <li>PHP</li>
                    <li>Ruby</li>
                </ul>
            </section>

            <footer>
                <p>Contato: dannyeclissonrodrigo@gmail.com| LinkedIn: /dannyeclisson-rodrigo</p>
            </footer>
        </div>
    );
}

export default App;