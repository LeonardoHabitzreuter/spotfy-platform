import React from 'react'
import classNames from 'classnames'
import styles from './styles.styl'

const overlayOnHover = (WrappedComponent) => {
  const OverlayOnHoverComponent = ({ children, ...props }) => (
    <div className='d-inline position-relative'>
      <div className={classNames('d-inline-block position-relative', styles.visibilityToggle)}>
        <WrappedComponent className={classNames(props.className, styles.wrapper)} {...props} />
      </div>
      {React.Children.map(children, child => ({
        ...child,
        props: {
          ...child.props,
          className: classNames('position-absolute', child.props.className, styles.overlayElement)
        }
      }))}
    </div>
  )

  return OverlayOnHoverComponent
}

export default overlayOnHover
