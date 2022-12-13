import React, {useState} from 'react';
import './App.css';



function App() {
  const [profNome, setProfNome] = useState("");
  const [numMatricula, setNumMatricula] = useState(0);

  return (
    <div className="App">
      <h1>Cadastro de professores</h1>

      <label>Nome:</label>
      <input type="text" onChange={(event) => {
        setProfNome(event.target.value)
        }}/>
      <label>Matricula:</label>
      <input type="number"/>
      <label>Email:</label>
      <button>Cadastrar</button>
    </div>
  );
}

export default App;
