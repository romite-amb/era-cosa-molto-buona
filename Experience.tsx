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