export type ChannelLayoutProps = LayoutProps<'/channel/[channelId]'>

export default function ChannelLayout({ children, tabs }: ChannelLayoutProps) {
  return (
    <section className='border border-primary'>
      <p>Channel Layout</p>
      {tabs}
      {children}
    </section>
  )
}
