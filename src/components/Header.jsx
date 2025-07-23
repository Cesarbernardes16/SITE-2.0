import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShoppingCart, BookOpen, Briefcase, Phone, FileText, Menu, X } from 'lucide-react';

const Header = ({ activeTab, setActiveTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Início', icon: Star },
    { id: 'servicos-produtos', label: 'Serviços e Produtos', icon: ShoppingCart },
    { id: 'nossa-historia', label: 'Nossa História', icon: BookOpen },
    { id: 'trabalhe-conosco', label: 'Trabalhe Conosco', icon: Briefcase },
    { id: 'pagina', label: 'Pagina', icon: FileText },
    { id: 'contato', label: 'Contato', icon: Phone }
  ];

  const mobileMenuVariants = {
    opened: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
    closed: {
      opacity: 0,
      y: '-100%',
      transition: { duration: 0.2 }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg">
      <nav className="container mx-auto px-4">
        {/* A classe 'justify-between' foi trocada por 'justify-end md:justify-center' */}
        <div className="flex justify-end md:justify-center items-center h-24">
          
          {/* O Título "Ambev Gran Dourados" foi removido daqui */}

          {/* Menu para Desktop (escondido em telas pequenas) */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.id} className="relative">
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 pb-2 text-lg transition-colors duration-300 ${
                    activeTab === item.id ? 'text-ambev-yellow' : 'text-white hover:text-ambev-yellow/80'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-bold">{item.label}</span>
                </button>
                {activeTab === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-ambev-yellow rounded-full"
                    layoutId="underline"
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Botão do Menu Hambúrguer (visível apenas em telas pequenas) */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-8 h-8 text-white" /> : <Menu className="w-8 h-8 text-white" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Suspenso para Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="absolute top-24 left-0 w-full bg-black/80 backdrop-blur-lg md:hidden"
          >
            <ul className="flex flex-col items-center space-y-4 py-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileMenuOpen(false); // Fecha o menu ao clicar
                    }}
                    className={`flex items-center space-x-2 p-4 text-2xl transition-colors duration-300 ${
                      activeTab === item.id ? 'text-ambev-yellow' : 'text-white'
                    }`}
                  >
                    <item.icon className="w-6 h-6" />
                    <span className="font-bold">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;