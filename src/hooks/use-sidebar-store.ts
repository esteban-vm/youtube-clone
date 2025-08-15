import type { SidebarStore } from '@/types'
import { create } from 'zustand'

export const useSidebarStore = create<SidebarStore>()((set) => {
  return {
    sidebar: true,
    setSidebar(sidebar) {
      set({ sidebar })
    },
    category: 0,
    setCategory(category) {
      set({ category })
    },
  }
})
