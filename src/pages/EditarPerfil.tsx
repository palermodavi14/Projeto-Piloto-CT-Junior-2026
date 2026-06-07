import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";



export function Editar() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <div className="min-h-screen min-w-screen bg-[#dcdcdc] p-8 flex justify-center items-center">
      <div className="flex gap-8">
        <Sidebar />

        <div className="w-[960px]
        min-h-[650px]
        max-h-[650px]
        bg-white
        rounded-3xl
        shadow-md
        p-8">
          <h1 className="flex items-center
                        gap-3
                        text-[28px]
                        font-normal
                        text-black mb-8">Editar Perfil</h1>

          <div className="grid grid-cols-[2fr_1fr_3fr_1fr] gap-4 text-[#ff6b00] text-xl mb-4">
            <span>Apagar:</span>
            <span>Para:</span>
            <span>Título</span>
            <span>Visto</span>
          </div>

          {/* Lista de emails virá aqui */}
        </div>
      </div>
    </div>
  );
}