import React from 'react'
import { pipe, defaultTo, head, prop } from 'ramda'

import { DataView } from 'components'
import Artist from './artist'

const getImageUrl = pipe(
  head,
  defaultTo({}),
  prop('url')
)

const ArtistsList = ({ artists }) => (
  <DataView className='mt-3'>
    {artists.map(artist => <Artist key={artist.id} imageSrc={getImageUrl(artist.images)} {...artist} />)}
  </DataView>
)

export default ArtistsList
