import Boton from './Boton';
import CampoDeTexto from './CampoDeTexto';

/**
 * Renderiza el formulario simple de inicio de sesion.
 *
 * @param {Object} props Propiedades del componente.
 * @param {function(): void} props.onSubmit Funcion que se ejecuta al enviar el formulario.
 * @returns {JSX.Element} Formulario con campos de RPE y contrasena.
 */
function FormularioInicioSesion({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form className="formulario-inicio-sesion" onSubmit={handleSubmit} data-figma-name="Formulario-Inicio de sesión">
      <CampoDeTexto etiqueta="RPE" requerido />
      <CampoDeTexto etiqueta="Contraseña" requerido type="password" />
      <Boton type="submit">Iniciar sesión</Boton>
    </form>
  );
}

export default FormularioInicioSesion;
