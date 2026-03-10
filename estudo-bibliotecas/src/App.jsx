import { useState } from "react";

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
import { Rocket, Trash2, Plus, Zap } from 'lucide-react';

import './App.css';

export default function App() {

  const[showConfetti, setShowConfetti] = useState(false);
  const[items, setItems ] = useState(['Água', 'Café', 'Suco']);
  const [parent] = useAutoAnimate();

  //funcão pra testar toast + confetti
  const dispararAcao = () => {
    toast.success('Parabéns! Ação realizada com sucesso!', {
      style: { borderRadius: '10px', background: '#333', color: '#fff'},
    });
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  }

  const adicionarItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  const removerItem = (indexParaRemover) => {
    setItems(items.filter((_, index) => index !== indexParaRemover));
  };


  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* O Toaster precisa ficar em algum lugar do App para os alertas aparecerem */}
      <Toaster position="top-center" />
      {showConfetti && <Confetti recycle={false} numberOfPieces={500} />}

      {/* --- SEÇÃO 1: HERO (Framer Motion + Typewriter) --- */}
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

      {/* --- SEÇÃO 2: MARQUEE (React Fast Marquee) --- */}
      <div style={{ marginBottom: '3rem', background: 'grey', padding: '1rem', borderRadius: '8px' }}>
        <Marquee speed={60} gradient={true} gradientColor={[241, 241, 241]}>
          <span style={{ margin: '0 30px', fontWeight: 'bold', color: '#000' }}>React</span> •
          <span style={{ margin: '0 30px', fontWeight: 'bold', color: '#000' }}>Vite</span> •
          <span style={{ margin: '0 30px', fontWeight: 'bold', color: '#000' }}>Next.js</span> •
          <span style={{ margin: '0 30px', fontWeight: 'bold', color: '#000' }}>Fastify</span> •
          <span style={{ margin: '0 30px', fontWeight: 'bold', color: '#000' }}>O Botafogo é Maior</span> •
        </Marquee>
      </div>

      {/* --- SEÇÃO 3: CARDS 3D (React Parallax Tilt) --- */}
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

      {/* --- SEÇÃO 4: LISTA ANIMADA (AutoAnimate + Lucide) --- */}
      <div style={{ marginBottom: '3rem', maxWidth: '400px', margin: '0 auto 3rem auto' }}>
        <h3>Lista Dinâmica</h3>
        <button onClick={adicionarItem} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Plus size={16} /> Adicionar
        </button>
        {/* A prop 'ref={parent}' é tudo que o AutoAnimate precisa para animar o que entra e sai da ul */}
        <ul ref={parent} style={{ listStyle: 'none', padding: 0 }}>
          {items.map((item, index) => (
            <li key={item} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: 'grey',marginBottom: '8px', borderRadius: '6px' }}>
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