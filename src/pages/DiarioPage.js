// src/pages/DiarioPage.js
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const DiarioPage = () => {
  const { user } = useContext(UserContext);  // Obtener el usuario autenticado

  if (!user) {
    return <div>Por favor, inicia sesión para ver tu diario.</div>;
  }

  return (
    <div>
      <h1>Diario de {user.first_name}</h1>
      <p>Aquí están tus entradas del diario personalizadas.</p>
      {/* Puedes usar la información del usuario para filtrar o mostrar sus datos */}
    </div>
  );
};

export default DiarioPage;
