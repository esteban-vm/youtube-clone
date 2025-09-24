export type ChannelLayoutProps = LayoutProps<'/channel/[channelId]'>

export default function ChannelLayout({ children, tabs }: ChannelLayoutProps) {
  return (
    <section className='size-full'>
      {children}
      {tabs}
    </section>
  )
}
