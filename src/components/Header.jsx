import Boton from './Boton';

/**
 * Muestra el encabezado principal de cada pantalla.
 *
 * @param {Object} props Propiedades del componente.
 * @param {string} props.nombrePantalla Titulo de la pantalla actual.
 * @param {string} [props.nombreUsuario='Usuario'] Nombre que aparece en el encabezado.
 * @param {boolean} [props.mostrarBotonAtras=true] Indica si se muestra el boton de regresar.
 * @param {boolean} [props.mostrarUsuario=true] Indica si se muestra el nombre del usuario.
 * @param {boolean} [props.mostrarBotonSalir=true] Indica si se muestra el boton de salir.
 * @param {function(): void} [props.onBack] Funcion que se ejecuta al regresar.
 * @param {function(): void} [props.onLogout] Funcion que se ejecuta al salir.
 * @returns {JSX.Element} Encabezado con titulo, usuario y acciones.
 */
function Header({
  nombrePantalla,
  nombreUsuario = 'Usuario',
  mostrarBotonAtras = true,
  mostrarUsuario = true,
  mostrarBotonSalir = true,
  onBack,
  onLogout,
}) {
  return (
    <header className="header" data-figma-name="Header">
      <div className="header__title-group">
        {mostrarBotonAtras && (
          <Boton soloIcono tamano="Mediano" icono="chevron-left" onClick={onBack} ariaLabel="Regresar" />
        )}
        <h1>{nombrePantalla}</h1>
      </div>

      <div className="header__actions">
        {mostrarUsuario && <span className="header__user">{nombreUsuario}</span>}
        {mostrarBotonSalir && (
          <Boton variante="Log out" icono="logout" onClick={onLogout}>
            Salir
          </Boton>
        )}
      </div>
    </header>
  );
}

export default Header;
