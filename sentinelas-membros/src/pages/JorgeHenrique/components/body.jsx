import FotoPerfil from '../FotoPerfil.jpeg';
import './body.css';

function Body() {
    return (
        <>
            <div className='areaperfil'>
                <div className='fotoperfil'>
                    <img
                        className="perfil"
                        src={FotoPerfil}
                        alt="Jorge Henrique"
                    />
                </div>
                <div className="texto">
                    <h1>JORGE <br />HENRIQUE</h1>
                    <h2>Desenvolvedor Web</h2>
                </div>
            </div>
            <body>
                <div className='conteudo'>
                    <div className='esquerda'>
                        <h2>Sobre mim</h2>
                        <p> Tenho 19 anos, estou graduando <br />Engenharia de Software no 4º semestre</p>
                        <h2>Contato</h2>
                        <p>Número: (61) 99935-9749</p>
                        <p>Email: jorgehenriquelessaoliveira@gmail.com</p>
                        <p>Discord: sirjorgito</p>
                    </div>

                    <div className='direita'>
                        <h2>Linguagens</h2>
                        <ul>
                            <li>Python</li>
                            <li>C</li>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>ReactJS</li>
                        </ul>
                        <h2>Experiências</h2>
                        <ul>
                            <li>Monitoria em APC</li>
                            <li>Curso de inglês</li>
                        </ul>
                    </div>
                </div>
            </body>
           
        </>
    );
}

export default Body;
