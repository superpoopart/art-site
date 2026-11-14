import BackLink from '../components/BackLink.jsx'

const HOURLY_RATE = 22

const SERVICES = [
  { label: 'Sketch', time: '~30 min', price: HOURLY_RATE * 0.5 },
  { label: 'Full character render', time: '3–4 hrs', price: `${HOURLY_RATE * 3}–${HOURLY_RATE * 4}` },
  { label: 'Character render + background', time: '5+ hrs', price: `${HOURLY_RATE * 5}+` },
]

function PriceList({ title, items }) {
  return (
    <section className="price-section">
      <h2 className="price-section__title">{title}</h2>
      <ul className="price-list">
        {items.map((item) => (
          <li key={item.label} className="price-row">
            <span className="price-row__label">
              {item.label}
              <span className="price-row__time">{item.time}</span>
            </span>
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
        <p className="commissions-note">
          Commissions are billed at <strong>${HOURLY_RATE}/hr</strong>. Final price
          depends on complexity — these are estimates.
        </p>
        <div className="price-grid">
          <PriceList title="Estimated Pricing" items={SERVICES} />
        </div>
      </div>
    </main>
  )
}
