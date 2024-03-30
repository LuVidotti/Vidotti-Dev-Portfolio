import Contato from "./components/Contato"
import Habilidades from "./components/Habilidades"
import Header from "./components/Header"
import Projetos from "./components/Projetos"
import SobreMim from "./components/SobreMim"

function App() {
  return (
    <div>
      <Header />
      <SobreMim />
      <Habilidades />
      <Projetos />
      <Contato />
    </div>
  )
}

export default App
