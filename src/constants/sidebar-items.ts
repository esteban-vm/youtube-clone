import { LuCar, LuCpu, LuGamepad2, LuHouse, LuMusic4, LuNewspaper, LuRss, LuTv, LuVolleyball } from 'react-icons/lu'

export const sidebarItems: Props.SidebarItem[] = [
  { id: crypto.randomUUID(), categoryId: '0', label: 'Inicio', icon: LuHouse },
  { id: crypto.randomUUID(), categoryId: '20', label: 'Juegos', icon: LuGamepad2 },
  { id: crypto.randomUUID(), categoryId: '2', label: 'Autos', icon: LuCar },
  { id: crypto.randomUUID(), categoryId: '17', label: 'Deportes', icon: LuVolleyball },
  { id: crypto.randomUUID(), categoryId: '24', label: 'Entretenimiento', icon: LuTv },
  { id: crypto.randomUUID(), categoryId: '28', label: 'Tecnología', icon: LuCpu },
  { id: crypto.randomUUID(), categoryId: '10', label: 'Música', icon: LuMusic4 },
  { id: crypto.randomUUID(), categoryId: '22', label: 'Blogs', icon: LuRss },
  { id: crypto.randomUUID(), categoryId: '25', label: 'Noticias', icon: LuNewspaper },
]
