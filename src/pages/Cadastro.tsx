import { Envelope, Key, User, Check, Eye, EyeSlash } from "phosphor-react";
import Button from "../components/Button";
import logo from "../assets/logoemail.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "../services/api";
import { toast } from "react-toastify";



const schema = z
  .object({
    nome: z.
    string()
    .min(1, "Nome é obrigatório"),

    email: z
      .email("Email inválido")
      .min(1, "Email é obrigatório"),

    password: z
      .string()
      .min(6, "A senha precisa ter no mínimo 6 caracteres"),

    passwordConfirm: z
      .string()
      .min(1, "Esse campo é obrigatório"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Senhas devem ser iguais",
    path: ["confirmarSenha"],
  });

  type FormData = z.infer<typeof schema>;

export function Cadastro() {
  const navigate = useNavigate();
  const [mostrarSenha,] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      nome: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    try {
    const response = await api.post("/user", {
      name: data.nome,
      email: data.email,
      password: data.password,
    });

    toast.success("Cadastro realizado com sucesso!");
    console.log("Usuário cadastrado!");
    console.log(response.data);
    navigate("/");

  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    toast.error("Não foi possível realizar o cadastro.");
  }
}

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#FF8E3D]">
      <div className="w-77 lg:w-200 h-140 lg:min-h-150 bg-black rounded-2xl flex flex-col items-center justify-center gap-8 p-12">
        <img
          src={logo}
          alt="Logo"
          className="w-36 sm:w-40 md:w-60 h-auto"
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full
                  max-w-[400px]
                  flex
                  flex-col
                  items-center
                  gap-6
                  justify-center"
        >
          <Controller
            control={control}
            name="nome"
            render={({ field }) => (
              <div className="flex items-center justify-center gap-3 w-full">
                <User
                  size={24}
                  className="text-[#FF8E3D] shrink-0"
                />

                <input
                  type="text"
                  placeholder="Seu Nome"
                  {...field}
                  className="
                    w-60
                    items-center
                    justify-center
                    lg:w-full
                    py-3
                    bg-transparent
                    text-white
                    text-base
                    border-0
                    border-b-2
                    border-[#FF8E3D]
                    outline-none
                    focus:outline-none
                    focus:ring-0
                  "
                />
              </div>
            )}
          />

          {errors.nome?.message && (
            <span className="text-red-500 text-sm">
              {errors.nome.message}
            </span>
          )}

          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <div className="flex items-center justify-center gap-3 w-full">
                <Envelope
                  size={24}
                  className="text-[#FF8E3D] shrink-0"
                />

                <input
                  type="email"
                  placeholder="Seu CT-mail"
                  {...field}
                  className="
                    w-60
                    items-center
                    justify-center
                    lg:w-full
                    py-3
                    bg-transparent
                    text-white
                    text-base
                    border-0
                    border-b-2
                    border-[#FF8E3D]
                    outline-none
                    focus:outline-none
                    focus:ring-0
                  "
                />
              </div>
            )}
          />

          {errors.email?.message && (
            <span className="text-red-500 text-sm">
              {errors.email.message}
            </span>
          )}

          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <div className="flex items-center justify-center gap-3 w-full">
                <Key
                  size={24}
                  className="text-[#FF8E3D] shrink-0"
                />

                <input
                  type={mostrarSenha ? "text" : "password"}
                  placeholder="Sua senha"
                  {...field}
                  className="
                    w-60
                    items-center
                    justify-center
                    lg:w-full
                    py-3
                    bg-transparent
                    text-white
                    text-base
                    border-0
                    border-b-2
                    border-[#FF8E3D]
                    outline-none
                    focus:outline-none
                    focus:ring-0
                  "
                />
              </div>
            )}
          />

          {errors.password?.message && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}

          <Controller
            control={control}
            name="passwordConfirm"
            render={({ field }) => (
              <div className="flex items-center justify-center gap-3 w-full">
                <Check
                  size={24}
                  className="text-[#FF8E3D] shrink-0"
                />

                <input
                  type="password"
                  placeholder="Confirmar senha"
                  {...field}
                  className="
                    w-60
                    items-center
                    justify-center
                    lg:w-full
                    py-3
                    bg-transparent
                    text-white
                    text-base
                    border-0
                    border-b-2
                    border-[#FF8E3D]
                    outline-none
                    focus:outline-none
                    focus:ring-0
                  "
                />
              </div>
            )}
          />

          {errors.passwordConfirm?.message && (
            <span className="text-red-500 text-sm">
              {errors.passwordConfirm.message}
            </span>
          )}

          <div className="flex justify-center mt-4">
            <Button texto="Cadastrar" />
          </div>

          <p className="text-center">
            <a
              href="/"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Voltar ao Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}