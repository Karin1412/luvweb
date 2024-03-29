import React, { useState, useEffect } from 'react';

const Header = () => {
  const [textColor, setTextColor] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTextColor((prevColor) => !prevColor);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [textColor]);

  return (
    <div>
      <h1 className={`underline text-3xl font-custom italic font-bold text-center ${textColor ? 'text-red-400' : 'text-pink-700'} mb-10`}>
        HAPPY NEW YEAR, MY BAE!!! 
      </h1>
    </div>
  );
};

export default Header;
