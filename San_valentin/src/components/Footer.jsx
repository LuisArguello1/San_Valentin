import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaHeart } from 'react-icons/fa';
import content from '../data/story';

const Footer = () => {
    const handleWhatsAppClick = () => {
        const message = encodeURIComponent(content.contact.whatsappMessage);
        const whatsappUrl = `https://wa.me/${content.contact.whatsapp}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleInstagramClick = () => {
        window.open(content.contact.instagram, '_blank');
    };

    return (
        <footer className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-8 border-t border-white/5 overflow-hidden flex flex-col items-center gap-10 sm:gap-12 text-center">
            <div className="w-full max-w-5xl mx-auto relative z-10">
                <div className="flex flex-col items-center gap-10 sm:gap-12 text-center">

                    {/* Logo / Nombre */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full"
                    >
                        <motion.h3
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 relative inline-block"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <motion.span
                                className=""
                                animate={{
                                    opacity: [0.3, 0.5, 0.3]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                            <span className="relative bg-gradient-to-r from-[#ff4d6d] to-[#ff6b9d] bg-clip-text text-transparent">
                                {content.footer.businessName}
                            </span>
                        </motion.h3>

                        <motion.p
                            className="text-white/60 flex items-center gap-2 justify-center text-base sm:text-lg px-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            {content.footer.tagline}
                        </motion.p>
                    </motion.div>

                    {/* Redes sociales */}
                    <motion.div
                        className="flex gap-4 sm:gap-5"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {/* WhatsApp */}
                        <motion.button
                            onClick={handleWhatsAppClick}
                            className="group relative p-4 sm:p-5 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-[#25D366]/50 transition-all duration-500 overflow-hidden"
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-[#25D366]/0 group-hover:bg-[#25D366]/10 transition-colors duration-500"
                            />

                            <FaWhatsapp className="relative text-2xl sm:text-3xl text-[#25D366] z-10" />

                            <motion.span
                                className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
                                initial={{ y: 10 }}
                                whileHover={{ y: 0 }}
                            >
                                WhatsApp
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#25D366]" />
                            </motion.span>
                        </motion.button>

                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        className="relative w-full max-w-md h-px overflow-hidden"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff4d6d] to-transparent"
                            animate={{
                                x: ['-100%', '100%']
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                        />
                    </motion.div>

                    {/* Copyright */}
                    <motion.div
                        className="text-sm sm:text-base text-white/50 px-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <p className="flex items-center gap-3 justify-center flex-wrap">
                            <span>© {content.footer.year} {content.footer.businessName}</span>
                            <span className="hidden sm:inline text-white/20">•</span>
                            <span className="flex items-center gap-2">
                                Hecho con
                                <motion.span
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        rotate: [0, 10, -10, 0]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <FaHeart className="text-[#ff4d6d]" />
                                </motion.span>
                            </span>
                        </p>
                    </motion.div>

                    {/* Scroll to top */}
                    <motion.button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group mt-4 p-3 sm:p-4 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 hover:border-[#ff4d6d]/50 transition-all duration-500"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 }}
                    >
                        <motion.svg
                            className="w-5 h-5 sm:w-6 sm:h-6 text-white/60 group-hover:text-[#ff4d6d] transition-colors"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </motion.svg>
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;