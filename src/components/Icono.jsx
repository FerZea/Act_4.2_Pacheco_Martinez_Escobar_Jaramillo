const iconosSvg = {
  logout: (
    <svg viewBox="0 0 24 24" focusable="false">
      <path d="M10 6H6v12h4" />
      <path d="M14 8l4 4-4 4" />
      <path d="M18 12H9" />
    </svg>
  ),
  'cloud-saving': (
    <svg viewBox="0 0 24 24" focusable="false">
      <path d="M7 18H6.5a4 4 0 0 1-.6-7.9A6 6 0 0 1 17 8.6 4.7 4.7 0 0 1 18 18h-1" />
      <path d="M12 12v7" />
      <path d="M8.8 15.2 12 12l3.2 3.2" />
    </svg>
  ),
};

/**
 * Representa un icono usando clases CSS segun su nombre.
 *
 * @param {Object} props Propiedades del componente.
 * @param {string} props.nombre Nombre usado para construir la clase CSS del icono.
 * @returns {JSX.Element} Elemento visual del icono.
 */
function Icono({ nombre }) {
  return (
    <span className={`icono icono--${nombre}`} aria-hidden="true" data-figma-name="Icono">
      {iconosSvg[nombre]}
    </span>
  );
}

export default Icono;
