import { helpers } from '@/utils'

export const getTabItems = (channelId: string) => {
  const tabItems: Props.TabItem[] = [
    { id: crypto.randomUUID(), label: 'Inicio', link: helpers.typedRoute(`/channel/${channelId}`) },
    { id: crypto.randomUUID(), label: 'Vídeos', link: helpers.typedRoute(`/channel/${channelId}/videos`) },
    { id: crypto.randomUUID(), label: 'Cortos', link: helpers.typedRoute(`/channel/${channelId}/shorts`) },
    { id: crypto.randomUUID(), label: 'En vivo', link: helpers.typedRoute(`/channel/${channelId}/lives`) },
    { id: crypto.randomUUID(), label: 'Podcasts', link: helpers.typedRoute(`/channel/${channelId}/podcasts`) },
    { id: crypto.randomUUID(), label: 'Listas', link: helpers.typedRoute(`/channel/${channelId}/playlists`) },
    { id: crypto.randomUUID(), label: 'Comunidad', link: helpers.typedRoute(`/channel/${channelId}/community`) },
  ]

  return tabItems
}
