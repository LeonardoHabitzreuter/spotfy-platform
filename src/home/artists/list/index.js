import React from 'react'
import { pipe, defaultTo, head, prop } from 'ramda'
import classNames from 'classnames'

import { DataView } from 'components'
import styles from './styles.styl'

const getImageUrl = pipe(
  head,
  defaultTo({}),
  prop('url')
)

const Artist = ({ name, images, genres, popularity }) => {
  const imageSrc = getImageUrl(images)

  return (
    <DataView.Item className='my-3' name={name} imageSrc={imageSrc}>
      <div className={classNames('bg-light p-5', styles.content)}>
        <label>{genres}</label>
        <label>{popularity}</label>
      </div>
    </DataView.Item>
  )
}

const ArtistsList = ({ artists }) => (
  <DataView className='mt-3'>
    {artists.map(artist => <Artist key={artist.id} {...artist} />)}
  </DataView>
)

export default ArtistsList
