export function TwitterFollowCard ({ formatUserName, userName, name, isFollowing }) {
  const imageSrc = `https://github.com/${userName}.png`
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={imageSrc}
          alt="El avatar de sergioch96"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">
          {isFollowing ? 'Dejar de seguir' : 'Seguir'}
        </button>
      </aside>
    </article>
  )
}