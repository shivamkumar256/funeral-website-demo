import { useEffect, useState } from 'react'
import { ChevronDown, Menu, PhoneCall, X } from 'lucide-react'
import { floatingPhone, navItems, serviceDropdown } from '../data/siteContent'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showServices, setShowServices] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#faf7f2]/90 backdrop-blur-md shadow-[0_8px_30px_rgba(74,31,14,0.06)]' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#4a1f0e]">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d9bca3] bg-[#f1dfcb] text-[10px] font-bold text-[#4a1f0e]">
            LR
          </span>
          <span className="hidden sm:inline">Last Ride</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            if (item.label === 'Services') {
              return (
                <div key={item.label} className="relative" onMouseLeave={() => setShowServices(false)}>
                  <button
                    type="button"
                    onClick={() => setShowServices(!showServices)}
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#6b625c] transition hover:text-[#4a1f0e]"
                  >
                    {item.label}
                    <ChevronDown size={14} className={`transition ${showServices ? 'rotate-180' : ''}`} />
                  </button>

                  {showServices && (
                    <div className="absolute left-1/2 top-full mt-3 w-[320px] -translate-x-1/2 rounded-[22px] border border-[#eadfce] bg-white p-3 shadow-[0_20px_40px_rgba(74,31,14,0.08)]">
                      <div className="grid gap-1 text-left">
                        {serviceDropdown.map((service) => (
                          <a
                            key={service}
                            href="#services"
                            className="rounded-xl px-3 py-2 text-sm text-[#4a1f0e] transition hover:bg-[#f8f3ec]"
                            onClick={() => setShowServices(false)}
                          >
                            {service}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            }

            return (
              <a key={item.label} href={item.href} className="text-sm font-medium text-[#6b625c] transition hover:text-[#4a1f0e]">
                {item.label}
              </a>
            )
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={floatingPhone}
            className="inline-flex items-center gap-2 rounded-full border border-[#d7c7b1] bg-white/80 px-4 py-2 text-sm font-medium text-[#4a1f0e] transition hover:border-[#a94720]"
          >
            <PhoneCall size={16} className="text-[#a94720]" />
            Call Now
          </a>
          <a href={floatingPhone} className="inline-flex items-center justify-center rounded-full bg-[#a94720] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(169,71,32,0.18)] transition hover:-translate-y-0.5 hover:bg-[#8d3d1d]">
            Get Immediate Assistance
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d6c4ac] bg-white/80 text-[#4a1f0e] lg:hidden"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-[#e9dfd3] bg-[#faf7f2]/95 px-4 pb-4 pt-3 shadow-[0_18px_40px_rgba(74,31,14,0.08)] lg:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-[#4a1f0e] transition hover:bg-[#f3ece3]"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 space-y-2 rounded-[20px] border border-[#eadfce] bg-white p-3">
              {serviceDropdown.map((service) => (
                <a key={service} href="#services" className="block rounded-lg px-2 py-2 text-sm text-[#4a1f0e] hover:bg-[#f8f3ec]" onClick={() => setIsOpen(false)}>
                  {service}
                </a>
              ))}
            </div>
            <a href={floatingPhone} className="mt-2 inline-flex items-center justify-center rounded-full bg-[#a94720] px-5 py-3 text-sm font-semibold text-white" onClick={() => setIsOpen(false)}>
              Get Immediate Assistance
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
