import { motion } from 'framer-motion';

const GlowBackground = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Glow principal animado */}
            <motion.div
                className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
                style={{
                    background: 'radial-gradient(circle, #ff4d6d, transparent)'
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                    x: [0, 50, 0],
                    y: [0, 30, 0]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Glow secundario - Solo visible en desktop para rendimiento */}
            {!isMobile && (
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15"
                    style={{
                        background: 'radial-gradient(circle, #ff6b9d, transparent)'
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.15, 0.25, 0.15],
                        x: [0, -30, 0],
                        y: [0, 50, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
            )}

            {/* Glow terciario - Solo visible en desktop */}
            {!isMobile && (
                <motion.div
                    className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-2xl opacity-10"
                    style={{
                        background: 'radial-gradient(circle, #ff4d6d, transparent)'
                    }}
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
            )}
        </div>
    );
};

export default GlowBackground;
