import type { MenuItemProps } from '@/types'
import * as lu from 'react-icons/lu'

export const navbarMenuItems: MenuItemProps[] = [
  { id: 1, label: 'Subir', icon: lu.LuVideo },
  { id: 2, label: 'Más', icon: lu.LuLayoutGrid },
  { id: 3, label: 'Notificaciones', icon: lu.LuBell },
]

export const sidebarMenuItems: MenuItemProps[] = [
  { id: 0, label: 'Inicio', icon: lu.LuHouse },
  { id: 20, label: 'Juegos', icon: lu.LuGamepad2 },
  { id: 2, label: 'Autos', icon: lu.LuCar },
  { id: 17, label: 'Deportes', icon: lu.LuVolleyball },
  { id: 24, label: 'Entretenimiento', icon: lu.LuTv },
  { id: 28, label: 'Tecnología', icon: lu.LuCpu },
  { id: 10, label: 'Música', icon: lu.LuMusic4 },
  { id: 22, label: 'Blogs', icon: lu.LuRss },
  { id: 25, label: 'Noticias', icon: lu.LuNewspaper },
]
