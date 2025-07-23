import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { AnimatePresence } from 'framer-motion';

import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Home from '@/pages/Home';
import Products from '@/pages/Serviço e Produtos';
import History from '@/pages/Historia';
import Careers from '@/pages/Trabalhe Conosco';
import Contact from '@/pages/Contato';
import Pagina from '@/pages/Pagina'; // Importar a nova página

function App() {
  const [activeTab, setActiveTab] = useState('inicio');

  const renderContent = () => {
    switch (activeTab) {
      case 'inicio':
        return <Home setActiveTab={setActiveTab} />;
      case 'servicos-produtos':
        return <Products />;
      case 'nossa-historia':
        return <History />;
      case 'trabalhe-conosco':
        return <Careers />;
      case 'pagina': // Adicionar o case para a nova página
        return <Pagina />;
      case 'contato':
        return <Contact />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Cervejaria Ambev Gran Dourados - Por mais razões para brindar</title>
        <meta name="description" content="Sua distribuidora de bebidas Ambev em Gran Dourados. Qualidade, confiança e os melhores preços." />
      </Helmet>

      <div className="min-h-screen font-sans">
        <div 
          className="fixed inset-0 w-full h-full -z-20 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=1974&auto=format&fit=crop')`}}
        ></div>
        <div className="fixed inset-0 w-full h-full -z-10 bg-black/40 backdrop-blur-md"></div>
        
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="container mx-auto px-4 pt-32 pb-16">
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </main>

        <Toaster />
      </div>
    </>
  );
}

export default App;