function Card({ titulo, texto, imagem }) {
    return (
      <div className="card">
        <img src={imagem} alt={titulo} />
        <h3>{titulo}</h3>
        <p>{texto}</p>
      </div>
    );
  }
  
  export default Card;