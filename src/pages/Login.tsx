import { Envelope, Eye, EyeSlash, Key } from "phosphor-react";
import Button from "../components/Button";
import logo from "../assets/logoemail.png";
import { useNavigate } from "react-router-dom";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "../services/api";
import { useState } from "react";

const schema = z.object({
  email: z
    .email("Email inválido")
    .min(1, "Email é obrigatório"),

  password: z
    .string()
    .min(6, "A senha precisa ter no mínimo 6 caracteres"),
});

type FormData = z.infer<typeof schema>;

export function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    try {
      const response = await api.post("/login", {
        email: data.email,
        password: data.password,
      });

      const token = response.data.token;

      localStorage.setItem("token", token);

      console.log("Login realizado!");
      console.log(token);

      navigate("/home");
    } catch (error: any) {
      alert("Email ou senha inválidos");
    }
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
          className="
            w-full
            max-w-[400px]
            flex
            flex-col
            items-center
            gap-6
          "
        >
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
            <span className="text-red-500 text-sm flex items-center w-full">
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

                <div className="relative w-60 lg:w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Sua senha"
                    {...field}
                    className="
                      w-full
                      py-3
                      pr-10
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

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="
                      absolute
                      right-0
                      top-1/2
                      -translate-y-1/2
                      text-[#FF8E3D]
                      cursor-pointer
                    "
                  >
                    {showPassword ? (
                      <EyeSlash size={22} />
                    ) : (
                      <Eye size={22} />
                    )}
                  </button>
                </div>
              </div>
            )}
          />

          {errors.password?.message && (
            <span className="text-red-500 flex items-center text-sm w-full">
              {errors.password.message}
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