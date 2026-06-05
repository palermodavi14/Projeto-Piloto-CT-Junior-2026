import { SignOut, User, PaperPlaneTilt, Envelope,} from "phosphor-react";
import logo from "../assets/logopreta.png";
import { SidebarButton } from "./SidebarButton";
import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom";



export function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="w-[320px] min-h-[700px] bg-white rounded-3xl shadow-md p-8">
      <img
        src= { logo }
        alt="Logo"
        className="w-56 mb-12"
      />

      <div className="flex flex-col gap-8 text-2xl">

        <SidebarButton
          icon={<Envelope size={32} />}
          text="Entrada"
          active
        />

        <SidebarButton
          icon={<PaperPlaneTilt size={32} />}
          text="Enviados"
        />

        <SidebarButton
          icon={<Envelope size={32} />}
          text="Enviar e-mail"
        />

        <SidebarButton
          icon={<User size={32} />}
          text="Editar perfil"
        />

        <SidebarButton
          icon={<SignOut size={32} />}
          text="Sair"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
}