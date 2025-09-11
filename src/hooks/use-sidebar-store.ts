import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export interface SidebarStore {
  drawerId: string
  category: `${number}`
  setCategory: (value: `${number}`) => void
}

export const useSidebarStore = create<SidebarStore>()(
  persist(
    (set) => {
      return {
        drawerId: 'youtube-clone-drawer',
        category: '0',
        setCategory(value) {
          set({ category: value })
        },
      }
    },
    {
      name: 'youtube-clone/sidebar-store',
      storage: createJSONStorage(() => localStorage),
      partialize(state) {
        return { category: state.category }
      },
    }
  )
)
