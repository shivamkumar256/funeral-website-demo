import { ArrowRight } from 'lucide-react'
import { companySummary } from '../data/siteContent'

function IntroSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-[0.96fr_1.04fr]">
        <div className="rounded-[32px] border border-[#e7dfd0] bg-white p-3 shadow-[0_30px_70px_rgba(32,32,32,0.06)]">
          <img
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80"
            alt="A calm family moment and respectful support scene"
            className="h-[430px] w-full rounded-[24px] object-cover"
            loading="lazy"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8d806f]">Support with compassion</p>
          <h2 className="mt-5 font-display text-5xl leading-none text-[#202020] sm:text-6xl">
            When You Need Support,
            <span className="block">We&apos;re Here to Handle the Details.</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#6f6b64]">
            {companySummary} Last Ride provides dependable, compassionate assistance so every necessary detail can be handled with care and dignity.
          </p>

          <div className="mt-8 rounded-[24px] border border-[#e7dfd0] bg-[#f8f4ed] p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8d806f]">Our promise</p>
            <p className="mt-3 font-display text-[2rem] leading-none text-[#202020]">
              From the first call to the final farewell, we&apos;re beside you.
            </p>
          </div>

          <a
            href="#services"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#202020]"
          >
            Explore our support <ArrowRight size={16} className="text-[#b89a62]" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
