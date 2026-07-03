type ButtonProps = {
  texto: string;
  className?: string;
};

function Button({ texto, className = "" }: ButtonProps) {
  return (
    <button
      className={`
        w-36
        h-8
        lg:w-48
        lg:h-12
        rounded-lg
        bg-[#FF8E3D]
        text-white
        font-bold
        cursor-pointer
        transition-opacity
        hover:opacity-90
        ${className}
      `}
      type="submit"
    >
      {texto}
    </button>
  );
}

export default Button;