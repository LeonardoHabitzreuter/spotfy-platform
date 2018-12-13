import React from 'react'
import { shallow } from 'enzyme'
import Widget from './index'

describe('Widget component', () => {
  const wrapper = shallow(
    <Widget title='titleLabel' text='textLabel' className='testClass'>
      <label>Test</label>
    </Widget>
  )

  test('should render properly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should render children', () => {
    expect(wrapper.exists('label')).toBeTruthy()
  })
  
  test('should has the class passed through the props', () => {
    expect(wrapper.hasClass('testClass')).toBeTruthy()
  })

  test('should render the title as a h1 tag', () => {
    const title = wrapper.find('#title')

    expect(title.text()).toBe('titleLabel')
    expect(title.is('h1')).toBeTruthy()
  })

  test('should render the text as a p tag', () => {
    const text = wrapper.find('#text')

    expect(text.text()).toBe('textLabel')
    expect(text.is('p')).toBeTruthy()
  })
})
