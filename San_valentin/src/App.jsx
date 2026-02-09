import FloatingHearts from './effects/FloatingHearts';
import GlowBackground from './effects/GlowBackground';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import ProductsSection from './components/ProductsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0b0b10]">
      <GlowBackground />
      <FloatingHearts />

      <main className="relative z-10">
        <Hero />
        <StorySection />
        <ProductsSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
