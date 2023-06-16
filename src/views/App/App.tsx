import { useState, useCallback } from 'react';
import CheckBox from '@components/CheckBox/CheckBox';
import Button from '@components/Button/Button';
import PassArea from '@components/PassArea/PassArea';
import Slider from '@components/Slider/Slider';
import { SecurePasswordGenerator } from '@utils/generatorAlgorithm';
import style from './App.module.css';

const generator = new SecurePasswordGenerator();

const App = () => {
  const [generatedText, setGeneratedText] = useState<string>('');
  const [useNumbers, setUseNumbers] = useState<boolean>(true);
  const [useSymbols, setUseSymbols] = useState<boolean>(true);
  const [length, setLength] = useState<number>(8);

  const handleButtonClick = useCallback(() => {
    const newPassword = generator.generate(length, useNumbers, useSymbols);
    setGeneratedText(newPassword);
  }, [length, useNumbers, useSymbols]);

  const handleSliderChange = (newValue: number) => {
    setLength(newValue);
  };

  return (
    <div className={style.mainComponent}>
      <p>password generator</p>
      <PassArea text={generatedText}/>
      <CheckBox 
        label={'numbers'} 
        checked={useNumbers} 
        onCheckChange={(isChecked) => setUseNumbers(isChecked)}
      />
      <CheckBox 
        label={'symbols'} 
        checked={useSymbols} 
        onCheckChange={(isChecked) => setUseSymbols(isChecked)}
      />
      <Slider value={length} onSliderChange={handleSliderChange}/>
      <p>{length}</p>
      <Button text={'generate'} onClick={handleButtonClick}/>
      <Button text={'copy'} onClick={() => navigator.clipboard.writeText(generatedText)} />
    </div>
  )
}

export default App;
