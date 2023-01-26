import React, { useEffect, useState } from 'react';
import LivrosPostModal from '../../components/LivrosPostModal';
import LivrosTable from '../../components/LivrosTable';
import { LivrosGetType } from '../../interfaces/livrosInterfaces';
import { addLivrosActions } from '../../services/actions/usuariosAction';
import { getLivrosObserver } from '../../services/observers/usuariosObservers';
import './style.css';


const LivrosList: React.FC = () => { 
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [livros, setLivros] = useState<LivrosGetType[]>([]);
  useEffect(()=>{
    getLivrosObserver(setLivros, ['suspense'], '9Z4H8Pl0bkCNYbMxp9hQ');
  },[]);

    return (
      
        <div className='livros-page-container'>
          
          {openModal && <LivrosPostModal closeModalFunction={()=>{setOpenModal(false)}}/>}

          <h1 className="logo container">Booker - Digital Library</h1> 

          <LivrosTable livros={livros}/>
    
            <button onClick={()=> {setOpenModal(true)}}className = 'btns'>Adicionar Livro</button>  
      
           
    
        </div>
    
    
      );
    }

export default LivrosList;






