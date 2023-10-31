import React from 'react';

function App() {
  return (
    <div className='App'>
      <h1>Progresso do Formulário</h1>

      <main>
        <div className='form-group'>
          <label htmlFor=''>Nome Completo</label>
          <input />
        </div>
        <div className='form-group'>
          <label htmlFor=''>E-mail</label>
          <input />
        </div>
        <div className='form-group'>
          <label htmlFor=''>Estado Civil</label>
          <select>
            <option value=''>- selecione...</option>
            <option value='solteiro'>Solteiro(a)</option>
            <option value='casado'>Casado(a)</option>
            <option value='divorciado'>Divorciado(a)</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor=''>Gênero</label>
          <div className='radios-container'>
            <span>
              <input type='radio' /> Masculino
            </span>
            <span>
              <input type='radio' /> Feminino
            </span>
          </div>
        </div>
        <button>Enviar Formulário</button>
      </main>
    </div>
  );
}

export default App;
