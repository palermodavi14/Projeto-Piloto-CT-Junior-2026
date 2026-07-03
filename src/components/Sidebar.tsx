import { SignOut, User, PaperPlaneTilt, Envelope } from "phosphor-react";
import logo from "../assets/logopreta.png";
import { SidebarButton } from "./SidebarButton";
import { useNavigate, useLocation } from "react-router-dom";

type SidebarProps = {
  nome?: string;
  foto?: string;
};

export function Sidebar({ nome, foto }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div
      className="
        w-[320px]
        h-[650px]
        bg-white
        rounded-3xl
        shadow-md
        px-14
        py-8
        flex
        flex-col
      "
    >
      <img
        src={logo}
        alt="Logo"
        className="w-64 mx-auto mt-8 mb-12"
      />

      <div className="flex-1 flex flex-col justify-center gap-5">
        <SidebarButton
          icon={<Envelope size={32} />}
          text="Entrada"
          active={location.pathname === "/home"}
          onClick={() => navigate("/home")}
        />

        <SidebarButton
          icon={<PaperPlaneTilt size={32} />}
          text="Enviados"
          active={location.pathname === "/enviadas"}
          onClick={() => navigate("/enviadas")}
        />

        <SidebarButton
          icon={<Envelope size={32} />}
          text="Enviar e-mail"
          active={location.pathname === "/enviaremail"}
          onClick={() => navigate("/enviaremail")}
        />

        <SidebarButton
          icon={<User size={32} />}
          text="Editar perfil"
          active={location.pathname === "/editarperfil"}
          onClick={() => navigate("/editarperfil")}
        />

        <SidebarButton
          icon={<SignOut size={32} />}
          text="Sair"
          onClick={handleLogout}
        />
     </div> 


      <div className="mt-auto pt-8 border-t border-gray-200 flex items-center gap-4">
        <img
          src={foto || "https://i.imgur.com/3QZQZ9B.jpeg"}
          alt="Foto de perfil"
          className="w-10 h-10 rounded-full object-cover mb-2"
        />

        <span className="text-lg font-medium text-gray-800 mb-2">
          {nome || "Captain Price"}
        </span>

        
      </div>
    </div>
  );
}