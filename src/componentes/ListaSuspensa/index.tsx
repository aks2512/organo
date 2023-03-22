import './ListaSuspensa.css';
import { v4 as uuidv4 } from 'uuid';

interface ListaSuspensaProps {
    label: string,
    obrigatorio?: boolean,
    items: string[],
    valor: string,
    aoAlterado: (valor: string) => void
}

const ListaSuspensa = ({label, obrigatorio = false, items, valor, aoAlterado}: ListaSuspensaProps) => {
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
