import ContenedorBotonesDia from './ContenedorBotonesDia';
import ContenedorFiltros from './ContenedorFiltros';

/**
 * Muestra el calendario junto con sus filtros y botones de dias.
 *
 * @param {Object} props Propiedades del componente.
 * @param {string[]} props.dias Lista de dias que se pintan en el calendario.
 * @returns {JSX.Element} Calendario con filtros y dias disponibles.
 */
function Calendario({ dias }) {
  return (
    <div className="calendario" data-figma-name="Calendario">
      <ContenedorFiltros />
      <ContenedorBotonesDia dias={dias} />
    </div>
  );
}

export default Calendario;
