import { Clock, Sun, Sunrise, Moon, Coffee, HandHelping, Utensils, BookOpen, Users } from "lucide-react";

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const schedule: ScheduleItem[] = [
  {
    time: "06:15",
    title: "Sveglia e lectio divina",
    description: "Una proposta libera per cominciare la giornata con gusto e pace.",
    icon: <Sunrise className="w-5 h-5" />,
  },
  {
    time: "07:30",
    title: "Lodi Mattutine, Messa e Terza",
    description: "Preghiera comunitaria.",
    icon: <Sun className="w-5 h-5" />,
  },
  {
    time: "09:00",
    title: "Colazione",
    description: "Troverai qualcosa di caldo anche prima delle lodi.",
    icon: <Coffee className="w-5 h-5" />,
  },
  {
    time: "09:30",
    title: "Lavoro Manuale",
    description: "Orto, erbe officinali, lavori vari.",
    icon: <HandHelping className="w-5 h-5" />,
  },
  {
    time: "12:00",
    title: "Ora Media",
    description: "Breve preghiera che spezza il lavoro della mattina.",
    icon: <Clock className="w-5 h-5" />,
  },
  {
    time: "12:30",
    title: "Pranzo in Fraternità",
    description: "Momento di condivisione e conoscenza.",
    icon: <Utensils className="w-5 h-5" />,
  },
  {
    time: "14:00",
    title: "Silenzio e Riposo",
    description: "Tempo libero per riposare, leggere o passeggiare.",
    icon: <Moon className="w-5 h-5" />,
  },
  {
    time: "15:30",
    title: "Studio / Condivisione",
    description: "Tempo per lo studio o per un lavoro leggero. Possibilità di incontro con una monaca per dialogare.",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    time: "18:00",
    title: "Vespri",
    description: "Preghiera del tramonto.",
    icon: <Sun className="w-5 h-5" />,
  },
  {
    time: "19:30",
    title: "Cena",
    description: "Pasto serale comunitario.",
    icon: <Utensils className="w-5 h-5" />,
  },
  {
    time: "20:45",
    title: "Compieta",
    description: "La preghiera che conclude la giornata prima del grande silenzio notturno.",
    icon: <Moon className="w-5 h-5" />,
  },
];

export default function DailySchedule() {
  return (
    <section id="giornata" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-teal-800 mb-2 border-b-2 border-orange-400 inline-block pb-2">
          Ora et Labora
        </h2>
        <p className="text-lg text-stone-500 italic mb-12">
          Scopri il ritmo che guiderà le tue giornate
        </p>
        
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-teal-200" />
          
          <div className="space-y-6">
            {schedule.map((item, index) => (
              <div 
                key={index} 
                className="relative pl-12 md:pl-20 group"
              >
                {/* Time badge */}
                <div className="absolute left-0 top-0 w-8 h-8 md:w-16 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-teal-700 text-white flex items-center justify-center text-xs font-bold shadow-lg group-hover:bg-orange-500 transition-colors">
                    {item.icon}
                  </div>
                </div>
                
                {/* Content card */}
                <div className="bg-stone-50 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-teal-600 group-hover:border-orange-400">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <span className="text-orange-500 font-bold text-lg">{item.time}</span>
                    <h3 className="text-teal-800 font-medium text-lg">{item.title}</h3>
                  </div>
                  <p className="text-stone-600 text-sm md:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Silence Rule Box */}
        <div className="mt-12 bg-teal-800 rounded-xl p-6 md:p-8 text-white">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Moon className="w-8 h-8 text-orange-300" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-orange-300">
                La regola del Silenzio
              </h3>
              <p className="text-teal-100 leading-relaxed">
                Dalla preghiera di Compieta fino a dopo la colazione del giorno seguente, osserviamo il 
                <strong className="text-white"> &quot;Grande Silenzio&quot;</strong>. È un tempo prezioso per far decantare i pensieri 
                e ascoltare la propria interiorità. Ti chiediamo di rispettarlo spegnendo anche il cellulare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}