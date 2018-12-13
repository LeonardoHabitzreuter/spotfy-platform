import React from 'react'
import { shallow } from 'enzyme'
import DataViewList from './index'

describe('DataViewList component', () => {
  const wrapper = shallow(
    <DataViewList><label>Test</label></DataViewList>
  )

  test('should render properly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should render children', () => {
    expect(wrapper.exists('label')).toBeTruthy()
  })

  test('should contains a reference to the item component', () => {
    expect(DataViewList.Item).not.toBeUndefined()
  })
})
