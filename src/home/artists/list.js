import React from 'react'
import { pipe, defaultTo, head, prop } from 'ramda'

import { DataView } from 'components'

const getImageUrl = pipe(
  head,
  defaultTo({}),
  prop('url')
)

const Artist = ({ name, images }) => {
  const imageSrc = getImageUrl(images)

  return <DataView.Item className='my-3' name={name} imageSrc={imageSrc} />
}

const ArtistsList = ({ artists }) => (
  <DataView className='mt-3'>
    {artists.map(artist => <Artist key={artist.id} {...artist} />)}
  </DataView>
)

export default ArtistsList
