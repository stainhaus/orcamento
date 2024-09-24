import React from 'react';
import './Sobre.css';

export default function Sobre(){
  return (
    <div className="about-container">
      <h1>Sobre Nós</h1>
      <section className="about-section">
        <h2>O Projeto</h2>
        <p>
          O <strong>Gerenciador de Orçamento Pessoal</strong> é uma aplicação web inovadora desenvolvida para
          ajudar você a manter suas finanças organizadas e sob controle. Com uma interface intuitiva e fácil
          de usar, o sistema oferece ferramentas para adicionar, categorizar e analisar suas despesas e receitas.
          Nossa missão é fornecer uma solução prática e eficaz para que você possa gerenciar seu dinheiro de forma
          mais eficiente e alcançar seus objetivos financeiros.
        </p>
      </section>
      <section className="about-section">
        <h2>Equipe</h2>
        <p>
          A equipe por trás do Gerenciador de Orçamento Pessoal é composta por profissionais dedicados e apaixonados
          por finanças e tecnologia. Trabalhamos arduamente para criar uma ferramenta que atenda às suas necessidades
          e ofereça a melhor experiência possível.
        </p>
      </section>
    </div>
  );
};
