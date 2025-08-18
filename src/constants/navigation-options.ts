import type { IconType } from 'react-icons'
import {
  LuBell,
  LuCar,
  LuCpu,
  LuGamepad2,
  LuHouse,
  LuLayoutGrid,
  LuMusic4,
  LuNewspaper,
  LuRss,
  LuTv,
  LuVideo,
  LuVolleyball,
} from 'react-icons/lu'

export interface MenuItem {
  id: string
  label: string
  icon: IconType
}

export const navbarMenuItems: MenuItem[] = [
  { id: crypto.randomUUID(), label: 'Subir', icon: LuVideo },
  { id: crypto.randomUUID(), label: 'Más', icon: LuLayoutGrid },
  { id: crypto.randomUUID(), label: 'Notificaciones', icon: LuBell },
]

export const sidebarMenuItems: MenuItem[] = [
  { id: crypto.randomUUID(), label: 'Inicio', icon: LuHouse },
  { id: crypto.randomUUID(), label: 'Juegos', icon: LuGamepad2 },
  { id: crypto.randomUUID(), label: 'Autos', icon: LuCar },
  { id: crypto.randomUUID(), label: 'Deportes', icon: LuVolleyball },
  { id: crypto.randomUUID(), label: 'Entretenimiento', icon: LuTv },
  { id: crypto.randomUUID(), label: 'Tecnología', icon: LuCpu },
  { id: crypto.randomUUID(), label: 'Música', icon: LuMusic4 },
  { id: crypto.randomUUID(), label: 'Blogs', icon: LuRss },
  { id: crypto.randomUUID(), label: 'Noticias', icon: LuNewspaper },
]
