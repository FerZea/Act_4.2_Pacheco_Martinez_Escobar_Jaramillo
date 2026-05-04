function GroupCard({ title, group, schedule, progress, progressColor, actions }) {
  const progressClassName = `group-card__progress group-card__progress--${progressColor}`;

  return (
    <article className="group-card">
      <div className={progressClassName}>
        <span>{progress}%</span>
      </div>

      <div className="group-card__content">
        <div className="group-card__text">
          <h3>{title}</h3>
          <p className="group-card__group">{group}</p>
          <p className="group-card__schedule">{schedule}</p>
        </div>

        <div className="group-card__actions">
          {actions.map((action) => {
            const buttonClassName =
              action === 'Registrar sesión'
                ? 'group-card__button group-card__button--primary'
                : 'group-card__button group-card__button--secondary';

            return (
              <button key={action} className={buttonClassName} type="button">
                {action}
              </button>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default GroupCard;
