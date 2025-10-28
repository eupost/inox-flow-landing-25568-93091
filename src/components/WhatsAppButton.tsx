import { useState } from "react";
import { MessageCircle } from "lucide-react";
import QuoteModal from "./QuoteModal";

const WhatsAppButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce hover:animate-none"
        aria-label="Contato WhatsApp"
      >
        <MessageCircle size={24} className="sm:w-7 sm:h-7" />
      </button>
      <QuoteModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
};

export default WhatsAppButton;
