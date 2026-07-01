import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { EnvelopeSimple, PaperPlaneTilt } from "phosphor-react";
import Button from "../components/Button";

export function Enviar() {
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
          <div className="w-[864px] mx-auto">
            <h1 className="self-start text-[30px] font-normal text-black mb-8">
              Enviar e-mail
            </h1>
            <div className="w-[700px] mx-auto flex flex-col gap-3 ">
            {/* Destinatário */}
            <div className="w-full  flex items-center gap-3 border-b-2 border-[#FF6B00] pb-2 mb-8">
              <EnvelopeSimple size={24} />
              <input
                type="email"
                placeholder="CT-mail destinatário"
                className="w-full outline-none text-2xl placeholder:text-gray-500"
              />
            </div>

            {/* Título */}
            <div className="w-full max-w-[700px] mx-auto flex items-center gap-3 border-b-2 border-[#FF6B00] pb-2 mb-6">
              <PaperPlaneTilt size={24} />
              <input
                type="text"
                placeholder="Título"
                className="w-full outline-none text-2xl placeholder:text-gray-500"
              />
            </div>

            {/* Conteúdo */}
            <div className="w-[700px] mx-auto flex items-center items-start gap-3 border-2 border-[#FF6B00] rounded-xl p-4 h-[280px] mb-8">

              <textarea
                placeholder="Conteúdo..."
                className="
                  w-full
                  h-full
                  resize-none
                  outline-none
                  text-xl
                  placeholder:text-gray-500
                "
              />
            </div>

            {/* Botão */}
            <div className="flex justify-center">
              <Button texto="Enviar" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}