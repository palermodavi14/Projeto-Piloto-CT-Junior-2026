import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import Button from "../components/Button";


export function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <div className="min-h-screen min-w-screen bg-[#dcdcdc] p-12">
        <div className="w-[1700]">
      <div className="flex gap-8">
        <Sidebar />

        <div className="flex-1 min-h-[750px] bg-white rounded-3xl shadow-md p-8">
          <h1 className="flex items-center
                        gap-3
                        text-[28px]
                        font-normal
                        text-black mb-8">Entrada</h1>

          <div className="grid grid-cols-[2fr_1fr_3fr_1fr] gap-4 text-[#ff6b00] text-xl mb-4">
            <span>Enviado por</span>
            <span>Nome</span>
            <span>Título</span>
            <span>Visto</span>
          </div>

          {/* Lista de emails virá aqui */}
        </div>
      </div>
    </div>
    </div>
  );
}