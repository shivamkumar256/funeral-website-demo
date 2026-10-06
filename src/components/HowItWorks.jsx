import { processSteps } from '../data/siteContent'

function HowItWorks() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8d806f]">How it works</p>
        <h2 className="mt-5 font-display text-5xl leading-none text-[#202020] sm:text-[4.4rem]">
          Simple Support.
          <span className="block">Handled With Care.</span>
        </h2>
      </div>

      <div className="relative mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-[#e4dccb] xl:block" />

        {processSteps.map((step) => (
          <div key={step.step} className="relative rounded-[28px] border border-[#e7dfd0] bg-white p-6 shadow-[0_18px_42px_rgba(32,32,32,0.04)]">
            <div className="mb-6 flex items-center justify-between">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f5efe4] text-sm font-bold text-[#202020]">
                {step.step}
              </span>
            </div>
            <h3 className="font-display text-3xl text-[#202020]">{step.title}</h3>
            <p className="mt-4 text-base leading-7 text-[#6f6b64]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
