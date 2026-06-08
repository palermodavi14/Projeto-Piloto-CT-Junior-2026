type Props = {
  remetente: string;
  nome: string;
  titulo: string;
  visto: boolean;
};

export function EmailRow({
  remetente,
  nome,
  titulo,
  visto,
}: Props) {
  return (
    <div
      className="
        w-[95%]
        mx-auto
        grid
        grid-cols-[2fr_1fr_3fr_1fr]
        h-14
        border-2
        border-[#FF6B00]
        rounded-2xl
        overflow-hidden
      "
    >
      <div className="px-4 h-full flex items-center justify-center">
        {remetente}
      </div>

      <div className="px-4 h-full flex items-center justify-center border-l-2 border-[#FF6B00]">
        {nome}
      </div>

      <div className="px-4 h-full flex items-center justify-center border-l-2 border-[#FF6B00] truncate">
        {titulo}
      </div>

      <div className="px-4 h-full flex items-center justify-center border-l-2 border-[#FF6B00]">
        {visto ? "Sim" : "Não"}
      </div>
    </div>
  );
}