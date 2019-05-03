import * as React from 'react'
import { Teammates } from './Teammates'

export const App = () => (
  <Teammates
    teammates={[
      { name: 'mate 1', timeZone: 'UK' },
      { name: 'mate 2', timeZone: 'US' }
    ]}
  />
)
