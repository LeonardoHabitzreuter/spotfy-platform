import React from 'react'
import { shallow } from 'enzyme'
import DataViewItem from './index'
import Icon from '../../icon'

describe('DataViewItem component', () => {
  const wrapper = shallow(<DataViewItem id='1' />)

  test('should render properly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should render a generic image icon when no image was passed', () => {
    const icon = wrapper.find(Icon)

    expect(icon).not.toBeNull()
  })
})
