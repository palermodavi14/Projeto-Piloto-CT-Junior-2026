type ButtonProps = {
  texto: string;
};

function Button({ texto }: ButtonProps) {
  return (
    <button className="btn-login" type="submit">
      {texto}
    </button>
  );
}

export default Button;