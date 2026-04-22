import { Twitter, Github, Globe } from "lucide-react";

const Footer = () => (
  <footer id="footer" className="border-t border-border/50 mt-12">
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-4 gap-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-primary glow-primary flex items-center justify-center font-display font-bold">N</div>
            <span className="font-display text-lg font-bold">NebulaNFT</span>
          </div>
          <p className="text-sm text-muted-foreground">Marketplace NFT Web3 terdesentralisasi.</p>
        </div>
        {[
          { h: "Marketplace", l: ["Jelajahi", "Trending", "Koleksi"] },
          { h: "Akun", l: ["Profil", "Wallet Saya", "Riwayat"] },
          { h: "Sumber Daya", l: ["Dokumentasi", "Smart Contract", "Bantuan"] },
        ].map((c) => (
          <div key={c.h}>
            <h4 className="font-display font-semibold mb-4">{c.h}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {c.l.map((x) => <li key={x}><a href="#" className="hover:text-foreground transition-colors">{x}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 mt-12 pt-6 border-t border-border/50">
        <div className="text-xs text-muted-foreground font-mono">© 2026 NebulaNFT — Built on Ethereum & Polygon</div>
        <div className="flex gap-3">
          {[Twitter, Github, Globe].map((Icon, i) => (
            <a key={i} href="#" aria-label="social" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-secondary transition-colors">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
