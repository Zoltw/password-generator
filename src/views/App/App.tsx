import { useCallback, useReducer } from 'react';
import CheckBox from '@components/CheckBox/CheckBox';
import Button from '@components/Button/Button';
import PassArea from '@components/PassArea/PassArea';
import Slider from '@components/Slider/Slider';
import { SecurePasswordGenerator } from '@utils/generatorAlgorithm';
import { initialState, reducer } from '@utils/reducer';
import style from './App.module.css';

const generator = new SecurePasswordGenerator();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleButtonClick = useCallback(() => {
    const newPassword = generator.generate(state.length, state.useNumbers, state.useSymbols);
    dispatch({ type: 'SET_GENERATED_TEXT', payload: newPassword });
  }, [state.length, state.useNumbers, state.useSymbols]);

  const handleSliderChange = useCallback((newValue: number) => {
    dispatch({ type: 'SET_LENGTH', payload: newValue });
  }, []);

  return (
    <div className={style.mainComponent}>
      <p>password generator</p>
      <PassArea text={state.generatedText}/>
      <CheckBox 
        label={'numbers'} 
        checked={state.useNumbers} 
        onCheckChange={(checked) => dispatch({ type: 'SET_USE_NUMBERS', payload: checked })}
      />
      <CheckBox 
        label={'symbols'} 
        checked={state.useSymbols} 
        onCheckChange={(checked) => dispatch({ type: 'SET_USE_SYMBOLS', payload: checked })}
      />
      <Slider value={state.length} onSliderChange={handleSliderChange}/>
      <p>{state.length}</p>
      <Button text={'generate'} onClick={handleButtonClick}/>
      <Button text={'copy'} onClick={() => navigator.clipboard.writeText(state.generatedText)} />
    </div>
  )
}

export default App;
