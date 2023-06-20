import { useState } from 'react';
import style from './CheckBox.module.css';

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onCheckChange?: (checked: boolean) => void;
}

const CheckBox: React.FC<CheckboxProps> = ({ label, checked = true, onCheckChange }): JSX.Element => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);

    if (onCheckChange) {
      onCheckChange(event.target.checked);
    }
  };

  return (
    <div className={style.checkBoxComponent}>
      <label>
        <input
          className={style.checkBoxInput}
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
