import AreaDeTexto from './AreaDeTexto';
import Boton from './Boton';
import CampoDeTexto from './CampoDeTexto';
import Input from './Input';

/**
 * Muestra el formulario para registrar los datos de una clase.
 *
 * @param {Object} props Propiedades del componente.
 * @param {function(): void} props.onCancel Funcion que se ejecuta al cancelar el registro.
 * @returns {JSX.Element} Formulario con campos de fecha, tema, horas y descripcion.
 */
function FormularioRegistrarClase({ onCancel }) {
  return (
    <form className="formulario-registrar-clase" data-figma-name="Formulario-Registrar clase">
      <Input etiqueta="Fecha" valor="Fechas del semestre actual" requerido />

      <div className="formulario-registrar-clase__fila">
        <Input etiqueta="Tema" valor="Lista de temas" requerido />
        <Input etiqueta="Subtema" valor="Lista de subtemas" requerido />
      </div>

      <div className="formulario-registrar-clase__fila">
        <CampoDeTexto etiqueta="Horas" requerido />
        <Input etiqueta="Tipo de actividad" valor="Tipos de actividad" requerido />
      </div>

      <AreaDeTexto etiqueta="Descripción de actividad" />

      <div className="formulario-registrar-clase__acciones">
        <Boton variante="Secundario" onClick={onCancel}>
          Cancelar
        </Boton>
        <Boton>Registrar clase</Boton>
      </div>
    </form>
  );
}

export default FormularioRegistrarClase;
