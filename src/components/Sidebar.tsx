import { SignOut, User, PaperPlaneTilt, Envelope,} from "phosphor-react";
import logo from "../assets/logopreta.png";
import { SidebarButton } from "./SidebarButton";
import { Navigate } from "react-router";
import { useNavigate, useLocation } from "react-router-dom";



export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className=" w-[320px]
                    h-[650px]
                    bg-white
                    rounded-3xl
                    shadow-md
                    px-12
                    pb-10
                    pt-12
                    ">
      <div className="h-10"></div>
      <img
        src= { logo }
        alt="Logo"
        className="w-64 mb-20 justify-center items-center"
      />
      <div className="h-20"></div>

      <div className="flex flex-col gap-12 text-2xl pl-100">

        <SidebarButton
          icon={<Envelope size={36} />}
          text="Entrada"
          active={location.pathname === "/home"}
          onClick={() => navigate("/home")}
        />

        <SidebarButton
          icon={<PaperPlaneTilt size={36} />}
          text="Enviados"
          active={location.pathname === "/enviadas"}
          onClick={() => navigate("/enviadas")}
        />

        <SidebarButton
          icon={<Envelope size={36} />}
          text="Enviar e-mail"
          active={location.pathname === "/enviaremail"}
          onClick={() => navigate("/enviaremail")}
        />

        <SidebarButton
          icon={<User size={36} />}
          text="Editar perfil"
          active={location.pathname === "/editarperfil"}
          onClick={() => navigate("/editarperfil")}
        />

        <SidebarButton
          icon={<SignOut size={36} />}
          text="Sair"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
}