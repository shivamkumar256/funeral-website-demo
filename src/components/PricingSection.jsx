import { ArrowRight } from 'lucide-react'
import { floatingPhone, pricingNote } from '../data/siteContent'

function PricingSection() {
  return (
    <section id="resources" className="bg-[#f3ebdf] py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-[3.1rem] leading-none tracking-[-0.03em] text-[#4a1f0e] sm:text-[4rem]">
          Clear, Honest Pricing
        </h2>

        <p className="mt-6 text-xl leading-9 text-[#6b625c]">{pricingNote}</p>
        <p className="mt-3 text-xl leading-9 text-[#4a1f0e]">No hidden charges. No surprises. Just honest support.</p>

        <div className="mt-10">
          <p className="text-2xl font-medium text-[#4a1f0e]">Every family&apos;s needs are unique.</p>
          <a
            href={floatingPhone}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#4a1f0e] px-8 py-4 text-lg font-semibold text-white shadow-[0_18px_40px_rgba(74,31,14,0.14)] transition hover:-translate-y-0.5 hover:bg-[#34160d]"
          >
            Call for Exact Cost
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
