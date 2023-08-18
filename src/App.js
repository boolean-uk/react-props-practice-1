import { useState } from 'react'

import './styles.css'
import Title from './Title'
import NameLength from './Name-length'
import NameReversed from './Name-reversed'

export default function App() {
  const [name, setName] = useState('Kevin')

  return (
    <div className="app">
      <Title name={name} />
      <NameLength name={name} />
      <NameReversed name={name}/>
    </div>
  )
}
