import React,{useRef} from 'react';
import "./BoxColor.css"


const BoxColor = ({ color, value }) => {
  const boxRef=useRef(null)
  // esto syuda a verifica si el valor del input coincide con el color del cuadro
  const colores = value.toLowerCase() === color.toLowerCase();
  if (boxRef.current) {
    boxRef.current.style.backgroundColor = colores ? color : 'transparent';
  }

  return (
    <div
      ref={boxRef}
      className={`box ${color}`}
      style={{
        backgroundColor: colores ? color : 'transparent', 
        border: `5px solid ${color}`, 
        color:colores ? "black" : color
      }}
    >
      <p>{colores ? `Soy el color ${color}` : `No soy el color ${value}`}</p>
     
    </div>
  );
};

export default BoxColor;
