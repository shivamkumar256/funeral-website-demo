import { CheckCircle2, PhoneCall } from 'lucide-react'
import heroBackground from '../assets/backgrounds/hero section.webp'
import { floatingPhone, heroTrustItems } from '../data/siteContent'

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt=""
          aria-hidden="true"
          width="1672"
          height="941"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(90deg, rgba(18, 9, 6, 0.62), rgba(18, 9, 6, 0.35))',
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#f2e7d9]/10 px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#f7efe8] backdrop-blur-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[#7ad1a8]" />
            24/7 Support
          </div>

          <h1 className="max-w-xl font-display text-[3.5rem] leading-[0.92] tracking-[-0.04em] text-white sm:text-[4.8rem] lg:text-[6.6rem]">
            A Dignified Last Journey,
            <span className="block">Handled With Care.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#f4e9de] sm:text-lg">
            Complete funeral and cremation assistance across Delhi NCR, with compassionate support, transparency and care at every step.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={floatingPhone}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#a94720] px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_38px_rgba(169,71,32,0.25)] transition hover:-translate-y-0.5 hover:bg-[#8d3d1d]"
            >
              <PhoneCall size={18} aria-hidden="true" />
              Call Now
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:border-[#f4dcb8] hover:bg-white/15"
            >
              Explore Our Services
            </a>
          </div>

          <div className="mt-8 hidden flex-wrap gap-3 text-sm text-white/90 sm:flex">
            {heroTrustItems.map((item) => (
              <div key={item} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#fff8f1]/10 px-3.5 py-2 backdrop-blur-sm">
                <CheckCircle2 size={16} className="text-[#f2c795]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="ml-auto hidden max-w-[360px] rounded-[28px] border border-white/20 bg-[#fffaf3]/8 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.16)] backdrop-blur-sm lg:block">
          <div className="rounded-[20px] border border-[#f0d7b0]/30 bg-[#f6efe8]/10 p-4 text-white">
            <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#f6ddbb]">
              <span>Compassionate Care</span>
              <PhoneCall size={16} className="text-[#f2c795]" />
            </div>
            <p className="font-display text-[2.3rem] leading-none tracking-[-0.03em] text-white">24/7 Support</p>
            <p className="mt-3 text-sm leading-6 text-[#f4e9de]">Immediate assistance for funeral arrangements and cremation coordination across Delhi NCR.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
