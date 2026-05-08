import CalendarioContenedor from './CalendarioContenedor';
import GestionOffline from './GestionOffline';

/**
 * Agrupa las secciones principales del panel de grupo.
 *
 * @param {Object} props Propiedades del componente.
 * @param {string[]} props.dias Lista de dias de clase para el calendario.
 * @returns {JSX.Element} Panel con gestion offline y calendario.
 */
function PanelGrupo({ dias }) {
  return (
    <section className="panel-grupo" data-figma-name="Panel Grupo">
      <div data-figma-name="Contenedor - Gestiòn offline">
        <GestionOffline />
      </div>
      <CalendarioContenedor dias={dias} />
    </section>
  );
}

export default PanelGrupo;
