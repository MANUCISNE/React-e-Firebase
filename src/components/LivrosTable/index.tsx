import React from 'react';
import { LivrosGetType } from '../../interfaces/livrosInterfaces';
import { deleteLivrosActions } from '../../services/actions/usuariosAction';
import './style.css';

interface IProps {
    livros: LivrosGetType[];
}

const LivrosTable: React.FC<IProps> = ({ livros }) => {
    return (
        <>
            <table className='livros-table-box'>
                <tr className='livros-table-header'>
                    <th>Título do livro</th>
                    <th>Cor do livro</th>
                    <th>Categoria</th>
                    <th>Páginas</th>
                    <th>Ações</th>
                </tr>

                {livros.map((elem) => (
                    <tr className='livros-table-body'>
                        <td>
                            <p>{elem.titulo}</p>
                        </td>
                        <td>
                            <p>{elem.text}</p>
                        </td>
                        <td>
                            <p>{elem.type}</p>
                        </td>
                        <td>
                            <p>{elem.value}</p>
                        </td>
                        <td>
                            <button className='btns delete' onClick={() => { deleteLivrosActions(elem.id); }}>Delete</button>
                        </td>
                    </tr>

                ))}
            </table>
        </>
    );
}

export default LivrosTable;