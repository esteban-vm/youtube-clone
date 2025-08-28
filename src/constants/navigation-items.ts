import type { Molecules } from '@/nav/components'
import type { Props } from '@/types'
import * as lu from 'react-icons/lu'

export const navbarItems: Props.BaseMenuItem[] = [
  { id: crypto.randomUUID(), label: 'Subir', icon: lu.LuVideo },
  { id: crypto.randomUUID(), label: 'Más', icon: lu.LuLayoutGrid },
  { id: crypto.randomUUID(), label: 'Notificaciones', icon: lu.LuBell },
]

export const sidebarItems: Molecules.SidebarItemProps[] = [
  { id: crypto.randomUUID(), categoryId: '0', label: 'Inicio', icon: lu.LuHouse },
  { id: crypto.randomUUID(), categoryId: '20', label: 'Juegos', icon: lu.LuGamepad2 },
  { id: crypto.randomUUID(), categoryId: '2', label: 'Autos', icon: lu.LuCar },
  { id: crypto.randomUUID(), categoryId: '17', label: 'Deportes', icon: lu.LuVolleyball },
  { id: crypto.randomUUID(), categoryId: '24', label: 'Entretenimiento', icon: lu.LuTv },
  { id: crypto.randomUUID(), categoryId: '28', label: 'Tecnología', icon: lu.LuCpu },
  { id: crypto.randomUUID(), categoryId: '10', label: 'Música', icon: lu.LuMusic4 },
  { id: crypto.randomUUID(), categoryId: '22', label: 'Blogs', icon: lu.LuRss },
  { id: crypto.randomUUID(), categoryId: '25', label: 'Noticias', icon: lu.LuNewspaper },
]
