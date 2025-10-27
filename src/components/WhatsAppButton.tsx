import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "5511911569919";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce hover:animate-none"
      aria-label="Contato WhatsApp"
    >
      <MessageCircle size={24} className="sm:w-7 sm:h-7" />
    </a>
  );
};

export default WhatsAppButton;
