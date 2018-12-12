import React from 'react'
import { SearchBar, Spinner } from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { searchArtists } from './actionCreators'
import List from './list'

export const Artists = ({ artists, loading, searchArtists }) => (
  <main className='pl-3'>
    <header>
      <h1>Artists</h1>
      <SearchBar placeholder='search for an artist' onSearch={param => searchArtists(param)} className='col-md-4 pl-0' />
    </header>
    <Spinner loading={loading} />
    <List artists={artists} />
  </main>
)

const mapStateToProps = state => ({ artists: state.artists.data, loading: state.artists.loading })
const mapDispatchToProps = dispatch => bindActionCreators({ searchArtists }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Artists)
