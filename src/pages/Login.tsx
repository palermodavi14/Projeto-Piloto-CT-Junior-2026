import "../login.css"
import { Envelope, Key } from "phosphor-react";

import Button from "../components/Button";
import logo from "../assets/logoemail.png";

import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

type FormData = {
    email: string
    senha: string   
}

const schema = yup.object({
    email: yup.string().required("Email é obrigatório"),
    senha: yup.string().required("Senha é obrigatório").min(6, "A senha precisa ter no mínimo 6 caracteres"),
})

export function Login (){
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({ defaultValues: {
        email: "",
        senha: "",
    },
    resolver: yupResolver(schema)
    }) 

    function onSubmit(data:FormData){
        console.log(data)
    }

    return (
        <div className="login-page">
        <div className="login-container">
        
            
            <img
                src= { logo }
                alt="Logo"
                className="login-logo"
            />

            <form 
            onSubmit={handleSubmit(onSubmit)}
            className="login-form">

                <Controller 
                control={ control }
                name="email"
                render={({ field }) => (<div className="input-container">
            <Envelope size={ 24 } />
            <input type="email" placeholder= "Seu CT-mail" className="login-input" {...field} />
            </div>)} />
            {errors.email?.message && <span className="error">{errors.email.message}</span>}



        <Controller
            control={control}
            name="senha"
            render={({field}) =>
            (<div className="input-container">
            <Key size={ 24 } />
            <input type="password" placeholder= "Sua senha" className="login-input" {...field} />
            </div>)} />

            {errors.senha?.message && <span className="error">{errors.senha.message}</span>}
        
            <Button texto="Entrar" />
        
            <p>
                <a href="/cadastro" className="cadastro-link">
                    Cadastre-se
                </a>
            </p>


            </form>
        </div>
        </div>
    );
}