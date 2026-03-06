import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';

function App() {
  return (
    <BrowserRouter>
      
      <Menu /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      
      <Footer />
    </BrowserRouter>
  );
}

export default App;