/**
 * Representa un icono usando clases CSS segun su nombre.
 *
 * @param {Object} props Propiedades del componente.
 * @param {string} props.nombre Nombre usado para construir la clase CSS del icono.
 * @returns {JSX.Element} Elemento visual del icono.
 */
function Icono({ nombre }) {
  return <span className={`icono icono--${nombre}`} aria-hidden="true" data-figma-name="Icono" />;
}

export default Icono;
