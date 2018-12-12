import React, { PureComponent } from 'react'
import { SearchBar, Spinner } from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { searchArtists } from './actionCreators'
import List from './list'

export class Artists extends PureComponent {
  constructor (props) {
    super(props)
    this.onSearch = this.onSearch.bind(this)
  }

  state = {
    loading: false
  }

  toggleLoading () {
    this.setState({ loading: !this.state.loading })
  }

  onSearch (param) {
    this.toggleLoading()
    this.props.searchArtists(param)
  }

  render () {
    return (
      <main>
        <header>
          <h1>Artists</h1>
          <SearchBar placeholder='search for an artist' onSearch={this.onSearch} className='col-md-4 pl-0' />
        </header>
        <Spinner loading={this.state.loading} />
        <List artists={this.props.artists} />
      </main>
    )
  }
}

const mapStateToProps = state => ({ artists: state.artists.data })
const mapDispatchToProps = dispatch => bindActionCreators({ searchArtists }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Artists)
