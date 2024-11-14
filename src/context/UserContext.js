// src/context/UserContext.js
import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Inicialmente no hay usuario

  // Recuperar los datos del usuario desde el localStorage
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      fetchUserData(token);  // Recupera los datos del usuario si hay un token
    }
  }, []);

  const fetchUserData = (token) => {
    fetch('http://127.0.0.1:8000/api/user/profile/', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        setUser(data);  // Guarda la información del usuario en el estado
      })
      .catch(error => {
        console.error('Error al obtener los datos del usuario:', error);
      });
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    setUser(null); // Eliminar los datos del usuario del estado
  };

  return (
    <UserContext.Provider value={{ user, logout }}>
      {children}
    </UserContext.Provider>
  );
};
