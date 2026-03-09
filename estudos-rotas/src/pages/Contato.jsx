import { useState } from "react";

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviarFormulario(e) {
    e.preventDefault();
    alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso.`);
    setNome("");
    setEmail("");
    setMensagem("");
  }

  return (
    <main className="container">
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Fale Conosco</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <form onSubmit={enviarFormulario} className="form">
          <input
            type="text"
            placeholder="Seu Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Seu E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Como podemos te ajudar?"
            rows="5"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          />
          <button type="submit">Enviar Mensagem</button>
        </form>
      </div>
    </main>
  );
}

export default Contato;