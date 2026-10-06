import { useState } from 'react'
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { contactInfo } from '../data/siteContent'

const initialState = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
}

function ContactSection() {
  const [formData, setFormData] = useState(initialState)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const nextErrors = {}

    if (!formData.name.trim()) nextErrors.name = 'Please enter your full name.'
    if (!formData.phone.trim()) nextErrors.phone = 'Please enter your phone number.'
    if (!formData.email.trim()) nextErrors.email = 'Please enter your email address.'
    if (!formData.service.trim()) nextErrors.service = 'Please select a service.'
    if (!formData.message.trim()) nextErrors.message = 'Please tell us how we can help.'

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setIsSubmitted(true)
    setFormData(initialState)
    setErrors({})
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 rounded-[32px] border border-[#e7dfd0] bg-white p-6 shadow-[0_20px_48px_rgba(32,32,32,0.04)] lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div className="flex flex-col justify-between rounded-[28px] bg-[#f7f1e5] p-6 lg:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8d806f]">Demo Contact Details</p>
            <h2 className="mt-5 font-display text-5xl leading-none text-[#202020] sm:text-[4rem]">
              Let&apos;s Help You Through the Next Step.
            </h2>
          </div>

          <div className="mt-8 space-y-5 text-[#202020]">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#b89a62]">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8d806f]">24/7 Support</p>
                <a href={`tel:${contactInfo.phone.replace(/[^\d+]/g, '')}`} className="mt-1 inline-block text-lg font-medium hover:underline">Phone: {contactInfo.phone}</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#b89a62]">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8d806f]">Email</p>
                <a href={`mailto:${contactInfo.email}`} className="mt-1 inline-block text-lg font-medium hover:underline">{contactInfo.email}</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#b89a62]">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8d806f]">Service Area</p>
                <p className="mt-1 text-lg font-medium">{contactInfo.serviceArea}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#b89a62]">
                <CheckCircle2 size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8d806f]">Availability</p>
                <p className="mt-1 text-lg font-medium">24/7 Assistance</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 pt-2">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#202020]">Full Name</label>
              <input
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#e3d9c3] bg-[#fdfbf8] px-4 py-3 text-base text-[#202020] focus:border-[#b89a62] focus:outline-none"
                placeholder="Your full name"
              />
              {errors.name && <p className="mt-2 text-sm text-[#a24f4f]">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#202020]">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#e3d9c3] bg-[#fdfbf8] px-4 py-3 text-base text-[#202020] focus:border-[#b89a62] focus:outline-none"
                placeholder="Your contact number"
              />
              {errors.phone && <p className="mt-2 text-sm text-[#a24f4f]">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#202020]">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#e3d9c3] bg-[#fdfbf8] px-4 py-3 text-base text-[#202020] focus:border-[#b89a62] focus:outline-none"
                placeholder="name@example.com"
              />
              {errors.email && <p className="mt-2 text-sm text-[#a24f4f]">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="service" className="mb-2 block text-sm font-medium text-[#202020]">Service Required</label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#e3d9c3] bg-[#fdfbf8] px-4 py-3 text-base text-[#202020] focus:border-[#b89a62] focus:outline-none"
              >
                <option value="">Select a service</option>
                <option value="Cremation Services">Cremation Services</option>
                <option value="Freezer Box Services">Freezer Box Services</option>
                <option value="Dead Body Transportation">Dead Body Transportation</option>
                <option value="Prayer Hall Booking">Prayer Hall Booking</option>
                <option value="Hearse Van Services">Hearse Van Services</option>
                <option value="Prayer Hall Decoration">Prayer Hall Decoration</option>
                <option value="Chautha & Tehravin">Chautha &amp; Tehravin</option>
                <option value="Asthi Visarjan Services">Asthi Visarjan Services</option>
                <option value="Air Ambulance Services">Air Ambulance Services</option>
              </select>
              {errors.service && <p className="mt-2 text-sm text-[#a24f4f]">{errors.service}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#202020]">Message</label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full rounded-2xl border border-[#e3d9c3] bg-[#fdfbf8] px-4 py-3 text-base text-[#202020] focus:border-[#b89a62] focus:outline-none"
              placeholder="Tell us how we can help you today"
            />
            {errors.message && <p className="mt-2 text-sm text-[#a24f4f]">{errors.message}</p>}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-[#b89a62] px-6 py-3.5 text-base font-semibold text-white shadow-[0_16px_34px_rgba(184,154,98,0.28)] transition hover:-translate-y-0.5 hover:bg-[#a98b4f]"
            >
              Request Assistance
            </button>

            {isSubmitted && (
              <div role="status" className="max-w-md rounded-2xl border border-[#d9eedb] bg-[#edf8ef] px-4 py-3 text-sm leading-6 text-[#2f6c43]">
                <CheckCircle2 size={16} />
                {' '}Thank you. Your enquiry has been received in demo mode. Our team will contact you shortly.
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
