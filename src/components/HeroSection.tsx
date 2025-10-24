import heroImage from "@/assets/hero-corrimao.jpg";
import QuoteForm from "./QuoteForm";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Corrimão de aço inox moderno" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div className="text-center md:text-left flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Corrimão de Aço Inox e Carbono <span className="block text-primary-light mt-2">Sob Medida</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-6 opacity-95 leading-relaxed max-w-xl">
              Fabricação e instalação profissional para residências, comércios e indústrias. Qualidade, segurança e conformidade com normas ABNT.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 bg-primary-foreground/10 px-3 py-2 rounded-lg backdrop-blur-sm">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm font-semibold">Resistente à Corrosão</span>
              </div>
              
              <div className="flex items-center gap-2 bg-primary-foreground/10 px-3 py-2 rounded-lg backdrop-blur-sm">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm font-semibold">Instalação Profissional</span>
              </div>
              
              <div className="flex items-center gap-2 bg-primary-foreground/10 px-3 py-2 rounded-lg backdrop-blur-sm">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm font-semibold">Normas ABNT</span>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-md mx-auto">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
