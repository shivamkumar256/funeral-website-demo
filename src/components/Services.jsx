import ServiceCard from './ServiceCard'
import { serviceCards } from '../data/siteContent'

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-[3.3rem] leading-none tracking-[-0.03em] text-[#4a1f0e] sm:text-[4.2rem]">
          Complete Funeral &amp; Cremation Services
        </h2>
        <p className="mt-4 text-lg text-[#6b625c]">Professional support across Delhi NCR</p>
      </div>

      <p className="mx-auto mt-8 max-w-5xl text-center text-lg leading-8 text-[#6b625c]">
        Every family we serve receives compassionate assistance, whether the need is immediate cremation coordination, freezer preservation, transportation, or the rituals and arrangements that follow.
      </p>

      <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {serviceCards.map((service) => (
          <ServiceCard
            key={service.name}
            icon={service.icon}
            name={service.name}
            description={service.short}
            image={service.image}
          />
        ))}
      </div>
    </section>
  )
}

export default Services
