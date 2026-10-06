import { PhoneCall } from 'lucide-react'
import { floatingPhone } from '../data/siteContent'

function AssistanceBar() {
  return (
    <section className="relative z-20 -mt-2 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[28px] border border-[#e7dcbc] bg-[#f3ebdc] px-5 py-5 shadow-[0_18px_35px_rgba(32,32,32,0.04)] sm:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6f6b64]">Need assistance right now?</p>
            <h2 className="mt-1 font-display text-3xl text-[#202020]">Call our 24/7 support team</h2>
          </div>

          <a
            href={floatingPhone}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#202020] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1b1b1b]"
          >
            <PhoneCall size={16} />
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default AssistanceBar
