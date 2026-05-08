import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-amber-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-amber-900 rounded-full" />
        <div className="absolute top-40 right-20 w-48 h-48 border border-amber-900 rounded-full" />
        <div className="absolute bottom-32 left-1/4 w-24 h-24 border border-amber-900 rounded-full" />
        <div className="absolute bottom-20 right-1/3 w-40 h-40 border border-amber-900 rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-amber-900 rounded-full" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <p className="text-sm md:text-base text-amber-700 uppercase tracking-widest mb-2">
          Monastero Romite Ambrosiane - Estate 2026
        </p>
        <p className="text-sm md:text-base text-amber-600 mb-8">
          Iniziativa per giovani e giovani adulti.
        </p>
        <p className="text-2xl md:text-3xl text-emerald-700 mb-6 leading-tight" style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontStyle: "italic" }}>
          Fermati. Respira.<br />Lasciati incontrare.
        </p>
        <p className="text-lg md:text-xl text-amber-800 mb-8 max-w-2xl mx-auto leading-relaxed">
          Scegli un periodo o anche solo qualche giorno per fermarti. Condividi con noi il ritmo della preghiera, del lavoro manuale, dello studio e della fraternità.
        </p>
        <a href="#contatti">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all">
            Partecipa
          </Button>
        </a>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-amber-700 opacity-60" />
      </div>
    </section>
  );
}