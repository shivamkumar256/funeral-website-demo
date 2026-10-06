import { MessageCircle, PhoneCall } from 'lucide-react'
import { floatingPhone, floatingWhatsApp } from '../data/siteContent'

function FloatingActions() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-[calc(1.5rem+env(safe-area-inset-bottom))] z-[60] flex items-center justify-between px-6 sm:px-8">
      <a
        href={floatingWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Last Ride Funeral"
        title="WhatsApp Us"
        className="pointer-events-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(33,110,67,0.28)] transition duration-200 hover:scale-105 hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/30 sm:h-16 sm:w-16"
      >
        <span className="relative inline-flex items-center justify-center" aria-hidden="true">
          <MessageCircle size={29} strokeWidth={2.2} />
          <PhoneCall className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size={13} strokeWidth={2.4} />
        </span>
      </a>
      <a
        href={floatingPhone}
        aria-label="Call Last Ride Funeral"
        title="Call Now"
        className="pointer-events-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#a94720] text-white shadow-[0_8px_24px_rgba(74,31,14,0.24)] transition duration-200 hover:scale-105 hover:bg-[#8d3d1d] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#a94720]/30 sm:h-16 sm:w-16"
      >
        <PhoneCall size={23} aria-hidden="true" />
      </a>
    </div>
  )
}

export default FloatingActions
