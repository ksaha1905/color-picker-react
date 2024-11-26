import React, { useState } from "react";


const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF");
  function handleColorChange(event) {
    setColor(event.target.value);
  }

  function randomColor (){
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let hexColor = "#";
    for(let i=0; i<6; i++){
        hexColor = hexColor + hex[Math.floor(Math.random()*hex.length)];
    }
    setColor(hexColor);

  }


  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <p>Selected Color: {color.toLocaleUpperCase()}</p>
      <div className="color-display" style={{backgroundColor: color}}>
        
      </div>
      <label>Select a Color:</label>
      <input type="color" value={color} onChange={handleColorChange} />
      <button onClick={randomColor}>Generate Random Color</button>
    </div>
  );
};

export default ColorPicker;
