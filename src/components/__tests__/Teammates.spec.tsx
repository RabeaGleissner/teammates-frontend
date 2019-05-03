import * as React from 'react'
import { mount } from 'enzyme';
import { Teammates } from '../Teammates'
import { template } from '@babel/core';

test('Renders list of teammates', () => {
    const teammatesList = [{ name: 'mate 2', timeZone: 'UK' }, { name: 'mate 2', timeZone: 'US' }]
    const wrapper = mount(<Teammates teammates={teammatesList} />)

    expect(wrapper.find('li').length).toEqual(teammatesList.length)
})
