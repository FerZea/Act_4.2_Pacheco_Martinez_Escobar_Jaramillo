import Header from '../components/Header';
import PanelGrupo from '../components/PanelGrupo';
import { diasClase } from '../data/handoffData';

/**
 * Pantalla con informacion y acciones de un grupo seleccionado.
 *
 * @param {Object} props Propiedades del componente.
 * @param {function(): void} props.onBack Funcion para volver a la pantalla anterior.
 * @param {function(): void} props.onLogout Funcion para cerrar sesion.
 * @returns {JSX.Element} Pantalla del panel de grupo.
 */
function PanelDeGrupo({ onBack, onLogout }) {
  return (
    <main className="handoff-screen handoff-screen--panel" data-figma-name="Panel de grupo">
      <Header nombrePantalla="Panel grupo" onBack={onBack} onLogout={onLogout} />

      <h2 className="panel-title">Estructuras de datos I - Grupo 20012</h2>
      <PanelGrupo dias={diasClase} />
    </main>
  );
}

export default PanelDeGrupo;
