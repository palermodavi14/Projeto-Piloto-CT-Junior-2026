type Props = {
  coluna1: string;
  coluna2: string;
  titulo: string;
  visto: boolean;
};

export function EmailRow({
  coluna1,
  coluna2,
  titulo,
  visto,
}: Props) {
  return (
    <div
      className="
        w-full
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
        {coluna1}
      </div>

      <div className="px-4 h-full flex items-center justify-center border-l-2 border-[#FF6B00]">
        {coluna2}
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