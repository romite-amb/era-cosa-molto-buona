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