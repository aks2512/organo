import './Colaborador.css';

const Colaborador = ({nome, cargo, imagem, corDeFundo}) => {
    return (
        <div className="colaborador">
            <div className="cabecalho" style={{ backgroundColor: corDeFundo}}>
                <img src={imagem !== '' ? imagem : `https://github.com/aks2512.png`} alt="Jefferson Akira Fukamizu" />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;