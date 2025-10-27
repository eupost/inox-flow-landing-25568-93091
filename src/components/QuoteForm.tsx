import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const QuoteForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    steelType: "",
    name: "",
    email: "",
    phone: "",
    cnpj: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = "5511911569919";
    const message = `
*Solicitação de Orçamento - Corrimão Inox*

*Tipo de Aço:* ${formData.steelType}
*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Telefone:* ${formData.phone}
${formData.cnpj ? `*CNPJ:* ${formData.cnpj}` : ''}
*Mensagem:* ${formData.message}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Em instantes você será direcionado para conversar conosco!",
    });
  };

  return (
    <div className="bg-card rounded-xl shadow-xl p-3 md:p-4">
      <h3 className="text-lg font-bold text-primary mb-1">Solicite seu Orçamento</h3>
      <p className="text-muted-foreground text-xs mb-3">Preencha e receba uma proposta</p>
      
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <Select 
            required
            value={formData.steelType} 
            onValueChange={(value) => setFormData({...formData, steelType: value})}
          >
            <SelectTrigger id="steelType" className="bg-background">
              <SelectValue placeholder="Selecionar aço *" />
            </SelectTrigger>
            <SelectContent className="z-[200] bg-card border-border">
              <SelectItem value="Aço Inox 304">Aço Inox 304</SelectItem>
              <SelectItem value="Aço Inox 316">Aço Inox 316</SelectItem>
              <SelectItem value="Aço Carbono">Aço Carbono</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="name" className="text-xs font-semibold">Nome Completo *</Label>
          <Input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="Seu nome"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-xs font-semibold">E-mail *</Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-xs font-semibold">Telefone/WhatsApp *</Label>
          <Input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            placeholder="(11) 99999-9999"
          />
        </div>

        <div>
          <Label htmlFor="cnpj" className="text-xs font-semibold">CNPJ (opcional)</Label>
          <Input
            id="cnpj"
            type="text"
            value={formData.cnpj}
            onChange={(e) => setFormData({...formData, cnpj: e.target.value})}
            placeholder="00.000.000/0000-00"
          />
        </div>

        <div>
          <Textarea
            id="message"
            required
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            placeholder="Descreva seu projeto *"
            rows={2}
            className="text-sm min-h-[60px]"
          />
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-primary-dark py-4 font-bold text-sm">
          <Send className="mr-2" size={16} />
          Solicitar Orçamento Grátis
        </Button>
      </form>
    </div>
  );
};

export default QuoteForm;
