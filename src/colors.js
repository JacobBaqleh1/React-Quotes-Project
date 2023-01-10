import React, { useState } from 'react';

function RandomColorChanger() {
  const [color, setColor] = useState('#000000');

  const handleClick = () => {
    const newColor = getRandomColor();
    setColor(newColor);
  }

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div>
      <button onClick={handleClick}>Change Color</button>
      <p style={{color: color}}>The color is {color}</p>
    </div>
  );
}

export default RandomColorChanger;
