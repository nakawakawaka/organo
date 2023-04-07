import './Rodape.css'

const Rodape = () => {
  return (
    <section className='rodapeOrgano'>
      <ul>
        <li>
          <a href='#'>
            <img src='imagens/fb.png' alt='logo facebook' />
          </a>
        </li>
        <li>
          <a href='#'>
            <img src='imagens/tw.png' alt='logo twitter' />
          </a>
        </li>
        <li>
          <a href='#'>
            <img src='imagens/ig.png' alt='logo instagram' />
          </a>
        </li>
      </ul>
      <div>
        <img src='/imagens/logo.png' alt='logo organo' />
      </div>
      <h5>Desenvolvido por Alura</h5>
    </section>
  )
}

export default Rodape