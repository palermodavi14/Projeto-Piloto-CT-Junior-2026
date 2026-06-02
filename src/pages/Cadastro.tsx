import "../cadastro.css"
import { Envelope, Key, User, Check } from "phosphor-react";
import Button from "../components/Button";
import logo from "../assets/logoemail.png";


export function Cadastro (){
    return (
        <div className="cadastro-page">
        <div className="cadastro-container">
        
            
            <img
                src= { logo }
                alt="Logo"
                className="cadastro-logo"
            />

            <form className="cadastro-form">
            <div className="input-container">
                <User size={ 24 } />
                <input type="text" placeholder= "Seu Nome" className="cadastro-input" />
            </div>
            <div className="input-container">
                <Envelope size={ 24 } />
                <input type="email" placeholder= "Seu CT-mail" className="cadastro-input" />
            </div>
            <div className="input-container">
                <Key size={ 24 } />
                <input type="password" placeholder= "Sua senha" className="cadastro-input" />
            </div>
            <div className="input-container">
                <Check size={ 24 } />
                <input type="password" placeholder= "Confirmar senha" className="cadastro-input" />
            </div>
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