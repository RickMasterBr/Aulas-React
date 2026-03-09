import produtos from "../data/produtos.json";
import Card from "../components/Card";

function Produtos() {
  return (
    <main className="container">
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Nossos Produtos</h1>
      <p style={{ textAlign: 'center', marginBottom: '40px' }}>
        Conheça a nossa linha completa de produtos de alta performance:
      </p>
      
      <div className="grid">
        {produtos.map(produto => (
          <Card
            key={produto.id}
            titulo={produto.nome}
            texto={produto.descricao}
            imagem={produto.imagem}
          />
        ))}
      </div>
    </main>
  );
}

export default Produtos;