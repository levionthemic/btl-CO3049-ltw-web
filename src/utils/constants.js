import parisImage from '~/assets/paris.jpg'
import melbourneImage from '~/assets/melbourne.jpg'
import londonImage from '~/assets/london.jpg'
import columbiaImage from '~/assets/columbia.jpg'
import srilanka1Image from '~/assets/srilanka1.jpg'
import srilanka2Image from '~/assets/srilanka2.jpg'
import srilanka3Image from '~/assets/srilanka3.jpg'
import srilanka4Image from '~/assets/srilanka4.jpg'

export const CITIES_SEARCH_PAGE = [
  { name: 'Melbourne', image: melbourneImage, price: 700 },
  { name: 'Paris', image: parisImage, price: 600 },
  { name: 'London', image: londonImage, price: 800 },
  { name: 'Columbia', image: columbiaImage, price: 900 }
]

export const SRILAKA_SEARCH_PAGE = [
  srilanka1Image,
  srilanka2Image,
  srilanka3Image,
  srilanka4Image
]

export const API_ROOT = 'http://localhost'
export const DEFAULT_ROOM_NUMBER = 4
export const DEFAULT_BOOKING_NUMBER = 5
export const AMENITIES = ['Near park', 'Near theater', 'Near Hotel', 'Clean Hotel', 'Near restaurant', 'Near supermarket']