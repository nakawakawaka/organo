import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

// uma forma de escrevar um componente 
function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Front-end',
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Devops',
      cor: '#E06B69',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'UX e Design',
      cor: 'D86EBF',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Mobile',
      cor: '#FEBA05',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Inovação e Gestã',
      cor: '#FF8A29',
    },
  ])

  const inicial = [ 
    {
    id: uuidv4(),
    nome: 'Naoki Nakamura',
    cargo: 'Desenvolvedor Front-end',
    imagem: `https://github.com/nakawakawaka.png`,
    time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[0].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  const aoNovoColaboradorAdicionado = colaborador => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador]);
  }

  const deletarColaborador = (id) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  const mudarCorDoTime = (cor, id) => {
    setTimes(times.map(time => {
      if(time.id === id) time.cor = cor
      return time;
    }));
  }

  const cadastrarTime = (novoTime) => {
    setTimes([ ...times, {  ...novoTime, id: uuidv4() } ])
  }

  const resolverFavorito = (id) => {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} 
        cadastrarTime={cadastrarTime}
      />
      
      {times.map(time => <Time 
        key={time.id} 
        time={time}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
        mudarCor={mudarCorDoTime}
        aoFavoritar={resolverFavorito}
      />)}

      <Rodape />
    </div>
  );
}

export default App;
