import firebase from "firebase";

export interface livrosType {
    text: string;
    type: string;
    titulo: string;
    value: number;
    usersId: string;
}

export interface livrosAddType {
    users?: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>;
    text: string;
    type: string;
    titulo: string;
    value: number;

}

export interface LivrosGetType {
    users: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>;
    text: string;
    type: string;
    titulo: string;
    value: number;
    id: string;
}