import React, { useState } from 'react';
import './checkmark.css';
import checkmarkImg from "../Assets/Checkmark.png"; // 1. Import the local image

const Checkmark = ({ onChange, checked: controlledChecked }) => {
  const [checked, setChecked] = useState(false);
  const isControlled = controlledChecked !== undefined;
  const finalChecked = isControlled ? controlledChecked : checked;

  const handleClick = () => {
    const nextChecked = !finalChecked;
    if (!isControlled) {
      setChecked(nextChecked);
    }
    if (onChange) {
      onChange(nextChecked);
    }
  };

  return (
    <button
      type="button"
      className={`checkmark-box ${finalChecked ? 'checked' : ''}`}
      aria-pressed={finalChecked}
      onClick={handleClick}
    >
      {/* 2. Use the imported image in an img tag */}
      <img src={checkmarkImg} alt="checkmark" className="checkmark-icon" />
    </button>
  );
};

export default Checkmark;