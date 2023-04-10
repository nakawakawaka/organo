import { useState } from 'react'
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

// uma forma de escrevar um componente 
function App() {
  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      nome: 'Front-end',
      cor: '#82CFFA',
    },
    {
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      nome: 'Devops',
      cor: '#E06B69',
    },
    {
      nome: 'UX e Design',
      cor: 'D86EBF',
    },
    {
      nome: 'Mobile',
      cor: '#FEBA05',
    },
    {
      nome: 'Inovação e Gestã',
      cor: '#FF8A29',
    },
  ])

  const inicial = [ 
    {
    nome: 'naoki',
    cargo: 'senhor',
    imagem: `https://github.com/nakawakawaka.png`,
    time: 'Front-end'
    }
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  const aoNovoColaboradorAdicionado = colaborador => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador]);
  }

  const deletarColaborador = () => {
    console.log('deletando colaborador')
  }

  const mudarCorDoTime = (cor, nome) => {
    setTimes(times.map(time => {
      if(time.nome === nome) time.cor = cor
      return time;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        cor={time.cor} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
        mudarCor={mudarCorDoTime}
      />)}

      <Rodape />
    </div>
  );
}

export default App;
