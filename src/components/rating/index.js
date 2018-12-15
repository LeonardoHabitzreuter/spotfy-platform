import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mean, pipe } from 'ramda'

import { Icon } from 'components'

const FullStar = Next => props => props.number > mean([props.min, props.max])
  ? <Icon className={classNames('fas fa-star', props.className)} />
  : <Next {...props} />

const HalfStar = Next => props => props.number > props.min && props.number <= mean([props.min, props.max])
  ? <Icon className={classNames('fas fa-star-half-alt', props.className)} />
  : <Next {...props} />

const EmptyStar = ({ className }) => <Icon className={classNames('far fa-star', className)} />

const EmptyFullOrHalf = pipe(
  HalfStar,
  FullStar
)(EmptyStar)

const Rating = ({ number, className }) => (
  <Fragment>
    <EmptyFullOrHalf min={0} max={20} number={number} className={classNames('text-warning', className)} />
    <EmptyFullOrHalf min={20} max={40} number={number} className={classNames('text-warning', className)} />
    <EmptyFullOrHalf min={40} max={60} number={number} className={classNames('text-warning', className)} />
    <EmptyFullOrHalf min={60} max={80} number={number} className={classNames('text-warning', className)} />
    <EmptyFullOrHalf min={80} max={100} number={number} className={classNames('text-warning', className)} />
  </Fragment>
)

Rating.propTypes = {
  number: PropTypes.number.isRequired,
  className: PropTypes.string
}

export default Rating
