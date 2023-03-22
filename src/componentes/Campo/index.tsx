import './Campo.css';

import React from 'react';

interface CampoProps {
    type?: 'text' | 'password' | 'date' | 'email' | 'number' | 'color',
    label: string,
    placeholder: string,
    obrigatorio: boolean,
    valor: string,
    aoAlterado: (valor: string) => void
}

const Campo = ({ type = 'text', label, placeholder, obrigatorio, valor, aoAlterado } : CampoProps) => {

    const aoDigitar = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value);
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input type={type} 
                value={valor} 
                onChange={aoDigitar} 
                required={obrigatorio} 
                placeholder={placeholder} 
            />
        </div>
    )
}

export default Campo;