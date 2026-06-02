import { Routes, Route } from "react-router"

import { Login } from "../pages/Login.tsx"
import { Cadastro } from "../pages/Cadastro.tsx"
import { NotFound } from "../pages/NotFound.tsx"

export function AppRoutes(){

    return (
        <Routes>
            <Route path="/" index element= {<Login/>} />
            <Route path="/cadastro" index element= {<Cadastro/>} />
            
            

            
            <Route path="*" index element= {<NotFound/>} />
        </Routes>
    )
}