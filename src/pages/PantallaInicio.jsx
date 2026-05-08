import ContenedorSecundario from '../components/ContenedorSecundario';
import GridTarjetas from '../components/GridTarjetas';
import Header from '../components/Header';
import { gruposActuales, gruposPasados } from '../data/handoffData';

/**
 * Pantalla principal con los grupos actuales y pasados.
 *
 * @param {Object} props Propiedades del componente.
 * @param {function(): void} props.onLogout Funcion para cerrar sesion.
 * @param {function(): void} props.onVerGrupo Funcion para abrir el panel de grupo.
 * @param {function(): void} props.onRegistrarClase Funcion para abrir el registro de clase.
 * @returns {JSX.Element} Pantalla inicial del dashboard.
 */
function PantallaInicio({ onLogout, onVerGrupo, onRegistrarClase }) {
  return (
    <main className="handoff-screen handoff-screen--inicio" data-figma-name="Pantalla de inicio">
      <Header nombrePantalla="Pantalla" onLogout={onLogout} />

      <div className="pantalla-inicio__contenido">
        <ContenedorSecundario titulo="Grupos del semestre actual" mostrarChevron>
          <GridTarjetas groups={gruposActuales} onVerGrupo={onVerGrupo} onRegistrarClase={onRegistrarClase} />
        </ContenedorSecundario>

        <ContenedorSecundario titulo="Grupos de semestres pasados" mostrarChevron>
          <GridTarjetas groups={gruposPasados} onVerGrupo={onVerGrupo} />
        </ContenedorSecundario>
      </div>
    </main>
  );
}

export default PantallaInicio;
