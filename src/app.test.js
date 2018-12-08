import React from 'react'
import { shallow } from 'enzyme'
import App from './app'

describe('alert component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
})
