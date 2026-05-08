import { Calendar, Users, Star } from "lucide-react";

const periods = [
  {
    month: "Giugno",
    dates: "Dal 15 al 30 giugno",
    audience: "Giovani (18-30) & Adulti (30-40)",
    icon: Calendar,
  },
  {
    month: "Luglio",
    dates: "Dall'1 al 31 luglio",
    audience: "Giovani (18-30) & Adulti (30-40)",
    icon: Calendar,
  },
  {
    month: "Agosto",
    dates: "Dal 17 al 29 agosto",
    audience: "Giovani (18-30) & Adulti (30-40)",
    icon: Calendar,
  },
];

export default function Dates() {
  return (
    <section id="periodi" className="py-20 px-4 bg-stone-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-teal-800 mb-4 border-b-2 border-orange-400 inline-block pb-2">
          Date Estate 2026
        </h2>
        <p className="text-base text-stone-600 mb-10 max-w-2xl">
          Scegli un periodo o anche solo qualche giorno per fermarti. Condividi con noi il ritmo della preghiera, del lavoro manuale, dello studio e della fraternità.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {periods.map((period) => (
            <div 
              key={period.month}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <period.icon className="w-5 h-5 text-teal-600" />
                <h3 className="text-xl font-medium text-teal-800">{period.month}</h3>
              </div>
              <p className="text-stone-700 mb-2">{period.dates}</p>
              <div className="flex items-center gap-2 text-sm text-stone-500">
                <Users className="w-4 h-4" />
                <span>{period.audience}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Special closing event */}
        <div className="bg-teal-800 rounded-xl p-6 md:p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <Star className="w-6 h-6 text-orange-400" />
            <h3 className="text-xl md:text-2xl font-medium text-white">Chiusura</h3>
          </div>
          <p className="text-teal-100 text-lg mb-2">
            <span className="font-semibold text-white">30 agosto</span>
          </p>
          <p className="text-teal-200">Giornata di condivisione finale</p>
        </div>
      </div>
    </section>
  );
}