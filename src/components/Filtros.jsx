import CampoDeTexto from './CampoDeTexto';
import Input from './Input';

/**
 * Renderiza los campos de filtro usados por el calendario.
 *
 * @returns {JSX.Element} Grupo de filtros de mes, dia y tipo de actividad.
 */
function Filtros() {
  return (
    <div className="filtros" data-figma-name="Filtros">
      <Input etiqueta="Mes" valor="Lista de meses" />
      <CampoDeTexto etiqueta="Día" />
      <Input etiqueta="Tipo de actividad" valor="Tipo de actividades" />
    </div>
  );
}

export default Filtros;
