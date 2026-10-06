import { useCallback, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { cremationGrounds, serviceAreaInfo } from '../data/siteContent'
import CremationGroundDetailsModal from './CremationGroundDetailsModal'

function CremationGrounds() {
  const [selectedGround, setSelectedGround] = useState(null)
  const closeSelectedGround = useCallback(() => setSelectedGround(null), [])

  return (
    <>
      <section id="cremation-grounds" className="border-y border-[#eadfce] bg-[#f8f3ec] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-display text-[3.1rem] leading-none tracking-[-0.03em] text-[#4a1f0e] sm:text-[4rem]">
              {serviceAreaInfo.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#6b625c]">{serviceAreaInfo.description}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {cremationGrounds.map((ground) => (
              <article key={ground.name} className="group overflow-hidden rounded-[24px] border border-[#e7ddd0] bg-white shadow-[0_16px_36px_rgba(74,31,14,0.04)] transition hover:-translate-y-1 hover:shadow-[0_28px_50px_rgba(74,31,14,0.08)]">
                <div className="overflow-hidden">
                  <img
                    src={ground.image}
                    alt={ground.name}
                    className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <div className="flex min-h-[110px] flex-col justify-between p-4">
                  <h3 className="font-display text-[2rem] leading-none text-[#4a1f0e]">{ground.name}</h3>
                  <button
                    type="button"
                    onClick={() => setSelectedGround(ground)}
                    className="mt-4 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#4a1f0e] transition hover:text-[#a94720] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a94720] focus-visible:ring-offset-2"
                    aria-label={`View details for ${ground.name}`}
                  >
                    View Details
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {selectedGround && (
        <CremationGroundDetailsModal
          ground={selectedGround}
          onClose={closeSelectedGround}
        />
      )}
    </>
  )
}

export default CremationGrounds
