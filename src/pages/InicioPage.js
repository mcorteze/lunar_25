// InicioPage.js
import React, { useState, useEffect } from 'react';

const InicioPage = () => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // Obtener el token de acceso del almacenamiento local
    const token = localStorage.getItem('access_token');

    if (token) {
      fetch('http://127.0.0.1:8000/api/usuarios/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,  // Agregar el token en los headers
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error en la autenticación');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Datos del usuario:', data);
          setUsuario(data);
        })
        .catch((error) => {
          console.error('Error fetching usuario:', error);
        });
    }
  }, []);

  return (
    <div>
      <h1>Inicio Page</h1>
      <p>Bienvenido a la página de inicio.</p>

      {usuario ? (
        <div>
          <h2>Información del Usuario</h2>
          <p>Username: {usuario.usuario_id}</p>
          <p>Email: {usuario.email}</p>
        </div>
      ) : (
        <p>Cargando información del usuario...</p>
      )}
    </div>
  );
};

export default InicioPage;
