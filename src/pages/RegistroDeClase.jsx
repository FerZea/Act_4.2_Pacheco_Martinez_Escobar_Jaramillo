import ContenedorSecundario from '../components/ContenedorSecundario';
import FormularioRegistrarClase from '../components/FormularioRegistrarClase';
import Header from '../components/Header';

/**
 * Pantalla para registrar una clase del dia.
 *
 * @param {Object} props Propiedades del componente.
 * @param {function(): void} props.onBack Funcion para volver a la pantalla anterior.
 * @param {function(): void} props.onLogout Funcion para cerrar sesion.
 * @returns {JSX.Element} Pantalla de registro de clase.
 */
function RegistroDeClase({ onBack, onLogout }) {
  return (
    <main className="handoff-screen handoff-screen--registro" data-figma-name="Registro de clase">
      <Header nombrePantalla="Registro de clase" onBack={onBack} onLogout={onLogout} />

      <div className="registro-content">
        <ContenedorSecundario titulo="Registrar clase">
          <h2 className="form-title">Ingrese los datos de la clase del día</h2>
          <FormularioRegistrarClase onCancel={onBack} />
        </ContenedorSecundario>
      </div>
    </main>
  );
}

export default RegistroDeClase;
