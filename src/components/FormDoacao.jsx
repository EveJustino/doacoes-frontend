import { useEffect, useState } from "react"

function FormDoacao() {
  const [abrigos, setAbrigos] = useState([])
  const [form, setForm] = useState({
    doador_nome: "",
    item: "",
    quantidade: "",
    abrigo_id: ""
  })

  // carregar abrigos
  useEffect(() => {
    fetch("http://localhost:3000/abrigos")
      .then(res => res.json())
      .then(data => setAbrigos(data))
  }, [])

  // atualizar campos
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  // enviar doação
  async function handleSubmit(e) {
    e.preventDefault()

    await fetch("http://localhost:3000/doacoes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })

    alert("Doação enviada com sucesso! 💚")

    // limpar formulário
    setForm({
      doador_nome: "",
      item: "",
      quantidade: "",
      abrigo_id: ""
    })
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Fazer Doação</h2>

      <input
        type="text"
        name="doador_nome"
        placeholder="Seu nome"
        value={form.doador_nome}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="item"
        placeholder="Item (ex: água, roupa)"
        value={form.item}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="quantidade"
        placeholder="Quantidade"
        value={form.quantidade}
        onChange={handleChange}
        required
      />

      <select
        name="abrigo_id"
        value={form.abrigo_id}
        onChange={handleChange}
        required
      >
        <option value="">Selecione um abrigo</option>
        {abrigos.map(a => (
          <option key={a.id} value={a.id}>
            {a.nome}
          </option>
        ))}
      </select>

      <button type="submit">Doar</button>
    </form>
  )
}

export default FormDoacao