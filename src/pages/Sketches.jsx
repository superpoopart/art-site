import { useEffect, useState } from 'react'
import { ARTWORK } from '../data/artwork.js'
import BackLink from '../components/BackLink.jsx'

export default function Sketches() {
  const [nsfwEnabled, setNsfwEnabled] = useState(false)
  const [showWarning, setShowWarning] = useState(false)
  const [hasConfirmed, setHasConfirmed] = useState(false)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (!selected) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selected])

  useEffect(() => {
    document.body.classList.toggle('nsfw-dark', nsfwEnabled)
    return () => document.body.classList.remove('nsfw-dark')
  }, [nsfwEnabled])

  const handleToggle = () => {
    if (!nsfwEnabled && !hasConfirmed) {
      setShowWarning(true)
      return
    }
    setNsfwEnabled((v) => !v)
  }

  const confirmWarning = () => {
    setHasConfirmed(true)
    setNsfwEnabled(true)
    setShowWarning(false)
  }

  const visibleArtwork = ARTWORK.filter((piece) => piece.nsfw === nsfwEnabled)

  return (
    <main className="page">
      <BackLink />
      <header className="page__header">
        <span className="page__tag">// GALLERY</span>
        <h1 className="page__title">Gallery</h1>
      </header>
      <div className="page__content">
        <div className="nsfw-toggle-row">
          <span className="nsfw-toggle-row__label">NSFW content</span>
          <button
            type="button"
            role="switch"
            aria-checked={nsfwEnabled}
            aria-label="Toggle NSFW content"
            className={`nsfw-toggle${nsfwEnabled ? ' nsfw-toggle--on' : ''}`}
            onClick={handleToggle}
          >
            <span className="nsfw-toggle__thumb" />
          </button>
        </div>
        {visibleArtwork.length === 0 ? (
          <p>{nsfwEnabled ? 'No NSFW pieces yet...' : 'Gallery coming soon...'}</p>
        ) : (
          <div className="art-grid">
            {visibleArtwork.map((piece) => (
              <figure
                key={piece.id}
                className="art-card"
                role="button"
                tabIndex={0}
                onClick={() => setSelected(piece)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelected(piece)
                  }
                }}
              >
                <img src={piece.src} alt={piece.title} loading="lazy" />
                <figcaption className="art-card__title">{piece.title}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>

      {showWarning && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="nsfw-warning-title">
          <div className="modal">
            <h2 className="modal__title" id="nsfw-warning-title">18+ WARNING</h2>
            <p className="modal__text">
              This gallery contains adult (NSFW) content. By continuing you confirm
              that you are at least 18 years old and consent to viewing it.
            </p>
            <div className="modal__actions">
              <button type="button" className="btn btn--ghost" onClick={() => setShowWarning(false)}>
                Cancel
              </button>
              <button type="button" className="btn btn--primary" onClick={confirmWarning}>
                I am 18 or older
              </button>
            </div>
          </div>
        </div>
      )}

      {selected && (
        <div
          className="modal-overlay lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <figure
            className="lightbox__figure"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selected.src} alt={selected.title} />
            <figcaption className="lightbox__title">{selected.title}</figcaption>
          </figure>
          <button
            type="button"
            className="lightbox__close"
            aria-label="Close"
            onClick={() => setSelected(null)}
          >
            ×
          </button>
        </div>
      )}
    </main>
  )
}
