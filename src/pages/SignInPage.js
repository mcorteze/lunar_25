import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const [username, setUsername] = useState(''); // Usamos "username" como campo
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Realizar la solicitud de autenticación al backend
    fetch('http://127.0.0.1:8000/api/token/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: password }) // Enviar "username"
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la autenticación');
      }
      return response.json();
    })
    .then(data => {
      // Almacenar el token en el almacenamiento local o en el estado de tu aplicación
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);

      // Redirigir al usuario a la página /inicio después de la autenticación exitosa
      navigate('/inicio'); 
    })
    .catch(error => {
      console.error('Error en la autenticación:', error);
      alert('Error al iniciar sesión. Verifica tus credenciales.');
    });
  };

  return (
    <div>
      <h1>Sign In</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignInPage;
