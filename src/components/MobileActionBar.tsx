import { Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const MobileActionBar = () => {
  const whatsappNumber = "5511911589919";

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50 p-2 sm:p-3">
      <div className="flex gap-2">
        <Button
          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 sm:py-5 text-xs sm:text-sm rounded-lg transition-all"
          onClick={() => window.location.href = `tel:+${whatsappNumber}`}
        >
          <Phone className="mr-1.5 sm:mr-2 flex-shrink-0" size={16} />
          <span className="truncate">Ligar Agora</span>
        </Button>
        <Button
          className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 sm:py-5 text-xs sm:text-sm rounded-lg transition-all"
          onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
        >
          <MessageCircle className="mr-1.5 sm:mr-2 flex-shrink-0" size={16} />
          <span className="truncate">Cotar Agora</span>
        </Button>
      </div>
    </div>
  );
};

export default MobileActionBar;
