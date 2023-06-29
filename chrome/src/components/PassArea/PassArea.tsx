import style from './PassArea.module.css';

interface PassAreaProps {
  text: string;
}

const PassArea: React.FC<PassAreaProps> = ({ text }): JSX.Element => {
  return (
    <div className={style.passArea}>
        <p>{text}</p>
    </div>
  );
};

export default PassArea;
