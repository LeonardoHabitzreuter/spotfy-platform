import React from 'react'
import { shallow } from 'enzyme'
import Widget from './index'

describe('Widget component', () => {
  const componentWrappedByBrowserLocation = shallow(
    <Widget title='titleLabel' text='textLabel' className='testClass'>
      <label>Test</label>
    </Widget>
  )
  const wrapper = componentWrappedByBrowserLocation.render()

  test('should render properly', () => {
    expect(componentWrappedByBrowserLocation).toMatchSnapshot()
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
