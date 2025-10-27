import { Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-dk-corrimao.png";

const Header = () => {
  const whatsappPrincipal = "5511911569919";
  const whatsappSecundario = "5511952998873";
  const phoneNumber = "11 2574-2864";

  return (
    <header className="bg-white text-foreground py-2 sm:py-3 sticky top-0 z-50 shadow-md border-b">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
          <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
            <img src={logo} alt="DK Corrimão" className="h-10 sm:h-12 md:h-14 w-auto" />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 items-center w-full md:w-auto">
            <a
              href={`tel:+${whatsappPrincipal}`}
              className="flex items-center gap-1.5 bg-primary text-primary-foreground px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-all text-xs sm:text-sm w-full sm:w-auto justify-center"
            >
              <Phone size={16} className="flex-shrink-0" />
              <span className="truncate">{phoneNumber}</span>
            </a>
            <a
              href={`https://wa.me/${whatsappPrincipal}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-500 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-semibold hover:bg-green-600 transition-all text-xs sm:text-sm w-full sm:w-auto justify-center"
            >
              <MessageCircle size={16} className="flex-shrink-0" />
              <span>WhatsApp Principal</span>
            </a>
            <a
              href={`https://wa.me/${whatsappSecundario}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-600 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-all text-xs sm:text-sm w-full sm:w-auto justify-center"
            >
              <MessageCircle size={16} className="flex-shrink-0" />
              <span>WhatsApp 2</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
