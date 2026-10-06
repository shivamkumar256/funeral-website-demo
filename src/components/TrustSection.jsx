import { trustHighlights } from '../data/siteContent'

function TrustSection() {
  return (
    <section className="bg-[#1f1b19] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d5c7a7]">Trust</p>
          <h2 className="mt-5 font-display text-5xl leading-none text-white sm:text-[4rem]">
            Care You Can Rely On.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trustHighlights.map((item) => (
            <div key={item.label} className="rounded-[28px] border border-white/10 bg-white/4 p-6">
              <p className="font-display text-4xl leading-none text-[#f2dfb6]">{item.value}</p>
              <p className="mt-4 text-base leading-7 text-[#dfe3de]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustSection
