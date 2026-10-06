import { Mail, MapPin, Phone } from 'lucide-react'
import { contactInfo, floatingPhone } from '../data/siteContent'

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Cremation Grounds', href: '#cremation-grounds' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact Us', href: '#contact' },
]

const serviceLinks = [
  'Cremation Services',
  'Freezer Box Services',
  'Dead Body Transportation',
  'Prayer Hall Booking',
  'Hearse Van Services',
  'Prayer Hall Decoration',
  'Chautha & Tehravin',
  'Asthi Visarjan Services',
  'Air Ambulance Services',
]

const serviceAreas = [
  ['Delhi NCR Service Area', 'New Delhi, India'],
  ['Gurugram Service Area', 'Gurugram, Haryana'],
  ['Noida Service Area', 'Noida, Uttar Pradesh'],
]

function Footer() {
  return (
    <footer className="bg-[#4a1f0e] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.8fr_1.1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3 text-lg font-semibold uppercase tracking-[0.12em] text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#f5dac0] bg-[#f3e8da] text-[11px] font-bold text-[#4a1f0e]">
                LR
              </span>
              <span>Last Ride Funeral</span>
            </div>
            <p className="mt-5 font-display text-[1.6rem] italic text-[#f2e6d7]">A Dignified Farewell</p>
            <p className="mt-4 max-w-xs text-base leading-7 text-[#f3e4d6]">
              Compassionate funeral and cremation support across Delhi NCR.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[1.7rem] text-[#f3e4d6]">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-base text-[#f3e4d6]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition hover:text-white">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-[1.7rem] text-[#f3e4d6]">Our Services</h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-[#f3e4d6] sm:text-base">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a href="#services" className="transition hover:text-white">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-[1.7rem] text-[#f3e4d6]">Contact</h3>
            <div className="mt-5 space-y-4 text-base text-[#f3e4d6]">
              <a href={floatingPhone} className="flex items-start gap-3 transition hover:text-white">
                <Phone size={18} className="mt-1 shrink-0 text-[#f0c690]" />
                <span>{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-start gap-3 transition hover:text-white">
                <Mail size={18} className="mt-1 shrink-0 text-[#f0c690]" />
                <span>{contactInfo.email}</span>
              </a>
              {serviceAreas.map(([area, location]) => (
                <div key={area} className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 shrink-0 text-[#f0c690]" />
                  <span>{area}<br />{location}</span>
                </div>
              ))}
              <p className="border-l border-[#f0c690] pl-3 text-[#f0d8c1]">24/7 Assistance</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#7a4d3d] pt-6 text-sm leading-6 text-[#f0d8c1]">
          <p>Demo website — contact details and service information are placeholders for presentation purposes.</p>
          <p className="mt-2">© 2026 Last Ride Funeral — Demo Website</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
