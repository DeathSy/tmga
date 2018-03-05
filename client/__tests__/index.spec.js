/* global describe it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Index from '../pages'

describe('Test Root Component', () => {
  it('should render Home component', () => {
    const index = renderer.create(<Index />)
    const tree = index.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
