import React from 'react';

import './style.css';

interface IProps{
    text:string;
    onClick?: ()=>void;
}

const Button: React.FC<IProps> = ({text = "", onClick})=> {
    return(
        <>
            <button className= 'btns' onClick={onClick}>{text}</button>
        </>
    );
}

export default Button;