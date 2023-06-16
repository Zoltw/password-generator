import style from './Slider.module.css';

interface SliderProps {
  value: number;
  onSliderChange: (newValue: number) => void;
}

const Slider: React.FC<SliderProps> = ({ value, onSliderChange }): JSX.Element => {
  return (
    <div className={style.slider}>
      <input 
        type="range" 
        min="8" 
        max="30" 
        value={value} 
        onChange={(e) => onSliderChange(Number(e.target.value))}
      />
    </div>
  );
};

export default Slider;
