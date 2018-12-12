import reducers from './reducers'
import { SEARCH_ARTISTS, TOGGLE_ARTISTS_LOADING } from 'actions'

describe('Artists reducers', () => {
  describe('some action not related to artists', () => {
    const someTestAction = { type: 'someTestAction' }
  
    test('should return the initial state when state is undefined', () => {
      const state = reducers(undefined, someTestAction)
  
      expect(state).toMatchObject({ data: [], loading: false })
    })

    test('should return the passed state when state is not undefined', () => {
      const state = reducers({ test: 'test' }, someTestAction)
  
      expect(state).toMatchObject({ test: 'test' })
    })
  })

  describe('toggle loading action', () => {
    const toggleLoadingAction = { type: TOGGLE_ARTISTS_LOADING }

    test('should return false when the current state of loading is true', () => {
      const state = reducers({ loading: false }, toggleLoadingAction)
  
      expect(state).toMatchObject({ loading: true })
    })

    test('should return true when the current state of loading is false', () => {
      const state = reducers({ loading: true }, toggleLoadingAction)
  
      expect(state).toMatchObject({ loading: false })
    })

    test('should always return other state props', () => {
      const state = reducers({ notRelatedProp: 'test', loading: true }, toggleLoadingAction)
  
      expect(state).toMatchObject({ notRelatedProp: 'test' })
    })
  })

  describe('search artists action', () => {
    const searchArtistsAction = {
      type: SEARCH_ARTISTS,
      payload: { data: { artists: {
        items: ['linkin park', 'eminem']
      }}}
    }

    test('should return a prop called data containing all the artists', () => {
      const state = reducers(undefined, searchArtistsAction)
  
      expect(state.data).toEqual(expect.arrayContaining(['linkin park', 'eminem']))
    })

    test('should return loading equals false', () => {
      const state = reducers(undefined, searchArtistsAction)
  
      expect(state).toMatchObject({ loading: false })
    })

    test('should always return other state props', () => {
      const state = reducers({ notRelatedProp: 'test' }, searchArtistsAction)
  
      expect(state).toMatchObject({ notRelatedProp: 'test' })
    })
  })
})
