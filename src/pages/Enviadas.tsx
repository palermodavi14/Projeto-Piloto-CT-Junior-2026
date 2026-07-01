import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { EmailRow } from "../components/Emailrow";



export function Enviadas() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }
  }, []);

  const emails = [
  {
    apagar: "sodre@ctjunior.com.br",
    para: "Sodré",
    titulo: "Olá, cap.",
    visto: true,
  },
  {
    apagar: "enrico.massariol@ctjunior.com.br",
    para: "Enrico",
    titulo: "Qual o nome do cod que você s...",
    visto: true,
  },
  {
    apagar: "yuri@gmail.com",
    para: "Yuri",
    titulo: "Não estarei contigo amanhã.",
    visto: false,
  },
  {
    apagar: "arthur@ctjunior.com.br",
    para: "Arthur",
    titulo: "CT JUNIOR >>> Call of Duty.",
    visto: true,
  },
  {
    apagar: "soap@gmail.com",
    para: "Soap",
    titulo: "Warzone amanhã?",
    visto: false,
  },
  {
    apagar: "ghost@gmail.com",
    para: "Ghost",
    titulo: "Para de comprar skin.",
    visto: true,
  },
];

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
               p-8 
               flex
               flex-col">
       
       
       
                 <div className="w-[940px] mx-auto">
       
                   <h1 className="
                               gap-3
                               text-[28px]
                               font-normal
                               text-black mb-8 ml-10">Enviados</h1>
       
                 <div className="grid grid-cols-[2fr_1fr_3fr_1fr] text-[#ff6b00] text-xl mb-4">
                           <span className="text-center">Apagar:</span>
                           <span className="text-center">Para:</span>
                           <span className="text-center">Título:</span>
                           <span className="">Visto:</span>
                 </div>
                 <div className="flex-1 flex items-center justify-center">
                 <div className="flex flex-col mx-auto gap-4 ">
         {emails.map((email, index) => (
           <EmailRow
             key={index}
             coluna1={email.apagar}
             coluna2={email.para}
             titulo={email.titulo}
             visto={email.visto}
           />
         ))}
       </div>
       </div>
       </div>
               </div>
             </div>
           </div>
         );
       }