import Colaborador from '../Colaborador';
import './Time.css';

const Time = ({nome, corPrimaria, corSecundaria, colaboradores}) => {

    return (
        colaboradores.length > 0 &&
        (
            <section style={{ backgroundColor: corSecundaria }} className="time">
                <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
                <div className="colaboradores">
                    {colaboradores.map(({nome, cargo, imagem}) => (
                        <Colaborador
                            corDeFundo={corPrimaria}
                            key={nome}
                            nome={nome}
                            cargo={cargo}
                            imagem={imagem}
                        />
                    ))}
                </div>
            </section>
        )
    )
}

export default Time;