import React, { useState } from 'react';

function App() {

  const [data, setData] = useState({
    Name: '',
    email: '',
    maritalStatus: '',
    genre: ''
  });

  const handleClick = (event) => {

    const { name, value } = event.target;

    setData((prev) => {
      const newData = { ...prev, [name]: value };

      return newData;
    });

  };

  const calculateProgress = () => {
    let value = 0;
    let amountToAdd = 25;

    if (data.Name) {
      value += amountToAdd;
    }
    if (data.email) {
      value += amountToAdd;
    }
    if (data.maritalStatus) {
      value += amountToAdd;
    }
    if (data.genre) {
      value += amountToAdd;
    }

    return value;
  };

  calculateProgress();

  return (
    <div className='App'>
      <h1>Progresso do Formulário</h1>

      <main>
        <div className="bar-container">
          <div className="bar" style={{ width: '0%' }}></div>
        </div>
        <div className='form-group'>
          <label htmlFor=''>Nome Completo</label>
          <input name='Name' value={data.Name} onChange={handleClick} />
        </div>
        <div className='form-group'>
          <label htmlFor=''>E-mail</label>
          <input name='email' value={data.email} onChange={handleClick}/>
        </div>
        <div className='form-group'>
          <label htmlFor=''>Estado Civil</label>
          <select name='maritalStatus' value={data.maritalStatus} onChange={handleClick}>
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
              <input type='radio' name='genre' value="masculino" onChange={handleClick} checked={data.genre === 'masculino'} /> Masculino
            </span>
            <span>
              <input type='radio' name='genre' value="feminino" onChange={handleClick} checked={data.genre === 'masculino'} /> Feminino
            </span>
          </div>
        </div>
        <button>Enviar Formulário</button>
      </main>
    </div>
  );
}

export default App;
