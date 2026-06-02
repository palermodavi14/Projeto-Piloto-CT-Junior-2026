import "../login.css"

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
            <input type="email" placeholder= "Seu ct-mail" className="login-input" />
            <input type="password" placeholder= "Sua senha" className="login-input" />
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