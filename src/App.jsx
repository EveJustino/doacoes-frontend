import { useEffect, useState } from "react";
import AbrigoCard from "./components/AbrigoCard";
import FormDoacao from "./components/FormDoacao";

function App() {
  const [abrigos, setAbrigos] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/abrigos")
      .then(res => res.json())
      .then(data => setAbrigos(data))
  }, [])

  return (
    <div className="container">
      <h1>🌊 Doações</h1>
      <p className="subtitle">Conectando doações a quem precisa</p>

      <FormDoacao />

      <div className="grid">
        {abrigos.map(abrigo => (
          <AbrigoCard key={abrigo.id} abrigo={abrigo} />
        ))}
      </div>
    </div>
  )
}



export default App