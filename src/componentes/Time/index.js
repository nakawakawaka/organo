import Colaborador from '../Colaborador';
import hextoRgba from 'hex-to-rgba';
import './Time.css';

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
  return (
    colaboradores.length > 0 && <section className='time' style={{ backgroundColor: hextoRgba(time.cor, 0.6) }}>
      <input value={time.cor} onChange={evento => mudarCor(evento.target.value, time.id)} type='color' className='input-cor' />
      <h3 style={{borderColor:  time.cor}}>{time.nome}</h3>

      <div className='colaboradores'>
      {colaboradores.map( colaborador => {
        return <Colaborador 
                  key={colaborador.id} 
                  colaborador={colaborador}
                  corDeFundo={time.cor} 
                  aoDeletar={aoDeletar} 
                  aoFavoritar={aoFavoritar}
                />
      } )}
      </div>
    </section>
  )
}

export default Time;