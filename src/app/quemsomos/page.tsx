import React from 'react';
import Layout from "@/components/Layout";

const QuemSomos: React.FC = () => {
  return (
    <div className="quem-somos">
      <h1 className="quem-somos-titulo">Quem Somos</h1>

      <p>
        Na <strong>Cromo Financiamentos</strong>, transformar sonhos em realidade é a nossa paixão!
        Desde 1997 somos especialistas em realizar o sonho da casa própria, do carro novo, da moto
        desejada, do caminhão que impulsiona seu negócio ou da embarcação que te leva
        para momentos inesquecíveis.
      </p>

      <section className="quem-somos-missao-valores">
        <h2>Nossa Missão e Valores</h2>

        <div className="quem-somos-missao">
          <h3>Missão</h3>
          <p>
            Oferecer soluções financeiras personalizadas para cada cliente, com
            <strong> taxas competitivas</strong>, <strong>parcelas que cabem no seu bolso</strong> e um
            <strong> atendimento excepcional</strong>.
          </p>
        </div>

        <div className="quem-somos-valores">
          <h3>Valores</h3>
          <ul>
            <li>
              <strong>Confiança:</strong> Acreditamos na construção de
              relacionamentos duradouros e transparentes com nossos clientes.
            </li>
            <li>
              <strong>Agilidade:</strong> Buscamos a rapidez e a eficiência em todos
              os processos, para que você realize seus sonhos o quanto antes.
            </li>
            <li>
              <strong>Inovação:</strong> Estamos sempre buscando novas soluções para
              atender às suas necessidades de forma cada vez mais completa.
            </li>
            <li>
              <strong>Compromisso:</strong> Assumimos o compromisso de oferecer a
              melhor experiência possível para cada cliente.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default QuemSomos;
