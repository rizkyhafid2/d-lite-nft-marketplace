import heroNft from "@/assets/hero-nft.jpg";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-secondary" />
              <span className="text-muted-foreground">Powered by Ethereum & Polygon</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Marketplace <span className="text-gradient">NFT</span> untuk Era Web3
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Mint, koleksi, dan perdagangkan aset digital secara aman & transparan.
              Smart contract Solidity menjamin setiap transaksi tercatat permanen di blockchain.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="lg">
                Jelajahi Marketplace <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="neon" size="lg">Mint NFT Anda</Button>
            </div>
            <div className="flex gap-8 pt-6 border-t border-border/50">
              {[
                { v: "120K+", l: "NFT Terdaftar" },
                { v: "45K+", l: "Kreator Aktif" },
                { v: "8.2K ETH", l: "Volume" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl font-bold text-gradient">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-30 animate-pulse-glow" />
            <div className="relative glass rounded-3xl p-2 animate-float">
              <img
                src={heroNft}
                alt="NFT holographic cube artwork"
                width={1280}
                height={1280}
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 glow-neon">
                <div className="text-xs text-muted-foreground font-mono">Highest bid</div>
                <div className="font-display font-bold text-gradient text-xl">3.45 ETH</div>
              </div>
              <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3">
                <div className="text-xs text-muted-foreground font-mono">Live auction</div>
                <div className="font-display font-bold text-secondary">02 : 14 : 56</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
