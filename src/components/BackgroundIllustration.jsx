/**
 * Background illustration system
 * Supports different background types: pattern, gradient, or custom
 * Easily configurable per page via props
 */
export default function BackgroundIllustration({ type = 'pattern', variant = 'default' }) {
  const backgrounds = {
    pattern: {
      default: (
        <div className="background-pattern">
          <div className="background-pattern__grid" aria-hidden="true" />
        </div>
      ),
      dots: (
        <div className="background-pattern background-pattern--dots">
          <div className="background-pattern__dots" aria-hidden="true" />
        </div>
      ),
    },
    gradient: {
      default: (
        <div className="background-gradient">
          <div className="background-gradient__orb background-gradient__orb--1" aria-hidden="true" />
          <div className="background-gradient__orb background-gradient__orb--2" aria-hidden="true" />
        </div>
      ),
    },
  }

  return backgrounds[type]?.[variant] || backgrounds.pattern.default
}
