import Header from "./components/Header";
import Hero from "./components/Hero";
import WhoWeHelp from "./components/WhoWeHelp";
import Understand from "./components/Understand";
import Strengthen from "./components/Strengthen";
import Fit from "./components/Fit";
import Wellbeing from "./components/Wellbeing";
import Audiences from "./components/Audiences";
import Process from "./components/Process";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhoWeHelp />
        <Understand />
        <Strengthen />
        <Fit />
        <Wellbeing />
        <Audiences />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
