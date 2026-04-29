function NecessidadeItem({ necessidade }) {
    return (
      <div className={`item ${necessidade.prioridade}`}>
        <p><strong>{necessidade.item}</strong></p>
        <p>Qtd: {necessidade.quantidade}</p>
  
        {necessidade.prioridade === "alta" && (
          <span className="urgente">URGENTE</span>
        )}
      </div>
    )
  }
  
  export default NecessidadeItem