import React from 'react'
import { shallow } from 'enzyme'
import SearchBar from './index'

describe('SearchBar component', () => {
  test('should render properly', () => {
    const wrapper = shallow(<SearchBar />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should call onSearch when Icon was clicked', () => {
    const searchMock = jest.fn()
    const wrapper = shallow(<SearchBar onSearch={searchMock} />)
    const icon = wrapper.find('#icon')
    const input = wrapper.find('#input')

    input.simulate('change', { target: { value: 'param' } })
    icon.simulate('click')

    expect(searchMock).toHaveBeenCalledWith('param')
  })
})
