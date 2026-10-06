import { ArrowRight } from 'lucide-react'
import { floatingPhone } from '../data/siteContent'

function FinalCta() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-[#e7dfd0] bg-[linear-gradient(135deg,#f8f2e7,#efe7d8)] p-8 shadow-[0_28px_70px_rgba(32,32,32,0.05)] lg:p-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8d806f]">Support when it matters most</p>
            <h2 className="mt-5 font-display text-5xl leading-none text-[#202020] sm:text-[4.3rem]">
              When Every Moment Matters,
              <span className="block">We&apos;re Here to Help.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6f6b64]">
              Reach out to Last Ride for compassionate, dependable assistance when your family needs it most.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b89a62] px-6 py-3.5 text-base font-semibold text-white shadow-[0_16px_34px_rgba(184,154,98,0.3)] transition hover:-translate-y-0.5 hover:bg-[#a98b4f]"
            >
              Get Immediate Assistance
              <ArrowRight size={18} />
            </a>
            <a
              href={floatingPhone}
              className="inline-flex items-center justify-center rounded-full border border-[#d7cdb7] bg-white px-6 py-3.5 text-base font-semibold text-[#202020] transition hover:border-[#b89a62]"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCta
