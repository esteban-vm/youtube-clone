import { LuBell, LuLayoutGrid, LuVideo } from 'react-icons/lu'

export const navbarItems: Props.NavbarItem[] = [
  { id: crypto.randomUUID(), label: 'Subir', icon: LuVideo },
  { id: crypto.randomUUID(), label: 'Más', icon: LuLayoutGrid },
  { id: crypto.randomUUID(), label: 'Notificaciones', icon: LuBell },
]
