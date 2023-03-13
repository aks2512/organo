import './ListaSuspensa.css';
import { v4 as uuidv4 } from 'uuid';

const ListaSuspensa = ({label, obrigatorio, items, valor, aoAlterado}) => {
    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select value={valor} onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio}>
                { items.map((item) => (
                    <option key={uuidv4()} >{item}</option> 
                ))}
            </select>
        </div>
    )
}

export default ListaSuspensa;
