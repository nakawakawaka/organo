import Colaborador from '../Colaborador';
import hextoRgba from 'hex-to-rgba';
import './Time.css';

const Time = (props) => {
  return (
    props.colaboradores.length > 0 && <section className='time' style={{ backgroundColor: hextoRgba(props.cor, 0.6) }}>
      <input value={props.cor} onChange={evento => props.mudarCor(evento.target.value, props.nome)} type='color' className='input-cor' />
      <h3 style={{borderColor:  props.cor}}>{props.nome}</h3>

      <div className='colaboradores'>
      {props.colaboradores.map( colaborador => {
        
        return <Colaborador key={colaborador.nome} corDeFundo={props.cor} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} aoDeletar={props.aoDeletar} />
      } )}
      </div>
    </section>
  )
}

export default Time;