import { Check } from 'lucide-react'
import trustUsImage from '../assets/backgrounds/trust us.png'
import { trustChecklist } from '../data/siteContent'

function WhyUsSection() {
  return (
    <section id="why-us" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[30px] border border-[#eadfce] bg-white shadow-[0_30px_75px_rgba(74,31,14,0.04)]">
        <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr]">
          <div className="relative min-h-[420px] overflow-hidden">
            <img
              src={trustUsImage}
              alt="Compassionate family support during a difficult time"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
            <h2 className="font-display text-[3.1rem] leading-none tracking-[-0.03em] text-[#4a1f0e] sm:text-[4rem]">
              Why Families Trust Us
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6b625c]">
              Trust is earned in the quietest moments — when the hearse arrives on time, when a coordinator remembers the family&apos;s traditions, and when the final arrangements are handled exactly as promised.
            </p>

            <div className="mt-8 space-y-5">
              {trustChecklist.map((item) => (
                <div key={item} className="flex items-start gap-4 text-base leading-7 text-[#4a1f0e] sm:text-lg">
                  <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#f3e8da] text-[#a94720] shadow-sm">
                    <Check size={15} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection
