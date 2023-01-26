import { livrosType } from './../../interfaces/livrosInterfaces';
import { addLivrosAcess, deleteLivrosAcess, getLivrosAcess, setLivrosAcess, updateLivrosAcess } from "../dataAcess/usuariosAcess";

export async function addLivrosActions(body: livrosType){
    const response = await addLivrosAcess(body);
    return response.id;
}

export async function setLivrosActions(body: livrosType, id: string){
    const response = await setLivrosAcess(body, id);
    return response;
}

export async function updateLivrosActions(body: livrosType, id: string){
    const response = await updateLivrosAcess(body, id);
    return response;
}

export async function getLivrosActions(){
    const response = await getLivrosAcess();
    const usuarios: any [] = [];
    response.forEach((doc)=>{
        usuarios.push(doc.data())
    });
    return usuarios;
}

export async function deleteLivrosActions(id: string){
    const response = await deleteLivrosAcess(id);
    return response;
}