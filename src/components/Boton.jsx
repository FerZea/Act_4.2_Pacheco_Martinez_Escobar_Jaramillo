import Icono from './Icono';

/**
 * Renderiza un boton reutilizable con variantes, tamanos e icono opcional.
 *
 * @param {Object} props Propiedades del componente.
 * @param {import('react').ReactNode} props.children Contenido visible del boton.
 * @param {string} [props.variante='Primario'] Variante visual definida en CSS.
 * @param {string} [props.tamano='Grande'] Tamano visual del boton.
 * @param {string} [props.icono] Nombre del icono que se muestra dentro del boton.
 * @param {boolean} [props.soloIcono=false] Indica si el boton debe mostrar solo el icono.
 * @param {string} [props.type='button'] Tipo HTML del boton.
 * @param {function(): void} [props.onClick] Funcion que se ejecuta al hacer clic.
 * @param {string} [props.ariaLabel] Texto accesible para botones sin texto visible.
 * @returns {JSX.Element} Boton listo para usarse en formularios o acciones.
 */
function Boton({
  children,
  variante = 'Primario',
  tamano = 'Grande',
  icono,
  soloIcono = false,
  type = 'button',
  onClick,
  ariaLabel,
}) {
  const varianteClase = variante.toLowerCase().replaceAll(' ', '-');
  const tamanoClase = tamano.toLowerCase();
  const className = soloIcono
    ? `boton-icono boton-icono--${tamanoClase}`
    : `boton boton--${varianteClase} boton--${tamanoClase}`;

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      data-figma-name="Botón"
    >
      {icono && <Icono nombre={icono} />}
      {!soloIcono && <span>{children}</span>}
    </button>
  );
}

export default Boton;
