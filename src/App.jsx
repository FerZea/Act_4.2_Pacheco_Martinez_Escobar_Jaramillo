import { useState } from 'react';
import InicioSesion from './pages/InicioSesion';
import PanelDeGrupo from './pages/PanelDeGrupo';
import PantallaInicio from './pages/PantallaInicio';
import RegistroDeClase from './pages/RegistroDeClase';

/**
 * Componente raiz de la aplicacion.
 * Controla cual pantalla se muestra segun el estado actual.
 *
 * @returns {JSX.Element} Pantalla activa de la aplicacion.
 */
function App() {
  const [pantalla, setPantalla] = useState('inicio');

  if (pantalla === 'login') {
    return <InicioSesion onLogin={() => setPantalla('inicio')} />;
  }

  if (pantalla === 'registro') {
    return (
      <RegistroDeClase
        onBack={() => setPantalla('inicio')}
        onLogout={() => setPantalla('login')}
      />
    );
  }

  if (pantalla === 'panel') {
    return (
      <PanelDeGrupo
        onBack={() => setPantalla('inicio')}
        onLogout={() => setPantalla('login')}
      />
    );
  }

  return (
    <PantallaInicio
      onLogout={() => setPantalla('login')}
      onVerGrupo={() => setPantalla('panel')}
      onRegistrarClase={() => setPantalla('registro')}
    />
  );
}

export default App;
