import { useState } from 'react'

import Title from './Title'
import NameLength from './NameLength'
import NameReversed from './NameReversed'

import './styles.css'


export default function App() {
  const [name] = useState('Nicolas')

  return (
    <div className="app">
      <Title name={name} />
      <NameLength name={name} />
      <NameReversed name={name} />
    </div>
  )
}
