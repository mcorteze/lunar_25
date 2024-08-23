import React from 'react';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';

export default function MenuGeneral () {
  const navigate = useNavigate();

  const items = [
    {
      label: 'Inicio',
      icon: 'pi pi-fw pi-home',
      command: () => navigate('/inicio')
    },
    {
      label: 'Diario',
      icon: 'pi pi-fw pi-book',
      command: () => navigate('/diario')
    },
    {
      label: 'Crecimiento',
      icon: 'pi pi-fw pi-chart-bar',
      command: () => navigate('/crecimiento')
    },
    {
      label: 'Ajuste',
      icon: 'pi pi-fw pi-cog',
      command: () => navigate('/ajuste')
    }
  ];

  return (
    <div className="card">
      <Menubar model={items} />
    </div>
  );
};
