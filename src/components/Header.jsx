import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, BookOpen, Briefcase, Phone, FileText } from 'lucide-react'; // Importar um ícone para a nova página

const Header = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'inicio', label: 'Início', icon: Star },
    { id: 'servicos-produtos', label: 'Serviços e Produtos', icon: ShoppingCart },
    { id: 'nossa-historia', label: 'Nossa História', icon: BookOpen },
    { id: 'trabalhe-conosco', label: 'Trabalhe Conosco', icon: Briefcase },
    { id: 'pagina', label: 'Pagina', icon: FileText }, // Adicionar a nova aba
    { id: 'contato', label: 'Contato', icon: Phone }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg">
      <nav className="container mx-auto px-4">
        <div className="flex justify-center items-center h-24">
          <ul className="flex items-center space-x-10">
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
        </div>
      </nav>
    </header>
  );
};

export default Header;