import React, { DetailedHTMLProps, FormHTMLAttributes, useState } from 'react';
import Button from '../../common/Button';
import Input from '../../common/Input';
import { addLivrosActions } from '../../services/actions/usuariosAction';

import './style.css';
interface IProps{
    closeModalFunction? : ()=>void;
}
const LivrosPostModal: React.FC<IProps> = ({closeModalFunction= ()=>{}}) => {
    const [tituloLivro, setTituloLivro] = useState<string>("");
    const [textLivro, setTextLivro] = useState<string>("");
    const [typeLivro, setTypeLivro] = useState<string>("");
    const [usersIdLivro, setUsersIdLivro] = useState<string>("");
    const [valueLivro, setValueLivro] = useState<number>(345);
    
    const handlerLivroText = (e: React.FormEvent<HTMLInputElement>) => {
        setTextLivro(e.currentTarget.value)
    }

    const handlerLivroTitulo = (e: React.FormEvent<HTMLInputElement>) => {
        setTituloLivro(e.currentTarget.value)
    }

    const handlerLivroType = (e: React.FormEvent<HTMLInputElement>) => {
        setTypeLivro(e.currentTarget.value)
    }

    const handlerLivroUsersId = (e: React.FormEvent<HTMLInputElement>) => {
        setUsersIdLivro(e.currentTarget.value)
    }

    const handlerLivroValue = (e: React.FormEvent<HTMLInputElement>) => {
        setValueLivro(e.currentTarget.valueAsNumber)
    }

    function handleSubmit() {
        addLivrosActions({
            titulo: tituloLivro,
            type: typeLivro,
            text: textLivro,
            value: valueLivro,
            usersId: usersIdLivro,
        })
        throw new Error('Function not implemented');
    }
    
    return (
        <div className='livros-post-modal-container'>
            <div onClick={()=>{closeModalFunction()}} className='livros-post-modal-closer'></div>
            <div className='livros-post-modal-content'>
                <header>
                    <h3>Adicionar Novo Livro</h3>
                </header>

                <form  onSubmit={() => {handleSubmit()}}>

                    <Input label= 'Título do Livro' placeholder= 'Digite o texto' value={tituloLivro} onChange={handlerLivroTitulo}/>

                    <Input label= 'Cor' placeholder= 'Digite o texto' value={textLivro} onChange={handlerLivroText}/>

                    <Input label= 'Categoria' placeholder= 'Digite o texto' value={typeLivro} onChange={handlerLivroType}/>

                    <Input label= 'Páginas' placeholder= 'Digite o texto' value={valueLivro} onChange={handlerLivroValue}/>
                    
                    <Input label= 'Identificador do Usuário' placeholder= 'Digite o texto' value={usersIdLivro} onChange={handlerLivroUsersId}/>

                    <Button text='Adicionar'/>
                    
                </form>
            </div>
        </div>
    )
}

export default LivrosPostModal;