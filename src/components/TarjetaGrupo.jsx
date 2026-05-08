import BarraProgreso from './BarraProgreso';
import Boton from './Boton';

/**
 * Muestra la informacion resumida de un grupo y sus acciones disponibles.
 *
 * @param {Object} props Propiedades del componente.
 * @param {string} props.title Nombre de la materia.
 * @param {string} props.group Nombre o numero del grupo.
 * @param {string} props.schedule Horario del grupo.
 * @param {number} props.progress Porcentaje de avance mostrado en la barra.
 * @param {string} props.progressColor Variante de color de la barra de progreso.
 * @param {string[]} props.actions Acciones que se muestran como botones.
 * @param {function(): void} [props.onVerGrupo] Funcion para abrir el panel del grupo.
 * @param {function(): void} [props.onRegistrarClase] Funcion para abrir el registro de clase.
 * @returns {JSX.Element} Tarjeta visual de grupo.
 */
function TarjetaGrupo({ title, group, schedule, progress, progressColor, actions, onVerGrupo, onRegistrarClase }) {
  return (
    <article className="tarjeta-grupo" data-figma-name="Tarjeta-grupo">
      <BarraProgreso porcentaje={progress} color={progressColor} />

      <div className="tarjeta-grupo__contenido">
        <h3>{title}</h3>
        <p className="tarjeta-grupo__grupo">{group}</p>
        <p className="tarjeta-grupo__horario">{schedule}</p>

        <div className="tarjeta-grupo__acciones">
          {actions.map((action) => (
            <Boton
              key={action}
              variante={action === 'Registrar sesión' ? 'Primario' : 'Secundario'}
              tamano="Mediano"
              onClick={action === 'Registrar sesión' ? onRegistrarClase : onVerGrupo}
            >
              {action}
            </Boton>
          ))}
        </div>
      </div>
    </article>
  );
}

export default TarjetaGrupo;
