const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 pb-20 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-3">DK Corrimão</h3>
            <p className="text-sm opacity-90">
              Excelência em corrimãos de aço inox e aço carbono. Qualidade, segurança e design para seu projeto.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-3">Contato</h4>
            <p className="text-sm opacity-90 mb-1">Telefone: (11) 2574-2864</p>
            <p className="text-sm opacity-90 mb-1">WhatsApp: (11) 95299-8873</p>
            <p className="text-sm opacity-90">WhatsApp: (11) 91158-9919</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-3">Horário de Atendimento</h4>
            <p className="text-sm opacity-90">Segunda a Sexta: 8h às 18h</p>
            <p className="text-sm opacity-90">Sábado: 8h às 12h</p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} DK Corrimão. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
