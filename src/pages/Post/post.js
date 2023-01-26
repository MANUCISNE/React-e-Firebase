import React, { useRef } from 'react'
import axios from 'axios'

import { useHistory } from 'react-router-dom'


import Header from '../../components/Header/Header'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import './post.css'

const validationPost = yup.object().shape({
    title: yup.string().required("O preenchimento é obrigatório").max(40, "O título precisa ter menosde 40 caracteres"),
    description: yup.string().required("O preenchimento é obrigatório").max(150, "A descrição precisa ter menosde 150 caracteres"),
    content: yup.string().required("O preenchimento é preenchimento").max(500, "O conteúdo precisa ter menosde 500 caracteres")
})

function Post() {

    let history = useHistory()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationPost)
    })

    const addPost = data => axios.post("https://localhost:3000/post", data)
    .then(() => {
        console.log("Deu tudo certo")
        history.push("/")
    })
    .catch(() => {
        console.log("DEU ERRADO")
    })

    return(
        <div>
            <Header />

            <main>

                <div className="card-post" >

                    <h1>Novo Usuário</h1>
                    <div className="line-post" ></div>

                    <div className="card-body-post" >

                        <form onSubmit={handleSubmit(addPost)} >

                            <div className="fields" >
                                <label>Nome</label>
                                <input type="text" name="title" {...register("title")} />
                                <p className="error-message">{errors.title?.message}</p>
                            </div>

                            <div className="fields" >
                                <label>Idade</label>
                                <input type="text" name="description" {...register("description")} />
                                <p className="error-message">{errors.description?.message}</p>
                            </div>

                            <div className="fields" >
                                <label> E-mail</label>
                                <input type="text" name="description" {...register("description")} />
                                <p className="error-message">{errors.description?.message}</p>
                            </div>

                            <div className="fields" >
                                <label>CPF</label>
                                <input type="text" name="description" {...register("description")} />
                                <p className="error-message">{errors.description?.message}</p>
                            </div>

                            <div className="fields" >
                                <label>Mais informações</label>
                                <textarea type="text" name="content" {...register("content")} ></textarea>
                                <p className="error-message">{errors.content?.message}</p>
                            </div>

                            <div className="btn-post" >
                                <button type="submit" >Enviar</button>
                            </div>

                        </form>

                    </div>

                </div>

            </main>

        </div>
    )
}

function LocalStorage(){
    const data=useRef();
    const handleClick=(_addPost)=>{
        console.log(data.current.value,"initial value")
        localStorage.setItem("submitValue",data.current.value)
    }
    console.log(localStorage.getItem("submitValue"),"****")
    return(
        <>
            <input ref={data} />
            <button onClick={handleClick}>Add</button>
        </>
    );
}


export default Post