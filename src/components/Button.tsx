type ButtonProps = {
  texto: string;
};

function Button({ texto }: ButtonProps) {
  return (
    <button className="
        w-48
        h-12
        rounded-lg
        bg-[#FF8E3D]
        text-white
        font-bold
        cursor-pointer
        transition-opacity
        hover:opacity-90
      " type="submit">
      {texto}
    </button>
  );
}

export default Button;