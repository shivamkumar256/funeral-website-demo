import { Quote } from 'lucide-react'
import { testimonials } from '../data/siteContent'

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8d806f]">Testimonials</p>
        <h2 className="mt-5 font-display text-5xl leading-none text-[#202020] sm:text-[4rem]">
          Words From Families We&apos;ve Supported
        </h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name + item.location} className="flex h-full flex-col rounded-[28px] border border-[#e7dfd0] bg-white p-6 shadow-[0_16px_36px_rgba(32,32,32,0.04)]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#f5efe4] text-[#b89a62]">
              <Quote size={20} />
            </div>
            <p className="text-lg leading-8 text-[#202020]">“{item.quote}”</p>
            <div className="mt-8 border-t border-[#eee7dc] pt-5">
              <p className="font-semibold text-[#202020]">{item.name}</p>
              <p className="mt-1 text-sm text-[#6f6b64]">{item.location}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
