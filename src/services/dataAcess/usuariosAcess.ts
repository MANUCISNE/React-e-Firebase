import { livrosType, livrosAddType } from './../../interfaces/livrosInterfaces';
import { db } from './../../firebaseConfig';

const usuariosRef = db.collection('livros');

export async function addLivrosAcess(body: livrosType){
    const livrosObject: livrosAddType = {
        text: body.text,
        type: body.type,
        titulo: body.titulo,
        users: db.collection('livros').doc(body.usersId),
        value: body.value,
    }
    const response = await usuariosRef.add(livrosObject);
    return response;
}

export async function setLivrosAcess(body: livrosType, id: string){
    const livrosObject: livrosAddType = {
        text: body.text,
        type: body.type,
        titulo: body.titulo,
        users: db.collection('livros').doc(body.usersId),
        value: body.value,
    }
    const response = await usuariosRef.doc(id).set(livrosObject);
    return response;
}

export async function updateLivrosAcess(body: livrosType, id: string){
    const livrosObject: livrosAddType = {
        text: body.text,
        type: body.type,
        titulo: body.titulo,
        users: db.collection('livros').doc(body.usersId),
        value: body.value,
    }
    const response = await usuariosRef.doc(id).update(livrosObject);
    return response;
}

export async function getLivrosAcess(){
    const response = await usuariosRef.get();
    return response;
}

export async function deleteLivrosAcess(id: string){
    const response = await usuariosRef.doc(id).delete();
    return response;
}
