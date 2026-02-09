import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import content from '../data/story';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    const scrollToProducts = () => {
        document.getElementById('productos')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <div ref={containerRef} className="relative min-h-[100dvh] overflow-hidden flex flex-col justify-center">
            <motion.section
                className="relative h-full flex items-center justify-center px-6 sm:px-8 lg:px-12 z-10 py-20 sm:py-24 lg:py-8"
                style={{ opacity, scale }}
            >
                <div className="w-full max-w-7xl mx-auto text-center flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-10 lg:gap-6">
                    {/* Badge decorativo */}
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, y: -30, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                            type: "spring",
                            stiffness: 200
                        }}
                    >
                        <div className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-10 py-3 sm:py-4 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl glass-panel">
                            <motion.span
                                className="text-2xl sm:text-3xl md:text-4xl"
                                animate={{
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.2, 1]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                💕
                            </motion.span>
                            <span className="text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] text-[#ff6b9d] font-medium uppercase">
                                San Valentín 2026
                            </span>
                        </div>
                    </motion.div>

                    {/* Título principal */}
                    <div className="w-full">
                        <motion.h1
                            className="text-[2.5rem] leading-[1.15] sm:text-6xl sm:leading-[1.1] md:text-7xl lg:text-8xl xl:text-[7rem] font-bold tracking-tight px-4 sm:px-6"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-white/90 mb-4 sm:mb-5 md:mb-7"
                            >
                                Este San Valentín,
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="relative"
                            >
                                <span className="relative inline-block">
                                    <span className="absolute inset-0 blur-xl sm:blur-2xl bg-gradient-to-r from-[#ff4d6d] to-[#ff6b9d] opacity-40 sm:opacity-50" />
                                    <span className="relative bg-gradient-to-r from-[#ff4d6d] via-[#ff6b9d] to-[#ffd700] bg-clip-text text-transparent">
                                        regala más que flores
                                    </span>
                                </span>
                            </motion.div>
                        </motion.h1>
                    </div>

                    {/* Subtítulo */}
                    <motion.p
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl lg:max-w-3xl mx-auto font-light leading-relaxed px-6 sm:px-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        Arreglos únicos, hechos con amor para expresar lo que tu corazón siente
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-5 sm:gap-6 px-6 sm:px-8 w-full sm:w-auto max-w-md sm:max-w-none mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <motion.button
                            onClick={scrollToProducts}
                            className="group relative px-10 sm:px-12 py-5 sm:py-6 bg-gradient-to-r from-[#ff4d6d] to-[#ff6b9d] rounded-full overflow-hidden shadow-2xl w-full sm:w-auto sm:min-w-[260px]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-[#ff6b9d] to-[#ffd700] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            />
                            <span className="relative z-10 font-semibold text-white text-base sm:text-lg flex items-center justify-center gap-3">
                                Ver Arreglos
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </motion.button>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        className="inline-flex flex-col items-center gap-4 sm:gap-5 mt-4 sm:mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                    >
                        <span className="text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/40 font-light">
                            Descubre más
                        </span>
                        <motion.div
                            className="relative"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="w-7 h-11 sm:w-8 sm:h-12 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
                                <motion.div
                                    className="w-1.5 h-3 bg-gradient-to-b from-[#ff4d6d] to-transparent rounded-full"
                                    animate={{ y: [0, 16, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default Hero;