import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Progresso do formuário</h1>
      <main>
        <div className="form-group">
          <label htmlFor="">Nome Completo</label>
          <input />
        </div>
        <div className="form-group">
          <label htmlFor="">E-mail</label>
          <input />
        </div>
        <div className="form-group">
          <label htmlFor="">Estado Civil</label>
          <section>
            <option value="">- selecione...</option>
            <option value="solteiro">Solteiro</option>
            <option value="casado">Casa</option>
            <option value="solteiro">Solteiro</option>
          </section>
        </div>
        <div className="form-group">
          <label htmlFor="">Gênero</label>
          <div className="radios-container">
            <span>
              <input type="radio" /> Masculino
            </span>
            <span>
              <input type="radio" /> Feminino
            </span>
          </div>
        </div>
        <button>Enviar Formulário</button>
      </main>
    </div>
  );
}

export default App;
