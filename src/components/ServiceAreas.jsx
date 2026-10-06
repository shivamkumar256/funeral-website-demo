import { MapPinned } from 'lucide-react'
import { serviceAreaInfo, serviceAreas } from '../data/siteContent'

function ServiceAreas() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[32px] border border-[#e7dfd0] bg-white p-8 shadow-[0_18px_42px_rgba(32,32,32,0.04)] lg:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8d806f]">Service areas</p>
            <h2 className="mt-5 font-display text-5xl leading-none text-[#202020] sm:text-[4rem]">
              {serviceAreaInfo.title}
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-[#6f6b64]">{serviceAreaInfo.description}</p>
          </div>
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#202020] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#1a1a1a]">
            Check Service Availability
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {serviceAreas.map((area) => (
            <div key={area} className="flex items-center gap-3 rounded-[20px] border border-[#e7dfd0] bg-[#f8f4ed] p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#b89a62]">
                <MapPinned size={18} />
              </div>
              <span className="text-lg font-medium text-[#202020]">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceAreas
