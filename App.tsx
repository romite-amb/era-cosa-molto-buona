import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import DailySchedule from "./components/DailySchedule";
import Dates from "./components/Dates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-100">
      <Header />
      <main>
        <Hero />
        <Experience />
        <DailySchedule />
        <Dates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}