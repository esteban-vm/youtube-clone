export interface Props {
  params: Promise<{ categoryId: string; videoId: string }>
}

export default async function VideoPage({ params }: Props) {
  const { categoryId, videoId } = await params

  return (
    <section>
      <h2>Video Page</h2>
      <p>Category: {categoryId}</p>
      <p>Video: {videoId}</p>
    </section>
  )
}
