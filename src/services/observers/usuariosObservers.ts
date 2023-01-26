import { LivrosGetType } from './../../interfaces/livrosInterfaces';
import React from 'react';
import { db } from './../../firebaseConfig';

const livrosRef = db.collection('livros');

export function getLivrosObserver(callback: React.Dispatch<React.SetStateAction<LivrosGetType[]>>, livrosType: string [], usersId: string){
    const usersRef = db.collection('livros').doc(usersId);
    livrosRef.where('type', 'in', livrosType).where('users', '==', usersRef).onSnapshot((snapshot)=> {
        const livros: LivrosGetType [] = []
        snapshot.forEach((doc)=> {
            livros.push({...doc.data() as LivrosGetType,
            id: doc.id})
        })
        callback(livros);
    })
}
