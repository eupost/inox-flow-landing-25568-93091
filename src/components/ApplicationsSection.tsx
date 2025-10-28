import { useState } from "react";
import { Home, Building2, Waves, Store, Hospital, Accessibility, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import QuoteModal from "./QuoteModal";

const applications = [
  {
    icon: Home,
    title: "Residências",
    description: "Corrimãos para escadas, varandas e sacadas residenciais, garantindo segurança e elegância para seu lar.",
  },
  {
    icon: Building2,
    title: "Edifícios Comerciais",
    description: "Instalações em prédios, escritórios e condomínios, com design moderno e conformidade total com normas.",
  },
  {
    icon: Waves,
    title: "Áreas de Piscina e Lazer",
    description: "Resistência ao cloro e umidade, perfeito para ambientes de piscina, spas e áreas externas.",
  },
  {
    icon: Store,
    title: "Estabelecimentos Comerciais",
    description: "Shoppings, bancos, escolas e restaurantes, organizando filas e garantindo segurança do público.",
  },
  {
    icon: Hospital,
    title: "Hospitais e Clínicas",
    description: "Ambientes que exigem alta higiene, com fácil limpeza e resistência a produtos de limpeza.",
  },
  {
    icon: Accessibility,
    title: "Rampas de Acessibilidade",
    description: "Essencial para acessibilidade, proporcionando apoio firme e contínuo conforme normas ABNT.",
  },
];

const ApplicationsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
            Aplicações Versáteis
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            A versatilidade do corrimão de aço inox permite sua aplicação em uma ampla gama de projetos e ambientes. Seja para garantir segurança em escadas, acessibilidade em rampas ou estética em varandas, oferecemos soluções personalizadas para cada necessidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{app.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{app.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center bg-gradient-primary rounded-2xl p-6 sm:p-8 md:p-12 text-primary-foreground max-w-4xl mx-auto shadow-primary">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Precisa de um Projeto Personalizado?
          </h3>
          <p className="text-sm sm:text-base md:text-lg mb-6 opacity-95 leading-relaxed">
            Nossa equipe técnica está pronta para desenvolver a solução ideal para seu projeto, seja residencial, comercial ou industrial. Oferecemos visita técnica gratuita, projeto personalizado e instalação profissional.
          </p>
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
            onClick={() => setIsModalOpen(true)}
          >
            <MessageCircle className="mr-2 flex-shrink-0" size={20} />
            <span className="hidden sm:inline">Solicitar Visita Técnica Grátis</span>
            <span className="sm:hidden">Visita Técnica Grátis</span>
          </Button>
        </div>
      </div>
    </section>
    <QuoteModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
};

export default ApplicationsSection;
