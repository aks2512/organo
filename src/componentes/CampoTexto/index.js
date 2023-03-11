import './CampoTexto.css';

const CampoTexto = ({ label, placeholder, obrigatorio, valor, aoAlterado }) => {

    const aoDigitar = (evento) => {
        aoAlterado(evento.target.value);
    }

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input value={valor} onChange={aoDigitar} required={obrigatorio} placeholder={placeholder} />
        </div>
    )
}

export default CampoTexto;