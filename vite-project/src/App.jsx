import React, { useState } from "react";
import Card from "./Card";
import "./App.css";

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (input1.trim().length < 3 || input1.startsWith(" ") || input2.length < 6) {
      setErrorMessage("Por favor chequea que la información sea correcta");
      setShowCard(false);
    } else {
      setShowCard(true);
      setErrorMessage("");
    }
  };

  return (
    <div className="App">
      <h2>Elige un color</h2>
      <form onSubmit={handleFormSubmit} className="form">
        <div className="input-container">
          <input
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            placeholder="Ingresá tu nombre"
            className="input"
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            placeholder="Ingresá tu color favorito (formato HEX)"
            className="input"
          />
        </div>
        <button type="submit" className="button">Enviar</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
      {showCard && <Card input1={input1} input2={input2} />}
    </div>
  );
}

export default App;