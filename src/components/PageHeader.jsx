function PageHeader({ title, userName, logoutLabel }) {
  return (
    <header className="page-header">
      <div className="page-header__title-group">
        <button className="icon-button" type="button" aria-label="Regresar">
          <span aria-hidden="true">&lsaquo;</span>
        </button>
        <h1>{title}</h1>
      </div>

      <div className="page-header__actions">
        <span className="page-header__user">{userName}</span>
        <button className="logout-button" type="button">
          {logoutLabel}
        </button>
      </div>
    </header>
  );
}

export default PageHeader;
