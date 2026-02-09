import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import content from '../data/story';

const CTASection = () => {
    const handleWhatsAppClick = () => {
        const message = encodeURIComponent(content.contact.whatsappMessage);
        const whatsappUrl = `https://wa.me/${content.contact.whatsapp}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleInstagramClick = () => {
        window.open(content.contact.instagram, '_blank');
    };

    return (
        <section className="relative py-32 px-4 md:px-8 lg:px-16 overflow-hidden flex flex-col items-center gap-10 sm:gap-12 text-center">
            {/* Fondo decorativo elegante */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff4d6d]/5 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,77,109,0.1)_0%,transparent_70%)]" />

            <div className="max-w-4xl mx-auto text-center relative z-10">

                {/* Título emocional */}
                <motion.h2
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="block text-white mb-2">
                        {content.cta.title}
                    </span>
                </motion.h2>

                
            </div>
        </section>
    );
};

export default CTASection;
