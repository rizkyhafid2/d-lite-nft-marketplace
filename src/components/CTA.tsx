import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

const CTA = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="relative glass rounded-[2rem] p-12 md:p-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-20" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-secondary/30 blur-3xl rounded-full" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/30 blur-3xl rounded-full" />
        <div className="relative max-w-2xl mx-auto space-y-6">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Mulai perjalanan <span className="text-gradient">Web3</span> Anda hari ini
          </h2>
          <p className="text-muted-foreground text-lg">
            Bergabunglah dengan ribuan kreator dan kolektor di marketplace NFT terdesentralisasi.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <Button variant="hero" size="lg">
              <Wallet className="w-4 h-4" /> Hubungkan Wallet
            </Button>
            <Button variant="neon" size="lg">Pelajari Lebih Lanjut</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
