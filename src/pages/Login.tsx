import { Envelope, Key } from "phosphor-react";
import Button from "../components/Button";
import logo from "../assets/logoemail.png";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";


const schema = z
  .object({
    email: z

      .email("Email inválido")
      .min(1, "Email é obrigatório"),

    senha: z
      .string()
      .min(6, "A senha precisa ter no mínimo 6 caracteres"),

  })

  type FormData = z.infer<typeof schema>;

  export function Login() {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>({
      defaultValues: {
        email: "",
        senha: "",
      },
      resolver: zodResolver(schema),
    });

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#FF8E3D]">
      <div className="w-77 lg:w-200 h-100 lg:h-125 bg-black rounded-2xl flex flex-col items-center justify-center gap-8 p-12">

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
                  gap-6">
        
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
            <span className="text-red-500 text-sm flex items-center justify-center w-full">
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
            <span className="text-red-500 flex items-center justify-center text-sm w-full">
              {errors.senha.message}
            </span>
          )}

          <Button texto="Entrar" />

          <p>
            <a
              href="/cadastro"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Cadastre-se
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}