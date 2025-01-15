import React, { useState } from 'react';
import '../styles/LoginForm.css';  // Aggiungi il file CSS per lo stile

const LoginForm = () => {
  // Stato per memorizzare i dati del form
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // Stato per gestire l'errore di invio del form
  const [error, setError] = useState('');

  // Funzione per gestire il cambiamento dei campi
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value // Aggiorna il campo specificato
    });
  };

  // Funzione per gestire l'invio del form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validazione dei dati del form
    if (formData.username === '' || formData.password === '') {
      setError('Entrambi i campi sono obbligatori.');
      return;
    }

    setError('');
    console.log('Dati inviati:', formData);
    // Qui puoi aggiungere la logica per inviare i dati a un server
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nome Utente</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
            placeholder="Inserisci il nome utente"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            placeholder="Inserisci la password"
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <button type="submit">Accedi</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
