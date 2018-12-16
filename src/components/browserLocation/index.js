const BrowserLocation = props => (
  props.render({
    goTo: window.location.replace,
    pathname: window.location.pathname,
    changePathName: pathName => window.location.replace(`${window.location.origin}${pathName}`)
  })
)

export default BrowserLocation
