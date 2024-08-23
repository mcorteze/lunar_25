import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Aquí puedes agregar la lógica de autenticación
    navigate('/inicio');
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignInPage;
