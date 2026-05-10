interface ButtonProps {
  value: string;
  type: string;
  onClick: () => void;
}

function Buttons({ value, type, onClick }: ButtonProps) {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {value}
    </button>
  );
}

export default Buttons;
