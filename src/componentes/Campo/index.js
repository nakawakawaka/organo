import './Campo.css'

const Campo = ({ type = 'texto', label, placeholder, valor, aoAlterado, obrigatorio }) => {

  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value)
  }

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input 
        type={type} 
        value={valor} 
        onChange={aoDigitado} 
        required={obrigatorio} 
        placeholder={placeholder} 
      />
    </div>
  )
}

export default Campo;