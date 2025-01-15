import React, { useState } from 'react';
import '../styles/RegisterForm.css';  // Aggiungi il file CSS per lo stile

const RegisterForm = () => {
  // Stato per memorizzare i dati del form
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  // Stato per gestire gli errori di validazione
  const [error, setError] = useState('');

  // Funzione per gestire il cambiamento dei campi
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value // Aggiorna solo il campo che è cambiato
    });
  };

  // Funzione per gestire l'invio del form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validazione dei dati del form
    if (formData.username === '' || formData.email === '' || formData.password === '' || formData.confirmPassword === '') {
      setError('Tutti i campi sono obbligatori.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Le password non corrispondono.');
      return;
    }

    setError('');
    console.log('Dati inviati:', formData);
    // Qui puoi aggiungere la logica per inviare i dati a un server o API
  };

  return (
    <div className="register-form">
      <h2>Registrazione</h2>
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
            placeholder="Crea una password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Conferma Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            placeholder="Conferma la tua password"
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <button type="submit">Registrati</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
