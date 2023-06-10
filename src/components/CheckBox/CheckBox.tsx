import React, { useState } from 'react';

interface CheckboxProps {
  label?: string;
  initialChecked?: boolean;
  onCheckChange?: (checked: boolean) => void;
}

const CheckBox: React.FC<CheckboxProps> = ({ label, initialChecked = false, onCheckChange }): JSX.Element => {
  const [isChecked, setIsChecked] = useState<boolean>(initialChecked);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);

    if (onCheckChange) {
      onCheckChange(event.target.checked);
    }
  };

  return (
    <div>
      <label>
        <input
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
