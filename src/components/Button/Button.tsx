import style from './Button.module.css';

interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type }): JSX.Element => {
  return (
    <button
      className={style.roundButton}
      onClick={onClick}
      type={type} >
    {text}
    </button>
  );
};

export default Button;
