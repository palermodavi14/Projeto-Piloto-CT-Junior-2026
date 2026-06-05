import { Routes, Route } from "react-router"

import { Login } from "../pages/Login.tsx"
import { Cadastro } from "../pages/Cadastro.tsx"
import { NotFound } from "../pages/NotFound.tsx"
import { Home } from "../pages/Home.tsx"

export function AppRoutes(){

    return (
        <Routes>
            <Route path="/" index element= {<Login/>} />
            <Route path="/cadastro" index element= {<Cadastro/>} />
            <Route path="/home" index element= {<Home/>} />
            

            
            <Route path="*" index element= {<NotFound/>} />
        </Routes>
    )
}