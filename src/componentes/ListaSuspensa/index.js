import './ListaSuspensa.css';

const ListaSuspensa = ({label, obrigatorio, items, valor, aoAlterado}) => {
    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select value={valor} onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio}>
                { items.map((item) => (
                    <option key={item}  >{item}</option> 
                ))}
            </select>
        </div>
    )
}

export default ListaSuspensa;
