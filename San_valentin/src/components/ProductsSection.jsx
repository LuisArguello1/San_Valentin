import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import products from '../data/products';
import content from '../data/story';

const ProductsSection = () => {
    return (
        <section
            id="productos"
            className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden flex justify-center items-center"
        >
            <div className="w-full max-w-7xl mx-auto relative z-10">
                {/* Header de la sección */}
                <motion.div
                    className="text-center mb-20 sm:mb-28 flex flex-col justify-center items-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                >
                    {/* Badge decorativo */}
                    <motion.div
                        className="flex justify-center mb-8"
                        initial={{ opacity: 0, scale: 0.8, y: -20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", delay: 0.2 }}
                    >
                        <div className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl glass-panel">
                            <motion.span
                                className="text-2xl sm:text-3xl"
                                animate={{
                                    rotate: [0, -10, 10, 0],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                💝
                            </motion.span>
                            <span className="text-sm sm:text-base tracking-[0.3em] text-[#ff6b9d] font-semibold uppercase">
                                Nuestros Productos
                            </span>
                        </div>
                    </motion.div>

                    {/* Título principal */}
                    <motion.h2
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 px-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <span className="relative inline-block">
                            <motion.span
                                className=""
                                animate={{
                                    opacity: [0.3, 0.5, 0.3]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                            <span className="relative text-white">
                                {content.products.title}
                            </span>
                        </span>
                    </motion.h2>

                    {/* Subtítulo */}
                    <motion.p
                        className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        {content.products.subtitle}
                    </motion.p>

                    {/* Línea decorativa */}
                    <motion.div
                        className="relative mt-8 sm:mt-10 h-px w-32 sm:w-48 mx-auto overflow-hidden"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 1 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff4d6d] to-transparent" />
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                            animate={{
                                x: ['-100%', '200%']
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                        />
                    </motion.div>
                </motion.div>

                {/* Grid de productos */}
                <div className="flex flex-col items-center space-y-12 sm:space-y-16">
                    {products.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            index={index}
                        />
                    ))}
                </div>

                {/* CTA final */}
                <motion.div
                    className="mt-24 sm:mt-32 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Decoración superior */}
                    <motion.div
                        className="flex justify-center items-center gap-4 mb-8"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", delay: 0.2 }}
                    >
                        <motion.div
                            className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#ff4d6d]"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                        />
                        <span className="text-xl sm:text-2xl">💌</span>
                        <motion.div
                            className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#ff4d6d]"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                        />
                    </motion.div>

                    <motion.p
                        className="text-xl sm:text-2xl md:text-3xl text-white/80 mb-8 sm:mb-10 font-light px-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        ¿No encontraste lo que buscabas?
                    </motion.p>

                    <motion.a
                        href={`https://wa.me/${content.contact.whatsapp}?text=${encodeURIComponent(content.contact.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 backdrop-blur-xl bg-white/5 border-2 border-white/10 hover:border-[#ff4d6d]/50 rounded-full transition-all duration-500 shadow-2xl relative overflow-hidden glass-panel"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-[#ff4d6d]/0 via-[#ff4d6d]/20 to-[#ff4d6d]/0 opacity-0 group-hover:opacity-100"
                            animate={{
                                x: ['-100%', '100%']
                            }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        />

                        <span className="relative font-bold text-white text-base sm:text-lg">
                            Contáctanos
                        </span>
                        <motion.svg
                            className="relative w-5 h-5 sm:w-6 sm:h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductsSection;