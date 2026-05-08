import TarjetaGrupo from './TarjetaGrupo';

/**
 * Muestra un conjunto de tarjetas de grupo en formato de grid.
 *
 * @param {Object} props Propiedades del componente.
 * @param {Object[]} props.groups Lista de grupos que se convierten en tarjetas.
 * @param {function(): void} [props.onVerGrupo] Funcion para abrir el panel de un grupo.
 * @param {function(): void} [props.onRegistrarClase] Funcion para abrir el registro de clase.
 * @returns {JSX.Element} Grid con tarjetas de grupos.
 */
function GridTarjetas({ groups, onVerGrupo, onRegistrarClase }) {
  return (
    <div className="grid-tarjetas" data-figma-name="Grid tarjetas">
      {groups.map((group) => (
        <TarjetaGrupo
          key={group.id}
          {...group}
          onVerGrupo={onVerGrupo}
          onRegistrarClase={onRegistrarClase}
        />
      ))}
    </div>
  );
}

export default GridTarjetas;
