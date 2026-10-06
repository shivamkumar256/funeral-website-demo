function VisualBreak() {
  return (
    <section className="relative overflow-hidden border-y border-[#e7dfd0] bg-[#efe7d7]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(32,32,32,0.62),rgba(32,32,32,0.2))]" />
      <img
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80"
        alt="A peaceful outdoor landscape with warm natural light"
        className="h-[420px] w-full object-cover md:h-[520px]"
        loading="lazy"
      />

      <div className="absolute inset-0 mx-auto flex max-w-7xl items-end p-6 sm:p-8 lg:p-12">
        <div className="max-w-xl rounded-[28px] border border-white/20 bg-white/8 p-6 text-white backdrop-blur-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f3e7cc]">Last Ride</p>
          <h2 className="mt-4 font-display text-4xl leading-none sm:text-5xl leading-[0.95]">
            More Than a Service.
            <span className="block">A Helping Hand Through a Difficult Moment.</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-[#f1e7d4]">
            Thoughtful support that helps families move with dignity, clarity, and care during one of life&apos;s most tender moments.
          </p>
        </div>
      </div>
    </section>
  )
}

export default VisualBreak
