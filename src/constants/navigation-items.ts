import type { MenuItemProps } from '@/types'
import * as lu from 'react-icons/lu'

export const navbarMenuItems: MenuItemProps[] = [
  { id: 1, label: 'Subir', icon: lu.LuVideo },
  { id: 2, label: 'Más', icon: lu.LuLayoutGrid },
  { id: 3, label: 'Notificaciones', icon: lu.LuBell },
]

export const sidebarMenuItems: MenuItemProps[] = [
  { id: 1, label: 'Inicio', icon: lu.LuHouse },
  { id: 2, label: 'Juegos', icon: lu.LuGamepad2 },
  { id: 3, label: 'Autos', icon: lu.LuCar },
  { id: 4, label: 'Deportes', icon: lu.LuVolleyball },
  { id: 5, label: 'Entretenimiento', icon: lu.LuTv },
  { id: 6, label: 'Tecnología', icon: lu.LuCpu },
  { id: 7, label: 'Música', icon: lu.LuMusic4 },
  { id: 8, label: 'Blogs', icon: lu.LuRss },
  { id: 9, label: 'Noticias', icon: lu.LuNewspaper },
]
