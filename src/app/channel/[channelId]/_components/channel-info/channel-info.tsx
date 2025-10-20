'use client'

import Image from 'next/image'
import { useRef } from 'react'
import Markdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import { Avatar, Button, Link, Modal } from 'rsc-daisyui'
import { helpers } from '@/utils'
import * as $ from './channel-info.styled'

export function ChannelInfo({ channel }: Props.WithChannel) {
  const modalRef = useRef<HTMLDialogElement>(null!)
  const { brandingSettings, snippet, statistics } = channel

  const channelUrl = snippet.customUrl
  const channelVideos = statistics.videoCount
  const channelDescription = snippet.description || 'El dueño del canal no proporcionó ninguna descripción'
  const channelTitle = brandingSettings.channel.title
  const channelSubs = statistics.subscriberCount
  const channelThumbnail = snippet.thumbnails?.default?.url

  const formattedVideos = helpers.formatValue(channelVideos)
  const formattedSubs = helpers.formatValue(channelSubs)

  const handleOpenModal = () => {
    modalRef.current.showModal()
  }

  return (
    <$.InfoContainer>
      <$.RightSide>
        <Avatar>
          <$.ThumbnailContainer>
            {channelThumbnail && <Image alt={channelTitle} src={channelThumbnail} fill />}
          </$.ThumbnailContainer>
        </Avatar>
      </$.RightSide>
      <$.LeftSide>
        <$.ChannelTitle>{channelTitle}</$.ChannelTitle>
        <p>
          <span className='font-extrabold'>{channelUrl} • </span>
          {formattedSubs} suscriptores • {formattedVideos} vídeos
        </p>
        <$.ChannelDescription>{channelDescription}</$.ChannelDescription>
        <Link as='span' className='text-sky-500' hover onClick={handleOpenModal}>
          ver más
        </Link>
        <Modal ref={modalRef} className='sm:modal-middle' backdrop>
          <Modal.Box>
            <$.ModalTitle>Descripción</$.ModalTitle>
            <$.ModalDescription>
              <Markdown remarkPlugins={[remarkGfm, remarkBreaks]}>{channelDescription}</Markdown>
            </$.ModalDescription>
            <Modal.Action>
              <Button className='rounded-lg' soft>
                Cerrar
              </Button>
            </Modal.Action>
          </Modal.Box>
        </Modal>
        <$.StyledButton>Suscríbete</$.StyledButton>
      </$.LeftSide>
    </$.InfoContainer>
  )
}
