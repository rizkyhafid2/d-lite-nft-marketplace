import { ShieldCheck, Wallet, Zap, FileCode2, Users, History } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Aman & Transparan", desc: "Setiap transaksi tercatat permanen di blockchain dan tak dapat dimanipulasi." },
  { icon: Wallet, title: "Integrasi MetaMask", desc: "Login dan bertransaksi langsung dengan dompet Web3 favorit Anda." },
  { icon: FileCode2, title: "Smart Contract Solidity", desc: "Eksekusi otomatis sesuai aturan, tanpa perantara pihak ketiga." },
  { icon: Zap, title: "Multi-Chain", desc: "Mendukung Ethereum dan Polygon untuk biaya gas yang lebih efisien." },
  { icon: Users, title: "Profil Kreator", desc: "Bangun reputasi, ikuti kreator favorit, dan kelola koleksi Anda." },
  { icon: History, title: "Riwayat Transaksi", desc: "Lihat seluruh riwayat mint, jual, beli secara on-chain." },
];

const Features = () => (
  <section id="features" className="py-24 relative">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mb-16">
        <div className="text-sm font-mono text-secondary mb-3">// Mengapa NebulaNFT</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
          Dibangun dengan <span className="text-gradient">teknologi blockchain</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="glass rounded-3xl p-7 group hover:border-primary/40 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-primary/20 border border-primary/30 flex items-center justify-center mb-5 group-hover:glow-primary transition-shadow">
              <f.icon className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
