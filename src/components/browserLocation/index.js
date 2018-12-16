import { pipe, concat, when, includes, not } from 'ramda'

const goTo = pathName => window.location.replace(pathName)

const changePathName = pipe(
  when(
    pipe(
      includes('/'),
      not
    ),
    concat('/')
  ),
  concat(window.location.origin),
  goTo
)

const BrowserLocation = props => (
  props.render({
    goTo,
    pathname: window.location.pathname,
    changePathName
  })
)

export default BrowserLocation
