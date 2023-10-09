// BoxComponent.js
import React, { useEffect, useState } from 'react';
import './App.css';

const BoxComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Agrega la clase "mostrar" después de que el componente se monte
    setIsVisible(true);
  }, []);

  return (
    <div className={`box-container ${isVisible ? 'mostrar' : ''}`}>
      <h2>Título del Cuadro</h2>
      <h3>Subtítulo</h3>
      <p>Descripcion</p>
    </div>
  );
};

export default BoxComponent;
