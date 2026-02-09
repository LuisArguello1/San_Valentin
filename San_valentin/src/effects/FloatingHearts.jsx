import { motion } from 'framer-motion';

const FloatingHearts = () => {
    // Detectar si es dispositivo móvil
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const heartCount = isMobile ? 6 : 15; // Reducir a menos de la mitad en móviles

    // Generar corazones con posiciones y animaciones aleatorias
    const hearts = Array.from({ length: heartCount }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: 15 + Math.random() * 10,
        size: isMobile ? 10 + Math.random() * 15 : 15 + Math.random() * 20 // Ligeramente más pequeños en móvil
    }));

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    className="absolute text-[#ff4d6d] opacity-20"
                    style={{
                        left: heart.left,
                        fontSize: `${heart.size}px`,
                        bottom: '-50px'
                    }}
                    animate={{
                        y: [0, -1200],
                        x: [0, Math.sin(heart.id) * 100],
                        rotate: [0, 360],
                        opacity: [0, 0.3, 0.2, 0]
                    }}
                    transition={{
                        duration: heart.duration,
                        delay: heart.delay,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    ♥
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingHearts;
