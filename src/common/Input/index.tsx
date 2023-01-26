import React from 'react';
import Button from '../../common/Button';

import './style.css';

interface IProps {
    label?: string;
    placeholder?: string;
    value: string | number;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    type?: string;
}

const Input: React.FC<IProps> = ({label, placeholder = "", value, type = "text", onChange}) => {
    return (
        <div className='input-container'>
            {label &&
            <label>
                {label}
            </label>
            }
            <input value = {value} onChange = {onChange} type= {type} placeholder= {placeholder}>
            
            </input>
        </div>
    );
}

export default Input;