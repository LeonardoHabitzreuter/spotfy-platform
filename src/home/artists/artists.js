import React, { PureComponent } from 'react'
import { SearchBar, DataView } from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { searchArtists } from './actionCreators'

export class Artists extends PureComponent {
  render () {
    return (
      <main>
        <header>
          <h1>Artists</h1>
          <SearchBar placeholder='search for an artist' onSearch={param => this.props.searchArtists(param)} className='col-md-4 pl-0' />
        </header>
        <DataView items={this.props.artists} className='mt-3' />
      </main>
    )
  }
}

const mapStateToProps = state => ({ artists: state.artists.data })
const mapDispatchToProps = dispatch => bindActionCreators({ searchArtists }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Artists)
