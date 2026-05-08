/**
 * Muestra el porcentaje de avance de un grupo.
 *
 * @param {Object} props Propiedades del componente.
 * @param {number} props.porcentaje Porcentaje que se muestra dentro de la barra.
 * @param {string} props.color Variante de color definida por CSS.
 * @returns {JSX.Element} Barra de progreso con porcentaje.
 */
function BarraProgreso({ porcentaje, color }) {
  return (
    <div className={`barra-progreso barra-progreso--${color}`} data-figma-name="Barra progreso">
      <span>{porcentaje}%</span>
    </div>
  );
}

export default BarraProgreso;
