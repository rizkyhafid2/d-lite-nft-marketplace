import nft1 from "@/assets/nft-1.jpg";
import nft2 from "@/assets/nft-2.jpg";
import nft3 from "@/assets/nft-3.jpg";
import nft4 from "@/assets/nft-4.jpg";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const items = [
  { img: nft1, name: "Cyber Astronaut #042", author: "0xNova", price: "1.25", bid: "1.40" },
  { img: nft2, name: "Crystal Genesis", author: "PixelMage", price: "0.88", bid: "0.95" },
  { img: nft3, name: "Neon Samurai", author: "RoninArt", price: "2.10", bid: "2.30" },
  { img: nft4, name: "Glow Ape Society", author: "Mintly", price: "0.65", bid: "0.72" },
];

const Marketplace = () => (
  <section id="marketplace" className="py-24 relative">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
        <div>
          <div className="text-sm font-mono text-secondary mb-3">// Trending now</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Koleksi <span className="text-gradient">Populer</span>
          </h2>
        </div>
        <Button variant="outline" className="border-border bg-card/50">Lihat semua</Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <article
            key={i}
            className="group glass rounded-3xl p-3 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.5)]"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={it.img}
                alt={it.name}
                width={768}
                height={768}
                loading="lazy"
                className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <button className="absolute top-3 right-3 w-9 h-9 rounded-full glass flex items-center justify-center hover:text-accent transition-colors">
                <Heart className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-semibold truncate">{it.name}</h3>
              </div>
              <div className="text-xs text-muted-foreground font-mono">by @{it.author}</div>
              <div className="flex items-end justify-between pt-2 border-t border-border/50">
                <div>
                  <div className="text-[10px] uppercase text-muted-foreground tracking-wider">Price</div>
                  <div className="font-display font-bold text-secondary">{it.price} ETH</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase text-muted-foreground tracking-wider">Top bid</div>
                  <div className="font-display font-semibold text-accent">{it.bid} ETH</div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Marketplace;
