import { useState, useCallback } from 'react';
import CheckBox from '@components/CheckBox/CheckBox';
import Button from '@components/Button/Button';
import PassArea from '@components/PassArea/PassArea';
import { SecurePasswordGenerator } from '@utils/generatorAlgorithm';
import style from './App.module.css';

const generator = new SecurePasswordGenerator();

const App = () => {
  const [generatedText, setGeneratedText] = useState<string>('');
  const [useNumbers, setUseNumbers] = useState<boolean>(true);
  const [useSymbols, setUseSymbols] = useState<boolean>(true);

  const handleButtonClick = useCallback(() => {
    const newPassword = generator.generate(20, useNumbers, useSymbols);
    setGeneratedText(newPassword);
  }, [useNumbers, useSymbols]);

  return (
    <>
      <p>password generator</p>
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
      <PassArea text={generatedText}/>
      <Button text={'generate'} onClick={handleButtonClick}/>
      <Button text={'copy'} onClick={() => navigator.clipboard.writeText(generatedText)} />
    </>
  )
}

export default App;
