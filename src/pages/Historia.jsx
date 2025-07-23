import React from 'react';
import { motion } from 'framer-motion';

const History = () => {
  return (
    <motion.div
      key="history"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <section className="text-center mb-12">
        <h1 className="font-heavy text-5xl text-white">Nossa História</h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto mt-4">
          Construindo uma trajetória de sucesso e parceria em Gran Dourados, sempre com o compromisso de servir bem.
        </p>
      </section>

      <section className="bg-black/30 backdrop-blur-sm rounded-lg p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="w-full h-96 rounded-lg overflow-hidden">
            <img  
              alt="Fachada da distribuidora Cervejaria Ambev Gran Dourados"
              className="w-full h-full object-cover"
             src="https://images.unsplash.com/photo-1618183449970-88c6114ed12e" />
          </div>
          <div className="space-y-4">
            <h2 className="font-bold text-4xl text-ambev-yellow">De um sonho à realidade</h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Fundada em 2005, a Cervejaria Ambev Gran Dourados nasceu do desejo de trazer para a região um serviço de distribuição de bebidas que aliasse a força das grandes marcas da Ambev com um atendimento local, ágil e personalizado.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Ao longo de quase duas décadas, crescemos junto com nossos clientes, investindo em logística, tecnologia e, principalmente, em pessoas. Hoje, somos referência no mercado e nos orgulhamos de fazer parte de incontáveis brindes e celebrações em toda a cidade.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default History;