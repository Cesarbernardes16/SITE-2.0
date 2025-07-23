import React from 'react';
import { motion } from 'framer-motion';
import Carousel from '@/components/Carousel';

const Products = () => {
    const alcoholicBrands = [
        { name: 'Stella Artois', imageUrl: 'https://gsd.com.mt/wp-content/uploads/2023/02/Stella-Artois-Logo.jpg' },
        { name: 'Skol', imageUrl: 'https://i.pinimg.com/736x/b7/85/9c/b7859ca046c905179213827340ba1c42.jpg' },
        { name: 'Brahma', imageUrl: 'https://www.logotypes101.com/logos/77/34347BF8272FF6E879B4D682A7971F7B/Brahma.png' },
        { name: 'Corona', imageUrl: 'https://seeklogo.com/images/C/corona-extra-logo-C02C842664-seeklogo.com.png' },
        { name: 'Becks', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ78WisCJSj4sEEg1MEO6S6-0w0nQl_2fJRw&s' },
        { name: 'Budweiser', imageUrl: 'https://cdn.worldvectorlogo.com/logos/budweiser.svg' },
        { name: 'Spaten', imageUrl: 'https://1000logos.net/wp-content/uploads/2020/03/Spaten-logo.jpg' },
        { name: 'Brahma', imageUrl: 'https://www.logotypes101.com/logos/77/34347BF8272FF6E879B4D682A7971F7B/Brahma.png' },
    ];

    const nonAlcoholicBrands = [
        { name: 'Guaraná Antarctica', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5vQP_oDrFeMcTOEV3KiV6D_dWT1JeIVzqtA&s' },
        { name: 'Pepsi', imageUrl: 'https://fariart.com.br/blog/wp-content/uploads/2023/03/pepsi-2014-logo-1.jpg' },
        { name: 'H2OH!', imageUrl: 'https://images.seeklogo.com/logo-png/48/2/h2oh-logo-png_seeklogo-489196.png' },
        { name: 'Gatorade', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfg7mHcaLWFoxcsoFyT-zPbQd44_kBR0V5Aw&s' },
        { name: 'Tonica', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3kyyBuumepCsOzeTHK0Uz1XG_Az-3-B1arA&s' },
        { name: 'Fusion', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9j2e8UTx0OQfdgWRF_APz9Ij_auh1jmeFNQ&s' },
        { name: 'H2OH!', imageUrl: 'https://images.seeklogo.com/logo-png/48/2/h2oh-logo-png_seeklogo-489196.png' },
        { name: 'Tonica', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3kyyBuumepCsOzeTHK0Uz1XG_Az-3-B1arA&s' },
    ];

    const marketplaceBrands = [
        { name: 'Jack Daniels', imageUrl: 'https://www.bickerybbq.com/cdn/shop/collections/Brands-Jack_Daniels.png?v=1740319088' },
        { name: 'WhiteHorse', imageUrl: 'https://img.elo7.com.br/product/zoom/4CDB7EB/placa-decorativa-whisky-cavalo-branco-relevo-bar-restaurante-branco.jpg' },
        { name: 'Johnnie Walker', imageUrl: 'https://cdn.worldvectorlogo.com/logos/johnnie-walker-3.svg' },
        { name: 'Chivas', imageUrl: 'https://i.pinimg.com/736x/d2/75/36/d27536ca15fa55a5d7eb86d6889ecf9f.jpg' },
        { name: 'Ballantines', imageUrl: 'https://i.pinimg.com/736x/0c/af/85/0caf85447031c7918b628810951cd1ad.jpg' },
        { name: 'Tanqueay', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlP0CZQKTpEQPssR_QVxnhZzPik6n-NeYTcg&s' },
        { name: 'Johnnie Walker', imageUrl: 'https://cdn.worldvectorlogo.com/logos/johnnie-walker-3.svg' },
        { name: 'Chivas', imageUrl: 'https://i.pinimg.com/736x/d2/75/36/d27536ca15fa55a5d7eb86d6889ecf9f.jpg' },
    ];

    const wineBrands = [
        { name: 'Vinho Robino', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-7sqmkGAGDIYe56R39oRg_o6FVzMrsq3pGw&s' },
        { name: 'Vinho Rosé', imageUrl: 'https://boa.vtexassets.com/arquivos/ids/581899/Vinho-Tinto-Malbec-Argentino-Novecento-750ml.jpg?v=638605624329100000' },
        { name: 'Espumante', imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_827226-MLB84357290587_052025-O-vinho-argentino-gran-dante-malbec-safra-2019.webp' },
        { name: 'Espumante', imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_827226-MLB84357290587_052025-O-vinho-argentino-gran-dante-malbec-safra-2019.webp' },
    ];

    return (
        <motion.div
            key="products"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <section className="text-center mb-12">
                <h1 className="font-heavy text-5xl text-white">Nossas Marcas Parceiras</h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto mt-4">
                    Trabalhamos com o portfólio completo da Ambev e outras marcas selecionadas para oferecer a maior variedade e qualidade para o seu negócio.
                </p>
            </section>
            
            {/* As classes de estilo foram removidas desta section */}
            <section>
                <Carousel brands={alcoholicBrands} title="Alcoólicas" />
                <Carousel brands={nonAlcoholicBrands} title="Não-Alcoólicas" />
                <Carousel brands={marketplaceBrands} title="Marketplace" />
                <Carousel brands={wineBrands} title="Vinhos" />
            </section>
        </motion.div>
    );
};

export default Products;