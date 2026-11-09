import NavTile from '../components/NavTile.jsx'
import contactRedImg from '../assets/images/ContactRed.png'
import contactBlueImg from '../assets/images/ContactBlue.png'
import commissionRedImg from '../assets/images/CommissionRed.png'
import commissionBlueImg from '../assets/images/CommissionBlue.png'
import galleryRedImg from '../assets/images/GalleryRed.png'
import galleryBlueImg from '../assets/images/GalleryBlue.png'
import aboutRedImg from '../assets/images/AboutRed.png'
import aboutBlueImg from '../assets/images/AboutBlue.png'

const TILES = [
  { to: '/about', label: 'About', imageSrc: aboutRedImg, hoverImageSrc: aboutBlueImg, fullImage: true },
  { to: '/sketches', label: 'Gallery', imageSrc: galleryRedImg, hoverImageSrc: galleryBlueImg, fullImage: true },
  { to: '/commissions', label: 'Commissions', imageSrc: commissionRedImg, hoverImageSrc: commissionBlueImg, fullImage: true },
  { to: '/contact', label: 'Contact', imageSrc: contactRedImg, hoverImageSrc: contactBlueImg, fullImage: true },
]

export default function Home() {
  return (
    <main className="home">
      <header className="home__header">
        <span className="home__eyebrow">// ART PORTFOLIO</span>
        <h1 className="home__title">
          The<span className="home__title-accent">Super</span>Poop
        </h1>
        <p className="home__subtitle">digital artist & illustrator</p>
      </header>

      <nav className="home__grid" aria-label="Site sections">
        {TILES.map((tile) => (
          <NavTile key={tile.label} {...tile} />
        ))}
      </nav>
    </main>
  )
}
