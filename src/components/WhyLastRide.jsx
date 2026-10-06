import { featureBlocks } from '../data/siteContent'

function WhyLastRide() {
  return (
    <section id="why-last-ride" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8d806f]">Why families choose us</p>
        <h2 className="mt-5 font-display text-5xl leading-none text-[#202020] sm:text-[4rem]">
          Why Families Choose Last Ride
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {featureBlocks.map(({ icon: Icon, title, description }) => (
          <div key={title} className="rounded-[28px] border border-[#e7dfd0] bg-[#fffdfb] p-6 shadow-[0_16px_36px_rgba(32,32,32,0.03)]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5efe4] text-[#b89a62]">
              <Icon size={22} />
            </div>
            <h3 className="font-display text-3xl text-[#202020]">{title}</h3>
            <p className="mt-3 text-base leading-7 text-[#6f6b64]">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyLastRide
