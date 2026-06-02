import "../cadastro.css"
import { Envelope, Key, User, Check } from "phosphor-react";
import Button from "../components/Button";
import logo from "../assets/logoemail.png";

import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

type FormData = {
    user: string
    email: string
    senha: string
    confirmarSenha: string  
}

const schema = yup.object({
    user: yup.string().required("Nome é obrigatório"),
    email: yup.string().required("Email é obrigatório"),
    senha: yup.string().required("Senha é obrigatório").min(6, "A senha precisa ter no mínimo 6 caracteres"),
    confirmarSenha: yup.string().required("Esse campo é obrigatório").oneOf([yup.ref('senha')], 'Senhas devem ser iguais')
})


export function Cadastro (){

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({ defaultValues: {
            user: "",
            email: "",
            senha: "",
            confirmarSenha: "",
        },
        resolver: yupResolver(schema)
        }) 
    
        function onSubmit(data:FormData){
            console.log(data)
        }


    return (
        <div className="cadastro-page">
        <div className="cadastro-container">
                 
            <img
                src= { logo }
                alt="Logo"
                className="cadastro-logo"
            />



            <form 
            className="cadastro-form"
            onSubmit={handleSubmit(onSubmit)}>

            <Controller
            control={control}
            name="user"
            render={({field}) => (
            <div className="input-container">
                <User size={ 24 } />
                <input type="text" placeholder= "Seu Nome" className="cadastro-input" {...field} />
            </div>)} />
            {errors.user?.message && <span className="error">{errors.user.message}</span>}

            <Controller
            control={control}
            name="email"
            render={({field}) => (
            <div className="input-container">
                <Envelope size={ 24 } />
                <input type="email" placeholder= "Seu CT-mail" className="cadastro-input" {...field} />
            </div>)} />
            {errors.email?.message && <span className="error">{errors.email.message}</span>}

            <Controller
            control={control}
            name="senha"
            render={({field}) => (
            <div className="input-container">
                <Key size={ 24 } />
                <input type="password" placeholder= "Sua senha" className="cadastro-input" {...field} />
            </div>)} />
            {errors.senha?.message && <span className="error">{errors.senha.message}</span>}

            <Controller
            control={control}
            name="confirmarSenha"
            render={({field}) => (
            <div className="input-container">
                <Check size={ 24 } />
                <input type="password" placeholder= "Confirmar senha" className="cadastro-input" {...field} />
            </div>)} />
            {errors.confirmarSenha?.message && <span className="error">{errors.confirmarSenha.message}</span>}

            <Button texto="Cadastrar" />

            <p>
                <a href="/" className="cadastro-link">
                    Voltar ao Login
                </a>
            </p>


            </form>
        </div>
        </div>
    );
}