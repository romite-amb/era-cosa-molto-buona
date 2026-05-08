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