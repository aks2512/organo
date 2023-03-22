import './Time.css';
import hexToRgba from 'hex-to-rgba';
import { IColaborador } from '../../compartilhado/interfaces/IColaborador';
import Colaborador from '../Colaborador';
import { ITime } from '../../compartilhado/interfaces/ITime';

interface TimeProps extends ITime {
    colaboradores: IColaborador[],
    aoDeletar: (id: string) => void,
    aoMudarCor: (id: string | undefined, cor: string) => ITime | void,
    aoFavoritar: (id: string) => IColaborador | void
}

const Time = ({ id, nome, cor, colaboradores = [], aoDeletar, aoMudarCor, aoFavoritar} : TimeProps ) => {

    return (
        colaboradores.length > 0 
        ?
        (
            <section style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(cor, '0.6') }} className="time">
                <input value={cor} onChange={(evento) => aoMudarCor(id, evento.target.value)} type="color" className="input-cor" />
                <h3 style={{ borderColor: cor }}>{nome}</h3>
                <div className="colaboradores">
                    {colaboradores.map(({id, nome, cargo, imagem, favorito}) => (
                        <Colaborador
                            corDeFundo={cor}
                            key={id}
                            id={id}
                            nome={nome}
                            cargo={cargo}
                            imagem={imagem}
                            favorito={favorito}
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />
                    ))}
                </div>
            </section>
        ) 
        : 
            <></>
    )
}

export default Time;