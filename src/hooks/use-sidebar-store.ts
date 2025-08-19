import type { SidebarStore } from '@/types'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export const useSidebarStore = create<SidebarStore>()(
  persist(
    (set) => {
      return {
        // sidebar: true,
        // setSidebar(sidebar) {
        //   set({ sidebar })
        // },
        drawerId: 'youtube-clone-drawer',
        currentItem: 1,
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
