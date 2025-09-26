import * as $ from './channel-banner.styled'

export function ChannelBanner({ channel }: Props.WithChannel) {
  const channelTitle = channel.brandingSettings.channel.title
  const channelBanner = channel.brandingSettings.image?.bannerExternalUrl

  return (
    <$.BannerContainer>
      {channelBanner && <$.BannerImage alt={channelTitle} src={channelBanner} fill />}
    </$.BannerContainer>
  )
}
