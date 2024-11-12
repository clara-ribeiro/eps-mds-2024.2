import React from 'react';
import { Link } from 'react-router-dom';  // Importa o Link para navegação
import './header.css';

function Header() {
    return (
        <header className="header">
            <Link to="/" className="back-button">
                Voltar
            </Link>
        </header>
    );
}

export default Header;
