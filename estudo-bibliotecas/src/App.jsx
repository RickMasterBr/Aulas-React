import { useState, useEffect, useRef } from "react";

// 1. Framer Motion (Animações de entrada)
import { motion } from 'framer-motion';
// 2. Typewriter Effect (Texto digitando)
import Typewriter from 'typewriter-effect';
// 3. React Fast Marquee (Carrossel infinito)
import Marquee from 'react-fast-marquee';
// 4. React Parallax Tilt (Cards em 3D)
import Tilt from 'react-parallax-tilt';
// 5. Swiper (Carrossel dinâmico)
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// 6 & 7. React Hot Toast e Confetti (Notificações e Efeitos)
import toast, { Toaster } from 'react-hot-toast';
import Confetti from 'react-confetti';
// 8. AutoAnimate (Listas fluidas)
import { useAutoAnimate } from '@formkit/auto-animate/react';
// 9. Lucide React (Ícones)
import { Rocket, Trash2, Plus, Zap, Info } from 'lucide-react';

// --- NOVAS BIBLIOTECAS ---
// 10. React CountUp (Números animados)
import CountUp from 'react-countup';
// 11. React Tooltip (Balões de informação)
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'; // Estilo obrigatório do tooltip
// 12. React Draggable (Elementos arrastáveis)
import Draggable from 'react-draggable';

import './App.css';

export default function App() {

  const [showConfetti, setShowConfetti] = useState(false);
  const [items, setItems] = useState(['Água', 'Café', 'Suco']);
  const [parent] = useAutoAnimate();
  const dragRef = useRef(null);

  // Função pra testar toast + confetti
  const dispararAcao = () => {
    toast.success('Parabéns! Ação realizada com sucesso!', {
      style: { borderRadius: '10px', background: '#333', color: '#fff' },
    });
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  }

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const adicionarItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  const removerItem = (indexParaRemover) => {
    setItems(items.filter((_, index) => index !== indexParaRemover));
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '1200px', margin: '0 auto', overflowX: 'hidden' }}>
      <Toaster position="top-center" />
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
        />
      )}

      {/* --- SEÇÃO 1: HERO --- */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        <Rocket size={48} color="#646cff" style={{ margin: '0 auto' }} />
        <h1>Laboratório de Bibliotecas</h1>
        <h2 style={{ color: '#666', height: '40px' }}>
          <Typewriter
            options={{
              strings: [
                'Desenvolvendo o Projeto Nexus...',
                'Focado em React e Vite...',
                'Criando interfaces com um design natural...'
              ],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </h2>
      </motion.header>

      {/* --- SEÇÃO 2: MARQUEE --- */}
      <div style={{ marginBottom: '3rem', background: 'grey', padding: '1rem', borderRadius: '8px' }}>
        <Marquee speed={60} gradient={true} gradientColor={[241, 241, 241]}>
          <span style={{ margin: '0 30px', fontWeight: 'bold', color: '#000' }}>React</span> •
          <span style={{ margin: '0 30px', fontWeight: 'bold', color: '#000' }}>Vite</span> •
          <span style={{ margin: '0 30px', fontWeight: 'bold', color: '#000' }}>Next.js</span> •
          <span style={{ margin: '0 30px', fontWeight: 'bold', color: '#000' }}>Fastify</span> •
          <span style={{ margin: '0 30px', fontWeight: 'bold', color: '#000' }}>O Botafogo é Maior</span> •
        </Marquee>
      </div>

      {/* --- NOVA SEÇÃO 6: ESTATÍSTICAS (React CountUp) --- */}
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '3rem 0', background: '#242424', padding: '2rem', borderRadius: '12px', color: 'white' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', margin: 0, color: '#646cff' }}>
            {/* Conta de 0 a 100 em 3 segundos */}
            <CountUp end={100} duration={3} suffix="%" />
          </h2>
          <p style={{ margin: '0.5rem 0 0 0' }}>Foco nos Estudos</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', margin: 0, color: '#fbbf24' }}>
            {/* Conta de 0 a 2026, sem separador de milhar */}
            <CountUp end={2026} duration={2.5} useEasing={true} separator="" />
          </h2>
          <p style={{ margin: '0.5rem 0 0 0' }}>Ano de Lançamento</p>
        </div>
      </div>

      {/* --- SEÇÃO 3: CARDS 3D --- */}
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', justifyContent: 'center' }}>
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
          <div style={{ padding: '2rem', background: 'grey', color: 'white', borderRadius: '12px', width: '250px', cursor: 'pointer' }}>
            <Zap size={32} color="#fbbf24" />
            <h3>Alta Performance</h3>
            <p>Efeito suave ao passar o mouse.</p>
          </div>
        </Tilt>
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
          <div style={{ padding: '2rem', background: 'grey', color: 'white', borderRadius: '12px', width: '250px', cursor: 'pointer' }}>
            <Zap size={32} color="#fbbf24" />
            <h3>Experiência Fluida</h3>
            <p>A física imita a realidade.</p>
          </div>
        </Tilt>
      </div>

      {/* --- NOVA SEÇÃO 7: INTERATIVIDADE (Tooltip + Draggable) --- */}
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '4rem', alignItems: 'center', justifyContent: 'center' }}>

        {/* Tooltip */}
        <div
          data-tooltip-id="dica-nexus"
          data-tooltip-content="Ferramentas modernas otimizam o tempo de desenvolvimento em até 40%!"
          style={{ padding: '1rem 2rem', background: '#ddd', borderRadius: '8px', cursor: 'help', display: 'flex', alignItems: 'center', gap: '8px', color: '#333' }}
        >
          <Info size={20} /> Passe o mouse aqui
        </div>
        <Tooltip id="dica-nexus" place="top" effect="solid" style={{ borderRadius: '8px', backgroundColor: '#333', fontWeight: 'bold' }} />

        {/* Draggable */}
        <Draggable nodeRef={dragRef}>
          <div
            ref={dragRef}
            style={{
              padding: '1rem 2rem',
              background: '#646cff',
              color: 'white',
              borderRadius: '8px',
              cursor: 'grab',
              boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
              userSelect: 'none'
            }}
          >
            Arraste-me pela tela! 🖐️
          </div>
        </Draggable>

      </div>

      {/* --- SEÇÃO 4: LISTA ANIMADA --- */}
      <div style={{ marginBottom: '3rem', maxWidth: '400px', margin: '0 auto 3rem auto' }}>
        <h3>Lista Dinâmica</h3>
        <button onClick={adicionarItem} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Plus size={16} /> Adicionar
        </button>
        <ul ref={parent} style={{ listStyle: 'none', padding: 0 }}>
          {items.map((item, index) => (
            <li key={item} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: 'grey', marginBottom: '8px', borderRadius: '6px' }}>
              {item}
              <Trash2 size={18} color="red" cursor="pointer" onClick={() => removerItem(index)} />
            </li>
          ))}
        </ul>
      </div>

      {/* --- SEÇÃO 5: SWIPER & AÇÃO FINAL --- */}
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <Swiper spaceBetween={20} slidesPerView={1} style={{ marginBottom: '2rem' }}>
          <SwiperSlide><div style={{ background: 'grey', padding: '4rem', borderRadius: '12px' }}>Slide 1</div></SwiperSlide>
          <SwiperSlide><div style={{ background: 'grey', padding: '4rem', borderRadius: '12px' }}>Slide 2</div></SwiperSlide>
          <SwiperSlide><div style={{ background: 'grey', padding: '4rem', borderRadius: '12px' }}>Slide 3</div></SwiperSlide>
        </Swiper>

        <button
          onClick={dispararAcao}
          style={{ padding: '1rem 2rem', fontSize: '1.2rem', background: '#646cff', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
        >
          Finalizar Teste!
        </button>
      </div>
    </div>
  );
}