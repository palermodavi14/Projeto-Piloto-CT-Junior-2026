import "../login.css"
import { Envelope, Key } from "phosphor-react";

import Button from "../components/Button";
import logo from "../assets/logoemail.png";


export function Login (){
    return (
        <div className="login-page">
        <div className="login-container">
        
            
            <img
                src= { logo }
                alt="Logo"
                className="login-logo"
            />

            <form className="login-form">
        <div className="input-container">
            <Envelope size={ 24 } />
            <input type="email" placeholder= "Seu CT-mail" className="login-input" />
        </div>
        <div className="input-container">
            <Key size={ 24 } />
            <input type="password" placeholder= "Sua senha" className="login-input" />
        </div>
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