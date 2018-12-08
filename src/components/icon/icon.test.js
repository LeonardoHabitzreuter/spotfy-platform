import React from 'react'
import { shallow } from 'enzyme'
import Icon from './index'

describe('Icon component', () => {
  const wrapper = shallow(<Icon className='some-class' />)

  test('should render properly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should has the same class passed through the props', () => {
    expect(wrapper.props()).toMatchObject({
      className: 'some-class'
    })
  })

  test('should call onClick when clicked', () => {
    const callback = jest.fn()
    const wrapper = shallow(<Icon onClick={callback} />)
    wrapper.simulate('click')
    expect(callback).toHaveBeenCalled()
  })
})
