import React from 'react';
import { motion } from 'framer-motion';

const Pagina = () => {
  return (
    <motion.div
      key="pagina"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h1 className="font-heavy text-5xl text-white">Página em Construção</h1>
      <p className="text-xl text-white/80 max-w-3xl mx-auto mt-4">
        Este espaço será preenchido com novidades em breve!
      </p>
    </motion.div>
  );
};

export default Pagina;