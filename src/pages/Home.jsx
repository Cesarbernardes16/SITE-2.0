import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = ({ setActiveTab }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      key="home"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      variants={containerVariants}
      className="flex flex-col items-center"
    >
      {/* Hero Section */}
      <motion.section 
        variants={itemVariants} 
        className="min-h-[calc(100vh-15rem)] w-full flex flex-col justify-center items-center space-y-10 text-center"
      >
        {/* ===== MUDANÇA 1: Aumentado o tamanho da fonte de text-7xl para text-8xl ===== */}
        <h1 className="font-heavy text-9xl text-white drop-shadow-lg">
          Cervejaria Ambev Gran Dourados
        </h1>
        <h2 className="font-bold text-4xl text-ambev-yellow drop-shadow-[2px_2px_8px_rgba(0,0,0,0.8)]">
          Por mais razões para brindar
        </h2>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
          {/* ===== MUDANÇA 2: Estilo do botão revertido para outline (vazado) ===== */}
          <Button
            variant="outline"
            className="px-10 py-6 bg-transparent border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-black hover:border-white transform hover:scale-105 transition-all duration-300"
            asChild
          >
            <a href="https://wa.me/556734115000" target="_blank" rel="noopener noreferrer">
              Entre em Contato
            </a>
          </Button>
          <Button
            onClick={() => setActiveTab('trabalhe-conosco')}
            variant="outline"
            className="px-10 py-6 bg-transparent border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-black hover:border-white transform hover:scale-105 transition-all duration-300"
          >
            Trabalhe Conosco
          </Button>
        </div>
      </motion.section>

      {/* Highlights Section */}
      <motion.section
        variants={itemVariants}
        className="w-full max-w-6xl bg-black/00 backdrop-blur-sm rounded-lg p-8 mt-40"
      >
        <h3 className="font-heavy text-4xl text-white mb-8 text-center">
          Sua Revenda de Confiança
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center space-y-3"
          >
            <div className="p-4 bg-ambev-blue rounded-full">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-bold text-2xl text-white">Qualidade Ambev Garantida</h4>
            <p className="text-white/80">
              Produtos originais Ambev com o padrão de qualidade que você já conhece.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center space-y-3"
          >
            <div className="p-4 bg-ambev-red rounded-full">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-bold text-2xl text-white">Disponível 24h para você</h4>
            <p className="text-white/80">
              Atendimento e entregas rápidas para nunca te deixar na mão.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center space-y-3"
          >
            <div className="p-4 bg-ambev-yellow rounded-full">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-bold text-2xl text-white">As Melhores Ofertas do Mercado</h4>
            <p className="text-white/80">
              As melhores condições comerciais para o seu negócio prosperar.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Brands Section */}
      <motion.section variants={itemVariants} className="w-full max-w-5xl mt-40">
        <h3 className="font-heavy text-4xl text-white mb-8 text-center">MEGA MARCAS 2025</h3>
        <div className="flex justify-between items-center w-full">
          {[
            { alt: "Logo da marca Guarana", src: "https://www.ambev.com.br/sites/g/files/wnfebl12286/files/styles/webp/public/Projetos/Ambev-Institucional/High%20Fidelity/Venda%20Ambev/Marcas%20N%C3%A3o%20Alcoolicas/Rectangle%203433.png.webp?itok=wFUJajsp" },
            { alt: "Logo da marca Brahma", src: "https://www.ambev.com.br/sites/g/files/wnfebl12286/files/styles/webp/public/Projetos/Ambev-Institucional/High%20Fidelity/Venda%20Ambev/Marcas%20Alcoolicas/Rectangle%203429.png.webp?itok=3DPbUMMc" },
            { alt: "Logo da marca Corona", src: "https://www.ambev.com.br/sites/g/files/wnfebl12286/files/styles/webp/public/Projetos/Ambev-Institucional/High%20Fidelity/Venda%20Ambev/Marcas%20Alcoolicas/Rectangle%203426.png.webp?itok=62zwIDM_" },
            { alt: "Logo da marca Budweiser", src: "https://www.ambev.com.br/sites/g/files/wnfebl12286/files/styles/webp/public/Projetos/Ambev-Institucional/High%20Fidelity/Venda%20Ambev/Marcas%20Alcoolicas/Rectangle%203428.png.webp?itok=5bKi_oMw" },
            { alt: "Logo da marca Beats", src: "https://www.ambev.com.br/sites/g/files/wnfebl12286/files/styles/webp/public/Projetos/Ambev-Institucional/High%20Fidelity/Venda%20Ambev/Marcas%20Alcoolicas/Rectangle%203419.png.webp?itok=1zbm2m_R" },
            { alt: "Logo da marca Beats", src: "https://www.catalogoambev.com.br/images/uploads/logotipos/3348f405ddb311f5e759a92bcbc02719.png" },
          ].map((logo, index) => (
            <motion.img
              key={index}
              alt={logo.alt}
              src={logo.src}
              className="h-20 md:h-24 w-auto object-contain cursor-pointer"
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 300 }
              }}
            />
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;