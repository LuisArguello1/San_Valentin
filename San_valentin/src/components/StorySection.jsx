import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import content from "../data/story";

const StorySection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.92, 1, 1, 0.92]
  );

  return (
    <motion.section
      ref={containerRef}
      className="relative py-20 sm:py-40 overflow-hidden"
      style={{ opacity }}
    >
      {/* CONTENEDOR MAESTRO */}
      <motion.div
        className="w-full flex justify-center px-6 sm:px-10"
        style={{ scale }}
      >
        <div className="w-full max-w-5xl text-center relative z-10">
          {/* DECORACIÓN SUPERIOR */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1 }}
          >
            <motion.span
              className="text-6xl sm:text-7xl"
              animate={{ rotate: [0, 10, -10, 0], y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ✨
            </motion.span>
          </motion.div>

          {/* TÍTULO */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-16"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="relative inline-block">
              <span className="absolute inset-0 -z-10 blur-2xl bg-gradient-to-r from-white via-[#ff6b9d] to-[#ff4d6d] opacity-40" />
              <span className="relative bg-gradient-to-r from-white via-[#ff6b9d] to-[#ff4d6d] bg-clip-text text-transparent">
                {content.story.title}
              </span>
            </span>
          </motion.h2>

          {/* CONTENIDO */}
          <div className="flex flex-col gap-10 sm:gap-12 items-center">
            {content.story.paragraphs.map((paragraph, index) => (
              <motion.div
                key={index}
                className="flex justify-center w-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
              >
                <div className="relative group w-full max-w-3xl">
                  {/* GLOW */}
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#ff4d6d]/0 via-[#ff4d6d]/30 to-[#ff4d6d]/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* CARD */}
                  <div className="relative backdrop-blur-md bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12 flex justify-center items-center">
                    <p
                      className="text-base sm:text-xl md:text-2xl text-white/80"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 300,
                        maxWidth: "42ch",
                      }}
                    >
                      {paragraph}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* DECORACIÓN FINAL */}
          <motion.div
            className="mt-24 flex justify-center relative h-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="text-5xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              💕
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default StorySection;
