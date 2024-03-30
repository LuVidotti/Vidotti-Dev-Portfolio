import { useEffect } from "react"
import Contato from "./components/Contato"
import Footer from "./components/Footer"
import Habilidades from "./components/Habilidades"
import Header from "./components/Header"
import Projetos from "./components/Projetos"
import SobreMim from "./components/SobreMim"
import AOS from "aos";
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Header />
      <SobreMim />
      <Habilidades />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  )
}

export default App
