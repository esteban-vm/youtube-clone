import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export interface SidebarStore {
  drawerId: string
  currentItem: `${number}`
  setCurrentItem: (value: `${number}`) => void
}

export const useSidebarStore = create<SidebarStore>()(
  persist(
    (set) => {
      return {
        drawerId: 'youtube-clone-drawer',
        currentItem: '0',
        setCurrentItem(value) {
          set({ currentItem: value })
        },
      }
    },
    {
      name: 'youtube-clone/sidebar-store',
      storage: createJSONStorage(() => localStorage),
      partialize(state) {
        return { currentItem: state.currentItem }
      },
    }
  )
)
