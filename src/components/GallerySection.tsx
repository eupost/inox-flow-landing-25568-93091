import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const galleryImages = [
  { src: gallery1, alt: "Corrimão de inox em edifício comercial" },
  { src: gallery2, alt: "Corrimão de inox em varanda com vista para o mar" },
  { src: gallery3, alt: "Corrimão de inox em escada em espiral" },
  { src: gallery4, alt: "Corrimão de inox em área de piscina" },
  { src: gallery5, alt: "Corrimão de inox em hospital" },
  { src: gallery6, alt: "Corrimão de inox em rampa acessível" },
];

const GallerySection = () => {
  const whatsappNumber = "5511911569919";

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
            Nossos Projetos e Modelos
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Confira alguns de nossos trabalhos realizados com excelência e qualidade garantida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-primary rounded-2xl p-6 sm:p-8 md:p-12 text-primary-foreground max-w-3xl mx-auto shadow-primary">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Ficou Interessado?
            </h3>
            <p className="text-sm sm:text-base md:text-lg mb-6 opacity-95">
              Entre em contato com nossos especialistas e tire todas as suas dúvidas
            </p>
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
            >
              <MessageCircle className="mr-2 flex-shrink-0" size={20} />
              <span className="hidden sm:inline">Fale com um Especialista no WhatsApp</span>
              <span className="sm:hidden">Falar com Especialista</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
