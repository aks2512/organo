import { useEffect, useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#D9F7E9'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#E8F8FF'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#F0F8E2'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#FAE9F5'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFF5D9'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF'
    },
  ]);

  const [colaboradores, setColaboradores] = useState([
    {
      id: uuidv4(),
      nome: 'Jefferson Akira Fukamizu',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://github.com/aks2512.png',
      time: times[0].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Jefferson Akira Fukamizu',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://github.com/aks2512.png',
      time: times[0].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Jefferson Akira Fukamizu',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://github.com/aks2512.png',
      time: times[0].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Jefferson Akira Fukamizu',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://github.com/aks2512.png',
      time: times[0].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Jefferson Akira Fukamizu',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://github.com/aks2512.png',
      time: times[1].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Jefferson Akira Fukamizu',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://github.com/aks2512.png',
      time: times[1].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Jefferson Akira Fukamizu',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://github.com/aks2512.png',
      time: times[1].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Jefferson Akira Fukamizu',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://github.com/aks2512.png',
      time: times[1].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Jefferson Akira Fukamizu',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://github.com/aks2512.png',
      time: times[2].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Jefferson Akira Fukamizu',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://github.com/aks2512.png',
      time: times[2].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Jefferson Akira Fukamizu',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://github.com/aks2512.png',
      time: times[2].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Jefferson Akira Fukamizu',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://github.com/aks2512.png',
      time: times[2].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Jefferson Akira Fukamizu',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://github.com/aks2512.png',
      time: times[3].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Jefferson Akira Fukamizu',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://github.com/aks2512.png',
      time: times[3].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Jefferson Akira Fukamizu',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://github.com/aks2512.png',
      time: times[3].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Jefferson Akira Fukamizu',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://github.com/aks2512.png',
      time: times[3].nome,
      favorito: false
    },
  ]);

  useEffect(() => {
    if (colaboradores.length > 0) console.log(colaboradores);
  }, [colaboradores])


  const aoNovoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  const deletarColaborador = (id) => {
    console.log(colaboradores.filter((colaborador) => (colaborador.id !== id)));
    setColaboradores(colaboradores.filter((colaborador) => (colaborador.id !== id)));
  }

  const mudarCorDoTime = (id, cor) => {
    setTimes(times.map((time) => {
      if (time.id === id) time.cor = cor;
      return time;
    }));
  } 

  const cadastrarTime = (novoTime) => {
    setTimes([...times, {...novoTime, id: uuidv4()}]);
  }

  const resolverFavorito = (id) => {
    setColaboradores(colaboradores.map((colaborador) => { 
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }));
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map((time) => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaborador(colaborador)} 
      />
      {times.map(({ id, nome, cor}) => 
        <Time 
          key={id} 
          id={id}
          nome={nome} 
          colaboradores={colaboradores.filter(({time}) => time === nome )}
          cor={cor} 
          aoDeletar={deletarColaborador}
          aoMudarCor={mudarCorDoTime}
          aoFavoritar={resolverFavorito}
        />
      )}
      <Rodape />
    </div>
  );
}

export default App;
