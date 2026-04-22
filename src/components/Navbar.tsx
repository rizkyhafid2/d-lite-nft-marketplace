import { Button } from "@/components/ui/button";
import { Wallet, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Marketplace", href: "#marketplace" },
    { label: "Cara Kerja", href: "#how" },
    { label: "Fitur", href: "#features" },
    { label: "Komunitas", href: "#footer" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-primary glow-primary flex items-center justify-center font-display font-bold">
              N
            </div>
            <span className="font-display text-lg font-bold tracking-tight">NebulaNFT</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="hero" size="sm" className="hidden sm:inline-flex">
              <Wallet className="w-4 h-4" />
              Hubungkan Wallet
            </Button>
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-muted">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
        {open && (
          <div className="md:hidden glass mt-2 rounded-2xl p-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">
                {l.label}
              </a>
            ))}
            <Button variant="hero" size="sm" className="sm:hidden">
              <Wallet className="w-4 h-4" /> Hubungkan Wallet
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
