import React from 'react';
import './index.css';

const alunos = [
  { nome: "Clara Ribeiro", href: "/clara", turma: "EPS" },
  { nome: "Danny Rodrigo", href: "/dannyeclisson", turma: "MDS" },
  { nome: "Eduardo Levenhagem", href: "/eduardo", turma: "MDS" },
  { nome: "Guilherme Moura", href: "/guilherme", turma: "MDS" },
  { nome: "Ígor Veras", href: "/igor", turma: "MDS" },
  { nome: "João Igor", href: "/joao", turma: "MDS" },
  { nome: "Jorge Henrique", href: "/jorge", turma: "MDS" },
  { nome: "Marcos Antonio", href: "/marcos", turma: "MDS" },
  { nome: "Mariana Martins", href: "/mariana", turma: "MDS" },
  { nome: "Rodrigo Amaral", href: "/rodrigo", turma: "MDS" },
  { nome: "Yzabella Pimenta", href: "/yzabella", turma: "MDS" }
];

const Home = () => (
    <div>
      <h1 className='titulo'>Projeto Sentinelas 2024.2</h1>
      <div className='alunos'>
        {alunos.map((pessoa, index) => (
          <a key={index} className="botao" href={pessoa.href}>
            <p className="nome">{pessoa.nome}</p>
            <span>{pessoa.turma}</span>
          </a>
        ))}
      </div>
    </div>
);

export default Home;
