import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div
      key="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <section className="text-center mb-12">
        <h1 className="font-heavy text-5xl text-white">Fale Conosco</h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto mt-4">
          Tem alguma dúvida ou sugestão? Nossa equipe está pronta para te atender.
        </p>
      </section>

      <section className="bg-black/30 backdrop-blur-sm rounded-lg p-12">
        <div className="grid md:grid-cols-3 gap-8 text-white">
          <div className="flex flex-col items-center text-center space-y-3">
             <div className="p-4 bg-ambev-blue rounded-full"><Phone className="w-8 h-8 text-white"/></div>
             <h3 className="font-bold text-2xl">Telefone</h3>
             <p className="text-lg">(67) 3411-5000</p>
             <a href="https://wa.me/556734115000" target="_blank" rel="noopener noreferrer" className="text-ambev-yellow hover:underline">
                Chamar no WhatsApp
            </a>
          </div>
           <div className="flex flex-col items-center text-center space-y-3">
             <div className="p-4 bg-ambev-red rounded-full"><Mail className="w-8 h-8 text-white"/></div>
             <h3 className="font-bold text-2xl">Email</h3>
             <p className="text-lg">contato@grandourados.com.br</p>
             <span className="text-white/70">(Retorno em até 24h)</span>
          </div>
           <div className="flex flex-col items-center text-center space-y-3">
             <div className="p-4 bg-ambev-yellow rounded-full"><MapPin className="w-8 h-8 text-white"/></div>
             <h3 className="font-bold text-2xl">Endereço</h3>
             <p className="text-lg">Av. Marcelino Pires, 1234</p>
             <span className="text-white/70">Dourados - MS</span>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;