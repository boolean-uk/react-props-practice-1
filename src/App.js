import { useState } from 'react'

import './styles.css'

import Title from './Title'
import NameLength from './NameLengths'
import NameReversed from './NameReversed'

export default function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      <Title name = {name} />
      <NameLength name = {name} length = {name.length} />
      <NameReversed name = {name} />
    </div>
  )
}
