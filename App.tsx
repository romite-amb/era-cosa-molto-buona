import { Mail, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contatti" className="py-20 px-4 bg-stone-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-teal-800 mb-4 border-b-2 border-orange-400 inline-block pb-2">
          Contattaci per l&apos;Iscrizione
        </h2>
        <p className="text-lg text-stone-600 mb-12 max-w-2xl">
          Per prenotare la tua permanenza nel monastero, puoi contattarci attraverso uno dei seguenti canali:
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Email Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl font-medium text-teal-800">Email</h3>
            </div>
            <a 
              href="mailto:romiteambrosiane.va@gmail.com"
              className="text-teal-600 hover:text-teal-800 transition-colors text-lg break-all"
            >
              romiteambrosiane.va@gmail.com
            </a>
          </div>
          
          {/* Phone Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl font-medium text-teal-800">Telefono</h3>
            </div>
            <div className="space-y-2">
              <div>
                <span className="text-sm text-stone-500">Prima linea: </span>
                <a href="tel:+390332228440" className="text-teal-600 hover:text-teal-800 transition-colors">
                  0332.228440
                </a>
              </div>
              <div>
                <span className="text-sm text-stone-500">Seconda linea: </span>
                <a href="tel:+390332228661" className="text-teal-600 hover:text-teal-800 transition-colors">
                  0332.228661
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Orari */}
        <div className="mt-8 bg-white rounded-xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-6 h-6 text-orange-500" />
            <h3 className="text-xl font-medium text-teal-800">Orari di Ricevimento</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-teal-600 pl-4">
              <h4 className="font-medium text-teal-700 mb-2">Mattino</h4>
              <p className="text-stone-600">9:30 – 11:50</p>
              <p className="text-sm text-stone-500 mt-1">Tutti i giorni</p>
            </div>
            <div className="border-l-4 border-orange-400 pl-4">
              <h4 className="font-medium text-teal-700 mb-2">Pomeriggio</h4>
              <p className="text-stone-600">15:00 – 16:50</p>
              <p className="text-sm text-stone-500 mt-1">Tutti i giorni, tranne il venerdì</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
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
import { Heart, Users, Leaf } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    title: "Preghiera",
    description: "Impara ad ascoltare nel silenzio. Condivideremo i momenti di preghiera liturgica con la comunità monastica, trovando spazio per la meditazione personale e il confronto con una sorelle.",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    icon: Leaf,
    title: "Lavoro e Studio",
    description: "Il lavoro ci riconnette con la terra nell'umiltà. Potrai aiutare le monache nell'orto e cura degli ambienti. Avrai anche spazi per lo studio.",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
  },
  {
    icon: Users,
    title: "Fraternità",
    description: "Potrai sperimentare la dimensione della fraternità condividendo l'esperienza con altri giovani. Potrai sempre scegliere di vivere questa esperienza in modo più ritirato, sapendo che la solitudine non coincide con l'isolamento.",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

export default function Experience() {
  return (
    <section id="esperienza" className="py-20 px-4 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-light text-teal-800 mb-4">
            I pilastri dell'esperienza
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto mb-6" />
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Ti invitiamo a condividere con noi la quotidianità della vita monastica.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`w-14 h-14 ${pillar.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <pillar.icon className={`w-7 h-7 ${pillar.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">
                {pillar.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default function Footer() {
  return (
    <footer className="bg-teal-700 text-white py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-teal-100 mb-2">
          © 2026 Monastero delle Romite Ambrosiane
        </p>
        <p className="text-teal-200/70 text-sm">
          Santa Maria del Monte, Varese
        </p>
      </div>
    </footer>
  );
}
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-lg font-medium text-teal-800">
              Era cosa{" "}
              <span className="text-orange-500 italic">molto buona.</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#esperienza"
              className="text-sm font-medium text-teal-700 hover:text-orange-500 transition-colors"
            >
              L'Esperienza
            </a>
            <a
              href="#periodi"
              className="text-sm font-medium text-teal-700 hover:text-orange-500 transition-colors"
            >
              Date
            </a>
            <a
              href="#contatti"
              className="text-sm font-medium text-teal-700 hover:text-orange-500 transition-colors"
            >
              Iscriviti
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-teal-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a
                href="#esperienza"
                className="text-sm font-medium text-teal-700 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                L'Esperienza
              </a>
              <a
                href="#periodi"
                className="text-sm font-medium text-teal-700 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Date
              </a>
              <a
                href="#contatti"
                className="text-sm font-medium text-teal-700 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Iscriviti
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
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
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Send, Check } from "lucide-react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ageRange: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="iscriviti" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-teal-700 font-light mb-4" style={{ fontFamily: "'Georgia', 'Palatino', serif" }}>
            Vieni e vedi
          </h2>
          <p className="text-teal-600/70 text-lg">
            Compila il modulo per richiedere l'iscrizione all'esperienza estiva.
          </p>
        </div>

        {isSubmitted ? (
          <div className="text-center py-12 bg-teal-50 rounded-2xl">
            <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-teal-800 text-xl font-semibold mb-2">
              Richiesta inviata!
            </h3>
            <p className="text-teal-600/70">
              Ti risponderemo al più presto. Grazie per il tuo interesse.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-teal-700 font-medium mb-2">
                Nome e Cognome
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Il tuo nome completo"
                required
                className="w-full bg-stone-50 border-teal-200 focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-teal-700 font-medium mb-2">
                Email
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="La tua email"
                required
                className="w-full bg-stone-50 border-teal-200 focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            {/* Age Range Select */}
            <div>
              <label className="block text-teal-700 font-medium mb-2">
                Fascia d'età
              </label>
              <select
                name="ageRange"
                value={formData.ageRange}
                onChange={handleChange}
                required
                className="w-full bg-stone-50 border border-teal-200 rounded-md px-4 py-3 text-teal-800 focus:border-teal-500 focus:ring-teal-500 focus:outline-none"
              >
                <option value="" disabled>
                  Seleziona la tua fascia d'età
                </option>
                <option value="18-30">Giovane (18-30 anni)</option>
                <option value="30-40">Giovane Adulto (30-40 anni)</option>
              </select>
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-teal-700 font-medium mb-2">
                Il tuo messaggio
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Raccontaci brevemente perché desideri fermarti con noi..."
                rows={5}
                className="w-full bg-stone-50 border-teal-200 focus:border-teal-500 focus:ring-teal-500 resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg font-semibold rounded-xl transition-colors"
            >
              <Send className="w-5 h-5 mr-2" />
              Invia Richiesta
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
