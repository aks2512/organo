import React, { useState } from 'react';
import Botao from '../Botao';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import { v4 as uuidv4 } from 'uuid';
import { IColaborador } from '../../compartilhado/interfaces/IColaborador';
import { ITime } from '../../compartilhado/interfaces/ITime';

interface FormularioProps {
    aoColaboradorCadastrado: (colaborador: IColaborador) => void,
    times: string[],
    cadastrarTime: (novoTime: ITime) => void
}

const Formulario = ({ aoColaboradorCadastrado, times, cadastrarTime }: FormularioProps) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState(times[0]);

    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('#ffffff');

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        aoColaboradorCadastrado({
            id : uuidv4(),
            nome,
            cargo,
            imagem,
            time,
            favorito: false
        });
        setNome('');
        setCargo('');
        setImagem('');
        setTime(times[0]);
    }

    const aoSalvarTime = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        cadastrarTime({nome: nomeTime, cor: corTime});
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o seu Cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Campo 
                    obrigatorio={false}
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    items={times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>Criar Card</Botao>
            </form>
            <form className="formulario" onSubmit={aoSalvarTime}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo
                    obrigatorio={false}
                    label="Nome"
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Campo
                    obrigatorio={false}
                    type="color"
                    label="Cor"
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao>Criar um novo time</Botao>
            </form>
        </section>
    )
}

export default Formulario;