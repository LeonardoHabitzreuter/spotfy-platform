import React from 'react'
import { pipe, defaultTo, head, prop } from 'ramda'
import classNames from 'classnames'

import { DataView, Rating } from 'components'
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
      <div className={classNames('bg-light d-inline-block p-3 ml-lg-3', styles.content)}>
        <h5>Popularity:</h5>
        <Rating number={popularity} className={styles.star} />
        <h5 className='mt-5'>Genres:</h5>
        <label>{genres}</label>
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
