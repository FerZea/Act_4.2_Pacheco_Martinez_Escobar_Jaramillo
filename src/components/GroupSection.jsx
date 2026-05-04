import GroupCard from './GroupCard';

function GroupSection({ id, title, groups, emptyMessage }) {
  const hasGroups = groups.length > 0;

  return (
    <section className="group-section" aria-labelledby={id}>
      <div className="group-section__header">
        <h2 id={id}>{title}</h2>
        <button className="icon-button icon-button--light" type="button" aria-label={`Alternar ${title}`}>
          <span aria-hidden="true">^</span>
        </button>
      </div>

      <div className="group-section__body">
        {hasGroups ? (
          <div className="group-section__grid">
            {groups.map((group) => (
              <GroupCard key={group.id} {...group} />
            ))}
          </div>
        ) : (
          <p className="group-section__empty">{emptyMessage}</p>
        )}
      </div>
    </section>
  );
}

export default GroupSection;
