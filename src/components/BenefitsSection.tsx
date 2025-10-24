import { Shield, Sparkles, Wrench, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Resistência e Durabilidade",
    description: "Altamente resistente à corrosão e desgaste, ideal para ambientes internos e externos, suportando condições climáticas diversas sem enferrujar.",
  },
  {
    icon: Sparkles,
    title: "Fácil Limpeza",
    description: "Superfície lisa e não porosa que impede o acúmulo de sujeira e bactérias, facilitando a higienização e tornando-o higiênico para locais com grande circulação.",
  },
  {
    icon: TrendingUp,
    title: "Design Versátil",
    description: "Acabamento moderno e elegante que se adapta a qualquer estilo de decoração, do minimalista ao industrial, valorizando o ambiente.",
  },
  {
    icon: Wrench,
    title: "Segurança Garantida",
    description: "Robustez do material garante estrutura sólida e confiável, fundamental para a segurança de escadas e rampas, seguindo normas ABNT.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
            Por que Optar por um Corrimão de Aço Inox?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            A escolha do material é crucial para a durabilidade, segurança e o desempenho de um corrimão. O aço inoxidável se destaca como a melhor opção por suas propriedades únicas e vantagens incomparáveis em relação a outros materiais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
