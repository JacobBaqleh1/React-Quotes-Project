import React, { useState } from 'react';

const fontOptions = ['Arial', 'Helvetica', 'Times New Roman', 'Courier'];

const TextChanger = () => {
  const [font, setFont] = useState('Arial');

  return (
    <div>
      <button
        onClick={() => {
          const nextFont = fontOptions[(fontOptions.indexOf(font) + 1) % fontOptions.length];
          setFont(nextFont);
        }}
      >
        Change Font
      </button>
      <div style={{ fontFamily: font }}>
        This is some sample text that will change font when the button is clicked.
      </div>
    </div>
  );
};

export default TextChanger;
