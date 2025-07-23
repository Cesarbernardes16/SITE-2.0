import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { GraduationCap, HeartPulse, Rocket, Users, Sparkles, BarChart3 } from 'lucide-react';

const Careers = () => {
    const [jobView, setJobView] = useState('landing');

    // Esta função agora serve como um aviso genérico para links ainda não definidos.
    const handleApplyClick = (link) => {
        toast({
            title: "🚧 Vaga ainda não disponível!",
            description: "Fique de olho em nossas redes para futuras oportunidades.",
        });
    };

    const containerVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    };

    const itemVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            key="careers"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
        >
            <div className="w-full max-w-6xl">
                <AnimatePresence mode="wait">
                    {jobView === 'landing' && (
                        <motion.div
                            key="landing"
                            variants={containerVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="space-y-24"
                        >
                            <motion.div
                                variants={itemVariants}
                                className="bg-black/30 backdrop-blur-sm rounded-lg p-12 text-center flex flex-col items-center"
                            >
                                <h1 className="font-heavy text-5xl text-white">Faça parte da nossa equipe</h1>
                                <p className="text-xl text-white/80 mt-4 mb-8">
                                    Somos uma equipe diversa e inclusiva, sempre em busca de novos talentos para brindar ao sucesso conosco.
                                </p>
                                <Button
                                    onClick={() => setJobView('vagas')}
                                    className="px-10 py-4 bg-ambev-red text-white font-bold text-xl rounded-lg hover:bg-ambev-red/90 transition-colors"
                                >
                                    Ver Vagas e Candidatar-se
                                </Button>
                            </motion.div>

                            <motion.section variants={itemVariants}>
                                <h2 className="font-heavy text-5xl text-center text-white mb-12">Por que se juntar a nós?</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    <div className="bg-black/30 rounded-lg p-6 flex flex-col items-center text-center">
                                        <HeartPulse className="w-12 h-12 text-ambev-red mb-4" />
                                        <h4 className="font-bold text-2xl text-white mb-2">Saúde e Bem-estar</h4>
                                        <p className="text-white/80">Oferecemos planos de saúde completos para você e sua família.</p>
                                    </div>
                                    <div className="bg-black/30 rounded-lg p-6 flex flex-col items-center text-center">
                                        <GraduationCap className="w-12 h-12 text-ambev-yellow mb-4" />
                                        <h4 className="font-bold text-2xl text-white mb-2">Bolsa Universidade</h4>
                                        <p className="text-white/80">Incentivamos seu desenvolvimento com bolsas de até 50% para graduação.</p>
                                    </div>
                                    <div className="bg-black/30 rounded-lg p-6 flex flex-col items-center text-center">
                                        <Rocket className="w-12 h-12 text-ambev-blue mb-4" />
                                        <h4 className="font-bold text-2xl text-white mb-2">Crescimento Acelerado</h4>
                                        <p className="text-white/80">Oferecemos grandes possibilidades de crescimento e um plano de carreira claro.</p>
                                    </div>
                                </div>
                            </motion.section>

                            <motion.section variants={itemVariants}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-black/30 rounded-lg p-12">
                                    <div className="text-center md:text-left">
                                        <h2 className="font-heavy text-4xl text-white mb-6">Um brinde à diversidade</h2>
                                        <p className="text-xl text-white/80 leading-relaxed">
                                            Acreditamos que um time diverso é um time mais forte. Temos um compromisso ativo com a inclusão e construímos um ambiente onde todos podem ser eles mesmos e prosperar.
                                        </p>
                                    </div>
                                    <div>
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHcuZ2YgBcoigjOdBYgui9vocGaPgyu-MJRviQPIIy0M2LvS-rafvt_wc2t-Q4tlhlLLU&usqp=CAU"
                                            alt="Equipe diversa e colaborativa"
                                            className="rounded-lg shadow-2xl object-cover w-full h-80"
                                        />
                                    </div>
                                </div>
                            </motion.section>
                        </motion.div>
                    )}

                    {jobView === 'vagas' && (
                        <motion.div
                            key="vagas"
                            variants={containerVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="w-full"
                        >
                            <h1 className="font-heavy text-5xl text-white text-center mb-8">Vagas Disponíveis</h1>
                            <div className="space-y-4">
                                <Button className="w-full justify-start p-6 text-lg font-bold bg-white/10 hover:bg-white/20" asChild>
                                    <a href="https://granddos.typeform.com/to/OejwZ32V" target="_blank" rel="noopener noreferrer">
                                        Inscrição Administrativo
                                    </a>
                                </Button>
                                
                                {/* ===== BOTÃO OPERACIONAL ALTERADO ===== */}
                                <Button className="w-full justify-start p-6 text-lg font-bold bg-white/10 hover:bg-white/20" asChild>
                                    {/* Cole o link da vaga Operacional aqui */}
                                    <a href="https://granddos.typeform.com/to/i6GB06nW" target="_blank" rel="noopener noreferrer">
                                        Inscrição Operacional
                                    </a>
                                </Button>

                                <Button disabled className="w-full justify-start p-6 text-lg font-bold bg-white/10 opacity-50 cursor-not-allowed">
                                    Inscrição Vendas (Fechada)
                                </Button>
                                
                                {/* ===== BOTÃO PCD ALTERADO ===== */}
                                <Button className="w-full justify-start p-6 text-lg font-bold bg-white/10 hover:bg-white/20" asChild>
                                    {/* Cole o link da vaga PCD aqui */}
                                    <a href="https://granddos.typeform.com/to/OejwZ32V" target="_blank" rel="noopener noreferrer">
                                        Inscrição PCD (Pessoa com Deficiência)
                                    </a>
                                </Button>
                            </div>
                            <div className="text-center mt-8">
                                <Button
                                    onClick={() => setJobView('landing')}
                                    variant="outline"
                                    className="bg-transparent border-ambev-yellow text-ambev-yellow hover:bg-ambev-yellow hover:text-black"
                                >
                                    Voltar
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default Careers;