import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import QuoteForm from "./QuoteForm";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuoteModal = ({ open, onOpenChange }: QuoteModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-primary">
            Solicite seu Orçamento
          </DialogTitle>
        </DialogHeader>
        <QuoteForm onSuccess={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;
