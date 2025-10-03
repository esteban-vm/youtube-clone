import { helpers } from '@/utils'

export const getTabItems = (channelId: string) => {
  const tabItems: Props.TabItem[] = [
    { id: crypto.randomUUID(), label: 'Inicio', getLink: helpers.typedRoute(`/channel/${channelId}`) },
    { id: crypto.randomUUID(), label: 'Vídeos', getLink: helpers.typedRoute(`/channel/${channelId}/videos`) },
    // { id: crypto.randomUUID(), label: 'Cortos', getLink: helpers.typedRoute(`/channel/${channelId}`) },
    // { id: crypto.randomUUID(), label: 'En vivo', getLink: helpers.typedRoute(`/channel/${channelId}`) },
    // { id: crypto.randomUUID(), label: 'Podcasts', getLink: helpers.typedRoute(`/channel/${channelId}`) },
    // { id: crypto.randomUUID(), label: 'Listas', getLink: helpers.typedRoute(`/channel/${channelId}`) },
    // { id: crypto.randomUUID(), label: 'Comunidad', getLink: helpers.typedRoute(`/channel/${channelId}`) },
  ]

  return tabItems
}
