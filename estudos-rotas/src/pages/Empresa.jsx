function Empresa() {
  return (
    <main className="container">
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Sobre a TechSolutions</h1>
      <img 
        src="https://picsum.photos/1200/400?random=50" 
        alt="Nossa Empresa" 
        style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }}
      />
      <div style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
        <p>
          Nossa empresa foi criada com o objetivo de oferecer soluções modernas e eficientes para o mercado digital. 
          Trabalhamos com tecnologias inovadoras e uma equipe especializada em desenvolvimento web e mobile. Nosso 
          compromisso é entregar qualidade, segurança e desempenho em todos os projetos desenvolvidos. Acreditamos 
          que a tecnologia pode transformar negócios e melhorar a experiência das pessoas. Atuamos em diversos 
          segmentos do mercado e buscamos sempre a melhoria contínua dos nossos serviços.
        </p>
        <p>
          Ao longo dos anos conquistamos a confiança de diversos clientes, graças ao nosso comprometimento com prazos, 
          qualidade e suporte técnico. Nossa missão é desenvolver sistemas modernos que atendam às necessidades atuais 
          do mercado e preparem nossos clientes para o futuro digital. Valorizamos inovação, criatividade e trabalho em equipe.
        </p>
      </div>
    </main>
  );
}

export default Empresa;