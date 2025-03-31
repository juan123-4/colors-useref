import React, { useState } from 'react';
import BoxColor from '../Box/BoxColor';
import "./MyForm.css"


const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

const MyFormChallenge = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="contenedor">
      <input
        type="text"
        placeholder="Choose a color"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <div className="box-container">
        {colors.map((color) => (
          <BoxColor key={color} color={color} value={inputValue}  />
        ))}
      </div>
    </div>
  );
};

export default MyFormChallenge;
