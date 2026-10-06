import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqItems } from '../data/siteContent'

function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8d806f]">FAQ</p>
        <h2 className="mt-5 font-display text-5xl leading-none text-[#202020] sm:text-[4rem]">
          Common Questions
        </h2>
      </div>

      <div className="mt-10 space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index

          return (
            <div key={item.question} className="overflow-hidden rounded-[22px] border border-[#e7dfd0] bg-white shadow-[0_12px_28px_rgba(32,32,32,0.02)]">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                aria-expanded={isOpen}
              >
                <span className="text-lg font-medium text-[#202020]">{item.question}</span>
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full border border-[#e3d7bc] bg-[#f7f2e9] text-[#202020] transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  <ChevronDown size={18} />
                </span>
              </button>

              <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-base leading-7 text-[#6f6b64] sm:px-6">{item.answer}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Faq
