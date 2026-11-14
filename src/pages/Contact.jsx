import { Link } from 'react-router-dom'
import BackLink from '../components/BackLink.jsx'

const EMAIL = 'superpoopart@gmail.com'

const METHODS = [
  { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { label: 'Ko-fi', value: 'ko-fi.com/lesuperpoop', href: 'https://ko-fi.com/lesuperpoop', external: true },
]

export default function Contact() {
  return (
    <main className="page">
      <BackLink />
      <header className="page__header">
        <span className="page__tag">// CONTACT</span>
        <h1 className="page__title">Get in Touch</h1>
      </header>
      <div className="page__content">
        <p className="commissions-note">
          Questions, commission requests, or just want to say hi? Reach out below.
        </p>
        <div className="contact-card">
          {METHODS.map((method) => (
            <a
              key={method.label}
              href={method.href}
              {...(method.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="contact-row"
            >
              <span className="contact-row__label">{method.label}</span>
              <span className="contact-row__value">{method.value}</span>
            </a>
          ))}
          <Link to="/commissions" className="contact-row">
            <span className="contact-row__label">Commissions</span>
            <span className="contact-row__value">View pricing →</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
