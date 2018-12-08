import React from 'react'
import classNames from 'classnames'

import Widget from './components/widget'
import { Icon } from 'components'
import styles from './styles.styl'

const Home = () => (
  <main>
    <header>
      <h1 className='text-center'>What are you looking for?</h1>
    </header>
    <section className={classNames('mt-5', styles.widgets)}>
      <Widget className={classNames(styles.greenWidget, 'rounded col-12 col-sm-12 col-md-3 mx-2')} title='Artists' text='Artists'>
        <Icon className='fas fa-users fa-10x float-left mr-2' />
      </Widget>
      <Widget className={classNames(styles.blueWidget, 'rounded col-12 col-sm-12 col-md-3 mx-2')} title='Albums' text='Albums'>
        <Icon className='fas fa-images fa-10x float-left mr-2' />
      </Widget>
      <Widget className={classNames(styles.orangeWidget, 'rounded col-12 col-sm-12 col-md-3 mx-2')} title='Tracks' text='Tracks'>
        <Icon className='fas fa-music fa-10x float-left mr-2' />
      </Widget>
    </section>
  </main>
)

export default Home
