import { Routes, Route } from "react-router"

import { Login } from "../pages/Login.tsx"
import { Cadastro } from "../pages/Cadastro.tsx"
import { NotFound } from "../pages/NotFound.tsx"
import { Home } from "../pages/Home.tsx"
import { Enviadas } from "../pages/Enviadas.tsx"
import { Enviar } from "../pages/Enviar.tsx"
import { Editar } from "../pages/EditarPerfil.tsx"

export function AppRoutes(){

    return (
        <Routes>
            <Route path="/" index element= {<Login/>} />
            <Route path="/cadastro" index element= {<Cadastro/>} />
            <Route path="/home" index element= {<Home/>} />
            <Route path="/enviadas" index element= {<Enviadas/>} />
            <Route path="/enviaremail" index element= {<Enviar/>} />
            <Route path="/editarperfil" index element= {<Editar/>} />
            

            
            <Route path="*" index element= {<NotFound/>} />
        </Routes>
    )
}