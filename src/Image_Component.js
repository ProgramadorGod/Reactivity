// ImageComponent.js
import React, { useEffect, useState } from 'react';
import BoxComponent from './Box';
import './App.css';

const ImageComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Agrega la clase "mostrar" después de que el componente se monte
    setIsVisible(true);
  }, []);

  return (
    <div className={`image-container ${isVisible ? 'show' : ''}`}>
      <img src="Images/380233231_223812894008325_8679930486141679490_n.jpg" alt="a" />
      <BoxComponent/>
    </div>
  );
};


export default ImageComponent;
