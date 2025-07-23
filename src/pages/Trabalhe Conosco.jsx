import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { 
    // Ícones da seção de benefícios
    GraduationCap, HeartPulse, Rocket, Award, Sparkles, Package,
    // Ícones para as novas vagas
    Warehouse, Landmark, ShoppingBag, Briefcase, School, Truck 
} from 'lucide-react';

const Careers = () => {
    const [jobView, setJobView] = useState('landing');

    // ===== NOVA LISTA DE VAGAS COM REQUISITOS MELHORADOS =====
    const vagas = [
        {
            title: 'Auxiliar de Depósito',
            status: 'open',
            link: '(link aqui)',
            icon: Warehouse,
            requirements: [
                'Ensino Fundamental Completo',
                'Disponibilidade de horário',
                'Bom relacionamento interpessoal',
                'Habilidade para trabalhar em equipe'
            ]
        },
        {
            title: 'Auxiliar Financeiro',
            status: 'open',
            link: '(link aqui)',
            icon: Landmark,
            requirements: [
                'Ensino Médio Completo',
                'Experiência prévia na área financeira',
                'Conhecimento em Microsoft Excel',
                'Disponibilidade de horário'
            ]
        },
        {
            title: 'Promotor de Vendas',
            status: 'open',
            link: '(link aqui)',
            icon: ShoppingBag,
            requirements: [
                'Ensino Médio Completo',
                'CNH categoria B (definitiva)',
                'Veículo próprio (carro)'
            ]
        },
        {
            title: 'Representante de Negócios',
            status: 'open',
            link: '(link aqui)',
            icon: Briefcase,
            requirements: [
                'Ensino Médio Completo',
                'Experiência comprovada em vendas',
                'CNH categoria B (definitiva)',
                'Veículo próprio (carro)'
            ]
        },
        {
            title: 'Jovem Aprendiz',
            status: 'open',
            link: '(link aqui)',
            icon: School,
            requirements: [
                'Idade entre 16 e 24 anos',
                'Ensino Médio (completo ou cursando)',
                'Conhecimento do Pacote Office',
                'Disponibilidade de horário'
            ]
        },
        {
            title: 'Auxiliar de Entrega',
            status: 'open',
            link: '(link aqui)',
            icon: Truck,
            requirements: [
                'Ensino Fundamental Completo',
                'Boa disposição para atividades físicas',
                'Facilidade para trabalhar em equipe',
                'Disponibilidade de horário'
            ]
        }
    ];

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
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    <div className="bg-black/30 rounded-lg p-6 flex flex-col text-center space-y-4 h-full">
                                        <Package className="w-12 h-12 text-ambev-blue self-center" />
                                        <h4 className="font-bold text-2xl text-white pt-2">Benefícios Essenciais</h4>
                                        <p className="text-white/80 text-left">✓ Vale Alimentação (R$200/mês)</p>
                                        <p className="text-white/80 text-left">✓ Vale Refeição (R$330/mês)</p>
                                        <p className="text-white/80 text-left">✓ Plano de Saúde e Odontológico</p>
                                        <p className="text-white/80 text-left">✓ Seguro de Vida</p>
                                        <p className="text-white/80 text-left">✓ Vale Transporte</p>
                                    </div>
                                    <div className="bg-black/30 rounded-lg p-6 flex flex-col text-center space-y-4 h-full">
                                        <Rocket className="w-12 h-12 text-ambev-red self-center" />
                                        <h4 className="font-bold text-2xl text-white pt-2">Carreira e Desenvolvimento</h4>
                                        <p className="text-white/80 text-left">✓ Auxílio Faculdade (50%)</p>
                                        <p className="text-white/80 text-left">✓ Plano de Carreira estruturado</p>
                                        <p className="text-white/80 text-left">✓ Treinamentos de Capacitação</p>
                                        <p className="text-white/80 text-left">✓ Suporte para renovação de CNH</p>
                                    </div>
                                    <div className="bg-black/30 rounded-lg p-6 flex flex-col text-center space-y-4 h-full">
                                        <Sparkles className="w-12 h-12 text-ambev-yellow self-center" />
                                        <h4 className="font-bold text-2xl text-white pt-2">Vantagens e Bem-estar</h4>
                                        <p className="text-white/80 text-left">✓ Gympass (desde R$39,99)</p>
                                        <p className="text-white/80 text-left">✓ Descontos em produtos Ambev</p>
                                        <p className="text-white/80 text-left">✓ Empréstimo Consignado</p>
                                        <p className="text-white/80 text-left">✓ Acompanhamento Psicológico</p>
                                    </div>
                                    <div className="bg-black/30 rounded-lg p-6 flex flex-col text-center space-y-4 h-full">
                                        <Award className="w-12 h-12 text-white self-center" />
                                        <h4 className="font-bold text-2xl text-white pt-2">Cultura e Reconhecimento</h4>
                                        <p className="text-white/80 text-left">✓ Celebração para aniversariantes</p>
                                        <p className="text-white/80 text-left">✓ Reconhecimento por tempo de casa</p>
                                        <p className="text-white/80 text-left">✓ Destaques do Mês</p>
                                        <p className="text-white/80 text-left">✓ Programa de Padrinhos</p>
                                    </div>
                                </div>
                            </motion.section>
                            <motion.section variants={itemVariants}>
                                <h2 className="font-heavy text-5xl text-center text-white mb-6">Nossa Rede de Parceiros</h2>
                                <p className="text-xl text-center text-white/80 max-w-4xl mx-auto mb-12">
                                    Nossos colaboradores e seus familiares têm acesso a uma rede de descontos exclusivos para economizar em educação, bem-estar e muito mais.
                                </p>
                                <div className="bg-black/30 rounded-lg p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                    <p className="text-white font-bold text-lg">✓ SEST SENAT e SESC</p>
                                    <p className="text-white font-bold text-lg">✓ Escolas de Idiomas (até 35%)</p>
                                    <p className="text-white font-bold text-lg">✓ Universidades (até 25%)</p>
                                    <p className="text-white font-bold text-lg">✓ Barbearia Igor Rocha (15%)</p>
                                    <p className="text-white font-bold text-lg">✓ Academia Iron Cross (10%)</p>
                                    <p className="text-white font-bold text-lg">✓ Óticas (até 20%)</p>
                                    <p className="text-white font-bold text-lg">✓ Fort Gás (desconto de R$20)</p>
                                    <p className="text-white font-bold text-lg">✓ Boutique'in (20%)</p>
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
                            <h1 className="font-heavy text-5xl text-white text-center mb-12">Vagas Disponíveis</h1>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {vagas.map((vaga) => (
                                    <div key={vaga.title} className={`bg-black/30 rounded-lg p-8 flex flex-col h-full ${vaga.status === 'closed' ? 'opacity-50' : ''}`}>
                                        <div className="flex items-center space-x-4 mb-4">
                                            <vaga.icon className="w-10 h-10 text-ambev-yellow" />
                                            <h3 className="font-bold text-2xl text-white">{vaga.title}</h3>
                                        </div>
                                        
                                        <div className="flex-grow">
                                            <h4 className="font-semibold text-lg text-white/90 mb-2">Requisitos:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-white/80">
                                                {vaga.requirements.map(req => <li key={req}>{req}</li>)}
                                            </ul>
                                        </div>
                                        
                                        <div className="mt-6">
                                            {vaga.status === 'open' ? (
                                                <Button className="w-full font-bold bg-ambev-yellow text-black hover:bg-ambev-yellow/90" asChild>
                                                    <a href={vaga.link} target="_blank" rel="noopener noreferrer">
                                                        Inscrever-se
                                                    </a>
                                                </Button>
                                            ) : (
                                                <Button disabled className="w-full font-bold">
                                                    Vaga Fechada
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-12">
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