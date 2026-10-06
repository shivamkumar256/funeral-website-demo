import {
  BadgeCheck,
  CarFront,
  FileText,
  HandHeart,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import freezerBoxImage from '../assets/services/freezer box.png'
import hearseVanImage from '../assets/services/hearse van.png'
import prayerHallImage from '../assets/services/prayer hall.png'
import prayerHallDecorationImage from '../assets/services/prayer hall decoration.png'
import transportImage from '../assets/services/transport.png'
import shamshanGhatImage1 from '../assets/samshan ghat/samshan ghat.png'
import shamshanGhatImage2 from '../assets/samshan ghat/samshan ghat 2.png'
import shamshanGhatImage3 from '../assets/samshan ghat/samshan ghat 3.png'

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Cremation Grounds', href: '#cremation-grounds' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
]

export const serviceDropdown = [
  'Cremation Services',
  'Freezer Box Services',
  'Dead Body Transportation',
  'Prayer Hall Booking',
  'Hearse Van Services',
  'Prayer Hall Decoration',
  'Chautha & Tehravin',
  'Asthi Visarjan Services',
  'Air Ambulance Services',
]

export const serviceCards = [
  {
    name: 'Cremation Services',
    short: 'Complete arrangements and coordination at major crematoriums across Delhi NCR.',
    image:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80',
    icon: Sparkles,
  },
  {
    name: 'Freezer Box Services',
    short: 'Immediate preservation support when families need additional time for arrangements.',
    image: freezerBoxImage,
    icon: ShieldCheck,
  },
  {
    name: 'Dead Body Transportation',
    short: 'Safe and respectful transportation with dependable assistance.',
    image: transportImage,
    icon: CarFront,
  },
  {
    name: 'Prayer Hall Booking',
    short: 'Peaceful memorial spaces for family gatherings and prayer ceremonies.',
    image: prayerHallImage,
    icon: HandHeart,
  },
  {
    name: 'Hearse Van Services',
    short: 'Well-maintained vehicles and respectful support for final journeys.',
    image: hearseVanImage,
    icon: CarFront,
  },
  {
    name: 'Prayer Hall Decoration',
    short: 'Traditional and elegant arrangements that honour your family rituals.',
    image: prayerHallDecorationImage,
    icon: BadgeCheck,
  },
  {
    name: 'Chautha & Tehravin',
    short: 'Complete ritual support for families observing traditional observances.',
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
    icon: Users,
  },
  {
    name: 'Asthi Visarjan Services',
    short: 'Sacred support for immersion rituals and respectful farewell ceremonies.',
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
    icon: FileText,
  },
  {
    name: 'Air Ambulance Services',
    short: 'Emergency medical air transport for urgent requirements and family support.',
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80',
    icon: PhoneCall,
  },
]

export const cremationGrounds = [
  {
    name: 'Lodhi Road Cremation Ground',
    image: shamshanGhatImage1,
  },
  {
    name: 'Green Park Cremation Ground',
    image: shamshanGhatImage2,
  },
  {
    name: 'Nigambodh Ghat Cremation Ground',
    image: shamshanGhatImage3,
  },
  {
    name: 'Punjabi Bagh Cremation Ground',
    image: shamshanGhatImage1,
  },
  {
    name: 'Antim Nivas Noida Cremation Ground',
    image: shamshanGhatImage2,
  },
  {
    name: 'Garhmukteshwar Cremation Ground',
    image: shamshanGhatImage3,
  },
  {
    name: 'Shiv Shamshan Bhoomi Cremation',
    image: shamshanGhatImage1,
  },
  {
    name: 'Chattarpur Cremation Ground',
    image: shamshanGhatImage2,
  },
]

export const trustChecklist = [
  'Compassionate support across Delhi NCR',
  'Available 24/7 for immediate support and guidance',
  'Complete transparency in pricing and services',
  'Respectful of different religious and cultural traditions',
  'Professional, caring team trained to support families',
]

export const heroTrustItems = ['24/7 Support', 'Transparent Pricing', 'Experienced Team', 'Respect for All Traditions']

export const contactInfo = {
  phone: '+91 90000 00000',
  email: 'hello@lastride-demo.com',
  serviceArea: 'Delhi NCR',
}

export const serviceAreaInfo = {
  title: 'Shamshan Ghats We Serve in Delhi NCR',
  description:
    'Last Ride can assist families with coordination and guidance for arrangements at this location.',
}

export const floatingWhatsApp = 'https://wa.me/919000000000?text=Hello%20Last%20Ride%20Funeral%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.'
export const floatingPhone = 'tel:+919000000000'

export const pricingNote = 'We believe in complete transparency during difficult times. No hidden charges. No surprises. Just honest support.'

export const companySummary = 'During a difficult time, families should be able to focus on saying goodbye—not navigating complicated arrangements.'
