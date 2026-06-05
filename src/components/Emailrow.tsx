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
        grid
        grid-cols-[2fr_1fr_3fr_1fr]
        items-center
        border
        border-orange-500
        rounded-xl
        p-4
        mb-4
      "
    >
      <span>{remetente}</span>
      <span>{nome}</span>
      <span>{titulo}</span>
      <span>{visto ? "Sim" : "Não"}</span>
    </div>
  );
}