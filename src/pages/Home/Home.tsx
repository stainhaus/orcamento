import Auth from "../../components/login/Auth";
import "./home.css";

export const Home = () => {
  return (
    <div className="home-container">
      <h1>Bem-vindo ao Gerenciador de Orçamento Pessoal</h1>
      <div className="informacoes">
        <p>
          O <strong>Gerenciador de Orçamento Pessoal</strong> é uma aplicação web desenvolvida
          por Rafael Stanhaus para ajudar os usuários a organizarem suas
          finanças mensais. A plataforma permite o controle detalhado da renda e
          despesas, oferecendo uma visão clara sobre como o dinheiro é gasto e
          quais áreas precisam de ajustes. Com funcionalidades para adicionar e
          categorizar receitas e despesas, o sistema também apresenta gráficos e
          relatórios para facilitar a visualização das finanças ao longo do
          tempo. A ideia é permitir que os usuários acompanhem seus hábitos
          financeiros, planejem melhor seus gastos e economizem com mais
          eficiência. A aplicação é voltada para quem busca uma ferramenta
          prática e intuitiva de gestão financeira pessoal.
        </p>
      </div>
    </div>
  );
};
