import './Colaborador.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { IColaborador } from '../../compartilhado/interfaces/IColaborador';

interface ColaboradorProps extends IColaborador {
    corDeFundo: string,
    favorito: boolean,
    aoDeletar: (id: string) => void,
    aoFavoritar: (id: string) => IColaborador | void,
}

const Colaborador = ({id, nome, cargo, imagem, data, corDeFundo, aoDeletar, favorito, aoFavoritar}: ColaboradorProps) => {
    
    const favoritar = () => {
        aoFavoritar(id);
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar,
        color: '#ff0000'
    }


    return (
        <div className="colaborador">
            <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(id)} />
            <div className="cabecalho" style={{ backgroundColor: corDeFundo}}>
                <img src={imagem !== '' ? imagem : `https://github.com/aks2512.png`} alt="Jefferson Akira Fukamizu" />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <h5>{new Date(data).toLocaleDateString()}</h5>
                <div className="favoritar" >
                    {favorito 
                        ? <AiFillHeart {... propsFavorito} /> 
                        : <AiOutlineHeart {... propsFavorito} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador;