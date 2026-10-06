import { useEffect, useRef } from 'react'
import { ArrowRight, PhoneCall, X } from 'lucide-react'
import { floatingPhone, serviceAreaInfo } from '../data/siteContent'

function CremationGroundDetailsModal({ ground, onClose }) {
  const closeButtonRef = useRef(null)
  const dialogRef = useRef(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const previouslyFocused = document.activeElement
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab') return

      const focusableElements = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (!focusableElements?.length) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && (document.activeElement === firstElement || !dialogRef.current.contains(document.activeElement))) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && (document.activeElement === lastElement || !dialogRef.current.contains(document.activeElement))) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus()
    }
  }, [onClose])

  if (!ground) return null

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[#24140f]/60 p-4 backdrop-blur-sm animate-[fade-in_180ms_ease-out]"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        role="dialog"
        ref={dialogRef}
        aria-modal="true"
        aria-labelledby="ground-details-title"
        className="relative max-h-[calc(100dvh-2rem)] w-full max-w-2xl overflow-y-auto rounded-[28px] bg-[#fffdf9] shadow-[0_28px_90px_rgba(20,10,5,0.3)] animate-[modal-in_220ms_ease-out]"
      >
        <button
          type="button"
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close location details"
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/90 text-[#4a1f0e] shadow-md transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a94720]"
        >
          <X size={20} />
        </button>

        <img src={ground.image} alt={ground.name} className="h-56 w-full object-cover sm:h-72" loading="lazy" />

        <div className="p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a94720]">Delhi NCR cremation ground</p>
          <h2 id="ground-details-title" className="mt-3 font-display text-4xl leading-tight text-[#4a1f0e] sm:text-5xl">
            {ground.name}
          </h2>
          <p className="mt-4 text-base leading-7 text-[#6b625c]">{serviceAreaInfo.description}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#a94720] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#8d3d1d]"
            >
              Get Assistance
              <ArrowRight size={17} />
            </a>
            <a
              href={floatingPhone}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d7c7b1] bg-white px-6 py-3.5 text-sm font-semibold text-[#4a1f0e] transition hover:border-[#a94720]"
            >
              <PhoneCall size={17} />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CremationGroundDetailsModal
