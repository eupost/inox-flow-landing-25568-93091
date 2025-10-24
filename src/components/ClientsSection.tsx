import clientLogoMRV from "@/assets/client-logo-mrv.png";
import clientLogoCyrela from "@/assets/client-logo-cyrela.png";
import clientLogoTenda from "@/assets/client-logo-tenda.png";
import clientLogoDirecional from "@/assets/client-logo-direcional.png";
import clientLogoGafisa from "@/assets/client-logo-gafisa.png";
import clientLogoPDG from "@/assets/client-logo-pdg.png";

const clients = [
  { logo: clientLogoMRV, name: "MRV Engenharia" },
  { logo: clientLogoCyrela, name: "Cyrela" },
  { logo: clientLogoTenda, name: "Tenda" },
  { logo: clientLogoDirecional, name: "Direcional Engenharia" },
  { logo: clientLogoGafisa, name: "Gafisa" },
  { logo: clientLogoPDG, name: "PDG" },
];

const ClientsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
            Empresas que Confiam em Nosso Trabalho
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Projetos executados para as principais empresas e construtoras do mercado, garantindo excelência e qualidade em cada instalação
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg grayscale hover:grayscale-0"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-auto max-h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
