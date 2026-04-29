import { useEffect, useState } from "react"
import NecessidadeItem from "./NecessidadeItem"

function AbrigoCard({ abrigo }) {
  const [necessidades, setNecessidades] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/necessidades")
      .then(res => res.json())
      .then(data => {
        const filtradas = data.filter(n => n.abrigo_id === abrigo.id)
        setNecessidades(filtradas)
      })
  }, [abrigo.id])

  return (
    <div className="card">
      <h2>{abrigo.nome}</h2>
      <p>{abrigo.endereco}</p>

      <h3>Necessidades:</h3>

      {necessidades.length === 0 ? (
        <p className="empty">Sem necessidades cadastradas</p>
      ) : (
        necessidades.map(n => (
          <NecessidadeItem key={n.id} necessidade={n} />
        ))
      )}
    </div>
  )
}

export default AbrigoCard