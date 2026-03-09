import CarouselHome from "../components/Carousel";
import Card from "../components/Card";

function Home() {
  const servicos = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    titulo: `Serviço Tech ${index + 1}`,
    texto: "Soluções otimizadas para alavancar os resultados do seu negócio.",
    imagem: `https://picsum.photos/300/200?random=${index + 30}`
  }));

  return (
    <main className="container">
      <h1>TechSolutions</h1>
      <p>Bem-vindo! Somos especialistas em fornecer as melhores soluções tecnológicas para o seu negócio.</p>
      
      <CarouselHome />
      
      <h2 style={{ marginTop: '40px', textAlign: 'center' }}>Nossos Serviços (4x3)</h2>
      
      <div className="grid">
        {servicos.map(servico => (
          <Card 
            key={servico.id} 
            titulo={servico.titulo} 
            texto={servico.texto} 
            imagem={servico.imagem} 
          />
        ))}
      </div>
    </main>
  );
}

export default Home;