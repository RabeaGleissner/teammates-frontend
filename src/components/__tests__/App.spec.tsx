import * as React from 'react'
import { mount } from 'enzyme';
import { App } from '../App'

test('App renders with teammates', () => {
  const wrapper = mount(<App />)

  expect(wrapper.find('#teammates').length).toEqual(1)
})
