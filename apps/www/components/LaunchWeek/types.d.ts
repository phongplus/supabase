export type Article = {
  title: string
  url: string
  description?: string
  products?: Product[]
}

export type Announcement = {
  title: string
  url: string
  description?: string
  type: 'soc2' | 'producthunt'
}

export type Product = {
  title: string
  url: string
  description?: string
}

export interface WeekDayProps {
  shipped: boolean
  title: string
  description: string
  date: string
  imgUrl?: string
  d?: number
  dd?: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday'
  articles?: Article[]
  announcements?: Announcement[]
  products?: Announcement[]
  index: number
  shippingHasStarted?: boolean
}
