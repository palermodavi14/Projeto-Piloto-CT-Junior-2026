import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { User, PencilSimple } from "phosphor-react";
import Button from "../components/Button";

export function Editar() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");

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

        <div
          className="
            w-[960px]
            h-[650px]
            bg-white
            rounded-3xl
            shadow-md
            p-8
          "
        >
          <h1 className="text-[30px] font-normal text-black">
            Editar perfil
          </h1>

          <div className="flex flex-col items-center mt-8 gap-5">

            {/* Foto */}
            <img
              src={
                foto ||
                "https://i.imgur.com/3QZQZ9B.jpeg"
              }
              alt="Foto de perfil"
              className="w-44 h-44 rounded-full object-cover"
            />


            <h2 className="text-[32px] font-normal mt-5">
              Captain Price
            </h2>


            <div className="w-[500px] mt-8 flex flex-col gap-2">
              <div className="flex items-center gap-2 border-b border-orange-500 pb-2">
                <User size={24} />

                <input
                  type="text"
                  placeholder="Link foto de perfil"
                  value={foto}
                  onChange={(e) => setFoto(e.target.value)}
                  className="flex-1 outline-none"
                />
              </div>

              <div className="flex justify-center mt-5">
                <Button texto="Alterar foto" 
                className="!w-34 !h-7 text-sm" />
              </div>
            </div>

            <div className="w-[500px] mt-10 flex flex-col gap-2">
              <div className="flex items-center gap-2 border-b border-orange-500 pb-2">
                <PencilSimple size={24} />

                <input
                  type="text"
                  placeholder="Alterar nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="flex-1 outline-none"
                />
              </div>

              <div className="flex justify-center mt-5">
                <Button texto="Alterar nome"
                className="!w-34 !h-7 text-sm" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}