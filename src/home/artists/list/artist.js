import React from 'react'
import classNames from 'classnames'

import { DataView, Rating, Icon, overlayOnHover } from 'components'
import styles from './styles.styl'

const Image = imageSrc => props => <img className={classNames('mb-3', styles.toggleVisibility, props.className)} src={imageSrc} alt={imageSrc} />

const ImageOrIcon = ({ imageSrc }) => {
  if (!imageSrc) {
    return <Icon className={classNames('far fa-file-image fa-10x', styles.toggleVisibility)} />
  }

  const OverlayImage = overlayOnHover(Image(imageSrc))
  return (
    <OverlayImage>
      <Icon className={classNames('far fa-heart fa-10x text-danger', styles.heart)} />
    </OverlayImage>
  )
}

const Artist = ({ name, imageSrc, genres, popularity }) => (
  <DataView.Item className='my-3' name={name} imageSrc={imageSrc}>
    <ImageOrIcon imageSrc={imageSrc} />
    <div className={classNames('bg-light d-inline-block p-3 ml-lg-3', styles.content)}>
      <h5>Popularity:</h5>
      <Rating number={popularity} className={styles.star} />
      <h5 className='mt-5'>Genres:</h5>
      <label>{genres.join(', ') || 'no genres specified'}</label>
    </div>
  </DataView.Item>
)

export default Artist
