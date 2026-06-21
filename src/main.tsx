import { ArrowRight, Gauge, Palette } from 'lucide-react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const colorPickerHref = import.meta.env.DEV ? 'http://127.0.0.1:5174/color-picker/' : '/color-picker/'
const ditaraHref = import.meta.env.DEV ? 'http://127.0.0.1:5175/ditara-dashboard/' : '/ditara-dashboard/'

const destinations = [
  {
    title: 'OKLCH Gamut Picker',
    href: colorPickerHref,
    eyebrow: 'Color tool',
    description: 'Masuk ke picker warna OKLCH dengan mask RGB dan PSO.',
    Icon: Palette,
  },
  {
    title: 'Ditara Dashboard',
    href: ditaraHref,
    eyebrow: 'Superadmin',
    description: 'Ruang superadmin Ditara. Untuk sekarang masih coming soon.',
    Icon: Gauge,
  },
]

function App() {
  return (
    <main className="portal-shell">
      <section className="hero">
        <div className="hero-copy">
          <span className="kicker">arifaldi13.github.io</span>
          <h1>Arifaldi</h1>
          <p>
            Portal kecil buat ngarahin proyek, eksperimen warna, dan ruang kerja yang pelan-pelan
            dibangun.
          </p>
        </div>
        <div className="signature-panel" aria-hidden="true">
          <span>A</span>
          <div />
        </div>
      </section>

      <section className="destinations" aria-label="Destinations">
        {destinations.map(({ title, href, eyebrow, description, Icon }) => (
          <a className="destination-link" href={href} key={title}>
            <Icon size={24} strokeWidth={1.8} />
            <span>
              <small>{eyebrow}</small>
              <strong>{title}</strong>
              <em>{description}</em>
            </span>
            <ArrowRight className="arrow" size={22} strokeWidth={1.8} />
          </a>
        ))}
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
