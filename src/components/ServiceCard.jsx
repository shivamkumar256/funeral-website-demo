import { ArrowRight } from 'lucide-react'

function ServiceCard({ icon: Icon, name, description, image }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-[#e7ddd0] bg-white shadow-[0_18px_42px_rgba(74,31,14,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_58px_rgba(74,31,14,0.08)]">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3e8da] text-[#a94720] shadow-sm">
            <Icon size={18} />
          </div>
        </div>

        <h3 className="font-display text-[2.1rem] leading-none tracking-[-0.03em] text-[#4a1f0e] sm:text-[2.3rem]">{name}</h3>
        <p className="mt-4 text-base leading-7 text-[#6b625c]">{description}</p>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#4a1f0e]"
          aria-label={`Request assistance for ${name}`}
        >
          View Details
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  )
}

export default ServiceCard
