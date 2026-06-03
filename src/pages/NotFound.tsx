import "../notfound.css"

export function NotFound(){

    return (
        <div>
            <h1 className="text-[28] flex items-center justify-center">Ops! Essa página não existe! 😔</h1>
            <a href="/" className="flex items-center justify-center text-black text-[10] no underline w-full hover:text-white hover:underline">
            Voltar para o Início</a>
        </div>

    )

}