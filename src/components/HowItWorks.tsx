const steps = [
  { n: "01", title: "Hubungkan Wallet", desc: "Connect MetaMask atau wallet Web3 lain dalam hitungan detik." },
  { n: "02", title: "Mint atau Pilih NFT", desc: "Upload karya digital Anda untuk di-mint, atau jelajahi marketplace." },
  { n: "03", title: "Transaksi On-Chain", desc: "Smart contract mengeksekusi pembelian otomatis & permanen." },
  { n: "04", title: "Miliki & Pamerkan", desc: "NFT tersimpan di wallet Anda — bukti kepemilikan digital sah." },
];

const HowItWorks = () => (
  <section id="how" className="py-24 relative">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="text-sm font-mono text-secondary mb-3">// Workflow</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
          Cara <span className="text-gradient">Kerjanya</span>
        </h2>
      </div>
      <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <div key={i} className="glass rounded-3xl p-7 relative overflow-hidden">
            <div className="absolute -top-4 -right-4 font-display text-7xl font-bold text-primary/10 select-none">
              {s.n}
            </div>
            <div className="font-mono text-xs text-secondary mb-4">STEP {s.n}</div>
            <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
