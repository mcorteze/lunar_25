import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import InicioPage from './pages/InicioPage';
import DiarioPage from './pages/DiarioPage';
import CrecimientoPage from './pages/CrecimientoPage';
import AjustePage from './pages/AjustePage';
import LandingPage from './pages/LandingPage';
import ProtectedLayout from './components/ProtectedLayout';
import PublicLayout from './components/PublicLayout';

import 'primereact/resources/themes/saga-blue/theme.css'; // Reemplaza 'saga-blue' con tu tema preferido
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout><LandingPage /></PublicLayout>} />
      <Route path="/signin" element={<PublicLayout><SignInPage /></PublicLayout>} />
      <Route path="/inicio" element={<ProtectedLayout><InicioPage /></ProtectedLayout>} />
      <Route path="/diario" element={<ProtectedLayout><DiarioPage /></ProtectedLayout>} />
      <Route path="/crecimiento" element={<ProtectedLayout><CrecimientoPage /></ProtectedLayout>} />
      <Route path="/ajuste" element={<ProtectedLayout><AjustePage /></ProtectedLayout>} />
      <Route path="*" element={<Navigate to="/" />} /> {/* Redirecciona rutas desconocidas a la landing page */}
    </Routes>
  );
};

export default App;
