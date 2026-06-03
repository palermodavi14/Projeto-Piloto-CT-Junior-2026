import { Envelope, Key, User, Check } from "phosphor-react";
import Button from "../components/Button";
import logo from "../assets/logoemail.png";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";




const schema = z
  .object({
    user: z.string().min(1, "Nome é obrigatório"),

    email: z
      .string()
      .min(1, "Email é obrigatório")
      .email("Email inválido"),

    senha: z
      .string()
      .min(6, "A senha precisa ter no mínimo 6 caracteres"),

    confirmarSenha: z
      .string()
      .min(1, "Esse campo é obrigatório"),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    message: "Senhas devem ser iguais",
    path: ["confirmarSenha"],
  });

  type FormData = z.infer<typeof schema>;

export function Cadastro() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      user: "",
      email: "",
      senha: "",
      confirmarSenha: "",
    },
    resolver: zodResolver(schema),
  });

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#FF8E3D]">
      <div className="w-[800px] min-h-[600px] bg-black rounded-2xl flex flex-col items-center justify-center gap-8 p-12">
        <img
          src={logo}
          alt="Logo"
          className="w-60 h-auto"
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-95 flex flex-col gap-4 px-6"
        >
          <Controller
            control={control}
            name="user"
            render={({ field }) => (
              <div className="flex items-center gap-3 w-full">
                <User
                  size={24}
                  className="text-[#FF8E3D] shrink-0"
                />

                <input
                  type="text"
                  placeholder="Seu Nome"
                  {...field}
                  className="
                    w-full
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

          {errors.user?.message && (
            <span className="text-red-500 text-sm">
              {errors.user.message}
            </span>
          )}

          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <div className="flex items-center gap-3 w-full">
                <Envelope
                  size={24}
                  className="text-[#FF8E3D] shrink-0"
                />

                <input
                  type="email"
                  placeholder="Seu CT-mail"
                  {...field}
                  className="
                    w-full
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
            name="senha"
            render={({ field }) => (
              <div className="flex items-center gap-3 w-full">
                <Key
                  size={24}
                  className="text-[#FF8E3D] shrink-0"
                />

                <input
                  type="password"
                  placeholder="Sua senha"
                  {...field}
                  className="
                    w-full
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

          {errors.senha?.message && (
            <span className="text-red-500 text-sm">
              {errors.senha.message}
            </span>
          )}

          <Controller
            control={control}
            name="confirmarSenha"
            render={({ field }) => (
              <div className="flex items-center gap-3 w-full">
                <Check
                  size={24}
                  className="text-[#FF8E3D] shrink-0"
                />

                <input
                  type="password"
                  placeholder="Confirmar senha"
                  {...field}
                  className="
                    w-full
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

          {errors.confirmarSenha?.message && (
            <span className="text-red-500 text-sm">
              {errors.confirmarSenha.message}
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