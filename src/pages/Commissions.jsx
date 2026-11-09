import BackLink from '../components/BackLink.jsx'

const BASE_PRICES = [
  { label: 'Bust', price: 30 },
  { label: 'Full Body', price: 50 },
  { label: 'Extra Character', price: 30 },
]

const OPTIONS = [
  { label: 'Monochrome', price: 10 },
  { label: 'Full Color', price: 20 },
  { label: 'NSFW', price: 30 },
]

function PriceList({ title, items }) {
  return (
    <section className="price-section">
      <h2 className="price-section__title">{title}</h2>
      <ul className="price-list">
        {items.map((item) => (
          <li key={item.label} className="price-row">
            <span className="price-row__label">{item.label}</span>
            <span className="price-row__price">${item.price}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function Commissions() {
  return (
    <main className="page">
      <BackLink />
      <header className="page__header">
        <span className="page__tag">// INFO</span>
        <h1 className="page__title">Commissions</h1>
      </header>
      <div className="page__content">
        <div className="price-grid">
          <PriceList title="Base Prices" items={BASE_PRICES} />
          <PriceList title="Options" items={OPTIONS} />
        </div>
      </div>
    </main>
  )
}
