import type { MenuItemProps } from '@/types'
import * as lu from 'react-icons/lu'

export const navbarMenuItems: MenuItemProps[] = [
  { id: crypto.randomUUID(), label: 'Subir', icon: lu.LuVideo },
  { id: crypto.randomUUID(), label: 'Más', icon: lu.LuLayoutGrid },
  { id: crypto.randomUUID(), label: 'Notificaciones', icon: lu.LuBell },
]

export const sidebarMenuItems: MenuItemProps[] = [
  { id: crypto.randomUUID(), label: 'Inicio', icon: lu.LuHouse },
  { id: crypto.randomUUID(), label: 'Juegos', icon: lu.LuGamepad2 },
  { id: crypto.randomUUID(), label: 'Autos', icon: lu.LuCar },
  { id: crypto.randomUUID(), label: 'Deportes', icon: lu.LuVolleyball },
  { id: crypto.randomUUID(), label: 'Entretenimiento', icon: lu.LuTv },
  { id: crypto.randomUUID(), label: 'Tecnología', icon: lu.LuCpu },
  { id: crypto.randomUUID(), label: 'Música', icon: lu.LuMusic4 },
  { id: crypto.randomUUID(), label: 'Blogs', icon: lu.LuRss },
  { id: crypto.randomUUID(), label: 'Noticias', icon: lu.LuNewspaper },
]
