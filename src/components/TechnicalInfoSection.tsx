import { useState } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import QuoteModal from "./QuoteModal";

const TechnicalInfoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">
              Conformidade com Normas Técnicas e Segurança Garantida
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Todos os nossos corrimãos de aço inox são projetados e instalados seguindo rigorosamente as normas técnicas da ABNT (Associação Brasileira de Normas Técnicas) e regulamentações do Corpo de Bombeiros, garantindo máxima segurança para todos os usuários.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground mb-1">NBR 9050 - Acessibilidade</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Cumprimos todos os requisitos de acessibilidade, incluindo altura, diâmetro e resistência adequados para pessoas com mobilidade reduzida.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground mb-1">NBR 14718 - Guarda-Corpos</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Instalação de guarda-corpos seguindo especificações de altura mínima, espaçamento entre elementos e resistência estrutural.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground mb-1">Aprovação do Corpo de Bombeiros</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Projetos aprovados conforme exigências de segurança contra incêndio e pânico, essenciais para edificações comerciais e residenciais.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground mb-1">Certificação de Qualidade do Material</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Utilizamos apenas aço inoxidável certificado (AISI 304 ou 316), com garantia de procedência e laudos técnicos de resistência.
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full md:w-auto"
              onClick={() => setIsModalOpen(true)}
            >
              <MessageCircle className="mr-2 flex-shrink-0" size={20} />
              <span className="hidden sm:inline">Tire Suas Dúvidas no WhatsApp</span>
              <span className="sm:hidden">Dúvidas WhatsApp</span>
            </Button>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-primary mb-4">Aço Inox 304</h3>
              <p className="text-sm text-muted-foreground mb-4">
                O aço inoxidável 304 é o tipo mais comum e versátil, ideal para a maioria das aplicações.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <p className="text-xs text-foreground">Excelente para ambientes internos</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <p className="text-xs text-foreground">Ótima resistência à corrosão em áreas urbanas</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <p className="text-xs text-foreground">Custo-benefício ideal para residências e comércios</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <p className="text-xs text-foreground">Acabamento polido ou escovado</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-primary mb-4">Aço Inox 316</h3>
              <p className="text-sm text-muted-foreground mb-4">
                O aço inoxidável 316 possui molibdênio em sua composição, oferecendo resistência superior.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <p className="text-xs text-foreground">Perfeito para áreas litorâneas e maresias</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <p className="text-xs text-foreground">Ideal para piscinas e ambientes úmidos</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <p className="text-xs text-foreground">Resistência superior à corrosão química</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <p className="text-xs text-foreground">Recomendado para indústrias e hospitais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <QuoteModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
};

export default TechnicalInfoSection;
