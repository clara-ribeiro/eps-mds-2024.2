import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <a 
                href="https://github.com/SirJorgito" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-icon"
            >
                <FaGithub size={40} />  {/* Define o tamanho do ícone */}
            </a>

        </footer>
    );
}

export default Footer;
