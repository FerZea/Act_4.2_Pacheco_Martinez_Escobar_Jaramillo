import ContenedorSecundario from '../components/ContenedorSecundario';
import FormularioInicioSesion from '../components/FormularioInicioSesion';
import Header from '../components/Header';

/**
 * Pantalla de inicio de sesion de la aplicacion.
 *
 * @param {Object} props Propiedades del componente.
 * @param {function(): void} props.onLogin Funcion que cambia a la pantalla principal.
 * @returns {JSX.Element} Pantalla con formulario de inicio de sesion.
 */
function InicioSesion({ onLogin }) {
  return (
    <main className="handoff-screen handoff-screen--login" data-figma-name="Inicio de sesión">
      <Header nombrePantalla="Iniciar sesión" mostrarBotonAtras={false} mostrarUsuario={false} mostrarBotonSalir={false} />

      <div className="login-content">
        <ContenedorSecundario titulo="Inicio de sesión" className="login-card">
          <FormularioInicioSesion onSubmit={onLogin} />
        </ContenedorSecundario>
      </div>
    </main>
  );
}

export default InicioSesion;
