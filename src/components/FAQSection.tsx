import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual a diferença entre o aço inox 304 e o 316?",
    answer: "O aço inox 304 é o tipo mais comum e é ideal para ambientes internos e áreas urbanas. O aço inox 316 possui uma adição de molibdênio em sua composição, o que lhe confere uma resistência superior à corrosão. Por isso, é a escolha recomendada para ambientes agressivos, como áreas litorâneas, piscinas e indústrias.",
  },
  {
    question: "O corrimão de inox pode ser instalado em área externa?",
    answer: "Sim! A resistência do corrimão de inox o torna perfeito para áreas externas. Apenas certifique-se de utilizar o aço inox 316 se a instalação for em uma região próxima ao mar para evitar problemas com a maresia.",
  },
  {
    question: "Como é feita a limpeza do corrimão de aço inox?",
    answer: "A manutenção é muito simples! Basta usar um pano macio com água e sabão neutro. Evite produtos abrasivos, palhas de aço ou químicos fortes que possam danificar o acabamento da peça.",
  },
  {
    question: "Vocês seguem as normas da ABNT e dos bombeiros?",
    answer: "Sim! Todos os nossos corrimãos são fabricados e instalados seguindo rigorosamente as normas ABNT NBR 9050 (acessibilidade), NBR 9077 (saídas de emergência) e NBR 14718 (guarda-corpos). Garantimos segurança e conformidade total.",
  },
  {
    question: "Qual o prazo de instalação?",
    answer: "O prazo varia conforme a complexidade e tamanho do projeto. Após a análise técnica e aprovação do orçamento, informamos o prazo exato de fabricação e instalação. Entre em contato para obter uma estimativa personalizada para seu projeto.",
  },
  {
    question: "O corrimão de inox é mais caro que os de outros materiais?",
    answer: "O custo inicial pode ser um pouco maior, porém oferece excelente custo-benefício a longo prazo. Não exige manutenção constante como pintura, não enferruja e evita gastos com reparos ou substituição, tornando-se um investimento inteligente.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Tire suas dúvidas sobre corrimãos de aço inox
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border border-border shadow-sm"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
