import React, { PureComponent } from 'react'
import classNames from 'classnames'

import { get, store } from 'storage'
import { DataView, Rating, Icon, overlayOnHover } from 'components'
import styles from './styles.styl'
import NoImage from 'assets/icon-no-image.svg'

const FAVORITE_ARTISTS_KEY = 'FAVORITE_ARTISTS'

const Heart = ({ className, fullHeart, onClick }) => <Icon
  className={classNames(fullHeart ? 'fas' : 'far', 'fa-heart text-danger', className)}
  onClick={onClick} />

const ImageOrIcon = ({ imageSrc, ...props }) => {
  if (!imageSrc) {
    return <NoImage />
  }

  const Image = props => <img className={classNames('mb-3', styles.toggleVisibility, props.className)} src={imageSrc} alt={imageSrc} />
  const OverlayImage = overlayOnHover(Image)
  return (
    <OverlayImage>
      <Heart className={classNames('fa-10x', styles.heartOverlay)} {...props} />
    </OverlayImage>
  )
}

class Artist extends PureComponent {
  state = {
    favoriteArtists: []
  }

  constructor (props) {
    super(props)
    this.switchArtistIntoFavoritesList = this.switchArtistIntoFavoritesList.bind(this)
  }

  componentDidMount () {
    get(FAVORITE_ARTISTS_KEY).then(favoriteArtists => {
      if (favoriteArtists) this.setState({ favoriteArtists })
    })
  }

  switchArtistIntoFavoritesList () {
    const updatedState = this.artistIsFavorite()
      ? this.state.favoriteArtists.filter(id => id !== this.props.id)
      : [...this.state.favoriteArtists, this.props.id]

    store(FAVORITE_ARTISTS_KEY, updatedState)
      .then(() => this.setState({ favoriteArtists: updatedState }))
  }

  artistIsFavorite () {
    return this.state.favoriteArtists.includes(this.props.id)
  }

  render () {
    return (
      <DataView.Item className='my-3' name={this.props.name}>
        <ImageOrIcon imageSrc={this.props.imageSrc} onClick={this.switchArtistIntoFavoritesList} fullHeart={this.artistIsFavorite()} />
        <div className={classNames('bg-light d-inline-block p-3 ml-lg-3', styles.content)}>
          <h5>Popularity:</h5>
          <Rating number={this.props.popularity} className={styles.star} />
          <h5 className='mt-4'>Genres:</h5>
          <label>{this.props.genres.join(', ') || 'no genres specified'}</label>
          <h5 className='mt-4'>Actions:</h5>
          <Heart
            className={classNames('fa-5x', styles.actionHeart)}
            onClick={this.switchArtistIntoFavoritesList}
            fullHeart={this.artistIsFavorite()}
          />
        </div>
      </DataView.Item>
    )
  }
}

export default Artist
