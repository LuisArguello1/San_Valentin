import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { useRef, useState } from 'react';
import content from '../data/story';

const ProductCard = ({ product, index }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Detectar móvil para optimización
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;


    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]),
        { stiffness: 100, damping: 30 }
    );

    const scale = useSpring(
        useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.85, 1, 1, 0.9]),
        { stiffness: 100, damping: 30 }
    );

    const y = useSpring(
        useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [150, 0, 0, -100]),
        { stiffness: 100, damping: 30 }
    );

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
        stiffness: 150,
        damping: 20
    });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
        stiffness: 150,
        damping: 20
    });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
        setIsHovered(false);
    };

    const handleWhatsAppClick = () => {
        // Obtener la URL completa de la imagen
        const imageUrl = window.location.origin + product.image;
        const message = `Hola! Me interesa el producto:\n\n*${product.name}*\nPrecio: ${product.price}\n\n${product.description}\n\n📸 Ver imagen:\n${imageUrl}`;
        const encodedMessage = encodeURIComponent(message);

        const whatsappUrl = `https://wa.me/${content.contact.whatsapp}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    const isEven = index % 2 === 0;

    // Layout diferenciado para Móvil (Tarjeta Unificada) vs Desktop (Diseño Flotante)
    if (isMobile) {
        return (
            <motion.div
                ref={cardRef}
                className="relative w-full max-w-sm mx-auto mb-24 rounded-[2rem] bg-white/[0.03] border border-white/10 overflow-hidden shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* 1. Imagen Superior Full Width */}
                <div className="relative aspect-[4/5] w-full overflow-hidden ">
                    <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />

                    {/* Gradiente sutil sobre la imagen para texto */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b10] via-transparent to-transparent opacity-60" />

                    {/* Badge de Categoría Flotante */}
                    <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest text-white/90 font-medium">
                            {product.category === 'premium' ? 'Premium' :
                                product.category === 'especial' ? 'Especial' :
                                    product.category === 'funko' ? 'Funko' : 'Detalle'}
                        </span>
                    </div>

                    {/* Número índice sutil */}
                    <div className="absolute bottom-2 left-4 text-6xl font-bold text-white/10 font-serif leading-none">
                        {String(index + 1).padStart(2, '0')}
                    </div>
                </div>

                {/* 2. Contenido Inferior */}
                <div className="p-6 flex flex-col gap-5 bg-[#0b0b10]">
                    <div>
                        <h3 className="text-3xl font-bold leading-tight text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                            {product.name}
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
                            {product.description}
                        </p>
                    </div>

                    {/* Separador */}
                    <div className="h-px w-full bg-white/5" />

                    {/* 3. Footer: Precio y Acción */}
                    <div className="flex flex-col items-center justify-center gap-5 pt-2">
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Precio</span>
                            <span className="text-3xl font-bold bg-gradient-to-r from-[#ff4d6d] to-[#ffd700] bg-clip-text text-transparent" style={{ fontFamily: "'Playfair Display', serif" }}>
                                {product.price}
                            </span>
                        </div>

                        <button
                            onClick={handleWhatsAppClick}
                            className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg active:scale-95 transition-transform"
                        >
                            <FaWhatsapp className="text-xl" />
                            <span className="text-base">Pedir Ahora</span>
                        </button>
                    </div>
                </div>
            </motion.div>
        );
    }

    // Diseño Desktop Original
    return (
        <motion.div
            ref={cardRef}
            className="relative w-full max-w-7xl mx-auto mb-32 last:mb-16 px-4"
            style={{ opacity, scale, y }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 sm:gap-12 lg:gap-16 items-center justify-center`}>

                {/* Imagen del Producto */}
                <motion.div
                    className="w-full lg:w-1/2 max-w-lg relative perspective-1000"
                    style={{
                        rotateX: isHovered ? rotateX : 0,
                        rotateY: isHovered ? rotateY : 0,
                    }}
                >
                    <motion.div
                        className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-[#ff4d6d]/20 via-[#ff6b9d]/20 to-[#ffd700]/20 rounded-[3rem] blur-3xl"
                        animate={{
                            opacity: isHovered ? 0.6 : 0.3,
                            scale: isHovered ? 1.1 : 1
                        }}
                        transition={{ duration: 0.6 }}
                    />

                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                        <div className="aspect-square relative bg-gradient-to-br from-[#1a1a1f] to-[#0f0f14]">
                            <motion.img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                                animate={{
                                    scale: isHovered ? 1.1 : 1
                                }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            />

                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                                animate={{
                                    opacity: isHovered ? 0.4 : 0.6
                                }}
                                transition={{ duration: 0.4 }}
                            />

                            <motion.div
                                className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 text-7xl sm:text-8xl md:text-9xl font-bold text-white/5 select-none"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                {String(index + 1).padStart(2, '0')}
                            </motion.div>
                        </div>

                        {product.category === 'premium' && (
                            <motion.div
                                className="absolute top-4 sm:top-6 right-4 sm:right-6"
                                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", delay: 0.5 }}
                            >
                                <div className="relative">
                                    <div className="relative bg-gradient-to-r from-[#ffd700] to-[#ffed4e] px-4 sm:px-5 py-2 sm:py-3 rounded-2xl shadow-2xl">
                                        <span className="text-black font-bold text-xs tracking-widest flex items-center gap-2">
                                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            PREMIUM
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        <motion.div
                            className="absolute inset-0 rounded-[2.5rem] ring-1 ring-white/10 pointer-events-none"
                            animate={{
                                ringColor: isHovered ? 'rgba(255, 77, 109, 0.4)' : 'rgba(255, 255, 255, 0.1)'
                            }}
                            transition={{ duration: 0.4 }}
                        />
                    </div>
                </motion.div>

                {/* Detalles del Producto */}
                <div className="w-full lg:w-1/2 max-w-lg flex flex-col justify-center text-center lg:text-left">
                    <motion.div
                        className="mb-6 flex items-center justify-center lg:justify-start gap-3"
                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <motion.div
                            className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#ff4d6d]"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        />
                        <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#ff4d6d] font-semibold">
                            {product.category === 'premium' ? 'Colección Premium' :
                                product.category === 'especial' ? 'Especial' :
                                    product.category === 'funko' ? 'Funko Pop' : 'Detalle'}
                        </span>
                    </motion.div>

                    <motion.h3
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight text-white"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        {product.name}
                    </motion.h3>

                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-white/60 mb-8 sm:mb-10 leading-relaxed max-w-md mx-auto lg:mx-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        {product.description}
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <div className="flex flex-col items-center lg:items-start">
                            <span className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2 font-medium">
                                Precio
                            </span>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <span
                                    className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#ff4d6d] via-[#ff6b9d] to-[#ffd700] bg-clip-text text-transparent relative"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    {product.price}
                                </span>
                            </motion.div>
                        </div>

                        <motion.button
                            onClick={handleWhatsAppClick}
                            className="group relative px-8 sm:px-10 py-5 sm:py-5 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full overflow-hidden shadow-2xl w-full sm:w-auto sm:min-w-[240px]"
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                animate={{
                                    x: ['-200%', '200%']
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />

                            <span className="relative z-10 flex items-center gap-3 sm:gap-4 text-white font-bold text-lg sm:text-xl justify-center">
                                <FaWhatsapp className="text-2xl sm:text-3xl" />
                                <span className="tracking-wide">Pedir Ahora</span>
                            </span>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;