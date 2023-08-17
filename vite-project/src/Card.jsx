import React from "react";
import "./App.css";

const Card = ({ input1, input2 }) => {
  return (
    <div className="card">
      <p>Hola {input1}!</p>
      <p>Sabemos que tu color favorito es:</p>
      <p>#{input2}</p>
    </div>
  );
};

export default Card;