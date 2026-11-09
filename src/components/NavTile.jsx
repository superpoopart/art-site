import { Link } from 'react-router-dom'

/**
 * Round nav panel with PNG image button.
 * Renders an internal <Link> when `to` is a route path, or a plain <a>
 * when it's an external link.
 */
export default function NavTile({ to, external, tag, label, imageSrc, hoverImageSrc, disabled, fullImage }) {
  const content = fullImage ? (
    <>
      <img src={imageSrc} alt="" className="nav-tile__bg-image" />
      {hoverImageSrc && (
        <img src={hoverImageSrc} alt="" className="nav-tile__bg-image nav-tile__bg-image--hover" />
      )}
      {tag && <span className="nav-tile__tag nav-tile__tag--overlay">{tag}</span>}
      <span className="nav-tile__label nav-tile__label--overlay">{label}</span>
    </>
  ) : (
    <>
      {tag && <span className="nav-tile__tag">{tag}</span>}
      <div className="nav-tile__image-frame">
        <img src={imageSrc} alt="" className="nav-tile__image" />
      </div>
      <span className="nav-tile__label">{label}</span>
    </>
  )

  const className = `nav-tile${disabled ? ' nav-tile--disabled' : ''}${fullImage ? ' nav-tile--full-image' : ''}`

  if (disabled) {
    return (
      <div className={className} aria-disabled="true" tabIndex={-1}>
        {content}
      </div>
    )
  }

  if (external) {
    return (
      <a className={className} href={to} target="_blank" rel="noreferrer">
        {content}
      </a>
    )
  }

  return (
    <Link className={className} to={to}>
      {content}
    </Link>
  )
}
