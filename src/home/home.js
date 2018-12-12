import React from 'react'
import classNames from 'classnames'

import Widget from './components/widget'
import { Icon } from 'components'
import styles from './styles.styl'

const widgetsClasses = 'rounded text-center col-12 col-sm-12 col-md-3'
const iconsClasses = 'fa-10x'

const Home = () => (
  <main>
    <header>
      <h1 className='text-center'>What are you looking for?</h1>
    </header>
    <section className={classNames('mt-5', styles.widgets)}>
      <Widget className={classNames(styles.greenWidget, widgetsClasses)} id='artists' title='Artists' text='Artists'>
        <Icon className={classNames('fas fa-users', iconsClasses)} />
      </Widget>
      <Widget className={classNames(styles.blueWidget, widgetsClasses)} id='albums' title='Albums' text='Albums'>
        <Icon className={classNames('fas fa-images', iconsClasses)} />
      </Widget>
      <Widget className={classNames(styles.orangeWidget, widgetsClasses)} id='tracks' title='Tracks' text='Tracks'>
        <Icon className={classNames('fas fa-music', iconsClasses)} />
      </Widget>
    </section>
  </main>
)

export default Home
